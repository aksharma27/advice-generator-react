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
        console.log('i am fired');
      })
      .catch((error) => console.log(error));
  };
  return (
    <>

      <AdviceGenerator />

    </>
  );
};
export default App;