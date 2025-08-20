import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
const Hashtag = () => {
    return (
        <div className='content-center pic-jardin w-full '>
            <div className="op-75  w-card-p ">
                <div className="f-size-title title-center f-parisinne">
                    <span>#BodaFaby&Lalo</span>
                </div>
                
                <div className="content-center" style={{gap: '15px'}}>
                    <span className="f-size-text f-josefinslab">Comparte con nosotros todas tus fotografías del evento, usando el siguiente #hashtag en todas tus publicaciones de Facebook e Instagram</span>
                    
                    <div className='size-camera'>
                        <FontAwesomeIcon icon={faCameraRetro} style={{color: "var(--color-900)", blockSize: "auto",}} />
                    </div>
                </div>
                {/* <FontAwesomeIcon icon={faCameraRetro} bounce style={{color: "#798ba9",}} /> */}
            </div>
        </div>
    );
};

export default Hashtag;