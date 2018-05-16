import React, { Component} from 'react';
import axios from 'axios';
import './App.css';

function Testing(){
  console.log('testinggo')
  return(
    <h1>Farts</h1>
  )
};

function FriendsList (props) {
  return (
    <ul>
      {props.friends.map((name) => (
        <li key={name}>
          {name}
        </li>
      ))}
    </ul>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: ['Jordyn', 'Mikenzi','Jake']
    }
  }
  componentDidMount(){
    console.log("querying");
    axios.get('http://localhost:8080/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render(){
    return(
      <div>
         <FriendsList friends={this.state.friends}/>
         <Testing/>
      </div>
    )
  }
}

export default App;
