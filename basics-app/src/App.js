import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './Greet';
import Counter from './counter';
import FunctionHandling from './FunctionHandling';
import ParentComponent from './ParentComponent';
import PersonList from './PersonList';
import BasicForm from './BasicForm';
import HigherOrderComp from './HigherOrderComp';
import HoverComp from './HoverComp';
import HOC from './HOC.js'
import RenderProps from './RenderProps';
import PostList from './PostList';

class App extends Component {
  render(){
  return (
    <div className="App">
     {/* <Greet/> */}
        {/* <FunctionHandling></FunctionHandling> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <PersonList></PersonList> */}
        {/* <BasicForm/> */}
        
        {/* <RenderProps render = {(Count , incrementCounter) => (
        <HoverComp Count ={Count}
         incrementCounter={incrementCounter}/>) }></RenderProps>

        <RenderProps render = {(Count , incrementCounter) => (
        <HigherOrderComp Count ={Count}
         incrementCounter={incrementCounter}/>) }></RenderProps> */}

        {/* <HigherOrderComp></HigherOrderComp>
        <HoverComp></HoverComp> */}
        {/* <HOC></HOC> */}
     {/* <Counter/> */}

     <PostList></PostList>
    </div>
  );
}
}

export default App;
