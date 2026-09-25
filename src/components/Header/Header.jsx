import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <a className="Header-brand" href="#accueil">
        James Flosse
      </a>

      <nav className="Header-nav">
        <a href="#services">Services</a>
        <a href="#projets">Projets</a>
        <a href="#apropos">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
