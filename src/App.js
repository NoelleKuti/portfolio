import { Landing, Projects, AboutMe, Connect } from './pages';
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components'
import './index.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/skills' element='<Skills />' />
        <Route path='/projects' element={<Projects />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/connect' element={<Connect />} />
        </Routes>
    </div>
  );
}

export default App;
