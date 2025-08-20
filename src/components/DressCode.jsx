import FormalDress from '../assets/Pictures/Formal-dress.svg'
import FormalSuit from '../assets/Pictures/Formal-suit.svg'

const DressCode = () => {
    return (
        <div className=' w-full c-black b-c-white'>
            <div className="f-size-title title-center f-parisinne">
            <span className=" ">Código de Vestimenta</span>
            </div>
            <div className="container-row content-center ">

                <div className='div-suit-dress'>
                    <img src={FormalSuit} className="size-suit" alt="Dress" />
                </div>
                <div className='div-suit-dress'>
                    <img src={FormalDress} className="size-dress" alt="Dress" />
                </div>
            </div>
            <div className='title-center'>
                <span className='f-size-text f-josefinslab'>Formal</span>
            </div>
        </div>
    );
};

export default DressCode;