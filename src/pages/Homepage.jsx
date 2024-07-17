import Sidebar from "@components/Sidebar.jsx";

export default function Homepage() {
    return (
        <div style={{ height: "500px", display: "flex", flexDirection: "row" }}>
            <Sidebar />
            HomePage
        </div>
    );
}
