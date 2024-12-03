import { Button, Checkbox, Modal } from '@ui';
import { styled } from 'styled-components';
import Schedule from '@components/GroupSchedulePage/Schedule';
import SemiGroup from 'src/components/GroupSchedulePage/SemiGroup';
import { useRef } from 'react';

import dayjs from 'dayjs';

const formInfo = {
  title: {
    defaultValue: '',
    validation: (newValue) => {
      let errorMessage = '';
      if (newValue.length < 1) return '제목을 입력해주세요!';
      return errorMessage;
    },
    isRequired: true,
  },
  group: {
    defaultValue: '',
    validation: (newValue) => '',
    isRequired: false,
  },
  time: {
    defaultValue: dayjs(),
    validation: (newValue) => '',
    isRequired: false,
  },
  alarm: {
    defaultValue: '',
    validation: (newValue) => '',
    isRequired: false,
  },
  description: {
    defaultValue: '',
    validation: (newValue) => '',
    isRequired: true,
  },
};

const formInfo = {
  title: {
    defaultValue: '',
    validation: (newValue) => {
      let errorMessage = '';
      if (newValue.length < 1) return '제목을 입력해주세요!';
      return errorMessage;
    },
    isRequired: true,
  },
  group: {
    defaultValue: '',
    validation: (newValue) => '',
    isRequired: false,
  },
  time: {
    defaultValue: dayjs(),
    validation: (newValue) => '',
    isRequired: false,
  },
  alarm: {
    defaultValue: '',
    validation: (newValue) => '',
    isRequired: false,
  },
  description: {
    defaultValue: '',
    validation: (newValue) => '',
    isRequired: true,
  },
};

export default function GroupSchedulePage() {
  // TODO: 내용 로딩 전 (쉿..로딩 중!) 화면 띄우기
  // TODO: 컴포넌트 개발
  // [x] : 스케쥴 컴포넌트
  // [x] : 스케쥴 그룹 컴포넌트
  // [ ] : 새 작업 버튼
  // [ ] : 사이드 바 그룹 컴포넌트

  const modalRef = useRef();

  function handleNewScheduleClick() {
    modalRef.current.open();
  }

  return (
    <Container>
      <GroupTitle>분류1</GroupTitle>
      <NewGroupSchedule onClick={handleNewScheduleClick}>+ 새 작업</NewGroupSchedule>
      <SemiGroup>
        <Schedule />
      </SemiGroup>
      <Modal ref={modalRef}>
        <NewScheduleForm
        // formInfo={formInfo}
        // onSubmit={handleSubmitNewSchedule}
        // onCancel={handleCancelNewSchedule}
        />
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.h1`
  margin: 0px;
  height: 4rem;
  font-size: 1.75rem;
  line-height: 4rem;
`;

const NewGroupSchedule = styled(Button)`
  margin-top: 0.25rem;
  margin-bottom: 1.25rem;

  width: 30rem;
  height: 1.75rem;
  padding: 0.25rem 0.75rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #e4617a;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
  box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
`;

const DateGroupedSchedules = styled.div`
  margin: 0.5rem 0;
`;

const DateGroupTitle = styled.div`
  position: relative;
  padding-left: 0.5rem;
  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 4px;
    height: 100%;
    background-color: #e4617a;
  }
`;
