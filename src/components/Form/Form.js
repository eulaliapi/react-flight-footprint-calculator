import './Form.scss';

const Form = (
    {inputOriginRef, inputDestinationRef, 
    handleOriginInput, handleDestinationInput,
    changeOriginInputValue, changeDestinationInputValue,
    showOriginAirportsList, showDestinationAirportsList,
    originAirportsList, destinationAirportsList,
    originAirportObject, destinationAirportObject,
    handleSubmit
    }) => {
    return(
        <form className="Calculator_form" onSubmit={handleSubmit}>

        <div className="Calculator_form_input-box relative-box">
            <label htmlFor="from" className="Calculator_form_label">From</label>
            <input name="from" id="from" type="text" className="Calculator_form_input" 
                ref={inputOriginRef}
                onInput={(e) => handleOriginInput(e.target.value)}
                required
            />
            <p className="Calculator_form_suggestion">Must select from the list</p>
            {showOriginAirportsList &&
                <ul className="Calculator_form_ul">
                    {originAirportsList.map((listItem) => 
                        <li className="Calculator_form_li" key={listItem.code} onClick={() => changeOriginInputValue(listItem)}>
                            {listItem.name}, {listItem.city}, {listItem.code}, {listItem.country}
                        </li>
                    )}
                    {originAirportsList.length === 0 && <li className="Calculator_form_li_not-found">No results found</li>}
                </ul>
            }
        </div>

        <div className="Calculator_form_input-box relative-box">
            <label htmlFor="to" className="Calculator_form_label">To</label>
            <input name="to" id="to" type="text" className="Calculator_form_input"
                ref={inputDestinationRef}
                onInput={(e) => handleDestinationInput(e.target.value)}
                required
            />
            <p className="Calculator_form_suggestion">Must select from the list</p>
            {showDestinationAirportsList &&
                <ul className="Calculator_form_ul">
                    {destinationAirportsList.map((listItem) => 
                        <li className="Calculator_form_li" key={listItem.code} onClick={() => changeDestinationInputValue(listItem)}>
                            {listItem.name}, {listItem.city}, {listItem.code}, {listItem.country}
                        </li>
                    )}
                    {destinationAirportsList.length === 0 && <li className="Calculator_form_li_not-found">No results found</li>}
                </ul>
            }
        </div>

        <div className="Calculator_form_input-box">
            <label htmlFor="cabin_class" className="Calculator_form_label">Cabin class</label>
            <select name="cabin_class" id="cabin_class" className="Calculator_form_input">
                <option className="Calculator_form_option" value="economy">Economy</option>
                <option className="Calculator_form_option" value="premium_economy">Premium economy</option>
                <option className="Calculator_form_option" value="business">Business</option>
                <option className="Calculator_form_option" value="first">First</option>
            </select>
        </div>

        <div className="Calculator_form_input-box">
            <label htmlFor="tickets" className="Calculator_form_label">N° tickets</label>
            <input name="tickets" id="tickets" type="number" min="1" className="Calculator_form_input" required/>
        </div>

        <button className="Calculator_form_btn" 
            disabled={
                typeof originAirportObject !== "object" ||
                typeof destinationAirportObject !== "object" ||
                inputOriginRef.current.value !== `${originAirportObject.name}, ${originAirportObject.city}, ${originAirportObject.code}, ${originAirportObject.country}` ||
                inputDestinationRef.current.value !== `${destinationAirportObject.name}, ${destinationAirportObject.city}, ${destinationAirportObject.code}, ${destinationAirportObject.country}`
            }
        >
        GO
        </button>

    </form>
    )
}

export default Form;