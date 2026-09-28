import './ContactSection.scss';

// L'adresse est affichée avec « at » et le mailto est assemblé à l'exécution :
// le littéral complet n'apparaît nulle part dans le bundle, ce qui limite
// la récolte automatique par les robots à spam.
const EMAIL_USER = 'contact';
const EMAIL_DOMAIN = 'jamesflosse.fr';
const emailDisplay = `${EMAIL_USER} at ${EMAIL_DOMAIN}`;
const emailHref = `mailto:${EMAIL_USER}${String.fromCharCode(
  64
)}${EMAIL_DOMAIN}`;

function ContactSection() {
  return (
    <section id="contact" className="ContactSection">
      <h2>Contact</h2>

      <p className="ContactSection-intro">
        Un projet, une question, ou simplement l&apos;envie d&apos;en discuter ?
        Écrivez-moi, je réponds sous quelques jours.
      </p>

      <a href={emailHref} className="ContactSection-cta">
        {emailDisplay}
      </a>

      <div className="ContactSection-social">
        <span className="ContactSection-socialLabel">Ailleurs</span>
        <a
          href="https://github.com/JamesFlosse"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/james-flosse"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
