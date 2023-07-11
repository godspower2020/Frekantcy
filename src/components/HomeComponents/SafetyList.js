import React, { useEffect, useState } from 'react'
import{ client } from '../../lib/sanityClient';

const SafetyList = () => {
    const [safetyPolicyList, setSafetyPolicyList] = useState([])

    useEffect(() => {
    const query = '*[_type == "safetyPolicyList"]';

    client.fetch(query)
        .then((data) => {
            setSafetyPolicyList(data)
        })
    }, [])

  return (
    <>
         {safetyPolicyList.map((item, index) => (
            <div key={index} className='service-flex'>
                <div>
                    <div className='round' style={{backgroundColor: item.color}}></div>
                </div>
                <h6>{item.policy}</h6>
            </div>
        ))}
    </>
  )
}

export default SafetyList

// Preserve the health, safety and security of the employees and members of the public who may be affected by its operations.

// 2
// Minimize the impact of its operation on the environment.

// 3
// Maintain sensitivity to the needs and concerns of host communities around its operational areas.

// 4
// Recognize HSE management as a line responsibility

// 5
// Maintain relationship with the host communities.

// 6
// Believe that every job can be done safely

// Recognize that no activity shall be carried out unless considered safe.

// Maintain sensitivity to the needs and concerns of host communities around its operational areas.


// font-size: 45px;
//     line-height: 65px;
//     font-weight: 200;

//     font-family: 'Montserrat', sans-serif;
