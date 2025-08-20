import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Links from '../assets/Data/Links.json';
const RSVP = () => {
    return (
        <div className='w-full b-b-color'>
            <div className="f-size-title title-center f-parisinne">
                <span>Confirmación </span> 
                <span>de Asistencia</span>
            </div>
            <div className='content-center'>
                <span className='f-size-125 f-montserrat' style={{margin:"0px 15px 15px 15px"}}> Por favor confirmar asistencia hasta el 30º de Agosto del 2025</span>
            </div>
            <div className="container-row content-center h-50-p">
                <a href={Links['Whatsapp-link-Bride']} target='_blank' rel='noreferrer' style={{margin: '0px 0px 40px 0px'}}>
                    
                    <button className='container-row button blue' style={{gap: '15px'}}>
                    <div style={{width: '25px', height:'25px'}}>
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: "white", blockSize: "auto",}} />
                        </div>
                        <span>Novia</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default RSVP;