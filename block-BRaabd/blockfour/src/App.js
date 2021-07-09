import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      src:'',
    }
  }

  change=(loc)=>{this.setState({src:loc})}

  render(){

   return (
    <div className="App " >
         <button onClick={()=>this.change('./assets/basketball.jpg')} className='button'>Basketball</button>
         <button onClick={()=>this.change('./assets/cricket.jpg')} className='button'>Cricket</button>
         <button onClick={()=>this.change('./assets/laptop.jpg')} className='button'>Laptop</button>
         <button onClick={()=>this.change('./assets/phone.jpg')} className='button'>Phone</button>
      <header className="App-header">      
                <img src={this.state.src} width='40%'/>
      </header>
    </div>
  );
}
}


export default App;
