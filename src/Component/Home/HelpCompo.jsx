import React from 'react'
import MarktechLogo from '../../assets/icons/Mark.jpeg'

const HelpCompo = () => {
    return (
        <>
            <div className='bg-white h-screen text-black p-10'>
                <div className=''>
                    <h1 className='text-blue-400 text-5xl font-bold text-center pt-10 mb-10' >HOW CAN WE HELP ?</h1>
                    <h2 className=' text-xl text-center mb-2'>Marktechrover is a comprehensive digital services provider specializing <br />in a range of online services. Here’s how we can assist our customers:</h2>
                </div>
                <div className='flex justify-around items-center'>
                    <div className='w-1/3 h-1/3 p-4'>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center '>RESEARCH</h1>
                        <p className=''>We conduct thorough market and competitor research to help you understand your industry landscape and identify opportunities for growth.</p>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>WEBSITE DEVELOPMENT</h1>
                        <p className=''>We create responsive, user-friendly websites tailored to your brand and business goals.Our team of skilled developers ensures your website is optimized for performance and user experience.</p>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>SEO</h1>
                        <p className=''>Our SEO experts optimize your website to improve its visibility on search engines, driving more organic traffic to your site and increasing your online presence.</p>

                    </div>


                    <div  className='w-1/4 h-1/3 bg-blue-100 rounded-3xl text-white'>
                        <img src={MarktechLogo} alt="logooooooo" />
                    </div>
                    






                    <div className='w-1/3 h-1/3 p-4'>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>SOCIAL MEDIA</h1>
                        <p className=''>We manage and optimize your social media profiles to engage with your audience, build your brand, and increase your reach and visibility.</p>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>PAID ADS</h1>
                        <p className=''>Our team designs and manages effective paid advertising campaigns across various platforms to target your desired audience and convert them into customers.</p>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>SEO</h1>
                        <p className=''>Our SEO experts optimize your website to improve its visibility on search engines, driving more organic traffic to your site and increasing your online presence.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default HelpCompo