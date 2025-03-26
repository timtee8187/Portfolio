import React from 'react'
import Button from './assets/components/Button'
import SocialMediaLinks from './assets/components/socialMediaLinks'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHome, FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function App() {

  
  return (
    <div className='bg-[#222831] relative w-full min-h-screen flex flex-col'>
      {/* HEADER */}
      <header className='flex justify-between items-center bg-[#222831] p-6 text-[#ffffff] w-full'>
        <h1 className='text-2xl font-bold'>TimothysDesign</h1>
        <div>
          <nav>
            <ul className='flex space-x-6'>
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About Me</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}


<div className='flex flex-col md:flex-row items-center justify-between w-full px-10 pt-32 pb-20'>
{/* LHS SECTIONS */}
<div className='relative max-w-lg '>
<img 
    src="Vector 187.svg" 
    alt="Vector image" className='absolute left-[50px w-24 h-24 mr-6]' />
    <h2 className='text-4xl font-bold mb-4 text-[#ffffff]'>CREATIVE UI</h2>
    <h2 className='text-4xl font-bold mb-4 text-[#00ADB5]'>DESIGNER</h2>
  {/* BUTTONS */}
    <div className='space-x-4 flex'>
    <Button title="Hire Me" />
    <Button title="Download CV"/>
  </div>
  <img src="downloadbtn.svg" alt="downlaodbtn" className='mt-40 w-10 h-10' />
</div>

{/* RHS SECTION */}
<div className='relative md:-w-1/2 flex justify-center'>
  
    {/* BG IMAGE */}
    <img src="herobgimg.svg" alt="bgimg"  className='w-50 h-auto'/>
    {/* HERO BG IMG */}
  <img src="Heroimg.svg" alt="hbgimg"  className='absolute left-20 bottom-0 w-[50%]'/>
  {/* className='min-w-80 absolute -bottom-20 inset-0 h-auto object-cover w-1/3'/> */}
 
</div>
</div>

{/* SECTION ONE */}
<div className='flex flex-col md:flex-row items-center justify-between p-10 mb-20%'>
  {/* LEFT SECTION */}
  <div className='relative md:w-1/2 space-y-4'>
    {/* music icon */}
<img src="music image.svg" className='absolute -top-20 left-0 w-20 h-20 rounded-lg' alt="music image" />
{/* side image */}
<h2 className='text-4xl font-bold text-[#ffffff]'>About <span className='text-[#00ADB5]'>Me</span></h2>
{/* lightbulb */}
<img src="lightbulb.svg" className='absolute left-[30%] -top-10 w-[10%] h-31 rounded-lg' alt="side image" />
<p className='text-white'>orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more</p>


{/* bottom image */}
<img 
src="spiralimage.svg" className='absolute w-[15%] items-center justify-between left-40' 
alt="spiral image" />
  </div>
  {/* RIGHT SECTION */}
  <div className='relative md:w-1/2 '>
<img src="section1bgimage.svg" className='w-[80%]' alt="bgimage" />
<img src="bgimage.svg" className='w-1/2 h-auto rounded-lg absolute -bottom-20 left-[15%]' alt="section1image" />
  </div>
</div>

{/* SECTION TWO */}

<div className="p-6  mx-auto bg-[url('/section1bgimage.svg')] bg-repeat w-[25%-75%] mt-16"
>
  <h2 className="text-3xl font-bold mb-4 text-left">My Recent <span className='text-[#00ADB5]'>Works</span> </h2> 

  {/* Buttons */}
  <div className="flex space-x-2 mb-6">
    {["All", "UI", "UX", "Web Design"].map((category, index) => (
      <button
        key={category}
        className={`px-4 py-2 text-sm font-medium rounded-lg text-white hover:opacity-80 ${
          index === 0
            ? "bg-[#00ADB5]" // "All" button with Teal color
            : index === 1
            ? "bg-[#393E46]/50" // "UI" button with Gray color (with opacity)
            : "bg-gray-200 hover:bg-gray-300 text-black"
             ? "bg-[#393E46]/50" // "UX" button with Gray color (with opacity)
            : "bg-gray-200 hover:bg-gray-300 text-black"
             ? "bg-[#393E46]/50" // "Web Design" button with Gray color (with opacity)
            : "bg-gray-200 hover:bg-gray-300 text-black"
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  {/* IMAGES */}
  <div className='grid grid-cols-3 gap-4'>
    <img src="Frame 1.svg" className='rounded-lg' alt="Frame" />
    <img src="Frame2.svg" className='rounded-lg' alt="Frame" />
    <img src="Frame 3.svg" className='rounded-lg' alt="Frame" />
  </div>
</div>
{/* SECTION 3 */}
<div className="flex flex-col md:flex-row flex-grow p-8 gap-8">
  {/* LEFT SECTION */}
  <div className="md:w-1/2 space-y-4">
    <h1 className="text-4xl font-bold">Got a project in <br/> <span className='text-[#00ADB5]'>mind?</span></h1>
    <div className="flex gap-4">
      <img src="section3image.svg" alt="section 3 image" className="rounded-lg" />
      <img src="spiralimage.svg" alt="spiralimage" className="rounded-lg" />
    </div>
  </div>

  {/* RIGHT SECTION - FORM */}
  <div className="md:w-1/2 p-6 flex-gap-4 rounded-lg shadow-lg">
    <form className="space-y-4">
    <div className="flex gap-4">
  <div className="w-1/2">
    <label className="block text-white">Your Name</label>
    <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg bg-[#393E7080]" />
  </div>
  <div className="w-1/2">
    <label className="block text-white">Your Email</label>
    <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg bg-[#393E7080]" />
  </div>
</div>

      <div>
        <label className="block text-white">Your Message</label>
        <textarea placeholder="Message" className="w-full p-3 border rounded-lg h-32 bg-[#393E7080]"></textarea>
      </div>

      <button className="w-1/2 bg-blue-500 text-white flex items-center justify-center gap-2 p-3 rounded-full hover:bg-blue-600">
        Send Message  <FaPaperPlane />
      </button>
    </form>
  </div>
</div>
{/* FOOTER */}
<footer className='bg-gray-900 py-6 mt-8'>
  <div className='flex justify-center gap-8 mb-4'>
<a href="#" className='flex items-center gap-2 text-white'><FaHome/>Home</a>
<a href="#" className='flex items-center gap-2 text-white'>About Me<FaUser/></a>
<a href="#" className='flex items-center gap-2 text-white'>Contact<FaEnvelope/></a>
  </div>
  <div className='flex justify-center gap-6 text-2xl mb-4'>
    <a href="#"><FaFacebook/></a>
    <a href="#"><FaInstagram/></a>
    <a href="#"><FaTwitter/></a>
    <a href="#"><FaYoutube/></a>
   
  </div>
  <div className='text-right text-sm pr-8'>
    <a href="#">Terms of Service</a>-
    <a href="#">Private Policy</a>
  </div>
</footer>
</div>
  )
}

export default App
