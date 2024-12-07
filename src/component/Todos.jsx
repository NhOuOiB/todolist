import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { MDCCheckbox } from '@material/checkbox';

const Todos = ({ todos, setTodos, todoRef }) => {
  // 刪除todo
  const handleDelete = (e, time) => {
    e.stopPropagation();

    const newTodos = todos.filter((todo) => todo.time !== time);
    setTodos(newTodos);
  };
  // todo完成狀態切換
  const handleToggle = (e, time) => {
    const newTodos = todos.map((todo) => {
      if (todo.time === time) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div
      className="min-h-[15.5rem] max-h-[15.5rem] flex flex-col gap-2 overflow-y-scroll"
      ref={todoRef}
    >
      {todos?.map((todo) => (
        <div
          className="border h-14 min-h-14 rounded flex justify-between items-center bg-white"
          onClick={(e) => handleToggle(e, todo.time)}
          key={todo.time}
        >
          <div className="h-full flex items-center gap-4" key={todo.time}>
            <div className="w-1 h-full bg-[#7890cb] rounded-s"></div>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(e) => handleToggle(e, todo.time)}
            />
            <div className={`${todo.done && 'line-through'}`}>{todo.text}</div>
          </div>
          <div className="cursor-pointer p-1 mr-4" onClick={(e) => handleDelete(e, todo.time)}>
            <IconContext.Provider value={{ className: 'cursor-pointer' }}>
              <IoMdClose />
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
