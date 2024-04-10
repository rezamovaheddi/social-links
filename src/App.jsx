function App() {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-white p-10 rounded-lg w-[30%] shadow-2xl">
        <div className="card-header text-center pb-5">
          <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/279.jpg" 
          alt="XXX"
          className="rounded-full m-auto shadow-md" />
          <h1 className="font-bold text-3xl">Reza</h1>
          <p className="text-gray-600">Front-end Developer</p>
        </div>
        <div className="card-items flex justify-between bg-gray-300 px-5 py-4 rounded-full mb-5 hover:bg-blue-500 hover:scale-105 duration-500 cursor-pointer hover:font-semibold">
          <p className="name hover:scale-105 duration-500 ">Github</p>
          <div className="icon">
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="card-items flex justify-between bg-gray-300 px-5 py-4 rounded-full mb-5 hover:bg-blue-500 hover:scale-105 duration-500 cursor-pointer hover:font-semibold">
          <p className="name hover:scale-105 duration-500 ">Twitter</p>
          <div className="icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="card-items flex justify-between bg-gray-300 px-5 py-4 rounded-full mb-5 hover:bg-blue-500 hover:scale-105 duration-500 cursor-pointer hover:font-semibold">
          <p className="name hover:scale-105 duration-500 ">Youtube</p>
          <div className="icon">
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="card-items flex justify-between bg-gray-300 px-5 py-4 rounded-full mb-5 hover:bg-blue-500 hover:scale-105 duration-500 cursor-pointer hover:font-semibold">
          <p className="name hover:scale-105 duration-500 ">Telegram</p>
          <div className="icon">
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="card-items flex justify-between bg-gray-300 px-5 py-4 rounded-full mb-5 hover:bg-blue-500 hover:scale-105 duration-500 cursor-pointer hover:font-semibold">
          <p className="name hover:scale-105 duration-500 ">LinkrdIn</p>
          <div className="icon">
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
