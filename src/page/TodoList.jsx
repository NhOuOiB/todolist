import React, { useEffect, useState, useRef } from 'react';
import ProcessBar from '../component/ProcessBar';
import Todos from '../component/Todos';
import AddToList from '../component/AddToList';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // todos排序
  const [MoveDoneToEnd, setMoveDoneToEnd] = useState(false);
  
  const sortTodos = () => {
    // 完成移至最後
    if (MoveDoneToEnd) {
      const done = todos.filter((todo) => todo.done);
      const undone = todos.filter((todo) => !todo.done);
      const newTodos = [...undone, ...done];
      setTodos(newTodos);
    } else {
      // 依時間排序
      const newTodos = [...todos].sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
      });
      setTodos(newTodos);
    }
  };

  useEffect(() => {
    sortTodos();
  }, [MoveDoneToEnd]);

  // 捲動到最底部
  const todoRef = useRef();
  const shouldScrollRef = useRef(false);

  useEffect(() => {
    if (shouldScrollRef.current && todoRef.current) {
      todoRef.current.scrollTop = todoRef.current.scrollHeight; // 滾動到底部
      shouldScrollRef.current = false;
    }
  }, [todos]);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full sm:w-3/4 md:w-3/5 xl:w-2/5 2xl:w-1/4 p-5">
        <div className="">
          <div className="text-3xl">Todo List</div>
          <div className="text-gray-400 text-sm">Add things to do</div>
          <hr className="border border-gray-400 mt-2" />
        </div>
        <ProcessBar todos={todos} />
        <Todos todos={todos} setTodos={setTodos} todoRef={todoRef} />
        {/* 完成移至最後 開始 */}
        <hr className="border border-gray-400 my-4" />
        <div className="flex justify-end items-center gap-1">
          <div className="text-sm">Move done things to end?</div>
          <div
            className="w-9 h-5 rounded-full p-0.5 bg-white"
            onClick={() => {
              setMoveDoneToEnd(!MoveDoneToEnd);
            }}
          >
            <div
              className={`w-1/2 h-full bg-indigo-200 rounded-full transition duration-300 ${
                MoveDoneToEnd && ' translate-x-full bg-indigo-500'
              }`}
            ></div>
          </div>
        </div>
        {/* 完成移至最後 結束 */}
        <AddToList todos={todos} setTodos={setTodos} shouldScrollRef={shouldScrollRef} />
      </div>
    </div>
  );
};

export default TodoList;
