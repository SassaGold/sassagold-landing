/* SassaGold Studios — shared site behaviour */

/* ── i18n: language data & translations ────────────────────────────────────── */
var SG_LANGS = [
  { code: 'en', flag: '🇬🇧', country: 'GB', label: 'EN' },
  { code: 'es', flag: '🇪🇸', country: 'ES', label: 'ES' },
  { code: 'de', flag: '🇩🇪', country: 'DE', label: 'DE' },
  { code: 'fr', flag: '🇫🇷', country: 'FR', label: 'FR' },
  { code: 'is', flag: '🇮🇸', country: 'IS', label: 'IS' },
  { code: 'no', flag: '🇳🇴', country: 'NO', label: 'NO' },
  { code: 'sv', flag: '🇸🇪', country: 'SE', label: 'SV' },
  { code: 'da', flag: '🇩🇰', country: 'DK', label: 'DA' },
  { code: 'nl', flag: '🇳🇱', country: 'NL', label: 'NL' }
];

var SG_I18N = {
  en: {
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.about': 'About',
    'nav.support': 'Support',
    'nav.join_beta': 'Join Beta',
    'nav.get_notified': 'Get notified',
    'nav.join_beta_mobile': 'Join Beta →',
    'nav.get_notified_mobile': 'Get notified →',
    'hero.badge': 'Now in Beta · Android',
    'hero.headline': 'Your smart<br />ride companion —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Explore. Ride. Discover. Live weather, biker POIs, trip logger, and SOS tools — built for motorcyclists, in one clean app.',
    'hero.cta_play': 'Join beta on Google Play',
    'hero.cta_beta': 'How to join the beta',
    'hero.badge_bottom': 'Now in Beta on Android',
    'features.label': 'Key Features',
    'features.h2': 'Everything you need,<br /><span class="text-gold">nothing you don\'t</span>',
    'features.sub': 'Built for the road. Designed for riders.',
    'features.view_all': 'View all features →',
    'features.poi.title': 'Biker-Friendly POIs',
    'features.poi.body': 'Find fuel stations, motorcycle workshops, rest areas, and biker cafés nearby — with clean, readable details built for riders.',
    'features.emergency.title': 'Emergency Tools',
    'features.emergency.body': 'Quick access to emergency numbers, roadside assistance contacts, and location‑aware information when you need it most.',
    'features.languages.title': '9 Languages',
    'features.languages.body': 'Full interface in English, Spanish, German, French, Icelandic, Norwegian, Swedish, Danish, and Dutch. Switch instantly — remembered forever.',
    'features.offline.title': 'Offline‑Friendly',
    'features.offline.body': 'Remote routes often have no signal. Where Am I works without a connection — essential data is cached on your device.',
    'features.trip.title': 'Trip Logger',
    'features.trip.body': 'Record your rides with a live speed gauge, real-time distance counter, and GPS route tracking. All ride history is saved on-device — never uploaded anywhere.',
    'features.ui.title': 'Clean, Rider-Focused UI',
    'features.ui.body': 'No ads. No clutter. Just the information you need — glanceable and fast, designed for bikers on the move.',
    'screenshots.label': 'App Preview',
    'screenshots.h2': 'See it in <span class="text-gold">action</span>',
    'screenshots.sub': 'A clean, focused interface designed for riders on the road.',
    'screenshots.view_all': 'View all screenshots →',
    'about.label': 'About the App',
    'about.h2': 'What is <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I is a motorcycle companion app built to help riders stay safe, informed, and prepared — whether you\'re touring a new country or navigating remote back roads.',
    'about.body2': 'It combines live weather, rider HQ dashboard, food stops, crash pads, roadside attractions, garage services, a trip logger, and SOS emergency tools into one seamless experience.',
    'about.caption': 'Built for reliability. Designed for simplicity. Ready for your next ride.',
    'about.learn_more': 'Learn more about Where Am I →',
    'waitlist.label': 'Stay in the Loop',
    'waitlist.h2': 'Get notified <span class="text-gold">at launch</span>',
    'waitlist.body': 'Drop your email and we\'ll let you know the moment Where Am I is fully released — no spam, just the important stuff.',
    'waitlist.cta': 'Notify Me',
    'waitlist.no_spam': 'No spam. Unsubscribe any time.',
    'waitlist.already': 'Already on Android? Try the open beta now:',
    'waitlist.play': 'Get it on Google Play',
    'support.label': 'Support',
    'support.h2': 'We\'re here to <span class="text-gold">help</span>',
    'support.sub': 'Have a question or need assistance? Reach out any time.',
    'support.view_all': 'View all support options →',
    'support.faq_title': 'Frequently Asked Questions',
    'support.faq1.q': 'How do I change the language?',
    'support.faq1.a': 'Open the app\'s settings menu and select your preferred language from the list. Where Am I supports English, Spanish, German, French, Icelandic, Norwegian, Swedish, Danish, and Dutch — and remembers your choice for future sessions.',
    'support.faq2.q': 'Why am I not seeing certain points of interest?',
    'support.faq2.a': 'Points of interest are updated automatically when your device has a connection. If you\'re in an area with limited coverage, some POIs may not be visible until the app syncs. Try refreshing when you regain connectivity.',
    'support.faq3.q': 'Does the app work offline?',
    'support.faq3.a': 'Yes. Where Am I is designed to work with limited or no connectivity. Core features — including emergency tools and previously cached local information — remain available offline.',
    'support.faq4.q': 'How often does the app update?',
    'support.faq4.a': 'The app checks for new content and improvements automatically in the background. You don\'t need to manually trigger updates — the app handles it for you whenever a connection is available.',
    'privacy.label': 'Privacy',
    'privacy.h2': 'Your privacy <span class="text-gold">matters</span>',
    'privacy.body1': 'Where Am I does not collect personal data, does not track your identity, and does not share information with third parties.',
    'privacy.body2': 'The app only processes the minimum data required to function, such as language settings and cached content.',
    'privacy.cta': 'Read the full Privacy Policy →',
    'footer.copy': '© 2026 SassaGold Studios. All rights reserved.',
    'lang.panel_title': '🌐 LANGUAGE'
  },
  es: {
    'nav.features': 'Funciones',
    'nav.screenshots': 'Capturas',
    'nav.about': 'Acerca de',
    'nav.support': 'Soporte',
    'nav.join_beta': 'Unirse a Beta',
    'nav.get_notified': 'Notificarme',
    'nav.join_beta_mobile': 'Unirse a Beta →',
    'nav.get_notified_mobile': 'Notificarme →',
    'hero.badge': 'En Beta · Android',
    'hero.headline': 'Tu compañero<br />de viaje inteligente —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Explora. Conduce. Descubre. Clima en vivo, POIs para motos, registro de viajes y herramientas SOS — todo en una app limpia y sencilla.',
    'hero.cta_play': 'Únete a la beta en Google Play',
    'hero.cta_beta': 'Cómo unirse a la beta',
    'hero.badge_bottom': 'En Beta en Android',
    'features.label': 'Características clave',
    'features.h2': 'Todo lo que necesitas,<br /><span class="text-gold">nada más</span>',
    'features.sub': 'Hecho para la carretera. Diseñado para motociclistas.',
    'features.view_all': 'Ver todas las funciones →',
    'features.poi.title': 'POIs para Motociclistas',
    'features.poi.body': 'Encuentra gasolineras, talleres de motos, áreas de descanso y cafés para bikers cerca — con detalles claros y legibles.',
    'features.emergency.title': 'Herramientas de Emergencia',
    'features.emergency.body': 'Acceso rápido a números de emergencia, contactos de asistencia en carretera e información según tu ubicación cuando más lo necesitas.',
    'features.languages.title': '9 Idiomas',
    'features.languages.body': 'Interfaz completa en inglés, español, alemán, francés, islandés, noruego, sueco, danés y neerlandés. Cambia al instante — se recuerda siempre.',
    'features.offline.title': 'Funciona sin Internet',
    'features.offline.body': 'Las rutas remotas a menudo no tienen señal. Where Am I funciona sin conexión — los datos esenciales están almacenados en tu dispositivo.',
    'features.trip.title': 'Registro de Viajes',
    'features.trip.body': 'Registra tus rutas con velocímetro en vivo, contador de distancia en tiempo real y rastreo GPS. Todo el historial se guarda localmente — nunca se sube a ningún servidor.',
    'features.ui.title': 'Interfaz Clara para Moteros',
    'features.ui.body': 'Sin anuncios. Sin ruido. Solo la información que necesitas — visible de un vistazo, diseñada para bikers en movimiento.',
    'screenshots.label': 'Vista previa',
    'screenshots.h2': 'Mírala en <span class="text-gold">acción</span>',
    'screenshots.sub': 'Una interfaz limpia y enfocada diseñada para motociclistas en la carretera.',
    'screenshots.view_all': 'Ver todas las capturas →',
    'about.label': 'Sobre la App',
    'about.h2': '¿Qué es <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I es una app compañera de moto diseñada para ayudar a los riders a mantenerse seguros, informados y preparados — ya sea recorriendo un nuevo país o navegando por caminos remotos.',
    'about.body2': 'Combina clima en vivo, panel de Rider HQ, paradas de comida, alojamientos, atracciones, servicios de garaje, registro de viajes y herramientas SOS de emergencia en una experiencia fluida.',
    'about.caption': 'Construida para la fiabilidad. Diseñada para la simplicidad. Lista para tu próxima ruta.',
    'about.learn_more': 'Saber más sobre Where Am I →',
    'waitlist.label': 'Mantente Informado',
    'waitlist.h2': 'Recibe notificaciones <span class="text-gold">al lanzamiento</span>',
    'waitlist.body': 'Deja tu email y te avisaremos en el momento en que Where Am I se lance oficialmente — sin spam, solo lo importante.',
    'waitlist.cta': 'Notificarme',
    'waitlist.no_spam': 'Sin spam. Cancela cuando quieras.',
    'waitlist.already': '¿Ya tienes Android? Prueba la beta abierta ahora:',
    'waitlist.play': 'Consíguelo en Google Play',
    'support.label': 'Soporte',
    'support.h2': 'Estamos aquí para <span class="text-gold">ayudar</span>',
    'support.sub': '¿Tienes alguna pregunta o necesitas ayuda? Contáctanos cuando quieras.',
    'support.view_all': 'Ver todas las opciones de soporte →',
    'support.faq_title': 'Preguntas Frecuentes',
    'support.faq1.q': '¿Cómo cambio el idioma?',
    'support.faq1.a': 'Abre el menú de ajustes de la app y selecciona tu idioma preferido. Where Am I es compatible con inglés, español, alemán, francés, islandés, noruego, sueco, danés y neerlandés — y recuerda tu elección.',
    'support.faq2.q': '¿Por qué no veo ciertos puntos de interés?',
    'support.faq2.a': 'Los POIs se actualizan automáticamente cuando tienes conexión. Si estás en una zona sin cobertura, algunos pueden no estar disponibles hasta que la app sincronice. Intenta refrescar cuando recuperes la señal.',
    'support.faq3.q': '¿Funciona la app sin conexión?',
    'support.faq3.a': 'Sí. Where Am I está diseñada para funcionar con conexión limitada o sin ella. Las funciones básicas — incluidas las herramientas de emergencia y la información en caché — están disponibles sin conexión.',
    'support.faq4.q': '¿Con qué frecuencia se actualiza la app?',
    'support.faq4.a': 'La app busca nuevo contenido y mejoras automáticamente en segundo plano. No necesitas activar actualizaciones manualmente — la app lo gestiona por ti cuando hay conexión disponible.',
    'privacy.label': 'Privacidad',
    'privacy.h2': 'Tu privacidad <span class="text-gold">importa</span>',
    'privacy.body1': 'Where Am I no recopila datos personales, no rastrea tu identidad y no comparte información con terceros.',
    'privacy.body2': 'La app solo procesa los datos mínimos necesarios para funcionar, como ajustes de idioma y contenido en caché.',
    'privacy.cta': 'Leer la Política de Privacidad completa →',
    'footer.copy': '© 2026 SassaGold Studios. Todos los derechos reservados.',
    'lang.panel_title': '🌐 IDIOMA'
  },
  de: {
    'nav.features': 'Funktionen',
    'nav.screenshots': 'Screenshots',
    'nav.about': 'Über uns',
    'nav.support': 'Support',
    'nav.join_beta': 'Beta beitreten',
    'nav.get_notified': 'Benachrichtigen',
    'nav.join_beta_mobile': 'Beta beitreten →',
    'nav.get_notified_mobile': 'Benachrichtigen →',
    'hero.badge': 'Jetzt in Beta · Android',
    'hero.headline': 'Dein smarter<br />Fahrbegleiter —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Erkunden. Fahren. Entdecken. Live-Wetter, Biker-POIs, Tourenlogger und SOS-Tools — alles in einer übersichtlichen App.',
    'hero.cta_play': 'Beta auf Google Play beitreten',
    'hero.cta_beta': 'So nimmst du an der Beta teil',
    'hero.badge_bottom': 'Jetzt in Beta auf Android',
    'features.label': 'Hauptfunktionen',
    'features.h2': 'Alles was du brauchst,<br /><span class="text-gold">nichts was du nicht brauchst</span>',
    'features.sub': 'Für die Straße gebaut. Für Fahrer gemacht.',
    'features.view_all': 'Alle Funktionen anzeigen →',
    'features.poi.title': 'Biker-freundliche POIs',
    'features.poi.body': 'Finde Tankstellen, Motorradwerkstätten, Rastplätze und Biker-Cafés in der Nähe — mit klaren, übersichtlichen Details.',
    'features.emergency.title': 'Notfall-Tools',
    'features.emergency.body': 'Schneller Zugriff auf Notrufnummern, Pannenhilfe-Kontakte und standortbezogene Informationen — genau dann, wenn du sie brauchst.',
    'features.languages.title': '9 Sprachen',
    'features.languages.body': 'Vollständige Benutzeroberfläche auf Englisch, Spanisch, Deutsch, Französisch, Isländisch, Norwegisch, Schwedisch, Dänisch und Niederländisch. Sofort wechseln — wird dauerhaft gespeichert.',
    'features.offline.title': 'Offline-fähig',
    'features.offline.body': 'Abgelegene Routen haben oft keinen Empfang. Where Am I funktioniert ohne Verbindung — wichtige Daten werden auf deinem Gerät gespeichert.',
    'features.trip.title': 'Tourenlogger',
    'features.trip.body': 'Zeichne deine Fahrten auf: Live-Tachometer, Echtzeit-Distanzmessung und GPS-Streckenaufzeichnung. Alle Touren werden lokal gespeichert — niemals hochgeladen.',
    'features.ui.title': 'Klares, fahrerorientiertes UI',
    'features.ui.body': 'Keine Werbung. Kein Chaos. Nur die Infos, die du brauchst — auf einen Blick erfassbar, für Biker unterwegs gemacht.',
    'screenshots.label': 'App-Vorschau',
    'screenshots.h2': 'Sieh es in <span class="text-gold">Aktion</span>',
    'screenshots.sub': 'Eine klare, fokussierte Benutzeroberfläche für Fahrer unterwegs.',
    'screenshots.view_all': 'Alle Screenshots anzeigen →',
    'about.label': 'Über die App',
    'about.h2': 'Was ist <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I ist eine Motorrad-Begleit-App, die Fahrern hilft, sicher, informiert und vorbereitet zu bleiben — ob beim Bereisen neuer Länder oder auf abgelegenen Nebenwegen.',
    'about.body2': 'Sie vereint Live-Wetter, Rider-HQ-Dashboard, Essensstopps, Übernachtungsplätze, Sehenswürdigkeiten, Werkstattdienste, einen Tourenlogger und SOS-Notfalltools in einem reibungslosen Erlebnis.',
    'about.caption': 'Gebaut für Zuverlässigkeit. Gestaltet für Einfachheit. Bereit für deine nächste Tour.',
    'about.learn_more': 'Mehr über Where Am I erfahren →',
    'waitlist.label': 'Bleib informiert',
    'waitlist.h2': 'Werde <span class="text-gold">beim Launch</span> benachrichtigt',
    'waitlist.body': 'Trag deine E-Mail ein und wir informieren dich, sobald Where Am I offiziell veröffentlicht wird — kein Spam, nur das Wesentliche.',
    'waitlist.cta': 'Benachrichtigen',
    'waitlist.no_spam': 'Kein Spam. Jederzeit abmelden.',
    'waitlist.already': 'Bereits auf Android? Probiere jetzt die offene Beta:',
    'waitlist.play': 'Auf Google Play holen',
    'support.label': 'Support',
    'support.h2': 'Wir sind für dich <span class="text-gold">da</span>',
    'support.sub': 'Hast du Fragen oder brauchst Hilfe? Schreib uns jederzeit.',
    'support.view_all': 'Alle Support-Optionen anzeigen →',
    'support.faq_title': 'Häufig gestellte Fragen',
    'support.faq1.q': 'Wie ändere ich die Sprache?',
    'support.faq1.a': 'Öffne das Einstellungsmenü der App und wähle deine bevorzugte Sprache. Where Am I unterstützt Englisch, Spanisch, Deutsch, Französisch, Isländisch, Norwegisch, Schwedisch, Dänisch und Niederländisch — und speichert deine Auswahl.',
    'support.faq2.q': 'Warum sehe ich bestimmte POIs nicht?',
    'support.faq2.a': 'POIs werden automatisch aktualisiert, wenn dein Gerät eine Verbindung hat. In Gebieten mit schlechtem Empfang sind manche POIs erst nach der Synchronisierung sichtbar. Versuche es erneut, wenn du wieder online bist.',
    'support.faq3.q': 'Funktioniert die App offline?',
    'support.faq3.a': 'Ja. Where Am I ist für den Betrieb mit eingeschränkter oder ohne Konnektivität ausgelegt. Kernfunktionen — einschließlich Notfalltools und gespeicherter lokaler Infos — sind offline verfügbar.',
    'support.faq4.q': 'Wie oft wird die App aktualisiert?',
    'support.faq4.a': 'Die App sucht automatisch im Hintergrund nach neuen Inhalten und Verbesserungen. Du musst keine Updates manuell auslösen — die App erledigt das für dich, sobald eine Verbindung verfügbar ist.',
    'privacy.label': 'Datenschutz',
    'privacy.h2': 'Deine Privatsphäre <span class="text-gold">ist wichtig</span>',
    'privacy.body1': 'Where Am I sammelt keine persönlichen Daten, verfolgt deine Identität nicht und gibt keine Informationen an Dritte weiter.',
    'privacy.body2': 'Die App verarbeitet nur die minimalen Daten, die für den Betrieb erforderlich sind, wie Spracheinstellungen und gespeicherte Inhalte.',
    'privacy.cta': 'Die vollständige Datenschutzerklärung lesen →',
    'footer.copy': '© 2026 SassaGold Studios. Alle Rechte vorbehalten.',
    'lang.panel_title': '🌐 SPRACHE'
  },
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.screenshots': 'Captures',
    'nav.about': 'À propos',
    'nav.support': 'Support',
    'nav.join_beta': 'Rejoindre la Bêta',
    'nav.get_notified': 'Me notifier',
    'nav.join_beta_mobile': 'Rejoindre la Bêta →',
    'nav.get_notified_mobile': 'Me notifier →',
    'hero.badge': 'En Bêta · Android',
    'hero.headline': 'Votre compagnon<br />de route intelligent —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Explorez. Roulez. Découvrez. Météo en direct, POIs pour motards, journal de trajet et outils SOS — dans une app simple et épurée.',
    'hero.cta_play': 'Rejoindre la bêta sur Google Play',
    'hero.cta_beta': 'Comment rejoindre la bêta',
    'hero.badge_bottom': 'En Bêta sur Android',
    'features.label': 'Fonctionnalités clés',
    'features.h2': 'Tout ce dont vous avez besoin,<br /><span class="text-gold">rien de superflu</span>',
    'features.sub': 'Conçu pour la route. Pensé pour les motards.',
    'features.view_all': 'Voir toutes les fonctionnalités →',
    'features.poi.title': 'POIs pour Motards',
    'features.poi.body': 'Trouvez des stations-service, ateliers moto, aires de repos et cafés pour bikers à proximité — avec des détails clairs et lisibles.',
    'features.emergency.title': 'Outils d\'Urgence',
    'features.emergency.body': 'Accès rapide aux numéros d\'urgence, contacts d\'assistance routière et informations géolocalisées quand vous en avez le plus besoin.',
    'features.languages.title': '9 Langues',
    'features.languages.body': 'Interface complète en anglais, espagnol, allemand, français, islandais, norvégien, suédois, danois et néerlandais. Changez instantanément — mémorisé pour toujours.',
    'features.offline.title': 'Hors Ligne',
    'features.offline.body': 'Les itinéraires éloignés n\'ont souvent pas de signal. Where Am I fonctionne sans connexion — les données essentielles sont en cache sur votre appareil.',
    'features.trip.title': 'Journal de Trajet',
    'features.trip.body': 'Enregistrez vos trajets avec un compteur de vitesse en direct, un compteur de distance en temps réel et un suivi GPS. Tout l\'historique est sauvegardé localement — jamais téléchargé.',
    'features.ui.title': 'Interface Claire pour Motards',
    'features.ui.body': 'Pas de pub. Pas de désordre. Juste les infos dont vous avez besoin — lisibles d\'un coup d\'œil, conçues pour les bikers en déplacement.',
    'screenshots.label': 'Aperçu de l\'App',
    'screenshots.h2': 'Voyez-la en <span class="text-gold">action</span>',
    'screenshots.sub': 'Une interface claire et focalisée, conçue pour les motards sur la route.',
    'screenshots.view_all': 'Voir toutes les captures →',
    'about.label': 'À propos de l\'App',
    'about.h2': 'Qu\'est-ce que <span class="text-gold">Where Am I</span>&nbsp;?',
    'about.body1': 'Where Am I est une app compagnon pour moto conçue pour aider les motards à rester en sécurité, informés et préparés — que vous exploriez un nouveau pays ou naviguiez sur des routes isolées.',
    'about.body2': 'Elle combine météo en direct, tableau de bord Rider HQ, arrêts repas, hébergements, attractions, services de garage, journal de trajet et outils d\'urgence SOS en une expérience fluide.',
    'about.caption': 'Construit pour la fiabilité. Conçu pour la simplicité. Prêt pour votre prochain trajet.',
    'about.learn_more': 'En savoir plus sur Where Am I →',
    'waitlist.label': 'Restez informé',
    'waitlist.h2': 'Soyez notifié <span class="text-gold">au lancement</span>',
    'waitlist.body': 'Laissez votre email et nous vous préviendrons dès que Where Am I sera officiellement lancé — sans spam, juste l\'essentiel.',
    'waitlist.cta': 'Me notifier',
    'waitlist.no_spam': 'Pas de spam. Désinscription à tout moment.',
    'waitlist.already': 'Déjà sur Android ? Essayez la bêta ouverte maintenant :',
    'waitlist.play': 'Obtenir sur Google Play',
    'support.label': 'Support',
    'support.h2': 'Nous sommes là pour <span class="text-gold">vous aider</span>',
    'support.sub': 'Vous avez une question ou besoin d\'aide ? Contactez-nous à tout moment.',
    'support.view_all': 'Voir toutes les options de support →',
    'support.faq_title': 'Questions Fréquentes',
    'support.faq1.q': 'Comment changer la langue ?',
    'support.faq1.a': 'Ouvrez le menu des paramètres de l\'app et sélectionnez votre langue préférée. Where Am I prend en charge l\'anglais, l\'espagnol, l\'allemand, le français, l\'islandais, le norvégien, le suédois, le danois et le néerlandais — et mémorise votre choix.',
    'support.faq2.q': 'Pourquoi je ne vois pas certains points d\'intérêt ?',
    'support.faq2.a': 'Les POIs sont mis à jour automatiquement lorsque votre appareil est connecté. Dans les zones à couverture limitée, certains POIs peuvent ne pas être visibles avant la synchronisation. Réessayez quand vous retrouvez la connexion.',
    'support.faq3.q': 'L\'app fonctionne-t-elle hors ligne ?',
    'support.faq3.a': 'Oui. Where Am I est conçue pour fonctionner avec une connexion limitée ou sans connexion. Les fonctionnalités principales — notamment les outils d\'urgence et les informations en cache — restent disponibles hors ligne.',
    'support.faq4.q': 'À quelle fréquence l\'app est-elle mise à jour ?',
    'support.faq4.a': 'L\'app recherche automatiquement de nouveaux contenus et améliorations en arrière-plan. Vous n\'avez pas besoin de déclencher des mises à jour manuellement — l\'app s\'en charge dès qu\'une connexion est disponible.',
    'privacy.label': 'Confidentialité',
    'privacy.h2': 'Votre vie privée <span class="text-gold">compte</span>',
    'privacy.body1': 'Where Am I ne collecte pas de données personnelles, ne suit pas votre identité et ne partage pas d\'informations avec des tiers.',
    'privacy.body2': 'L\'app traite uniquement les données minimales nécessaires à son fonctionnement, telles que les paramètres de langue et le contenu en cache.',
    'privacy.cta': 'Lire la Politique de Confidentialité complète →',
    'footer.copy': '© 2026 SassaGold Studios. Tous droits réservés.',
    'lang.panel_title': '🌐 LANGUE'
  },
  is: {
    'nav.features': 'Eiginleikar',
    'nav.screenshots': 'Skjámyndir',
    'nav.about': 'Um',
    'nav.support': 'Stuðningur',
    'nav.join_beta': 'Ganga í Beta',
    'nav.get_notified': 'Fá tilkynningu',
    'nav.join_beta_mobile': 'Ganga í Beta →',
    'nav.get_notified_mobile': 'Fá tilkynningu →',
    'hero.badge': 'Nú í Beta · Android',
    'hero.headline': 'Þinn snjalli<br />ferðafélagi —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Kannaðu. Ektu. Uppgötvaðu. Veður í rauntíma, POI fyrir mótorhjólreiðar, ferðaskrár og SOS verkfæri — í einni hreinni app.',
    'hero.cta_play': 'Ganga í beta á Google Play',
    'hero.cta_beta': 'Hvernig á að ganga í beta',
    'hero.badge_bottom': 'Nú í Beta á Android',
    'features.label': 'Helstu eiginleikar',
    'features.h2': 'Allt sem þú þarft,<br /><span class="text-gold">ekkert annað</span>',
    'features.sub': 'Byggt fyrir veginn. Hannað fyrir hjólreiðamenn.',
    'features.view_all': 'Sjá alla eiginleika →',
    'features.poi.title': 'POI fyrir Mótorhjólreiðamenn',
    'features.poi.body': 'Finndu bensínstöðvar, mótorhjólaverkstæði, hvíldarsvæði og kaffihús fyrir bíkara nærri þér — með skýrum, læsilegum upplýsingum.',
    'features.emergency.title': 'Neyðarverkfæri',
    'features.emergency.body': 'Skjór aðgangur að neyðarnúmerum, vegahjálparsamböndum og staðsetningartengdum upplýsingum þegar þú þarft mest á þeim að halda.',
    'features.languages.title': '9 Tungumál',
    'features.languages.body': 'Fullt viðmót á ensku, spænsku, þýsku, frönsku, íslensku, norsku, sænsku, dönsku og hollensku. Skiptu strax — munað að eilífu.',
    'features.offline.title': 'Virkar án nettengingar',
    'features.offline.body': 'Fjarlægar leiðir hafa oft ekkert merki. Where Am I virkar án tengingar — nauðsynleg gögn eru geymd á tækinu þínu.',
    'features.trip.title': 'Ferðaskrár',
    'features.trip.body': 'Skráðu ferðir þínar með rauntíma hraðamæli, fjarlægdarteljara og GPS-leiðarspornun. Öll ferðasaga er geymd á tækinu — aldrei hlaðið upp neitt.',
    'features.ui.title': 'Hreint, hjólreiðamiðað viðmót',
    'features.ui.body': 'Engar auglýsingar. Ekkert rugl. Bara upplýsingarnar sem þú þarft — snögglegar og hraðar, hannaðar fyrir bíkara á ferðinni.',
    'screenshots.label': 'Forskoðun',
    'screenshots.h2': 'Sjá hana í <span class="text-gold">aðgerð</span>',
    'screenshots.sub': 'Hreint, einbeitt viðmót hannað fyrir hjólreiðamenn á veginum.',
    'screenshots.view_all': 'Sjá allar skjámyndir →',
    'about.label': 'Um appið',
    'about.h2': 'Hvað er <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I er mótorhjóla-fylgiforrit hannað til að hjálpa hjólreiðamönnum að vera öruggir, upplýstir og tilbúnir — hvort sem þú ert að skoða nýtt land eða fara um fjarlægar veglendir.',
    'about.body2': 'Það sameinar rauntíma veður, Rider HQ mælaborð, matstöðvar, gististöður, aðdrætti, bílsmiðjuþjónustu, ferðaskráningar og SOS neyðarverkfæri í eina óaðskiljanlega upplifun.',
    'about.caption': 'Byggt fyrir áreiðanleika. Hannað fyrir einfaldleika. Tilbúið fyrir næstu ferð þína.',
    'about.learn_more': 'Fræðast meira um Where Am I →',
    'waitlist.label': 'Vertu uppfærð/ur',
    'waitlist.h2': 'Fáðu tilkynningu <span class="text-gold">við útgáfu</span>',
    'waitlist.body': 'Settu inn netfangið þitt og við látum þig vita um leið og Where Am I er gefið út formlega — enginn ruslpóstur, bara það mikilvæga.',
    'waitlist.cta': 'Tilkynna mér',
    'waitlist.no_spam': 'Enginn ruslpóstur. Afskráðu þig hvenær sem er.',
    'waitlist.already': 'Ertu þegar á Android? Prófaðu opna beta núna:',
    'waitlist.play': 'Sækja á Google Play',
    'support.label': 'Stuðningur',
    'support.h2': 'Við erum hér til að <span class="text-gold">hjálpa</span>',
    'support.sub': 'Hefur þú spurningar eða þarft aðstoð? Hafðu samband hvenær sem er.',
    'support.view_all': 'Sjá allar stuðningsvalkostir →',
    'support.faq_title': 'Algengar spurningar',
    'support.faq1.q': 'Hvernig breyti ég tungumálinu?',
    'support.faq1.a': 'Opnaðu stillingavalmyndina í appinu og veldu tungumál. Where Am I styður ensku, spænsku, þýsku, frönsku, íslensku, norsku, sænsku, dönsku og hollensku — og man val þitt.',
    'support.faq2.q': 'Af hverju sé ég ekki ákveðin áhugaverð staðaset?',
    'support.faq2.a': 'POI eru uppfærð sjálfkrafa þegar tækið þitt er tengt. Á svæðum með takmarkaðar samskiptur kann að vera að sumar POIs séu ekki sýnilegar fyrr en appið samstillist. Reyndu að uppfæra þegar þú færð tengingu aftur.',
    'support.faq3.q': 'Virkar appið án nettengingar?',
    'support.faq3.a': 'Já. Where Am I er hannað til að virka með takmarkaðri eða engri tengingu. Kjarnaeiginleikar — þar á meðal neyðarverkfæri og áður geymd staðbundin gögn — eru tiltæk án nettengingar.',
    'support.faq4.q': 'Hversu oft er appið uppfært?',
    'support.faq4.a': 'Appið leitar sjálfkrafa að nýju efni og umbótum í bakgrunni. Þú þarft ekki að kveikja á uppfærslum handvirkt — appið sér um það fyrir þig um leið og tenging er tiltæk.',
    'privacy.label': 'Persónuvernd',
    'privacy.h2': 'Persónuvernd þín <span class="text-gold">skiptir máli</span>',
    'privacy.body1': 'Where Am I safnar ekki persónulegum gögnum, rekur ekki deili þín og deilir ekki upplýsingum með þriðja aðilum.',
    'privacy.body2': 'Appið vinnur einungis úr lágmarks gögnum sem nauðsynleg eru til að virka, eins og tungumálastillingar og geymt efni.',
    'privacy.cta': 'Lesa fulla persónuverndarstefnu →',
    'footer.copy': '© 2026 SassaGold Studios. Öll réttindi áskilin.',
    'lang.panel_title': '🌐 TUNGUMÁL'
  },
  no: {
    'nav.features': 'Funksjoner',
    'nav.screenshots': 'Skjermbilder',
    'nav.about': 'Om',
    'nav.support': 'Støtte',
    'nav.join_beta': 'Bli med i Beta',
    'nav.get_notified': 'Varsle meg',
    'nav.join_beta_mobile': 'Bli med i Beta →',
    'nav.get_notified_mobile': 'Varsle meg →',
    'hero.badge': 'Nå i Beta · Android',
    'hero.headline': 'Din smarte<br />reisefølgesvenn —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Utforsk. Kjør. Oppdag. Sanntidsvær, biker-POI-er, turlogg og SOS-verktøy — alt i én ren app.',
    'hero.cta_play': 'Bli med i beta på Google Play',
    'hero.cta_beta': 'Slik blir du med i beta',
    'hero.badge_bottom': 'Nå i Beta på Android',
    'features.label': 'Nøkkelfunksjoner',
    'features.h2': 'Alt du trenger,<br /><span class="text-gold">ingenting du ikke trenger</span>',
    'features.sub': 'Bygget for veien. Designet for ryttere.',
    'features.view_all': 'Se alle funksjoner →',
    'features.poi.title': 'Bikervennlige POI-er',
    'features.poi.body': 'Finn bensinstasjoner, motorsykkelverksteder, rasteplasser og bikerkafeer i nærheten — med tydelige, lesbare detaljer.',
    'features.emergency.title': 'Nødverktøy',
    'features.emergency.body': 'Rask tilgang til nødnumre, veihjelp-kontakter og stedsspesifikk informasjon når du trenger det mest.',
    'features.languages.title': '9 Språk',
    'features.languages.body': 'Fullt grensesnitt på engelsk, spansk, tysk, fransk, islandsk, norsk, svensk, dansk og nederlandsk. Bytt øyeblikkelig — huskes for alltid.',
    'features.offline.title': 'Offline-vennlig',
    'features.offline.body': 'Avsidesliggende ruter har ofte ikke dekning. Where Am I fungerer uten tilkobling — viktige data er bufret på enheten din.',
    'features.trip.title': 'Turlogg',
    'features.trip.body': 'Registrer turene dine med live hastighetsmåler, sanntids distanseteller og GPS-ruting. All turhistorikk lagres lokalt — lastes aldri opp.',
    'features.ui.title': 'Rent, rytterorientert grensesnitt',
    'features.ui.body': 'Ingen annonser. Ingen rot. Bare informasjonen du trenger — oversiktlig og rask, designet for biker på farten.',
    'screenshots.label': 'App-forhåndsvisning',
    'screenshots.h2': 'Se den i <span class="text-gold">aksjon</span>',
    'screenshots.sub': 'Et rent, fokusert grensesnitt designet for ryttere på veien.',
    'screenshots.view_all': 'Se alle skjermbilder →',
    'about.label': 'Om appen',
    'about.h2': 'Hva er <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I er en motorsykkel-følgesvennsapp bygget for å hjelpe ryttere å holde seg trygge, informerte og forberedte — enten du reiser i et nytt land eller navigerer på avsidesliggende veier.',
    'about.body2': 'Den kombinerer sanntidsvær, Rider HQ-dashboard, matstopp, overnattingssteder, severdigheter, garasjetjenester, turlogg og SOS-nødverktøy i én smidig opplevelse.',
    'about.caption': 'Bygget for pålitelighet. Designet for enkelhet. Klar for neste tur.',
    'about.learn_more': 'Lær mer om Where Am I →',
    'waitlist.label': 'Hold deg oppdatert',
    'waitlist.h2': 'Bli varslet <span class="text-gold">ved lansering</span>',
    'waitlist.body': 'Legg igjen e-posten din og vi gir deg beskjed i det øyeblikket Where Am I er offisielt lansert — ingen spam, bare det viktigste.',
    'waitlist.cta': 'Varsle meg',
    'waitlist.no_spam': 'Ingen spam. Avmeld deg når som helst.',
    'waitlist.already': 'Allerede på Android? Prøv den åpne beta nå:',
    'waitlist.play': 'Hent på Google Play',
    'support.label': 'Støtte',
    'support.h2': 'Vi er her for å <span class="text-gold">hjelpe</span>',
    'support.sub': 'Har du et spørsmål eller trenger hjelp? Ta kontakt når som helst.',
    'support.view_all': 'Se alle støttealternativer →',
    'support.faq_title': 'Ofte stilte spørsmål',
    'support.faq1.q': 'Hvordan endrer jeg språket?',
    'support.faq1.a': 'Åpne innstillingsmenyen i appen og velg foretrukket språk. Where Am I støtter engelsk, spansk, tysk, fransk, islandsk, norsk, svensk, dansk og nederlandsk — og husker valget ditt.',
    'support.faq2.q': 'Hvorfor ser jeg ikke visse interessepunkter?',
    'support.faq2.a': 'POI-er oppdateres automatisk når enheten din har tilkobling. I områder med begrenset dekning kan noen POI-er være utilgjengelige til appen synkroniserer. Prøv å oppdatere når du får tilkobling igjen.',
    'support.faq3.q': 'Fungerer appen offline?',
    'support.faq3.a': 'Ja. Where Am I er designet for å fungere med begrenset eller ingen tilkobling. Kjernefunksjoner — inkludert nødverktøy og tidligere bufret lokal info — er tilgjengelig offline.',
    'support.faq4.q': 'Hvor ofte oppdateres appen?',
    'support.faq4.a': 'Appen søker automatisk etter nytt innhold og forbedringer i bakgrunnen. Du trenger ikke å utløse oppdateringer manuelt — appen håndterer det for deg når tilkobling er tilgjengelig.',
    'privacy.label': 'Personvern',
    'privacy.h2': 'Ditt personvern <span class="text-gold">betyr noe</span>',
    'privacy.body1': 'Where Am I samler ikke inn personlige data, sporer ikke identiteten din og deler ikke informasjon med tredjeparter.',
    'privacy.body2': 'Appen behandler kun de minimale dataene som kreves for å fungere, som språkinnstillinger og bufret innhold.',
    'privacy.cta': 'Les den fullstendige personvernerklæringen →',
    'footer.copy': '© 2026 SassaGold Studios. Alle rettigheter forbeholdt.',
    'lang.panel_title': '🌐 SPRÅK'
  },
  sv: {
    'nav.features': 'Funktioner',
    'nav.screenshots': 'Skärmdumpar',
    'nav.about': 'Om',
    'nav.support': 'Support',
    'nav.join_beta': 'Gå med i Beta',
    'nav.get_notified': 'Meddela mig',
    'nav.join_beta_mobile': 'Gå med i Beta →',
    'nav.get_notified_mobile': 'Meddela mig →',
    'hero.badge': 'Nu i Beta · Android',
    'hero.headline': 'Din smarta<br />resekompis —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Utforska. Kör. Upptäck. Realtidsväder, biker-POI:er, reselogg och SOS-verktyg — allt i en ren app.',
    'hero.cta_play': 'Gå med i beta på Google Play',
    'hero.cta_beta': 'Hur du går med i betan',
    'hero.badge_bottom': 'Nu i Beta på Android',
    'features.label': 'Nyckelfunktioner',
    'features.h2': 'Allt du behöver,<br /><span class="text-gold">inget du inte behöver</span>',
    'features.sub': 'Byggt för vägen. Designat för förare.',
    'features.view_all': 'Se alla funktioner →',
    'features.poi.title': 'Bikervänliga POI:er',
    'features.poi.body': 'Hitta bensinstationer, motorcykelverkstäder, rastplatser och bikercaféer i närheten — med tydliga, lättlästa detaljer.',
    'features.emergency.title': 'Nödverktyg',
    'features.emergency.body': 'Snabb tillgång till nödnummer, väghjälpskontakter och platsberoende information när du behöver det som mest.',
    'features.languages.title': '9 Språk',
    'features.languages.body': 'Fullt gränssnitt på engelska, spanska, tyska, franska, isländska, norska, svenska, danska och holländska. Byt direkt — ihågkommet för alltid.',
    'features.offline.title': 'Offline-vänlig',
    'features.offline.body': 'Avlägsna rutter har ofta ingen signal. Where Am I fungerar utan anslutning — viktig data är cachad på din enhet.',
    'features.trip.title': 'Reselogg',
    'features.trip.body': 'Spela in dina resor med live-hastighetsmätare, realtidsdistansräknare och GPS-spårning. All resehistorik sparas lokalt — laddas aldrig upp.',
    'features.ui.title': 'Rent, förarfokuserat gränssnitt',
    'features.ui.body': 'Inga annonser. Inget stök. Bara informationen du behöver — lättöverskådlig och snabb, designad för bikers på språng.',
    'screenshots.label': 'App-förhandsgranskning',
    'screenshots.h2': 'Se den i <span class="text-gold">aktion</span>',
    'screenshots.sub': 'Ett rent, fokuserat gränssnitt designat för förare på vägen.',
    'screenshots.view_all': 'Se alla skärmdumpar →',
    'about.label': 'Om appen',
    'about.h2': 'Vad är <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I är en motorcykelkompanjon-app byggd för att hjälpa förare att hålla sig säkra, informerade och förberedda — oavsett om du reser i ett nytt land eller navigerar på avlägsna vägar.',
    'about.body2': 'Den kombinerar realtidsväder, Rider HQ-instrumentpanel, matstoppar, övernattningsplatser, sevärdheter, garagetjänster, reselogg och SOS-nödverktyg i en sömlös upplevelse.',
    'about.caption': 'Byggt för tillförlitlighet. Designat för enkelhet. Redo för din nästa resa.',
    'about.learn_more': 'Läs mer om Where Am I →',
    'waitlist.label': 'Håll dig uppdaterad',
    'waitlist.h2': 'Bli notifierad <span class="text-gold">vid lansering</span>',
    'waitlist.body': 'Lämna din e-post så meddelar vi dig i det ögonblick Where Am I lanseras officiellt — ingen spam, bara det viktiga.',
    'waitlist.cta': 'Meddela mig',
    'waitlist.no_spam': 'Ingen spam. Avregistrera dig när som helst.',
    'waitlist.already': 'Redan på Android? Prova den öppna betan nu:',
    'waitlist.play': 'Hämta på Google Play',
    'support.label': 'Support',
    'support.h2': 'Vi är här för att <span class="text-gold">hjälpa</span>',
    'support.sub': 'Har du en fråga eller behöver hjälp? Hör av dig när som helst.',
    'support.view_all': 'Se alla supportalternativ →',
    'support.faq_title': 'Vanliga frågor',
    'support.faq1.q': 'Hur byter jag språk?',
    'support.faq1.a': 'Öppna appens inställningsmeny och välj ditt föredragna språk. Where Am I stöder engelska, spanska, tyska, franska, isländska, norska, svenska, danska och holländska — och kommer ihåg ditt val.',
    'support.faq2.q': 'Varför ser jag inte vissa intressepunkter?',
    'support.faq2.a': 'POI:er uppdateras automatiskt när din enhet är ansluten. I områden med begränsad täckning kan vissa POI:er inte vara synliga förrän appen synkroniserar. Försök uppdatera när du får anslutning igen.',
    'support.faq3.q': 'Fungerar appen offline?',
    'support.faq3.a': 'Ja. Where Am I är designad för att fungera med begränsad eller ingen anslutning. Kärnfunktioner — inklusive nödverktyg och tidigare cachad lokal info — är tillgängliga offline.',
    'support.faq4.q': 'Hur ofta uppdateras appen?',
    'support.faq4.a': 'Appen söker automatiskt efter nytt innehåll och förbättringar i bakgrunden. Du behöver inte utlösa uppdateringar manuellt — appen hanterar det åt dig när en anslutning är tillgänglig.',
    'privacy.label': 'Integritet',
    'privacy.h2': 'Din integritet <span class="text-gold">spelar roll</span>',
    'privacy.body1': 'Where Am I samlar inte in personuppgifter, spårar inte din identitet och delar inte information med tredje part.',
    'privacy.body2': 'Appen behandlar bara de minimala data som krävs för att fungera, som språkinställningar och cachad innehåll.',
    'privacy.cta': 'Läs den fullständiga integritetspolicyn →',
    'footer.copy': '© 2026 SassaGold Studios. Alla rättigheter förbehållna.',
    'lang.panel_title': '🌐 SPRÅK'
  },
  da: {
    'nav.features': 'Funktioner',
    'nav.screenshots': 'Skærmbilleder',
    'nav.about': 'Om',
    'nav.support': 'Support',
    'nav.join_beta': 'Tilmeld Beta',
    'nav.get_notified': 'Giv mig besked',
    'nav.join_beta_mobile': 'Tilmeld Beta →',
    'nav.get_notified_mobile': 'Giv mig besked →',
    'hero.badge': 'Nu i Beta · Android',
    'hero.headline': 'Din smarte<br />rejsekammerat —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Udforsk. Kør. Opdag. Vejr i realtid, biker-POI\'er, turlog og SOS-værktøjer — alt i én ren app.',
    'hero.cta_play': 'Tilmeld beta på Google Play',
    'hero.cta_beta': 'Sådan tilmelder du dig beta',
    'hero.badge_bottom': 'Nu i Beta på Android',
    'features.label': 'Nøglefunktioner',
    'features.h2': 'Alt hvad du har brug for,<br /><span class="text-gold">intet andet</span>',
    'features.sub': 'Bygget til vejen. Designet til ryttere.',
    'features.view_all': 'Se alle funktioner →',
    'features.poi.title': 'Bikervenlige POI\'er',
    'features.poi.body': 'Find tankstationer, motorcykelværksteder, rastepladser og bikercaféer i nærheden — med klare, læselige detaljer.',
    'features.emergency.title': 'Nødværktøjer',
    'features.emergency.body': 'Hurtig adgang til nødnumre, vejhjælpskontakter og stedbaserede oplysninger, når du har mest brug for det.',
    'features.languages.title': '9 Sprog',
    'features.languages.body': 'Fuldt interface på engelsk, spansk, tysk, fransk, islandsk, norsk, svensk, dansk og hollandsk. Skift øjeblikkeligt — husket for evigt.',
    'features.offline.title': 'Offline-venlig',
    'features.offline.body': 'Afsidesliggende ruter har ofte ingen signal. Where Am I fungerer uden forbindelse — vigtige data er gemt på din enhed.',
    'features.trip.title': 'Turlog',
    'features.trip.body': 'Optag dine ture med live-speedometer, realtids distancetæller og GPS-sporing. Al turhistorik gemmes lokalt — uploades aldrig.',
    'features.ui.title': 'Rent, rytterfokuseret interface',
    'features.ui.body': 'Ingen annoncer. Ingen rod. Kun den information du har brug for — overskuelig og hurtig, designet til bikers på farten.',
    'screenshots.label': 'App-forhåndsvisning',
    'screenshots.h2': 'Se den i <span class="text-gold">aktion</span>',
    'screenshots.sub': 'Et rent, fokuseret interface designet til ryttere på vejen.',
    'screenshots.view_all': 'Se alle skærmbilleder →',
    'about.label': 'Om appen',
    'about.h2': 'Hvad er <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I er en motorcykel-ledsagerapp bygget til at hjælpe ryttere med at forblive sikre, informerede og forberedte — uanset om du rejser i et nyt land eller navigerer på afsides veje.',
    'about.body2': 'Den kombinerer realtidsvejr, Rider HQ-dashboard, madestopp, overnatningsmuligheder, seværdigheder, garagetjenester, turlog og SOS-nødværktøjer i én problemfri oplevelse.',
    'about.caption': 'Bygget til pålidelighed. Designet til enkelhed. Klar til din næste tur.',
    'about.learn_more': 'Lær mere om Where Am I →',
    'waitlist.label': 'Hold dig opdateret',
    'waitlist.h2': 'Bliv notificeret <span class="text-gold">ved lancering</span>',
    'waitlist.body': 'Efterlad din email, og vi giver dig besked i det øjeblik Where Am I officielt lanceres — ingen spam, kun det vigtige.',
    'waitlist.cta': 'Giv mig besked',
    'waitlist.no_spam': 'Ingen spam. Afmeld når som helst.',
    'waitlist.already': 'Allerede på Android? Prøv den åbne beta nu:',
    'waitlist.play': 'Hent på Google Play',
    'support.label': 'Support',
    'support.h2': 'Vi er her for at <span class="text-gold">hjælpe</span>',
    'support.sub': 'Har du et spørgsmål eller brug for hjælp? Kontakt os når som helst.',
    'support.view_all': 'Se alle supportmuligheder →',
    'support.faq_title': 'Ofte stillede spørgsmål',
    'support.faq1.q': 'Hvordan ændrer jeg sproget?',
    'support.faq1.a': 'Åbn appens indstillingsmenu og vælg dit foretrukne sprog. Where Am I understøtter engelsk, spansk, tysk, fransk, islandsk, norsk, svensk, dansk og hollandsk — og husker dit valg.',
    'support.faq2.q': 'Hvorfor ser jeg ikke visse interessepunkter?',
    'support.faq2.a': 'POI\'er opdateres automatisk, når din enhed har forbindelse. I områder med begrænset dækning kan nogle POI\'er ikke være synlige, før appen synkroniserer. Prøv at opdatere, når du får forbindelse igen.',
    'support.faq3.q': 'Fungerer appen offline?',
    'support.faq3.a': 'Ja. Where Am I er designet til at fungere med begrænset eller ingen forbindelse. Kernefunktioner — herunder nødværktøjer og tidligere gemt lokal info — er tilgængelige offline.',
    'support.faq4.q': 'Hvor ofte opdateres appen?',
    'support.faq4.a': 'Appen søger automatisk efter nyt indhold og forbedringer i baggrunden. Du behøver ikke at udløse opdateringer manuelt — appen håndterer det for dig, når en forbindelse er tilgængelig.',
    'privacy.label': 'Privatliv',
    'privacy.h2': 'Dit privatliv <span class="text-gold">betyder noget</span>',
    'privacy.body1': 'Where Am I indsamler ikke personlige data, sporer ikke din identitet og deler ikke information med tredjeparter.',
    'privacy.body2': 'Appen behandler kun de minimale data, der kræves for at fungere, såsom sprogindstillinger og gemt indhold.',
    'privacy.cta': 'Læs den fulde privatlivspolitik →',
    'footer.copy': '© 2026 SassaGold Studios. Alle rettigheder forbeholdes.',
    'lang.panel_title': '🌐 SPROG'
  },
  nl: {
    'nav.features': 'Functies',
    'nav.screenshots': 'Schermafbeeldingen',
    'nav.about': 'Over',
    'nav.support': 'Ondersteuning',
    'nav.join_beta': 'Beta deelnemen',
    'nav.get_notified': 'Meld mij aan',
    'nav.join_beta_mobile': 'Beta deelnemen →',
    'nav.get_notified_mobile': 'Meld mij aan →',
    'hero.badge': 'Nu in Beta · Android',
    'hero.headline': 'Jouw slimme<br />rijcompagnon —<br /><span class="text-gold">Where Am I</span>',
    'hero.sub': 'Verken. Rijd. Ontdek. Live weer, biker-POI\'s, ritregistratie en SOS-tools — gebouwd voor motorrijders, in één overzichtelijke app.',
    'hero.cta_play': 'Doe mee aan de beta op Google Play',
    'hero.cta_beta': 'Hoe deel je mee aan de beta',
    'hero.badge_bottom': 'Nu in Beta op Android',
    'features.label': 'Belangrijkste functies',
    'features.h2': 'Alles wat je nodig hebt,<br /><span class="text-gold">niets wat je niet nodig hebt</span>',
    'features.sub': 'Gebouwd voor de weg. Ontworpen voor rijders.',
    'features.view_all': 'Alle functies bekijken →',
    'features.poi.title': 'Bikervriendelijke POI\'s',
    'features.poi.body': 'Vind tankstations, motorwerkplaatsen, rustplaatsen en bikercafés in de buurt — met duidelijke, leesbare details.',
    'features.emergency.title': 'Noodtools',
    'features.emergency.body': 'Snelle toegang tot noodnummers, wegenwacht-contacten en locatiebewuste informatie wanneer je het het meest nodig hebt.',
    'features.languages.title': '9 Talen',
    'features.languages.body': 'Volledig interface in het Engels, Spaans, Duits, Frans, IJslands, Noors, Zweeds, Deens en Nederlands. Schakel direct — voor altijd onthouden.',
    'features.offline.title': 'Offline-vriendelijk',
    'features.offline.body': 'Afgelegen routes hebben vaak geen signaal. Where Am I werkt zonder verbinding — essentiële data wordt gecached op jouw apparaat.',
    'features.trip.title': 'Ritregistratie',
    'features.trip.body': 'Registreer jouw ritten met een live snelheidsmeter, realtime afstandsteller en GPS-routetracking. Alle ritgeschiedenis wordt lokaal opgeslagen — nooit geüpload.',
    'features.ui.title': 'Overzichtelijk, rijdersgericht UI',
    'features.ui.body': 'Geen advertenties. Geen rommel. Alleen de informatie die je nodig hebt — snel leesbaar en snel, ontworpen voor bikers onderweg.',
    'screenshots.label': 'App-voorbeeld',
    'screenshots.h2': 'Bekijk het in <span class="text-gold">actie</span>',
    'screenshots.sub': 'Een overzichtelijk, gefocust interface ontworpen voor rijders op de weg.',
    'screenshots.view_all': 'Alle schermafbeeldingen bekijken →',
    'about.label': 'Over de App',
    'about.h2': 'Wat is <span class="text-gold">Where Am I</span>?',
    'about.body1': 'Where Am I is een motorfiets-gezelschapsapp gebouwd om rijders veilig, geïnformeerd en voorbereid te houden — of je nu een nieuw land doorkruist of afgelegen wegen navigeert.',
    'about.body2': 'Het combineert live weer, Rider HQ-dashboard, eetstoppen, slaapplaatsen, bezienswaardigheden, garagediensten, ritregistratie en SOS-noodtools in één naadloze ervaring.',
    'about.caption': 'Gebouwd voor betrouwbaarheid. Ontworpen voor eenvoud. Klaar voor jouw volgende rit.',
    'about.learn_more': 'Meer leren over Where Am I →',
    'waitlist.label': 'Blijf op de hoogte',
    'waitlist.h2': 'Word gewaarschuwd <span class="text-gold">bij lancering</span>',
    'waitlist.body': 'Laat je e-mail achter en we laten je weten zodra Where Am I officieel wordt gelanceerd — geen spam, alleen het belangrijkste.',
    'waitlist.cta': 'Meld mij aan',
    'waitlist.no_spam': 'Geen spam. Meld je altijd af.',
    'waitlist.already': 'Al op Android? Probeer nu de open beta:',
    'waitlist.play': 'Download op Google Play',
    'support.label': 'Ondersteuning',
    'support.h2': 'We zijn hier om te <span class="text-gold">helpen</span>',
    'support.sub': 'Heb je een vraag of hulp nodig? Neem altijd contact op.',
    'support.view_all': 'Alle ondersteuningsopties bekijken →',
    'support.faq_title': 'Veelgestelde vragen',
    'support.faq1.q': 'Hoe verander ik de taal?',
    'support.faq1.a': 'Open het instellingenmenu van de app en selecteer je voorkeurstaal. Where Am I ondersteunt Engels, Spaans, Duits, Frans, IJslands, Noors, Zweeds, Deens en Nederlands — en onthoudt je keuze.',
    'support.faq2.q': 'Waarom zie ik bepaalde interessante plaatsen niet?',
    'support.faq2.a': 'POI\'s worden automatisch bijgewerkt wanneer je apparaat verbinding heeft. In gebieden met beperkte dekking zijn sommige POI\'s mogelijk niet zichtbaar totdat de app synchroniseert. Probeer te vernieuwen wanneer je weer verbinding hebt.',
    'support.faq3.q': 'Werkt de app offline?',
    'support.faq3.a': 'Ja. Where Am I is ontworpen om te werken met beperkte of geen verbinding. Kernfuncties — inclusief noodtools en eerder gecachede lokale informatie — zijn offline beschikbaar.',
    'support.faq4.q': 'Hoe vaak wordt de app bijgewerkt?',
    'support.faq4.a': 'De app zoekt automatisch naar nieuwe inhoud en verbeteringen op de achtergrond. Je hoeft geen updates handmatig te activeren — de app regelt dat voor je wanneer een verbinding beschikbaar is.',
    'privacy.label': 'Privacy',
    'privacy.h2': 'Jouw privacy <span class="text-gold">telt</span>',
    'privacy.body1': 'Where Am I verzamelt geen persoonlijke gegevens, volgt jouw identiteit niet en deelt geen informatie met derden.',
    'privacy.body2': 'De app verwerkt alleen de minimale gegevens die nodig zijn om te functioneren, zoals taalinstellingen en gecachede inhoud.',
    'privacy.cta': 'Lees het volledige privacybeleid →',
    'footer.copy': '© 2026 SassaGold Studios. Alle rechten voorbehouden.',
    'lang.panel_title': '🌐 TAAL'
  }
};


/* ── Theme (dark / light) ──────────────────────────────────────────────────── */
(function () {
  var THEME_STORAGE_KEY = 'sg-theme';

  function getPreferred() {
    var saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    /* Update every toggle button on the page */
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var sunIcon  = btn.querySelector('.icon-sun');
      var moonIcon = btn.querySelector('.icon-moon');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      sunIcon.style.display  = theme === 'dark'  ? 'block' : 'none';
      moonIcon.style.display = theme === 'light' ? 'block' : 'none';
    });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getPreferred());
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();

/* ── Mobile nav ────────────────────────────────────────────────────────────── */
(function () {
  function closeNav(nav) {
    var menu = nav.querySelector('.mobile-menu');
    var btn  = nav.querySelector('.nav-hamburger');
    if (menu) menu.classList.remove('open');
    if (btn)  btn.classList.remove('open');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;

    // Toggle open/close when the hamburger is clicked
    var hamburger = nav.querySelector('.nav-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        var menu = nav.querySelector('.mobile-menu');
        if (!menu) return;
        var isOpen = menu.classList.contains('open');
        if (isOpen) {
          closeNav(nav);
        } else {
          menu.classList.add('open');
          hamburger.classList.add('open');
        }
      });
    }

    // Close when a mobile menu link is clicked
    nav.querySelectorAll('.mobile-menu-link').forEach(function (link) {
      link.addEventListener('click', function () { closeNav(nav); });
    });

    // Close when clicking outside the nav
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeNav(nav);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav(nav);
    });
  });
})();

/* ── Language panel ─────────────────────────────────────────────────────────── */
(function () {
  var LANG_KEY = 'sg-lang';

  function getSavedLang() {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved && SG_I18N[saved]) return saved;
    return 'en';
  }

  function t(lang, key) {
    var dict = SG_I18N[lang] || SG_I18N['en'];
    return (dict && dict[key] !== undefined) ? dict[key] : (SG_I18N['en'][key] || key);
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.textContent = t(lang, key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(lang, key);
    });
    /* update <html lang> attribute */
    document.documentElement.setAttribute('lang', lang === 'sv' ? 'sv' : lang === 'da' ? 'da' : lang === 'no' ? 'no' : lang);
    /* update active state on lang buttons */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    /* update panel title */
    var title = document.querySelector('.lang-panel-title');
    if (title) title.textContent = t(lang, 'lang.panel_title');
  }

  function buildPanel() {
    /* overlay */
    var overlay = document.createElement('div');
    overlay.className = 'lang-overlay';
    overlay.id = 'lang-overlay';

    /* panel */
    var panel = document.createElement('div');
    panel.className = 'lang-panel';
    panel.id = 'lang-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Language selection');

    /* header */
    var header = document.createElement('div');
    header.className = 'lang-panel-header';
    var titleEl = document.createElement('span');
    titleEl.className = 'lang-panel-title';
    titleEl.textContent = t(getSavedLang(), 'lang.panel_title');
    var closeBtn = document.createElement('button');
    closeBtn.className = 'lang-panel-close';
    closeBtn.setAttribute('aria-label', 'Close language panel');
    closeBtn.textContent = '✕';
    header.appendChild(titleEl);
    header.appendChild(closeBtn);

    /* list */
    var list = document.createElement('div');
    list.className = 'lang-panel-list';

    var currentLang = getSavedLang();
    SG_LANGS.forEach(function (lang) {
      var btn = document.createElement('button');
      btn.className = 'lang-btn' + (lang.code === currentLang ? ' active' : '');
      btn.dataset.lang = lang.code;
      btn.setAttribute('aria-label', lang.label);

      var flag = document.createElement('span');
      flag.className = 'lang-btn-flag';
      flag.textContent = lang.flag;

      var country = document.createElement('span');
      country.className = 'lang-btn-country';
      country.textContent = lang.country;

      var name = document.createElement('span');
      name.className = 'lang-btn-name';
      name.textContent = lang.label;

      btn.appendChild(flag);
      btn.appendChild(country);
      btn.appendChild(name);
      list.appendChild(btn);
    });

    panel.appendChild(header);
    panel.appendChild(list);
    document.body.appendChild(overlay);
    document.body.appendChild(panel);
    return { panel: panel, overlay: overlay, closeBtn: closeBtn, list: list };
  }

  function openPanel(panel, overlay) {
    panel.classList.add('open');
    overlay.classList.add('open');
    panel.querySelector('.lang-panel-close').focus();
  }

  function closePanel(panel, overlay) {
    panel.classList.remove('open');
    overlay.classList.remove('open');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var els = buildPanel();
    var currentLang = getSavedLang();

    /* apply saved language on page load */
    applyTranslations(currentLang);

    /* wire up toggle button(s) in nav */
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = els.panel.classList.contains('open');
        if (isOpen) {
          closePanel(els.panel, els.overlay);
        } else {
          openPanel(els.panel, els.overlay);
        }
      });
    });

    /* close button inside panel */
    els.closeBtn.addEventListener('click', function () {
      closePanel(els.panel, els.overlay);
    });

    /* overlay click */
    els.overlay.addEventListener('click', function () {
      closePanel(els.panel, els.overlay);
    });

    /* language selection */
    els.list.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (!btn) return;
      var lang = btn.dataset.lang;
      localStorage.setItem(LANG_KEY, lang);
      applyTranslations(lang);
      closePanel(els.panel, els.overlay);
    });

    /* escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel(els.panel, els.overlay);
    });
  });
})();
