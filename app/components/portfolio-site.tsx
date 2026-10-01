"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

type Locale = "fr" | "en";
type Theme = "dark" | "light";
type Page = "home" | "about" | "journey" | "skills" | "contact";

type IconName =
  | "arrow"
  | "award"
  | "download"
  | "mail"
  | "network"
  | "phone"
  | "server"
  | "shield"
  | "user";

const linkedinUrl =
  "https://www.linkedin.com/in/th%C3%A9o-lavagna-1a6b3b310/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const copy = {
  fr: {
    nav: {
      home: "Accueil",
      contact: "Contact",
      back: "Retour à l’accueil",
      openMenu: "Ouvrir la navigation",
      theme: "Changer le thème",
      language: "Changer la langue",
    },
    common: {
      name: "Lavagna Théo",
      role: "Ingénieur systèmes, réseaux et cybersécurité",
      currentStudy: "ISEN — Cycle ingénieur Cybersécurité 2026–2029",
      contact: "Me contacter",
      journey: "Mon parcours",
      skills: "Mes compétences",
      download: "Télécharger mon CV",
      readMore: "Découvrir",
      email: "E-mail",
      phone: "Téléphone",
      linkedin: "LinkedIn",
      location: "Localisation",
      footerLine: "Systèmes · Réseaux · Cybersécurité",
      rights: "Portfolio professionnel",
    },
    home: {
      eyebrow: "Infrastructure · Réseau · Sécurité",
      expertiseLabel: "Domaines d’expertise",
      expertise: [
        {
          icon: "shield" as IconName,
          title: "Cybersécurité",
          text: "Protection des systèmes d’information, analyse des risques, sécurisation des accès et réponse aux incidents.",
        },
        {
          icon: "network" as IconName,
          title: "Réseaux & infrastructures",
          text: "Conception, déploiement et supervision d’infrastructures réseau robustes, sécurisées et évolutives.",
        },
        {
          icon: "server" as IconName,
          title: "Systèmes",
          text: "Administration, virtualisation, automatisation, sauvegarde et continuité de service.",
        },
      ],
      exploreLabel: "Explorer le portfolio",
      explore: [
        {
          href: "/a-propos",
          title: "À propos",
          text: "Mon profil, ma manière de travailler et ce qui nourrit ma curiosité.",
        },
        {
          href: "/parcours",
          title: "Parcours",
          text: "Mes expériences professionnelles et mon cursus, de l’infrastructure à la cybersécurité.",
        },
        {
          href: "/competences",
          title: "Compétences & certifications",
          text: "Mes environnements techniques, outils et certifications professionnelles.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Un profil technique, polyvalent et tourné vers le collectif.",
      intro:
        "Passionné par les systèmes, les réseaux et la cybersécurité, j’aime comprendre les infrastructures dans leur ensemble : de leur déploiement à leur sécurisation, jusqu’à leur maintien en conditions opérationnelles.",
      second:
        "Mon parcours m’a amené à intervenir auprès d’utilisateurs, d’équipes techniques et de prestataires. J’y ai développé une approche à la fois structurée, accessible et orientée résolution.",
      pillarsLabel: "Ma manière de travailler",
      pillars: [
        {
          number: "01",
          title: "Esprit d’équipe",
          text: "Partager l’information, écouter les besoins et faire avancer collectivement les sujets techniques.",
        },
        {
          number: "02",
          title: "Polyvalence",
          text: "Passer du support à l’infrastructure, du diagnostic à la sécurisation, en gardant une vision globale.",
        },
        {
          number: "03",
          title: "Responsabilités",
          text: "Prendre en charge une intervention, coordonner les acteurs et suivre le résultat jusqu’à sa validation.",
        },
        {
          number: "04",
          title: "Communication",
          text: "Expliquer clairement des enjeux techniques et adapter mon discours à chaque interlocuteur.",
        },
      ],
      interestsLabel: "En dehors de l’informatique",
      interests: [
        "Sport & musculation",
        "Ceinture noire de judo",
        "MotoGP",
        "Randonnée & bivouac",
      ],
    },
    journey: {
      eyebrow: "Parcours",
      title: "Des expériences de terrain au cycle ingénieur.",
      intro:
        "Un parcours construit autour de l’administration, du réseau, de l’accompagnement des utilisateurs et de la sécurisation des infrastructures.",
      experienceLabel: "Expériences professionnelles",
      educationLabel: "Formation",
      experiences: [
        {
          dates: "Septembre 2026 — Aujourd’hui",
          role: "Ingénieur réseaux, systèmes et cybersécurité — Alternance",
          company: "DSI de Mouans-Sartoux",
          summary:
            "Alternance au sein de la direction des systèmes d’information de la Ville de Mouans-Sartoux.",
          bullets: [],
          tags: ["Réseaux", "Systèmes", "Cybersécurité"],
        },
        {
          dates: "Juillet 2025 — Août 2026",
          role: "Technicien informatique polyvalent",
          company: "Access2IT",
          summary:
            "Support et accompagnement des utilisateurs, interventions chez les clients et administration de systèmes et réseaux.",
          bullets: [
            "Diagnostic et résolution d’incidents",
            "Gestion complète d’interventions",
            "Coordination avec des prestataires",
            "Conseil et accompagnement des utilisateurs",
          ],
          tags: [
            "Windows Server",
            "Active Directory",
            "Microsoft 365",
            "VMware ESXi",
            "Stormshield",
            "Veeam",
            "Synology",
            "SentinelOne",
          ],
        },
        {
          dates: "Mai–Août 2024 · Janvier–Février 2025",
          role: "Stagiaire administrateur systèmes et réseaux",
          company: "Communauté d’Agglomération du Pays de Grasse",
          summary:
            "Déploiement automatisé de postes et intervention sur l’infrastructure réseau d’une collectivité.",
          bullets: [
            "Déploiement et exploitation d’un serveur FOG",
            "Automatisation du déploiement des postes",
            "Installation et configuration de switches et routeurs",
            "Support et documentation technique",
          ],
          tags: ["FOG", "Switching", "Routing", "Déploiement", "Support"],
        },
        {
          dates:
            "Nov.–Déc. 2021 · Mars–Avril 2022 · Janv.–Mars 2023",
          role: "Stagiaire administrateur systèmes, réseaux et cybersécurité",
          company: "Mairie de Mouans-Sartoux",
          summary:
            "Sécurisation des accès réseau et participation à l’administration de l’infrastructure municipale.",
          bullets: [
            "Déploiement d’un serveur RADIUS",
            "Sécurisation des accès réseau",
            "Audit de sécurité réseau",
            "Administration et documentation technique",
          ],
          tags: ["RADIUS", "Audit", "Sécurité réseau", "Administration"],
        },
      ],
      education: [
        {
          dates: "2026 — 2029",
          school: "ISEN Toulon",
          degree: "Cycle ingénieur — Cybersécurité",
          current: true,
        },
        {
          dates: "2025 — 2026",
          school: "IUT Nice Côte d’Azur · Sophia Antipolis",
          degree: "Licence professionnelle ASSR",
          current: false,
        },
        {
          dates: "2023 — 2025",
          school: "Lycée Honoré d’Estienne d’Orves · Nice",
          degree: "BTS SIO SISR",
          current: false,
        },
        {
          dates: "2020 — 2023",
          school: "Lycée Jacques Dolle · Antibes",
          degree: "BAC SN RISC",
          current: false,
        },
      ],
      current: "En cours",
    },
    skills: {
      eyebrow: "Compétences",
      title: "Un socle technique organisé par environnements.",
      intro:
        "Des compétences acquises en formation et consolidées au travers d’interventions, de déploiements et de projets d’infrastructure.",
      groups: [
        {
          number: "01",
          title: "Cybersécurité",
          items: [
            "Firewall Stormshield",
            "Filtrage réseau",
            "IDS / IPS",
            "Gestion des accès",
            "LDAP / Active Directory",
            "Wazuh",
            "Analyse de logs",
            "Durcissement des systèmes",
          ],
        },
        {
          number: "02",
          title: "Réseaux",
          items: [
            "Routage IPv4 / IPv6",
            "VLAN",
            "NAT / PAT",
            "VPN IPsec",
            "VPN SSL",
            "Routage statique",
            "Wireshark",
          ],
        },
        {
          number: "03",
          title: "Systèmes Microsoft",
          items: [
            "PowerShell",
            "Windows Server",
            "Active Directory",
            "DNS",
            "DHCP",
            "GPO",
            "Hyper-V",
            "Microsoft 365",
          ],
        },
        {
          number: "04",
          title: "Linux",
          items: [
            "Debian / Ubuntu",
            "Systemd",
            "Bash",
            "Utilisateurs & permissions",
            "Docker",
            "KVM",
          ],
        },
        {
          number: "05",
          title: "Virtualisation & cloud",
          items: [
            "Proxmox VE",
            "VMware ESXi",
            "Microsoft Azure",
            "VirtualBox",
            "Sauvegarde d’infrastructures",
            "Veeam",
            "Synology",
          ],
        },
        {
          number: "06",
          title: "Conteneurisation & DevOps",
          items: [
            "Docker",
            "Kubernetes",
            "Kind",
            "Helm",
            "Git",
            "CI/CD",
          ],
        },
      ],
      certificationsLabel: "Certifications",
      certifications: [
        { date: "Mai 2026", title: "Stormshield CSNA" },
        { date: "Juillet 2025", title: "CCNAv7 — Switching, Routing and Wireless Essentials" },
        { date: "Mai 2025", title: "Cisco CyberOps Associate" },
        { date: "Février 2025", title: "CCNAv7 — Introduction to Networks" },
        { date: "Février 2025", title: "SecNumAcadémie — ANSSI" },
      ],
      languagesLabel: "Langues",
      languages: [
        { label: "Français", level: "Langue maternelle" },
        { label: "Anglais", level: "B2 · Intermédiaire supérieur" },
        { label: "Italien", level: "A2 · Pré-intermédiaire" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Échangeons autour de vos enjeux techniques.",
      intro:
        "Une question, un échange professionnel ou une opportunité de collaboration ? Vous pouvez me contacter directement par e-mail, téléphone ou LinkedIn.",
      mailAction: "Écrire un e-mail",
      phoneAction: "Appeler",
      linkedinAction: "Voir le profil",
      locationText: "Mouans-Sartoux · Alpes-Maritimes",
      mobility: "Mobilité entre Toulon et Nice",
      availability:
        "Je réponds personnellement aux messages et prends le temps de comprendre le contexte de chaque échange.",
    },
  },
  en: {
    nav: {
      home: "Home",
      contact: "Contact",
      back: "Back to home",
      openMenu: "Open navigation",
      theme: "Change theme",
      language: "Change language",
    },
    common: {
      name: "Lavagna Théo",
      role: "Systems, Networks and Cybersecurity Engineer",
      currentStudy: "ISEN — Cybersecurity Engineering Program 2026–2029",
      contact: "Contact me",
      journey: "My journey",
      skills: "My skills",
      download: "Download my résumé",
      readMore: "Discover",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      location: "Location",
      footerLine: "Systems · Networks · Cybersecurity",
      rights: "Professional portfolio",
    },
    home: {
      eyebrow: "Infrastructure · Network · Security",
      expertiseLabel: "Areas of expertise",
      expertise: [
        {
          icon: "shield" as IconName,
          title: "Cybersecurity",
          text: "Information system protection, risk analysis, access security and incident response.",
        },
        {
          icon: "network" as IconName,
          title: "Networks & infrastructure",
          text: "Design, deployment and supervision of robust, secure and scalable network infrastructures.",
        },
        {
          icon: "server" as IconName,
          title: "Systems",
          text: "Administration, virtualization, automation, backup and service continuity.",
        },
      ],
      exploreLabel: "Explore the portfolio",
      explore: [
        {
          href: "/a-propos",
          title: "About",
          text: "My profile, how I work and what fuels my curiosity.",
        },
        {
          href: "/parcours",
          title: "Journey",
          text: "My professional experience and education, from infrastructure to cybersecurity.",
        },
        {
          href: "/competences",
          title: "Skills & certifications",
          text: "My technical environments, tools and professional certifications.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "A technical, versatile profile driven by teamwork.",
      intro:
        "Passionate about systems, networks and cybersecurity, I enjoy understanding infrastructures as a whole: from deployment and security to keeping them operational.",
      second:
        "My journey has led me to work with users, technical teams and external providers. These experiences shaped a structured, accessible and solution-focused approach.",
      pillarsLabel: "How I work",
      pillars: [
        {
          number: "01",
          title: "Team spirit",
          text: "Sharing information, listening to needs and moving technical topics forward together.",
        },
        {
          number: "02",
          title: "Versatility",
          text: "Moving from support to infrastructure and from diagnosis to security while keeping the big picture in mind.",
        },
        {
          number: "03",
          title: "Ownership",
          text: "Taking charge of an intervention, coordinating stakeholders and following through to validation.",
        },
        {
          number: "04",
          title: "Communication",
          text: "Explaining technical matters clearly and adapting the message to each audience.",
        },
      ],
      interestsLabel: "Beyond technology",
      interests: [
        "Sports & strength training",
        "Judo black belt",
        "MotoGP",
        "Hiking & bivouacking",
      ],
    },
    journey: {
      eyebrow: "Journey",
      title: "From hands-on experience to engineering studies.",
      intro:
        "A path built around administration, networking, user support and infrastructure security.",
      experienceLabel: "Professional experience",
      educationLabel: "Education",
      experiences: [
        {
          dates: "September 2026 — Present",
          role: "Networks, Systems and Cybersecurity Engineer — Apprenticeship",
          company: "IT Department — City of Mouans-Sartoux",
          summary:
            "Apprenticeship within the IT department of the City of Mouans-Sartoux.",
          bullets: [],
          tags: ["Networks", "Systems", "Cybersecurity"],
        },
        {
          dates: "July 2025 — August 2026",
          role: "Versatile IT Technician",
          company: "Access2IT",
          summary:
            "User support, on-site client interventions and systems and network administration.",
          bullets: [
            "Incident diagnosis and resolution",
            "End-to-end intervention management",
            "Coordination with external providers",
            "User guidance and support",
          ],
          tags: [
            "Windows Server",
            "Active Directory",
            "Microsoft 365",
            "VMware ESXi",
            "Stormshield",
            "Veeam",
            "Synology",
            "SentinelOne",
          ],
        },
        {
          dates: "May–August 2024 · January–February 2025",
          role: "Systems and Network Administrator Intern",
          company: "Pays de Grasse Agglomeration Community",
          summary:
            "Automated workstation deployment and network infrastructure work for a local authority.",
          bullets: [
            "FOG server deployment and operation",
            "Automated workstation provisioning",
            "Switch and router installation and configuration",
            "Support and technical documentation",
          ],
          tags: ["FOG", "Switching", "Routing", "Deployment", "Support"],
        },
        {
          dates: "Nov.–Dec. 2021 · Mar.–Apr. 2022 · Jan.–Mar. 2023",
          role: "Systems, Networks and Cybersecurity Administrator Intern",
          company: "Mouans-Sartoux Town Hall",
          summary:
            "Network access security and contribution to the administration of the municipal infrastructure.",
          bullets: [
            "RADIUS server deployment",
            "Network access security",
            "Network security audit",
            "Administration and technical documentation",
          ],
          tags: ["RADIUS", "Audit", "Network security", "Administration"],
        },
      ],
      education: [
        {
          dates: "2026 — 2029",
          school: "ISEN Toulon",
          degree: "Cybersecurity Engineering Program",
          current: true,
        },
        {
          dates: "2025 — 2026",
          school: "IUT Nice Côte d’Azur · Sophia Antipolis",
          degree: "BSc in Systems, Networks & Cybersecurity",
          current: false,
        },
        {
          dates: "2023 — 2025",
          school: "Honoré d’Estienne d’Orves High School · Nice",
          degree: "BTS SIO SISR · Two-year technical degree",
          current: false,
        },
        {
          dates: "2020 — 2023",
          school: "Jacques Dolle High School · Antibes",
          degree: "BAC SN RISC · Vocational IT diploma",
          current: false,
        },
      ],
      current: "Current",
    },
    skills: {
      eyebrow: "Skills",
      title: "A technical foundation organized by environment.",
      intro:
        "Skills developed through education and strengthened through interventions, deployments and infrastructure projects.",
      groups: [
        {
          number: "01",
          title: "Cybersecurity",
          items: [
            "Stormshield Firewall",
            "Network filtering",
            "IDS / IPS",
            "Access management",
            "LDAP / Active Directory",
            "Wazuh",
            "Log analysis",
            "System hardening",
          ],
        },
        {
          number: "02",
          title: "Networks",
          items: [
            "IPv4 / IPv6 routing",
            "VLAN",
            "NAT / PAT",
            "IPsec VPN",
            "SSL VPN",
            "Static routing",
            "Wireshark",
          ],
        },
        {
          number: "03",
          title: "Microsoft systems",
          items: [
            "PowerShell",
            "Windows Server",
            "Active Directory",
            "DNS",
            "DHCP",
            "GPO",
            "Hyper-V",
            "Microsoft 365",
          ],
        },
        {
          number: "04",
          title: "Linux",
          items: [
            "Debian / Ubuntu",
            "Systemd",
            "Bash",
            "Users & permissions",
            "Docker",
            "KVM",
          ],
        },
        {
          number: "05",
          title: "Virtualization & cloud",
          items: [
            "Proxmox VE",
            "VMware ESXi",
            "Microsoft Azure",
            "VirtualBox",
            "Infrastructure backup",
            "Veeam",
            "Synology",
          ],
        },
        {
          number: "06",
          title: "Containers & DevOps",
          items: [
            "Docker",
            "Kubernetes",
            "Kind",
            "Helm",
            "Git",
            "CI/CD",
          ],
        },
      ],
      certificationsLabel: "Certifications",
      certifications: [
        { date: "May 2026", title: "Stormshield CSNA" },
        { date: "July 2025", title: "CCNAv7 — Switching, Routing and Wireless Essentials" },
        { date: "May 2025", title: "Cisco CyberOps Associate" },
        { date: "February 2025", title: "CCNAv7 — Introduction to Networks" },
        { date: "February 2025", title: "SecNumAcadémie — ANSSI" },
      ],
      languagesLabel: "Languages",
      languages: [
        { label: "French", level: "Native speaker" },
        { label: "English", level: "B2 · Upper-intermediate" },
        { label: "Italian", level: "A2 · Pre-intermediate" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s discuss your technical challenges.",
      intro:
        "A question, a professional conversation or an opportunity to collaborate? You can reach me directly by email, phone or LinkedIn.",
      mailAction: "Send an email",
      phoneAction: "Call",
      linkedinAction: "View profile",
      locationText: "Mouans-Sartoux · Alpes-Maritimes",
      mobility: "Mobile between Toulon and Nice",
      availability:
        "I personally respond to messages and take the time to understand the context of each conversation.",
    },
  },
};

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    award: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="m8.5 13-1 8 4.5-2.5L16.5 21l-1-8" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    network: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="m11 7-5 9m7-9 5 9M7 18h10" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2-2-4Z" />
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1" />
        <rect x="3" y="14" width="18" height="6" rx="1" />
        <path d="M7 7h.01M7 17h.01M11 7h7M11 17h7" />
      </>
    ),
    shield: (
      <path d="M12 3 4.5 6v5.2c0 4.8 3.1 8.2 7.5 9.8 4.4-1.6 7.5-5 7.5-9.8V6L12 3Zm-3 9 2 2 4-5" />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21c.7-4 3.2-6 7.5-6s6.8 2 7.5 6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function usePreferences() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const preferenceTimer = window.setTimeout(() => {
      const storedLocale = localStorage.getItem("portfolio-locale");
      const storedTheme = localStorage.getItem("portfolio-theme");
      if (storedLocale === "fr" || storedLocale === "en") {
        setLocale(storedLocale);
        document.documentElement.lang = storedLocale;
      }
      if (storedTheme === "dark" || storedTheme === "light") {
        setTheme(storedTheme);
        document.documentElement.dataset.theme = storedTheme;
      }
    }, 0);
    return () => window.clearTimeout(preferenceTimer);
  }, []);

  const updateLocale = (value: Locale) => {
    setLocale(value);
    localStorage.setItem("portfolio-locale", value);
    document.documentElement.lang = value;
  };

  const updateTheme = (value: Theme) => {
    setTheme(value);
    localStorage.setItem("portfolio-theme", value);
    document.documentElement.dataset.theme = value;
  };

  return { locale, setLocale: updateLocale, theme, setTheme: updateTheme };
}

function Header({
  page,
  locale,
  setLocale,
  theme,
  setTheme,
}: {
  page: Page;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) {
  const t = copy[locale];
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" href="/" aria-label={t.nav.home}>
          <span>T</span>
          <span>L</span>
        </Link>
        <nav className="main-nav" aria-label="Navigation principale">
          <Link className={page === "home" ? "is-active" : ""} href="/">
            {t.nav.home}
          </Link>
          <Link className={page === "contact" ? "is-active" : ""} href="/contact">
            {t.nav.contact}
          </Link>
        </nav>
        <div className="header-tools">
          <div className="locale-switch" aria-label={t.nav.language}>
            <button
              className={locale === "fr" ? "is-active" : ""}
              onClick={() => setLocale("fr")}
              type="button"
            >
              FR
            </button>
            <span>/</span>
            <button
              className={locale === "en" ? "is-active" : ""}
              onClick={() => setLocale("en")}
              type="button"
            >
              EN
            </button>
          </div>
          <span className="header-divider" />
          <button
            aria-label={t.nav.theme}
            className="theme-switch"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
          >
            <span aria-hidden="true">☼</span>
            <span className="theme-switch__track">
              <span className="theme-switch__thumb" />
            </span>
            <span aria-hidden="true">☾</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link className="footer-brand" href="/">
            TL
          </Link>
          <p>{t.common.footerLine}</p>
        </div>
        <div className="footer-links">
          <Link href="/">{t.nav.home}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
          <a href={linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} Lavagna Théo
          <br />
          {t.common.rights}
        </p>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const resumeHref =
    locale === "fr"
      ? `${basePath}/docs/CV_Theo_Lavagna_FR.pdf`
      : `${basePath}/docs/CV_Theo_Lavagna_EN.pdf`;
  const heroVisualStyle = {
    "--hero-background-image": `url("${basePath}/images/tl-network-atlas.png")`,
  } as CSSProperties;

  return (
    <main>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">{t.home.eyebrow}</p>
          <h1>{t.common.name}</h1>
          <p className="hero__role">{t.common.role}</p>
          <div className="study-badge">
            <Icon name="award" />
            <span>{t.common.currentStudy}</span>
          </div>
          <div className="hero-actions">
            <Link className="action-button" href="/contact">
              <Icon name="mail" />
              <span>{t.common.contact}</span>
            </Link>
            <Link className="action-button" href="/parcours">
              <Icon name="user" />
              <span>{t.common.journey}</span>
            </Link>
            <Link className="action-button" href="/competences">
              <Icon name="server" />
              <span>{t.common.skills}</span>
            </Link>
            <a className="action-button" download href={resumeHref}>
              <Icon name="download" />
              <span>{t.common.download}</span>
            </a>
          </div>
        </div>
        <div className="hero__visual" style={heroVisualStyle}>
          {/* Portrait fourni par Théo ; le visuel réseau d’origine reste en fond. */}
          <figure className="hero__portrait">
            <img
              src={`${basePath}/images/theo-lavagna.png`}
              alt={locale === "fr" ? "Portrait de Théo Lavagna" : "Portrait of Théo Lavagna"}
              width="800"
              height="800"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="expertise section-shell">
        <SectionLabel>{t.home.expertiseLabel}</SectionLabel>
        <div className="expertise-grid">
          {t.home.expertise.map((item) => (
            <article className="expertise-card" key={item.title}>
              <div className="expertise-card__icon">
                <Icon name={item.icon} />
              </div>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="explore section-shell">
        <SectionLabel>{t.home.exploreLabel}</SectionLabel>
        <div className="explore-grid">
          {t.home.explore.map((item, index) => (
            <Link className="explore-card" href={item.href} key={item.href}>
              <span className="explore-card__number">
                0{index + 1}
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <span className="explore-card__arrow">
                <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-intro section-shell">
      <SectionLabel>{eyebrow}</SectionLabel>
      <div className="page-intro__grid">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale].about;
  return (
    <main>
      <PageIntro eyebrow={t.eyebrow} intro={t.intro} title={t.title} />
      <section className="about-story section-shell">
        <figure className="about-story__portrait">
          <img
            src={`${basePath}/images/theo-lavagna.png`}
            alt={locale === "fr" ? "Portrait de Théo Lavagna" : "Portrait of Théo Lavagna"}
            width="800"
            height="800"
            loading="lazy"
          />
        </figure>
        <div className="about-story__copy">
          <p>{t.second}</p>
          <div className="about-story__line" />
        </div>
      </section>

      <section className="pillars section-shell">
        <SectionLabel>{t.pillarsLabel}</SectionLabel>
        <div className="pillars-grid">
          {t.pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.number}>
              <span>{pillar.number}</span>
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interests section-shell">
        <SectionLabel>{t.interestsLabel}</SectionLabel>
        <div className="interest-list">
          {t.interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

function JourneyPage({ locale }: { locale: Locale }) {
  const t = copy[locale].journey;
  return (
    <main>
      <PageIntro eyebrow={t.eyebrow} intro={t.intro} title={t.title} />
      <section className="journey-section section-shell">
        <SectionLabel>{t.experienceLabel}</SectionLabel>
        <div className="timeline">
          {t.experiences.map((experience, index) => (
            <article className="timeline-item" key={experience.dates}>
              <div className="timeline-item__rail">
                <span>0{index + 1}</span>
              </div>
              <div className="timeline-item__content">
                <p className="timeline-item__dates">{experience.dates}</p>
                <h2>{experience.role}</h2>
                <h3>{experience.company}</h3>
                <p className="timeline-item__summary">{experience.summary}</p>
                {experience.bullets.length > 0 && (
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                <div className="tag-list">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section section-shell">
        <SectionLabel>{t.educationLabel}</SectionLabel>
        <div className="education-grid">
          {t.education.map((item) => (
            <article
              className={`education-card ${item.current ? "is-current" : ""}`}
              key={item.dates}
            >
              <div>
                <p>{item.dates}</p>
                {item.current && <span>{t.current}</span>}
              </div>
              <h2>{item.degree}</h2>
              <h3>{item.school}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SkillsPage({ locale }: { locale: Locale }) {
  const t = copy[locale].skills;
  return (
    <main>
      <PageIntro eyebrow={t.eyebrow} intro={t.intro} title={t.title} />
      <section className="skills-section section-shell">
        <div className="skills-grid">
          {t.groups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card__header">
                <span>{group.number}</span>
                <h2>{group.title}</h2>
              </div>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications section-shell">
        <SectionLabel>{t.certificationsLabel}</SectionLabel>
        <div className="certification-grid">
          {t.certifications.map((certification) => (
            <article className="certification-card" key={certification.title}>
              <Icon name="award" />
              <div>
                <p>{certification.date}</p>
                <h2>{certification.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="languages section-shell">
        <SectionLabel>{t.languagesLabel}</SectionLabel>
        <div className="language-grid">
          {t.languages.map((language) => (
            <article key={language.label}>
              <h2>{language.label}</h2>
              <p>{language.level}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <main>
      <PageIntro
        eyebrow={t.contact.eyebrow}
        intro={t.contact.intro}
        title={t.contact.title}
      />
      <section className="contact-section section-shell">
        <div className="contact-grid">
          <a className="contact-card" href="mailto:lavagna.theo@gmail.com">
            <Icon name="mail" />
            <div>
              <p>{t.common.email}</p>
              <h2>lavagna.theo@gmail.com</h2>
              <span>{t.contact.mailAction}</span>
            </div>
            <Icon name="arrow" />
          </a>
          <a className="contact-card" href="tel:+33632659252">
            <Icon name="phone" />
            <div>
              <p>{t.common.phone}</p>
              <h2>06 32 65 92 52</h2>
              <span>{t.contact.phoneAction}</span>
            </div>
            <Icon name="arrow" />
          </a>
          <a
            className="contact-card"
            href={linkedinUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="linkedin-icon">in</span>
            <div>
              <p>{t.common.linkedin}</p>
              <h2>Théo Lavagna</h2>
              <span>{t.contact.linkedinAction}</span>
            </div>
            <Icon name="arrow" />
          </a>
          <article className="contact-card contact-card--static">
            <Icon name="network" />
            <div>
              <p>{t.common.location}</p>
              <h2>{t.contact.locationText}</h2>
              <span>{t.contact.mobility}</span>
            </div>
          </article>
        </div>
        <p className="contact-note">{t.contact.availability}</p>
      </section>
    </main>
  );
}

export default function PortfolioSite({ page }: { page: Page }) {
  const preferences = usePreferences();
  const { locale } = preferences;

  return (
    <div className="site">
      <Header page={page} {...preferences} />
      {page === "home" && <HomePage locale={locale} />}
      {page === "about" && <AboutPage locale={locale} />}
      {page === "journey" && <JourneyPage locale={locale} />}
      {page === "skills" && <SkillsPage locale={locale} />}
      {page === "contact" && <ContactPage locale={locale} />}
      <Footer locale={locale} />
    </div>
  );
}
