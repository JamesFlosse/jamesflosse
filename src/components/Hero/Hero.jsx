import './Hero.scss';

function Hero() {
  return (
    <section id="accueil" className="Hero">
      {/* width/height renseignés : le navigateur réserve la place avant
          le chargement, ce qui évite un décalage de la mise en page. */}
      <img
        className="Hero-portrait"
        src="/images/me.jpg"
        alt="Portrait de James Flosse"
        width="288"
        height="288"
      />

      <div className="Hero-content">
        <h1>James Flosse</h1>
        {/* TODO(james) : précise ton expérience / ta disponibilité quand tu les connais. */}
        <p>
          Développeur web — j&apos;aide les associations à créer et faire vivre
          leurs outils numériques.
        </p>
        <a className="Hero-cta" href="#services">
          Découvrir mes services
        </a>
      </div>
    </section>
  );
}

export default Hero;
