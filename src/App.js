
import { useState } from 'react';
import './App.css';
import Display from './components/display.js';
import GetData from './components/getData.js';

function App() {
  let [data,setData] = useState([]);


  return (
    <div className="App">
      <GetData update = {setData}/> {/*get the data through axios then and catch */}
      <Display data={data}/> {/*display the data */}
    </div>
  );
}

export default App;
