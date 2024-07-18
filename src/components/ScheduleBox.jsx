import { styled } from "styled-components";
import { ScheduleFold } from "@icons";

import Button from "@ui/Button";
import ScheduleDetail from "@/components/ScheduleDetail";
import Image from "src/ui/Image";

export default function ScheduleBox() {
    return (
        <Container>
            <SubInfoContainer />
            <ScheduleDetail />
            <Stripe />
            <ActionBox>
                <FoldButton>
                    <Image svg={ScheduleFold} />
                </FoldButton>
            </ActionBox>
        </Container>
    );
}

const Container = styled.div`
    width: 414px;
    height: 290px;

    display: flex;
    flex-direction: row;
    border: 1px solid #b1b1b1;
    border-radius: 8px;
`;

const SubInfoContainer = styled.div`
    width: 40px;
`;

const Stripe = styled.div`
    width: 5px;
    background-color: #7fa9fd;
`;

const ActionBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const FoldButton = styled(Button)`
    width: 58px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
