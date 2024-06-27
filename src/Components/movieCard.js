import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({item}) {
 
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem', margin:"10px"}}>
      <Card.Img variant="top" src={item.imgURL} height={300} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         Check Link for Description
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(`/trailer/${item.id}`)}>Watch trailer ★</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;