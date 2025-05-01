import React from 'react'

function About() {
  const arr = [
    {
      img:"https://b.zmtcdn.com/data/o2_assets/d19ec60986487a77bcb026e5efc3325f1742908200.png",
      h1:"3,00,000+",
      h2:"restaurants"
    },
    {
      img:"https://b.zmtcdn.com/data/o2_assets/e7533c4081d6140da37b9f430cb7b8051743006192.png",
      h1:"800+",
      h2:"cities"
    },
    {
      img:"https://b.zmtcdn.com/data/o2_assets/713443cc5944ce4284d7e49e75e2aacf1742466222.png",
      h1:"3billion+",
      h2:"orders delivered"
    }
  ]
  return (<>
    <div className="w-full h-screen relative flex items-center justify-center">
  <img src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="Image" className="bg-transparent object-contain w-full h-full" />
  <div className='absolute top-1/5 w-[600px]   h-[300px]'>
    <h1 className='text-7xl font-sans font-bold text-center text-[#EF4F5F] '>Better food for <br />
    more people</h1>
    <h2 className=' text-center text-2xl mt-10 text-[#596378]'>For over a decade, we’ve enabled our <br /> customers to discover new tastes,<br /> delivered right to their doorstep</h2>
</div>
<img className='absolute w-56 left-56' src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png" alt="" />
<img className='absolute w-16 top-6 left-96' src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png" alt="" />
<img className='absolute w-12 bottom-16 left-28' src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png" alt="" />
<img className='absolute w-56 top-9 right-72' src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png" alt="" />
<img className='absolute w-12 top-64 right-36 ' src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png" alt="" />
<img className='absolute w-56 bottom-28 right-48' src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png" alt="" />
</div>
<div className='h-[120px] w-[60%] m-auto rounded-[30px] mb-10 flex items-center justify-evenly shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]'>

    {
      arr.map((e,i)=>{
        if (i==2) {
          return(
            <div className='w-auto h-[80%]  flex items-center pr-3 justify-evenly '>
            <div className="w-[60%]  ">
              <h1 className='text-[#596378] leading-10 text-[30px] font-bold font-sans '>{e.h1}</h1>
              <h2 className='text-l text-[#596378]  font-semibold '>{e.h2}</h2>
            </div>
            <div className="w-[25%] ">
              <img className='w-[80px]' src={e.img} alt="" />
            </div>
          </div>
          
              )
        }
        return(
          
          <div className='w-auto h-[80%]  flex items-center pr-3 justify-evenly border-r-2'>
    <div className="w-[60%]  ">
      <h1 className='text-[#596378] leading-10 text-[30px] font-bold font-sans '>{e.h1}</h1>
      <h2 className='text-l text-[#596378]  font-semibold '>{e.h2}</h2>
    </div>
    <div className="w-[25%] ">
      <img className='w-[80px]' src={e.img} alt="" />
    </div>
  </div>
  
        )
      })
    }


  
</div>
</>
  )
}

export default About
