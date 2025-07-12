import axios from 'axios'
import { useEffect, useState } from 'react'

function AfficherUsers({  count,onclick }){
    const [data,setdata]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
 
    const fetchData= async()=>{
     try{
       const response= await axios.get('http://localhost:4000/api/listeUsers');
       setdata(response.data);
       setLoading(false);
 
       
     }catch (error){
       setError(error.message);
       setLoading(false);
 
     }
 
    }
 
    useEffect(()=>{
     fetchData();
 
    },[]);
 
    if(loading) return   <h1 className='title'>Chargement de la page</h1>
    if(error) return   <h1> {error}</h1>
 
 
    return(
        <>
        <h1 className='title'>Les menbres de l'application.</h1>
      <ul>

        {
          data.map((item,index) => (

            <li key={index}> {item.pseudo} </li>
          ))}
      </ul>
      
      
      

        
          
        </>


    );
}
export default AfficherUsers;