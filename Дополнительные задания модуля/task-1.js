// const startRange = 1016;
// const endOfRange =  1937;

const winningTicket = (startRange, endRange) => {
    let winnerNumber = 0;

    for (let i = startRange; i < endRange; i += 1) {
        if (((i % 3) == 0 ) && ((i % 7) == 0)) {
            if (((i % 5) != 0 ) && ((i % 2) != 0)) {
                if(i > winnerNumber) {
                    winnerNumber = i;
                }
            }
        }
    }
    return winnerNumber;
}

console.log(winningTicket(1016, 1937));