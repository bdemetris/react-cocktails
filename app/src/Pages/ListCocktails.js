import { gql, useQuery } from '@apollo/client';
import { Container, Card, Row  } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const cardStyle = {
    width: '18rem',
};

const GET_COCKTAILS = gql`
  query GetCocktails($name: String!) {
    cocktails(name: $name) {
      id
      name
      image
    }
  }
`;

function CocktailsList() {
    let params = useParams();
    let name = params.cocktailName;
    const { loading, error, data } = useQuery(GET_COCKTAILS, {
        variables: { name },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, Name : {name}</p>;

    return (
        <div className="Cocktails" >
            <Container className="container-fluid mt-4">
                <Row>
                    {
                        data.cocktails.map(({ id, name, image }) => (
                            
                            <Card border="secondary" height="auto" style={cardStyle} className="my-2 mx-2">
                                <Link to={`/cocktail/${id}`} className="link-text">
                                <Card.Img src={image} className="my-3" />
                                <Card.Body>
                                    <Card.Title>{name}</Card.Title>
                                </Card.Body>
                                </Link>
                            </Card>
                        ))}
                </Row>
            </Container>
        </div>
    );
}

export default CocktailsList
