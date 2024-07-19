import logo2 from '../assets/logo2.png'

const Main = () => {
  return (
    <main className="bg-[#282D35] text-white font-inter h-screen flex flex-col py-14 px-7  relative">
        <img src={logo2} alt="" className='h-72 w-56 absolute right-0 top-32' />
        <h1 className="text-4xl font-bold m-0 spacing">Fun facts about React</h1>
        <ul className="flex flex-col text-xl list-disc mt-12 gap-4 ml-16 max-w-[30rem] marker:text-sky-500 marker:text-[1.5rem]">
            <li>Was first released in 2019</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars  on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  )
}

export default Main