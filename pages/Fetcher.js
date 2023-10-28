import useSWR from 'swr';
const url = 'https://jsonplaceholder.typicode.com/comments';
const fetcher = (url) => fetch(url).then((res)=> res.json());
const { data, isLoading, error} = useSWR(url,fetcher,options);

export default function Fetch(){

    const limit = 10;
    const {
        data : comments,
        isLoading,
        isError: error,
    } = useSWR(url , fetcher,
        {revalidateOnFocus:false,revalidateOnReconnect:false});

    const fetcher = async ([url,limit]) =>{
        const res = await fetch(`${url}?_limit =${limit}`);

    };

    if(error){
        return <p>Failed to fetch!</p>;
    }

    if(isLoading){
        return <p>Loading comments....</p>;
    }

    return(
        <ul>
            {comments.map((comment,index)=>(
                <li key = {index}>
                    {comment.name}
                </li>
            ))}
        </ul>
    );


}





//Index.js
/*
import { useState } from 'react';
import { primarchList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if(index < 2){
        setIndex(index + 1);
    }
  }
  function handleBackClick(){
      if (index > 0){
          setIndex(index - 1);
      }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let primarch = primarchList[index];
  return (
      <>
        <button onClick={handleNextClick}>
          Next
        </button>
          <button onClick={handleBackClick}>
              Back
          </button>
        <h2>
          <i>{primarch.name} </i>
          by {primarch.artist}
        </h2>
        <h3>
          ({index + 1} of {primarchList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{primarch.description}</p>}
        <img
            src={primarch.url}
            alt={primarch.alt}
            style={{
                height: "300px",
                width: "300px"
            }}
        />
      </>
  );
}
*/

//Aus Data.js
/*
export const primarchList = [{
    name: 'Rogal Dorn',
    artist: 'Games Workshop',
    description: '"Discipline. Duty. Unyielding Will. These are the measures by which every warrior is judged. Unarmed, a warrior with these qualities will still find victory, no matter how long or arduous the path. When girded with the sacred armaments of the Adeptus Astartes, such a warrior becomes truly indomitable." -Rogal Dorn, primarch of the imperial Fists',
    url: 'https://www.wargamer.com/wp-content/uploads/2022/04/warhammer-40k-rogal-dorn-resolute.jpg',
    alt: 'An Image depicting the primarch of the Imperial Fists'
}, {
    name: 'Roboute Guilliman',
    artist: 'Games Workshop',
    description: '"Why do I still live? What more do you want from me? I gave everything I had to you, to them. Look what they\'ve made of our dream. This bloated, rotting carcass of an empire is driven not by reason and hope but by fear, hate and ignorance. Better that we had all burned in the fires of Horus\' ambition than live to see this." -Roboute Guilliman of the Ultramarines',
    url: 'https://cdn.vox-cdn.com/thumbor/wPdo-vyR7M6g337rPXrFzdgl4z4=/0x0:1200x656/1200x800/filters:focal(504x232:696x424)/cdn.vox-cdn.com/uploads/chorus_image/image/71900018/Warhammer_40000_SM_Gallery_Art_3_1200x800.0.jpg',
    alt: 'An Image depicting the primarch of the Ultramarines'
}, {
    name: 'Corvus Corax',
    artist: 'Games Workshop',
    description: '"The First Axiom of Victory is to be other than where the enemy desire you to be. The First Axiom of Stealth is to be other than where the enemy believes you to be. The First Axiom of Freedom is that justice without force is powerless; force without justice is tyranny." -Corvus Corax primarch of the Ravenguard',
    url: 'https://www.wargamer.com/wp-content/sites/wargamer/2023/06/warhammer-40k-corvus-corax-anthology.jpg',
    alt: 'An Image depicting the primarch of the Ravenguard'
}];

 */