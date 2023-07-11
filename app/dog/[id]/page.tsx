import * as React from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import {DogProps} from "../../types"
import Link from 'next/link'
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import gql from "graphql-tag"
const loading = () => <div>Loading...</div>;
type DataDogProps = {
  data: {
    dogBreeds: {
      sys: {
        id: string;
      },
      dogBreedName: string;
      dogImage: {
        url: string;
        alt: string;
        title: string;
      }    
    } 
  }
}


    export default async function Page({ params }: { params: { id: string } }) {
      const { id } = params;

      const query = `
      query{ 
        dogBreeds(id: "${id}") {
          sys{
            id
          }
          dogBreedName
          dogImage {
            url
            title
          }
        }
      }
      `
   
      const data = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
        {
          method: "POST",
          body: JSON.stringify({
            query:query,
          }),
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
          },
        }
      ).then((res) => res.json());
 
      return <main>
        DOGS: <Link href="/">Home</Link>
         <div key={data.data.dogBreeds.sys.id}> 
          <h1>{data.data.dogBreeds.dogBreedName}</h1> 
          <Image src={data.data.dogBreeds.dogImage.url} alt={data.data.dogBreeds.dogImage.alt} height="160" width="200" />
        </div>

        
    
      </main>;
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












