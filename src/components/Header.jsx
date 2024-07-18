import { styled } from "styled-components";
import LogoIcon from "@assets/Logo.png";
import { SidebarAlarm, SidebarFold } from "@icons";

import Button from "@ui/Button";
import Image from "@ui/Image";

export default function Header() {
    return (
        <Container>
            <Logo src={LogoIcon} alt="logo" />
            <ButtonContainer>
                <HeaderButton>
                    <Image svg={SidebarAlarm} alt="alarm" />
                </HeaderButton>
                <HeaderButton>
                    <Image svg={SidebarFold} alt="fold" />
                </HeaderButton>
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    height: 40px;
    padding-bottom: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 128px;
    height: 40px;
`;

const ButtonContainer = styled.div`
    height: 100%;
    padding-top: 4px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const HeaderButton = styled(Button)`
    width: 30px;
`;
