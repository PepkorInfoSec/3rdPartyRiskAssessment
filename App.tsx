import React, { useState, useCallback } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';
import { ASSESSMENT_QUESTIONS } from './constants';
import { Tier } from './types';

type AppState = 'welcome' | 'questions' | 'result';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resultTier, setResultTier] = useState<Tier | null>(null);

  const calculateTier = useCallback((finalAnswers: boolean[]) => {
    const sectionAAnswers = finalAnswers.slice(0, 3);
    const sectionBAnswers = finalAnswers.slice(3, 6);

    // If 'Yes' to ANY question in Section A -> Tier 1
    if (sectionAAnswers.includes(true)) {
      return Tier.One;
    }
    
    // If 'No' to ALL in Section A, but 'Yes' to ANY in Section B -> Tier 2
    if (sectionBAnswers.includes(true)) {
      return Tier.Two;
    }

    // If 'No' to ALL questions -> Tier 3
    return Tier.Three;
  }, []);

  const handleStart = () => {
    setAppState('questions');
  };

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const tier = calculateTier(newAnswers);
      setResultTier(tier);
      setAppState('result');
    }
  };

  const handleReset = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setResultTier(null);
    setAppState('welcome');
  };

  const renderContent = () => {
    switch (appState) {
      case 'questions':
        return (
          <QuestionScreen
            question={ASSESSMENT_QUESTIONS[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={ASSESSMENT_QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case 'result':
        return resultTier ? (
          <ResultScreen tier={resultTier} onReset={handleReset} />
        ) : null;
      case 'welcome':
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;