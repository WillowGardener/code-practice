import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
{name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

//writing this one as a function component to have an example for both function and class
const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)}
    </div>
)

class Card extends React.Component {
    render(props) {
        const profile = this.props
        return (
            <div className="github-profile">
                <img src= {profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Github username" />
                <button>Add Card</button>
            </form>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: testData
        };
    }
    //same thing:
    //state = {
    //     profiles: testData,
    // }
    render() {       
        return ( 
        <div>
            <div className="header">{this.props.title}</div>
            <Form />
            <CardList profiles={this.state.profiles}/>
        </div>
        )
    }
}

ReactDOM.render(
    <App title="The Github Cards App" />,
    document.getElementById("root"),
)