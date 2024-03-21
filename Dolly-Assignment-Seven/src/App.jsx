
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <Blogs></Blogs>

  <div className='navber-start'>
    <h1 className='text-3xl'>Dolly Recipe Calories</h1>
    </div>
    <div className='navber-center gap'>
    <ul className='gap-14 text[#03071283] manu-horizontal text-lg font-medium px-1'>
                <li className='cursor-pointer'>
                <li>Home</li>
                <li>Recipes</li>
                <li>Abaout</li>
                <li>Search</li>
                <li><a>Logout</a></li>
                </li>
            </ul>
    </div>
          


    </>
  )
}

export default App
