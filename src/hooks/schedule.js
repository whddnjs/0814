/**
 * 할일 목록 기능 구현
 * - 서버 없이 상태에 저장
 * - 생성, 수정, 삭제, 조회 기능 필요
 *
 * 스캐쥴 컬럼
 * 아이디, 제목, 내용,
 */

import { useState } from 'react';

let index = 0;

export function useSchedule() {
  const [schedules, setSchedules] = useState([]);

  const getSchedules = () => {
    return schedules;
  };

  const add = schedule => {
    console.log(schedule);
    setSchedules([
      ...schedules,
      {
        ...schedule,
        id: index++,
      },
    ]);
  };

  const edit = updateSchedule => {
    console.debug(updateSchedule);

    const updateSchedules = schedules.map(schedule => {
      if (schedule.id !== updateSchedule.id) {
        return schedule;
      }

      return updateSchedule;
    });

    setSchedules(updateSchedules);
  };

  const destory = scheduleId => {
    console.log(scheduleId);
    const filterSchedules = schedules.filter(
      schedule => schedule.id !== scheduleId
    );
    setSchedules(filterSchedules);
  };

  return {
    getSchedules,
    add,
    edit,
    destory,
  };
}
