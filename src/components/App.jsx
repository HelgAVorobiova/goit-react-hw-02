import { useState, useEffect } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = localStorage.getItem('feedback');
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

const updateFeedback = feedbackType => {
  return setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
};

  const resetFeedback = () =>
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  const btnOption = Object.keys(feedback);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeetback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        btnOption={btnOption}
        onClickFeetback={updateFeedback}
        onResetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeetback={positiveFeetback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
