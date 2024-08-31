import { styled } from 'styled-components';
import { useRef } from 'react';
import { SidebarAddSchedule } from '@icons';
import dayjs from 'dayjs';

import { Button, Svg, Modal } from '@ui';
import { Header, SidebarMenu, GroupMenu } from '@components/Sidebar';
import { postNewSchedule } from 'src/apis/firebaseAPI';
import NewScheduleForm from '@components/NewScheduleForm';

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

export default function Sidebar() {
  const modalRef = useRef();

  function handleNewScheduleClick() {
    modalRef.current.open();
  }

  function handleSubmitNewSchedule(formResult) {
    postNewSchedule(formResult);
    modalRef.current.close();
  }

  function handleCancelNewSchedule() {
    console.log('~~Sidebar.jsx~~ canceled new schedule');
    modalRef.current.close();
  }

  return (
    <Container>
      <Header />
      <nav>
        <AddScheduleButton onClick={handleNewScheduleClick}>
          <Svg src={SidebarAddSchedule} alt="add schedule icon" />
          <strong>작업 추가</strong>
        </AddScheduleButton>
        <SidebarMenu />
        <GroupMenu />
      </nav>
      <Modal ref={modalRef}>
        <NewScheduleForm
          formInfo={formInfo}
          onSubmit={handleSubmitNewSchedule}
          onCancel={handleCancelNewSchedule}
        />
      </Modal>
      <div id="modal"></div>
    </Container>
  );
}

const Container = styled.div`
  width: 14rem;
  height: 100%;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  display: flex;
  flex-direction: column;

  border-right: 1px solid #f0f0f0;
`;

const AddScheduleButton = styled(Button)`
  margin-top: 1rem;
  width: 8rem;
  height: 2.5rem;
  padding-left: 0.5rem;

  display: flex;
  align-items: center;

  border: 2px solid #aad9bb;
  border-radius: 1.25rem;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));

  font-family: 'NanumSquareB';
`;
