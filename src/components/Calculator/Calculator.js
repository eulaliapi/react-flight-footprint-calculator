import React from 'react';
import axios from 'axios';
import jsonDataAirports from '../../assets/json/airports.json';
import Form from '../Form/Form';
import FlightDetailsBox from '../FlightDetails/FlightDetails';
import './Calculator.scss';


const Calculator = () => {

    const [showOriginAirportsList, setShowOriginAirportsList] = React.useState(false);
    const [originAirportsList, setOriginAirportsList] = React.useState([]);
    const inputOriginRef = React.useRef();
    const [originAirportObject, setOriginAirportObject] = React.useState();

    const [showDestinationAirportsList, setShowDestinationAirportsList] = React.useState(false);
    const [destinationAirportsList, setDestinationAirportsList] = React.useState([]);
    const inputDestinationRef = React.useRef();
    const [destinationAirportObject, setDestinationAirportObject] = React.useState();

    const [result, setResult] = React.useState(false);
    const [originAirport, setOriginAirport] = React.useState();
    const [destinationAirport, setDestinationAirport] = React.useState();
    const [cabinClass, setCabinClass] = React.useState();
    const [nTickets, setNTickets] = React.useState(1);
    const [footprint, setFootprint] = React.useState();

    const handleOriginInput = (value) => {
        const input = value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();

        input.length > 0 ? setShowOriginAirportsList(true) : setShowOriginAirportsList(false);
        const airports = jsonDataAirports.filter((airport) =>
            airport.name.includes(input) || airport.city.includes(input) || airport.country.includes(input)
        );
        setOriginAirportsList(airports);
    };

    const changeOriginInputValue = (item) => {
        setOriginAirportObject(item);
        inputOriginRef.current.value = `${item.name}, ${item.city}, ${item.code}, ${item.country}`;
        setShowOriginAirportsList(false);

    };

    const handleDestinationInput = (value) => {
        const input = value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
        input.length > 0 ? setShowDestinationAirportsList(true) : setShowDestinationAirportsList(false);
        const airports = jsonDataAirports.filter((airport) =>
            airport.name.includes(input) || airport.city.includes(input) || airport.country.includes(input)
        );
        setDestinationAirportsList(airports);
    };

    const changeDestinationInputValue = (item) => {
        setDestinationAirportObject(item);
        inputDestinationRef.current.value = `${item.name}, ${item.city}, ${item.code}, ${item.country}`;
        setShowDestinationAirportsList(false);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const originAirport = originAirportObject;
        const destinationAirport = destinationAirportObject;
        const cabinClass = e.target[2].value;
        const nTickets = e.target[3].value;
        setOriginAirport(originAirport);
        setDestinationAirport(destinationAirport);
        setCabinClass(cabinClass);
        setNTickets(nTickets);

        const config = {
            headers: { 'Authorization': 'Basic ' + btoa(`${process.env.REACT_APP_API_KEY}`) },
            params: {
                'segments[0][origin]': originAirportObject.code,
                'segments[0][destination]': destinationAirportObject.code,
                'cabin_class': cabinClass,
            }
        }

        try {
            await axios.get('https://api.goclimate.com/v1/flight_footprint',
                config
            ).then(res => calculateFootprint(res.data.footprint)).then(setResult(true))

        } catch (err) {
            console.log(err)
        }

    }

    const calculateFootprint = (footprint) => {
        const singleFootprint = footprint / 1000;
        setFootprint(singleFootprint);
    }

    return (
        <div className="Calculator">

            <Form
                inputOriginRef={inputOriginRef}
                inputDestinationRef={inputDestinationRef}
                handleOriginInput={handleOriginInput}
                handleDestinationInput={handleDestinationInput}
                changeOriginInputValue={changeOriginInputValue}
                changeDestinationInputValue={changeDestinationInputValue}
                showOriginAirportsList={showOriginAirportsList}
                showDestinationAirportsList={showDestinationAirportsList}
                originAirportsList={originAirportsList}
                destinationAirportsList={destinationAirportsList}
                originAirportObject={originAirportObject}
                destinationAirportObject={destinationAirportObject}
                handleSubmit={handleSubmit}
            />

            <FlightDetailsBox
                result={result}
                originAirport={originAirport}
                destinationAirport={destinationAirport}
                cabinClass={cabinClass}
                footprint={footprint}
                nTickets={nTickets}
            />

        </div>
    )
};

export default Calculator