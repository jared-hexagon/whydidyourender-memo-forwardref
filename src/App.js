import React, { memo, forwardRef } from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import './App.css'

// $FlowFixMe
whyDidYouRender(React, { include: [/.*/] })

function App() {
  return (
    <div className="App">
      <MyMemoizedComponent />
    </div>
  )
}

const MyComponent = forwardRef(() => {
  return <div>My component!!!</div>
})

const MyMemoizedComponent = memo(MyComponent, () => true)

export default App
