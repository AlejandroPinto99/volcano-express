import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import DestinyCard from "./components/DestinyCard";
import { destinies } from "./constants/data";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

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
        <div className="destinies" id="destinos">
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
        <div className="" id="buses">
            <h2>Nuestros Buses</h2>
            <div className="gallery">

            </div>
        </div>
    </div>
  );
}

export default App;
