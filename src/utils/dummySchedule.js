// Gemini로 생성한 코드
import { getRandomId, getRandomString, getRandomDate, getRandomLocation, getRandomParagraphs } from "./dummyTool";

export default function generateDummyData(count) {
    const dummyData = [];
    for (let i = 0; i < count; i++) {
        const randomTitleLength = Math.floor(Math.random() * 10) + 5; // 제목 길이 5~14
        const randomDescriptionParagraphs = Math.floor(Math.random() * 10) + 1; // 설명 단락 수 1~10

        dummyData.push({
            id: getRandomId(),
            title: getRandomString(randomTitleLength),
            time: getRandomDate(),
            location: getRandomLocation(),
            description: getRandomParagraphs(randomDescriptionParagraphs),
        });
    }
    return dummyData;
}
