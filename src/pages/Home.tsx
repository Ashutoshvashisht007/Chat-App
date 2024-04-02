import Chatbar from "../components/Chatbar"

const Home = () => {
  return (
    <div className=' w-screen ' style={{height: "calc(100vh - 40px)" }}>
      <div className='flex items-center justify-evenly bg-white shadow-xl h-twenty w-thirty'>
          <span className='text-black h-6 text-xl '>CHAT</span>
          <input className='h-6 p-4 rounded-xl border-gray-400 border-solid border-2' type="text" placeholder='Search.....' />
          <button className='bg-orange-500 h-button w-button rounded-full text-center'>+</button>
      </div>
      <Chatbar/>
    </div>
  )
}

export default Home