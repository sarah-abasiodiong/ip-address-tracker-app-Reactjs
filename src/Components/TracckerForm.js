import React, { useState } from 'react'
import ArrowIcon from '../Assets/images/icon-arrow.svg'

const TracckerForm = (props) => {
    const {getTrackingInfo} = props


const [payLoad, setPayLoad] =useState('');


const requestData =  (event) =>{
    event.preventDefault();

    let requestType =''

    
    //check for ip address
    let dots =0;
    for(let i = 0; i <payLoad.length; i++) {
        if (payLoad[i] === '.') {
            dots++;
        }
    }
    if (dots === 3) {
        requestType ='ipAddress'
    } else {
        requestType ='domain'
    }
    
    //check Email
    if(payLoad.includes('@') && payLoad.includes('.')) {
        requestType ='email'
    }
    //making the request
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_z5QM7Zx1CLCOszv2YXloMNLtJ8oWc&${requestType}=${payLoad}`)
    .then(response => response.json())
    .then(data => {
        getTrackingInfo(data);
    })

    .catch(err=>{
        console.log(err);

    })
    
}


    return (
        <div>
            <form onSubmit={requestData}>
                <input type="text" placeholder ="Search for any IP address or domain" onChange={(e) => setPayLoad(e.target.value)} />
            <button>
                <img src={ArrowIcon} alt=">" />
            </button>
            </form>
            
        </div>
    )
}

export default TracckerForm
