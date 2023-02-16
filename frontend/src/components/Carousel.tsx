import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/logo.svg'

type controlledCarouselProps = {
    data:{
        id:number,
        path: string,
        topic:string,
        links:string[],
        description:string,
    }[];
    
}

export const  ControlledCarousel= (props:controlledCarouselProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='my-3 body-slider' variant="dark" activeIndex={index} onSelect={handleSelect}>
      {props.data.map((dataItem,ind)=>
      <Carousel.Item interval={1000}>
        <img className="w-auto" src={`https://placehold.jp/1200x200.png?text=${dataItem.topic}`} alt={`${logo}`} />
        <Carousel.Caption>
          <h3>{dataItem.topic}</h3>
          <p>{dataItem.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )}
    </Carousel>
  );
}
