import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Predict } from './pages/predict';
import UserHeader from './components/header';
import { Footer } from './components/footer';
// import './App.css'

function App() {

  return (

    <>
      <UserHeader />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict-food" element={<Predict />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
