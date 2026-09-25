import './ContactSection.scss';

function ContactSection() {
  return (
    <section id="contact" className="ContactSection">
      <h2>Contact</h2>

      {/* TODO(james) : confirme l'adresse à afficher publiquement
          (pro vs perso) et tes liens réseaux avant mise en ligne. */}
      <ul className="ContactSection-links">
        <li>
          <a href="mailto:contact@jamesflosse.fr">contact@jamesflosse.fr</a>
        </li>
        <li>
          <a
            href="https://github.com/JamesFlosse"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/james-flosse"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactSection;
