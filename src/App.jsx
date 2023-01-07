import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdviceGenerator from './components/AdviceGenerator';


const App = () => {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='App' style={{
      display: "flex",
      paddingTop: "8%",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <AdviceGenerator />

    </div>
  );
};
export default App;