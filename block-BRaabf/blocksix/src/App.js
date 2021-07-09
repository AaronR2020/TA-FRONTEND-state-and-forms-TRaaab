import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:1,
      step:1
    }
  }
  incFive=()=>{
    this.setState({step:5})
  } 
  incTen=()=>{
    this.setState({step:10})
  }
  incFifteen=()=>{
    this.setState({step:15})
  }

  addFive=()=>{
    this.setState({counter:this.state.counter+this.state.step})
  } 
  addTen=()=>{
    this.setState({counter:this.state.counter-this.state.step})
  }
  reset=()=>{
    this.setState({counter:0,step:1})
  }

  render(){
    return(
     <>
      <h1 className='center'>{this.state.counter}</h1>
      <div className='steps'>
        <button onClick={this.incFive}>5</button>
        <button onClick={this.incTen}>10</button>
        <button onClick={this.incFifteen}>15</button>
      </div>
      <div className='steps'>
        <button onClick={this.addFive}>increment</button>
        <button onClick={this.addTen}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
     </>
    )
  }
}

export default App;
