import dayjs from "dayjs";

const timePrefix = ["A ", "a ", ""];
const timePatterns = ["HHmm", "HH mm", "HH:mm", "HH시 mm분"];
const availablePatterns = [];

timePrefix.forEach((prefix) => {
    timePatterns.forEach((pattern) => availablePatterns.push(prefix + pattern));
});

export function stringToDayjs(timeStr) {
    let newStr = timeStr.trim();
    newStr = newStr.replace("오전", "AM").replace("오후", "PM");

    if (!dayjs(newStr, availablePatterns).isValid()) {
        console.warn(`Unavailable timeStr pattern!!: ${timeStr}`);
        return dayjs();
    }

    return dayjs(newStr, availablePatterns);
}

export function dayjsToString(dayjs, format, toKo = true) {
    let newStr = dayjs.format(format);
    if (toKo) newStr = newStr.replace("AM", "오전").replace("PM", "오후");
    return newStr;
}
