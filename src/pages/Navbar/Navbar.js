import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../.././images/myimages/shuvpsp.jpg'
import './Navbar.css'

const Navbar = () => {
 return (
 <div className="headerr">
<div className='drawer drawer-mobile'>
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  items-center justify-end">
    
    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>  */}
    <label for="my-drawer-2" class="  btn btn-circle swap swap-rotate lg:hidden">
  

  <input type="checkbox" />
  
  
  <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  
  <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
 
 
  </div> 
  <div className='drawer-side dwr'>
   
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-96  text-base-content">
       {/*  sss */}
       <div>

       
 <div class="avatar">
  <div class="w-40 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img1} />
    
  </div>
</div>
<h2 className='text-3xl font-semibold text-slate-50 mt-3'>Shuva Chakraborty</h2>
<h1 className='text-slate-50  text-xl '>Frnot End Developer</h1>
</div>
{/*  ss */}
<nav className='navbar flex flex-col text-slate-50 mt-4'>
<Link className='btn btn-outline btn-secondary btn-wide mb-4 rounded-full ' to=''>home</Link>
<Link to='' className='btn btn-outline btn-secondary btn-wide mb-4 rounded-full ' >About</Link>
<Link to='' className='btn btn-outline btn-secondary btn-wide mb-4 rounded-full ' >Portfolio</Link>
<Link to='' className='btn btn-outline btn-secondary btn-wide mb-4 rounded-full ' >Blog</Link>
<Link to='' className='btn btn-outline btn-secondary btn-wide mb-4 rounded-full ' >Contact</Link>

</nav>
      
     
    </ul>
  
  </div>
</div>                                                    
 </div>
);
};

export default Navbar;