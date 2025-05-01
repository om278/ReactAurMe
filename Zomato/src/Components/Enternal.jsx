import React from 'react'
import Card from './Card'

function Enternal() {
    const cards = [
        {
            name: "zomato",
            url:"https://b.zmtcdn.com/data/o2_assets/d1eee2be61cf47e2332cb7c49475c0981739777714.png",
            para : "Get the app now to start ordering your fevorite dishes!",
            bg:"#FFC9D0"
        },
        {
            name:"blinkit",
            url:"https://b.zmtcdn.com/data/o2_assets/071cb96db84f20eea3a39804e113bdee1739777655.png",
            para:"Cgoose from 10,000+ products & get them deliverd in minutes",
            bg:"#FFEFB5"
        },
        {
            name:"district",
            url:"https://b.zmtcdn.com/data/o2_assets/38bf2d77d9391b8b1866e3ae2b5fe19a1739777683.png",
            para:"The best of events, movies, dining, and everthing you love!",
            bg:"#F1EBFF"
        },
        {
            name:"hyperpure",
            url:"https://b.zmtcdn.com/data/o2_assets/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.png",
            para:"Offering complete supply chain solution for your restaurant",
            bg:"#FFF0F1"
        }
    ]
  return (
    <>
        <div className="h-auto w-full bg-red-50">
            <img className='pt-40 m-auto mb-5' src="https://b.zmtcdn.com/data/o2_assets/81ed35564614cbdf5188bb72dc7e57b51739536377.png" alt="" />
            <h1 className='text-4xl text-center leading-[35px] tracking-[10px] font-semibold text-[#767C8F] '>POWERING INDIA’S <br />
            CHANGING LIFESTYLES</h1>
            <div className='ml-5 mt-28 grid grid-cols-4 gap-5'>
                {
                    cards.map((e)=>{
                        console.log(e.name);
                        
                       return( <Card bg={e.bg} name={e.name} url={e.url} para={e.para}/>)
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Enternal
