import { gql, useQuery } from '@apollo/client';
import DisplayCocktail from '../Components/Cocktail';

const GET_RANDOM_COCKTAIL = gql`
  query GetRandomCocktail {
    random {
      name
      instructions
      image
      ingredients {
        name
        measure
      }
    }
  }
`;

function GetRandomCocktail() {

    const { loading, error, data } = useQuery(GET_RANDOM_COCKTAIL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            {
                data.random.map(({ name, instructions, image, ingredients }) => (
                    <DisplayCocktail name={name} instructions={instructions} image={image} ingredients={ingredients} />
                ))}
        </div>
    );
}

export default GetRandomCocktail
