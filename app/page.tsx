import Image from 'next/image'
import styles from './page.module.css'
import { getClient } from "../lib/client";
import { gql } from "@apollo/client";
import { GET_DOG_BREEDS } from './graphql/queries'; 
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env


const query = gql`
 {
    dogBreedsCollection(limit:100){
      items{
        dogBreedName
      }
    }
  }
`

// export default async function Page() {
//   const {loading, error, data } = await getClient().query({ query });
//   console.log(loading, error, data, "data")
//   return <main>hi</main>;
// }

const Dogs = ({data} ) => {
 
  console.log(data.data.dogBreedsCollection, "data");
  // return(<>hi</>)}
  return(
  <>{data.data.dogBreedsCollection.items.map((dog) => (
    <div key={dog.id}>
      <h1>{dog.dogBreedName}</h1>
    </div>
  ))}</>
  )};

export default async function Page() {
  const data = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
    // "https://main--time-pav6zq.apollographos.net/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query:`
        {
           dogBreedsCollection(limit:100){
             items{
               dogBreedName
             }
           }
         }
       `,
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


// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
