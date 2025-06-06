import React, { useEffect } from 'react';

export const MultiEffectComponent = () => {
    const [calcule, Calcule] = React.useState(0);
    const [num1, Num1] = React.useState(0);
    const [num2, Num2] = React.useState(0);
    const [text, Texto] = React.useState('');
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    

  useEffect(() => {
    Calcule(num1 + num2);
  }, [num1, num2]);

  useEffect(() => {
    const count = (text.match(/[aeiou]/) || []).length;
    Texto(count);
  }, [text]);

  useEffect(() => {
    if (peso > 0) {
      const calculatedBmi = peso / (altura * altura);
      setBmi(Number(calculatedBmi.toFixed(2)));
    }
  }, [peso, altura]);
  
};

export default MultiEffectComponent;
