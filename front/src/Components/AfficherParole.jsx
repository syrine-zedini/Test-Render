import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/publierParole.css'; // Make sure this path is correct

function AfficherParole() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Correct way to access environment variables in React (Vite or Create-React-App)
    const backendUrl = import.meta.env.VITE_BACKEND_URI || 'http://localhost:4000';

    const fetchDataParole = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/listeParole`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataParole();
    }, []);

    if (loading) return <h1 className="text-center text-2xl font-bold text-gray-700">Chargement de la page...</h1>;
    if (error) return <h1 className="text-red-500 text-center">Erreur : {error}</h1>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Tous les paroles publiées</h1>
            <ul className="space-y-4">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="bg-white shadow-md rounded-md p-4 border border-gray-200"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{item.Titre}</h3>
                        <p className="text-gray-700 mt-2 whitespace-pre-line">{item.parole}</p>
                        <span className="text-sm text-gray-500">Publié par : Auteur inconnu</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AfficherParole;