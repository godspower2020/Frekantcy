import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import{ urlFor, client } from '../../lib/sanityClient';

const Works = () => {
    const [works, setWorks] = useState([]) 
    const [filterWorks, setFilterWorks] = useState([])
    const [activeFilter, setActiveFilter] = useState('AC & Refrigeration');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  
    useEffect(() => {
      const query = '*[_type == "workTitle"]';
    
      client.fetch(query)
        .then((data) => {
          setWorks(data)
          setFilterWorks(data) 
        })
    }, [])
    
  
    const handleWorksFilter = (item) => {
      setActiveFilter(item)
      setAnimateCard([{y: 100, opacity: 0}])
  
      setTimeout(() => {
        setAnimateCard([{y: 0, opacity: 1}])
  
        if(item === 'AC & Refrigeration') {
          setFilterWorks(works)
        } else {
          setFilterWorks(works.filter((work) => work.tags.includes(item)))
        }
      }, 500);
    }

  return (
    <>
        <div className="row filter">
            <div className="filter-wrapper mb-5 d-flex justify-content-center">
                {['AC & Refrigeration', 'Electrical Works', 'Mechanical Works', 'Procurement Service'].map((item, index) => (
                    <div
                    key={index}
                    onClick={() => handleWorksFilter(item)}
                    className={`app__work-filter-item ${activeFilter === item ? 'item-active' : ''}`}
                    >
                      <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="row portfolio-container">
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='col-lg-12'
            >
                {filterWorks.map((work, index) => (
                    <div key={index}>
                        <p>{work.title}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </>
  )
}

export default Works