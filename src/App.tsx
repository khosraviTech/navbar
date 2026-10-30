import { House } from 'lucide-react';


function App() {


  return (
    <>
      <div className="flex items-center justify-center h-screen m-1">
        <div className="border border-green-500  p-2 rounded-lg ">
          {/* main page btn */}
          <button className='hover:bg-blue-400 rounded-full'>
            <div className={` p-2 border-2 rounded-full border-blue-500 hover:text-white`}>
              <House />
            </div>
          </button>


        </div>

      </div>


    </>
  )
}

export default App
