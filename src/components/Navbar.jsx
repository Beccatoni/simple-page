
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-[#21222A] h-24 flex justify-between items-center px-12 py-20'>
            <div className='flex'>
            <img src={logo} alt="" className=''/>
            <p className='text-[#00D8FF] text-4xl font-bold font-inter'>ReactFacts</p>
            </div>
            <p className='text-white text-2xl font-semibold'>React Course - Project 1</p>
        </nav>
        
    </div>
  )
}

export default Navbar