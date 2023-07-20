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
        <div key={index} class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay={item.dataAosDelay}>
          <div class="icon-box">
            <div class="icon">
              <div className='box-images'>
                <img src={urlFor(item.imgUrl)} alt={item.name}></img>
              </div>
            </div>
            <h4 class="title"><a href="">{item.name}</a></h4>
            <p class="description">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Box