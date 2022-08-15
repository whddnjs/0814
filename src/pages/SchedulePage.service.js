import { useSchedule } from '../hooks/schedule';

export function useSchedulePage() {
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

  const onDelete = id => {
    const result = window.confirm('정말 삭제할꺼임?');
    if (!result) {
      return;
    }
    destory(id);
  };

  return {
    getSchedules,
    onAdd,
    onUpdate,
    onDelete,
  };
}
