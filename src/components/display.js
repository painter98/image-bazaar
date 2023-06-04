import React from'react';
import './display.css';

function Display({data}){

    return (
        <div className='container'>
            {data!=='' //if data exists then map the data obtain name and picture
            ? 
                <>
                {data.map((image,idx)=>{
                    return (
                    <span className='item' key={idx}>
                        <p>{image.user.first_name}</p>
                        <img src={image.urls.small_s3} alt={image.alt_description}/>
                    </span>
                    )
                })}
                </>
            :
                <h1>Search Terms</h1> //else do not give anything of data
                }
        </div>
        
    )
}
export default Display;