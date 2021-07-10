import React from 'react';
import data from './data'
import './App.css';
import Console from './components/console'
import Button from './components/button'

class App extends React.Component{
  constructor(){
    super()
    this.clicked=this.clicked.bind(this)
    this.state={
      Questions:data
    }
  }
  clicked(i){
    this.setState({
      Questions:this.state.Questions.map((question,index)=>{
        if(index==i){return question.open=!question.open}
      })
    })
    console.log(this.state.Questions,"AFTER CLICK");console.log("AFTER CLICK");
  }
render(){
  return(
    <>
    {
    this.state.Questions.map((question,index)=>(
      <>
           <Console log={question} key={index*10}/>
           <Button fn={this.clicked} a={question.A} q={question.Q} o={question.open} i={index}/>
      </>
    ))
    }
    </>
  )
}
}

export default App;
