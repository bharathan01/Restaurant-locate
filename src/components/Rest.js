import { React, useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Rest() {
  var [restaurantList, setRestaurant] = useState([])

  // function to call api

  const fetchData = async () => {

    const result = await fetch('/restaurants.json')
    result.json().then(data => {
      setRestaurant(data.restaurants)
    })

  }

  useEffect(() => {
    fetchData()

  }, [])


  return (
    <>
        <Row className='m-5' >{
           restaurantList.map(item =>(
            <Col className='mt-5 text-center' lg = {3} md = {4} sm ={6}>
            <RestaurantCard restData = {item} />

            </Col>

            
            ))
            }
       </Row>
      

    </>

  )
}

export default Rest