const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "09:23",
        destination: "LONDON",
        flight: "CL 407",
        gate: "A 03",
        remarks: "CANCELLED"
    },
    {
        time: "09:28",
        destination: "MOSCOW",
        flight: "MO 465",
        gate: "A 06",
        remarks: "DELAYED"
    },
    {
        time: "10:10",
        destination: "NEW-YORK",
        flight: "CK 553",
        gate: "A 02",
        remarks: "ON TIME"
    },
    {
        time: "10:25",
        destination: "CHISINAU",
        flight: "KV 027",
        gate: "A 07",
        remarks: "ON TIME"
    },
]

const destinations = ['JAIPUR', 'BOLOGNA', 'JERUSALEM', 'BUCHAREST', 'ZURICH', 'CASABLANCA', 'MIAMI', 'PARIS', 'KYIV', 'WARSAW', 'BELGRAD', 'SOFIA', 'BERLIN', 'ROME', 'MADRID', 'EINDHOVEN', 'ISTANBUL']
const remarks = ['ON TIME', 'DELAYED', 'CANCELLED']
let hour = 15

function populateTable () {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
            
            for(const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index)
            }
            tableRow.append(tableCell)
        } 
        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "1234567890"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * maxNumber.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if (hour < 24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }
    if (hour < 10) {
        displayHour = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push(
        {
            time: generateTime(),
            destination: destinations[Math.floor(Math.random() * destinations.length)],
            flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber()+ generateRandomNumber(),
            gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
            remarks: remarks[Math.floor(Math.random() * remarks.length)],
        }
    )
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 4000)