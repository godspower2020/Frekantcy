import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import{ urlFor, client } from '../../lib/sanityClient';

const Works = () => {
    const [works, setWorks] = useState([]) 
    const [filterWorks, setFilterWorks] = useState([])
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  
    useEffect(() => {
      const query = '*[_type == "works"]';
    
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
  
        if(item === 'All') {
          setFilterWorks(works)
        } else {
          setFilterWorks(works.filter((work) => work.tags.includes(item)))
        }
      }, 500);
    }

  return (
    <>
        <div className="row filter">
            <div className="filter-wrapper mb-5 d-flex justify-content-center flex-wrap">
                {['All', 'AC & Refrigeration', 'Electrical Works', 'Mechanical Works', 'Procurement Service'].map((item, index) => (
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
        <div className="work">
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className=''
            >
                {filterWorks.map((work, index) => (
                    <div className='container work-box' key={index}>
                        <h4 className='work-title'>{work.title}</h4>
                        <div className='row'>
                          <div className='col-lg-6 my-md-5'>
                            <h5 className='work-titles'>{work.titleOne}</h5>
                            <p>{work.descriptionOne}</p>
                            <p>{work.subDescriptionTwo}</p>
                            <p>{work.subDescriptionThree}</p>
                          </div>
                          <div className='col-lg-6'>
                            <div className='img-container'>
                              <img className='img' src={urlFor(work.heroImg)} alt={work.name} />
                            </div>
                          </div>
                        </div>
                        <div className='work-two-three'>
                          <div className='row'>
                            <div className='col-lg-9 g-t-m-5'>
                              <h5 className='work-titles'>{work.titleTwo}</h5>
                              <p>{work.descriptionTwo}</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-lg-9'>
                              <h5 className='work-titles'>{work.titleThree}</h5>
                              <p>{work.descriptionThree}</p>
                            </div>
                          </div>
                        </div>
                        <div className='text-image-array'>

                          {work.isRepairsList ? 
                            <div className='row repairs-equipments'>
                              <div className='col-lg-12'>
                                <div className=''>
                                  {work.repairsList.map((item, index) => (
                                    <div key={index} className='pb-2'>
                                      <i className="bi bi-check2"></i>
                                      <span className='m-3'>{item}</span> <br />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            :
                            ""
                          }

                          {work.isEquipmentsList ? 
                            <div className='row repairs-equipments'>
                              <div className='col-lg-12'>
                                <p>Equipments includes:</p>
                                <div>
                                  {work.equipmentsList.map((item, index) => (
                                    <div key={index} className='pb-2'>
                                      <i className="bi bi-check2"></i>
                                      <span className='m-3'>{item}</span> <br />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div> 
                            :
                            ""
                          }

                          {work.isImgList ? 
                            <div className='row mt-3 image-array'> 
                              <div className='col-lg-12'>
                                <div className='cen'>
                                  {work.imgListText.map((item, index) => (
                                    <div className='text-bottom'>
                                      <img className='' key={index} alt='' src={urlFor(item.img)} /> 
                                      <p>{item.name}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            :
                            ""
                          }
                          
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </>
  )
}

export default Works