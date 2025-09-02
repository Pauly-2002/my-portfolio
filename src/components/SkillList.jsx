import React from 'react'

const SkillList = (props) => {
  return (
            <span className='flex items-center gap-5'>
            <img className='w-4' src={props.src} alt="" />
            <p>{props.p}</p>
        </span>
     
  )
}

export default SkillList