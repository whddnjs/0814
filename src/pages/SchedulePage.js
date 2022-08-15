import React from 'react';
import { useSchedulePage } from './SchedulePage.service';

function SchedulePage() {
  const { getSchedules, onAdd, onUpdate, onDelete } = useSchedulePage();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[20rem] min-h-[25rem] bg-yellow-300 p-2 relative">
        <button
          className="absolute p-1 bg-white top-2 right-2"
          onClick={() => onAdd()}
        >
          생성
        </button>
        <div className="mb-2 text-2xl text-center">todo list</div>
        <div
          className="w-full bg-white "
        >
          <div className="flex justify-between font-bold">
            <div>제목</div>
            <div>내용</div>
            <div>수정</div>
            <div>삭제</div>
          </div>
          <ul>
            {getSchedules().map(schedule => {
              return (
                <li className="flex justify-between" key={schedule.id}>
                  <div>{schedule.title}</div>
                  <div>{schedule.content}</div>
                  <div>
                    <button onClick={() => onUpdate(schedule)}>수정</button>
                  </div>
                  <div>
                    <button onClick={() => onDelete(schedule.id)}>삭제</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
