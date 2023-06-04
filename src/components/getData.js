import axios from 'axios';
import React, { useState } from 'react';


function GetData({update}){
    let [searchTerm,setSearchTerm] = useState('dog');

   // console.log("Access Key",process.env.REACT_APP_ACCESS_KEY) //the variable storing access key in .env has to start with react_app_

function getImages(){
    axios.get("https://api.unsplash.com/search/photos/",{ //syntax: axios.get(url,{params:{}})
        params:{
            client_id:process.env.REACT_APP_ACCESS_KEY,//importing from environment some secret codes
            query:searchTerm //as per docs of unsplash use parameters access key and search term to search 
        }
    })
    .then((response)=>{
        console.log(response.data.results);
        update(response.data.results);
    })
    .catch(e=>console.log(e));
}

    function resetSearch(){
        setSearchTerm('');
        update('');
    }
    

    return (
        <>
            <input placeholder='enter your search' type='text' onChange={e=>setSearchTerm(e.target.value)} value={searchTerm} />
            <button onClick={getImages}>search</button>
            <button onClick={resetSearch}>Reset</button>
        </>
    )
}
export default GetData;