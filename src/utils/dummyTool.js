export function getRandomString(length) {
    // 임의의 문자열 생성 (a-z, A-Z)
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function getRandomDate() {
    // 임의의 날짜 생성 (YYYY.MM.DD HH:MM)
    const year = Math.floor(Math.random() * 10) + 2023; // 2023년 ~ 2032년
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1; // 간단하게 28일까지로 설정
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);

    return `${year}.${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")} ${hour
        .toString()
        .padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}

// 간단한 주소 생성 (실제 주소 형식과 다를 수 있음)
export function getRandomLocation() {
    const cities = ["서울", "부산", "대구", "인천", "광주"];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const address = `${city} ${Math.floor(Math.random() * 1000)}번길 ${Math.floor(Math.random() * 100)}`;
    return address;
}

export function getRandomParagraphs(count) {
    // 임의의 단락 생성
    const paragraphs = [];
    for (let i = 0; i < count; i++) {
        paragraphs.push(getRandomString(Math.floor(Math.random() * 50) + 20)); // 각 단락 길이 20~70
    }
    return paragraphs.join("\n");
}

export function getRandomId() {
    const length = 4;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function getRandomColor() {
    let result = "#";
    const characters = "0123456789abcdef";

    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}
