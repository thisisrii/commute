import React from 'react';

const DriverListItem = (props)=>{
    const driver = props.driver;
    const onDriverClick = props.onDriverClick;
    return(
        <li onClick={() => onDriverClick(driver)}>
        <div>
            name:{driver.obj.name}
        </div>
        <div>
           car type: {driver.obj.car}
        </div>
            <div>
                distance:{Math.floor(driver.dis / 1000)} km  
            </div>
        </li>
    );
}

export default DriverListItem;