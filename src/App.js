import { Landing } from './pages';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/skills' element='<Skills />' />
          <Route path='/projects' element='<Projects />' />
          <Route path='/aboutme' element='<AboutMe />' />
          <Route path='/connect' element='<Connect />' />
        </Routes>
    </div>
  );
}

export default App;
