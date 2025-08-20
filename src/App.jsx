import { useState, useEffect, useRef } from 'react'
//styles
import './App.scss'
// import './styles/Colors.scss'
// import './styles/ImagesBackground.scss'


import Location from './components/Location';
import Itinerary from './components/Itinerary';
import Separator from './components/Separetor';
import Godparents from './components/Godparents';
import RSVP from './components/RSVP';
import DressCode from './components/DressCode'
import Hashtag from './components/Hashtag'
import Presents from './components/Presents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Info from './assets/Data/Info.json';

function App() {

  const [secondsLeft, setSecondsLeft] = useState('00');
  const [minutesLeft, setMinutesLeft] = useState('00');
  const [hoursLeft, setHoursLeft] = useState('00');
  const [daysLeft, setDaysLeft] = useState('00');

  let interval = useRef();
  const weddingDate = new Date(Info['wedding-date']);
  const weddingDay = weddingDate.getDate();
  let weddingMonth = weddingDate.getMonth();
  const weddingYear = weddingDate.getFullYear();

  const starTimer = () => {


    const countdownDate = new Date(Info['wedding-date']).getTime();
    
    interval = setInterval(() => {
      const now = new Date()
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / (1000));

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        //update timer
        setSecondsLeft(seconds);
        setMinutesLeft(minutes);
        setHoursLeft(hours);
        setDaysLeft(days);
      }

    }, 1000);
  }
  
  // componentDidMount
  useEffect(() => {
    starTimer();
    return () => {

    };
  })

  // const rectStyle = {
  //   transform: 'scaleX(-1)', // Flip horizontally
  //   transformOrigin: 'center', // Set the transform origin to the center
  // };

  return (
    <>

      <div className="header w-full p-b-color c-white" ><span className='header-title f-parisinne'>{Info['bride-name']} & {Info['groom-name']}</span>
        <span style={{ position: "absolute", bottom: "2px", fontSize: "11px" }}>Te invitamos a nuestra Boda</span>
      </div>
      <div style={{ height: "8vh" }}></div>
      <div className='pic-title-page w-full h-92 content-center c-white'>
        <div className='f-size-650 f-parisinne'>
          <span>{Info['bride-name']}</span><br/>
          <span>&</span><br />
          <span>{Info['groom-name']}</span>
        </div> <span style={{ position: "absolute", bottom: "35px", fontSize: "24px" }} className='f-playfair'>{weddingDay}.{weddingMonth.toString.length === 1 ? '0' + (weddingMonth+1) : (weddingMonth+1)}.{weddingYear}</span></div>



      <Separator type='flowers' color='o-b-color' message='"EVERY ONCE IN A WHILE, RIGHT IN THE MIDDLE OF AN ORDINARY LIFE, LOVE GIVES US A FAIRY TALE"'/>

      <div className='h-40 pic-countdown content-center c-white w-full'>

        <span className='f-josefinslab f-size-countdown-label'>{Info['weekDay'][weddingDate.getDay()]} {weddingDay} de {Info['month'][weddingMonth]} del {weddingYear}</span>
        <span className='f-montserrat f-size-countdown-label'>¡Nos casamos!</span>
        <div className='countdown-container f-montserrat'>
          <div className='box-countdown content-center '>
            <span className='f-size-text'>{daysLeft}</span>
            <span >Días</span>
          </div>
          <div className='box-countdown content-center'>
            <span className='f-size-text'>{hoursLeft}</span>
            <span>Hrs</span>
          </div>
          <div className='box-countdown content-center'>
            <span className='f-size-text'>
            {minutesLeft}
              </span>
            <span>Mins</span>
          </div>
          <div className='box-countdown content-center'>
            <span className='f-size-text'>
            {secondsLeft}
              </span>
            <span>Secs</span>
          </div>
        </div>
      </div>

      <Separator color='b-b-color' message=''/>
      <Itinerary/>
      <Separator color='b-b-color' message=''/>
      <Location />
     
      
      {/* <Separator color='b-b-color' message='Tu presencia es importante para nosotros, nos gustaría mucho que nos acompañaras'/> */}
      <DressCode></DressCode>

      <Presents></Presents>
      {/* <Hashtag></Hashtag> */}
      <Godparents/>

      {/* <Separator color='' message=''/> */}
      <RSVP/>
      
      <div className='pic-end-page w-full h-92 content-center c-white' style={{justifyContent: "end"}}>
      <div className='f-playfair' style={{marginBottom: "15px"}}>
          <span>Nos gustaría que nos acompañes en este día tan especial</span>
        </div>
        </div>

         
      <div className='h-12 content-center b-b-color-slice c-white w-full' style={{justifyContent:'space-evenly'}}>
        <div className='countdown-container' style={{gap: '40px'}}>
          <div style={{width: '25px', height:'25px'}}>
            <FontAwesomeIcon icon={faWhatsapp}  style={{blockSize: "auto",}} />
          </div>
          <div style={{width: '25px', height:'25px'}}>
            <FontAwesomeIcon icon={faInstagram} style={{blockSize: "auto",}} />
          </div>
          <div style={{width: '25px', height:'25px'}}>
            <FontAwesomeIcon icon={faFacebook} style={{blockSize: "auto",}} />
          </div>
        </div>
        <span className='f-quantico'>By SlicesSoft</span>
      </div>
      
    </>
  )
}

export default App