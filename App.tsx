import React from 'react';
import { useState } from 'react';
import ChapterSelector from './components/ChapterSelector';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { ALL_QUESTIONS } from './data/questions';
import type { Question } from './types';
import { CHAPTERS } from './constants';

type GameState = 'selecting' | 'quizzing' | 'finished';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};


function App() {
  const [gameState, setGameState] = useState<GameState>('selecting');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [finalScore, setFinalScore] = useState<number>(0);

  const handleStartQuiz = (selectedChapterIds: number[], totalQuestions: number) => {
    if (selectedChapterIds.length === 0) return;

    const availableQuestions = selectedChapterIds.flatMap(chapterId => {
        return ALL_QUESTIONS.filter(q => q.chapter === chapterId);
    });
    
    const selectedQuestions = shuffleArray(availableQuestions).slice(0, totalQuestions);
    
    setQuizQuestions(selectedQuestions);
    setUserAnswers({});
    setGameState('quizzing');
  };

  const handleFinishQuiz = (answers: Record<string, string>) => {
    setUserAnswers(answers);
    let correctAnswers = 0;
    quizQuestions.forEach(question => {
      if (answers[question.id] === question.correctOptionId) {
        correctAnswers++;
      }
    });

    const score = quizQuestions.length > 0 ? (correctAnswers / quizQuestions.length) * 20 : 0;
    setFinalScore(parseFloat(score.toFixed(2)));
    setGameState('finished');
  };

  const handleRestart = () => {
    setGameState('selecting');
    setQuizQuestions([]);
    setUserAnswers({});
    setFinalScore(0);
  };
  
  const renderGameState = () => {
    switch (gameState) {
      case 'selecting':
        return <ChapterSelector onStartQuiz={handleStartQuiz} />;
      case 'quizzing':
        return <Quiz questions={quizQuestions} onFinishQuiz={handleFinishQuiz} />;
      case 'finished':
        return <Results questions={quizQuestions} userAnswers={userAnswers} score={finalScore} onRestart={handleRestart} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-2xl mx-auto">
        <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-sky-600 dark:text-sky-400">آزمون ریاضی پایه هشتم</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">دانش خود را بسنجید!</p>
        </header>
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 transition-all duration-300">
          {renderGameState()}
        </div>
         <footer className="text-center mt-8 text-sm text-slate-500">
            <p>طراحی و توسعه توسط مهندس ارشد فرانت‌اند با Gemini</p>
        </footer>
      </main>
    </div>
  );
}

export default App;