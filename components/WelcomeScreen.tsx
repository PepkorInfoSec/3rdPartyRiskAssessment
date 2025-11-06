import React from 'react';
import { Logo } from './Logo';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 p-8 rounded-xl shadow-lg text-center animate-fade-in shadow-cyan-500/10">
      <div className="flex justify-center mb-4">
        <Logo className="h-16 w-16 text-cyan-400" />
      </div>
      <h1 className="text-3xl font-bold text-slate-100 mb-2">
        Vendor Risk Assessment
      </h1>
      <p className="text-slate-400 mb-6 max-w-md mx-auto">
        Answer 6 simple questions to determine the risk tier of a new vendor and get the required follow-up questions.
      </p>
      <button
        onClick={onStart}
        className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
      >
        Start Assessment
      </button>
    </div>
  );
};