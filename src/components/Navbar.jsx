
import logo from '../assets/react.svg'
import darkk from '../assets/dark.png'
import light from '../assets/light.png'
const Navbar = (props) => {


  return (
    <div>
        <nav className='bg-[#21222A] h-24 flex justify-between items-center px-12 py-20 font-inter'>
            <div className='flex'>
            <img src={logo} alt="" className=''/>
            <p className='text-[#00D8FF] text-4xl font-bold '>ReactFacts</p>
            </div>
            <div className='flex items-center gap-2'>
            {/* <p className='text-white text-2xl font-semibold '>React Course - Project 1</p> */}
            <p>Light</p>
              {props.mode? <img src={darkk} alt="" /> : <img src={light} alt="" />}
            <p>Dark</p>
            </div>
            
        </nav>
        
    </div>
  )
}

export default Navbar