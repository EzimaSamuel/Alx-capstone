import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Lagos')
    const [thisLocation, setLocation] = useState('')

    const apiKey = "2f55ca72ee9448dda39fd27c6a5c63c5"

    
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.apiKey,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options);
            console.log(response.data)
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData.address)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        } catch (e) {
            console.error(e);
            // if the api throws error.
            alert('This place does not exist')
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [place])

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)