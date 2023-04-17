import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function RestaurantCard({ restData }) {
   
   

    return (

        <>

            <Link to={`viewrest/${restData.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem' }} className='text-white text'>
                    <Card.Img variant="top" src={restData.photograph} />
                    <Card.Body>
                        <Card.Title>NAME :{restData.name}</Card.Title>
                        <Card.Text>
                            Neighborhood : {restData.neighborhood}

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </>
    )
}
