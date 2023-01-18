const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];

function sortByGroup (arr, groupName) {
    return arr.reduce((acc, item) => {
        const key = item[groupName]
        let currentElement = acc[key]
        if (Array.isArray(currentElement)) {
            currentElement.push(item);
        } else {
            currentElement = [item]; 
        }

        acc[key] = currentElement
        return acc;
    }, {})
}

console.log(sortByGroup(data, 'group'))

