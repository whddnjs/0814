import React from 'react';
import { useSchedule } from '../hooks/schedule';

function SchedulePage() {
  const { getSchedules, add, destory, edit } = useSchedule();

  // 수정을 눌렀을 때 작동하는 함수 선언
  // 1. 프롬프트 창을 두번 띄운다. 프롬프트창엔 수정할 제목, 내용이 순서대로 나온다.
  // 취소시에 함수를 종료한다.
  // 2. 바뀐값들을 scheuld 객체에 title, content에 각각 넣어주고 edit함수에 인자로 넣어서 실행시킨다.

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
      <div className="w-[20rem] min-h-[25rem] bg-yellow-300 p-2">
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
                <li className="flex justify-between">
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
