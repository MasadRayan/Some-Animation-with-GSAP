import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef, useState } from 'react';


const App = () => {

  const circleRef = useRef();
  const [randomNum, setRandomNum] =useState()
  const random = gsap.utils.random(-500, 400, 100);

  useGSAP(() => {
    gsap.to(circleRef.current, {
      x: randomNum,
      duration:1,
    })
  },[randomNum])

  return (
    <main className='h-[100vh] w-[100%] bg-black flex justify-center items-center flex-col gap-20'>
      <button
        onClick={() => {
          setRandomNum(random)
        }}
        className='w-[200px] h-[40px] rounded-3xl bg-gradient-to-r from-green-300 to-pink-500 text-2xl font-bold active:scale-95 '
      >Animate</button>
      <div ref={circleRef} className='h-[200px] w-[200px] rounded-full bg-gradient-to-b from-blue-400 to-white mb-5'></div>
    </main>
  );
};

export default App;