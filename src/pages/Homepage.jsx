import { styled } from "styled-components";

import Sidebar from "@components/Sidebar.jsx";
import Clock from "src/components/Clock";

export default function Homepage() {
    return (
        <div style={{ height: "500px", display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Container>
                <Clock />
            </Container>
        </div>
    );
}

const Container = styled.div`
    padding-top: 72px;
    padding-left: 16px;

    display: flex;
    flex-direction: column;
`;
