import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
const data=[
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];

function App() {
  const[count,setCount]=useState(0);
  
  
 useEffect(()=>{
  let interval=setInterval(()=>{
    setCount(count+1)
    if(count==3){
      setCount(0);
    }
  },3000)

  return ()=>clearInterval(interval)
 })
function handlePrev(){
  if(count!=0){
    setCount(count-1);
  }
  else(
    setCount(3)
  )
}
function handleNext(){
  if(count!=data.length-1){
    setCount(count+1);
  }
  else(
    setCount(0)
  )
}

  return (
   <div>
    <h1>Reviews</h1>
      <h3>Id: {data[count].id}.</h3>
      <h1>{data[count].name}</h1>
      <img style={{height:"300px"}} src={data[count].image}></img>
      <h2>Role: {data[count].title}</h2>
      <p>{data[count].quote}</p>
     <button onClick={handlePrev}>Prev</button>
     
     <button onClick={handleNext}>Next</button>
   </div>
  );
}

export default App;
