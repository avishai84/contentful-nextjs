import { gql } from '@apollo/client';


export const GET_DOG_BREEDS = gql`
query {
    dogBreedsCollection(limit:100){
      items{
        dogBreedName
      }
    }
  }
`;