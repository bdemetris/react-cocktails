// import logo from './logo.svg';
import './App.css';
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
// import Button from 'react-bootstrap/Button';
import { Container, Card, Row } from 'react-bootstrap';

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

const cardStyle = {
  width: '18rem',
};

const GET_COCKTAILS = gql`
  query GetCocktails {
    cocktails(name: "margarita") {
      name
      instructions
      image
    }
  }
`;

function DisplayCocktails() {
  const { loading, error, data } = useQuery(GET_COCKTAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="Cocktails" >
      <Container className="container-fluid mt-4">
        <Row>
          {
            data.cocktails.map(({ name, instructions, image }) => (
              <Card border="secondary" height="auto" style={cardStyle} className="my-2 mx-2">
                <Card.Img src={image} className="my-3" />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {instructions}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h2 className='my-3 mx-5'>🚀</h2>
    <div>
      <input placeholder="Search" className='my-3 mx-5'/>
    </div>
      <DisplayCocktails />
    </div>
  );
}
