import { useState, useEffect } from 'react';

function App() {
  const [date, setDate] = useState(new Date());
  
  useEffect(()=>{
    setInterval(() => {
      setDate(new Date())
    },1000)
  },[])

  return (
      <p className='DigitalClock'>
        {date.toLocaleTimeString()}
      </p>
  );   
}


export default App;
   