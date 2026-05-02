const SUPPORTED_LANGUAGES = ["en", "fr", "nl"];
const STORAGE_KEY = "voice2doc.language";

const translations = {
  en: {
    title: "ConstatFlow",
    "nav.workflow": "Workflow",
    "nav.review": "Review",
    "nav.pilot": "Pilot",
    "nav.faq": "FAQ",
    "hero.eyebrow": "For property inspection report teams",
    "hero.title": "Generate états des lieux reports from inspection recordings",
    "hero.lead":
      "Upload an expert's MP3 recording and receive a structured draft report in your firm's own template, with uncertain items highlighted for review.",
    "hero.primary": "Test with one anonymized inspection",
    "hero.secondary": "See how it works",
    "visual.aria": "ConstatFlow report workflow preview",
    "visual.step1": "MP3 recording",
    "visual.step2": "AI extraction",
    "visual.step3": "Report template",
    "visual.reportTitle": "État des lieux - draft",
    "visual.status": "4 items flagged",
    "visual.room": "Kitchen",
    "visual.roomText": "Wall near sink: humidity trace, paint blistering, verify extent.",
    "visual.room2": "Living room",
    "visual.room2Text": "Floor and skirting boards documented with standard phrasing.",
    "visual.flag": "Review",
    "visual.check": "OK",
    "visual.export": "Export: Word / PDF",
    "pain.eyebrow": "The bottleneck",
    "pain.title": "Report production should not depend on manual retyping",
    "pain.copy":
      "Many firms still produce états des lieux by recording observations on-site, then sending the audio to an internal admin team, freelancer, or offshore provider to create the final report. This creates delays, corrections, inconsistent wording, and dependency on external availability.",
    "pain.item1": "MP3 recordings manually converted into reports",
    "pain.item2": "Long turnaround between inspection and final document",
    "pain.item3": "Repetitive formatting and copy-paste work",
    "pain.item4": "Corrections caused by misunderstood audio",
    "pain.item5": "Difficulty scaling during busy periods",
    "solution.eyebrow": "Structured generation",
    "solution.title": "Turn recordings into structured reports automatically",
    "solution.copy":
      "ConstatFlow transcribes the inspection recording, detects rooms and observations, extracts damages and remarks, and generates a report in your existing Word template.",
    "solution.item1": "Room-by-room structure",
    "solution.item2": "Damage and condition extraction",
    "solution.item3": "Firm-specific phrasing and templates",
    "solution.item4": "Editable Word/PDF export",
    "solution.item5": "Source traceability to transcript/audio",
    "solution.item6": "Human validation before final delivery",
    "review.eyebrow": "Exception-based review",
    "review.title": "Review the exceptions, not the whole report",
    "review.copy":
      "The goal is not to force your team to reread every line. ConstatFlow highlights uncertain or risky items, such as unclear audio, ambiguous damage descriptions, missing information, low-confidence sections, or unusual observations.",
    "review.flag1.title": "Unclear damage description",
    "review.flag1.text": "Jump to transcript/audio at 12:48",
    "review.flag2.title": "Missing required field",
    "review.flag2.text": "Ceiling condition not confirmed",
    "review.flag3.title": "Standard clause approved",
    "review.flag3.text": "Reusable wording applied from your template",
    "review.item1": "Low-confidence passages flagged automatically",
    "review.item2": "Unclear damages marked for verification",
    "review.item3": "Missing required fields highlighted",
    "review.item4": "Each flagged item links back to the source transcript/audio",
    "review.item5": "Reviewed items can be approved quickly",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "How it works",
    "workflow.step1": "Upload the MP3 recording",
    "workflow.step2": "Select the inspection type and template",
    "workflow.step3": "ConstatFlow extracts rooms, components, damages, and remarks",
    "workflow.step4": "The report is generated in your format",
    "workflow.step5": "Only uncertain items are flagged for review",
    "workflow.step6": "Export the final report to Word or PDF",
    "template.eyebrow": "Template adaptation",
    "template.title": "Keep your existing report format",
    "template.copy":
      "ConstatFlow is adapted to your current report template, phrasing, room order, and recurring clauses. Your experts do not need to change the way reports are delivered.",
    "template.item1": "Existing Word templates supported",
    "template.item2": "Firm-specific vocabulary",
    "template.item3": "French and Dutch workflows possible",
    "template.item4": "Reusable clauses and standard remarks",
    "template.item5": "Output designed for your current review process",
    "trust.eyebrow": "Control",
    "trust.title": "Designed for professional inspection workflows",
    "trust.item1": "Human review before final delivery",
    "trust.item2": "No automatic final legal conclusions",
    "trust.item3": "Data retention controls",
    "trust.item4": "Private file storage",
    "trust.item5": "Access control by firm/user",
    "trust.item6": "Optional anonymized pilot",
    "trust.item7": "Source traceability for audit and correction",
    "pilot.eyebrow": "Pilot",
    "pilot.title": "Test it on one real anonymized inspection",
    "pilot.copy":
      "Send one anonymized MP3 recording and the final report that was produced from it. We generate a comparison draft in your format so you can evaluate time saved, correction effort, and report quality.",
    "pilot.cta": "Test one anonymized inspection",
    "pilot.cardTitle": "What the pilot shows",
    "pilot.item1": "No workflow change required",
    "pilot.item2": "Use a past recording",
    "pilot.item3": "Compare AI draft against final report",
    "pilot.item4": "Identify time saved per report",
    "pilot.item5": "Decide whether a paid pilot makes sense",
    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions",
    "faq.q1": "Does this fully replace human review?",
    "faq.a1": "No. ConstatFlow generates a structured draft and highlights uncertain items. A human reviewer validates the final report.",
    "faq.q2": "Do we need to change our report template?",
    "faq.a2": "No. The system is adapted to your existing template.",
    "faq.q3": "What if the audio is unclear?",
    "faq.a3": "Unclear passages are flagged. The reviewer can jump back to the relevant transcript or audio section.",
    "faq.q4": "Can it support French and Dutch?",
    "faq.a4": "The workflow is designed for multilingual Belgian inspection processes. Language support is configured during onboarding.",
    "faq.q5": "Can we test without sharing sensitive client data?",
    "faq.a5": "Yes. The first test can use an anonymized past recording and report.",
    "faq.q6": "What file do we receive?",
    "faq.a6": "The final output can be exported as an editable Word document and, if needed, as PDF.",
    "final.title": "See how much report production time you can save",
    "final.copy":
      "Test ConstatFlow with one anonymized inspection recording and compare the generated draft with your current process.",
    "final.cta": "Test one anonymized inspection",
    mailSubject: "ConstatFlow anonymized inspection test",
    mailBody:
      "Hi,\n\nWe would like to test ConstatFlow with one anonymized inspection.\n\nWe can provide:\n- One MP3 inspection recording\n- The final report produced from it\n- Our current Word template or formatting requirements\n\nCompany:\nName:\nPhone:\n",
  },
  fr: {
    title: "ConstatFlow",
    "nav.workflow": "Processus",
    "nav.review": "Revue",
    "nav.pilot": "Test",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Pour les équipes d'états des lieux",
    "hero.title": "Générez vos états des lieux à partir d'enregistrements d'inspection",
    "hero.lead":
      "Envoyez l'enregistrement MP3 d'un expert et recevez un brouillon structuré dans votre propre modèle, avec les points incertains signalés pour relecture.",
    "hero.primary": "Tester avec une inspection anonymisée",
    "hero.secondary": "Voir le processus",
    "visual.aria": "Aperçu du processus ConstatFlow",
    "visual.step1": "Enregistrement MP3",
    "visual.step2": "Extraction IA",
    "visual.step3": "Modèle de rapport",
    "visual.reportTitle": "État des lieux - brouillon",
    "visual.status": "4 points signalés",
    "visual.room": "Cuisine",
    "visual.roomText": "Mur près de l'evier : trace d'humidité, peinture cloquée, étendue à vérifier.",
    "visual.room2": "Séjour",
    "visual.room2Text": "Sol et plinthes documentés avec la formulation standard.",
    "visual.flag": "À revoir",
    "visual.check": "OK",
    "visual.export": "Export : Word / PDF",
    "pain.eyebrow": "Le point de blocage",
    "pain.title": "La production des rapports ne devrait pas dépendre de la retranscription manuelle",
    "pain.copy":
      "Beaucoup de bureaux produisent encore les états des lieux en enregistrant les observations sur place, puis en confiant l'audio à une équipe interne, un freelance ou un prestataire externe. Résultat : délais, corrections, formulations variables et dépendance à la disponibilité de tiers.",
    "pain.item1": "Enregistrements MP3 transformés manuellement en rapports",
    "pain.item2": "Délai long entre la visite et le document final",
    "pain.item3": "Mise en page et copier-coller répétitifs",
    "pain.item4": "Corrections dues à un audio mal compris",
    "pain.item5": "Difficulté à absorber les périodes chargées",
    "solution.eyebrow": "Génération structurée",
    "solution.title": "Transformez les enregistrements en rapports structurés",
    "solution.copy":
      "ConstatFlow transcrit l'enregistrement, détecte les pièces et observations, extrait les dégâts et remarques, puis génère un rapport dans votre modèle Word existant.",
    "solution.item1": "Structure pièce par pièce",
    "solution.item2": "Extraction des dégâts et états",
    "solution.item3": "Formulations et modèles propres au bureau",
    "solution.item4": "Export Word/PDF modifiable",
    "solution.item5": "Traçabilité vers transcript/audio",
    "solution.item6": "Validation humaine avant livraison",
    "review.eyebrow": "Revue par exception",
    "review.title": "Relisez les exceptions, pas tout le rapport",
    "review.copy":
      "L'objectif n'est pas d'obliger votre équipe à relire chaque ligne. ConstatFlow met en évidence les points incertains ou à risque : audio peu clair, description ambiguë d'un dégât, information manquante, section à faible confiance ou observation inhabituelle.",
    "review.flag1.title": "Description de dégât incertaine",
    "review.flag1.text": "Retour au transcript/audio à 12:48",
    "review.flag2.title": "Champ obligatoire manquant",
    "review.flag2.text": "État du plafond non confirmé",
    "review.flag3.title": "Clause standard approuvée",
    "review.flag3.text": "Formulation réutilisée depuis votre modèle",
    "review.item1": "Passages à faible confiance signalés automatiquement",
    "review.item2": "Dégâts peu clairs marqués pour vérification",
    "review.item3": "Champs obligatoires manquants mis en évidence",
    "review.item4": "Chaque point renvoie au transcript/audio source",
    "review.item5": "Les points relus peuvent être approuvés rapidement",
    "workflow.eyebrow": "Processus",
    "workflow.title": "Comment ça fonctionne",
    "workflow.step1": "Envoyez l'enregistrement MP3",
    "workflow.step2": "Sélectionnez le type d'inspection et le modèle",
    "workflow.step3": "ConstatFlow extrait pièces, éléments, dégâts et remarques",
    "workflow.step4": "Le rapport est généré dans votre format",
    "workflow.step5": "Seuls les points incertains sont signalés",
    "workflow.step6": "Exportez le rapport final en Word ou PDF",
    "template.eyebrow": "Adaptation au modèle",
    "template.title": "Gardez votre format de rapport actuel",
    "template.copy":
      "ConstatFlow s'adapte à votre modèle, vos formulations, l'ordre des pièces et vos clauses récurrentes. Vos experts ne changent pas la façon dont les rapports sont livrés.",
    "template.item1": "Modèles Word existants pris en charge",
    "template.item2": "Vocabulaire propre au bureau",
    "template.item3": "Processus en français et néerlandais possibles",
    "template.item4": "Clauses et remarques standards réutilisables",
    "template.item5": "Sortie pensée pour votre relecture actuelle",
    "trust.eyebrow": "Contrôle",
    "trust.title": "Conçu pour les processus professionnels d'inspection",
    "trust.item1": "Relecture humaine avant livraison",
    "trust.item2": "Pas de conclusions juridiques finales automatiques",
    "trust.item3": "Contrôle de rétention des données",
    "trust.item4": "Stockage privé des fichiers",
    "trust.item5": "Accès par bureau/utilisateur",
    "trust.item6": "Test anonymisé possible",
    "trust.item7": "Traçabilité pour audit et correction",
    "pilot.eyebrow": "Test",
    "pilot.title": "Testez sur une vraie inspection anonymisée",
    "pilot.copy":
      "Envoyez un MP3 anonymisé et le rapport final qui en a été tiré. Nous générons un brouillon comparatif dans votre format pour évaluer le gain de temps, l'effort de correction et la qualité.",
    "pilot.cta": "Tester une inspection anonymisée",
    "pilot.cardTitle": "Ce que le test montre",
    "pilot.item1": "Aucun changement de processus",
    "pilot.item2": "Utilisation d'un ancien enregistrement",
    "pilot.item3": "Comparaison du brouillon avec le rapport final",
    "pilot.item4": "Temps économisé par rapport identifié",
    "pilot.item5": "Décision claire sur un pilote payant",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.q1": "Est-ce que cela remplace entièrement la relecture humaine ?",
    "faq.a1": "Non. ConstatFlow génère un brouillon structuré et signale les points incertains. Un relecteur humain valide le rapport final.",
    "faq.q2": "Devons-nous changer notre modèle de rapport ?",
    "faq.a2": "Non. Le système est adapté à votre modèle existant.",
    "faq.q3": "Que se passe-t-il si l'audio est peu clair ?",
    "faq.a3": "Les passages peu clairs sont signalés. Le relecteur peut revenir au transcript ou au segment audio concerné.",
    "faq.q4": "Le français et le néerlandais sont-ils supportés ?",
    "faq.a4": "Le processus est prévu pour les inspections multilingues en Belgique. Le support linguistique est configuré lors de l'onboarding.",
    "faq.q5": "Peut-on tester sans partager de données sensibles ?",
    "faq.a5": "Oui. Le premier test peut se faire avec un ancien enregistrement et rapport anonymisés.",
    "faq.q6": "Quel fichier recevons-nous ?",
    "faq.a6": "La sortie finale peut être exportée en document Word modifiable et, si nécessaire, en PDF.",
    "final.title": "Mesurez le temps que vous pouvez économiser sur vos rapports",
    "final.copy":
      "Testez ConstatFlow avec un enregistrement anonymisé et comparez le brouillon généré à votre processus actuel.",
    "final.cta": "Tester une inspection anonymisée",
    mailSubject: "Test ConstatFlow sur inspection anonymisée",
    mailBody:
      "Bonjour,\n\nNous souhaitons tester ConstatFlow avec une inspection anonymisée.\n\nNous pouvons fournir :\n- Un enregistrement MP3 d'inspection\n- Le rapport final produit à partir de cet audio\n- Notre modèle Word ou nos consignes de mise en forme\n\nSociété :\nNom :\nTéléphone :\n",
  },
  nl: {
    title: "ConstatFlow",
    "nav.workflow": "Workflow",
    "nav.review": "Review",
    "nav.pilot": "Pilot",
    "nav.faq": "FAQ",
    "hero.eyebrow": "Voor teams die plaatsbeschrijvingen maken",
    "hero.title": "Genereer plaatsbeschrijvingen op basis van inspectie-opnames",
    "hero.lead":
      "Upload de MP3-opname van een expert en ontvang een gestructureerde draft in jullie eigen template, met onzekere punten gemarkeerd voor controle.",
    "hero.primary": "Test met een geanonimiseerde inspectie",
    "hero.secondary": "Bekijk de workflow",
    "visual.aria": "Voorbeeld van de ConstatFlow workflow",
    "visual.step1": "MP3-opname",
    "visual.step2": "AI-extractie",
    "visual.step3": "Rapporttemplate",
    "visual.reportTitle": "Plaatsbeschrijving - draft",
    "visual.status": "4 punten gemarkeerd",
    "visual.room": "Keuken",
    "visual.roomText": "Muur naast spoelbak: vochtspoor, bladderende verf, omvang controleren.",
    "visual.room2": "Woonkamer",
    "visual.room2Text": "Vloer en plinten beschreven met standaardformulering.",
    "visual.flag": "Controle",
    "visual.check": "OK",
    "visual.export": "Export: Word / PDF",
    "pain.eyebrow": "De flessenhals",
    "pain.title": "Rapportproductie hoort niet af te hangen van manueel overtypen",
    "pain.copy":
      "Veel kantoren maken plaatsbeschrijvingen nog steeds door observaties ter plaatse op te nemen en de audio daarna door te sturen naar een intern team, freelancer of externe partner. Dat zorgt voor vertraging, correcties, wisselende formuleringen en afhankelijkheid van beschikbaarheid.",
    "pain.item1": "MP3-opnames manueel omgezet naar rapporten",
    "pain.item2": "Lange doorlooptijd tussen inspectie en einddocument",
    "pain.item3": "Herhaalde opmaak en copy-pastewerk",
    "pain.item4": "Correcties door verkeerd begrepen audio",
    "pain.item5": "Moeilijk opschalen tijdens drukke periodes",
    "solution.eyebrow": "Gestructureerde generatie",
    "solution.title": "Zet opnames om in gestructureerde rapporten",
    "solution.copy":
      "ConstatFlow transcribeert de inspectie-opname, detecteert kamers en observaties, haalt schade en opmerkingen op, en genereert een rapport in jullie bestaande Word-template.",
    "solution.item1": "Structuur kamer per kamer",
    "solution.item2": "Extractie van schade en staat",
    "solution.item3": "Kantoorspecifieke formuleringen en templates",
    "solution.item4": "Bewerkbare Word/PDF-export",
    "solution.item5": "Traceerbaarheid naar transcript/audio",
    "solution.item6": "Menselijke validatie voor levering",
    "review.eyebrow": "Review op uitzonderingen",
    "review.title": "Controleer de uitzonderingen, niet het volledige rapport",
    "review.copy":
      "Het doel is niet dat jullie team elke regel opnieuw moet lezen. ConstatFlow markeert onzekere of risicovolle punten, zoals onduidelijke audio, ambigue schadebeschrijvingen, ontbrekende informatie, lage betrouwbaarheid of ongewone observaties.",
    "review.flag1.title": "Onduidelijke schadebeschrijving",
    "review.flag1.text": "Spring naar transcript/audio op 12:48",
    "review.flag2.title": "Verplicht veld ontbreekt",
    "review.flag2.text": "Staat van plafond niet bevestigd",
    "review.flag3.title": "Standaardclausule goedgekeurd",
    "review.flag3.text": "Formulering hergebruikt uit jullie template",
    "review.item1": "Passages met lage zekerheid automatisch gemarkeerd",
    "review.item2": "Onduidelijke schade aangeduid voor controle",
    "review.item3": "Ontbrekende verplichte velden gemarkeerd",
    "review.item4": "Elk punt linkt terug naar transcript/audio",
    "review.item5": "Gecontroleerde punten snel goed te keuren",
    "workflow.eyebrow": "Workflow",
    "workflow.title": "Hoe het werkt",
    "workflow.step1": "Upload de MP3-opname",
    "workflow.step2": "Selecteer inspectietype en template",
    "workflow.step3": "ConstatFlow haalt kamers, onderdelen, schade en opmerkingen op",
    "workflow.step4": "Het rapport wordt gegenereerd in jullie format",
    "workflow.step5": "Alleen onzekere punten worden gemarkeerd",
    "workflow.step6": "Exporteer het eindrapport naar Word of PDF",
    "template.eyebrow": "Template-aanpassing",
    "template.title": "Behoud jullie bestaande rapportformat",
    "template.copy":
      "ConstatFlow wordt aangepast aan jullie huidige template, formuleringen, kamervolgorde en terugkerende clausules. Experts hoeven de manier van rapporteren niet te veranderen.",
    "template.item1": "Bestaande Word-templates ondersteund",
    "template.item2": "Kantoorspecifieke woordenschat",
    "template.item3": "Franse en Nederlandse workflows mogelijk",
    "template.item4": "Herbruikbare clausules en standaardopmerkingen",
    "template.item5": "Output afgestemd op jullie reviewproces",
    "trust.eyebrow": "Controle",
    "trust.title": "Ontworpen voor professionele inspectieworkflows",
    "trust.item1": "Menselijke review voor finale levering",
    "trust.item2": "Geen automatische finale juridische conclusies",
    "trust.item3": "Controle over databewaring",
    "trust.item4": "Private bestandsopslag",
    "trust.item5": "Toegang per kantoor/gebruiker",
    "trust.item6": "Geanonimiseerde pilot mogelijk",
    "trust.item7": "Traceerbaarheid voor audit en correctie",
    "pilot.eyebrow": "Pilot",
    "pilot.title": "Test op een echte geanonimiseerde inspectie",
    "pilot.copy":
      "Stuur een geanonimiseerde MP3-opname en het eindrapport dat daaruit werd gemaakt. We genereren een vergelijkende draft in jullie format, zodat jullie tijdswinst, correctiewerk en kwaliteit kunnen evalueren.",
    "pilot.cta": "Test een geanonimiseerde inspectie",
    "pilot.cardTitle": "Wat de pilot toont",
    "pilot.item1": "Geen workflowwijziging nodig",
    "pilot.item2": "Gebruik een oude opname",
    "pilot.item3": "Vergelijk AI-draft met eindrapport",
    "pilot.item4": "Bepaal tijdswinst per rapport",
    "pilot.item5": "Beslis of een betaalde pilot zinvol is",
    "faq.eyebrow": "FAQ",
    "faq.title": "Veelgestelde vragen",
    "faq.q1": "Vervangt dit menselijke review volledig?",
    "faq.a1": "Nee. ConstatFlow genereert een gestructureerde draft en markeert onzekere punten. Een menselijke reviewer valideert het eindrapport.",
    "faq.q2": "Moeten we onze rapporttemplate wijzigen?",
    "faq.a2": "Nee. Het systeem wordt aangepast aan jullie bestaande template.",
    "faq.q3": "Wat als de audio onduidelijk is?",
    "faq.a3": "Onduidelijke passages worden gemarkeerd. De reviewer kan teruggaan naar het relevante transcript of audiofragment.",
    "faq.q4": "Ondersteunt het Frans en Nederlands?",
    "faq.a4": "De workflow is ontworpen voor meertalige Belgische inspectieprocessen. Taalondersteuning wordt ingesteld tijdens onboarding.",
    "faq.q5": "Kunnen we testen zonder gevoelige klantdata te delen?",
    "faq.a5": "Ja. De eerste test kan met een oude geanonimiseerde opname en rapport.",
    "faq.q6": "Welk bestand ontvangen we?",
    "faq.a6": "De finale output kan worden geëxporteerd als bewerkbaar Word-document en indien nodig als PDF.",
    "final.title": "Bekijk hoeveel tijd jullie kunnen besparen op rapportproductie",
    "final.copy":
      "Test ConstatFlow met een geanonimiseerde inspectie-opname en vergelijk de gegenereerde draft met jullie huidige proces.",
    "final.cta": "Test een geanonimiseerde inspectie",
    mailSubject: "ConstatFlow test met geanonimiseerde inspectie",
    mailBody:
      "Dag,\n\nWe willen ConstatFlow testen met een geanonimiseerde inspectie.\n\nWe kunnen bezorgen:\n- Een MP3-opname van een inspectie\n- Het eindrapport dat op basis daarvan werd gemaakt\n- Onze huidige Word-template of opmaakvereisten\n\nBedrijf:\nNaam:\nTelefoon:\n",
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
