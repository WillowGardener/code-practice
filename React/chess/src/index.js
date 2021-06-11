import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const horizontalAxis = ['a','b','c','d','e','f','g','h']
const verticalAxis = ['1','2','3','4','5','6','7','8']

function ChessBoard() {
    let board = []
    for (let i=verticalAxis.length-1; i>= 0; i--) {
        for (let j=0; j< horizontalAxis.length; j++) {
            const colorNumber = j+i+2
            if (colorNumber % 2 === 0) {
                board.push(<div className='tile green-tile'>{horizontalAxis[i]}{verticalAxis[j]}</div>)
            } else {
                board.push(<div className='tile brown-tile'>{horizontalAxis[i]}{verticalAxis[j]}</div>)
            }
            
        }
    }
    return <div id='chessboard'>
        {board}
    </div>
}

function App() {
        return (
            <div id = 'app'>
                <ChessBoard/>  
            </div>     
        )
}




ReactDOM.render(
    <App title="Chess" />,
    document.getElementById("root"),
)