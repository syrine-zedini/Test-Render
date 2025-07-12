import '../styles/publierParole.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
         {
               //Composant pour l'envoie du parole vers l'api
        }
function PublierParole(){
    //Etats pour stocker  les donneés entrer dans le formulaire du saisie
        const [formData,setFormData]=useState({
            titre:"",
            parole:""
        });

   //Etats pour stocker les message du reussi ou d'echec lorsq d'envoye des donn"es vers l'api
        const [message,setMessage]=useState("");

 //Gérer le changement de l'etat du formulaire
        const handleChange =(e)=>{
            const {name,value}=e.target;
            setFormData({
                ...formData,
                [name]:value
            });
        }

// Envoyer les données du parole  vers l'api
         const handleSubmit =(e)=>{
            e.preventDefault();
            axios 
            .post('http://localhost:4000/api/addParole', formData)
            .then((response)=>{
                setMessage(response.data.message);
                setFormData({titre:"",
                    parole:""
                });
            })
            .catch((error)=>{
                setMessage("Erreur lors de l'ajout de la parole"+error.message);
            })
        }

    

    return(
        <>

                {
                    //Element jsx pour l'envoie du parole vers l'api
                }
                 <h3> Publier des paroles:</h3>
                 {message &&  <p>{message}</p> }
                 <form onSubmit={handleSubmit}>
                    <div>
                        <label id='titre' >Titre</label><br />
                        <input 
                        type="text"
                        name="titre"
                        placeholder="Ecrivez le titre du parole ici..."
                        value={formData.titre}
                        onChange={handleChange}
                         />
                    </div>
                    
                    <div>
                        <label >Parole:</label><br />
                        <textarea 
                        type="text"
                        name="parole"
                        placeholder="Ecrivez les parole ici..."
                        value={formData.parole}
                        onChange={handleChange}
                        cols="45"
                        rows="25"
             
                         />
                    </div>
                    <button type='submit'>Publier</button>
                </form>
        </>)
}
export default PublierParole;