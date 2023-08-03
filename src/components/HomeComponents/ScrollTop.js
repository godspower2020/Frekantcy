import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
      const handleScrollButtonVisibility = () => {
        window.scrollY > 300 ? setShowButton(true) : setShowButton(false)
      }
  
      window.addEventListener('scroll', handleScrollButtonVisibility)
    
      return () => {
        window.removeEventListener('scroll', handleScrollButtonVisibility)
      }
    }, [])
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, bahaviour: 'smooth'})
    }

  return (
    <>
        {showButton && (
            <button onClick={handleScrollToTop} className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short" />
            </button>
        )}
    </>
  )
}

export default ScrollTop