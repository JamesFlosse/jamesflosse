import services from '../../data/services';

import './ServicesSection.scss';

function ServicesSection() {
  return (
    <section id="services" className="ServicesSection">
      <h2>Services</h2>
      <p className="ServicesSection-note">
        Activité en auto-entreprise — lancement prochainement. Contactez-moi dès
        maintenant pour en discuter.
      </p>

      <div className="ServicesSection-list">
        {services.map((service, index) => (
          <article key={service.id} className="ServiceCard">
            <span className="ServiceCard-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
