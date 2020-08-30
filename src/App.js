import React, { Component } from 'react'
import NavigationBar from './components/NavigationBar'
import ProjectList from './components/ProjectList'
import SearchBox from './components/SearchBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <SearchBox />
        <ProjectList />
      </div>
    )
  }
}
export default App

