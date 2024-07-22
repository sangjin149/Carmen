import { styled } from "styled-components";
import { ScheduleFold } from "@icons";

import Button from "@ui/Button";
import { ScheduleDetail } from "@components/Homepage";
import Svg from "src/ui/Svg";

export default function ScheduleBox({ star, active }) {
    return (
        <Container>
            <SubInfoContainer></SubInfoContainer>
            <ScheduleDetail />
            <ActionBox>
                <FoldButton>
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
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
