import React from 'react';

const ProcessBar = ({ todos }) => {
  const doneCount = todos.filter((todo) => todo.done).length;
  const percentage = todos.length === 0 ? 0 : Math.floor((doneCount / todos.length) * 100);
  return (
    <div className="my-4 flex items-center">
      <div className="min-w-12 flex gap-1">
        <div className="w-full flex justify-end">{percentage}</div>
        <div>%</div>
      </div>
      <div className="w-full h-4 ml-2 bg-white rounded-full border relative">
        <div className="w-full h-full rounded-full absolute"></div>
        <div
          className="h-full bg-[#94abf8] rounded-full transition duration-300 scale-x-1"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProcessBar;
