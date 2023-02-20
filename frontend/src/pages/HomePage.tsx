import React, { useEffect, useState, FC, lazy, Suspense } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../assets/svg/logo.svg'
import { homeMenuData } from '../utils/db/DUMMY';
import callApi from '../utils/apis/callApi';
// import ControlledCarousel from '../../components/Carousel';

const ControlledCarousel = lazy(() => import('../components/Carousel'));
const UiVirtualScrollComponent = lazy(() => import('../components/UiVirtualScroll'));

const Home: FC = () => {
  const limit = 10
  // the number of items that we want to keep in memory - 300
  const buffer = limit * 3
  // the number of items that we want to cache when new chunk of data is loaded
  const cache = buffer - limit

  const datalist = 'item';
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    callApi(0, buffer, datalist).then((res: any) => {
      setItems(res)
      setIsLoading(false)
    })
  }, [buffer]);

  const prevCallback = (newOffset: number) => {
    setIsLoading(true)

    return callApi(newOffset, limit, datalist).then((res: any) => {
      const newItems = [...res, ...items.slice(0, cache)] as any
      setItems(newItems)
      setIsLoading(false)
      return true
    })
  }

  const nextCallback = (newOffset: number) => {
    setIsLoading(true)

    return callApi(newOffset, limit, datalist).then((res: any) => {
      const newItems = [...items.slice(-cache), ...res] as any
      setItems(newItems)
      setIsLoading(false)
      return true
    })
  }
  return (
    <Container className='home-container'>
      <Suspense fallback={<div>Loading...</div>}>
        <ControlledCarousel data={homeMenuData} />
      </Suspense>

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

      <UiVirtualScrollComponent
        buffer={buffer}
        rowHeight={39}
        height="50vh"
        limit={limit}
        datalist = {datalist}
        onPrevCallback={prevCallback}
        onNextCallback={nextCallback}
      >
        <>
          {items.map((item: any, index: number) => (
            <div style={{ padding: '10px' }}>
              {isLoading ? <>Loading...</> : item}
            </div>
          ))}
        </>
      </UiVirtualScrollComponent>
    </Container>
  )
}
export default Home;