import React, { FC, Suspense, lazy } from 'react'
import { Row, Col, Card, Image, Container } from 'react-bootstrap';
import logo from '../assets/svg/logo.svg'
import { homeMenuData } from '../utils/db/DUMMY';

const SideCanvas = lazy(() => import('../components/other/SideOffCanvas'))
const Home: FC = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Row className="g-4">
          <div className="col-lg-3">
            <SideCanvas />
          </div>
          <div className="col-md-8 col-lg-6 gap-4">
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
          </div>
        </Row>
      </Container>


    </Suspense>
  )
}
export default Home;