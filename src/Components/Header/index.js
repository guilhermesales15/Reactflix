import './Style.css';
import { Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Reactflix</Link>
            <Link className='favorito' to="/Favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;