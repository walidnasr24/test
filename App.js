import React from 'react';
import './App.css';
import image from './cat.jpg';
import kalb from './chien.jpg';
import './style.css';
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">My title</h1>

<br/>

<img src={image} />

<br/>

<img src={kalb}/>


</div>


      
    </div>
  );
}

export default App;
