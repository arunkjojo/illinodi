import React, { FC, Suspense, lazy, useEffect, useState } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap';
// import logo from '../assets/svg/logo.svg'
// import { homeMenuData } from '../utils/db/DUMMY';
import { fetchProductData } from '../utils/apis/getProductApi';
import ProductData from '../interfaces';

const SideCanvas = lazy(() => import('../components/other/SideOffCanvas'))
const Home: FC = () => {
  const [productData, setProductData] = useState<Array<ProductData>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProductData();
      console.log(result);
      setProductData(result);
    };
    fetchData();
  }, []);
  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Row className="g-4">
          <div className="col-lg-3">
            <SideCanvas />
          </div>
          <div className="col-md-12 col-lg-9 gap-4">
            {/* <Row className="g-3">
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
            </Row> */}
            {productData && (
            <Row className="g-3">
              {productData.map((data:any, index:number) =>
                <Col key={index} xs="4">
                  <Card>
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">{data.name}</Card.Title>
                      <Card.Text className="card-text">
                        ${data.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
            )}
          </div>
        </Row>
      </Container>


    </Suspense>
  )
}
export default Home;