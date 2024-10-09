import './App.css'
import Header from "../src/components/header/Header"
import Home from './pages/home/Home'
import Popular from './pages/popular/Popular'
import Brand from './pages/brand/Brand'
import Newcomer from './pages/newcomer/Newcomer'
import About from './pages/about/About'
import Contributor from './pages/contributor/Contributor'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Popular />
      <Brand />
      <Newcomer />
      <About />
      <Contributor />
      <Footer />
    </div>
  )
}

export default App
