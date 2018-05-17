import React, {Component} from 'react';
import axios from 'axios';
import Navigation from './components/navigation.js';
import './App.css';

// function Testing() {
//   console.log('testinggo')
//   return (
//     <h1>Test</h1>
//   )
// };

// function FriendsList(props) {
//   return (
//     <ul>
//       {props
//         .friends
//         .map((name) => (
//           <li key={name}>
//             {name}
//           </li>
//         ))}
//     </ul>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ['Jordyn', 'Mikenzi', 'Jake']
    }
  }
  componentDidMount() {
    // console.log("querying");
    // axios
    //   .get('http://localhost:8080/')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  render() {
    return (
      <div>
        <Navigation/>
      </div>
    )
  }
}

export default App;
