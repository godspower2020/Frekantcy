import React, { useEffect, useState } from 'react'
import{ urlFor, client } from '../../lib/sanityClient';

const Box = () => {
  const [box, setBox] = useState([])

  useEffect(() => {
    const query = '*[_type == "boxes"]';
  
    client.fetch(query)
      .then((data) => {
        setBox(data)
      })
  }, [])

  return (
    <>
        {box.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up">
            <div className="icon-box">
            {/* <div className="icon"><i className="bx bxl-dribbble" /></div> */}
            <h4 className="title"><a href>{item.name}</a></h4>
            <img src={urlFor(item.imgUrl).width(220).height(220).url()} alt={item.name}></img>
            </div>
          </div>
        ))}
    </>
  )
}

export default Box