import React from 'react';
import axios from 'axios';
class App extends React.Component{
  componentDidMount(){
    axios.get('/product/products').then(res=>{
      console.log(res)
    })
  }
  render(){
    return (
      <div className="App">
        React App
      </div>
    );
  }
}
export default App;
