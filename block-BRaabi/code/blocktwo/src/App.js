import React from 'react';
import data from './data';
import './App.css';
import Console from './components/console'
import Button from './components/button'

class App extends React.Component{
  constructor(){
    super()
    this.clicked=this.clicked.bind(this)
    this.state={
      Questions:data//array of objects
    }
  }
  clicked(i){
    this.setState({
      Questions:this.state.Questions.map((question,index)=>{
        console.log(question,'within map');
        if(index==i){question.open=!question.open}
        return question;
      })
    })
  }
render(){
  return(
    <>
    {
      console.log(this.state.Questions,"main")
    }
    {
    this.state.Questions.map((question,index)=>(
      <>
           <Console log={question} key={index*1.2+1}/>
           <Button key={index+1.1} fn={this.clicked} a={question.A} q={question.Q} o={question.open} i={index}/>
      </>
    ))
    }
    </>
  )
}
}

export default App;
