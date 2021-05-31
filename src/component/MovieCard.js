import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'

 function MovieCard({film}){
  return(
<div>
<Card style={{ height:'700px',  width: '300px' }}>
  <Card.Img variant="top" src={film.posterUrl}/>
  <Card.Body>
    <Card.Title style={{color:'black'}}>{film.title}</Card.Title>
    <Card.Text style={{color:'black'}}>{film.description}</Card.Text>
    <ReactStars
    count={5}
    value={film.rate}
    edit = {false}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  </Card.Body>
  <Button variant="link"><Link to={`/description/${film.id}`}>Description</Link></Button>
</Card>
</div>
  );
}
export default MovieCard
