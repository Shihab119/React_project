import React from 'react'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'
const App = () => {

const users=[
  {
    img:'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    intro:'Hi This is intro for content 1 lorem50 ipsum dolor sit amet, consectetur adipiscing elit.',
    tag:'Satisfied',
    color:'green'
  },
  {
    img:'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
    intro:'Hi This is intro for content 2 lorem50 ipsum dolor sit amet, consectetur adipiscing elit.',
    tag:'Underserved',
    color:'yellow'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fHww',
    intro:'Hi This is intro for content 3 lorem50 ipsum dolor sit amet, consectetur adipiscing elit.',
    tag:'Underbanked',
    color:'red'
  }
  
]


  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
    


   
  
}

export default App
