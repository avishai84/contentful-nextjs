import * as React from "react"
import { useQuery, ApolloProvider } from '@apollo/client';
import { GET_DOG_BREEDS } from '../graphql/queries'; 
import client from '../../apolloClient';

const Dogs = ({ data }) => (
    <>{data.contentfulDogBreeds.map((dog) => (
      <div key={dog.id}>
        <h1>{dog.dogBreedName}</h1>
        <img src={dog.dogImage.url} alt={dog.dogImage.alt} title={dog.dogImage.title} />
      </div>
    ))}</>
    );


export default function Page() {
  const { loading, error, data } = useQuery(GET_DOG_BREEDS);

  console.log("loading, error", loading, error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Access the data and render your components
  // ...
  
  return (
    <div>
      <ApolloProvider client={client}>
        <Dogs data={data} />
      </ApolloProvider>
    </div>
  );
}




// export const pageQuery = graphql`
// {
//   contentfulDogBreeds {
//     id
//     breedOrigination
//     lifeExpectancy
//     maxLifeExpectancy
//     friendlinessOfTheBreed
//     dogBreedName
//     shedLevel
//     dogImage {
//       alt
//       url
//       title
//     }
//   }
// }
// `;


// export const getDogBreedName = ({ pageContext }) => {
//   return {
//     variables: {
//       dogBreedName: pageContext.dogBreedName,
//     },
//   }
// }


// export const pageQuery = graphql`
// query($dogBreedName: String!) {
//   contentfulDogBreeds(dogBreedName: { eq: $dogBreedName }) {
//     id
//     breedOrigination
//     lifeExpectancy
//     maxLifeExpectancy
//     friendlinessOfTheBreed
//     shedLevel
// 		dogImage{
//       alt
//       url
//       title
//     }
//   }
// }
// `;












