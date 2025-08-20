import completeQR from "../assets/Pictures/completeQR.jpeg";
const Presents = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = completeQR;
    link.download = "QR Boda Ale y Walter.jpg"; // file name for download
    link.click();
  };
  return (
    <div className="backfround-flowers w-full content-center ">
      <div className="suggestion-oval-container b-b-color extra-margin-y c-black">
        <div className="d-flex">
          <div className="f-size-title title-center f-parisinne">
            <span className="f-orientation-vdt">Sugerencias</span>
          </div>
          <div className="content-suggestion">
            <span className="f-size-text-small f-montserrat">
              ¡YA TENEMOS TODO LO NECESARIO PARA EL HOGAR! SI DESEAN OBSEQUIARNOS
              ALGO ADEMAS DE SU VALIOSA COMPAÑÍA , AGRADECEMOS CUALQUIER APORTE
              PARA NUESRTRA LUNA DE MIEL Y FUTUROS VIAJES
            </span>
            <div>
              <span className="f-size-text-extra-small f-josefinslab">
                Presiona el QR para descargarlo
              </span>
              <div className="qr-transaction" onClick={handleDownload}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presents;
