import React from 'react'

function Footer() {
    const CARDS = [
        {
            title: "gcash",
            img: "https://picsum.photos/200/300",
        },
    ]


  return (
    <footer>
        {/* cards */}
        <div className="bg-primary flex">
            {CARDS.map((item,index) => {
                return (
                    <div>
                        <img src={item.img} alt={item.title} className="" />
                    </div>
                )
            })}
        </div>
        {/* information */}
        <div className="grid grid-cols-3 gap-4 grid-rows-2">
            <div className="row-span-2">

            </div>
            <div  className="row-span-2">

            </div>
            <div className="">

            </div>
            <div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer