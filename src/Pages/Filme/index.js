import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../Services/api';



function Filme(){

    const {id} =useParams();
    const [filme,setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "2db5c2a96808bbf80302c966058dcf00",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
        }

        loadFilme();

        return () => {

        }
    }, [])

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando...</h1>
            </div>
        )
    }


    return(
        <div>
            <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average}/10</strong>
            </div>
        </div>
    )
}

export default Filme;