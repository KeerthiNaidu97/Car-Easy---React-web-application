import React from 'react'
import "./HomeInput.css"


function HomeInputs(props) {
    function handleChange(e) {
        console.log(e.target.value)
    }
    return (
        <div className="input1">
            {React.createElement(props.iconName,{className:"location"})}
            <input type="text" className="textInput" onChange={handleChange} placeholder={props.placeholder} />
        </div>
    )
}

export default HomeInputs
