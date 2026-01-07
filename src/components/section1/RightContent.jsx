import React from 'react'
import RightCard from './RightCard'
// import { ArrowRightUpLine } from '@remixicon/react'


const RightContent = (props) => {
  return (
    <div id='right' className='h-full  flex flex-nowrap overflow-x-auto gap-1 p-6 w-2/4 '>
      {props.users.map((user,idx) => (
        <RightCard key={idx} color={user.color} id={idx} img={user.img} tag={user.tag} />
      ))}
    </div>
  )
}

export default RightContent
