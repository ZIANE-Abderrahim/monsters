import React from 'react';

import './App.css';
import { Component } from 'react';
import { CardList} from './card-list/card-list.component';
import {SearchBox} from './search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result=>result.json())
    .then(users=>this.setState({monsters:users}))
  }
  handelChange=(e)=>(
    this.setState({searchField:e.target.value})
  )
  render(){
    const {monsters,searchField}=this.state;
    const filterMonsters=monsters.filter(e=>e.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder='search monsters' handelChange={this.handelChange}></SearchBox>
        <CardList monsters={filterMonsters}></CardList>
        
      </div>
    );
  }
  
}

export default App;
