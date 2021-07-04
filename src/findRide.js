import React,{useState} from 'react';
import Nav from './nav';
import Footer from './Footer';
import "./findRide.css";

const FindRide =(props)=>{
    const [source,setSource] = useState("")
    const [destination,setDestination] = useState("")
    const [date,setDate] = useState("")
    const [time,settime] = useState("")

    const handleSource =(e)=>{setSource(e.target.value)}
    const handledestination =(e)=>{setDestination(e.target.value)}
    const handledate =(e)=>{setDate(e.target.value)}
    const handletime =(e)=>{settime(e.target.value)}

    const handleSubmit =(e)=>{
        e.preventDefault()
        const data ={
            source,
            destination,
            date,
            time
        }
        console.log(data)
        localStorage.setItem("ride",JSON.stringify(data))
        setSource("")
        settime("")
        setDate("")
        setDestination("")
       props.history.push("/SearchRide")
        
    }

    return (<div className="findride">
        <Nav/>
       <h2>Search Ride</h2> <br/><br/>
       <form>
            <input type="text" placeholder="Leaving from..."  value={source} onChange={handleSource}/><img src="location-icon.PNG" alt="Location" id="location" /><br/>
           <input type="text" placeholder="Arriving  to..." value={destination} onChange={handledestination}/><img src="DLocation.PNG" alt="DLocation" id="dlocation" /><br/>
           <input type="date" placeholder="select date" value={date} onChange={handledate}/> <br/>
           <input type="time" placeholder="select time" value={time} onChange={handletime}/><br/>
           
       </form>
       <button onClick={handleSubmit}>Search Ride</button>


      <Footer/>
    </div>)
}

export default FindRide