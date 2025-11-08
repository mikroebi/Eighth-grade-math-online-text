import React from 'react';
import { useState } from 'react';
import { CHAPTERS } from '../constants';
import { ALL_QUESTIONS } from '../data/questions';

interface ChapterSelectorProps {
  onStartQuiz: (selectedChapterIds: number[], totalQuestions: number) => void;
}

const ChapterSelector = ({ onStartQuiz }: ChapterSelectorProps) => {
  const [selectedChapters, setSelectedChapters] = useState<Set<number>>(new Set());
  const [totalQuestions, setTotalQuestions] = useState<number>(10);
  const [error, setError] = useState<string>('');
  
  const availableQuestionsCount = CHAPTERS.filter(c => selectedChapters.has(c.id))
                                       .reduce((acc, c) => acc + ALL_QUESTIONS.filter(q => q.chapter === c.id).length, 0);

  const handleChapterToggle = (chapterId: number) => {
    const newSelection = new Set(selectedChapters);
    if (newSelection.has(chapterId)) {
      newSelection.delete(chapterId);
    } else {
      newSelection.add(chapterId);
    }
    setSelectedChapters(newSelection);
    if (error && newSelection.size > 0) {
        setError('');
    }
  };

  const handleStart = () => {
    if (selectedChapters.size === 0) {
        setError('لطفاً حداقل یک فصل را انتخاب کنید.');
        return;
    }
    onStartQuiz(Array.from(selectedChapters), Math.min(totalQuestions, availableQuestionsCount));
  };
  
  const handleSelectAll = () => {
    if(selectedChapters.size === CHAPTERS.length) {
        setSelectedChapters(new Set());
    } else {
        setSelectedChapters(new Set(CHAPTERS.map(c => c.id)));
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 text-center">
      <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">انتخاب فصل‌ها</h2>
      <p className="text-slate-500 dark:text-slate-400">فصل یا فصل‌هایی که می‌خواهید از آنها آزمون دهید را انتخاب کنید.</p>
      
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
        {CHAPTERS.map(chapter => (
          <label
            key={chapter.id}
            className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedChapters.has(chapter.id)
                ? 'bg-sky-100 border-sky-500 dark:bg-sky-900 dark:border-sky-400 shadow-md'
                : 'bg-slate-50 border-slate-200 dark:bg-slate-700 dark:border-slate-600 hover:border-sky-400'
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={selectedChapters.has(chapter.id)}
              onChange={() => handleChapterToggle(chapter.id)}
            />
            <span className="font-medium text-slate-700 dark:text-slate-200">{chapter.name.split(':')[0]}</span>
            <span className="block text-sm text-slate-500 dark:text-slate-400">{chapter.name.split(':')[1]}</span>
          </label>
        ))}
      </div>
       <div className="w-full flex justify-center">
        <button
          onClick={handleSelectAll}
          className="px-4 py-2 text-sm font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 dark:text-sky-200 dark:bg-sky-800 dark:hover:bg-sky-700 transition-colors"
        >
          {selectedChapters.size === CHAPTERS.length ? 'لغو انتخاب همه' : 'انتخاب همه'}
        </button>
      </div>

      <div className="w-full pt-4 space-y-3">
        <label htmlFor="questions-count" className="font-medium text-slate-700 dark:text-slate-200">تعداد کل سوالات آزمون: <span className="text-sky-500 font-bold">{totalQuestions}</span></label>
        <input
          id="questions-count"
          type="range"
          min="5"
          max={Math.max(5, availableQuestionsCount)}
          step="1"
          value={totalQuestions}
          onChange={(e) => setTotalQuestions(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
          disabled={availableQuestionsCount === 0}
        />
        <p className="text-sm text-slate-500">تعداد سوالات موجود برای فصل‌های انتخابی: {availableQuestionsCount}</p>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        onClick={handleStart}
        className="w-full sm:w-auto px-12 py-3 text-lg font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
      >
        شروع آزمون
      </button>
    </div>
  );
};

export default ChapterSelector;