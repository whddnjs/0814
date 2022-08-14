import React from 'react';

function SchedulePage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[20rem] min-h-[25rem] bg-yellow-300 p-2">
        <div className="text-center text-2xl mb-2">todo list</div>
        <div
          className="w-full bg-white
        "
        >
          <ul className="flex justify-between font-bold">
            <li>제목</li>
            <li>내용</li>
            <li>수정</li>
            <li>삭제</li>
          </ul>
          <ul className="flex justify-between">
            <li>제목</li>
            <li>내용</li>
            <li>
              <button>수정</button>
            </li>
            <li>
              <button>삭제</button>
            </li>
          </ul>
          <ul className="flex justify-between">
            <li>제목</li>
            <li>내용</li>
            <li>
              <button>수정</button>
            </li>
            <li>
              <button>삭제</button>
            </li>
          </ul>
          <ul className="flex justify-between">
            <li>제목</li>
            <li>내용</li>
            <li>
              <button>수정</button>
            </li>
            <li>
              <button>삭제</button>
            </li>
          </ul>
          <ul className="flex justify-between">
            <li>제목</li>
            <li>내용</li>
            <li>
              <button>수정</button>
            </li>
            <li>
              <button>삭제</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
