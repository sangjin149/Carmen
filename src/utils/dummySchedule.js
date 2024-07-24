// Gemini로 생성한 코드
import {
    getRandomId,
    getRandomString,
    getRandomDate,
    getRandomInt,
    getRandomLocation,
    getRandomParagraphs,
} from "./dummyTool";

function sortScheduleByDate(prevSchedule, nextSchedule) {
    const prevTime = prevSchedule.date;
    const nextTime = nextSchedule.date;

    return prevTime - nextTime;
}

export default function generateDummyData(count) {
    let dummyData = [];
    for (let i = 0; i < count; i++) {
        const randomTitleLength = Math.floor(Math.random() * 10) + 5; // 제목 길이 5~14
        const randomDescriptionParagraphs = Math.floor(Math.random() * 10) + 1; // 설명 단락 수 1~10

        dummyData.push({
            id: getRandomId(),
            title: getRandomString(randomTitleLength),
            date: getRandomDate(),
            time: getRandomInt(),
            location: getRandomLocation(),
            description: getRandomParagraphs(randomDescriptionParagraphs),
        });
    }

    dummyData = dummyData.sort(sortScheduleByDate);

    return dummyData;
}
