const boardMatrix = Array.from({ length: 3 }, () => new Array(3).fill(null));

export const initStore = {
    game: {
        boardMatrix,
        playerX: true,
    },
    history: [],
}

export function updateStore(update) {
    let nextState = Object.assign({}, this.state)
    switch (update.type) {
        case "CLICK_MOVE":
            nextState['game']['boardMatrix'][update.rowIndex][update.colIndex] = nextState['game']['playerX'] ? "X":"O"
            nextState['game']['playerX'] = !nextState['game']['playerX']
            nextState['game']['winner'] = testWin(nextState['game']['boardMatrix'])
            // let historyState = JSON.stringify(this.state)
            nextState['history'].push(JSON.stringify(this.state))
            break;
        default:
            break;
    }
    this.setState({ game: nextState.game, history: nextState.history })
}

function testWin(board) {
    let win = null;
    console.log('testing win')
    win = horizontalWin(board)
    console.log('horizontalWin', win)
    win = veritcalWin(board) || win
    console.log('veritcalWin', win)    
    win = diagWin(board) || win
    console.log('diagWin', win)    
    return win
}

function horizontalWin(board) {
    let win = null;
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            win = board[i][0]
        }
    }
    return win
}

function veritcalWin(board) {
    let win = null;
    for (let i = 0; i < board.length; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            win = board[0][i]
        }
    }
    return win
}

function diagWin(board) {
    let win = null;
    if (board[1][1] === null) return win
    
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        console.log('board[0][0]', board[0][0] , board[1][1] , board[2][2])
        win = board[1][1]
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        console.log('board[0][2]', board[0][2] , board[1][1] , board[2][0])
        win = board[1][1]
    }
    return win
}