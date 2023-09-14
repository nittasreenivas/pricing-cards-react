import bgBottom from "./images/bg-bottom.svg"
import bgTop from "./images/bg-top.svg"

function App() {
  return (
   <>
    <div className="absolute top-0 right-0 -z-10">
        <img src={bgTop} alt="" className="w-full max-w-full" />
      </div>
   <section className="p-5 max-w-6xl mx-auto lg:flex lg:flex-col items-center justify-center lg:h-screen">
    <div className="flex flex-wrap flex-col justify-center text-center gap-8 lg:gap-0 lg:flex lg:flex-row lg:flex-nowrap lg:w-full">
      <article className="p-8 bg-white rounded-lg shadow lg:w-full">
        <h2 className="text-slate-700 text-xl mb-5">Basic</h2>
        <h3 className="text-slate-700 text-5xl flex items-center justify-center"><span className="text-3xl mr-3">$</span>19.99</h3>
        <h3  className="text-slate-700 text-5xl flex items-center justify-center"><span className="text-3xl mr-3">$</span>199.99</h3>
        <ul className="flex flex-col justify-center my-8">
          <li className="border-t border-slate-300 text-slate-600 py-3"> 500 GB Storage</li>
          <li className="border-t border-slate-300 text-slate-600 py-3"> 2 Users Allowed</li>
          <li className="border-y border-slate-300 text-slate-600 py-3">Send up to 3 GB</li>
        </ul>
        <button className="linear-gradient py-2 w-full rounded-lg shadow uppercase
        hover:border-2 hover:border-white btn"> Learn More</button>
      </article>
      <article className="linear-gradient p-8 rounded-lg shadow lg:w-full lg:scale-110">
      <h2 className="text-white text-xl mb-5"> Professional</h2>
        <h3 className="text-white text-5xl flex items-center justify-center"><span className="text-3xl mr-3">$</span>24.99</h3>
        <h3  className="text-white text-5xl flex items-center justify-center"><span className="text-3xl mr-3">$</span>249.99</h3>
        <ul className="flex flex-col justify-center my-8">
          <li className="border-t border-white py-3 text-white">1 TB Storage </li>
          <li className="border-t border-white py-3 text-white">  5 Users Allowed </li>
          <li className="border-y border-white py-3 text-white">  Send up to 10 GB</li>
        </ul>
        <button className="bg-white py-2 w-full rounded-lg shadow uppercase border-2
        border-white hover:bg-transparent text-slate-800 transition-all duration-200"> Learn More</button>
      </article>
      <article className="p-8 bg-white rounded-lg shadow lg:w-full">
      <h2 className="text-slate-700 text-xl mb-5"> Master</h2>
        <h3 className="text-slate-700 text-5xl flex items-center justify-center"><span className="text-3xl mr-3">$</span>39.99</h3>
        <h3 className="text-slate-700 text-5xl flex items-center justify-center"><span className="text-3xl mr-3">$</span>399.99</h3>
        <ul  className="flex flex-col justify-center my-8">
          <li className="border-t border-slate-300 text-slate-600 py-3"> 2 TB Storage</li>
          <li className="border-t border-slate-300 text-slate-600 py-3"> 10 Users Allowed </li>
          <li className="border-y border-slate-300 text-slate-600 py-3"> Send up to 20 GB</li>
        </ul>
        <button className="linear-gradient py-2 w-full rounded-lg shadow uppercase
        hover:border-2 hover:border-white btn"> Learn More</button>
      </article>
    </div>
   </section>
   <div className="absolute left-0 bottom-0 -z-10">
        <img src={bgBottom} alt="" className="w-full max-w-full" />
      </div>
      </>
  );
}

export default App;
