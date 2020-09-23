import React, { Component } from 'react';
// import { Navbar } from 'reactstrap';
import { ANIMALS } from './shared/animals';
import Zoo from './components/ZooComponent'; 
import './App.css';


class App extends Component {

  constructor(props) {
    super();

    this.state = {
      animals : ANIMALS
    }

  }
  
  render() {
    return (
      <div className="App">
 
        <Zoo animals={this.state.animals}/>
        
      </div>
    );
}
}
export default App;
