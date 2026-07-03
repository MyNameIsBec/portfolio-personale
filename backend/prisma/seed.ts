import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.experience.deleteMany(),
    prisma.education.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.project.deleteMany(),
    prisma.socialLink.deleteMany(),
    prisma.profile.deleteMany(),
  ]);

  const profile = await prisma.profile.create({
    data: {
      name: 'Antonello Salvo Torregrossa',
      role: 'Studente di Ingegneria Informatica',
      role_en: 'Computer Engineering Student',
      location: 'Palermo, Italia',
      location_en: 'Palermo, Italy',
      email: 'becengine@gmail.com',
      phone: '+39 351 4469463',
      summary: `Studente di Ingegneria Informatica con una solida preparazione 
teorica in sviluppo software, cybersecurity, intelligenza artificiale 
e reti di calcolatori. Appassionato di sicurezza informatica, con 
conoscenze che spaziano dalla programmazione in C, Java e Python allo 
sviluppo di applicazioni web e mobile con Angular e Ionic. Competente 
in sistemi Linux, Bash e protocolli di rete TCP/IP. Flessibile e 
motivato, pronto ad applicare le proprie competenze in contesti 
professionali.`,
      summary_en: `Computer Engineering student with a solid theoretical background 
in software development, cybersecurity, artificial intelligence 
and computer networks. Passionate about information security, with 
knowledge ranging from C, Java and Python programming to 
web and mobile application development with Angular and Ionic. Skilled 
in Linux systems, Bash and TCP/IP network protocols. Flexible and 
motivated, ready to apply my skills in professional environments.`,
      githubUrl: 'https://github.com/MyNameIsBec',
      linkedinUrl: 'https://www.linkedin.com/in/antonello-torregrossa-730745317/',
      websiteUrl: null,
    },
  });

  await prisma.education.createMany({
    data: [
      {
        institution: 'Università degli Studi di Palermo',
        institution_en: 'University of Palermo',
        degree: 'Laurea Triennale in Ingegneria Informatica',
        degree_en: "Bachelor's Degree in Computer Engineering",
        field: 'Ingegneria Informatica',
        field_en: 'Computer Engineering',
        startDate: new Date('2023-10-01'),
        current: true,
        order: 1,
        profileId: profile.id,
      },
      {
        institution: 'Liceo Scientifico',
        institution_en: 'Scientific High School',
        degree: 'Diploma di Maturità Scientifica',
        degree_en: 'High School Diploma',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2023-07-31'),
        current: false,
        order: 2,
        profileId: profile.id,
      },
    ],
  });

  await prisma.skill.createMany({
    data: [
      { name: 'C', name_en: 'C', category: 'Linguaggi di Programmazione', category_en: 'Programming Languages', description: 'Programmazione di sistema, algoritmi e strutture dati', description_en: 'System programming, algorithms and data structures', order: 1, profileId: profile.id },
      { name: 'Java', name_en: 'Java', category: 'Linguaggi di Programmazione', category_en: 'Programming Languages', description: 'Programmazione ad oggetti, sviluppo di applicazioni desktop e backend', description_en: 'Object-oriented programming, desktop and backend development', order: 2, profileId: profile.id },
      { name: 'Python', name_en: 'Python', category: 'Linguaggi di Programmazione', category_en: 'Programming Languages', description: 'Scripting, automazione, progetti di machine learning e AI', description_en: 'Scripting, automation, machine learning and AI projects', order: 3, profileId: profile.id },
      { name: 'TypeScript', name_en: 'TypeScript', category: 'Linguaggi di Programmazione', category_en: 'Programming Languages', description: 'Tipizzazione statica per applicazioni Angular e Node.js', description_en: 'Static typing for Angular and Node.js applications', order: 4, profileId: profile.id },
      { name: 'Angular', name_en: 'Angular', category: 'Sviluppo Frontend', category_en: 'Frontend Development', description: 'Sviluppo di single-page application con standalone components e Signals', description_en: 'SPA development with standalone components and Signals', order: 5, profileId: profile.id },
      { name: 'Ionic', name_en: 'Ionic', category: 'Sviluppo Frontend', category_en: 'Frontend Development', description: 'Sviluppo di interfacce mobile cross-platform con Angular', description_en: 'Cross-platform mobile UI development with Angular', order: 6, profileId: profile.id },
      { name: 'HTML/CSS', name_en: 'HTML/CSS', category: 'Sviluppo Frontend', category_en: 'Frontend Development', description: 'Markup semantico, layout responsive con SCSS e Flexbox/Grid', description_en: 'Semantic markup, responsive layout with SCSS and Flexbox/Grid', order: 7, profileId: profile.id },
      { name: 'Node.js', name_en: 'Node.js', category: 'Sviluppo Backend', category_en: 'Backend Development', description: 'Runtime JavaScript lato server per API REST', description_en: 'Server-side JavaScript runtime for REST APIs', order: 8, profileId: profile.id },
      { name: 'Express', name_en: 'Express', category: 'Sviluppo Backend', category_en: 'Backend Development', description: 'Framework per la creazione di API RESTful', description_en: 'Framework for building RESTful APIs', order: 9, profileId: profile.id },
      { name: 'PostgreSQL', name_en: 'PostgreSQL', category: 'Database', category_en: 'Database', description: 'Progettazione e gestione di database relazionali', description_en: 'Relational database design and management', order: 10, profileId: profile.id },
      { name: 'Prisma ORM', name_en: 'Prisma ORM', category: 'Database', category_en: 'Database', description: 'Type-safe ORM per Node.js con migrations e studio', description_en: 'Type-safe ORM for Node.js with migrations and studio', order: 11, profileId: profile.id },
      { name: 'Sicurezza Reti', name_en: 'Network Security', category: 'Cybersecurity', category_en: 'Cybersecurity', description: 'Analisi vulnerabilità, hardening e protezione di rete', description_en: 'Vulnerability analysis, network hardening and protection', order: 12, profileId: profile.id },
      { name: 'Crittografia', name_en: 'Cryptography', category: 'Cybersecurity', category_en: 'Cybersecurity', description: 'Cifratura simmetrica/asimmetrica, protocolli crittografici e best practice', description_en: 'Symmetric/asymmetric encryption, cryptographic protocols and best practices', order: 13, profileId: profile.id },
      { name: 'Penetration Testing', name_en: 'Penetration Testing', category: 'Cybersecurity', category_en: 'Cybersecurity', description: 'Valutazione della sicurezza su applicazioni web e sistemi', description_en: 'Security assessment on web applications and systems', order: 14, profileId: profile.id },
      { name: 'Machine Learning', name_en: 'Machine Learning', category: 'AI & Machine Learning', category_en: 'AI & Machine Learning', description: 'Modelli predittivi, classificazione e analisi dei dati', description_en: 'Predictive models, classification and data analysis', order: 15, profileId: profile.id },
      { name: 'Intelligenza Artificiale', name_en: 'Artificial Intelligence', category: 'AI & Machine Learning', category_en: 'AI & Machine Learning', description: 'Fondamenti teorici e applicazioni pratiche di AI', description_en: 'Theoretical foundations and practical applications of AI', order: 16, profileId: profile.id },
      { name: 'Linux (distribuzioni varie)', name_en: 'Linux (various distributions)', category: 'Sistemi Operativi', category_en: 'Operating Systems', description: 'Amministrazione e uso quotidiano di Debian, Arch, Fedora e derivate', description_en: 'Administration and daily use of Debian, Arch, Fedora and derivatives', order: 17, profileId: profile.id },
      { name: 'Windows', name_en: 'Windows', category: 'Sistemi Operativi', category_en: 'Operating Systems', description: 'Utilizzo avanzato, configurazione e troubleshooting', description_en: 'Advanced usage, configuration and troubleshooting', order: 18, profileId: profile.id },
      { name: 'Bash', name_en: 'Bash', category: 'Sistemi Operativi', category_en: 'Operating Systems', description: 'Automazione di task, scripting shell e pipe', description_en: 'Task automation, shell scripting and pipes', order: 19, profileId: profile.id },
      { name: 'Git', name_en: 'Git', category: 'DevOps & Strumenti', category_en: 'DevOps & Tools', description: 'Controllo versione, branching, collaborazione su GitHub', description_en: 'Version control, branching, collaboration on GitHub', order: 20, profileId: profile.id },
      { name: 'Docker', name_en: 'Docker', category: 'DevOps & Strumenti', category_en: 'DevOps & Tools', description: 'Containerizzazione di applicazioni con Docker Compose', description_en: 'Application containerization with Docker Compose', order: 21, profileId: profile.id },
      { name: 'TCP/IP e Protocolli di Rete', name_en: 'TCP/IP and Network Protocols', category: 'Reti', category_en: 'Networking', description: 'Conoscenza approfondita del modello ISO/OSI e suite TCP/IP', description_en: 'In-depth knowledge of the ISO/OSI model and TCP/IP suite', order: 22, profileId: profile.id },
    ],
  });

  await prisma.project.createMany({
    data: [
      {
        title: 'UniMeet',
        title_en: 'UniMeet',
        description: 'Piattaforma di prenotazione ricevimento universitario per facilitare la comunicazione tra studenti e docenti. Sistema completo con autenticazione, gestione slot, prenotazioni e dashboard. Sviluppato come progetto universitario per il corso di Programmazione Web e Mobile.',
        description_en: 'University office hours booking platform to facilitate communication between students and professors. Complete system with authentication, slot management, bookings and dashboard. Developed as a university project for the Web and Mobile Programming course.',
        techStack: ['Angular', 'Ionic', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TypeScript', 'Leaflet'],
        githubUrl: 'https://github.com/MyNameIsBec/progettoUniMeet',
        featured: true,
        order: 1,
      },
      {
        title: 'Portfolio AFAM',
        title_en: 'Portfolio AFAM',
        description: "Applicazione desktop JavaFX per la gestione del portfolio artistico-formativo degli studenti delle istituzioni AFAM. Progetto di gruppo per il corso di Ingegneria del Software, con architettura Three Tier - Repository, autenticazione 2FA e gestione di contenuti digitali.",
        description_en: 'JavaFX desktop application for managing the artistic-educational portfolio of AFAM institution students. Group project for the Software Engineering course, featuring Three Tier - Repository architecture, 2FA authentication, and digital content management.',
        techStack: ['Java', 'JavaFX', 'Maven', 'PostgreSQL', 'JDBC'],
        githubUrl: 'https://github.com/MyNameIsBec/Portfolio-Afam-progetto-di-gruppo-',
        featured: false,
        order: 2,
      },
      {
        title: 'Portfolio Personale',
        title_en: 'Personal Portfolio',
        description: 'Applicazione web full-stack per mostrare competenze, progetti e formazione. Realizzata con Angular, Express, Prisma e PostgreSQL, containerizzata con Docker.',
        description_en: 'Full-stack web application to showcase skills, projects and education. Built with Angular, Express, Prisma and PostgreSQL, containerized with Docker.',
        techStack: ['Angular', 'Express', 'Prisma', 'PostgreSQL', 'Docker', 'TypeScript'],
        githubUrl: 'https://github.com/MyNameIsBec/portfolio',
        featured: true,
        order: 3,
      },
    ],
  });

  await prisma.socialLink.createMany({
    data: [
      { label: 'GitHub', url: 'https://github.com/MyNameIsBec', icon: 'github', order: 1 },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/antonello-torregrossa-730745317/', icon: 'linkedin', order: 2 },
      { label: 'Email', url: 'mailto:becengine@gmail.com', icon: 'email', order: 3 },
    ],
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
