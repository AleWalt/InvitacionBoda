import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react'
import { faChurch, faPlaceOfWorship, faCameraRetro, faRing, faCircle} from '@fortawesome/free-solid-svg-icons'

const Godparents = () => {
    const slides = [
        <div key={1} className="slide">
            <div className="content-center">
                <div className='size-envelope'>
                    <FontAwesomeIcon icon={faChurch}  style={{color: "var(--p-color-500)", blockSize: "auto",}} />
                </div>
                <span className='f-size-text-small f-josefinslab p-color' style={{color: "var(--p-color)"}}>Religioso</span>
                <div className='godparents-container' style={{color: "var(--color-500)"}}>
                    <span className='f-size-text f-georgia' >José Eduardo Siles Antezana</span>
                    <div style={{padding:"7px"}}></div>
                    <span className='f-size-text f-georgia'>Fabiola Garnica Arredondo</span>
                </div>
            </div>
        </div>,
        <div key={2} className="slide">
            <div className="content-center">
                <div className='size-envelope'>
                    <FontAwesomeIcon icon={faPlaceOfWorship}  style={{color: "var(--color-700)", blockSize: "auto",}} />
                </div>
                <span className='f-size-text-small f-josefinslab' style={{color: "var(--color-800)"}}>Civil</span>
                <div className='godparents-container' style={{color: "var(--color-500)"}}>
                    <span className='f-size-text f-georgia' >Eduardo Garnica Arredondo</span>
                    <div style={{padding:"7px"}}></div>
                    <span className='f-size-text f-georgia'>Wendy Achata Ortuño</span>
                </div>
            </div>
        </div>,
        <div key={3} className="slide">
        <div className="content-center">
            <div className='size-envelope'>
                <FontAwesomeIcon icon={faCameraRetro}  style={{color: "var(--color-700)", blockSize: "auto",}} />
            </div>
            <span className='f-size-text-small f-josefinslab' style={{color: "var(--color-800)"}}>Fotografía</span>
            <div className='godparents-container' style={{color: "var(--color-500)"}}>
                <span className='f-size-text f-georgia' >Feranando Felix Pol Tapia</span>
                <div style={{padding:"7px"}}></div>
                <span className='f-size-text f-georgia'>Ana María Antezana Ovando</span>
            </div>
        </div>
    </div>,
    <div key={4} className="slide">
    <div className="content-center">
        <div className='size-envelope'>
            <FontAwesomeIcon icon={faRing}  style={{color: "var(--color-700)", blockSize: "auto",}} />
        </div>
        <span className='f-size-text-small f-josefinslab' style={{color: "var(--color-800)"}}>Anillos</span>
        <div className='godparents-container' style={{color: "var(--color-500)"}}>
            <span className='f-size-text f-georgia' >Osvaldo Arce Caballero</span>
            <div style={{padding:"7px 0px"}}></div>
            <span className='f-size-text f-georgia'>Marina Lucia Antezana Ovando</span>
        </div>
    </div>
</div>,
        // Add more JSX components as needed
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

        const goToNextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        const goToPrevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        };
    return (
        <div className='w-full b-c-white' style={{paddingBottom:"15px"}}>
            <div className="f-size-title title-center f-parisinne">
                <span className=" ">Padrinos</span>
            </div>
            
            <div className="w-full container-row content-center" >
                {/* <button className='b-rounded' style={{marginLeft: "5px"}} onClick={goToPrevSlide}>{"<"}</button> */}
                    {slides[currentIndex]}
                {/* <button className='b-rounded'style={{marginRight: "5px"}} onClick={goToNextSlide}>{">"}</button> */}
            </div>
            
            {/* <div className="f-size-title title-center f-parisinne">
                <span className=" ">Padrinos</span>
            </div> */}
            {/* <span className="f-parisinne color-500 ">Padrinos</span> */}
        </div>
    );
};

export default Godparents;