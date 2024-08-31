import Chai from "./chai"

function App() {
  return (
    // <Chai />
    // <h1>Chai aur React</h1> // we cant return more than one tag,
                              // we can only return only single tag, 
                              // so either we can return all tags enclosed in div tag
                              // or we can return it in empty tag <> </>
                              // we call (<> </>) it as fragements

    <>
      <Chai />
      <h1>Chai Aur React</h1>
      <p>Hello, How are you?</p>
    </>
  )
}

export default App
