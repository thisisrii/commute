import React from 'react';

const DriverDetail = (props)=>{
    if(!props.driver){
        return <div>Loading...</div>
    }
    const driver = props.driver;
    return(
        <div>
            <div className="details">
                <div>{driver.obj.name}</div>
                <div>{driver.obj.car}</div>              
            </div>
        </div>
    )
}
//for boolean values == {driver.obj.available.toString()}

export default DriverDetail;