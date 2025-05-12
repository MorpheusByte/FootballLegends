import { Container } from "react-bootstrap"
import Header from "./components/header/Header"
import LegendsContainer from "./components/legends/LegendsContainer"


function App() {

  return (
    <>
      <Container className="text-center mt-5">
        <Header/>
        <LegendsContainer/>
      </Container>
    </>
  )
}

export default App
