import './App.css';
import {useEffect, useState } from 'react';
import LoaderPage from './Loader/LoaderPage';

function App() {

  const [ stateLoader, setstateLoader ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=> setstateLoader(false), 3000);
    return () => clearTimeout(timer)
  },[])
  return (
    <div className="App">
      {stateLoader && <LoaderPage/>}
        
    </div>
  );
}

export default App;
