const servicesData = [
  {
    id: 1,
    title: 'Statisches Trägersystem',
    content: `Gesamt-Rahmen Stahlbau, ggf. Fundamentierung, zu berücksichtigen: Windlast, Untergrund. Anforderungen: witterungsbeständig, schön, gut integriert, kostengünstig, wartungsfreundlich, modular… Dieser Bauteil wird in der Regel bei lokalen Unternehmen Ihres Vertrauens in Auftrag gegeben.`,
  },
  {
    id: 2,
    title: 'LED-Panel',
    content:
      'Das kann als einzelner Baustein des eigentlichen LED-Screens verstanden werden. Je nach Anwendungsfall können die sehr unterschiedliche Größen haben. Typisch für outdoor sind z.B. 500x1000mm oder 1280x960mm. Es gibt sie in sehr unterschiedlichen Größen und Ausführungen. Ihre Größe wird fundamental bestimmt als Vielfaches eines Moduls. Oft ist der statische Grundrahmen des LED-Panels ein CNC gefräster Gusskörper aus Al/Mg-Legierungen, auf den alle übrigen Teile montiert werden. Dieser hat auch Verriegelungs- und Allignment-System um mehrere Panele zu einem größeren Screen zusammen zu hängen. Die Montage-Schnittstelle zum Stahlbau wird mit HeliCoils verstärkt, damit auch bei Sturm nichts ausreißt',
  },
  {
    id: 3,
    title: 'Kontrollsystem',
    content:
      'Diese stammt in der Regel von spezialisierten Technologie-Firmen. Es besteht immer aus: Anschluss Datenquelle = Video-Signal, ggf. einem VideoProzessor oder Scaler, jedenfalls einem Signalwandler = SendingCard und einem seriellen proprietären Feld-Bussystem, das eine Mehrzahl an Receiving Cards mit Daten versorgt. Das VideoSignal wird in der SendingCard in eine zu parametrierende Anzahl und geometrische Anordnung von Bildausschnitten zerlegt, und per Bus an alle ReceivingCards geschickt. Jede Receiving Card nimmt sich wiederum genau jene Bilddaten heraus, die für sie richtig sind. Diese Bilddaten, auf einzelner Pixel-Basis, werden dann an die Leistungselektronik der einzelnen Cabinets/Module übergeben',
  },
  {
    id: 4,
    title: 'Power und Kontroll-Box',
    content: `die ist oft modular wechselbar, was Reparaturen sehr vereinfacht und man diese in wenigen Minuten erledigen kann. An der Power- und Kontroll-Box befindet sich auch Ein- und Ausgang von Datenleitung und Stromversorgung. Die Power- und Kontroll-Box hat wasserdichte Steckersysteme, und muss auch für ausreichend Kühlung sorgen. In der Power- und Kontroll-Box befindet sich neben den Schaltnetzteilen auch die ReceivingCards des Kontrollsystems, das über integrierte Hubboards die Daten und Leistungsströme an die einzelnen Module verteilt.`,
    list: [
      {
        id: 1,
        listItem: 'Stromversorgung, Schaltnetzteile,',
      },
      {
        id: 2,
        listItem:
          'Hub-Board als Schnittstelle und Leistungsübertragung zu den einzelnen Modulen',
      },
      {
        id: 3,
        listItem: 'Receiving Cards je Panel zur Signalwandlung',
      },
      {
        id: 4,
        listItem:
          'Getrennte Stecker-Systeme (IP65) für Datenleitungen und Stromversorgung',
      },
    ],
  },
  {
    id: 5,
    title: 'LED Module',
    content: `sind die kleinste Elektronik-Einheit und das eigentliche Kernstück von LED VideoWalls. Ein LED-Modul ist eine einzelne Leiterplatte mit Bestückung (=Stückliste)`,
    list: [
      {
        id: 1,
        listItem: 'Leiterplatte',
      },
      {
        id: 2,
        listItem: 'Leistungselektronik mit Hochleistungs-Chips,,',
      },
      {
        id: 3,
        listItem: 'den eigentlichen LEDs',
      },
      {
        id: 4,
        listItem: 'Modul-Gehäuse als gemeinsamer Montagerahmen',
      },
      {
        id: 5,
        listItem: 'Steckersysteme für Daten- und Leistungsströme',
      },
      {
        id: 6,
        listItem: 'Wasserdichte Versiegelung auf der Vorderseite',
      },
      {
        id: 7,
        listItem: 'Maske zum Schutz der LEDs und zur Erhöhung vom Kontrast',
      },
    ],
  },
  {
    id: 6,
    title: 'LED Screen interne Verkabelung',
    content: `Besteht aus dem Leistungsstrom-Netz (400VAC / 230VAC 50Hz) und seriellen Daten-Leitungen (LAN-Kabel) das betrifft die Zuleitung vom Haupt-Schaltschrank zum Zwischenklemmkasten und die Interconnecting-Kabel zwischen den LED-Cabinets und ihren Power- und Kontroll-Boxen`,
  },
];

export default servicesData;
