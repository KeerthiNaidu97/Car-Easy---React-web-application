import React,{useEffect, useState} from 'react'
import Navbar from './nav'
import Footer from './Footer'
import "./SearchRide.css"
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';

const SearchRide =(props)=>{
    const [source,setSource] = useState("")
    const [destination,setDestination] = useState("")
    const [date,setDate] = useState("")
    const [time,settime] = useState("")

    useEffect(()=>{
        let data = localStorage.getItem('ride')
        data = JSON.parse(data)
        setSource(data.source)
        setDestination(data.destination)
        setDate(data.date)
        settime(data.time)

    },[])
    

    const handleView =(e)=>{
        props.history.push("/requestride")
    }


    return (<div>
        <Navbar/>
        <div className="container__searchride">
        <div className="searchtitle">
            <h3>{source} to {destination}</h3>
        </div>
        <div className="connector__details">
            <div className="connector">
                <ul>
                    <li>{time}</li>                                       
                    <li><span className="line1"><RoomOutlinedIcon /></span>                                  
                        <span><GpsFixedOutlinedIcon /></span></li>
                    <li><p>{source}</p>
                    <p>20 minutes</p>
                    <p>{destination}</p></li>
                </ul>
            </div>
            <div className="connector__1">
                <span>5 Eur/person</span><br/>
                <button id="view" onClick={({handleView}) => props.history.push("/requestride")}>View</button>
            </div>
         </div>
         <div className="connector__details">
            <div className="connector">
                <ul>
                    <li>13:15</li>                                       
                    <li><span className="line2"><RoomOutlinedIcon /></span>                                  
                        <span><GpsFixedOutlinedIcon /></span></li>
                    <li><p>{source}</p>
                    <p>32 minutes</p>
                    <p>{destination}</p></li>
                </ul>
            </div>
            <div className="connector__1">
                <span>8 Eur/person</span><br/>
                <button id="view" onClick={({handleView}) => props.history.push("/requestride")}>View</button>
            </div>
         </div>
         <div className="connector__details">
            <div className="connector">
                <ul>
                    <li>16:05</li>                                       
                    <li><span className="line3"><RoomOutlinedIcon /></span>                                  
                        <span><GpsFixedOutlinedIcon /></span></li>
                    <li><p>{source}</p>
                    <p>28 minutes</p>
                    <p>{destination}</p></li>
                </ul>
            </div>
            <div className="connector__1">
                <span>6 Eur/person</span><br/>
                <button id="view" onClick={({handleView}) => props.history.push("/requestride")}>View</button>
            </div>
         </div>
            
        </div>
       
        <Footer/>
    </div>)
}

export default SearchRide