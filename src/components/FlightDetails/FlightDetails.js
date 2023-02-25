import './FlightDetails.scss';

const FlightDetailsBox = ({result, originAirport, destinationAirport, cabinClass, footprint, nTickets}) => {
    return (
        <div className="Calculator_infos-box">
           {result ?  
            <div className="Calculator_infos-box_results">
                {/* journey infos */}
                <div className="Calculator_infos-box_results_div">
                    <p className="Calculator_infos-box_p">
                        From <strong>{`${originAirport.name}, ${originAirport.city}, ${originAirport.country}, (${originAirport.code})`}</strong>
                    </p>
                    <div className="Calculator_infos-box_p"><strong>&rarr;</strong></div>
                    <p className="Calculator_infos-box_p">
                        To <strong>{`${destinationAirport.name}, ${destinationAirport.city}, ${destinationAirport.country}, (${destinationAirport.code})`}</strong>
                    </p>
                </div>
                {/* class infos */}
                <p className="Calculator_infos-box_p"><strong>{cabinClass}</strong> class flight</p>
                 {/* CO2 infos */}
                <div className="Calculator_infos-box_results_div">
                    <p className="Calculator_infos-box_p"><strong>{footprint} tonnes CO2e</strong> per ticket</p>
                </div>
                <div className="Calculator_infos-box_results_div">
                    <p className="Calculator_infos-box_p">Total ({nTickets} tickets)</p>
                    <p className="Calculator_infos-box_p"><strong>{footprint * nTickets} tonnes CO2e</strong></p>
                </div>
            </div> :
            <div className="Calculator_infos-box_nores">
                <p className="Calculator_infos-box_p">Enter the details of your flight and find out its emissions.</p>
            </div> 
           }
        </div>
    )
}

export default FlightDetailsBox;