import React from "react";
import "./style.css";
const user = {
  name: "Jeff Bezos",
  city: "Albuquerque",
  born: 1964,
  likes: "Being rich",
  twitterLink: "https://twitter.com/jeffbezos",
  img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
  twitterName: "JeffBezos",
  companies: [
    "Amazon",
    "The Washington Post",
    "Google share holder",
    "IMBD",
    "Alexa",
    "Blue Origin",
    "Twitch",
    "Zappos",
    "Whole food market",
    "Amazon robotics",
    "Goodreads",
  ],
};


function App() {
  return <div className="App">

  <div className="container">
    <img src={user.img} alt={user.name}/>
    <h3>{user.name}</h3>
    <strong >Place of birth:</strong>
    <p>{user.city}</p>
    <strong>Age of birth:</strong>
    <p>{user.born}</p>
    <strong>Owns:</strong>
    {user.companies.map((company,idx)=><p key={idx}>{company}</p>)}
    <strong>Likes</strong>
    <p>{user.likes}</p>
    <strong>Twitter</strong>
    <a href={user.twitterLink}>@{user.twitterName}</a>
  </div>
  </div>;
}

export default App;
