import './App.css'
import MainSection from './components/MainSection/MainSection'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='bg-background min-h-screen flex'>
      <Sidebar />
      <MainSection />
    </div>
  )
}

export default App
