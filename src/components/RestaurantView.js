import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';


function RestaurantView() {

    const params = useParams()
    var [restaurantList, setRestaurant] = useState([])

    const fetchData = async () => {

        const result = await fetch('/restaurants.json')
        result.json().then(data => {
            setRestaurant(data.restaurants)
        })

    }

    const oneRestaurant = restaurantList.find(item => item.id == params.id)

    useEffect(() => {
        fetchData()

    }, [])


    return (
        <>{oneRestaurant ? (
            <Row className=' text-white m-3 mt-5 mb-5' >
                <Col style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Card style={{ maxwidth: '50%' }} className='text-center' >
                        <Card.Img variant="top" src={oneRestaurant.photograph} style={{ height: "500px", width: "auto" }} />
                        <Card.Body>
                            <Card.Title ><h1>{oneRestaurant.name}</h1></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Neighborhood : {oneRestaurant.neighborhood}</ListGroup.Item>
                            <ListGroup.Item>Cuisine type : {oneRestaurant.cuisine_type}</ListGroup.Item>
                            <ListGroup.Item>Address : {oneRestaurant.address}</ListGroup.Item>
                            <ListGroup.Item className='m-3'>
                                <Accordion defaultActiveKey="">
                                    <Accordion.Item eventKey="">
                                        <Accordion.Header >Working hour</Accordion.Header>
                                        <Accordion.Body >
                                            Monday-{oneRestaurant.operating_hours.Monday}<br />
                                            Tuesday-{oneRestaurant.operating_hours.Tuesday}<br />
                                            Wednesday -{oneRestaurant.operating_hours.Wednesday}<br />
                                            Thursday - {oneRestaurant.operating_hours.Thursday}<br />
                                            Friday - {oneRestaurant.operating_hours.Friday}<br />
                                            Saturday-{oneRestaurant.operating_hours.Saturday}<br />
                                            Sunday - {oneRestaurant.operating_hours.Sunday}<br />
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </ListGroup.Item>
                            <ListGroup.Item className='m-3'>
                                <Accordion defaultActiveKey="">
                                    <Accordion.Item eventKey="">
                                        <Accordion.Header >REVIEWS</Accordion.Header>
                                        <Accordion.Body  style={{width:"590px"}}>
                                            {
                                                oneRestaurant.reviews.map(item => (
                                                    <div>
                                                        <Row >
                                                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png' style={{ width: "50px", height: "30px" }}></img>
                                                            <h5 style={{ width: "40%" }} className='text-start  '>{item.name}  | rating {item.rating} </h5 >
                                                            <h6 style={{ width: "40%" }} className='text-end  '>{item.date}</h6>
                                                        </Row>
                                                        <Row >
                                                            <p >{item.comments}</p>
                                                        </Row>

                                                    </div>

                                                ))
                                            }


                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                </Col>

            </Row >

        ) : " "

        }


        </>
    )
}

export default RestaurantView