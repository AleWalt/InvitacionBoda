import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Itinerary = ({}) => {
  const itineraryList = [
    { time: "02:30 PM", activity: "Ceremonia Religiosa" },
    { time: "03:45 PM", activity: "Cóctel de bienvenida" },
    { time: "04:30 PM", activity: "Ceremonia civil" },
    { time: "05:00 PM", activity: "Acto central" },
    { time: "06:00 PM", activity: "Banquete" },
    { time: "07:00 PM", activity: "Tanda de baile" },
    { time: "08:30 PM", activity: "Torta" },
    { time: "09:00 PM", activity: "Tanda de baile" },
    { time: "11:00 PM", activity: "Despedida" },
  ];

  return (
    <div className="content-center w-full b-c-white  itinerary-container c-black">
      <span className="f-parisinne f-size-title">Itinerario</span>
      <div className="itinerary-list-container f-size-125 f-montserrat">
        <FontAwesomeIcon icon={faHeart} className="circleIcon p-color-500" />

        {itineraryList.map((itinerary, index) => {
          return (
            <>
              <div
                key={itinerary.time + "-" + itinerary.activity}
                className="itinerary-activity"
              >
                {index % 2 != 0 ? <div></div> : ""}
                <div>
                  <b className="time">{itinerary.time}</b>
                  <div className="activity">{itinerary.activity}</div>
                </div>
                {index % 2 == 0 ? <div></div> : ""}
              </div>
              <FontAwesomeIcon
                icon={faHeart}
                className="circleIcon p-color-500"
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Itinerary;
