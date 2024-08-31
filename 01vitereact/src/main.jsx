import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>This is vite!</h2>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "New User"

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank' 
  },
  'click me to visit google', anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


createRoot(document.getElementById('root')).render(

  // MyApp(), 
  // <MyApp />
  // <ReactElement /> It will give error
  // <App />,

  // anotherElement,
  ReactElement
)
