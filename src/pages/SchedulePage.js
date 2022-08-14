import React from 'react';
import { useSchedule } from '../hooks/schedule';

function SchedulePage() {
  const { getSchedules, add, destory, edit } = useSchedule();

  const onAdd = () => {
    const titleResult = prompt('제목 입력하삼');
    if (!titleResult) {
      return;
    }

    const contentResult = prompt('내용 입력하삼');
    if (!contentResult) {
      return;
    }

    const addSchedule = {
      title: titleResult,
      content: contentResult,
    };

    add(addSchedule);
  };

  const onUpdate = schedule => {
    const titleResult = prompt('수정할 제목', schedule.title);
    if (!titleResult) {
      return;
    }

    const contentResult = prompt('수정할 내용', schedule.content);
    if (!contentResult) {
      return;
    }

    const updateSchedule = {
      ...schedule,
      title: titleResult,
      content: contentResult,
    };

    edit(updateSchedule);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[20rem] min-h-[25rem] bg-yellow-300 p-2 relative">
        <button
          className="absolute top-2 right-2 bg-white p-1"
          onClick={() => onAdd()}
        >
          생성
        </button>
        <div className="text-center text-2xl mb-2">todo list</div>
        <div
          className="w-full bg-white
        "
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
                    <button onClick={() => destory(schedule.id)}>삭제</button>
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
