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
    {/*header*/}
    <div className='center_buttons'>{
      this.state.foodType.map((obj,index)=>(
      <Button key={index} name={obj} fn={this.clicked} />
      ))
    }</div>
    <div className='body_ui'>
      {
        data.filter((obj,index)=>{if(obj.category==this.state.uiList){
          
          return true
        
        }}).map(obj=>(
          <div className='cardUI'>
            <h2>{obj.title}</h2>
            {obj.desc}
            <b>{obj.price}</b>
            <hr></hr>
          </div>
        ))
      }
    </div>
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

