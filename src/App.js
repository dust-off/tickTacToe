import React from 'react';
import Board from './components/Board'
import { initStore, updateStore } from './Store'
import History from './components/History'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = initStore
        this.updateStore = updateStore.bind(this)
        this.timeTravel = this.timeTravel.bind(this)
    }

    timeTravel(num) {
        console.log('traveling to', num, ':', this.state.history[num].game)
        let reverto = JSON.parse(this.state.history[num])
        this.setState({
            game: reverto.game,
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.game.winner
                    ? `winner is ${this.state.game.winner}`
                    : <Board
                        boardMatrix={this.state.game.boardMatrix}
                        updateStore={this.updateStore}
                      />
                }
                <History
                    timeTravel={this.timeTravel}
                    history={this.state.history}
                />
            </div>
        )
    }
}