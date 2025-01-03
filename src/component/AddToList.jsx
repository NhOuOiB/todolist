import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const AddToList = ({ text, handleInput, handleAdd }) => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="mb-1">Add to list</div>
      <div className="h-12 flex items-center gap-1">
        <input
          type="text"
          className="w-full h-full rounded border px-2"
          value={text}
          onInput={(e) => handleInput(e)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <div
          className="w-16 h-full flex justify-center items-center bg-[#7890cb] hover:bg-[#5c7ccf] rounded border cursor-pointer"
          onClick={handleAdd}
        >
          <IconContext.Provider value={{ className: 'text-white text-xl' }}>
            <AiOutlinePlus />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default AddToList;
