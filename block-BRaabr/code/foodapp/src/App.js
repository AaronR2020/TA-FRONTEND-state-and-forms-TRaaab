import './App.css';
import React from 'react';
import data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    let foodTypeList=[... new Set(data.map((obj)=>(obj.category)))]
    this.state={
      foodType:foodTypeList,
      uiList:''
    }
  }
 clicked=(type)=>{
   console.log(type);
   this.setState({
    uiList:type
   })
 }
  render() { 
    return ( <>
  
    </> );
  }
}

function Button(props){
  return(
    <>
    <button className="button" onClick={()=>props.fn(props.name)} >{props.name}</button>
    </>
  )
}
 
export default App;

