import React, { FC, lazy, Suspense } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../assets/svg/logo.svg'
import { sliderItems, homeMenuData } from '../utils/db/DUMMY';

const ControlledCarousel = lazy(() => import('../components/other/Carousel'));
const DummyVirtualScroll = lazy(() => import('../components/other/DummyVirtualScroll'));

const Home: FC = () => {

  return (
    <Container className='home-container'>

      <Suspense fallback={<div>Loading...</div>}>

        <ControlledCarousel data={sliderItems} interval={2000} />

        <Row className="g-3">
          {homeMenuData.map((data, index) =>
            <Col key={index} xs="4">
              <Card>
                <div className="row card-horizontal no-gutters">
                  <div className="col card-image">
                    <Image className="" src={`${logo}`} alt={`${logo}`} />
                  </div>
                  <div className="col d-none d-md-block">
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">{data.topic}</Card.Title>
                      <Card.Text className="card-text">
                        {data.links.map((linkData, ind) => <><Card.Link key={ind}>{linkData}</Card.Link><br /></>)}
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          )}
        </Row>

        <DummyVirtualScroll />

      </Suspense>

    </Container>
  )
}
export default Home;