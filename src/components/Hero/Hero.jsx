import './Hero.scss';

function Hero() {
  return (
    <section id="accueil" className="Hero">
      <h1>James Flosse</h1>
      {/* TODO(james) : précise ton expérience / ta disponibilité quand tu les connais. */}
      <p>
        Développeur web freelance — j&apos;aide les associations à créer et
        faire vivre leurs outils numériques.
      </p>
      <a className="Hero-cta" href="#services">
        Découvrir mes services
      </a>
    </section>
  );
}

export default Hero;
