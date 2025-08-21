import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Links from '../assets/Data/Links.json';
const Location = () => {
    return (
        <div className="content-center w-full backfround-flowers">
            <div className="extra-margin-y c-black location-container ">
                <div className='location-container-top-bottom '>
                    <div className=' o-b-color'></div>
                    <div className='right o-b-color'></div>
                </div>
                <div className='location-container-middle o-b-color'></div>
                <div className='location-container-top-bottom '>
                    <div className='left o-b-color'></div>
                    <div className='o-b-color'></div>
                </div>

                <div className='location-content-container content-center'>
                    <div className='f-size-title  f-parisinne'>Ubicación</div>

                    <div className='f-montserrat d-flex flex-column align-center'>
                        <span className='f-size-text f-montserrat'><strong>Recepción</strong></span>
                        <span className='f-size-text f-montserrat'>02:30 PM</span>
                        <div  className='local-image pic-local' style={{borderRadius: 400 / 2}} />
                        <span className='f-size-text f-montserrat extra-vertical-margin-location'><strong>HUERTO DE LOS OLIVOS</strong></span>
                        <span className='f-size-text-small '>Calle Cochabamba, Tiquipaya, Cochabamba</span>
                        <a href={Links['Reception-Link']} target='_blank' rel='noreferrer' className='extra-vertical-margin-location'>
                            <button className='container-row button orange' style={{gap: '15px'}}>
                                <div style={{width: '16px', height:'16px', alignItems: 'baseline'}}>
                                    <FontAwesomeIcon icon={faLocationDot} style={{color: "white", blockSize: "auto",}} />
                                </div>
                                <span style={{color: "white"}}> Ubicación</span>
                            </button>
                        </a>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Location