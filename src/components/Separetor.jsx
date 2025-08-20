import React from "react";
import BottomLeaves from './BottomLeaves';
import TopLeaves from './TopLeaves';

const Separetor = ({message, type= '', color}) => {
    var styleClass = 'content-center w-full f-playfair'
    
    styleClass = styleClass + ' ' + color;

    switch(type){
        case 'flowers':
            return (<div className={styleClass}>
                <div className='extra-margin'>
                  <TopLeaves />
                  <a className="f-size-text-separator f-montserrat">
                    {message}
                    {/* El día más importante de nuestras vidas esta cerca */}
                  </a>
                  <BottomLeaves />
                </div>
              </div> )
        default :
        return (
        
            <div className={styleClass + ' separator-div'}>
                <span className="f-size-text-separator" style={{ margin: "0px 15px" }}>
                    {message}
                </span>
            </div>
                
            
        );
    }
    
    
    
};

export default Separetor;