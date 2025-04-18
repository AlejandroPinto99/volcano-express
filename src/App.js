import { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import DestinyCard from "./components/DestinyCard";
import { destinies } from "./constants/data";
import useEmblaCarousel from 'embla-carousel-react'


function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
        <div className="destinies" id="destinies">
          <h2>Destinos</h2>
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
            <button className="embla__prev" onClick={scrollPrev} disabled={prevDisabled}>
              ←
            </button>
            <button className="embla__next" onClick={scrollNext} disabled={nextDisabled}>
              →
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
