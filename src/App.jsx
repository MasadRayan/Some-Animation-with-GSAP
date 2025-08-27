import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useRef, useState } from 'react';


const App = () => {

  const circleRef = useRef();
  const [randomNum, setRandomNum] = useState();
  const [rotate, setRotate] = useState(0);
  const [Yvalue, setYvalue] = useState(0);
  const random = gsap.utils.random(-400, 400, 100);
  const rotateRandom = gsap.utils.random(-360, 360, 30);
  const randomY = gsap.utils.random(-300, 300, 30);

  useGSAP(() => {
    gsap.to(circleRef.current, {
      x: randomNum,
      y:Yvalue,
      duration: 1,
      rotate: rotate
    })
  }, [randomNum, rotate, Yvalue])

  return (
    <main className='h-[100vh] w-[100%] bg-black flex justify-center items-center flex-col gap-20'>
      <img
        onClick={() => {
          setRandomNum(random);
          setRotate(rotateRandom);
          setYvalue(randomY)
        }}
        ref={circleRef} src='https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png'
        className='h-[200px] w-[200px]'
        ></img>
    </main>
  );
};

export default App;