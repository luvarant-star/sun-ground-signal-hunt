# Pubblicare Sun Ground

## 1. Pubblica il sito

Il pacchetto è un sito statico: non serve compilare o installare dipendenze.

1. Estrai `sun-ground-prototype.zip` sul computer.
2. Crea un repository su GitHub, ad esempio `sun-ground-signal-hunt`.
3. Carica **il contenuto** della cartella estratta nella cartella principale del repository. Controlla che `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `service-worker.js`, le icone e `exotic-automatic-cover.png` siano tutti al livello principale.
4. Su GitHub apri **Settings → Pages**.
5. In **Build and deployment**, scegli **Deploy from a branch**, poi il branch `main` e la cartella `/ (root)`, quindi salva.
6. Quando la pubblicazione è pronta, GitHub mostra l’indirizzo del sito nelle impostazioni Pages. Sarà simile a `https://NOME-UTENTE.github.io/sun-ground-signal-hunt/`.

Per il piano gratuito di GitHub Pages il repository deve essere pubblico; il sito pubblicato è visibile a tutti. Dopo ogni modifica caricata sul branch scelto, Pages aggiorna il sito. [Guida ufficiale GitHub Pages](https://docs.github.com/en/pages/quickstart)

## 2. Aggiungila al telefono

Apri sul telefono l’indirizzo HTTPS pubblicato.

- **Android:** apri il sito in Chrome, tocca il menu ⋮ e scegli **Installa app** o **Installa e crea collegamento**. [Istruzioni Chrome](https://support.google.com/chrome/answer/9658361)
- **iPhone:** apri il sito in Safari, tocca **Condividi → Aggiungi alla schermata Home**, attiva **Apri come app web** e tocca **Aggiungi**. [Istruzioni Apple](https://support.apple.com/it-it/guide/iphone/iphea86e5236/ios)

La prima visita deve avvenire online. In seguito, il gioco e la copertina possono caricarsi dalla cache anche senza rete; Spotify e i collegamenti social hanno bisogno di internet. Su iPhone l’installazione si fa dal menu Condividi di Safari.

## Cosa non è incluso

Questa è una web app installabile, non un pacchetto pubblicato su Google Play o App Store. Il Fan Pass del prototipo salva la scelta sul dispositivo: i follow non sono controllati e Google è una simulazione. Per registrazioni reali, verifica dei follow e progressi sincronizzati tra telefoni bisogna collegare OAuth/API e un backend.

