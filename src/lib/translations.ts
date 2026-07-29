export type Lang = "en" | "fr" | "nl";

export interface T {
  nav: {
    home: string; about: string; products: string; services: string; contact: string;
    requestQuote: string; whatsapp: string;
  };
  home: {
    tag: string; h1a: string; h1b: string; h1c: string; subtitle: string;
    btnProducts: string; btnQuote: string; stat1: string; stat2: string;
    whyTag: string; whyTitle: string; learnMore: string;
    features: { title: string; body: string }[];
    advantageTag: string; advantageTitle: string; advantageBody: string;
    equipmentTag: string; equipmentTitle: string; viewAll: string; enquire: string;
    dontSeeTitle: string; dontSeeBody: string; dontSeeBtn: string;
    ctaTitle: string; ctaBody: string; ctaContact: string; ctaServices: string;
  };
  about: {
    tag: string; h1a: string; h1b: string; h1c: string; stat1: string; stat2: string;
    whoTag: string; whoTitle: string; whoBody1: string; whoBody2: string;
    leaderTag: string; leaderTitle: string; leaderName: string; leaderRole: string; leaderBio: string;
    awardTitle: string; awardLabel: string;
    pillar1Title: string; pillar1Body: string;
    pillar2Title: string; pillar2Body: string;
    pillar3Title: string; pillar3Body: string;
    ctaTitle: string; ctaBody: string; ctaBtn: string; ctaLink: string;
  };
  products: {
    tag: string; h1: string; subtitle: string; requestQuote: string; enquire: string;
    notFoundTitle: string; notFoundBody: string; notFoundBtn: string;
    items: { name: string; description: string }[];
  };
  services: {
    tag: string; h1: string; subtitle: string;
    items: { title: string; sub: string; points: string[] }[];
    howTag: string; howTitle: string; howSub: string;
    steps: { n: string; t: string; b: string }[];
    ctaTitle: string; ctaBody: string; ctaBtn: string;
  };
  contact: {
    tag: string; h1: string; subtitle: string;
    officesTag: string; directTag: string;
    officeNLDetail: string; officePKDetail: string;
    emailLabel: string; waLabel: string; webLabel: string;
    waCta: string; waCtaSub: string;
    formTitle: string; formSub: string;
    nameLabel: string; companyLabel: string; emailFieldLabel: string; phoneLabel: string;
    countryLabel: string; categoryLabel: string; categoryPlaceholder: string;
    messageLabel: string; messagePlaceholder: string;
    generalEnquiry: string; sendWA: string; sendEmail: string; formNote: string;
    namePlaceholder: string; companyPlaceholder: string; emailPlaceholder: string;
    phonePlaceholder: string; countryPlaceholder: string;
  };
  footer: {
    description: string; companyCol: string; equipmentCol: string; officesCol: string;
    europe: string; asia: string; viewAll: string; copyright: string;
  };
  chat: {
    greeting: string; placeholder: string; waBtn: string; typicallyReplies: string;
    quickOptions: string; chips: string[]; fallback: string;
    replies: {
      hello: string; quote: string; order: string; machinery: string; beverage: string;
      pet: string; spareParts: string; install: string; training: string; shipping: string;
      contactInfo: string; location: string; about: string; manufacturer: string;
      mining: string; food: string; water: string; automation: string; packaging: string;
      thanks: string;
    };
  };
}

export const translations: Record<Lang, T> = {
  en: {
    nav: {
      home: "Home", about: "About", products: "Products", services: "Services",
      contact: "Contact", requestQuote: "Request Quote", whatsapp: "WhatsApp",
    },
    home: {
      tag: "Emmen, Netherlands  |  Lahore, Pakistan",
      h1a: "European Industrial", h1b: "Machinery,", h1c: "Delivered to Your Door.",
      subtitle: "We source, certify, and deliver industrial equipment from Europe's top OEM manufacturers to factories across Asia, Africa, and the Middle East, with on-site installation and lifetime support.",
      btnProducts: "Explore Equipment", btnQuote: "Get a Quote",
      stat1: "Years of Experience", stat2: "Equipment Categories",
      whyTag: "Why AL Razzaq", whyTitle: "End-to-end, from factory floor in Europe to yours.",
      learnMore: "Learn more",
      features: [
        { title: "European Sourcing Network", body: "We hold direct relationships with OEM manufacturers across Germany, Italy, and the Netherlands. Every machine is audited and factory-tested before leaving Europe." },
        { title: "One Contract, Full Accountability", body: "Customs documentation, freight coordination, on-site installation and commissioning are all managed under a single agreement. One team responsible for the entire process." },
        { title: "Lifetime After-Sales Support", body: "Our Lahore team provides on-site technical support, spare parts from stocked warehouses, and preventive maintenance for the full life of the equipment." },
      ],
      advantageTag: "Our Advantage", advantageTitle: "Fast delivery, backed by established European partnerships.",
      advantageBody: "Our long-standing relationships with manufacturers and freight partners across Europe mean we can move faster than anyone sourcing independently. Delivery timelines depend on your location and equipment type, but our network gives us access to inventory and production slots that others simply cannot match.",
      equipmentTag: "Equipment", equipmentTitle: "25+ categories, and much more on request.",
      viewAll: "View all", enquire: "Enquire",
      dontSeeTitle: "Don't see what you need?",
      dontSeeBody: "We source far beyond what's listed. If you have a requirement, simply ask and we will find it.",
      dontSeeBtn: "Ask about any product",
      ctaTitle: "Ready to start a project?",
      ctaBody: "Send us your requirement and our team will prepare a detailed quotation. No commitment required.",
      ctaContact: "Contact Us", ctaServices: "Our Services",
    },
    about: {
      tag: "About AL Razzaq",
      h1a: "Industrial machinery,", h1b: "sourced from the world's", h1c: "best manufacturers.",
      stat1: "Years Experience", stat2: "Equipment Categories",
      whoTag: "Who We Are", whoTitle: "A sourcing partner with real operational experience.",
      whoBody1: "AL Razzaq Enterprises was established to bridge the gap between world-class European and global industrial manufacturers and factories across Asia, Africa, and the Middle East. We are not just traders — we are engineers who understand how factories run.",
      whoBody2: "From our sourcing office in Emmen, Netherlands, we access OEM manufacturers directly, verify quality, and manage the full export chain. From Lahore, our engineers handle installation, commissioning, and long-term after-sales support.",
      leaderTag: "Leadership", leaderTitle: "Founded by an Engineer. Run by Experience.",
      leaderName: "Kamran Hafeez", leaderRole: "Founder and CEO",
      leaderBio: "Kamran Hafeez is a qualified Electrical Engineer with over 20 years of experience in large-scale industrial and beverage manufacturing. He currently serves as General Manager at Pepsi Pakistan and is a recipient of the Pepsi International Platinum Award. His deep operational knowledge means AL Razzaq Enterprises advises clients from a position of real industry expertise, not just product catalogues.",
      awardTitle: "Pepsi International Platinum Award", awardLabel: "International Recognition",
      pillar1Title: "Quality Assurance", pillar1Body: "Every machine we source undergoes pre-shipment factory acceptance testing. CE certification is verified on all applicable equipment before it leaves the manufacturer.",
      pillar2Title: "Direct OEM Access", pillar2Body: "We buy directly from manufacturers, with no intermediaries. This means better pricing, faster response to technical queries, and reliable spare parts availability.",
      pillar3Title: "End-to-End Service", pillar3Body: "From specification and sourcing through to installation, commissioning, and after-sales support, we remain your single point of contact for the full project lifecycle.",
      ctaTitle: "Ready to source your next machine?", ctaBody: "Tell us what you need and our team will respond within 24 hours with sourcing options and an indicative price.",
      ctaBtn: "Get in Touch", ctaLink: "View Our Equipment",
    },
    products: {
      tag: "Equipment Catalogue", h1: "25+ Equipment Categories",
      subtitle: "Production-grade machinery sourced from certified European and global manufacturers, delivered to your facility with full installation and after-sales support.",
      requestQuote: "Request a Quote", enquire: "Enquire",
      notFoundTitle: "Cannot find what you are looking for?",
      notFoundBody: "We source a wide range of industrial equipment beyond what is listed here. Tell us your requirement and our team will find the right solution.",
      notFoundBtn: "Send Your Requirement",
      items: [
        { name: "Beverage Filling Lines", description: "Complete filling lines for still water, carbonated drinks, juice, and energy drinks. 2,000 to 36,000 BPH. CE-certified, CIP-ready." },
        { name: "Automated Bottling Lines", description: "Turnkey bottling, capping, labeling, and shrink-wrap integrated into one synchronized production flow." },
        { name: "PET Blowing Machines", description: "Linear and rotary stretch blow molders from 2 to 12 cavities. Fast cycle times, consistent wall thickness." },
        { name: "Industrial Automation and Robotics", description: "PLC, SCADA, and robotic-arm systems for pick-and-place, palletizing, welding, and assembly lines." },
        { name: "Packaging and End-of-Line", description: "Carton sealers, case erectors, shrink wrappers, and palletizers for export-ready secondary packaging." },
        { name: "Mining and Quarrying Equipment", description: "Jaw crushers, cone crushers, vibrating screens, and belt conveyors for aggregate, coal, and mineral operations." },
        { name: "Water Treatment Plants", description: "Reverse osmosis, UV sterilization, softening, and demineralization systems. Factory supply to municipal scale." },
        { name: "Food Processing Machinery", description: "Mixing, blending, pasteurization, and filling equipment for dairy, sauce, edible oil, and dry food production." },
        { name: "Electrical Switchgear and Panels", description: "LV and MV switchgear, motor control centers, VFD panels, and power distribution boards to IEC and NEMA standards." },
        { name: "Industrial Components and Gearboxes", description: "Precision gears, gearboxes, valves, pneumatics, motors, and hydraulic components from certified manufacturers." },
        { name: "Turnkey Factory Solutions", description: "Greenfield project planning, full equipment integration, commissioning, and operator training. Ready to produce from day one." },
        { name: "Export Logistics and Shipping", description: "Full export documentation, marine insurance, customs clearance, and in-country delivery to your facility." },
        { name: "Spare Parts Supply", description: "OEM wear parts, bearings, seals, sensors, and control electronics stocked in Lahore and Emmen for fast dispatch." },
        { name: "Heavy Equipment Freight", description: "Specialized container and project freight for oversized industrial equipment from European and global origins." },
      ],
    },
    services: {
      tag: "Services", h1: "How we work.", subtitle: "Six core services. One seamless process. Delivered from our offices in the Netherlands and Pakistan.",
      items: [
        { title: "Global Sourcing", sub: "We find it. You approve it.", points: ["Direct OEM access with no intermediaries", "CE compliance verified on every machine", "Factory audits and pre-shipment inspection", "Multiple options quoted per requirement"] },
        { title: "Export Logistics", sub: "From the manufacturer's door to yours.", points: ["Marine freight insurance arranged and included", "Container loading supervised at origin", "Customs clearance at destination port", "Final delivery to your factory gate"] },
        { title: "Installation and Commissioning", sub: "Our engineers. Your facility.", points: ["Mechanical assembly and precision alignment", "PLC and control system configuration", "Full production commissioning run", "Engineer sign-off with written report"] },
        { title: "Operator Training", sub: "Your team runs it. We teach them how.", points: ["Hands-on training for operators and maintenance staff", "Fault identification and first-response procedures", "Maintenance schedule documentation", "Available in English, Urdu, and Arabic"] },
        { title: "Spare Parts Supply", sub: "Stocked. Fast. Genuine.", points: ["Warehouses in Lahore and Emmen for fast dispatch", "OEM genuine parts sourced by part number", "Custom fabrication to drawing or sample", "Standing supply agreements available"] },
        { title: "After-Sales Support", sub: "We do not stop at handover.", points: ["Remote diagnosis via WhatsApp and video call", "Scheduled preventive maintenance visits", "Priority response for service agreement clients", "Production optimisation consultation"] },
      ],
      steps: [
        { n: "01", t: "Enquiry", b: "Share your requirement" },
        { n: "02", t: "Quotation", b: "Proforma in 48 to 72 hours" },
        { n: "03", t: "Approval", b: "Sign and confirm the order" },
        { n: "04", t: "Dispatch", b: "Factory-tested and shipped" },
        { n: "05", t: "Handover", b: "Commissioned at your facility" },
      ],
      howTag: "Process", howTitle: "How It Works", howSub: "Our process is designed to be straightforward. You share a requirement, we handle the rest — from finding the right supplier to commissioning at your facility.",
      ctaTitle: "Ready to get started?", ctaBody: "Share your requirement and our team will respond within 24 hours with sourcing options and pricing.", ctaBtn: "Request a Quote",
    },
    contact: {
      tag: "Contact", h1: "Get in touch.", subtitle: "Share your requirement and our team will prepare a detailed quotation within 48 to 72 hours. We work with manufacturers across Europe, Asia, and globally to source the right equipment for you.",
      officesTag: "Our Offices", directTag: "Direct Contact",
      officeNLDetail: "OEM manufacturer relationships, pre-shipment inspections, CE compliance, and export documentation for Europe and beyond.",
      officePKDetail: "On-site installation, commissioning, spare parts warehouse, and client support across Asia, the Middle East, and Africa.",
      emailLabel: "Email", waLabel: "WhatsApp", webLabel: "Website",
      waCta: "Chat on WhatsApp", waCtaSub: "Fastest response. Usually within minutes.",
      formTitle: "Send an Enquiry", formSub: "Fill in your details and we will send a proforma invoice within 48 to 72 hours. The form submits directly to our WhatsApp for instant delivery.",
      nameLabel: "Full Name", companyLabel: "Company", emailFieldLabel: "Email",
      phoneLabel: "Phone", countryLabel: "Country", categoryLabel: "Equipment Category",
      categoryPlaceholder: "Select category", messageLabel: "Requirement Details",
      messagePlaceholder: "Describe your production requirement, capacity needed, or specific part numbers. The more detail you share, the faster we can quote.",
      generalEnquiry: "General Enquiry", sendWA: "Send via WhatsApp", sendEmail: "Send by Email",
      formNote: "Submitting opens WhatsApp with your enquiry pre-filled. Alternatively, email it directly.",
      namePlaceholder: "John Doe", companyPlaceholder: "XYZ Manufacturing",
      emailPlaceholder: "john@xyz.com", phonePlaceholder: "+1 234 567 890",
      countryPlaceholder: "United Arab Emirates",
    },
    footer: {
      description: "International machinery supplier and exporter with offices in Emmen, Netherlands and Lahore, Pakistan. We source from European and global OEM manufacturers and serve clients across Asia, Africa, and the Middle East.",
      companyCol: "Company", equipmentCol: "Equipment", officesCol: "Our Offices",
      europe: "Sourcing Europe", asia: "Operations Asia", viewAll: "View All 25+ Categories",
      copyright: "AL RAZZAQ ENTERPRISES. ALL RIGHTS RESERVED.",
    },
    chat: {
      greeting: "Hello, welcome to AL Razzaq Enterprises.\n\nI can help you find the right equipment, get a quotation, or answer any question about our services. What are you looking for today?",
      placeholder: "Ask anything about our equipment…", waBtn: "Chat directly on WhatsApp",
      typicallyReplies: "Typically replies quickly", quickOptions: "Quick options:",
      chips: ["I need a quotation", "What machinery do you supply?", "How does ordering work?", "Can you source spare parts?", "Tell me about installation", "Where are your offices?"],
      fallback: "I want to make sure I give you the right answer. Could you share a bit more detail?\n\nFor example: What type of machine are you looking for? What do you want to produce? Or are you enquiring about spare parts for existing equipment?\n\nAlternatively, reach our team directly on WhatsApp at +31 631 379 689 for an immediate response.",
      replies: {
        hello: "Good to hear from you. What can I help you with today?\n\nAre you looking to source a specific machine, get a quotation, find spare parts, or understand how our process works?",
        quote: "To prepare an accurate quotation, please share:\n\n1. Type of machine or equipment needed\n2. Required production capacity or output\n3. Your country or nearest port\n\nYou can reply here or send the details directly to our team on WhatsApp for a faster response. We aim to get you a full proforma invoice within 48 to 72 hours.",
        order: "Our process is simple:\n\n**Step 1** — Share your requirement. Machine type, capacity, or even just what you want to produce.\n**Step 2** — We send a detailed quotation within 48 to 72 hours.\n**Step 3** — You approve and pay a deposit.\n**Step 4** — We source, test, and ship from Europe or our global partner network.\n**Step 5** — Our engineers install and commission at your facility.\n\nFinal payment is on delivery. Want to get started?",
        machinery: "We supply a wide range of industrial equipment sourced from European and global manufacturers:\n\n• Beverage and bottling lines\n• PET blowing machines\n• Packaging and labeling systems\n• Industrial automation and robotics\n• Water treatment plants\n• Food and dairy processing machinery\n• Mining and quarrying equipment\n• Electrical switchgear and panels\n• Spare parts for any brand\n\nThis is not a complete list. If you need something specific, just ask and we will find it.",
        beverage: "Beverage filling and bottling is one of our core areas. We supply complete lines for still water, carbonated drinks, juice, energy drinks, and dairy.\n\nCapacities range from 2,000 to 36,000 BPH. All sourced from CE-certified European OEMs, factory-tested before shipment.\n\nWhat is your target capacity and beverage type?",
        pet: "We supply linear and rotary PET stretch blow molding machines, from 2 to 12 cavities. Fast cycle times, consistent wall thickness, low defect rates.\n\nThese can be integrated into a filling line or run standalone. Full commissioning and operator training included.\n\nWhat is your required output in bottles per hour?",
        spareParts: "Yes, spare parts sourcing is a key part of what we do. We stock high-demand wear items at our warehouses in Lahore and Emmen.\n\nFor stocked items: dispatch within 24 to 48 hours.\nFor sourced items: we order from Europe with priority handling.\n\nShare the machine brand, model, and part number and we will give you a price.",
        install: "Our installation and commissioning is done by our own engineers, not subcontractors.\n\nWe handle:\n• Mechanical installation and alignment\n• Electrical connection and control setup\n• PLC programming and calibration\n• Full production commissioning run\n• Operator training before handover\n\nAll of this is included in the project by default.",
        training: "Operator and maintenance training is part of every installation we do.\n\nYour team is trained on day-to-day operation, routine maintenance, fault identification, and basic troubleshooting. We also leave a maintenance manual and spare parts reference guide.\n\nTraining is available in English, Urdu, and Arabic.",
        shipping: "Delivery timelines depend on your location and the equipment type. Every project is different, so we do not quote a fixed number upfront.\n\nOur European and global supplier partnerships give us faster access to freight, production slots, and customs channels than clients sourcing independently.\n\nOnce you share your requirement, we include a confirmed timeline in your proforma invoice.",
        contactInfo: "You can reach our team through:\n\nWhatsApp: +31 631 379 689 (fastest response)\nEmail: info@alrazzaqenterprises.com\n\nWe are available during business hours in Pakistan and the Netherlands.",
        location: "We operate from two offices:\n\n**Emmen, Netherlands** — European sourcing office. OEM manufacturer relationships, pre-shipment inspections, CE compliance, and export documentation.\n\n**Lahore, Pakistan** — Regional operations base. Installation, commissioning, spare parts warehouse, and client support across Asia, the Middle East, and Africa.",
        about: "AL Razzaq Enterprises was founded by Kamran Hafeez, a qualified Electrical Engineer with 20+ years in large-scale beverage and industrial manufacturing.\n\nMr. Hafeez currently serves as General Manager at Pepsi Pakistan and is a recipient of the Pepsi International Platinum Award.\n\nThat operational background means we advise clients from experience, not just product catalogues.",
        manufacturer: "We source from established manufacturers across Europe (Germany, Italy, Netherlands) and globally, buying direct with no intermediaries.\n\nEvery machine we supply is CE-certified where applicable. Pre-shipment factory acceptance testing is standard, and you receive video documentation before we approve shipment.",
        mining: "For mining and quarrying, we supply:\n\n• Jaw and cone crushers\n• Impact crushers\n• Vibrating screens\n• Belt conveyors\n• Dewatering and slurry pumps\n\nWhat material are you processing and what is your required throughput?",
        food: "For food and dairy processing, we supply mixing and blending equipment, pasteurizers, homogenizers, filling machines, and complete packaging lines.\n\nAll food-contact equipment is stainless steel with CIP-compatible design.\n\nWhat product are you producing and what is your target daily volume?",
        water: "We supply complete water treatment systems: reverse osmosis plants, UV sterilization, softeners, demineralization, and multi-media filtration.\n\nShare your daily requirement in cubic meters and we will prepare a recommendation.",
        automation: "We supply industrial automation solutions including PLC control systems, SCADA platforms, HMI panels, and robotic systems for pick-and-place, palletizing, and welding.\n\nWhat process are you looking to automate?",
        packaging: "We supply complete secondary packaging lines including carton erectors, case sealers, shrink tunnels, stretch wrappers, and robotic palletizers.\n\nWhat type of product and container are you packaging?",
        thanks: "You are welcome. If anything else comes up or you are ready to share a requirement, we are here. You can also reach the team directly on WhatsApp at +31 631 379 689 whenever you prefer.",
      },
    },
  },

  fr: {
    nav: {
      home: "Accueil", about: "À propos", products: "Produits", services: "Services",
      contact: "Contact", requestQuote: "Demander un devis", whatsapp: "WhatsApp",
    },
    home: {
      tag: "Emmen, Pays-Bas  |  Lahore, Pakistan",
      h1a: "Machines industrielles", h1b: "européennes,", h1c: "livrées à votre porte.",
      subtitle: "Nous sourçons, certifions et livrons des équipements industriels auprès des meilleurs fabricants OEM européens vers des usines en Asie, en Afrique et au Moyen-Orient, avec installation sur site et support à vie.",
      btnProducts: "Explorer les équipements", btnQuote: "Obtenir un devis",
      stat1: "Années d'expérience", stat2: "Catégories d'équipements",
      whyTag: "Pourquoi AL Razzaq", whyTitle: "De bout en bout, de l'usine européenne à la vôtre.",
      learnMore: "En savoir plus",
      features: [
        { title: "Réseau d'approvisionnement européen", body: "Nous avons des relations directes avec des fabricants OEM en Allemagne, en Italie et aux Pays-Bas. Chaque machine est auditée et testée en usine avant de quitter l'Europe." },
        { title: "Un contrat, une responsabilité totale", body: "La documentation douanière, la coordination du fret, l'installation et la mise en service sur site sont gérées dans le cadre d'un seul accord. Une équipe responsable de l'ensemble du processus." },
        { title: "Support après-vente à vie", body: "Notre équipe de Lahore assure le support technique sur site, les pièces détachées depuis nos entrepôts et la maintenance préventive pendant toute la durée de vie de l'équipement." },
      ],
      advantageTag: "Notre avantage", advantageTitle: "Livraison rapide, soutenue par des partenariats européens établis.",
      advantageBody: "Nos relations de longue date avec les fabricants et partenaires de fret en Europe nous permettent d'agir plus vite que quiconque s'approvisionnant de manière indépendante. Notre réseau nous donne accès à des stocks et des créneaux de production que d'autres ne peuvent tout simplement pas égaler.",
      equipmentTag: "Équipements", equipmentTitle: "25+ catégories, et bien plus sur demande.",
      viewAll: "Voir tout", enquire: "Renseigner",
      dontSeeTitle: "Vous ne trouvez pas ce qu'il vous faut ?",
      dontSeeBody: "Nous sourçons bien au-delà de ce qui est listé ici. Partagez votre besoin et notre équipe le trouvera.",
      dontSeeBtn: "Renseigner sur un produit",
      ctaTitle: "Prêt à démarrer un projet ?",
      ctaBody: "Envoyez-nous votre besoin et notre équipe préparera un devis détaillé. Sans engagement.",
      ctaContact: "Nous contacter", ctaServices: "Nos services",
    },
    about: {
      tag: "À propos d'AL Razzaq",
      h1a: "Machines industrielles,", h1b: "sourçées auprès des meilleurs", h1c: "fabricants mondiaux.",
      stat1: "Années d'expérience", stat2: "Catégories d'équipements",
      whoTag: "Qui sommes-nous", whoTitle: "Un partenaire d'approvisionnement avec une vraie expérience opérationnelle.",
      whoBody1: "AL Razzaq Enterprises a été créée pour combler le fossé entre les fabricants industriels européens et mondiaux de premier plan et les usines d'Asie, d'Afrique et du Moyen-Orient. Nous ne sommes pas de simples négociants — nous sommes des ingénieurs qui comprennent le fonctionnement des usines.",
      whoBody2: "Depuis notre bureau d'approvisionnement à Emmen, Pays-Bas, nous accédons directement aux fabricants OEM, vérifions la qualité et gérons toute la chaîne d'exportation. Depuis Lahore, nos ingénieurs gèrent l'installation, la mise en service et le support après-vente à long terme.",
      leaderTag: "Direction", leaderTitle: "Fondé par un ingénieur. Géré par l'expérience.",
      leaderName: "Kamran Hafeez", leaderRole: "Fondateur et PDG",
      leaderBio: "Kamran Hafeez est un Ingénieur Électricien qualifié avec plus de 20 ans d'expérience dans la fabrication industrielle et de boissons à grande échelle. Il occupe actuellement le poste de Directeur Général chez Pepsi Pakistan et est récipiendaire du Prix International Platine de Pepsi. Sa profonde connaissance opérationnelle signifie qu'AL Razzaq Enterprises conseille ses clients depuis une position de véritable expertise industrielle.",
      awardTitle: "Prix International Platine Pepsi", awardLabel: "Reconnaissance internationale",
      pillar1Title: "Assurance qualité", pillar1Body: "Chaque machine que nous sourçons passe par des tests d'acceptation en usine avant expédition. La certification CE est vérifiée sur tous les équipements applicables avant de quitter le fabricant.",
      pillar2Title: "Accès direct OEM", pillar2Body: "Nous achetons directement auprès des fabricants, sans intermédiaires. Cela signifie de meilleurs prix, des réponses plus rapides aux demandes techniques et une disponibilité fiable des pièces détachées.",
      pillar3Title: "Service de bout en bout", pillar3Body: "De la spécification et de l'approvisionnement à l'installation, la mise en service et le support après-vente, nous restons votre point de contact unique pour tout le cycle de vie du projet.",
      ctaTitle: "Prêt à sourcer votre prochaine machine ?", ctaBody: "Dites-nous ce dont vous avez besoin et notre équipe répondra dans les 24 heures avec des options d'approvisionnement et un prix indicatif.",
      ctaBtn: "Nous contacter", ctaLink: "Voir nos équipements",
    },
    products: {
      tag: "Catalogue d'équipements", h1: "25+ catégories d'équipements",
      subtitle: "Machines de production sourçées auprès de fabricants européens et mondiaux certifiés, livrées dans vos installations avec installation complète et support après-vente.",
      requestQuote: "Demander un devis", enquire: "Renseigner",
      notFoundTitle: "Vous ne trouvez pas ce que vous cherchez ?",
      notFoundBody: "Nous sourçons un large éventail d'équipements industriels au-delà de ce qui est listé ici. Partagez votre besoin et notre équipe trouvera la bonne solution.",
      notFoundBtn: "Envoyer votre besoin",
      items: [
        { name: "Lignes de remplissage de boissons", description: "Lignes de remplissage complètes pour eau plate, boissons gazeuses, jus et boissons énergisantes. 2 000 à 36 000 BPH. Certifiées CE, prêtes pour CIP." },
        { name: "Lignes d'embouteillage automatisées", description: "Embouteillage, bouchage, étiquetage et emballage thermorétractable clés en main intégrés en un flux de production synchronisé." },
        { name: "Machines de soufflage PET", description: "Souffleuses par étirage linéaires et rotatives de 2 à 12 cavités. Cycles rapides, épaisseur de paroi uniforme." },
        { name: "Automatisation industrielle et robotique", description: "Systèmes PLC, SCADA et bras robotiques pour pick-and-place, palettisation, soudure et lignes d'assemblage." },
        { name: "Machines d'emballage et de fin de ligne", description: "Scelleuses de cartons, formeuses de caisses, emballeuses thermorétractables et palettiseurs pour l'emballage secondaire prêt à l'export." },
        { name: "Équipements miniers et de carrière", description: "Concasseurs à mâchoires, concasseurs giratoires, cribles vibrants et convoyeurs à bande pour les opérations d'agrégats, de charbon et de minéraux." },
        { name: "Stations de traitement de l'eau", description: "Systèmes d'osmose inverse, de stérilisation UV, d'adoucissement et de déminéralisation. De l'approvisionnement en usine à l'échelle municipale." },
        { name: "Machines de transformation alimentaire", description: "Équipements de mélange, mixage, pasteurisation et remplissage pour la production laitière, de sauces, d'huile alimentaire et d'aliments secs." },
        { name: "Appareillage électrique et panneaux", description: "Appareillages BT et MT, centres de contrôle moteurs, panneaux VFD et tableaux de distribution électrique aux normes IEC et NEMA." },
        { name: "Composants industriels et réducteurs", description: "Engrenages de précision, réducteurs, vannes, pneumatiques, moteurs et composants hydrauliques de fabricants certifiés." },
        { name: "Solutions d'usine clés en main", description: "Planification de projets greenfield, intégration complète des équipements, mise en service et formation des opérateurs. Prêt à produire dès le premier jour." },
        { name: "Logistique d'exportation et expédition", description: "Documentation d'exportation complète, assurance maritime, dédouanement et livraison en pays à votre usine." },
        { name: "Fourniture de pièces détachées", description: "Pièces d'usure OEM, roulements, joints, capteurs et électronique de contrôle stockés à Lahore et Emmen pour expédition rapide." },
        { name: "Fret d'équipements lourds", description: "Fret maritime et de projet spécialisé pour équipements industriels surdimensionnés en provenance d'Europe et du monde entier." },
      ],
    },
    services: {
      tag: "Services", h1: "Comment nous travaillons.", subtitle: "Six services essentiels. Un processus fluide. Livrés depuis nos bureaux aux Pays-Bas et au Pakistan.",
      items: [
        { title: "Approvisionnement mondial", sub: "Nous le trouvons. Vous l'approuvez.", points: ["Accès direct OEM sans intermédiaires", "Conformité CE vérifiée sur chaque machine", "Audits d'usine et inspection avant expédition", "Plusieurs options devisées par demande"] },
        { title: "Logistique d'exportation", sub: "De la porte du fabricant à la vôtre.", points: ["Assurance fret maritime incluse", "Chargement en conteneur supervisé à l'origine", "Dédouanement au port de destination", "Livraison finale à votre usine"] },
        { title: "Installation et mise en service", sub: "Nos ingénieurs. Votre usine.", points: ["Assemblage mécanique et alignement de précision", "Configuration du système PLC et de contrôle", "Mise en service de production complète", "Rapport écrit signé par l'ingénieur"] },
        { title: "Formation des opérateurs", sub: "Votre équipe l'exploite. Nous leur apprenons.", points: ["Formation pratique pour les opérateurs et le personnel de maintenance", "Identification des pannes et procédures de première intervention", "Documentation du calendrier de maintenance", "Disponible en anglais, ourdou et arabe"] },
        { title: "Fourniture de pièces détachées", sub: "Stockées. Rapides. Authentiques.", points: ["Entrepôts à Lahore et Emmen pour expédition rapide", "Pièces OEM authentiques sourcées par numéro de référence", "Fabrication personnalisée sur plan ou échantillon", "Accords de fourniture permanente disponibles"] },
        { title: "Support après-vente", sub: "Nous ne nous arrêtons pas à la remise.", points: ["Diagnostic à distance via WhatsApp et appel vidéo", "Visites de maintenance préventive planifiées", "Réponse prioritaire pour les clients sous contrat de service", "Consultation d'optimisation de la production"] },
      ],
      steps: [
        { n: "01", t: "Demande", b: "Partagez votre besoin" },
        { n: "02", t: "Devis", b: "Proforma en 48 à 72 heures" },
        { n: "03", t: "Approbation", b: "Signez et confirmez la commande" },
        { n: "04", t: "Expédition", b: "Testé en usine et expédié" },
        { n: "05", t: "Remise", b: "Mis en service dans votre usine" },
      ],
      howTag: "Processus", howTitle: "Comment ça fonctionne", howSub: "Notre processus est conçu pour être simple. Vous partagez un besoin, nous gérons le reste — de la recherche du bon fournisseur à la mise en service dans votre usine.",
      ctaTitle: "Prêt à commencer ?", ctaBody: "Partagez votre besoin et notre équipe répondra dans les 24 heures.", ctaBtn: "Demander un devis",
    },
    contact: {
      tag: "Contact", h1: "Prenez contact.", subtitle: "Partagez votre besoin et notre équipe préparera un devis détaillé dans les 48 à 72 heures. Nous travaillons avec des fabricants en Europe, en Asie et dans le monde entier.",
      officesTag: "Nos bureaux", directTag: "Contact direct",
      officeNLDetail: "Relations avec les fabricants OEM, inspections avant expédition, conformité CE et documentation d'exportation pour l'Europe et au-delà.",
      officePKDetail: "Installation sur site, mise en service, entrepôt de pièces détachées et support client en Asie, au Moyen-Orient et en Afrique.",
      emailLabel: "Email", waLabel: "WhatsApp", webLabel: "Site web",
      waCta: "Chatter sur WhatsApp", waCtaSub: "Réponse la plus rapide. Généralement en quelques minutes.",
      formTitle: "Envoyer une demande", formSub: "Remplissez vos coordonnées et nous enverrons une facture proforma dans les 48 à 72 heures. Le formulaire est envoyé directement sur notre WhatsApp.",
      nameLabel: "Nom complet", companyLabel: "Entreprise", emailFieldLabel: "Email",
      phoneLabel: "Téléphone", countryLabel: "Pays", categoryLabel: "Catégorie d'équipement",
      categoryPlaceholder: "Sélectionner une catégorie", messageLabel: "Détails du besoin",
      messagePlaceholder: "Décrivez votre besoin de production, la capacité requise ou les numéros de pièces spécifiques.",
      generalEnquiry: "Demande générale", sendWA: "Envoyer via WhatsApp", sendEmail: "Envoyer par email",
      formNote: "La soumission ouvre WhatsApp avec votre demande pré-remplie. Vous pouvez aussi l'envoyer directement par email.",
      namePlaceholder: "Jean Dupont", companyPlaceholder: "XYZ Industries",
      emailPlaceholder: "jean@xyz.com", phonePlaceholder: "+33 1 23 45 67 89",
      countryPlaceholder: "Émirats Arabes Unis",
    },
    footer: {
      description: "Fournisseur et exportateur international de machines industrielles avec des bureaux à Emmen, Pays-Bas et Lahore, Pakistan. Nous sourçons auprès de fabricants OEM européens et mondiaux.",
      companyCol: "Entreprise", equipmentCol: "Équipements", officesCol: "Nos bureaux",
      europe: "Approvisionnement Europe", asia: "Opérations Asie", viewAll: "Voir toutes les 25+ catégories",
      copyright: "AL RAZZAQ ENTERPRISES. TOUS DROITS RÉSERVÉS.",
    },
    chat: {
      greeting: "Bonjour, bienvenue chez AL Razzaq Enterprises.\n\nJe peux vous aider à trouver le bon équipement, obtenir un devis ou répondre à toutes vos questions. Que recherchez-vous aujourd'hui ?",
      placeholder: "Posez une question sur nos équipements…", waBtn: "Chatter directement sur WhatsApp",
      typicallyReplies: "Répond généralement rapidement", quickOptions: "Options rapides :",
      chips: ["J'ai besoin d'un devis", "Quelles machines fournissez-vous ?", "Comment fonctionne la commande ?", "Pouvez-vous sourcer des pièces ?", "Parlez-moi de l'installation", "Où sont vos bureaux ?"],
      fallback: "Je veux m'assurer de vous donner la bonne réponse. Pourriez-vous partager un peu plus de détails ?\n\nPar exemple : quel type de machine cherchez-vous ? Que voulez-vous produire ? Ou vous renseignez-vous sur des pièces détachées pour un équipement existant ?\n\nVous pouvez également contacter notre équipe directement sur WhatsApp au +31 631 379 689.",
      replies: {
        hello: "Ravi d'avoir de vos nouvelles. Comment puis-je vous aider aujourd'hui ?\n\nVous souhaitez sourcer une machine spécifique, obtenir un devis, trouver des pièces détachées ou comprendre notre processus ?",
        quote: "Pour préparer un devis précis, veuillez partager :\n\n1. Le type de machine ou d'équipement nécessaire\n2. La capacité de production requise\n3. Votre pays ou port le plus proche\n\nVous pouvez répondre ici ou envoyer les détails directement à notre équipe sur WhatsApp. Nous visons à vous fournir une facture proforma complète dans les 48 à 72 heures.",
        order: "Notre processus est simple :\n\n**Étape 1** — Partagez votre besoin. Type de machine, capacité, ou simplement ce que vous souhaitez produire.\n**Étape 2** — Nous envoyons un devis détaillé dans les 48 à 72 heures.\n**Étape 3** — Vous approuvez et payez un acompte.\n**Étape 4** — Nous sourçons, testons et expédions depuis l'Europe ou notre réseau mondial.\n**Étape 5** — Nos ingénieurs installent et mettent en service dans votre usine.\n\nLe paiement final est à la livraison. Voulez-vous commencer ?",
        machinery: "Nous fournissons une large gamme d'équipements industriels sourçés auprès de fabricants européens et mondiaux :\n\n• Lignes de remplissage et d'embouteillage\n• Machines de soufflage PET\n• Systèmes d'emballage et d'étiquetage\n• Automatisation industrielle et robotique\n• Stations de traitement de l'eau\n• Équipements de transformation alimentaire et laitière\n• Équipements miniers et de carrière\n• Appareillages électriques et tableaux\n• Pièces détachées pour toutes marques\n\nCe n'est pas une liste complète. Si vous avez besoin de quelque chose de spécifique, demandez et nous le trouverons.",
        beverage: "Le remplissage et l'embouteillage de boissons est l'un de nos domaines principaux. Nous fournissons des lignes complètes pour l'eau plate, les boissons gazeuses, les jus, les boissons énergisantes et les produits laitiers.\n\nCapacités de 2 000 à 36 000 BPH. Tous sourcés auprès d'OEM européens certifiés CE, testés en usine avant expédition.\n\nQuelle est votre capacité cible et votre type de boisson ?",
        pet: "Nous fournissons des machines de soufflage par étirage PET linéaires et rotatives, de 2 à 12 cavités. Temps de cycle rapides, épaisseur de paroi uniforme, faible taux de défauts.\n\nElles peuvent être intégrées dans une ligne de remplissage ou fonctionner de manière autonome. Mise en service complète et formation des opérateurs incluses.\n\nQuelle est votre production requise en bouteilles par heure ?",
        spareParts: "Oui, l'approvisionnement en pièces détachées est une partie essentielle de notre activité. Nous stockons les pièces d'usure à forte demande dans nos entrepôts de Lahore et d'Emmen.\n\nPour les articles en stock : expédition sous 24 à 48 heures.\nPour les articles à sourcer : commande depuis l'Europe avec traitement prioritaire.\n\nPartagez la marque, le modèle et le numéro de référence de la machine et nous vous donnerons un prix.",
        install: "Notre installation et mise en service est effectuée par nos propres ingénieurs, pas des sous-traitants.\n\nNous gérons :\n• Installation mécanique et alignement\n• Connexion électrique et configuration du système de contrôle\n• Programmation et calibration PLC\n• Mise en service de production complète\n• Formation des opérateurs avant la remise\n\nTout cela est inclus dans le projet par défaut.",
        training: "La formation des opérateurs et du personnel de maintenance fait partie de chaque installation que nous réalisons.\n\nVotre équipe est formée sur l'exploitation quotidienne, la maintenance de routine, l'identification des pannes et le dépannage de base.\n\nLa formation est disponible en anglais, ourdou et arabe.",
        shipping: "Les délais de livraison dépendent de votre emplacement et du type d'équipement. Chaque projet est différent, nous ne citons donc pas de délai fixe à l'avance.\n\nNos partenariats européens et mondiaux nous donnent un accès plus rapide au fret, aux créneaux de production et aux canaux douaniers.\n\nUne fois que vous partagez votre besoin, nous incluons un calendrier confirmé dans votre facture proforma.",
        contactInfo: "Vous pouvez contacter notre équipe via :\n\nWhatsApp : +31 631 379 689 (réponse la plus rapide)\nEmail : info@alrazzaqenterprises.com\n\nNous sommes disponibles pendant les heures de bureau au Pakistan et aux Pays-Bas.",
        location: "Nous opérons depuis deux bureaux :\n\n**Emmen, Pays-Bas** — Bureau d'approvisionnement européen. Relations avec les fabricants OEM, inspections avant expédition, conformité CE et documentation d'exportation.\n\n**Lahore, Pakistan** — Base d'opérations régionale. Installation, mise en service, entrepôt de pièces détachées et support client en Asie, au Moyen-Orient et en Afrique.",
        about: "AL Razzaq Enterprises a été fondée par Kamran Hafeez, un Ingénieur Électricien qualifié avec 20+ ans d'expérience dans la fabrication industrielle et de boissons à grande échelle.\n\nM. Hafeez est actuellement Directeur Général chez Pepsi Pakistan et récipiendaire du Prix International Platine Pepsi.\n\nCette expérience opérationnelle signifie que nous conseillons les clients depuis notre propre vécu, pas seulement des catalogues produits.",
        manufacturer: "Nous sourçons auprès de fabricants établis en Europe (Allemagne, Italie, Pays-Bas) et dans le monde entier, en achetant directement sans intermédiaires.\n\nChaque machine que nous fournissons est certifiée CE lorsque applicable. Les tests d'acceptation en usine avant expédition sont standards.",
        mining: "Pour l'exploitation minière et des carrières, nous fournissons :\n\n• Concasseurs à mâchoires et à cônes\n• Concasseurs à impact\n• Cribles vibrants\n• Convoyeurs à bandes\n• Pompes de déshydratation et de pulpe\n\nQuel matériau traitez-vous et quel est votre débit requis ?",
        food: "Pour la transformation alimentaire et laitière, nous fournissons des équipements de mélange, des pasteurisateurs, des homogénéisateurs, des machines de remplissage et des lignes d'emballage complètes.\n\nTous les équipements en contact avec les aliments sont en acier inoxydable avec conception compatible NEP.\n\nQuel produit produisez-vous et quel est votre volume journalier cible ?",
        water: "Nous fournissons des systèmes complets de traitement de l'eau : installations d'osmose inverse, stérilisation UV, adoucisseurs, déminéralisation et filtration multimédia.\n\nPartagez votre besoin journalier en mètres cubes et nous préparerons une recommandation.",
        automation: "Nous fournissons des solutions d'automatisation industrielle incluant des systèmes de contrôle PLC, des plateformes SCADA, des panneaux HMI et des systèmes robotiques.\n\nQuel processus souhaitez-vous automatiser ?",
        packaging: "Nous fournissons des lignes d'emballage secondaire complètes incluant des érecteurs de cartons, des fermeuses de caisses, des tunnels de rétraction, des banderoleuses et des palettiseurs robotiques.\n\nQuel type de produit et de contenant emballez-vous ?",
        thanks: "De rien. Si quelque chose d'autre se présente ou si vous êtes prêt à partager un besoin, nous sommes là. Vous pouvez également contacter l'équipe directement sur WhatsApp au +31 631 379 689.",
      },
    },
  },

  nl: {
    nav: {
      home: "Home", about: "Over ons", products: "Producten", services: "Diensten",
      contact: "Contact", requestQuote: "Offerte aanvragen", whatsapp: "WhatsApp",
    },
    home: {
      tag: "Emmen, Nederland  |  Lahore, Pakistan",
      h1a: "Europese industriële", h1b: "machines,", h1c: "afgeleverd aan uw deur.",
      subtitle: "Wij sourcen, certificeren en leveren industriële apparatuur van Europa's top OEM-fabrikanten aan fabrieken in Azië, Afrika en het Midden-Oosten, met installatie op locatie en levenslange ondersteuning.",
      btnProducts: "Apparatuur verkennen", btnQuote: "Offerte aanvragen",
      stat1: "Jaar ervaring", stat2: "Apparatuurcategorieën",
      whyTag: "Waarom AL Razzaq", whyTitle: "Van begin tot eind, van de Europese fabrieksvloer naar de uwe.",
      learnMore: "Meer informatie",
      features: [
        { title: "Europees sourcingnetwerk", body: "Wij hebben directe relaties met OEM-fabrikanten in Duitsland, Italië en Nederland. Elke machine wordt gecontroleerd en getest in de fabriek voordat ze Europa verlaat." },
        { title: "Één contract, volledige verantwoordelijkheid", body: "Douanedocumentatie, vrachtcoördinatie, installatie en inbedrijfstelling op locatie worden allemaal beheerd onder één overeenkomst. Één team verantwoordelijk voor het hele proces." },
        { title: "Levenslange after-salesondersteuning", body: "Ons team in Lahore biedt technische ondersteuning op locatie, reserveonderdelen uit onze magazijnen en preventief onderhoud gedurende de volledige levensduur van de apparatuur." },
      ],
      advantageTag: "Ons voordeel", advantageTitle: "Snelle levering, ondersteund door gevestigde Europese partnerschappen.",
      advantageBody: "Onze langdurige relaties met fabrikanten en vrachtpartners in Europa stellen ons in staat sneller te handelen dan iedereen die onafhankelijk sourcet. Ons netwerk geeft ons toegang tot voorraad en productieslots die anderen simpelweg niet kunnen evenaren.",
      equipmentTag: "Apparatuur", equipmentTitle: "25+ categorieën, en veel meer op aanvraag.",
      viewAll: "Alles bekijken", enquire: "Informeren",
      dontSeeTitle: "Ziet u niet wat u nodig hebt?",
      dontSeeBody: "Wij sourcen veel meer dan wat hier wordt vermeld. Deel uw vereiste en ons team zal het vinden.",
      dontSeeBtn: "Informeer naar een product",
      ctaTitle: "Klaar om een project te starten?",
      ctaBody: "Stuur ons uw vereiste en ons team zal een gedetailleerde offerte opstellen. Geen verplichting vereist.",
      ctaContact: "Neem contact op", ctaServices: "Onze diensten",
    },
    about: {
      tag: "Over AL Razzaq",
      h1a: "Industriële machines,", h1b: "gesourced van de beste", h1c: "fabrikanten ter wereld.",
      stat1: "Jaar ervaring", stat2: "Apparatuurcategorieën",
      whoTag: "Wie zijn wij", whoTitle: "Een sourcingpartner met echte operationele ervaring.",
      whoBody1: "AL Razzaq Enterprises werd opgericht om de kloof te overbruggen tussen toonaangevende Europese en mondiale industriële fabrikanten en fabrieken in Azië, Afrika en het Midden-Oosten. Wij zijn niet alleen handelaren — wij zijn ingenieurs die begrijpen hoe fabrieken werken.",
      whoBody2: "Vanuit ons sourcingkantoor in Emmen, Nederland, benaderen wij OEM-fabrikanten rechtstreeks, controleren wij de kwaliteit en beheren wij de volledige exportketen. Vanuit Lahore verzorgen onze ingenieurs de installatie, inbedrijfstelling en langdurige after-salesondersteuning.",
      leaderTag: "Leiderschap", leaderTitle: "Opgericht door een ingenieur. Gerund vanuit ervaring.",
      leaderName: "Kamran Hafeez", leaderRole: "Oprichter en CEO",
      leaderBio: "Kamran Hafeez is een gekwalificeerd elektrotechnisch ingenieur met meer dan 20 jaar ervaring in grootschalige industriële en drankproductie. Hij is momenteel Algemeen Directeur bij Pepsi Pakistan en ontvanger van de Pepsi International Platinum Award. Zijn diepgaande operationele kennis betekent dat AL Razzaq Enterprises klanten adviseert vanuit echte industriële expertise.",
      awardTitle: "Pepsi International Platinum Award", awardLabel: "Internationale erkenning",
      pillar1Title: "Kwaliteitsborging", pillar1Body: "Elke machine die wij sourcen ondergaat fabrieksacceptatietests vóór verzending. CE-certificering wordt gecontroleerd op alle van toepassing zijnde apparatuur voordat deze de fabrikant verlaat.",
      pillar2Title: "Directe OEM-toegang", pillar2Body: "Wij kopen rechtstreeks bij fabrikanten, zonder tussenpersonen. Dit betekent betere prijzen, snellere reactie op technische vragen en betrouwbare beschikbaarheid van reserveonderdelen.",
      pillar3Title: "End-to-end service", pillar3Body: "Van specificatie en sourcing tot installatie, inbedrijfstelling en after-salesondersteuning blijven wij uw enig aanspreekpunt voor de volledige projectlevenscyclus.",
      ctaTitle: "Klaar om uw volgende machine te sourcen?", ctaBody: "Vertel ons wat u nodig hebt en ons team reageert binnen 24 uur met sourcingopties en een indicatieve prijs.",
      ctaBtn: "Neem contact op", ctaLink: "Bekijk onze apparatuur",
    },
    products: {
      tag: "Apparatuurcatalogus", h1: "25+ Apparatuurcategorieën",
      subtitle: "Productieklasse machines gesourced van gecertificeerde Europese en mondiale fabrikanten, afgeleverd bij uw faciliteit met volledige installatie en after-salesondersteuning.",
      requestQuote: "Offerte aanvragen", enquire: "Informeren",
      notFoundTitle: "Kunt u niet vinden wat u zoekt?",
      notFoundBody: "Wij sourcen een breed scala aan industriële apparatuur buiten wat hier wordt vermeld. Vertel ons uw vereiste en ons team zal de juiste oplossing vinden.",
      notFoundBtn: "Stuur uw vereiste",
      items: [
        { name: "Vullijnen voor dranken", description: "Volledige vullijnen voor stil water, koolzuurhoudende dranken, sap en energiedranken. 2.000 tot 36.000 FPH. CE-gecertificeerd, CIP-gereed." },
        { name: "Geautomatiseerde bottellijnen", description: "Sleutelklare botteling, afdopping, etikettering en krimpfolie geïntegreerd in één gesynchroniseerde productiestroom." },
        { name: "PET-blaasvormmachines", description: "Lineaire en roterende rekblaasvormmachines van 2 tot 12 holtes. Snelle cyclustijden, consistente wanddikte." },
        { name: "Industriële automatisering en robotica", description: "PLC-, SCADA- en robotarmsystemen voor pick-and-place, palletisering, lassen en assemblagelijnen." },
        { name: "Verpakkingsmachines en eindlijnoplossingen", description: "Kartondozensluiters, kistoprichters, krimpfoliemachines en palletiseerders voor exportklare secundaire verpakking." },
        { name: "Mijnbouw- en groefapparatuur", description: "Kaakbrekers, kegelbrekers, trilzeven en bandtransporteurs voor aggregaat-, kolen- en mineraalopwerking." },
        { name: "Waterbehandelingsinstallaties", description: "Omgekeerde osmose, UV-sterilisatie, ontharding en ontzoutingssystemen. Van fabriekslevering tot gemeentelijke schaal." },
        { name: "Voedingsverwerkingsmachines", description: "Mix-, blend-, pasteurisatie- en vulapparatuur voor zuivel-, saus-, eetbare-olie- en droogvoedselproductie." },
        { name: "Elektrisch schakelmateriaal en panelen", description: "LS- en MS-schakelmateriaal, motorcontrolcentra, VFD-panelen en stroomverdeelborden volgens IEC- en NEMA-normen." },
        { name: "Industriële componenten en tandwielkasten", description: "Precisietandwielen, tandwielkasten, kleppen, pneumatiek, motoren en hydraulische componenten van gecertificeerde fabrikanten." },
        { name: "Sleutelklare fabrieksoplossingen", description: "Greenfield projectplanning, volledige apparatuurintegratie, inbedrijfstelling en operatorenopleiding. Klaar voor productie vanaf dag één." },
        { name: "Exportlogistiek en verzending", description: "Volledige exportdocumentatie, zeevrachtverzekering, douaneklaring en binnenlandse levering aan uw faciliteit." },
        { name: "Levering van reserveonderdelen", description: "OEM-slijtdelen, lagers, afdichtingen, sensoren en besturingselektronica op voorraad in Lahore en Emmen voor snelle verzending." },
        { name: "Vracht voor zware apparatuur", description: "Gespecialiseerde container- en projectvracht voor oversized industriële apparatuur van Europese en mondiale oorsprong." },
      ],
    },
    services: {
      tag: "Diensten", h1: "Hoe wij werken.", subtitle: "Zes kerndiensten. Één naadloos proces. Geleverd vanuit onze kantoren in Nederland en Pakistan.",
      items: [
        { title: "Wereldwijde sourcing", sub: "Wij vinden het. U keurt het goed.", points: ["Directe OEM-toegang zonder tussenpersonen", "CE-conformiteit gecontroleerd op elke machine", "Fabrieksaudits en pre-shipmentinspectie", "Meerdere opties geciteerd per vereiste"] },
        { title: "Exportlogistiek", sub: "Van de deur van de fabrikant naar de uwe.", points: ["Zee-vrachtverzekerng geregeld en inbegrepen", "Containervulling gesuperviseerd aan de oorsprong", "Douaneklaring in de bestemmingshaven", "Eindlevering aan uw fabriekspoort"] },
        { title: "Installatie en inbedrijfstelling", sub: "Onze ingenieurs. Uw faciliteit.", points: ["Mechanische assemblage en nauwkeurige uitlijning", "PLC- en bedieningssysteemconfiguratie", "Volledige productie-inbedrijfstelling", "Ingenieursgoedkeuring met schriftelijk rapport"] },
        { title: "Operatorenopleiding", sub: "Uw team bedient het. Wij leren hen hoe.", points: ["Praktijktraining voor operators en onderhoudspersoneel", "Foutidentificatie en eerstresponsprocedures", "Documentatie van onderhoudsschema", "Beschikbaar in het Engels, Urdu en Arabisch"] },
        { title: "Levering van reserveonderdelen", sub: "Op voorraad. Snel. Origineel.", points: ["Magazijnen in Lahore en Emmen voor snelle verzending", "Originele OEM-onderdelen gesourced op onderdeelnummer", "Maatwerk fabricage op tekening of monster", "Vaste leveringsovereenkomsten beschikbaar"] },
        { title: "After-salesondersteuning", sub: "Wij stoppen niet bij de overdracht.", points: ["Diagnosefout op afstand via WhatsApp en videogesprek", "Geplande preventieve onderhoudsbezoeken", "Prioriteitsrespons voor serviceovereenkomstklanten", "Consultatie voor productieoptimalisatie"] },
      ],
      steps: [
        { n: "01", t: "Aanvraag", b: "Deel uw vereiste" },
        { n: "02", t: "Offerte", b: "Proforma in 48 tot 72 uur" },
        { n: "03", t: "Goedkeuring", b: "Onderteken en bevestig de bestelling" },
        { n: "04", t: "Verzending", b: "Fabrieksgetest en verzonden" },
        { n: "05", t: "Overdracht", b: "In gebruik genomen in uw faciliteit" },
      ],
      howTag: "Proces", howTitle: "Hoe het werkt", howSub: "Ons proces is ontworpen om eenvoudig te zijn. U deelt een vereiste, wij regelen de rest — van het vinden van de juiste leverancier tot de inbedrijfstelling in uw faciliteit.",
      ctaTitle: "Klaar om te beginnen?", ctaBody: "Deel uw vereiste en ons team reageert binnen 24 uur.", ctaBtn: "Offerte aanvragen",
    },
    contact: {
      tag: "Contact", h1: "Neem contact op.", subtitle: "Deel uw vereiste en ons team stelt binnen 48 tot 72 uur een gedetailleerde offerte op. Wij werken met fabrikanten in Europa, Azië en wereldwijd.",
      officesTag: "Onze kantoren", directTag: "Direct contact",
      officeNLDetail: "OEM-fabrieksrelaties, inspecties vóór verzending, CE-conformiteit en exportdocumentatie voor Europa en verder.",
      officePKDetail: "Installatie op locatie, inbedrijfstelling, reserveonderdelenmagazijn en klantenondersteuning in Azië, het Midden-Oosten en Afrika.",
      emailLabel: "E-mail", waLabel: "WhatsApp", webLabel: "Website",
      waCta: "Chatten op WhatsApp", waCtaSub: "Snelste reactie. Meestal binnen enkele minuten.",
      formTitle: "Stuur een aanvraag", formSub: "Vul uw gegevens in en wij sturen binnen 48 tot 72 uur een proformafactuur. Het formulier wordt rechtstreeks naar onze WhatsApp gestuurd.",
      nameLabel: "Volledige naam", companyLabel: "Bedrijf", emailFieldLabel: "E-mail",
      phoneLabel: "Telefoon", countryLabel: "Land", categoryLabel: "Apparatuurcategorie",
      categoryPlaceholder: "Selecteer categorie", messageLabel: "Vereiste details",
      messagePlaceholder: "Beschrijf uw productievereiste, benodigde capaciteit of specifieke onderdeelnummers.",
      generalEnquiry: "Algemene aanvraag", sendWA: "Verzenden via WhatsApp", sendEmail: "Verzenden per e-mail",
      formNote: "Bij indienen wordt WhatsApp geopend met uw aanvraag vooraf ingevuld. U kunt het ook rechtstreeks per e-mail verzenden.",
      namePlaceholder: "Jan de Vries", companyPlaceholder: "XYZ Industrie",
      emailPlaceholder: "jan@xyz.nl", phonePlaceholder: "+31 6 12 34 56 78",
      countryPlaceholder: "Verenigde Arabische Emiraten",
    },
    footer: {
      description: "Internationale machine-leverancier en exporteur met kantoren in Emmen, Nederland en Lahore, Pakistan. Wij sourcen bij Europese en mondiale OEM-fabrikanten en bedienen klanten in Azië, Afrika en het Midden-Oosten.",
      companyCol: "Bedrijf", equipmentCol: "Apparatuur", officesCol: "Onze kantoren",
      europe: "Sourcing Europa", asia: "Operaties Azië", viewAll: "Bekijk alle 25+ categorieën",
      copyright: "AL RAZZAQ ENTERPRISES. ALLE RECHTEN VOORBEHOUDEN.",
    },
    chat: {
      greeting: "Hallo, welkom bij AL Razzaq Enterprises.\n\nIk kan u helpen de juiste apparatuur te vinden, een offerte te krijgen of elke vraag over onze diensten te beantwoorden. Wat zoekt u vandaag?",
      placeholder: "Stel een vraag over onze apparatuur…", waBtn: "Direct chatten op WhatsApp",
      typicallyReplies: "Reageert doorgaans snel", quickOptions: "Snelle opties:",
      chips: ["Ik heb een offerte nodig", "Welke machines levert u?", "Hoe werkt bestellen?", "Kunt u reserveonderdelen sourcen?", "Vertel me over installatie", "Waar zijn uw kantoren?"],
      fallback: "Ik wil u het juiste antwoord geven. Kunt u wat meer details delen?\n\nBijvoorbeeld: welk type machine zoekt u? Wat wilt u produceren? Of informeert u naar reserveonderdelen voor bestaande apparatuur?\n\nU kunt ons team ook rechtstreeks bereiken op WhatsApp via +31 631 379 689.",
      replies: {
        hello: "Goed u te horen. Hoe kan ik u vandaag helpen?\n\nWilt u een specifieke machine sourcen, een offerte krijgen, reserveonderdelen vinden of begrijpen hoe ons proces werkt?",
        quote: "Om een nauwkeurige offerte op te stellen, gelieve te delen:\n\n1. Type machine of apparatuur benodigd\n2. Vereiste productiecapaciteit of output\n3. Uw land of dichtstbijzijnde haven\n\nU kunt hier antwoorden of de details rechtstreeks naar ons team sturen op WhatsApp. Wij streven ernaar u binnen 48 tot 72 uur een volledige proformafactuur te geven.",
        order: "Ons proces is eenvoudig:\n\n**Stap 1** — Deel uw vereiste. Machine type, capaciteit, of gewoon wat u wilt produceren.\n**Stap 2** — Wij sturen een gedetailleerde offerte binnen 48 tot 72 uur.\n**Stap 3** — U keurt goed en betaalt een aanbetaling.\n**Stap 4** — Wij sourcen, testen en verzenden vanuit Europa of ons mondiale netwerk.\n**Stap 5** — Onze ingenieurs installeren en nemen in bedrijf in uw faciliteit.\n\nDe eindbetalig is bij levering. Wilt u beginnen?",
        machinery: "Wij leveren een breed scala aan industriële apparatuur gesourced van Europese en mondiale fabrikanten:\n\n• Drank- en bottellijnen\n• PET-blaasmaschines\n• Verpakkings- en etiketteersystemen\n• Industriële automatisering en robotica\n• Waterzuiveringsinstallaties\n• Voedings- en zuivelverwerking\n• Mijnbouw- en groevemateriaal\n• Elektrotechnisch schakelmateriaal en panelen\n• Reserveonderdelen voor elk merk\n\nDit is geen complete lijst. Als u iets specifieks nodig hebt, vraag het en wij vinden het.",
        beverage: "Drankvulling en bottelen is een van onze kerngebieden. Wij leveren complete lijnen voor stilwater, koolzuurhoudende dranken, sap, energiedranken en zuivel.\n\nCapaciteiten van 2.000 tot 36.000 BPH. Allemaal gesourced van CE-gecertificeerde Europese OEM's, getest in de fabriek voor verzending.\n\nWat is uw doelcapaciteit en dranktype?",
        pet: "Wij leveren lineaire en roterende PET-rekblaasmaschines, van 2 tot 12 holtes. Snelle cyclustijden, consistente wanddikte, lage foutpercentages.\n\nZe kunnen worden geïntegreerd in een vullijn of zelfstandig werken. Volledige inbedrijfstelling en operatorenopleiding inbegrepen.\n\nWat is uw vereiste output in flessen per uur?",
        spareParts: "Ja, sourcing van reserveonderdelen is een belangrijk onderdeel van wat wij doen. Wij hebben slijtagedelen met hoge vraag op voorraad in onze magazijnen in Lahore en Emmen.\n\nVoor artikelen op voorraad: verzending binnen 24 tot 48 uur.\nVoor te sourcen artikelen: wij bestellen vanuit Europa met prioriteitsafhandeling.\n\nDeel het machinenmerk, model en onderdeelnummer en wij geven u een prijs.",
        install: "Onze installatie en inbedrijfstelling wordt uitgevoerd door onze eigen ingenieurs, niet door onderaannemers.\n\nWij verzorgen:\n• Mechanische installatie en uitlijning\n• Elektrische aansluiting en bediening\n• PLC-programmering en kalibratie\n• Volledige productie-inbedrijfstelling\n• Operatorenopleiding voor overdracht\n\nDit alles is standaard inbegrepen in het project.",
        training: "Opleiding van operators en onderhoudspersoneel maakt deel uit van elke installatie die wij doen.\n\nUw team wordt getraind in dagelijkse bediening, routineonderhoud, foutidentificatie en basisprobleemoplossing.\n\nOpleiding is beschikbaar in het Engels, Urdu en Arabisch.",
        shipping: "Levertijden zijn afhankelijk van uw locatie en het type apparatuur. Elk project is anders, dus wij geven vooraf geen vast nummer.\n\nOnze Europese en mondiale partnerschappen geven ons snellere toegang tot vracht, productieslots en douanekanalen.\n\nZodra u uw vereiste deelt, nemen wij een bevestigde tijdlijn op in uw proformafactuur.",
        contactInfo: "U kunt ons team bereiken via:\n\nWhatsApp: +31 631 379 689 (snelste reactie)\nE-mail: info@alrazzaqenterprises.com\n\nWij zijn beschikbaar tijdens kantooruren in Pakistan en Nederland.",
        location: "Wij opereren vanuit twee kantoren:\n\n**Emmen, Nederland** — Europees sourcingkantoor. OEM-fabrieksrelaties, pre-shipmentinspecties, CE-conformiteit en exportdocumentatie.\n\n**Lahore, Pakistan** — Regionaal operatiebasis. Installatie, inbedrijfstelling, reserveonderdelenmagazijn en klantenondersteuning in Azië, het Midden-Oosten en Afrika.",
        about: "AL Razzaq Enterprises werd opgericht door Kamran Hafeez, een gekwalificeerd elektrotechnisch ingenieur met 20+ jaar ervaring in grootschalige industriële en drankproductie.\n\nDe heer Hafeez is momenteel Algemeen Directeur bij Pepsi Pakistan en ontvanger van de Pepsi International Platinum Award.\n\nDie operationele achtergrond betekent dat wij klanten adviseren vanuit ervaring, niet alleen productcatalogi.",
        manufacturer: "Wij sourcen van gevestigde fabrikanten in Europa (Duitsland, Italië, Nederland) en wereldwijd, direct inkopend zonder tussenpersonen.\n\nElke machine die wij leveren is CE-gecertificeerd waar van toepassing. Pre-shipment fabrieksacceptatietests zijn standaard.",
        mining: "Voor mijnbouw en steengroeven leveren wij:\n\n• Kaak- en kegelbreekers\n• Impactbreekers\n• Trilzeven\n• Bandtransporteurs\n• Ontwateringsinstallaties en slurrispompen\n\nWelk materiaal verwerkt u en wat is uw vereiste doorvoer?",
        food: "Voor voedings- en zuivelverwerking leveren wij meng- en mengapparatuur, pasteurisatoren, homogenisatoren, vulmachines en complete verpakkingslijnen.\n\nAlle voedselcontactapparatuur is van roestvrij staal met CIP-compatibel ontwerp.\n\nWelk product produceert u en wat is uw dagelijks doelvolume?",
        water: "Wij leveren complete waterzuiveringssystemen: omgekeerde osmose-installaties, UV-sterilisatie, ontharders, demineralisatie en multimediafiltration.\n\nDeel uw dagelijkse vereiste in kubieke meter en wij stellen een aanbeveling op.",
        automation: "Wij leveren industriële automatiseringsoplossingen waaronder PLC-besturingssystemen, SCADA-platforms, HMI-panelen en robotsystemen voor oppak-en-plaatsen, palletisering en lassen.\n\nWelk proces wilt u automatiseren?",
        packaging: "Wij leveren complete secundaire verpakkingslijnen waaronder doosenopeners, dozen-afsluitmachines, krimpovens, rekwikkelaars en robotpalletiseerders.\n\nWelk type product en verpakking gebruikt u?",
        thanks: "Graag gedaan. Als er iets anders opkomt of u klaar bent om een vereiste te delen, zijn wij er. U kunt het team ook rechtstreeks bereiken op WhatsApp via +31 631 379 689.",
      },
    },
  },
};
