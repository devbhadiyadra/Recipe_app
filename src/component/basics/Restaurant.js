import React from 'react'
import './style.css'
import Menu from './menuApi'
import Menucard from './menucard'
import Nav from "./Navbar"

// get all category name only
const  uniquelist=[...new Set(Menu.map((curElem)=>{
return curElem.category
}))]
// exg: "breakfast","lunch","dinner"
// console.log(uniquelist)

const Restaurant = () => {
 const[menuData,setmenuData]=React.useState(Menu)
 const[uniquedata,setuniquedata]=React.useState(uniquelist)

 const filteritem=(category)=>{
    const navdata=Menu.filter((curElem)=>{
        return curElem.category===category
    })
    setmenuData(navdata)
   }
   return (
   <>
        <Nav filteritem={filteritem} uniquedata={uniquedata}/>
        <Menucard menuData={menuData}/>
    </>
  )
}

export default Restaurant
