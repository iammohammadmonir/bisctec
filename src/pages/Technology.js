import PageHero from '../components/PageHero';
import LedImg from '../assets/img/led.jpg';
import DragramImg from '../assets/img/dragram.png';
const Technology = () => {
  return (
    <div>
      <PageHero title='Technologie' />
      <section className='padding-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <p>
                Wie arbeiten wir und warum? Wir haben über 40 Herstellerwerke in
                Fernost besucht und eingehend auditiert: von der
                Engineering-Abteilung, der kompletten Fertigungskette, beginnend
                beim Einkauf und der Auswahl ihrer Unterlieferanten, der
                eigentlichen Fertigung, der Fertigungstiefe, den Maschinen der
                Prozesskette, den jeweiligen Qualitäts-Prüfungen an
                verschiedenen Schritten, der Qualifikation der Mitarbeiter, dem
                Assembly und dem Dauer-Test vor der Abnahme von zumindest 48
                Stunden bei hoher Leistung. Sehr oft machen wir eine
                Pre-Shipment-Inspection, damit wirklich genau das geliefert
                wird, was wir spezifiziert und bestellt haben.
              </p>
              <p>
                Analyse am Beispiel einer scheinbar banalen Komponente: einer
                einzelnen RGB-LED
              </p>
              <img
                className='img-fluid rounded py-20'
                src={DragramImg}
                alt='Led Img'
              />
            </div>
            <div className='col-lg-4'>
              <img className='img-fluid rounded' src={LedImg} alt='Led Img' />
              <p className='text-center py-20'>Das Innere einer RGB-LED</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <p>
                Wie arbeiten wir und warum? Wir haben über 40 Herstellerwerke in
                Fernost besucht und eingehend auditiert: von der
                Engineering-Abteilung, der kompletten Fertigungskette, beginnend
                beim Einkauf und der Auswahl ihrer Unterlieferanten, der
                eigentlichen Fertigung, der Fertigungstiefe, den Maschinen der
                Prozesskette, den jeweiligen Qualitäts-Prüfungen an
                verschiedenen Schritten, der Qualifikation der Mitarbeiter, dem
                Assembly und dem Dauer-Test vor der Abnahme von zumindest 48
                Stunden bei hoher Leistung. Sehr oft machen wir eine
                Pre-Shipment-Inspection, damit wirklich genau das geliefert
                wird, was wir spezifiziert und bestellt haben. Analyse am
                Beispiel einer scheinbar banalen Komponente: einer einzelnen
                RGB-LED Das Innere einer RGB-LED Diese LED besteht aus einer
                Trägerplatte, die auch gleich die Kathode und Reflektor ist. In
                dieser werden die Halbleiter-Kristalle eingelötet. In unserem
                Fall 3 Stück verschiedene Kristalle in rot, grün und blau. Die
                Kristalle sind winzig klein. Die meisten LEDs, die wir in
                unseren Screens verwenden sind noch kleiner: 2x2mm groß. Die
                hier abgebildete LED ist 2,7×2,8mm groß. Der Größenvergleich der
                Kristalle zur LED Größe ist in etwa maßstäblich. Zusammen mit
                der Trägerplatte (Kathoden) werden auch die einzelnen
                Anoden-Füßchen in einem langzeitstabilen und
                temperaturbeständigen Polymer vergossen
              </p>
              <p>
                Im Folgenden, ein kurzes Video wie diese mini-Kristalle in die
                Trägerplatte bestückt werden.
              </p>
            </div>
            <div className='col-lg-6'>video</div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>video</div>
            <div className='col-lg-6'>
              In einem weiteren Schritt werden die Kristalle in Ihre Kathode
              gelötet. Danach wird die Kristall-Oberseite über einen
              Bonding-Draht kontaktiert und leitend mit den Anoden verbunden.
              Der verwendete Bonding-Draht ist dabei oft kaum 15 µm dick. (1
              µm=1/1000mm) Zum Vergleich, ein menschliches Haar hat eine Dicke
              von 80 µm.
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>
                Bei einfacheren LED-Qualitäten ist der Bonding-Draht aus einer
                Kupferlegierung. Bei hochwertigen LED wird
                24Karat-goldbonding-Draht verwendet. (Vorsicht, die Info, dass
                Gold verwendet wurde, bedeutet noch nicht, dass die LED Qualität
                hoch ist, außerdem kann das kein Kunde jemals nachprüfen)
              </p>
              <p>
                Nach dem Kontaktieren wird die LED mit einem speziellem
                Epoxy-Harz vergossen, das kaum Schrumpfung oder Yellowing auch
                nach vielen Jahren und extremen Temperaturbedingungen hat.
                Obwohl hochwertige Polymere eine bessere Barriere-Eigenschaften
                für z.B. O2 haben, korrodieren die Kupfer-Bonding-Drähte mit der
                Zeit und Degradieren die LED und ihre Leistung.
              </p>
              <p>
                Hochwertige LEDs werden bei namhaften Herstellern alle und
                einzeln nach der Herstellung geprüft und vermessen. Jeder
                Kristall jeder LED wird nach Stromaufnahme und Lichtemission
                kategorisiert und die LED selbst nach resultierender Lichtfarbe
                und Leistungsfähigkeit sortiert. Das können 11×11 Bins
                (Kübelchen) sein. (Bild anbei)
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>img</div>
            <div className='col-lg-6'>img</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
