import { styled } from "styled-components";
import LogoIcon from "@assets/Logo.png";
import { SidebarAlarm, SidebarFold } from "@icons";

import Button from "@ui/Button";
import Svg from "@ui/Svg";

export default function Header() {
    return (
        <Container>
            <Logo src={LogoIcon} alt="logo" />
            <ButtonPanel>
                <HeaderButton>
                    <Svg src={SidebarAlarm} alt="alarm" containerStyle={AlarmContainerStyle} />
                </HeaderButton>
                <HeaderButton>
                    <Svg src={SidebarFold} alt="fold" containerStyle={FoldContainerStyle} />
                </HeaderButton>
            </ButtonPanel>
        </Container>
    );
}

const Container = styled.header`
    height: 2.5rem;

    display: flex;
    place-content: center;
`;

const Logo = styled.img`
    width: 8rem;
`;

const ButtonPanel = styled.div`
    height: 100%;
    flex-grow: 1;

    display: flex;
    place-content: center flex-end;
`;

const HeaderButton = styled(Button)`
    width: 2rem;
`;

const AlarmContainerStyle = {
    paddingBottom: "1px",
    paddingLeft: "4px",
};

const FoldContainerStyle = {
    paddingTop: "8px",
    paddingLeft: "4px",
};
