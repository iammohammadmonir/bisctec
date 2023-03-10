import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
const About = () => {
  return (
    <section id='about' className='section-padding'>
      <div className='container'>
        <div className='heading text-center mb-50'>
          <h6>some Words</h6>
          <h2>Über uns</h2>
        </div>
        <div className='row mb-30'>
          <div className='col-lg-6'>
            <div>
              <p>
                Wir sind ein Anlagenbau-Unternehmen, spezialisiert auf das
                Engineering von LED-Screens und komplexen mechatronischen
                Systemen. Wir bieten kundenspezifische Auftrags-Fertigung und
                maßgeschneiderte VideoScreens an, weil wir verstanden haben,
                dass es kein „one-fits-all“ geben kann. Ein Traktor passt nicht
                um die Kinder in die Schule zu bringen, und ein Sportwagen taugt
                nichts am Acker, und genauso ist es auch bei LED VideoScreens:
                Ein Outdoor Stadion-Screen XXL ist in der Hotel-Lobby einfach
                nicht passend.
              </p>
              <p>
                Wir managen im internationalen Handel sehr professionell
                verschiedene spezialisierte Unternehmen weltweit samt dem
                dazugehörigen, integrierten Risk-Management. Wir bieten weiters
                im Rahmen von After-Sales-Service und Retrofit bzw.
                Anlagen-Upgrades, auch den Vertrieb von Komponenten, Baugruppen
                und Komplettsystemen für LED Videowalls und Großbildschirme.
              </p>
              <p>
                Unser Ziel und Anspruch ist es die besten VideoScreens, zu
                günstigen Preisen für unsere Kunden anbieten zu können. Billige
                Screens verkaufen wir nicht, weil wir lieber wollen, dass der
                Kunde wiederkommt, und nicht unsere Ware. Das ist unsere
                Leidenschaft und Verantwortung.
              </p>
              <p>
                Eine Investition ist dann wirklich günstig, wenn die
                Gesamtkostenrechnung stimmt, also die „Total Costs of Ownership“
                . Auch da bieten wir Ihnen unsere Expertise an. In einer
                Amortisations-Rechnung, stellt sich nicht nur die Frage: was
                etwas kostet, denn viel interessanter ist die Antwort auf: Was
                kostet es, und vor allem, was bringt es!!! Und auf die oft
                gestellte Frage, was denn ein LED Videoscreen kostet, antworten
                wir gerne mit der Gegenfrage: Was kostet denn ein Stück Auto?
                Meinen Sie einen alten Traktor, eine praktische Familienkutsche,
                einen roten Sportwagen oder gar eine royale Luxus-Limosine?
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <Video
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              poster='https://res.cloudinary.com/dfvwoddhr/image/upload/v1678107924/bisctec/about-us_wperyk.jpg'
              onCanPlayThrough={() => {
                // Do stuff
              }}
            >
              <source
                src='https://res.cloudinary.com/dfvwoddhr/video/upload/v1678107938/bisctec/about_wsd7dy.mp4'
                type='video/mp4'
              />
            </Video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
