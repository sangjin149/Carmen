//Gemini로 생성한 함수

const ALPPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const Alphabet = ALPPHABET + alphabet;
const NUMBERS = "0123456789";

export function getRandomInt(range1, range2 = 0) {
    const min = range1 - range2 < 0 ? range1 : range2;
    const max = range1 - range2 > 0 ? range1 : range2;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toStringAndPad(num, padRange = 2) {
    return num.toString().padStart(padRange, "0");
}

export function getRandIntAndPad(range1, range2 = 0, padRange = 2) {
    return toStringAndPad(getRandomInt(range1, range2), padRange);
}

export function getRandomStringFromCharacters(length, characters) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(getRandomInt(characters.length));
    }
    return result;
}

export function getRandomString(length) {
    const characters = Alphabet;
    return getRandomStringFromCharacters(length, characters);
}

export function getRandomId() {
    const length = 4;
    const characters = alphabet + NUMBERS;
    return getRandomStringFromCharacters(length, characters);
}

export function getRandomColor() {
    const length = 6;
    const characters = alphabet + NUMBERS;
    return `#${getRandomStringFromCharacters(length, characters)}`;
}

export function getRandomDate() {
    // 임의의 날짜 생성 (YYYY.MM.DD HH:MM)
    const year = getRandomInt(2024, 2024); // 2023년 ~ 2032년
    const month = getRandomInt(11, 0);
    const maxDay = [1, 3, 5, 7, 8, 10, 12].includes(month) ? 31 : month === 2 ? 28 : 30;
    const day = getRandomInt(maxDay, 1);
    const hour = getRandomInt(23);
    const minute = getRandomInt(59);

    return new Date(year, month, day, hour, minute);
}

// 간단한 주소 생성 (실제 주소 형식과 다를 수 있음)
export function getRandomLocation() {
    const cities = ["서울", "부산", "대구", "인천", "광주"];
    const city = cities[getRandomInt(cities.length - 1)];
    const address = `${city} ${getRandomInt(1000)}번길 ${getRandomInt(100)}`;
    return address;
}

export function getRandomParagraphs(count) {
    // 임의의 단락 생성
    const paragraphs = [];
    for (let i = 0; i < count; i++) {
        paragraphs.push(getRandomString(getRandomInt(20, 70))); // 각 단락 길이 20~70
    }
    return paragraphs.join("\n");
}
