import { useContext } from 'react'
import CityContext from "../../context/CityContext";
import cityData from "../../data/cityData.json";
import "./header.css";

function Header() {
    const { city, setCity } = useContext(CityContext);

    const handleChange = (e) => {
        setCity(e.target.value);
    }
    return (
        <header>
            <div className='header-background-image'>
                <img src="../../images/istanbul.jpg" alt="İSTANBUL" />
            </div>
            <h1 className='city-name'>{city}</h1>
            <div className='date'>
                <span className='location'>{city}, TR</span>
                <span className='hours'>20:15</span>
            </div>
            <div className='city-select'>
                <select className="form-select" aria-label="Default select example"
                    value={city} onChange={handleChange}>
                    {
                        cityData.map((cityItem) => <option key={cityItem.id}>
                            {cityItem.name}
                        </option>)
                    }
                </select>
            </div>
        </header>
    )
}

export default Header
