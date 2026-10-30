import { House } from 'lucide-react';


function App() {

const clicked =true;
  return (
    <>
      <div className="flex items-center justify-center h-screen m-1">
        <div className="border border-green-500  p-2 rounded-lg ">
          {/* main page btn */}
          <button className={`  rounded-full ${clicked? "bg-blue-500 text-white":"hover:bg-blue-500 hover:text-white"}`}>
            
            <div className={` p-2 border-2 rounded-full border-blue-500`}>
              <House />
            </div>
          </button>


        </div>

      </div>


    </>
  )
}

export default App
