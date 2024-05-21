const motivationalQuotes = [
  `Il successo non è definitivo, il fallimento non è fatale: è il coraggio di continuare che conta.`,
  `Non sognare la tua vita, vivi il tuo sogno.`,
  `Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.`,
  `La strada verso il successo è sempre in costruzione.`,
  `Credi in te stesso e tutto sarà possibile.`,
  `Ogni giorno è una nuova opportunità per cambiare la tua vita.`,
  `Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo.`,
  `Non aspettare. Il momento giusto non arriverà mai. Inizia dove sei e con quello che hai.`,
  `Non è mai troppo tardi per essere ciò che avresti voluto essere.`,
  `La vita è 10% ciò che ti accade e 90% come reagisci.`,
  `Non smettere mai di imparare, perché la vita non smette mai di insegnare.`,
  `Ogni giorno porta nuove scelte.`,
  `Le grandi cose non vengono mai dalle zone di comfort.`,
  `Sii il cambiamento che vuoi vedere nel mondo.`,
  `Non importa quanto lentamente vai, finché non ti fermi.`,
  `Il più grande rischio è non correre alcun rischio.`,
  `La tua vita è una tua storia, e sei tu l'autore.`,
  `Non è mai troppo tardi per essere ciò che avresti potuto essere.`,
  `La perseveranza è la madre del successo.`,
  `Non contare i giorni, fai in modo che i giorni contino.`,
  `Non puoi tornare indietro e cambiare l'inizio, ma puoi iniziare dove sei e cambiare il finale.`,
  `Il miglior momento per piantare un albero era vent'anni fa. Il secondo miglior momento è adesso.`,
  `La felicità non è qualcosa di pronto. Viene dalle tue azioni.`,
  `Non arrenderti mai, perché è solo il posto e il tempo che la marea girerà.`,
  `La vita è ciò che fai di essa. Fai grandi cose.`,
  `Il segreto per andare avanti è iniziare.`,
  `La motivazione ti porta lontano, ma è l'abitudine che ti fa andare avanti.`,
  `Trova la gioia nel viaggio.`,
  `Se vuoi qualcosa che non hai mai avuto, devi fare qualcosa che non hai mai fatto.`,
  `Sogna in grande e osa fallire.`,
  `Le sfide sono ciò che rendono la vita interessante e superarle è ciò che la rende significativa.`,
  `La tua unica limitazione è la tua immaginazione.`,
  `Non aspettare l'opportunità. Creala.`,
  `Ogni mattina è una nuova opportunità per diventare una versione migliore di te stesso.`,
  `Non smettere mai di credere in te stesso.`,
  `Fai ogni giorno qualcosa che ti avvicini di più a ciò che vuoi ottenere.`,
  `Sii audace, sii coraggioso, sii la migliore versione di te stesso.`,
  `La tua attitudine, non la tua attitudine, determinerà la tua altitudine.`,
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
}

module.exports = { getRandomQuote };
