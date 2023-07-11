import * as React from "react"
import Image from "next/image"
import Link from 'next/link'
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env
import {DataDogProps} from "../../types";

type Params = { params: { id: string } };

export default async function Page({ params }:Params ) {
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
   
      const response:Promise<DataDogProps> = await fetch(
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
      const {data} = await response;

      return <main>
        DOGS: <Link href="/">Home</Link>
         <div key={data.dogBreeds.sys.id}> 
          <h1>{data.dogBreeds.dogBreedName}</h1> 
          <Image src={data.dogBreeds.dogImage.url} alt={data.dogBreeds.dogImage.alt} height="160" width="200" />
        </div>
      </main>;
    }










