import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import DestinyCard from "./components/DestinyCard";
import { destinies } from "./constants/data";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { timon, interior1, interior2, flota, volcanoIcon, x, whatsapp, instagram, facebook } from "./constants/images";
import { busesFeatures, services, bundles } from "./constants/data";
import ServiceCard from "./components/ServiceCard";

function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },
    [
      Autoplay({ playOnInit: true, delay: 5000 })
    ]
  );
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);


  return (
    <div className="App">
        <Header />
        <div className="section-container" id="destinos">
          <h2>DESTINOS</h2>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {
                    destinies.map(( destiny, index ) => (
                      <div className="embla__slide" key={index}>
                        <DestinyCard
                          title={destiny.title}
                          description={destiny.description}
                          photo={destiny.photo}
                        />
                      </div>
                      
                    ))
                  }
                </div>
            </div>
            <div className="controls-container">
              <button className="control-button" onClick={scrollPrev} disabled={prevDisabled}>
                ←
              </button>
              <button className="control-button" onClick={scrollNext} disabled={nextDisabled}>
                →
              </button>
            </div>
          </div>
        </div>
        <div className="section-container" id="buses" style={{ backgroundColor: '#2b2726', color: "#fff", fontSize: '18px' }}>
            <h2>NUESTROS BUSES</h2>
            <div className="gallery">
                <img src={flota} alt="flota"/>
                <img src={interior1} alt="interior1" />
                <img src={interior2} alt="interior2" />
                <img src={timon} alt="timon" />
            </div>
            <div className="buses-description">
                <p>
                  En VolcanoExpress nos enorgullece contar con una flota de autobuses modernos, diseñados especialmente para brindarte una experiencia de viaje cómoda, segura y placentera.
                  Nuestros buses están sometidos a rigurosas inspecciones técnicas y protocolos de mantenimiento preventivo, garantizando máximos estándares de seguridad en carretera. Todos nuestros conductores están altamente capacitados y comprometidos con el bienestar de nuestros pasajeros.
🚍                Viajar con VolcanoExpress no es solo trasladarte de un punto a otro, es disfrutar del trayecto con total tranquilidad.
                </p>
                <ul className="description-list">
                  {
                    busesFeatures.map((feature, i) => (
                      <li><img src={volcanoIcon} alt={`icon${i}`} /><p>{feature}</p></li>
                    ))
                  }
                </ul>
            </div>
        </div>
        <div className="section-container" id="servicios">
            <h2>
              Servicios
            </h2>
            <div>
              <h3>Tipos de servicios de viaje</h3>
              <div className="services-container">
                {
                  services.map((service) => (
                    <ServiceCard
                      title={service.title}
                      type={service.type}
                      features={service.features}  
                    />
                    ))
                }
              </div>
            </div>

            <div>
              <h3>Paquetes</h3>
              <div className="bundles-container">
                {
                  bundles.map((bundle) => (
                    <ServiceCard
                      title={bundle.title}
                      description={bundle.description}
                      features={bundle.features}
                      type={bundle.type}
                    />
                    ))
                }
              </div>
            </div>
        </div>
        <footer className="footer-container">
                <p style={{ flex: '1', textAlign: 'center' }}>&copy; VolcanoExpress</p>
                <div className="social-media">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={x} alt="x" />
                    <img src={whatsapp} alt="whatsapp" />
                </div>
        </footer>
    </div>
  );
}

export default App;
