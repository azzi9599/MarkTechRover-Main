import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
  return (
    <>
    <div className='bg-black text-white '>
      <div className='flex justify-around p-10'>
        <div className='w-1/3'>
          <p className='text-2xl p-10 text-bold'> 24,859,684+ <br /> LEADS DRIVEN <br /> FOR CLIENTS</p>
          <p className='text-2xl p-10 text-bold'> 3,212,407 <br /> HOURS OF <br /> EXPERTISE</p>
        </div>


        <div className='w-1/3'> 
            <p className='text-2xl p-10 text-bold'>$6,021,182,299+ <br />REVENUE DRIVEN <br /> FOR CLIENTS</p>
            <p className='text-2xl p-10 text-bold'> 500 <br /> EXPERTS <br /> ON STAFF</p>
        </div>



        <div className='bg-blue-100 rounded-lg w-1/3 mr-10'>
            <div><h2 className='text-black text-2xl text-center p-4'>Discover how we can help your <br /> business grow</h2></div>
            <div className='p-4 text-center h-18'> <input className='p-2 rounded-lg w-3/4 h-12' type="text" placeholder='Enter your website' /> </div>
            <div className='p-4 text-center h-18'> <button className='bg-blue-500 rounded-lg h-12 text-white p-2 w-3/5'>SEND ME PROPOSAL</button></div>
        </div>
      </div>

      <hr className='w-11/12 ml-10' />

      <div className='flex justify-around pl-24 pb-10 pt-14'>
        <div className='w-1/3'>
            <h1 className='text-3xl font-bold'>MARKTECHROVER</h1>
            <p className='text-lg pb-10'>celebrating 5 years of success.</p>
            <h2 className='pb-10'>Ready to speak with a marketing expert?<br /> Give us a ring</h2>
            <div className='bg-blue-500 rounded-lg w-3/4 h-12 p-2  text-center'><button className='text-white text-xl'>9999999997</button></div>
        </div>


        <div className='w-1/3 pl-10 bg-black '>
            <h1 className='pb-5 font-bold text-lg'>SERVICES</h1>
            <ul className=''>
                <li className='pb-2'>Digital Marketing Services</li>
                <li className='pb-2'>SEO Services</li>
                <li className='pb-2'>PPC Services</li>
                <li className='pb-2'>Content Marketing Services</li>
                <li className='pb-2'>Social Media Services</li>
                <li className='pb-2'>Web Design Services</li>
                <li className='pb-2'>Digital Advertising Services</li>
            </ul>
        </div>


        <div className='w-1/3 pl-10'>
            <h1 className='pb-5 font-bold text-lg'>KNOWLEDGEBASE</h1>
            <ul>
                <li className='pb-2'>Digital Marketing</li>
                <li className='pb-2'>SEO</li>
                <li className='pb-2'>PPC</li>
                <li className='pb-2'>Content Marketing</li>
                <li className='pb-2'>Social Media</li>
                <li className='pb-2'>Web Design</li>
                <li className='pb-2'>Amazon</li>
            </ul>
        </div>
      </div>


      <div className='flex bg-black text-white pl-24 pb-14 '>
      <div className='w-1/3 pl-10'>
            <h1 className='pb-5 font-bold text-lg'>ROLES</h1>
            <ul className=''>
                <li className='pb-2'>Digital Marketing Agency</li>
                <li className='pb-2'>SEO Agency</li>
                <li className='pb-2'>PPC Agency</li>
                <li className='pb-2'>Content Marketing Agency</li>
                <li className='pb-2'>Social Media Agency</li>
                <li className='pb-2'>Web Design Agency</li>
                <li className='pb-2'>Industries We Serve</li>
            </ul>
        </div>
        <div className='w-1/3 pl-10'>
            <h1 className='pb-5 font-bold text-lg'> COMPANY</h1>
            <ul className=''>
                <li className='pb-2'>About Us</li>
                <li className='pb-2'>Careers</li>
                <li className='pb-2'>Community Impact</li>
                <li className='pb-2'>Contact Us</li>
                <li className='pb-2'>Locations</li>
                <li className='pb-2'>Phishing Scam Alert</li>
                <li className='pb-2'>Tools</li>
            </ul>
        </div>
        <div className='w-1/3 pl-10'>
            <h1 className='pb-5 font-bold text-lg'>Explore</h1>
            <ul className=''>
                <li className='pb-2'>Color Picker</li>
                <li className='pb-2'>Emoji Cheat Sheet</li>
                <li className='pb-2'>Conversion Rate Calculator</li>
                <li className='pb-2'>SEO in Digital Marketing</li>
                <li className='pb-2'>SEO Vs. SEM</li>
                <li className='pb-2'>Return on Ad Spend</li>
                <li className='pb-2'>ROAS Calculator</li>
            </ul>
        </div>
      </div>

      <hr className='w-11/12 ml-10' />

      <div className='h-96 flex justify-between'>
        <div>
            <h1 className='pl-24 pt-14 font-bold text-lg'>PROUDLY BROUGHT TO YOU BY <br /> <br /> MARKTECHROVER</h1>
        </div>
        <div>
            <div className='pr-24 pt-14 font-bold text-lg'>
                <h1 className='font-bold text-lg'>MARKTECHROVER 2018-ONGOING</h1>
                <p className='pt-4'>Sitemap     Privacy and Terms of Use</p>
            </div>
                 
            <div className='flex gap-4 pt-6 '>
           < CiFacebook size={40}/>
           < CiTwitter size={40} />
           < CiLinkedin size={40} />
           < CiYoutube size={40} />
           < CiInstagram size={40}/>           
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer