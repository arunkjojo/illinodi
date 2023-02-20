import React, { FC } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../../assets/svg/logo.svg'
import { homeMenuData } from '../../utils/db/DUMMY';
import { ControlledCarousel } from '../../components/Carousel';

const Home:FC = () => {
  return (
    <Container className='home-container'>
      <ControlledCarousel data={homeMenuData} />
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
    </Container>
  )
}
export default Home;