import { useEffect } from 'react';

import './Header.scss';

const navItems = [
  {
    href: '#services',
    label: 'Services',
    icon: (
      <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.2l5-.7L12 3z" />
    ),
  },
  {
    href: '#projets',
    label: 'Projets',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  },
  {
    href: '#apropos',
    label: 'À propos',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6" />
      </>
    ),
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
];

function Header() {
  useEffect(() => {
    const viewport = window.visualViewport;

    // Sans l'API (anciens navigateurs), --tabbar-visual-offset garde sa
    // valeur de repli (0px) : le CSS position:fixed;bottom:0 s'applique
    // tel quel, comme avant ce correctif.
    if (!viewport) return undefined;

    const updateOffset = () => {
      // Écart entre le bas de la zone de mise en page (window.innerHeight)
      // et le bas de la zone réellement visible (barre d'adresse déployée,
      // clavier ouvert...). Décaler la barre de cet écart la garde dans le
      // cadre visible sans attendre un scroll.
      const offset = window.innerHeight - viewport.height - viewport.offsetTop;
      document.documentElement.style.setProperty(
        '--tabbar-visual-offset',
        `${Math.max(0, offset)}px`
      );
    };

    updateOffset();
    viewport.addEventListener('resize', updateOffset);
    viewport.addEventListener('scroll', updateOffset);

    return () => {
      viewport.removeEventListener('resize', updateOffset);
      viewport.removeEventListener('scroll', updateOffset);
    };
  }, []);

  return (
    <>
      <header className="Header">
        <a className="Header-brand" href="#accueil">
          <img src="/images/logo-texte.svg" alt="James Flosse" />
        </a>

        <nav className="Header-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <nav className="TabBar" aria-label="Navigation mobile">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="TabBar-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

export default Header;
