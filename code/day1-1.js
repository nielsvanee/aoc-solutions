import { readFile } from 'node:fs'

const algo = (data) => {
    let acc = 0;
    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    numbers.forEach(number => {
        data = data.replaceAll(number, number.slice(0,1) + String(numbers.indexOf(number) + 1) + number.slice(1))
    })

    console.log(data)

    data.split('\n').forEach(row => {
        const tempList = []
        Array.from(row).forEach(c => {
            if (c >= '0' && c <= '9')
                tempList.push(c);
        })
        acc += Number(tempList[0] + tempList[tempList.length - 1]);
    })
    return acc;
}

readFile("../data/day1-1.txt", 'utf-8', (err, data) => {
    console.log(algo(data))
})