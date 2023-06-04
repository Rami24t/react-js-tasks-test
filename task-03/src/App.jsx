import React,{useEffect, useState} from "react";
import Detail from './Detail'

function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch('https://anapioficeandfire.com/api/books')
    .then(response=>response.json())
    .then(data=>{setData(data); console.log(data)});
    },[])

  return <div className="App">
<h1>Game of Thrones books </h1>
{
  data?.map((el)=>(Array.from(Object.entries(el))).map((detail,idx)=> {
    switch(detail[0]){
      case 'url':
        detail[1] = <a href={detail[1]}>{detail[1]}</a>;
        break;
      case 'released':
        detail[1] = new Date(detail[1]).toDateString();
        break;
      case 'characters':
      case 'povCharacters':
        detail[1] = detail[1].length;
        break;
        default:
          break;
    }
    return <Detail key={idx} title={detail[0]} details={detail[1]} />
    }))
}
  </div>;
}

export default App;