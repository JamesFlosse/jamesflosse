import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { axe } from 'jest-axe';

import App from './components/App/App';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

afterEach(cleanup);

describe('Accessibilité — page complète', () => {
  // Analyse sur document.body plutôt que sur le conteneur rendu : les règles
  // de structure (repères, présence d'un <main>, hiérarchie des titres) ne se
  // déclenchent que sur un document entier.
  it('ne présente aucune violation détectable', async () => {
    render(<App />);

    expect(await axe(document.body)).toHaveNoViolations();
  });
});

describe('Accessibilité — sections isolées', () => {
  const sections = [
    ['Header', Header],
    ['Hero', Hero],
    ['Services', ServicesSection],
    ['Projets', ProjectsSection],
    ['À propos', AboutSection],
    ['Contact', ContactSection],
    ['Footer', Footer],
  ];

  it.each(sections)('%s ne présente aucune violation', async (_, Section) => {
    const { container } = render(<Section />);

    expect(await axe(container)).toHaveNoViolations();
  });
});

describe('Accessibilité — fenêtre de détail projet', () => {
  // Le titre de chaque carte est le bouton qui ouvre la fenêtre.
  const openFirstProject = () =>
    fireEvent.click(screen.getByRole('button', { name: 'BoardGameStudios' }));

  it('ne présente aucune violation une fois ouverte', async () => {
    const { container } = render(<ProjectsSection />);

    openFirstProject();

    expect(await axe(container)).toHaveNoViolations();
  });

  it('expose un bouton de fermeture nommé', () => {
    render(<ProjectsSection />);

    openFirstProject();

    expect(screen.getByRole('button', { name: 'Fermer' })).toBeDefined();
  });

  it('referme la fenêtre après un clic sur Fermer', () => {
    render(<ProjectsSection />);

    openFirstProject();
    fireEvent.click(screen.getByRole('button', { name: 'Fermer' }));

    expect(screen.queryByRole('button', { name: 'Fermer' })).toBeNull();
  });
});
