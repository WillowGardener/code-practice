import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

//writing this one as a function component to have an example for both function and class
const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
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
    state = { userName: ''}
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data)
        this.setState({ userName: ''})
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} action="">
                <input 
                    type="text" 
                    value={this.state.userName} 
                    onChange={event => this.setState({ userName: event.target.value })} 
                    placeholder="Github username" 
                    required 
                />
                <button>Add Card</button>
            </form>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: []
        };
        
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    }
    //same thing:
    //state = {
    //     profiles: testData,
    // }
    render() {       
        return ( 
        <div>
            <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
        </div>
        )
    }
}

ReactDOM.render(
    <App title="The Github Cards App" />,
    document.getElementById("root"),
)