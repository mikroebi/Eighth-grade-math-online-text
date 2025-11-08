import React from 'react';
import { useState } from 'react';
import type { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onFinishQuiz: (answers: Record<string, string>) => void;
}

const Quiz = ({ questions, onFinishQuiz }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers({ ...answers, [currentQuestion.id]: optionId });
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(answers[questions[currentQuestionIndex+1]?.id] || null);
    } else {
      onFinishQuiz(answers);
    }
  };

  if (totalQuestions === 0) {
    return (
        <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300">سوالی برای فصل‌های انتخاب شده یافت نشد.</p>
            <button onClick={() => window.location.reload()} className="mt-4 px-6 py-2 text-white bg-sky-600 rounded-lg hover:bg-sky-700">بازگشت</button>
        </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      {/* Progress Bar */}
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-sky-700 dark:text-white">پیشرفت</span>
          <span className="text-sm font-medium text-sky-700 dark:text-white">سوال {currentQuestionIndex + 1} از {totalQuestions}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
          <div className="bg-sky-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{currentQuestion.text}</h3>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentQuestion.options.map(option => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`w-full p-4 text-right rounded-lg border-2 transition-all duration-200 ${
              selectedOption === option.id
                ? 'bg-sky-100 border-sky-500 dark:bg-sky-900 dark:border-sky-400 ring-2 ring-sky-500'
                : 'bg-white border-slate-300 dark:bg-slate-800 dark:border-slate-600 hover:border-sky-400 dark:hover:border-sky-500'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="px-8 py-3 font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-600 transition-all duration-200 shadow-md disabled:shadow-none"
        >
          {currentQuestionIndex < totalQuestions - 1 ? 'بعدی' : 'پایان آزمون'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;