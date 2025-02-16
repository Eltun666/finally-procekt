'use client';
import React, { useEffect, useState } from 'react';
import "./TextAnimation.scss"

const TextAnimation = () => {
  const [text, setText] = useState<string>(''); 
  const textData: string[] = ['Action ?', 'Adventure ?',"Shooter ?","Horror ?"]; 
  const [index, setIndex] = useState<number>(0);  

  useEffect(() => {
    let charIndex = -1; 

    function typeText() {
      if (charIndex < textData[index].length) {
        setText(prev => prev + textData[index].charAt(charIndex));  
        charIndex++;  
        setTimeout(typeText, 100);  
      } else {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % textData.length); 
          setText(''); 
        }, 1000); 
      }
    }
    typeText();
  }, [index]);  

  return (
     <h2>Which category do you like : <span>{text}|</span></h2> 
  );
};

export default TextAnimation;
