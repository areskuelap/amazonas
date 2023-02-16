import React from "react";
import {useState} from "react";
import Footer from "../../home/Footer";

export default function Faq() {



    const [one , setOne] = useState(false);
    const [two , setTwo] = useState(false);
    const [three , setThree] = useState(false);
    const [four , setFour] = useState(false);
    const [five , setFive] = useState(false);
  
    const oneClick = () => {
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);
    }
  
    const twoClick = () => {
      setOne(false);
      setTwo(true);
      setThree(false);
      setFour(false);
      setFive(false);
    }
  
    const threeClick = () => {
      setOne(false);
      setTwo(false);
      setThree(true);
      setFour(false);
      setFive(false);
    }
  
    const fourClick = () => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(true);
      setFive(false);
    }
  
    const fiveClick = () => {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(true)
    }
  
    return (
          <div className='bg-gray-100'>
        <div className='flex justify-center'>
          <div className='py-10'> 
            <p className='text-lg sm:text-3xl font-bold text-black'>Top FAQs</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div onClick={oneClick} className='flex justify-center h-20 items-center w-4/5 sm:w-2/3 border bg-white border-gray-300 rounded text-black hover:bg-gray-300 hover:text-white'>
            <div className='w-11/12'>
              <p className='text-lg sm:text-xl font-semibold'>Where can I purchase the Rail Pass in Japan?</p>
            </div>
          </div>
          </div>
          {one &&
          <div>
          <div className='flex justify-center'>
          <div className='flex justify-center py-6 px-2 sm:px-8 sm:py-10 items-center w-4/5 sm:w-2/3 bg-white text-black'>
            <div className='w-full sm:w-11/12'>
              <p className='text-base sm:text-lg text-gray-500'>This is a sample answer to one of the FAQs. Lorem ipsum is the standard message used in programming since the late 80s til now. You can copy and paste this message for any demostration purposes</p>
            </div>
          </div>
          </div>          
          </div>
          }
          <div className='flex justify-center'>
          <div onClick={twoClick} className='flex justify-center h-20 items-center w-4/5 sm:w-2/3 border bg-white border-gray-300 rounded text-black hover:bg-gray-300 hover:text-white'>
            <div className='w-11/12'>
              <p className='text-lg sm:text-xl font-semibold'>Where can I purchase the Rail Pass in Japan?</p>
            </div>
          </div>
          </div>
          {two &&
          <div>
          <div className='flex justify-center'>
          <div className='flex justify-center py-6 px-2 sm:px-8 sm:py-10 items-center w-4/5 sm:w-2/3 bg-white text-black'>
            <div className='w-full'>
              <p className='text-base sm:text-lg text-gray-500'>This is a sample answer to one of the FAQs. Lorem ipsum is the standard message used in programming since the late 80s til now. You can copy and paste this message for any demostration purposes</p>
            </div>
          </div>
          </div>          
          </div>
          }
          <div className='flex justify-center'>
          <div onClick={threeClick} className='flex justify-center h-20 items-center w-4/5 sm:w-2/3 border bg-white border-gray-300 rounded text-black hover:bg-gray-300 hover:text-white'>
            <div className='w-11/12'>
              <p className='text-lg sm:text-xl font-semibold'>Where can I purchase the Rail Pass in Japan?</p>
            </div>
          </div>
          </div>
          {three &&
          <div>
          <div className='flex justify-center'>
          <div className='flex justify-center py-6 px-2 sm:px-8 sm:py-10 items-center w-4/5 sm:w-2/3 bg-white text-black'>
            <div className='w-full'>
              <p className='text-base sm:text-lg text-gray-500'>This is a sample answer to one of the FAQs. Lorem ipsum is the standard message used in programming since the late 80s til now. You can copy and paste this message for any demostration purposes</p>
            </div>
          </div>
          </div>          
          </div>
          }
          <div className='flex justify-center'>
          <div onClick={fourClick} className='flex justify-center h-20 items-center w-4/5 sm:w-2/3 border bg-white border-gray-300 rounded text-black hover:bg-gray-300 hover:text-white'>
            <div className='w-11/12'>
              <p className='text-lg sm:text-xl font-semibold'>Where can I purchase the Rail Pass in Japan?</p>
            </div>
          </div>
          </div>
          {four &&
          <div>
          <div className='flex justify-center'>
          <div className='flex justify-center py-6 px-2 sm:px-8 sm:py-10 items-center w-4/5 sm:w-2/3 bg-white text-black'>
            <div className='w-full'>
              <p className='text-base sm:text-lg text-gray-500'>This is a sample answer to one of the FAQs. Lorem ipsum is the standard message used in programming since the late 80s til now. You can copy and paste this message for any demostration purposes</p>
            </div>
          </div>
          </div>          
          </div>
          }
          <div className='flex justify-center'>
          <div onClick={fiveClick} className='flex justify-center h-20 items-center w-4/5 sm:w-2/3 border bg-white border-gray-300 rounded text-black hover:bg-gray-300 hover:text-white'>
            <div className='w-11/12'>
              <p className='text-lg sm:text-xl font-semibold'>Where can I purchase the Rail Pass in Japan?</p>
            </div>
          </div>
          </div>
          {five &&
          <div>
          <div className='flex justify-center'>
          <div className='flex justify-center py-6 px-2 sm:px-8 sm:py-10 items-center w-4/5 sm:w-2/3 bg-white text-black'>
            <div className='w-full'>
              <p className='text-base sm:text-lg text-gray-500'>This is a sample answer to one of the FAQs. Lorem ipsum is the standard message used in programming since the late 80s til now. You can copy and paste this message for any demostration purposes</p>
            </div>
          </div>
          </div>          
          </div>
          }
          <div className='flex justify-center'>
          <div className='pt-10 pb-6 sm:pt-10 sm:pb-10'> 
            <p className='text-lg sm:text-3xl font-bold text-black'>Safety Information</p>
          </div>
        </div>
        <div className='flex pb-10 smp:pb-5 justify-center'>
          <div className='w-10/12 sm:w-3/5 grid grid-cols-3'>
            <div className='w-11/12 sm:w-10/12 border hover:border-8 hover:border-blue-500'>
              <img className='w-full' src='https://www.limaeasy.com/media/reviews/photos/thumbnail/1500x500s/50/f3/db/how-dangerous-is-peru-really-57-1619118428.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'/>
            </div>
            <div className='w-11/12 sm:w-10/12 border hover:border-8 hover:border-blue-500'>
              <img className='w-full' src='https://www.limaeasy.com/media/reviews/photos/thumbnail/1500x500s/50/f3/db/how-dangerous-is-peru-really-57-1619118428.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'/>
            </div>
            <div className='w-11/12 sm:w-10/12 border hover:border-8 hover:border-blue-500'>
              <img className='w-full' src='https://www.limaeasy.com/media/reviews/photos/thumbnail/1500x500s/50/f3/db/how-dangerous-is-peru-really-57-1619118428.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'/>
            </div>
          </div>
        </div>
        <Footer/>
          </div>
    );
}