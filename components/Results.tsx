import React from 'react';
import type { Question } from '../types';

interface ResultsProps {
  questions: Question[];
  userAnswers: Record<string, string>;
  score: number;
  onRestart: () => void;
}

const Results = ({ questions, userAnswers, score, onRestart }: ResultsProps) => {
  const getScoreColor = () => {
    if (score >= 15) return 'text-green-500';
    if (score >= 10) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">نتیجه آزمون</h2>
      <div className="text-center">
        <p className="text-lg text-slate-600 dark:text-slate-300">نمره شما:</p>
        <p className={`text-6xl font-bold ${getScoreColor()}`}>{score} <span className="text-3xl">/ 20</span></p>
      </div>

      <div className="w-full space-y-4 max-h-96 overflow-y-auto p-2">
        {questions.map((question, index) => {
          const userAnswerId = userAnswers[question.id];
          const isCorrect = userAnswerId === question.correctOptionId;
          const userAnswerText = question.options.find(opt => opt.id === userAnswerId)?.text || 'پاسخ نداده';
          const correctAnswerText = question.options.find(opt => opt.id === question.correctOptionId)?.text;

          return (
            <div key={question.id} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/50' : 'bg-red-50 dark:bg-red-900/50'}`}>
              <p className="font-semibold text-slate-700 dark:text-slate-200">{index + 1}. {question.text}</p>
              <p className={`mt-2 text-sm ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                پاسخ شما: {userAnswerText}
                {isCorrect ? ' (صحیح)' : ''}
              </p>
              {!isCorrect && (
                <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">پاسخ صحیح: {correctAnswerText}</p>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        className="w-full sm:w-auto px-12 py-3 text-lg font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
      >
        آزمون مجدد
      </button>
    </div>
  );
};

export default Results;