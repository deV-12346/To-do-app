import Addtodo from './components/Addtodo'

const App = () => {
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center'>
      <div className='bg-white max-w-max shadow-sm shadow-indigo-400 px-4 py-6
      flex flex-col justify-center items-center space-y-4 rounded '>
      <h1 className='text-center text-2xl md:text-4xl text-black font-medium'>
      Todo React + Typescript 11111111</h1>
      <Addtodo/>
      </div>
    </div>
  )
}

export default App
