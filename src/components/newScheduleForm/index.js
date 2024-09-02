import { styled } from 'styled-components';
import { useForm } from '@hooks';
import { Button, Icon } from '@ui';
import { SidebarAddSchedule } from '@icons';
import { BounceLoader } from 'react-spinners';

import Description from './ScheduleDescription';
import GroupInputItem from './GroupInputItem';
import ScheduleOption from './ScheduleOption';

// issue #10
//TODO: 스켈레톤 추가
//TODO: 애니메이션 추가
// -ScheduleForm 호출
// -오류 항목 한번 반짝임
// -드롭다운 켜고 닫는거
// issue #6
//BUG: label마다 id 추가

const DUMMY_DATA = {
  alarmList: [
    { key: '1 minute', value: '1 minute', description: '1분 전' },
    { key: '5 minute', value: '5 minute', description: '5분 전' },
    { key: '10 minute', value: '10 minute', description: '10분 전' },
    { key: '1 hour', value: '1 hour', description: '한시간 전' },
    { key: '1 day', value: '1 day', description: '하루 전' },
  ],
  groupList: [
    { name: '그룹 1', id: 'group1', groupColor: '#AD49E1' },
    { name: '그룹 2', id: 'group2', groupColor: '#E85C0D' },
    { name: '그룹 3', id: 'group3', groupColor: '#3795BD' },
  ],
  dummySubmit(formResult) {
    console.table(formResult);
  },
};

export default function NewScheduleForm({ formInfo, onSubmit: submitAPI, onCancel, ...props }) {
  const { inputValues, errors, isLoading, onInputValueChange, onSubmit } = useForm(
    formInfo,
    submitAPI,
  );

  function handleSubmit(e) {
    e.preventDefault();
    try {
      onSubmit();
    } catch (e) {
      console.error(`Submit failed: ${e}`);
    }
  }

  function generateChangeHandler(key) {
    return (newValue) => onInputValueChange(key, newValue);
  }

  const { alarmList, groupList } = DUMMY_DATA;

  const groupInputItemList = groupList.map(({ name, id, groupColor }) => ({
    key: name,
    value: id,
    description: <GroupInputItem name={name} groupColor={groupColor} />,
  }));

  const errorMessages = [];
  for (const errorIndex in errors) {
    const errorMessage = errors[errorIndex];
    if (errorMessage.length > 0) errorMessages.push({ name: errorIndex, message: errorMessage });
  }

  return (
    <Container onSubmit={(e) => e.preventDefault()} {...props}>
      <TitleInput
        value={inputValues.title}
        placeholder="제목을 입력해주세요"
        onChange={(e) => onInputValueChange('title', e.target.value)}
        autoFocus
      />
      <ScheduleOptions>
        <ScheduleOption
          optionType="group"
          value={inputValues.group}
          onChange={generateChangeHandler('group')}
          itemList={groupInputItemList}
          placeholder="그룹"
        />
        <ScheduleOption
          optionType="time"
          value={inputValues.time}
          onChange={generateChangeHandler('time')}
        />
        <ScheduleOption
          optionType="alarm"
          value={inputValues.alarm}
          onChange={generateChangeHandler('alarm')}
          itemList={alarmList}
          placeholder="알람"
        />
        <AddOption.Container>
          <AddOption.Icon
            src={SidebarAddSchedule}
            alt="속성 추가"
            containerWidth={24}
            containerHeight={24}
          />
          <AddOption.Desc>속성 추가...</AddOption.Desc>
        </AddOption.Container>
        <ErrorMessage>
          {errorMessages.map(({ name, message }) => (
            <div key={name} className="error-message">
              *{message}
            </div>
          ))}
        </ErrorMessage>
      </ScheduleOptions>
      <Description
        value={inputValues.description}
        onChange={(e) => onInputValueChange('description', e.target.value)}
        placeholder="일정 설명..."
      />
      <Control>
        <CancelButton onClick={onCancel}>취소</CancelButton>
        <ConfirmButton onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? <BounceLoader color="black" size={20} /> : '분류'}
        </ConfirmButton>
      </Control>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  padding: 2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TitleInput = styled.input`
  height: 36px;
  border: none;
  font-size: 20px;
  font-weight: 900;
`;

const ScheduleOptions = styled.div`
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const AddOption = {
  Container: styled(Button)`
    height: 1.5rem;
    display: flex;
    align-items: center;
  `,
  Desc: styled.div`
    width: 7rem;
    padding-left: 4px;
    font-size: 1rem;
    line-height: 1.125rem;
    text-align: start;
    font-family: 'NanumGothic';
  `,
  Icon: styled(Icon)`
    fill: #adadad;
    width: 18px;
    height: 18px;
  `,
};

const Control = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled(Button)`
  width: 4rem;
  height: 2rem;
`;

const ConfirmButton = styled(Button)`
  width: 4rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : 'black')};
  color: white;
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  & .error-message {
    color: red;
    font-size: 14px;
  }
`;
