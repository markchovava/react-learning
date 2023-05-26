import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


function Rating({ rating, onClick, style }) {

  return (
    <section className={`${style} flex justify-start items-center`}>
        <span className='mr-2'>Rating:</span>
        {[...Array(5)].map((_, i) => (
            <span key={i} onClick={() => onClick(i)} >
                { rating > i ? (
                <AiFillStar /> 
                ) : (
                <AiOutlineStar/> )}
            </span>
        ))}
    </section>
  )
}

export default Rating