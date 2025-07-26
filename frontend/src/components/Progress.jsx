import React from 'react';

const Progress = ({ progress = 0, total = 5, color, bgColor }) => {
  return (
    <div className="flex gap-1.5">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded transition-all ${
            index < progress ? 'bg-emerald-500' : 'bg-emerald-100'
          }`}
          style={{
            backgroundColor:
              index < progress
                ? color || 'rgba(16,185,129,1)'         // emerald-500
                : bgColor || 'rgba(209,250,229,1)'      // emerald-100
          }}
        />
      ))}
    </div>
  );
};

export default Progress;
