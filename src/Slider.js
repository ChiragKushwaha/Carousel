import React, { useState } from 'react';
import './slider.scss';
import i1 from './pics/1.jpg';
import i2 from './pics/2.jpg';
import i3 from './pics/3.jpg';
import i4 from './pics/4.jpg';
import i5 from './pics/5.jpg';
import i6 from './pics/6.jpg';
import ImgComp from './ImgComp';

function Slider() {
  let sliderArr = [i1, i2, i3, i4, i5, i6];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className='slider'>
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}
          >
            <ImgComp src={item} />
          </div>
        );
      })}
      <button id='goLeft' onClick={goLeft}>
        <i class='fas fa-chevron-left'></i>
      </button>
      <button id='goRight' onClick={goRight}>
        <i class='fas fa-chevron-right'></i>
      </button>
    </div>
  );
}

export default Slider;
