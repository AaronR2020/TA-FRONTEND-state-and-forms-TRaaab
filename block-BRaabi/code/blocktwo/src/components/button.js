import React from 'react';
import data from '../data'
class Button extends React.Component{
    constructor(props){
      super(props)
    }

    render(){
      if(this.props.o){//true
        return(
          //open
          <>
      <div className='MainBox'>
      <div className='question_box'>    
            <div className='selected' onClick={()=>this.props.fn(this.props.i)}>{this.props.q}</div>
            <div>{this.props.a}</div>
            <br/>
      </div>
      </div>
          </>
        )
      }
      else{
          return(
            //close
            <>
        <div className='MainBox'>
        <div className='question_box'>    
              <div className='question' onClick={()=>this.props.fn(this.props.i)}>{this.props.q}</div>
              <div className='Answer_Not_selected'>{this.props.a}</div>
              <br/>
        </div>
        </div>
          
            </>
          )
      }
     
    }
  }
  
  export default Button;