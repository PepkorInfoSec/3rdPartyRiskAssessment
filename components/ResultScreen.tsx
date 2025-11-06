import React from 'react';
import { Tier } from '../types';
import { TIER_DEFINITIONS } from '../constants';
import { CopyButton } from './CopyButton';

interface ResultScreenProps {
  tier: Tier;
  onReset: () => void;
}

const TierIcon: React.FC<{ tier: Tier }> = ({ tier }) => {
  const tierClasses = {
    [Tier.One]: 'text-red-500',
    [Tier.Two]: 'text-orange-400',
    [Tier.Three]: 'text-cyan-400',
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 ${tierClasses[tier]}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ tier, onReset }) => {
  const tierDetails = TIER_DEFINITIONS[tier];
  
  const convertToTsv = () => {
    const headerRow = tierDetails.headers.join('\t');
    const bodyRows = tierDetails.requirements.map(row => row.join('\t')).join('\n');
    return `${headerRow}\n${bodyRows}`;
  };

  const questionsAsTsv = convertToTsv();

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-400/20 p-4 sm:p-8 rounded-xl shadow-lg w-full animate-fade-in shadow-cyan-500/10">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <TierIcon tier={tier} />
        </div>
        <h1 className="text-3xl font-bold text-slate-100">
          {tierDetails.title}
        </h1>
        <p className="text-slate-400 mt-2 max-w-prose mx-auto">
          {tierDetails.description}
        </p>
      </div>

      <div className="bg-slate-900/70 p-4 sm:p-6 rounded-lg border border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-200">
            Requirements for Vendor
          </h2>
          <CopyButton textToCopy={questionsAsTsv} />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-slate-300 uppercase bg-slate-800/60">
              <tr>
                {tierDetails.headers.map((header, index) => (
                  <th key={index} scope="col" className="px-4 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tierDetails.requirements.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b last:border-b-0 border-slate-700 hover:bg-slate-800/40">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onReset}
          className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          Start New Assessment
        </button>
      </div>
    </div>
  );
};