import React,{useEffect, useState} from 'react'
import Nav from './nav'
import Footer from './Footer'
import "./RequestRide.css"
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import DriveEtaIcon from '@material-ui/icons/DriveEta';


function RequestRide(props) {
    const [data,setData] = useState({})
    const [drive,setDrive] = useState(false)
    const [luggage,setLuggage] = useState("")
    const [seat1,setseat1] = useState(true)
    const [seat2,setseat2] = useState(false)
    const [seat3,setseat3] = useState(false)
    const [seat4,setseat4] = useState(false)
    
    useEffect(()=>{
        let data = localStorage.getItem('ride')
        setData(JSON.parse(data))
    },[])

    const handledrive=(e)=>setDrive(!drive)
    const handleLuggage =(e) => setLuggage(e.target.value)
    const handleseat2 = (e)=>setseat2(true)
    const handleseat3 = (e)=>setseat3(true)
    const handleseat4 = (e)=>setseat4(true)
    
    
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="topDetails">
                    <div className="driverDetails">
                        <ul>
                            <li><h3>Driver : </h3></li>
                            <li><img src="user.png" alt="driver" id="driver" /></li>
                            <li><h3>John Doe</h3>
                            <img src="stars.png" alt="stars" id="stars" /></li>
                        </ul>
                </div>
                <div className="rideDetails">
                        {
                            data ? (<div>
                                <h3>{data.source} to {data.destination} </h3>
                                <p className="timedate"><CalendarTodayOutlinedIcon />{data.date} &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; <AccessTimeOutlinedIcon />{data.time}</p>
                                <p className="car"><DriveEtaIcon />Sedan</p>
                                </div>) : (null)
                        }
                </div>
               </div>
               <div className="features1">
                   <div className="seat">
                        <p>Select your seat : <input type="checkbox" className="box1" checked={seat1} disabled={seat1}  /> <input type="checkbox" className="box2" checked={seat2} disabled={seat2} onChange={handleseat2}/> <br />
                        <input type="checkbox" className="box3" checked={seat3} disabled={seat3} onChange={handleseat3}/>  <input type="checkbox" className="box4" checked={seat4} disabled={seat4} onChange={handleseat4}/><input type="checkbox" className="box5" checked={seat1} disabled={seat1}/>
                        </p>
                   </div>
                   <div className="luggage">
                    <p>Luggage specification : <input type="text" placeholder="Example : 2 bags , 10Kgs" value={luggage} onChange={handleLuggage}/></p>
                   </div>
                </div>
               <div className="checkbox">
               <p><input type="checkbox" checked={drive} onChange={handledrive}/> I am willing to drive </p>
               </div><br/>
               <button id="submitRequest"onClick={()=>{
                   props.history.push("/payment")
               }}>Submit Request</button>
            </div>
            <Footer />        
        </div>
    )
}

export default RequestRide
