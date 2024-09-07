import React from 'react'
import MarktechLogo from '../../assets/icons/Mark.jpeg'
import group from '../../assets/icons/Group.jpeg'

const HelpCompo = () => {
    return (
        <>
            <div className='bg-white h-screen text-black p-10 mb-96'>
                <div>
                    <h1 className='text-blue-400 text-5xl font-bold text-center pt-10 mb-10'>WHY CHOOSE US ?</h1>
                    <p className=' text-xl text-center mb-2'>Marktechrover can help your organization grow wonders.</p>
                </div>
                <div className='flex justify-around items-center'>
                    <div className='w-1/3 h-1/3 p-4'>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>EXPERTISE</h1>
                        <p>We conduct thorough market and competitor research to help you understand your industry landscape and identify opportunities for growth.</p>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>RESULT ORIENTED</h1>
                        <p>We create responsive, user-friendly websites tailored to your brand and business goals. Our team of skilled developers ensures your website is optimized for performance and user experience.</p>
                    </div>
                    <div className='w-1/4 h-1/3 bg-blue-100 rounded-3xl text-white'>
                        <img src={MarktechLogo} alt="logooooooo" />
                    </div>
                    <div className='w-1/3 h-1/3 p-4'>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>CUSTOM SOLUTIONS</h1>
                        <p>We manage and optimize your social media profiles to engage with your audience, build your brand, and increase your reach and visibility.</p>
                        <h1 className='text-blue-400 p-6 text-2xl font-bold text-center'>PARTNERSHIP</h1>
                        <p>Our team designs and manages effective paid advertising campaigns across various platforms to target your desired audience and convert them into customers.</p>
                    </div>
                </div>
                <div className='flex justify-around h-5/6'>
                    <div className='w-3/6'>
                        <img className='w-full h-full' src={group} alt="Group" />
                    </div>
                    <div className='w-3/6'>
                        <div className='pb-10 pt-28'>
                            <h1 className='text-blue-400 p-6 text-4xl font-bold'>OUR TEAM SKILLS</h1>
                            <p className='text-xl pt-2 pl-6' > Our team at Marktechrover, with over 5 years of experience, excels in delivering top-notch digital solutions. We’re committed to excellence, ensuring the best outcomes for our clients.</p>
                        </div>
                        <div className='flex justify-around w-full pt-2'>
                            <div className='w-1/3'>
                                <h1 className=''>SEO</h1>
                                <div className='w-full bg-gray-200 rounded-full h-6 mt-2 mb-4'>
                                    <div className='bg-blue-400 h-6 rounded-full' style={{ width: '90%' }}> <p className='pl-44'> 90%</p> </div>
                                </div>
                                <h1 className=''>UI/UX DESIGNER</h1>
                                <div className='w-full bg-gray-200 rounded-full h-6 mt-2 mb-4'>
                                    <div className='bg-blue-400 h-6 rounded-full' style={{ width: '100%' }}><p className='pl-44'> 100%</p> </div>
                                </div>
                            </div>
                            <div className='w-1/3'>
                                <h1 className=''>CONTENT MANAGEMENT</h1>
                                <div className='w-full bg-gray-200 rounded-full h-6 mt-2 mb-4'>
                                    <div className='bg-blue-400 h-6 rounded-full' style={{ width: '90%' }}><p className='pl-44'> 92%</p> </div>
                                </div>
                                <h1 className=''>WEB DEVELOPMENT</h1>
                                <div className='w-full bg-gray-200 rounded-full h-6 mt-2 mb-4'>
                                    <div className='bg-blue-400 h-6 rounded-full' style={{ width: '100%' }}><p className='pl-44'> 100%</p> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpCompo