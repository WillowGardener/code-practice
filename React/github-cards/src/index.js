import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-1200x1200.png" />
                <div className="info">
                    <div className="name">Name Here...</div>
                    <div className="company">Company Here...</div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {

    render() {
       
        return ( 
        <div>
            <div className="header">{this.props.title}</div>
            <Card />
        </div>
        )
    }
}

ReactDOM.render(
    <App title="The Github Cards App" />,
    document.getElementById("root"),
)