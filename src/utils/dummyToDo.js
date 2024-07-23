import { getRandomId, getRandomString, getRandomParagraphs, getRandomColor } from "./dummyTool";

export function generateDummyToDo(groupCount) {
    const dummyData = [];
    for (let i = 0; i < groupCount; i++) {
        const randomNameLength = Math.floor(Math.random() * 5) + 3;

        dummyData.push({
            id: getRandomId(),
            name: getRandomString(randomNameLength),
            color: getRandomColor(),
            todoList: [],
        });
    }

    for (const group of dummyData) {
        const todoListLength = Math.floor(Math.random() * 8);
        for (let i = 0; i < todoListLength; i++) {
            const randomNameLength = Math.floor(Math.random() * 5) + 3;
            const randomDescLength = Math.floor(Math.random() * 2 + 0.5);
            const randomIsChecked = 0.5 < Math.random();
            group.todoList.push({
                id: getRandomId(),
                title: getRandomString(randomNameLength),
                description: getRandomParagraphs(randomDescLength),
                checked: randomIsChecked,
            });
        }
    }

    return dummyData;
}
