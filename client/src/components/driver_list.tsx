import React from 'react';
import DriverListItem from './driver_list_item';

const DriverList = (props) => {
   const driverItems = props.drivers.map((driver)=>{
   return (<DriverListItem onDriverClick = {props.onDriverSelect} key={driver.obj._id} driver={driver}/>)       
    });
    
    return (
        <div>
            <ul>
                {driverItems}
            </ul>
        </div>
    );
};

export default DriverList;