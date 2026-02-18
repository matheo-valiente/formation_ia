import { useState, useEffect, useRef } from 'react';
import s from './App.module.css';

const STRIPE = 'https://buy.stripe.com/8x2cN77ez9RY7rU3hz4gg00';
const INSTA = 'https://www.instagram.com/intelligence_artificielle_info';
const LINKEDIN = 'https://www.linkedin.com/in/augustinp/';


function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function RevealItem({ children, className = '', threshold = 0.15 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return (
    <div ref={ref} className={`${className} ${visible ? s.itemVisible : s.itemHidden}`}>
      {children}
    </div>
  );
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
      </svg>
    ),
    title: 'Module 1 : Choisir votre modèle',
    desc: "Nous verrons comment identifier le modèle de vidéos IA qui vous correspond et valider sa viabilité économique. Vous repartez avec un plan d'attaque précis — sans jamais montrer votre visage.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Module 2 : Devenir l\'ami de l\'algorithme',
    desc: "Nous verrons comment comprendre mécaniquement ce que recherche l'algorithme et configurer votre compte pour qu'il propulse naturellement vos Reels. Vous ne postez plus dans le vide.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Module 3 : Décoder l\'esprit humain',
    desc: "Nous verrons comment identifier les patterns cachés des Reels à millions de vues et développer l'œil critique qui transforme vos créations en contenu viral.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Module 4 : Automatiser la création',
    desc: "Nous verrons comment générer scripts viraux, descriptions et idées de contenu en quelques minutes, et créer votre identité visuelle professionnelle sans caméra ni micro.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Module 5 : Produire 30 jours en 4 heures',
    desc: "Nous verrons comment organiser votre production en blocs séquentiels pour créer un mois entier de contenu en une seule session. Vous êtes libre le reste du temps.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Module 6 : Transformer l\'audience en revenus',
    desc: "Nous verrons comment monétiser votre audience et transformer votre compte en machine à générer des revenus récurrents. 10 000 abonnés sans business model ne servent à rien.",
  },
];

const stats = [
  { end: 90, suffix: '%', label: 'Du compte automatisé' },
  { end: 10, suffix: 'K', label: 'Abonnés en 30 jours' },
  { end: 4, suffix: 'h', label: 'Pour 30 jours de contenu' },
  { end: 24, suffix: '/7', label: 'Système autonome' },
];

const objections = [
  {
    objection: "Mais toi t'es expert en IA, normal que ça marche…",
    faux: "Cette méthode ne nécessite AUCUNE compétence technique.",
    vrai: "Si tu sais utiliser Instagram, tu peux appliquer ce système.",
  },
  {
    objection: "Ça marche que pour les gros comptes…",
    faux: "La méthode fonctionne dès le début, pas seulement une fois que t'as 10K abonnés.",
    vrai: "Les beta testeurs ont démarré de zéro ou avec peu d'audience. Même logique.",
  },
  {
    objection: "L'IA va changer, ta formation sera obsolète dans 6 mois…",
    faux: "Le système est pensé pour évoluer avec les outils.",
    vrai: "Tu maîtrises les principes (algo, workflow, automatisation), pas juste un outil figé.",
  },
];

const testimonials = [
  {
    name: 'Marine Dubois',
    role: '@marinedb_ia',
    avatar: '/avatars/marine.jpg',
    logo: '/logos/marine-logo.png',
    text: "J'étais sceptique au début, surtout sur la partie 'sans montrer son visage'. Mais après 3 semaines, j'ai passé de 200 à 3200 abonnés. Le système de production de contenu IA fonctionne vraiment. Je poste 2-3 fois par semaine maintenant et ça prend 30min max.",
  },
  {
    name: 'Alexandre Chen',
    role: '@alex_chen_ai',
    avatar: '/avatars/alexandre.jpg',
    logo: '/logos/alexandre-logo.png',
    text: "Ce qui m'a convaincu c'est la partie sur les revenus récurrents. J'ai appliqué la méthode de monétisation et j'ai généré mes premiers 200€ en un mois. Pour 14,90€ c'est vraiment rentable. La formation est claire, pas de blabla inutile.",
  },
  {
    name: 'Sophie Martin',
    role: '@sophie_martin_ia',
    avatar: '/avatars/sophie.jpg',
    logo: '/logos/sophie-logo.png',
    text: "J'avais déjà essayé plusieurs formations Instagram mais celle-ci est différente. Les workflows sont vraiment automatisés, pas juste 'utilisez cet outil'. En 4h j'ai créé tout mon contenu du mois. Mes Reels font maintenant entre 5K et 20K vues régulièrement.",
  },
  {
    name: 'Frédéric Petit',
    role: '@frederic_petit_ai',
    avatar: '/avatars/frederic.jpg',
    logo: '/logos/frederic-logo.png',
    text: "Beta testeur ici. Au début j'étais à 800 abonnés, maintenant j'en suis à 7500 en 6 semaines. Le plus fou c'est que je passe vraiment 4h par mois sur Instagram maintenant. Le reste tourne tout seul. La partie sur l'algorithme Instagram est gold.",
  },
];

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          io.unobserve(el);
          const duration = 1800;
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;
          const interval = setInterval(() => {
            current++;
            const progress = current / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (current >= steps) {
              setCount(end);
              clearInterval(interval);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const Arrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const InstaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);


const legalContent = {
  mentions: {
    title: 'Mentions légales',
    body: `**Éditeur du site**
intelligence_artificielle_info / CYIA
Statut : Auto-entrepreneur
Site web : intelligence-artificielle-info.com
Email : contact@intelligence-artificielle-info.com
Directeur de la publication : intelligence_artificielle_info / CYIA

**Hébergement**
Ce site est hébergé par Vercel Inc.
440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
Site web : vercel.com

**Propriété intellectuelle**
L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de intelligence_artificielle_info / CYIA, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.

**Responsabilité**
intelligence_artificielle_info / CYIA s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou résultats obtenus suite à l'utilisation de ces informations.

**Contact**
Pour toute question, vous pouvez nous contacter à : contact@intelligence-artificielle-info.com`,
  },
  cgv: {
    title: 'Conditions générales de vente',
    body: `**Article 1 — Objet**
Les présentes conditions générales de vente (CGV) régissent la vente de la formation en ligne proposée par intelligence_artificielle_info / CYIA sur le site intelligence-artificielle-info.com.

**Article 2 — Produit**
La formation comprend : des vidéos, des documents PDF, des quiz et des exercices pratiques. L'accès est accordé à vie après l'achat.

**Article 3 — Prix**
Le prix de la formation est de 14,90€ TTC (paiement unique). Ce prix est susceptible d'être modifié à tout moment, mais le prix applicable est celui en vigueur au moment de la commande.

**Article 4 — Paiement**
Le paiement est effectué en ligne via la plateforme sécurisée Stripe. Les moyens de paiement acceptés incluent : carte bancaire, Apple Pay, Google Pay et autres moyens proposés par Stripe.

**Article 5 — Accès à la formation**
L'accès à la formation est immédiat après confirmation du paiement. Un email de confirmation est envoyé à l'adresse indiquée lors de l'achat.

**Article 6 — Droit de rétractation**
Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de contenu numérique non fourni sur un support matériel dont l'exécution a commencé avec l'accord préalable du consommateur. En accédant à la formation, vous reconnaissez renoncer expressément à votre droit de rétractation.

**Article 7 — Propriété intellectuelle**
Le contenu de la formation est protégé par le droit d'auteur. Toute reproduction, partage ou revente est strictement interdit.

**Article 8 — Responsabilité**
Les résultats obtenus grâce à la formation dépendent de l'implication de l'utilisateur. intelligence_artificielle_info / CYIA ne garantit aucun résultat spécifique en termes de revenus ou de croissance.

**Article 9 — Droit applicable**
Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.

**Contact** : contact@intelligence-artificielle-info.com`,
  },
  confidentialite: {
    title: 'Politique de confidentialité',
    body: `**Dernière mise à jour** : ${new Date().toLocaleDateString('fr-FR')}

**Responsable du traitement**
intelligence_artificielle_info / CYIA
Email : contact@intelligence-artificielle-info.com

**Données collectées**
Lors de l'achat de la formation, les données suivantes sont collectées via Stripe : nom, adresse email et informations de paiement. Ces données sont nécessaires au traitement de votre commande.

**Utilisation des données**
Vos données sont utilisées exclusivement pour :
- Le traitement et la confirmation de votre commande
- L'envoi de votre accès à la formation
- La communication relative à votre achat

**Sous-traitants**
- Stripe (traitement des paiements) — stripe.com
- Vercel (hébergement du site) — vercel.com

**Cookies**
Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.

**Conservation des données**
Vos données sont conservées pendant la durée nécessaire à la gestion de votre accès à la formation et aux obligations légales (comptabilité, fiscalité).

**Vos droits**
Conformément au RGPD, vous disposez des droits suivants : accès, rectification, suppression, limitation, portabilité et opposition. Pour exercer ces droits, contactez-nous à : contact@intelligence-artificielle-info.com

**Sécurité**
Les paiements sont sécurisés par Stripe (certifié PCI DSS). Nous ne stockons aucune donnée bancaire sur nos serveurs.

**Contact**
Pour toute question relative à vos données personnelles : contact@intelligence-artificielle-info.com`,
  },
};

export default function App() {
  const [ctaRef, ctaVis] = useReveal();
  const [legalPage, setLegalPage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={s.page}>
      <div className={s.grain} aria-hidden="true" />

      <nav className={s.nav}>
        <div className={s.navInner}>
          <a href="#" className={s.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.png" alt="Logo" className={s.logoImg} />
            intelligence_artificielle_info
          </a>
          <div className={s.navLinks}>
            <a href="#social-proof" className={s.navLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('social-proof'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Preuve sociale</a>
            <a href="#comparaison" className={s.navLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('comparaison'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Tarif</a>
            <a href="#features" className={s.navLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('features'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Méthode</a>
            <a href="#objections" className={s.navLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('objections'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Objections</a>
          </div>
          <div className={s.navRight}>
            <a
              href={STRIPE}
              className={s.navCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder à la formation
            </a>
            <button
              className={s.burger}
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={s.panelOverlay} onClick={() => setMenuOpen(false)}>
          <div className={s.panel} onClick={(e) => e.stopPropagation()}>
            <button className={s.panelClose} onClick={() => setMenuOpen(false)}>✕</button>
            <nav className={s.panelNav}>
              <a href="#social-proof" className={s.panelLink} onClick={(e) => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('social-proof'); if (el) { setTimeout(() => { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); }, 100); } }}>Preuve sociale</a>
              <a href="#comparaison" className={s.panelLink} onClick={(e) => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('comparaison'); if (el) { setTimeout(() => { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); }, 100); } }}>Tarif</a>
              <a href="#features" className={s.panelLink} onClick={(e) => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('features'); if (el) { setTimeout(() => { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); }, 100); } }}>Méthode</a>
              <a href="#objections" className={s.panelLink} onClick={(e) => { e.preventDefault(); setMenuOpen(false); const el = document.getElementById('objections'); if (el) { setTimeout(() => { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); }, 100); } }}>Objections</a>
              <a href={STRIPE} className={s.panelCta} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                Accéder à la formation
              </a>
            </nav>
          </div>
        </div>
      )}

      <section className={s.hero}>
        <div className={s.orb1} aria-hidden="true" />
        <div className={s.orb2} aria-hidden="true" />
        <div className={s.orb3} aria-hidden="true" />

        <div className={s.heroInner}>
          <div className={s.badge}>
            <span className={s.badgePulse} />
            Créer une marque forte sans caméra ni micro
          </div>

          <h1 className={s.title}>
            De 0 à 10 000 abonnés en 30 jours{' '}
            <span className={s.gradient}>grâce à l'IA</span>
          </h1>

          <p className={s.subtitle}>
            Créez 30 jours de contenu en 4 heures et transformez vos Reels en revenus récurrents — sans montrer votre visage.
          </p>

          <div className={s.heroActions}>
            <a
              href={STRIPE}
              className={s.ctaMain}
              target="_blank"
              rel="noopener noreferrer"
            >
              Accéder à la formation
              <Arrow />
            </a>
          </div>

          <p className={s.trustLine}>
            Paiement sécurisé par Stripe
          </p>
        </div>
      </section>

      <section className={s.stats}>
        <div className={s.statsGrid}>
          {stats.map((stat, i) => (
            <RevealItem key={i} className={s.stat}>
              <span className={s.statVal}>
                <CountUp end={stat.end} suffix={stat.suffix} />
              </span>
              <span className={s.statLabel}>{stat.label}</span>
            </RevealItem>
          ))}
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section id="social-proof" className={s.socialProof}>
        <div className={s.socialProofInner}>
          <RevealItem className={s.sectionHead}>
            <span className={s.tag}>Preuve sociale</span>
            <h2 className={s.sectionTitle}>
              Des résultats{' '}
              <span className={s.gradient}>concrets</span>
              <br />
              et vérifiables
            </h2>
          </RevealItem>

          {/* Partie 1 : Screenshots de crédibilité */}
          <div className={s.credibilitySection}>
            <RevealItem className={s.credibilityGrid}>
              <div className={s.credibilityCard}>
                <div className={s.credibilityImageWrapper}>
                  <img 
                    src="/public/tiktok-profil.jpg" 
                    alt="Profil TikTok - Nombre d'abonnés" 
                    className={s.credibilityImage}
                  />
                </div>
                <p className={s.credibilityLabel}>Abonnés TikTok</p>
              </div>
              <div className={s.credibilityCard}>
                <div className={s.credibilityImageWrapper}>
                  <img 
                    src="/public/instagram-vues.jpg" 
                    alt="Instagram - Vues mensuelles" 
                    className={s.credibilityImage}
                  />
                </div>
                <p className={s.credibilityLabel}>Vues Instagram (1 mois)</p>
              </div>
            </RevealItem>
          </div>

          {/* Partie 2 : Témoignages */}
          <div className={s.testimonialsSection}>
            <RevealItem className={s.sectionHead}>
              <h3 className={s.testimonialsTitle}>
                Ce que disent les{' '}
                <span className={s.gradient}>beta testeurs</span>
              </h3>
            </RevealItem>
            <div className={s.testimonialsGrid}>
              {testimonials.map((testimonial, i) => (
                <RevealItem key={i} className={s.testimonialCard}>
                  <div className={s.testimonialHeader}>
                    <div className={s.testimonialAvatarWrapper}>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className={s.testimonialAvatar}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={s.testimonialAvatarFallback} style={{ display: 'none' }}>
                        {testimonial.name.charAt(0)}
                      </div>
                      {testimonial.logo && (
                        <img 
                          src={testimonial.logo} 
                          alt={`${testimonial.name} logo`}
                          className={s.testimonialLogo}
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}
                    </div>
                    <div className={s.testimonialInfo}>
                      <div className={s.testimonialName}>{testimonial.name}</div>
                      <div className={s.testimonialRole}>{testimonial.role}</div>
                    </div>
                  </div>
                  <div className={s.testimonialStars}>
                    {'★'.repeat(5)}
                  </div>
                  <p className={s.testimonialText}>"{testimonial.text}"</p>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comparaison" className={s.comp}>
        <div className={s.compInner}>
          <RevealItem className={s.sectionHead}>
            <span className={s.tag}>Pourquoi cette méthode ?</span>
            <h2 className={s.sectionTitle}>Le choix est vite fait.</h2>
          </RevealItem>

          <div className={s.compGrid}>
            {/* Without */}
            <RevealItem className={`${s.compCard} ${s.compOld}`}>
              <h3 className={s.compCardTitle}>Sans la méthode</h3>
              <ul className={s.compList}>
                <li>
                  <span className={s.compX}>✕</span>
                  Coûts matériels : caméras, micros, logiciels de montage (500€+)
                </li>
                <li>
                  <span className={s.compX}>✕</span>
                  20-25 heures de travail par mois
                </li>
                <li>
                  <span className={s.compX}>✕</span>
                  Résultats incertains
                </li>
                <li>
                  <span className={s.compX}>✕</span>
                  Aucune automatisation
                </li>
              </ul>
            </RevealItem>

            <div className={s.compVs}>VS</div>

            <RevealItem className={`${s.compCard} ${s.compNew}`}>
              <h3 className={s.compCardTitle}>Avec la méthode</h3>
              <div className={s.compPrice}>
                14,90€ <span>une seule fois</span>
              </div>
              <ul className={s.compList}>
                <li>
                  <span className={s.compCheck}>✓</span>
                  4 heures par mois suffisent
                </li>
                <li>
                  <span className={s.compCheck}>✓</span>
                  Méthode éprouvée et reproductible
                </li>
                <li>
                  <span className={s.compCheck}>✓</span>
                  Automatisation à 90%
                </li>
                <li>
                  <span className={s.compCheck}>✓</span>
                  Système autonome 24/7
                </li>
                <li>
                  <span className={s.compCheck}>✓</span>
                  Accès à vie à la formation
                </li>
              </ul>
              <a
                href={STRIPE}
                className={s.compCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                Commencer maintenant
                <Arrow />
              </a>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className={s.features}>
        <div className={s.featInner}>
          <RevealItem className={s.sectionHead}>
            <span className={s.tag}>Le programme</span>
            <h2 className={s.sectionTitle}>
              Les différents modules{' '}
              <span className={s.gradient}>de la formation</span>
            </h2>
          </RevealItem>

          <div className={s.featGrid}>
            {features.map((f, i) => (
              <RevealItem key={i} className={s.featCard}>
                <div className={s.featIcon}>{f.icon}</div>
                <h3 className={s.featTitle}>{f.title}</h3>
                <p className={s.featDesc}>{f.desc}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Objections ─── */}
      <section id="objections" className={s.objections}>
        <div className={s.objectionsInner}>
          <RevealItem className={s.sectionHead}>
            <span className={s.tag}>Objections</span>
            <h2 className={s.sectionTitle}>
              On répond aux questions
              <br />
              <span className={s.gradient}>qui bloquent</span>
            </h2>
          </RevealItem>

          <div className={s.objectionsList}>
            {objections.map((item, i) => (
              <RevealItem key={i} className={s.objectionCard}>
                <p className={s.objectionQuote}>"{item.objection}"</p>
                <div className={s.objectionResponse}>
                  <span className={s.objectionFaux}>❌ FAUX.</span>{' '}
                  <span className={s.objectionFauxText}>{item.faux}</span>
                </div>
                <div className={s.objectionVrai}>
                  <span className={s.objectionCheck}>✅</span> {item.vrai}
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Final ─── */}
      <section
        id="cta-final"
        ref={ctaRef}
        className={`${s.final} ${ctaVis ? s.reveal : ''}`}
      >
        <div className={s.finalOrb} aria-hidden="true" />
        <div className={s.finalInner}>
          <h2 className={s.finalTitle}>Dans 30 jours, tu auras :</h2>

          <ul className={s.finalList}>
            {[
              'Un système de production de contenu rodé (4h/mois au lieu de 40h)',
              '10K abonnés (ou en bonne voie)',
              '30 jours de contenu d\'avance (zéro stress)',
              'Un compte qui grandit pendant que tu dors'
            ].map((item, i) => (
              <RevealItem key={i} className={s.finalListItem}>
                <div className={s.finalCheckWrapper}>
                  <span className={s.finalCheck}>✅</span>
                </div>
                <span className={s.finalText}>{item}</span>
              </RevealItem>
            ))}
          </ul>

          <div className={s.finalCtaWrap}>
            <a
              href={STRIPE}
              className={s.finalCta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Commencer maintenant — 14,90€
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerTop}>
            <div className={s.footerBrand}>
              <a href="#" className={s.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img src="/logo.png" alt="Logo" className={s.logoImg} />
                Intelligence Artificielle Info
              </a>
              <p className={s.footerDesc}>
                La méthode complète pour automatiser votree Instagram grâce à l'IA.
              </p>
            </div>

            <div className={s.footerCol}>
              <h4 className={s.footerColTitle}>Navigation</h4>
              <a href="#social-proof" className={s.footerLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('social-proof'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Preuve sociale</a>
              <a href="#comparaison" className={s.footerLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('comparaison'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Tarif</a>
              <a href="#features" className={s.footerLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('features'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Méthode</a>
              <a href="#objections" className={s.footerLink} onClick={(e) => { e.preventDefault(); const el = document.getElementById('objections'); if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 100; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>Objections</a>
              <a href={STRIPE} className={s.footerLink} target="_blank" rel="noopener noreferrer">Accéder à la formation</a>
            </div>

            <div className={s.footerCol}>
              <h4 className={s.footerColTitle}>Légal</h4>
              <button onClick={() => setLegalPage('mentions')} className={s.footerLinkBtn}>Mentions légales</button>
              <button onClick={() => setLegalPage('cgv')} className={s.footerLinkBtn}>Conditions générales de vente</button>
              <button onClick={() => setLegalPage('confidentialite')} className={s.footerLinkBtn}>Politique de confidentialité</button>
            </div>
          </div>

          <div className={s.footerBottom}>
            <p className={s.footerCopy}>
              © {new Date().getFullYear()} Intelligence Artificielle Info. Tous droits réservés.
            </p>
            <div className={s.footerSocials}>
              <a href={INSTA} className={s.footerSocial} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstaIcon />
              </a>
              <a href="#" className={s.footerSocial} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
                </svg>
              </a>
              <a href="#" className={s.footerSocial} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {legalPage && (
        <div className={s.modalOverlay} onClick={() => setLegalPage(null)}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <h2 className={s.modalTitle}>{legalContent[legalPage].title}</h2>
              <button className={s.modalClose} onClick={() => setLegalPage(null)}>✕</button>
            </div>
            <div className={s.modalBody}>
              {legalContent[legalPage].body.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h3 key={i} className={s.modalH3}>{line.replace(/\*\*/g, '')}</h3>;
                }
                if (line.startsWith('**') && line.includes('**')) {
                  const parts = line.split('**');
                  return <p key={i} className={s.modalP}><strong>{parts[1]}</strong>{parts[2]}</p>;
                }
                if (line.startsWith('- ')) {
                  return <p key={i} className={s.modalLi}>{line}</p>;
                }
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className={s.modalP}>{line}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
