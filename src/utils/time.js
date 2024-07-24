export const updateClock = () => {
    let now = new window.Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    let day = now.getDay();

    switch (day) {
        case 0:
            day = "일요일";
            break;
        case 1:
            day = "월요일";
            break;
        case 2:
            day = "화요일";
            break;
        case 3:
            day = "수요일";
            break;
        case 4:
            day = "목요일";
            break;
        case 5:
            day = "금요일";
            break;
        case 6:
            day = "토요일";
            break;
        default:
            day = "날짜 계산 오류";
    }

    return { month, date, day, hours, minutes, seconds };
};
