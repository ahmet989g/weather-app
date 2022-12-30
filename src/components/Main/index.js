import { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
import "./main.css";

function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {days, icons, temps} = useContext(WeatherContext);
    return (
        <>
            <div className='weather-card'>
                <div className='card-item today'>
                    <div>
                        <p className="card-text"> {days[0]}</p>
                        <p className="card-text">
                            <img
                                src={`https://openweathermap.org/img/wn/${icons[0]}@2x.png`}
                                alt=""
                            />
                        </p>
                        <p className="card-text">
                            <span><i className="fa-solid fa-arrow-up"></i> {temps[0].temp_max}º</span>
                            <span className='fontTemp'><i className="fa-solid fa-arrow-down"></i> {temps[0].temp_min}º</span>
                        </p>
                    </div>
                </div>
                <div className='card-item'>
                    <div>
                        <p className="card-text"> {days[1]}</p>
                        <p className="card-text">
                            <img
                                src={`https://openweathermap.org/img/wn/${icons[1]}@2x.png`}
                                alt=""
                            />
                        </p>
                        <p className="card-text">
                            <span><i className="fa-solid fa-arrow-up"></i> {temps[1].temp_max}º</span>
                            <span className='fontTemp'><i className="fa-solid fa-arrow-down"></i> {temps[1].temp_min}º</span>
                        </p>
                    </div>
                </div>
                <div className='card-item'>
                    <div>
                        <p className="card-text"> {days[2]}</p>
                        <p className="card-text">
                            <img
                                src={`https://openweathermap.org/img/wn/${icons[2]}@2x.png`}
                                alt=""
                            />
                        </p>
                        <p className="card-text">
                            <span><i className="fa-solid fa-arrow-up"></i> {temps[2].temp_max}º</span>
                            <span className='fontTemp'><i className="fa-solid fa-arrow-down"></i> {temps[2].temp_min}º</span>
                        </p>
                    </div>
                </div>
                <div className='card-item'>
                    <div>
                        <p className="card-text"> {days[3]}</p>
                        <p className="card-text">
                            <img
                                src={`https://openweathermap.org/img/wn/${icons[3]}@2x.png`}
                                alt=""
                            />
                        </p>
                        <p className="card-text">
                            <span><i className="fa-solid fa-arrow-up"></i> {temps[3].temp_max}º</span>
                            <span className='fontTemp'><i className="fa-solid fa-arrow-down"></i> {temps[3].temp_min}º</span>
                        </p>
                    </div>
                </div>
                <div className='card-item'>
                    <div>
                        <p className="card-text"> {days[4]}</p>
                        <p className="card-text">
                            <img
                                src={`https://openweathermap.org/img/wn/${icons[4]}@2x.png`}
                                alt=""
                            />
                        </p>
                        <p className="card-text">
                            <span><i className="fa-solid fa-arrow-up"></i> {temps[4].temp_max}º</span>
                            <span className='fontTemp'><i className="fa-solid fa-arrow-down"></i> {temps[4].temp_min}º</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
