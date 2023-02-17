import React, { FC, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/logo.svg'
type dummyData = {
  data: {
    id: number;
    path: string;
    topic: string;
    links: string[];
    description: string;
  }[];
}
export const ControlledCarousel:FC<dummyData> = (props: dummyData) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='my-3 body-slider' variant="dark" activeIndex={index} onSelect={handleSelect}>
      {props.data?.map((dataItem: any, ind: number) =>
        <Carousel.Item key={ind} interval={1000}>
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
