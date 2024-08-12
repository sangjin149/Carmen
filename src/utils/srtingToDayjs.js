import dayjs from "dayjs";

const timePrefix = ["A ", "a ", ""];
const timePatterns = ["HHmm", "HH mm", "HH:mm", "HH시 mm분"];
const availablePatterns = [];

timePrefix.forEach((prefix) => {
    timePatterns.forEach((pattern) => availablePatterns.push(prefix + pattern));
});

export default function stringToDayjs(timeStr) {
    let newStr = timeStr.trim();
    newStr = newStr.replace("오전", "AM").replace("오후", "PM");

    if (!dayjs(newStr, availablePatterns).isValid()) return console.log("unavailable!");
    return dayjs(newStr, availablePatterns);
}
