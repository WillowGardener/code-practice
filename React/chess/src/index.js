import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const horizontalAxis = ['a','b','c','d','e','f','g','h']
const verticalAxis = ['1','2','3','4','5','6','7','8']

function Piece(props) {
  return <img src={props.image} />
}

const pieces = []


for (let i=0; i<8; i++) {
  pieces.push(<Piece image='./assets/images/pawn_b.png' x={i} y={6} />)
}

for (let i=0; i<8; i++) {
  pieces.push(<Piece image='./assets/images/pawn_w.png' x={i} y={1} />)
}

pieces.push(<Piece image='./assets/images/rook_w.png' x={0} y= {0}/>)
pieces.push(<Piece image='./assets/images/knight_w.png' x={1} y= {0}/>)
pieces.push(<Piece image='./assets/images/bishop_w.png' x={2} y= {0}/>)
pieces.push(<Piece image='./assets/images/queen_w.png' x={3} y= {0}/>)
pieces.push(<Piece image='./assets/images/king_w.png' x={4} y= {0}/>)
pieces.push(<Piece image='./assets/images/bishop_w.png' x={5} y= {0}/>)
pieces.push(<Piece image='./assets/images/knight_w.png' x={6} y= {0}/>)
pieces.push(<Piece image='./assets/images/rook_w.png' x={7} y= {0}/>)

pieces.push(<Piece image='./assets/images/rook_b.png' x={0} y= {7}/>)
pieces.push(<Piece image='./assets/images/knight_b.png' x={1} y= {7}/>)
pieces.push(<Piece image='./assets/images/bishop_b.png' x={2} y= {7}/>)
pieces.push(<Piece image='./assets/images/queen_b.png' x={3} y= {7}/>)
pieces.push(<Piece image='./assets/images/king_b.png' x={4} y= {7}/>)
pieces.push(<Piece image='./assets/images/bishop_b.png' x={5} y= {7}/>)
pieces.push(<Piece image='./assets/images/knight_b.png' x={6} y= {7}/>)
pieces.push(<Piece image='./assets/images/rook_b.png' x={7} y= {7}/>)

function Tile(props) {
    if (props.number%2 === 1) {
        return <div className='tile green-tile'><img src={props.image}/></div>
    } else {
        return <div className='tile brown-tile'><img src={props.image}/></div>
    }
}

function ChessBoard() {
    let board = []
    for (let i=verticalAxis.length-1; i>= 0; i--) {
        for (let j=0; j< horizontalAxis.length; j++) {
            let colorNumber = j+i+2
            let image = undefined
            
            pieces.forEach(p=> {
              if (p.props.x === j && p.props.y === i){
                image = p.props.image
                console.log(p)
              }
            })
            board.push(<Tile image = {image} number={colorNumber} />)
            
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
    <App name="chess" />,
    document.getElementById("root"),
)

