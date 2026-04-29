const SUPPORTED_LANGUAGES = ["en", "fr", "nl"];
const STORAGE_KEY = "voice2doc.language";

const translations = {
  en: {
    title: "Voice to Doc AI",
    "nav.workflow": "Workflow",
    "nav.quality": "Quality",
    "nav.pilot": "Pilot",
    "hero.eyebrow": "For expert-led reporting teams",
    "hero.title": "Turn field recordings into client-ready documents.",
    "hero.lead":
      "We use agentic AI to automate slow manual drafting work, from an expert's spoken walkthrough to the structured document your team sends to the client.",
    "hero.primary": "Send a sample",
    "hero.secondary": "See how it works",
    "visual.aria": "Automated workflow preview",
    "visual.title": "Voice-to-document workflow",
    "visual.step1.title": "Expert records naturally",
    "visual.step1.text": "Voice notes, walkthroughs and site context",
    "visual.step2.title": "AI transcribes and structures",
    "visual.step2.text": "Sections, observations, findings and actions",
    "visual.step3.title": "Quality agent checks the draft",
    "visual.step3.text": "Completeness, consistency, missing details",
    "visual.step4.title": "Client document is ready",
    "visual.step4.text": "Formatted DOCX for client delivery",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "No more manual report drafting after every field visit.",
    "workflow.card1.title": "Record naturally",
    "workflow.card1.text": "The expert speaks during the visit, without changing the field workflow.",
    "workflow.card2.title": "Agentic processing",
    "workflow.card2.text": "Specialized AI steps parse, clean, organize, evaluate and revise the report.",
    "workflow.card3.title": "Client-ready output",
    "workflow.card3.text": "The final document follows your expected structure and can be reviewed before sending.",
    "quality.eyebrow": "Quality",
    "quality.title": "Automation without accepting quality loss.",
    "quality.text":
      "The workflow is not a single transcription pass. It separates transcription, editing, judgment and revision, so the generated report is checked against the original recording before the document is produced.",
    "quality.proof1.title": "Traceable input",
    "quality.proof1.text": "Every draft starts from the expert's real recording.",
    "quality.proof2.title": "Structured review",
    "quality.proof2.text": "An evaluation pass looks for omissions, contradictions and weak sections.",
    "quality.proof3.title": "Human approval",
    "quality.proof3.text": "Your team keeps final control before the report goes to the client.",
    "pilot.eyebrow": "Pilot offer",
    "pilot.title": "Send us one recording and one example template.",
    "pilot.send.title": "What to send",
    "pilot.send.item1": "An audio recording from a real visit",
    "pilot.send.item2": "A previous report or document template",
    "pilot.send.item3": "Any formatting rules your client expects",
    "pilot.back.title": "What you get back",
    "pilot.back.text":
      "A completed sample document in your structure, ready for review, delivered within 2 hours during business hours.",
    "pilot.cta": "Send sample by email",
    mailSubject: "Voice2Doc sample document request",
    mailBody:
      "Hi,\n\nWe would like to test Voice2Doc. We will send:\n- One audio recording\n- One example template or previous report\n- Our formatting requirements\n\nCompany:\nName:\nPhone:\n",
  },
  fr: {
    title: "Voice to Doc AI",
    "nav.workflow": "Processus",
    "nav.quality": "Qualité",
    "nav.pilot": "Pilot",
    "hero.eyebrow": "Pour les équipes de rapport terrain",
    "hero.title": "Transformez vos enregistrements terrain en documents prêts pour vos clients.",
    "hero.lead":
      "Nous utilisons une IA agentique pour automatiser la rédaction manuelle, depuis le compte rendu oral de l'expert jusqu'au document structuré envoyé au client.",
    "hero.primary": "Envoyer un échantillon",
    "hero.secondary": "Voir le processus",
    "visual.aria": "Aperçu du processus automatisé",
    "visual.title": "Processus voix vers document",
    "visual.step1.title": "L'expert enregistre naturellement",
    "visual.step1.text": "Notes vocales, visite terrain et contexte métier",
    "visual.step2.title": "L'IA transcrit et structure",
    "visual.step2.text": "Sections, observations, constats et actions",
    "visual.step3.title": "Un agent qualité vérifie le brouillon",
    "visual.step3.text": "Complétude, cohérence, détails manquants",
    "visual.step4.title": "Le document client est prêt",
    "visual.step4.text": "DOCX formaté pour livraison au client",
    "workflow.eyebrow": "Processus",
    "workflow.title": "Plus de rédaction manuelle après chaque visite terrain.",
    "workflow.card1.title": "Enregistrez naturellement",
    "workflow.card1.text": "L'expert parle pendant la visite, sans changer sa manière de travailler.",
    "workflow.card2.title": "Traitement agentique",
    "workflow.card2.text": "Des étapes IA spécialisées transcrivent, nettoient, organisent, évaluent et révisent le rapport.",
    "workflow.card3.title": "Document prêt pour le client",
    "workflow.card3.text": "Le document final respecte votre structure et peut être relu avant envoi.",
    "quality.eyebrow": "Qualité",
    "quality.title": "Automatiser sans perte de qualité.",
    "quality.text":
      "Le processus n'est pas une simple transcription. Il sépare transcription, rédaction, évaluation et révision afin de vérifier le rapport généré par rapport à l'enregistrement original.",
    "quality.proof1.title": "Entrée traçable",
    "quality.proof1.text": "Chaque brouillon part de l'enregistrement réel de l'expert.",
    "quality.proof2.title": "Revue structurée",
    "quality.proof2.text": "Une passe d'évaluation recherche les oublis, contradictions et sections faibles.",
    "quality.proof3.title": "Validation humaine",
    "quality.proof3.text": "Votre équipe garde le contrôle final avant l'envoi au client.",
    "pilot.eyebrow": "Offre pilote",
    "pilot.title": "Envoyez-nous un enregistrement et un modèle de document.",
    "pilot.send.title": "Ce qu'il faut envoyer",
    "pilot.send.item1": "Un enregistrement audio d'une vraie visite",
    "pilot.send.item2": "Un ancien rapport ou un modèle de document",
    "pilot.send.item3": "Les règles de mise en forme attendues par votre client",
    "pilot.back.title": "Ce que vous recevez",
    "pilot.back.text":
      "Un document exemple complété dans votre structure, prêt à être relu, livré sous 2 heures pendant les heures ouvrables.",
    "pilot.cta": "Envoyer un échantillon",
    mailSubject: "Demande d'échantillon Voice2Doc",
    mailBody:
      "Bonjour,\n\nNous souhaitons tester Voice2Doc. Nous allons envoyer :\n- Un enregistrement audio\n- Un modèle ou ancien rapport\n- Nos consignes de mise en forme\n\nSociété :\nNom :\nTéléphone :\n",
  },
  nl: {
    title: "Voice to Doc AI",
    "nav.workflow": "Workflow",
    "nav.quality": "Kwaliteit",
    "nav.pilot": "Pilot",
    "hero.eyebrow": "Voor teams die expertrapporten maken",
    "hero.title": "Zet veldopnames om in klantklare documenten.",
    "hero.lead":
      "We gebruiken agentic AI om traag handmatig schrijfwerk te automatiseren, van de gesproken rondgang van de expert tot het gestructureerde document voor de klant.",
    "hero.primary": "Stuur een voorbeeld",
    "hero.secondary": "Bekijk de workflow",
    "visual.aria": "Voorbeeld van geautomatiseerde workflow",
    "visual.title": "Van stem naar document",
    "visual.step1.title": "De expert neemt natuurlijk op",
    "visual.step1.text": "Spraaknotities, rondgangen en context op locatie",
    "visual.step2.title": "AI transcribeert en structureert",
    "visual.step2.text": "Secties, observaties, vaststellingen en acties",
    "visual.step3.title": "Een kwaliteitsagent controleert de draft",
    "visual.step3.text": "Volledigheid, consistentie, ontbrekende details",
    "visual.step4.title": "Het klantdocument is klaar",
    "visual.step4.text": "Geformatteerde DOCX voor levering aan de klant",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "Geen handmatige rapportage meer na elk plaatsbezoek.",
    "workflow.card1.title": "Neem natuurlijk op",
    "workflow.card1.text": "De expert spreekt tijdens het bezoek, zonder de werkwijze op locatie te veranderen.",
    "workflow.card2.title": "Agentic verwerking",
    "workflow.card2.text": "Gespecialiseerde AI-stappen transcriberen, schonen op, organiseren, evalueren en herwerken het rapport.",
    "workflow.card3.title": "Klantklaar resultaat",
    "workflow.card3.text": "Het finale document volgt jullie verwachte structuur en kan voor verzending worden nagekeken.",
    "quality.eyebrow": "Kwaliteit",
    "quality.title": "Automatisering zonder kwaliteitsverlies.",
    "quality.text":
      "De workflow is geen gewone transcriptie. Transcriptie, redactie, beoordeling en herwerking zijn aparte stappen, zodat het gegenereerde rapport wordt gecontroleerd tegenover de originele opname.",
    "quality.proof1.title": "Traceerbare input",
    "quality.proof1.text": "Elke draft vertrekt van de echte opname van de expert.",
    "quality.proof2.title": "Gestructureerde controle",
    "quality.proof2.text": "Een evaluatiestap zoekt naar ontbrekende informatie, tegenstrijdigheden en zwakke onderdelen.",
    "quality.proof3.title": "Menselijke goedkeuring",
    "quality.proof3.text": "Jullie team behoudt de finale controle voordat het rapport naar de klant gaat.",
    "pilot.eyebrow": "Pilotaanbod",
    "pilot.title": "Stuur ons één opname en één voorbeeldtemplate.",
    "pilot.send.title": "Wat je stuurt",
    "pilot.send.item1": "Een audio-opname van een echt bezoek",
    "pilot.send.item2": "Een vorig rapport of documentsjabloon",
    "pilot.send.item3": "De opmaakregels die je klant verwacht",
    "pilot.back.title": "Wat je terugkrijgt",
    "pilot.back.text":
      "Een ingevuld voorbeelddocument in jullie structuur, klaar voor review, geleverd binnen 2 uur tijdens kantooruren.",
    "pilot.cta": "Stuur een voorbeeld",
    mailSubject: "Voice2Doc voorbeelddocument aanvragen",
    mailBody:
      "Hallo,\n\nWe willen Voice2Doc testen. We sturen:\n- Eén audio-opname\n- Eén voorbeeldtemplate of vorig rapport\n- Onze opmaakvereisten\n\nBedrijf:\nNaam:\nTelefoon:\n",
  },
};

function getPreferredLanguage() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LANGUAGES.includes(saved)) {
    return saved;
  }

  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const candidate of candidates) {
    const language = candidate.toLowerCase().split("-")[0];
    if (SUPPORTED_LANGUAGES.includes(language)) {
      return language;
    }
  }

  return "en";
}

function translate(lang) {
  const copy = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.title = copy.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((part) => part.trim());
      if (attr && key && copy[key]) {
        element.setAttribute(attr, copy[key]);
      }
    });
  });

  const mailLink = document.querySelector("#pilot-mail-link");
  if (mailLink) {
    const subject = encodeURIComponent(copy.mailSubject);
    const body = encodeURIComponent(copy.mailBody);
    mailLink.href = `mailto:contact@voice2doc.app?subject=${subject}&body=${body}`;
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, lang);
    translate(lang);
  });
});

translate(getPreferredLanguage());
