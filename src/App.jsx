import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import './App.css'

function App() {

  return (
    <>
      {/* <header className="bg-[var(--header-button-color)] text-[var(--text-color)] p-4">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        <nav className="mt-2">
          <a href="#" className="text-[var(--link-highlight-color)] hover:underline">Home</a>
          <a href="#" className="text-[var(--link-highlight-color)] hover:underline ml-4">About</a>
          <a href="#" className="text-[var(--link-highlight-color)] hover:underline ml-4">Contact</a>
        </nav>
      </header>
      <div className='text-red-500'>Hello</div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
