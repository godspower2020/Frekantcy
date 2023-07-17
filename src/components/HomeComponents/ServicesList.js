import React, { useEffect, useState } from 'react'
import{ client } from '../../lib/sanityClient';

const ServicesList = () => {
const [servicesList, setServicesList] = useState([])

  useEffect(() => {
    const query = '*[_type == "servicesList"]';
  
    client.fetch(query)
      .then((data) => {
        setServicesList(data)
      })
  }, [])

  return (
    <>
        <div>
            {servicesList.map((item, index) => (
                <div key={index} className='services-list'>
                    <i className="bi bi-check2"></i>
                    <span className='grey'>{item.name}</span> <br />
                </div>
            ))}
        </div>
    </>
  )
}

export default ServicesList