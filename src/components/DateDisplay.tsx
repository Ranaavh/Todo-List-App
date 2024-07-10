import React from 'react';

const DateDisplay: React.FC = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  return <p className="text-sm text-gray-600 mt-4 mb-4 text-left">{getCurrentDate()}</p>;
};

export default DateDisplay;
