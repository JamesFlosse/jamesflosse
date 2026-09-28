import './ContactSection.scss';

// TODO(james) : confirme l'adresse à afficher publiquement
// (pro vs perso) et tes liens réseaux avant mise en ligne.
const contactLinks = [
  {
    href: 'mailto:contact@jamesflosse.fr',
    label: 'contact@jamesflosse.fr',
    hint: 'Email',
  },
  {
    href: 'https://github.com/JamesFlosse',
    label: 'GitHub',
    hint: 'Code & projets',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/james-flosse',
    label: 'LinkedIn',
    hint: 'Réseau pro',
    external: true,
  },
];

function ContactSection() {
  return (
    <section id="contact" className="ContactSection">
      <h2>Contact</h2>
      <p className="ContactSection-intro">
        Un projet, une question ? Écrivez-moi.
      </p>

      <div className="ContactSection-list">
        {contactLinks.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="ContactLink"
          >
            <span className="ContactLink-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="ContactLink-hint">{item.hint}</span>
            <span className="ContactLink-label">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
