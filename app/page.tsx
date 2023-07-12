import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env
import {QueryDataProps} from "./types"

const query = `
 {
    dogBreedsCollection(limit:100){
      items{
        dogBreedName
        sys{
          id
        }
      }
    }
  }
`

const Dogs = ({data}:QueryDataProps) => {

  return(
  <>{data.data.dogBreedsCollection.items.map((dog) => (
    <div key={dog.sys.id}>
      <h1>{dog.dogBreedName}</h1>
      <Link href={`/dog/${dog.sys.id}`}>{dog.dogBreedName}</Link>
    </div>
  ))}</>
  )};

export default async function Page() {
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
    DOGS:
    <Dogs data={data} />

  </main>;
}

