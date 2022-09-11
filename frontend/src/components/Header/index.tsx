import logoHeader from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logoHeader} alt="DSMeta" />
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por <a href="https://github.com/1augustogg">@1augustogg</a></p>
                </div>
            </header>
        </>
    )
}

export default Header;