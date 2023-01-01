import React from 'react';
import { useParams } from 'react-router-dom';

export const BackgroundColorChanger = () =>{
    const {name}= useParams();
     
    if(name == "red"){
    return(
        <div style={{backgroundColor:"red", height:"100vh"}}>
        BackgroundColorChanger
       </div>
    )
    }
   if(name == "cyan"){
    return(
       <div style={{backgroundColor:"cyan", height:"100vh"}}>
              BackgroundColorChanger
             </div>
      
      )
     
   }
}