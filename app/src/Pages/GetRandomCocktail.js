import { gql, useQuery } from '@apollo/client';
import { Container, Card, Row } from 'react-bootstrap';

const cardStyle = {
    width: '18rem',
};

const GET_RANDOM_COCKTAIL = gql`
  query GetRandomCocktail {
    random {
      name
      instructions
      image
    }
  }
`;

function GetRandomCocktail() {

    const { loading, error, data } = useQuery(GET_RANDOM_COCKTAIL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="Cocktails" >
            <Container className="container-fluid mt-4">
                <Row>
                    {
                        data.random.map(({ name, instructions, image }) => (
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

export default GetRandomCocktail
