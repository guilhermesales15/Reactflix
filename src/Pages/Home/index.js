import { keyboard } from '@testing-library/user-event/dist/keyboard';
import {useEffect, useState} from 'react';
import api from '../../Services/api';

//url da API:movie/now_playing?api_key=2db5c2a96808bbf80302c966058dcf00&language=pt-BR


function Home(){
    const[filmes,setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{ 
                    api_key: "2db5c2a96808bbf80302c966058dcf00",
                    language: "pt-BR",
                    pages: 1
                }
            });
            console.log(response.data.results);
        }

    }, [])
    return (
        <div>
            <h1>Bem vindo a Home</h1>

        </div>

    )
}

export default Home;