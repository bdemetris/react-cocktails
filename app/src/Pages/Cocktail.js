import { gql, useQuery } from '@apollo/client';
import { Container, Card, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const cardStyle = {
    width: '18rem',
};

const GET_COCKTAIL = gql`
  query GetCocktail($id: String!) {
    cocktails(id: $id) {
      name
      instructions
      image
    }
  }
`;

function CocktailGet() {
    let params = useParams();
    let name = params.cocktailName;
    const { loading, error, data } = useQuery(GET_COCKTAIL, {
        variables: { name },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, Name : {name}</p>;

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

export default CocktailGet
