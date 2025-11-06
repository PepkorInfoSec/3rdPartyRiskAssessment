import React from 'react';
import { AssessmentQuestion } from '../types';
import { ProgressBar } from './ProgressBar';

interface QuestionScreenProps {
  question: AssessmentQuestion;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, currentQuestion, totalQuestions, onAnswer }) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 p-8 rounded-xl shadow-lg w-full animate-fade-in-up shadow-cyan-500/10">
      <ProgressBar current={currentQuestion} total={totalQuestions} />
      <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center uppercase tracking-widest">
        Section {question.section}
      </h3>
      <p className="text-sm font-semibold text-slate-400 mb-4 text-center">
        Question {currentQuestion} of {totalQuestions}
      </p>
      <h2 className="text-2xl text-center font-medium text-slate-100 mb-8 min-h-[6rem] flex items-center justify-center">
        {question.text}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => onAnswer(true)}
          className="w-full sm:w-32 bg-green-500/80 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        >
          Yes
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="w-full sm:w-32 bg-red-500/80 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
        >
          No
        </button>
      </div>
    </div>
  );
};