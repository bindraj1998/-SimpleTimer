import logo from './logo.svg';
import './App.css';
import Timer from './componets/Timer';
import {useState} from "react"
function App() {
 
  const[count,setcount]=useState()
  const time=(time)=>{
    setcount(time)
  }
  return (
    <div className="App">

    <p>  Minimum Time :0,  Maximumtime :60 second</p>

     <p> Timer: {count}
     </p>
      <Timer time={time}  maxtime={60}/>
    </div>
  );
}

export default App;
