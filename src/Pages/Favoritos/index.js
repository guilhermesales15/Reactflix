import "./favoritos.css";
import {useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import { toast} from 'react-toastify';

function Favoritos(){
    const [fav, setFav] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem('@filme');
        setFav(JSON.parse(minhaLista) || []);

    }, []);

    function excluirFilme(id){
        let filtroFilmes = fav.filter((item) =>{
            return(item.id !== id)
        })
       setFav(filtroFilmes);
       localStorage.setItem("@filme", JSON.stringify(filtroFilmes))
       toast.success("Filme removido")
    };

    return(
        <div className="minha-lista">
            <h1>Meus Favoritos</h1>
            
            {fav.length === 0 && <span>Você não possui nenhum filme  salvo.</span>}

            <ul>
                {fav.map((item) =>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() =>excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            
            

        </div>
    )
    
};  
  

export default Favoritos;