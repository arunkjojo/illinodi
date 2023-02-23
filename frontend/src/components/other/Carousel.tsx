import React, { FC, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { SliderProps } from '../../interfaces';
type CarouselProps = {
  data: SliderProps[];
  interval: number
}
const ControlledCarousel:FC<CarouselProps> = (props:CarouselProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='my-3 body-slider' variant="dark" activeIndex={index} onSelect={handleSelect}>
      {props.data?.map((dataItem: any, ind: number) =>
        <Carousel.Item key={ind} interval={props.interval}>
          <Image className="w-auto" src={`${dataItem.imageSrc}`} alt={`${dataItem.imageAlt}`} />
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default ControlledCarousel