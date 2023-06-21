import React from 'react'

const Navbar = ({filteritem,uniquedata}) => {
  return (
    <>
      <nav className='navbar'>
            <div className='btn-group'>
                {/* if any new category add in data then automatically change navbar */}
                {
                    uniquedata.map((curElem)=>{
                        return(
                        <button className='btn-group__item' onClick={()=>filteritem(curElem)}>{curElem}</button>)                    })
                } 
               </div>
        </nav>
    </>
  )
}

export default Navbar
