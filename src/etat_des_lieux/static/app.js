const SUPPORTED_LANGUAGES = ["en", "fr", "nl"];
const STORAGE_KEY = "voice2doc.language";

const translations = {
  en: {
    title: "Voice2Doc",
    "nav.workflow": "Workflow",
    "nav.review": "Niche-trained AI",
    "nav.pilot": "Pilot",
    "nav.faq": "FAQ",
    "hero.eyebrow": "For property inspection report teams",
    "hero.title": "From inspection audio to client-ready PDF",
    "hero.lead":
      "Voice2Doc uses AI trained on property inspection reports to turn expert recordings into final reports in your firm's own template.",
    "hero.primary": "Test one recording",
    "hero.secondary": "See how it works",
    "visual.aria": "Voice2Doc report workflow preview",
    "visual.step1": "MP3 recording",
    "visual.step2": "Niche-trained AI",
    "visual.step3": "Client-ready PDF",
    "visual.reportTitle": "Condition report",
    "visual.status": "Ready to send",
    "visual.room": "Kitchen",
    "visual.roomText": "Wall near sink: humidity trace and paint blistering.",
    "visual.room2": "Living room",
    "visual.room2Text": "Floor and skirting boards written with standard phrasing.",
    "visual.flag": "Resolved",
    "visual.check": "OK",
    "visual.export": "Export: final PDF",
    "pain.eyebrow": "The bottleneck",
    "pain.title": "Manual report production is the bottleneck",
    "pain.copy":
      "Experts record observations on-site. Someone later listens, restructures, formats, and writes the report. That slows delivery and creates avoidable correction work.",
    "pain.item1": "MP3 recordings manually converted into reports",
    "pain.item2": "Long turnaround between inspection and final document",
    "pain.item3": "Repetitive formatting and copy-paste work",
    "pain.item4": "Corrections caused by misunderstood audio",
    "pain.item5": "Difficulty scaling during busy periods",
    "solution.eyebrow": "Structured generation",
    "solution.title": "Built for inspection reports, not generic transcription",
    "solution.copy":
      "Voice2Doc is trained on real recordings and final reports from this niche, so it learns room structure, report phrasing, recurring clauses, and non-linear expert notes.",
    "solution.item1": "Room-by-room structure",
    "solution.item2": "Damage and condition extraction",
    "solution.item3": "Firm-specific phrasing and templates",
    "solution.item4": "Handles experts returning to earlier rooms",
    "solution.item5": "Final Word/PDF output",
    "solution.item6": "Ready to send to the client",
    "review.eyebrow": "Niche-trained AI",
    "review.title": "Trained for the messy reality of inspections",
    "review.copy":
      "Inspection recordings are rarely linear. Experts revisit rooms, add details later, use shortcuts, and mix observations with standard clauses. Voice2Doc is trained for that workflow.",
    "review.flag1.title": "Returned to previous room",
    "review.flag1.text": "New damage attached to the right section",
    "review.flag2.title": "Template-specific wording",
    "review.flag2.text": "Firm clauses applied automatically",
    "review.flag3.title": "Final document generated",
    "review.flag3.text": "PDF ready to send to the client",
    "review.item1": "Trained on niche-specific reports",
    "review.item2": "Understands room-by-room inspection logic",
    "review.item3": "Handles late additions and corrections in the audio",
    "review.item4": "Uses your own template and wording",
    "review.item5": "Produces the final client document",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "How it works",
    "workflow.step1": "Upload the MP3 recording",
    "workflow.step2": "Select the inspection type and template",
    "workflow.step3": "Voice2Doc applies niche-trained report logic",
    "workflow.step4": "Rooms, damages, clauses, and late additions are structured",
    "workflow.step5": "The report is generated in your format",
    "workflow.step6": "Receive the final Word/PDF document",
    "template.eyebrow": "Template adaptation",
    "template.title": "Your template, your wording, your final PDF",
    "template.copy":
      "Voice2Doc is adapted to your current template, phrasing, room order, and recurring clauses, then generates the document exactly in that delivery flow.",
    "template.item1": "Existing Word templates supported",
    "template.item2": "Firm-specific vocabulary",
    "template.item3": "French and Dutch workflows possible",
    "template.item4": "Reusable clauses and standard remarks",
    "template.item5": "Output designed for client delivery",
    "trust.eyebrow": "Reliability",
    "trust.title": "Designed for automatic report production",
    "trust.item1": "Niche-trained report generation",
    "trust.item2": "Firm-specific templates and clauses",
    "trust.item3": "Data retention controls",
    "trust.item4": "Private file storage",
    "trust.item5": "Access control by firm/user",
    "trust.item6": "Optional anonymized pilot",
    "trust.item7": "Source traceability when needed",
    "pilot.eyebrow": "Pilot",
    "pilot.title": "Test one recording against the final report",
    "pilot.copy":
      "Send one anonymized MP3 and the final PDF that was sent to the client. We reproduce the report in your format so you can compare the result directly.",
    "pilot.cta": "Test one recording",
    "pilot.cardTitle": "What the pilot shows",
    "pilot.item1": "No workflow change required",
    "pilot.item2": "Use a past recording",
    "pilot.item3": "Compare generated PDF against the sent report",
    "pilot.item4": "Measure time saved per report",
    "pilot.item5": "Decide whether a paid pilot makes sense",
    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions",
    "faq.q1": "Is this just transcription?",
    "faq.a1": "No. Voice2Doc is trained on inspection recordings and final reports, then generates the report in your own template.",
    "faq.q2": "Do we need to change our report template?",
    "faq.a2": "No. The system is adapted to your existing template.",
    "faq.q3": "What if the audio is unclear?",
    "faq.a3": "The system uses the full recording context, report structure, and your existing examples to place observations correctly.",
    "faq.q4": "Can it support French and Dutch?",
    "faq.a4": "The workflow is designed for multilingual Belgian inspection processes. Language support is configured during onboarding.",
    "faq.q5": "Can we test without sharing sensitive client data?",
    "faq.a5": "Yes. The first test can use an anonymized past recording and report.",
    "faq.q6": "What file do we receive?",
    "faq.a6": "You receive the final Word document and client-ready PDF.",
    "final.title": "See if Voice2Doc can reproduce your final report",
    "final.copy":
      "Send one anonymized recording and final PDF. We generate the same report flow in your format.",
    "final.cta": "Test one recording",
    mailSubject: "Voice2Doc anonymized inspection test",
    mailBody:
      "Hi,\n\nWe would like to test Voice2Doc with one anonymized inspection.\n\nWe can provide:\n- One MP3 inspection recording\n- The final PDF sent to the client\n- Our current Word template or formatting requirements\n\nCompany:\nName:\nPhone:\n",
  },
  fr: {
    title: "Voice2Doc",
    "nav.workflow": "Processus",
    "nav.review": "IA spécialisée",
    "nav.pilot": "Test",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Pour les équipes d'états des lieux",
    "hero.title": "De l'audio d'inspection au PDF prêt à envoyer",
    "hero.lead":
      "Voice2Doc utilise une IA entraînée sur des rapports d'inspection immobilière pour transformer les enregistrements d'experts en rapports finaux dans votre propre modèle.",
    "hero.primary": "Tester un enregistrement",
    "hero.secondary": "Voir le processus",
    "visual.aria": "Aperçu du processus Voice2Doc",
    "visual.step1": "Enregistrement MP3",
    "visual.step2": "IA spécialisée",
    "visual.step3": "PDF prêt client",
    "visual.reportTitle": "État des lieux",
    "visual.status": "Prêt à envoyer",
    "visual.room": "Cuisine",
    "visual.roomText": "Mur près de l'évier : trace d'humidité et peinture cloquée.",
    "visual.room2": "Séjour",
    "visual.room2Text": "Sol et plinthes rédigés avec la formulation standard.",
    "visual.flag": "Résolu",
    "visual.check": "OK",
    "visual.export": "Export : PDF final",
    "pain.eyebrow": "Le point de blocage",
    "pain.title": "La production manuelle des rapports bloque la livraison",
    "pain.copy":
      "L'expert enregistre ses observations sur place. Quelqu'un écoute ensuite, restructure, met en forme et rédige le rapport. Cela ralentit la livraison et crée des corrections évitables.",
    "pain.item1": "Enregistrements MP3 transformés manuellement en rapports",
    "pain.item2": "Délai long entre la visite et le document final",
    "pain.item3": "Mise en page et copier-coller répétitifs",
    "pain.item4": "Corrections dues à un audio mal compris",
    "pain.item5": "Difficulté à absorber les périodes chargées",
    "solution.eyebrow": "Génération structurée",
    "solution.title": "Conçu pour les états des lieux, pas pour la transcription générique",
    "solution.copy":
      "Voice2Doc est entraîné sur de vrais enregistrements et rapports finaux de cette niche. Il apprend la structure des pièces, les formulations, les clauses récurrentes et les notes d'expert non linéaires.",
    "solution.item1": "Structure pièce par pièce",
    "solution.item2": "Extraction des dégâts et états",
    "solution.item3": "Formulations et modèles propres au bureau",
    "solution.item4": "Gère les retours vers des pièces précédentes",
    "solution.item5": "Sortie finale Word/PDF",
    "solution.item6": "Prêt à envoyer au client",
    "review.eyebrow": "IA spécialisée",
    "review.title": "Entraîné pour la réalité des inspections",
    "review.copy":
      "Les enregistrements d'inspection sont rarement linéaires. L'expert revient sur une pièce, ajoute un détail plus tard, utilise des raccourcis et mélange observations et clauses standards. Voice2Doc est entraîné pour ce flux.",
    "review.flag1.title": "Retour à une pièce précédente",
    "review.flag1.text": "Le dégât est replacé dans la bonne section",
    "review.flag2.title": "Formulation propre au modèle",
    "review.flag2.text": "Clauses du bureau appliquées automatiquement",
    "review.flag3.title": "Document final généré",
    "review.flag3.text": "PDF prêt à envoyer au client",
    "review.item1": "Entraîné sur des rapports de cette niche",
    "review.item2": "Comprend la logique pièce par pièce",
    "review.item3": "Gère les ajouts tardifs et corrections dans l'audio",
    "review.item4": "Utilise votre modèle et votre vocabulaire",
    "review.item5": "Produit le document client final",
    "workflow.eyebrow": "Processus",
    "workflow.title": "Comment ça fonctionne",
    "workflow.step1": "Envoyez l'enregistrement MP3",
    "workflow.step2": "Sélectionnez le type d'inspection et le modèle",
    "workflow.step3": "Voice2Doc applique une logique de rapport spécialisée",
    "workflow.step4": "Pièces, dégâts, clauses et ajouts tardifs sont structurés",
    "workflow.step5": "Le rapport est généré dans votre format",
    "workflow.step6": "Recevez le document final en Word/PDF",
    "template.eyebrow": "Adaptation au modèle",
    "template.title": "Votre modèle, vos formulations, votre PDF final",
    "template.copy":
      "Voice2Doc s'adapte à votre modèle, vos formulations, l'ordre des pièces et vos clauses récurrentes, puis génère le document dans ce flux de livraison.",
    "template.item1": "Modèles Word existants pris en charge",
    "template.item2": "Vocabulaire propre au bureau",
    "template.item3": "Processus en français et néerlandais possibles",
    "template.item4": "Clauses et remarques standards réutilisables",
    "template.item5": "Sortie pensée pour l'envoi au client",
    "trust.eyebrow": "Fiabilité",
    "trust.title": "Conçu pour produire les rapports automatiquement",
    "trust.item1": "Génération entraînée sur cette niche",
    "trust.item2": "Modèles et clauses propres au bureau",
    "trust.item3": "Contrôle de rétention des données",
    "trust.item4": "Stockage privé des fichiers",
    "trust.item5": "Accès par bureau/utilisateur",
    "trust.item6": "Test anonymisé possible",
    "trust.item7": "Traçabilité source si nécessaire",
    "pilot.eyebrow": "Test",
    "pilot.title": "Testez un audio face au rapport final",
    "pilot.copy":
      "Envoyez un MP3 anonymisé et le PDF final envoyé au client. Nous reproduisons le rapport dans votre format pour comparer directement le résultat.",
    "pilot.cta": "Tester un enregistrement",
    "pilot.cardTitle": "Ce que le test montre",
    "pilot.item1": "Aucun changement de processus",
    "pilot.item2": "Utilisation d'un ancien enregistrement",
    "pilot.item3": "Comparaison du PDF généré avec le rapport envoyé",
    "pilot.item4": "Mesure du temps gagné par rapport",
    "pilot.item5": "Décision claire sur un pilote payant",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.q1": "Est-ce seulement de la transcription ?",
    "faq.a1": "Non. Voice2Doc est entraîné sur des enregistrements d'inspection et des rapports finaux, puis génère le rapport dans votre propre modèle.",
    "faq.q2": "Devons-nous changer notre modèle de rapport ?",
    "faq.a2": "Non. Le système est adapté à votre modèle existant.",
    "faq.q3": "Que se passe-t-il si l'audio est peu clair ?",
    "faq.a3": "Le système utilise le contexte complet de l'enregistrement, la structure du rapport et vos exemples existants pour placer les observations correctement.",
    "faq.q4": "Le français et le néerlandais sont-ils supportés ?",
    "faq.a4": "Le processus est prévu pour les inspections multilingues en Belgique. Le support linguistique est configuré lors de l'onboarding.",
    "faq.q5": "Peut-on tester sans partager de données sensibles ?",
    "faq.a5": "Oui. Le premier test peut se faire avec un ancien enregistrement et rapport anonymisés.",
    "faq.q6": "Quel fichier recevons-nous ?",
    "faq.a6": "Vous recevez le document Word final et le PDF prêt à envoyer au client.",
    "final.title": "Voyez si Voice2Doc peut reproduire votre rapport final",
    "final.copy":
      "Envoyez un enregistrement anonymisé et un PDF final. Nous générons le même flux de rapport dans votre format.",
    "final.cta": "Tester un enregistrement",
    mailSubject: "Test Voice2Doc sur inspection anonymisée",
    mailBody:
      "Bonjour,\n\nNous souhaitons tester Voice2Doc avec une inspection anonymisée.\n\nNous pouvons fournir :\n- Un enregistrement MP3 d'inspection\n- Le PDF final envoyé au client\n- Notre modèle Word ou nos consignes de mise en forme\n\nSociété :\nNom :\nTéléphone :\n",
  },
  nl: {
    title: "Voice2Doc",
    "nav.workflow": "Workflow",
    "nav.review": "Niche-AI",
    "nav.pilot": "Pilot",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Voor teams die plaatsbeschrijvingen maken",
    "hero.title": "Van inspectie-audio naar klantklare PDF",
    "hero.lead":
      "Voice2Doc gebruikt AI die getraind is op plaatsbeschrijvingen en inspectieverslagen om expertopnames om te zetten naar eindrapporten in jullie eigen template.",
    "hero.primary": "Test een opname",
    "hero.secondary": "Bekijk de workflow",
    "visual.aria": "Voorbeeld van de Voice2Doc workflow",
    "visual.step1": "MP3-opname",
    "visual.step2": "Getrainde niche-AI",
    "visual.step3": "Klantklare PDF",
    "visual.reportTitle": "Plaatsbeschrijving",
    "visual.status": "Klaar om te verzenden",
    "visual.room": "Keuken",
    "visual.roomText": "Muur naast spoelbak: vochtspoor en bladderende verf.",
    "visual.room2": "Woonkamer",
    "visual.room2Text": "Vloer en plinten geschreven met standaardformulering.",
    "visual.flag": "Verwerkt",
    "visual.check": "OK",
    "visual.export": "Export: finale PDF",
    "pain.eyebrow": "De flessenhals",
    "pain.title": "Manuele rapportproductie vertraagt de levering",
    "pain.copy":
      "De expert neemt observaties ter plaatse op. Iemand luistert nadien, structureert, maakt op en schrijft het rapport. Dat vertraagt levering en zorgt voor vermijdbare correcties.",
    "pain.item1": "MP3-opnames manueel omgezet naar rapporten",
    "pain.item2": "Lange doorlooptijd tussen inspectie en einddocument",
    "pain.item3": "Herhaalde opmaak en copy-pastewerk",
    "pain.item4": "Correcties door verkeerd begrepen audio",
    "pain.item5": "Moeilijk opschalen tijdens drukke periodes",
    "solution.eyebrow": "Gestructureerde generatie",
    "solution.title": "Gebouwd voor inspectieverslagen, niet voor generieke transcriptie",
    "solution.copy":
      "Voice2Doc is getraind op echte opnames en eindrapporten uit deze niche. Het leert kamerstructuur, rapportformuleringen, terugkerende clausules en niet-lineaire expertnotities.",
    "solution.item1": "Structuur kamer per kamer",
    "solution.item2": "Extractie van schade en staat",
    "solution.item3": "Kantoorspecifieke formuleringen en templates",
    "solution.item4": "Herkent wanneer experts teruggaan naar eerdere ruimtes",
    "solution.item5": "Finale Word/PDF-output",
    "solution.item6": "Klaar om naar de klant te sturen",
    "review.eyebrow": "Getrainde niche-AI",
    "review.title": "Getraind voor de echte inspectiepraktijk",
    "review.copy":
      "Inspectie-opnames zijn zelden lineair. Experts keren terug naar ruimtes, voegen later details toe, gebruiken afkortingen en mengen observaties met standaardclausules. Voice2Doc is getraind voor die workflow.",
    "review.flag1.title": "Terug naar vorige ruimte",
    "review.flag1.text": "Nieuwe schade komt in de juiste sectie",
    "review.flag2.title": "Template-eigen formulering",
    "review.flag2.text": "Kantoorclausules automatisch toegepast",
    "review.flag3.title": "Einddocument gegenereerd",
    "review.flag3.text": "PDF klaar om naar de klant te sturen",
    "review.item1": "Getraind op niche-specifieke rapporten",
    "review.item2": "Begrijpt kamer-per-kamer inspectielogica",
    "review.item3": "Verwerkt late aanvullingen en correcties in de audio",
    "review.item4": "Gebruikt jullie eigen template en woordgebruik",
    "review.item5": "Produceert het finale klantdocument",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "Hoe het werkt",
    "workflow.step1": "Upload de MP3-opname",
    "workflow.step2": "Selecteer inspectietype en template",
    "workflow.step3": "Voice2Doc past getrainde rapportlogica toe",
    "workflow.step4": "Ruimtes, schade, clausules en late aanvullingen worden gestructureerd",
    "workflow.step5": "Het rapport wordt gegenereerd in jullie format",
    "workflow.step6": "Ontvang het finale Word/PDF-document",
    "template.eyebrow": "Template-aanpassing",
    "template.title": "Jullie template, jullie woorden, jullie finale PDF",
    "template.copy":
      "Voice2Doc wordt aangepast aan jullie template, formuleringen, kamervolgorde en terugkerende clausules, en genereert daarna het document in die leveringsflow.",
    "template.item1": "Bestaande Word-templates ondersteund",
    "template.item2": "Kantoorspecifieke woordenschat",
    "template.item3": "Franse en Nederlandse workflows mogelijk",
    "template.item4": "Herbruikbare clausules en standaardopmerkingen",
    "template.item5": "Output afgestemd op klantlevering",
    "trust.eyebrow": "Betrouwbaarheid",
    "trust.title": "Ontworpen voor automatische rapportproductie",
    "trust.item1": "Rapportgeneratie getraind op deze niche",
    "trust.item2": "Kantoorspecifieke templates en clausules",
    "trust.item3": "Controle over databewaring",
    "trust.item4": "Private bestandsopslag",
    "trust.item5": "Toegang per kantoor/gebruiker",
    "trust.item6": "Geanonimiseerde pilot mogelijk",
    "trust.item7": "Brontraceerbaarheid indien nodig",
    "pilot.eyebrow": "Pilot",
    "pilot.title": "Test een opname tegenover het eindrapport",
    "pilot.copy":
      "Stuur een geanonimiseerde MP3 en de finale PDF die naar de klant werd gestuurd. We reproduceren het rapport in jullie format zodat jullie het resultaat direct kunnen vergelijken.",
    "pilot.cta": "Test een opname",
    "pilot.cardTitle": "Wat de pilot toont",
    "pilot.item1": "Geen workflowwijziging nodig",
    "pilot.item2": "Gebruik een oude opname",
    "pilot.item3": "Vergelijk gegenereerde PDF met het verzonden rapport",
    "pilot.item4": "Meet tijdswinst per rapport",
    "pilot.item5": "Beslis of een betaalde pilot zinvol is",
    "faq.eyebrow": "FAQ",
    "faq.title": "Veelgestelde vragen",
    "faq.q1": "Is dit gewoon transcriptie?",
    "faq.a1": "Nee. Voice2Doc is getraind op inspectie-opnames en eindrapporten, en genereert daarna het rapport in jullie eigen template.",
    "faq.q2": "Moeten we onze rapporttemplate wijzigen?",
    "faq.a2": "Nee. Het systeem wordt aangepast aan jullie bestaande template.",
    "faq.q3": "Wat als de audio onduidelijk is?",
    "faq.a3": "Het systeem gebruikt de volledige opnamecontext, rapportstructuur en jullie bestaande voorbeelden om observaties correct te plaatsen.",
    "faq.q4": "Ondersteunt het Frans en Nederlands?",
    "faq.a4": "De workflow is ontworpen voor meertalige Belgische inspectieprocessen. Taalondersteuning wordt ingesteld tijdens onboarding.",
    "faq.q5": "Kunnen we testen zonder gevoelige klantdata te delen?",
    "faq.a5": "Ja. De eerste test kan met een oude geanonimiseerde opname en rapport.",
    "faq.q6": "Welk bestand ontvangen we?",
    "faq.a6": "Jullie ontvangen het finale Word-document en de klantklare PDF.",
    "final.title": "Bekijk of Voice2Doc jullie eindrapport kan reproduceren",
    "final.copy":
      "Stuur een geanonimiseerde opname en finale PDF. We genereren dezelfde rapportflow in jullie format.",
    "final.cta": "Test een opname",
    mailSubject: "Voice2Doc test met geanonimiseerde inspectie",
    mailBody:
      "Dag,\n\nWe willen Voice2Doc testen met een geanonimiseerde inspectie.\n\nWe kunnen bezorgen:\n- Een MP3-opname van een inspectie\n- De finale PDF die naar de klant werd gestuurd\n- Onze huidige Word-template of opmaakvereisten\n\nBedrijf:\nNaam:\nTelefoon:\n",
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
    mailLink.href = `mailto:dimitri@voice2doc.app?subject=${subject}&body=${body}`;
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
