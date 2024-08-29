import './App.css'
import CardsSection from './Components/CardSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
// import SearchSection from './Components/SearchSection'

function App() {
  

  return (
    <>
      <div className="App" style={{ backgroundColor: "#ffffff" }}>
      <Header />
      {/* <SearchSection /> */}
      <CardsSection/>
      <Footer />
    </div>
    </>
  )
}

export default App
