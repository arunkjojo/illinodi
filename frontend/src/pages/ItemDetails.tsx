import React, { FC, lazy } from 'react';
import { ItemDetailsProps } from '../interfaces';
import { sliderItems } from '../utils/db/DUMMY';
import { Container } from 'react-bootstrap';

const ControlledCarousel = lazy(() => import('../components/other/Carousel'));

const ItemDetails: FC<ItemDetailsProps> = (props) => {
    return (
        <Container>
            <ControlledCarousel data={sliderItems} interval={1500} />
        </Container>
    )
}

export default ItemDetails;
