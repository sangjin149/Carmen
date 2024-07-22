import { styled } from "styled-components";
import { ScheduleFold } from "@icons";
import { useState } from "react";

import Button from "@ui/Button";
import Svg from "@ui/Svg";
import { ScheduleDetail } from "@components/Homepage";

export default function ScheduleBox({ schedule }) {
    const content = {
        title: schedule.title,
        time: schedule.time,
        location: schedule.location,
        description: schedule.description,
    };

    const [isFolded, setFolded] = useState(false);

    const handleFoldClick = () => {
        setFolded((prevIsFolded) => !prevIsFolded);
    };

    return (
        <Container>
            <SubInfoContainer />
            <ScheduleDetail content={content} />
            <ActionBox>
                <FoldButton onClick={handleFoldClick}>
                    <Svg src={ScheduleFold} />
                </FoldButton>
            </ActionBox>
        </Container>
    );
}

const Container = styled.div`
    width: 26rem;
    position: relative;
    display: flex;
    border: 1px solid #b1b1b1;
    border-radius: 8px;

    transition: max-height 0.3s ease-out;

    &::before {
        content: "";
        width: 4px;
        height: 100%;

        position: absolute;
        left: 350px;
        background-color: #7fa9fd;
    }
`;

const SubInfoContainer = styled.div`
    width: 2.5rem;
`;

const ActionBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const FoldButton = styled(Button)`
    width: 4rem;
    height: 8.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
