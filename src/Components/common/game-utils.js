

export function analyzeMap(gameFields) {
    // generate game map
    let gameMap = []
    let fieldId = 0
    for (let i = 0; i < 3; i++) {
        let row = []
        for (let i = 0; i < 3; i++) {
            row.push(gameFields[fieldId].user)
            fieldId++;
        }
        gameMap.push(row)
    }
    // search in rows
    for (let i = 0; i < gameMap.length; i++) {
        if (gameMap[i].includes('')) {
            continue
        }
        const rowSet = new Set(gameMap[i])
        if (rowSet.size === 1) {
            return Array.from(rowSet)[0]
        }
    }
    // search in cols
    for (let i = 0; i < gameMap.length; i++) {
        const col = [gameMap[0][i], gameMap[1][i], gameMap[2][i]]
        if (col.includes('')) {
            continue
        }
        const colSet = new Set(col)
        if (colSet.size === 1) {
            return Array.from(colSet)[0]
        }
    }
    //search in diagonals
    let mainDiagonal = []
    let sideDiagonal = []
    for (let i = 0; i < gameMap.length; i++) {
        for (let j = 0; j < gameMap[i].length; j++) {
            if (i === j) {
                mainDiagonal.push(gameMap[i][j])
            }
            if (i + j === gameMap[i].length - 1) {
                sideDiagonal.push(gameMap[i][j])
            }
        }
    }
    if (!mainDiagonal.includes('')) {
        let mainDiagonalSet = new Set(mainDiagonal)
        if (mainDiagonalSet.size === 1) {
            return Array.from(mainDiagonalSet)[0]
        }
    }
    if (!sideDiagonal.includes('')) {
        let sideDiagonalSet = new Set(sideDiagonal)
        if (sideDiagonalSet.size === 1) {
            return Array.from(sideDiagonalSet)[0]
        }
    }
    // check draw
    let fullRows = 0
    for (let i = 0; i < gameMap.length; i++) {
        if (!gameMap[i].includes('')) {
            fullRows++
        }
    }
    if (fullRows === 3) {
        return 'draw'
    }
    return false
}