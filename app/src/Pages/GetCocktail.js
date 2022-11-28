import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import DisplayCocktail from '../Components/Cocktail';

const GET_COCKTAIL = gql`
  query GetCocktail($id: String!) {
    cocktail(id: $id) {
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

function CocktailGet() {
    let params = useParams();
    let id = params.cocktailId;
    const { loading, error, data } = useQuery(GET_COCKTAIL, {
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, ID : {id}</p>;

  return (
    <div>
          {
            data.cocktail.map(({ name, instructions, image, ingredients }) => (
              <DisplayCocktail name={name} instructions={instructions} image={image} ingredients={ingredients}/>
            ))}
    </div>
  );
}

export default CocktailGet
