import React, { useState } from 'react';
import { FaSearchDollar, FaLaptopCode , FaLink, FaChartLine, FaChartBar, FaAd, FaTools } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdCodeWorking, IoMdCash, IoMdStar, IoMdTrendingUp, IoMdCheckmarkCircleOutline, IoMdShareAlt, IoMdSchool, IoMdCall } from "react-icons/io";

import Footer from '../Footer';

const services = [
  {
    title: "Contractor Web Development",
    description: "We offer state-of-the-art web development services tailored for contractor businesses. Our websites are designed to attract potential clients, showcase services, and facilitate online bookings.",
    icon: IoMdCodeWorking,
    color: "#3498db" // Blue
  },
  {
    title: "Contractor PPC",
    description: "Our Contractor Pay-Per-Click (PPC) services ensure that your business appears at the top of search engine results. We create targeted ad campaigns that drive traffic and generate leads.",
    icon: IoMdCash,
    color: "#e74c3c" // Red
  },
  {
    title: "Online Review Generation",
    description: "We help you build and manage a positive online reputation by generating authentic reviews from your clients. Our strategies ensure that your business stands out with stellar reviews.",
    icon: IoMdStar,
    color: "#f1c40f" // Yellow
  },
  {
    title: "Contractor SEO",
    description: "Our specialized Contractor SEO services improve your website's visibility on search engines. We optimize your site with targeted keywords to attract more potential clients searching for contractor services.",
    icon: IoMdTrendingUp,
    color: "#2ecc71" // Green
  },
  {
    title: "Reputation Management",
    description: "Our reputation management services help you maintain a positive online presence. We monitor reviews, respond to feedback, and implement strategies to enhance your business's reputation.",
    icon: IoMdCheckmarkCircleOutline,
    color: "#9b59b6" // Purple
  },
  {
    title: "Contractor Social Media Management",
    description: "We manage your social media profiles to engage with your community and build a strong online presence. Our services include creating content, posting updates, and interacting with followers.",
    icon: IoMdShareAlt,
    color: "#34495e" // Dark Blue
  },
  {
    title: "Contractor Staff Training",
    description: "Our Contractor Staff Training services provide comprehensive training programs to ensure your staff is knowledgeable and efficient in contractor operations, enhancing client service and business management.",
    icon: IoMdSchool,
    color: "#e67e22" // Orange
  },
  {
    title: "Call Tracking",
    description: "Our Call Tracking services help you monitor and analyze phone calls from potential clients. This allows you to measure the effectiveness of your marketing campaigns and improve client communication.",
    icon: IoMdCall,
    color: "#1abc9c" // Teal
  },
];

const faqList = [
  {
    question: "What kind of website can you create for my contractor business?",
    answer: "We design and develop user-friendly websites tailored to your business. The website will showcase your services, facilitate online bookings, and provide valuable client information. It will also be optimized for search engines to improve visibility."
  },
  {
    question: "How can SEO benefit my contractor business?",
    answer: "SEO helps improve your website's visibility on search engines, making it easier for potential clients to find you. This can lead to increased traffic and more bookings."
  },
  {
    question: "What is the importance of online reviews for my business?",
    answer: "Online reviews build trust and credibility. Positive reviews can attract more clients, while addressing negative feedback can improve your business's reputation."
  },
  {
    question: "How can social media marketing help my contractor business?",
    answer: "Social media marketing helps you connect with your community, share valuable content, and attract new clients. It can also enhance your business's online presence and reputation."
  },
  {
    question: "What is PPC advertising and how does it work for contractors?",
    answer: "PPC (Pay-Per-Click) advertising allows you to display ads on search engines and social media. You only pay when someone clicks on your ad. It's an effective way to drive targeted traffic to your website."
  },
];

const Contractor = () => {
  const [visibleQuestion, setVisibleQuestion] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleQuestion(visibleQuestion === index ? null : index);
  };

  return (
    <>
      <div className="h-screen bg-blue-300 flex flex-col justify-center items-center text-center p-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">Contractor Online Solutions</h1>
          <p className="text-xl text-white mb-8">“Ensure the Best Services with Our Digital Solutions for Contractor Businesses”</p>
          <img src="" alt="Contractor Banner" className="w-full h-auto" />
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="py-16 p-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">Our Recent Works</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 1" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Reliable Builders</h2>
              <p className="text-gray-700">"Our online presence has improved dramatically thanks to their comprehensive marketing strategy."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 2" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Urban Contractors</h2>
              <p className="text-gray-700">"We've seen a significant increase in client inquiries and website traffic."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 3" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Lakeside Builders</h2>
              <p className="text-gray-700">"Their expertise in contractor marketing is unmatched. Highly recommend!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 4" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Country Side Contractors</h2>
              <p className="text-gray-700">"Our online presence has improved dramatically thanks to their comprehensive marketing strategy."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 5" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">City Contractors</h2>
              <p className="text-gray-700">"We've seen a significant increase in client inquiries and website traffic."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 6" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Riverside Contractors</h2>
              <p className="text-gray-700">"Their expertise in contractor marketing is unmatched. Highly recommend!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 7" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Downtown Contractors</h2>
              <p className="text-gray-700">"Our online presence has improved dramatically thanks to their comprehensive marketing strategy."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
              <img src="" alt="Client 8" className="w-32 h-32 mx-auto mb-4 rounded-full object-cover" />
              <h2 className="text-2xl font-bold mb-2">Suburban Contractors</h2>
              <p className="text-gray-700">"We've seen a significant increase in client inquiries and website traffic."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story section */}
      <div className="flex ml-20 mr-20 gap-10 mt-10">
        <div className="w-full flex flex-col items-center p-4">
          <h1 className="text-5xl font-bold text-center mb-4">Dental Marketing With A Guarantee</h1>
          <p className='text-xl p-4'>Life comes with very few guarantees. Luckily, MarkTechrover digital marketing for dentists is one of them! We understand that we need to earn your trust.
            That's why we have confidence in our team's expertise and ability to help you achieve your goals by absorbing the upfront risk, so you won't have to.</p>
          <p className='text-xl p-4'>If our dental digital marketing services don't deliver results within the first 30 days, we won't charge you a single penny, guaranteed.</p>
        </div>
        <div className="">
          <img src="" alt="Rainbow Dental" />
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="flex ml-20 mr-20 gap-10 mt-10">
        <div className="w-full flex items-center justify-center">
          <img src="" alt="Rainbow Dental" />
        </div>
        <div className="w-full flex flex-col items-center p-4">
          <h1 className="text-5xl font-bold text-center mb-4">An End-To-End Dental Marketing Company</h1>
          <p className='text-xl p-4'>Dental offices seeking digital marketing services need a provider that covers every aspect of their business.
            At MarkTechrover, we assign you a dedicated Customer Success Manager to establish goals and develop a timeline to reach them.</p>
          <p className='text-xl p-4'>Our digital marketing for dental practices provides a host of features including the design of a new or updated website.
            Our expert web designers, graphic artists and content writers will design,
            build and launch your custom website complete with fully optimized, eye-catching content that looks great on any device.</p>
           </div>
      </div>

      {/* THIRD SECTION */}
      <div className="flex ml-20 mr-20 gap-10 mt-10">
        <div className="w-full flex flex-col items-center p-4">
          <h1 className="text-5xl font-bold text-center mb-4">Go Beyond Digital Marketing for Your Dental Clinic</h1>
          <p className='text-xl p-4'>Online review generation and reputation management is a vital part
            of digital marketing for dental clinics. MarkTechrover creates a user-friendly application  
              to help you manage your online reputation like never before.</p>
          <p className='text-xl p-4'>Take control of your review process and start generating the 5 star reviews you need
            and quickly address negative feedback right away with this intuitive dental clinic digital marketing tool.</p>
          
        </div>
        <div className="w-full flex items-center justify-center">
          <img src="" alt="Rainbow Dental" />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:scale-105 transition">
                <service.icon className="text-6xl mx-auto mb-4" style={{ color: service.color }} />
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {/* STEPS TO IMPLEMENT A DENTAL MARKETING STRATEGY */}

     <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8  ">
      <h1 className='text-center text-5xl font-bold m-4 mb-16 rounded-sm'>Steps to Implement a Dental Marketing Strategy</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16  ml-10 mr-10">
        <div className="md:col-span-2 space-y-12 ">
          
          <p className="mb-4">
            MarkTechrover providers – whether general dentists, orthodontists, periodontists, or any other specialist – have experienced dramatic changes in their sector over the past several decades. The days of a small, local practice that treats generations of the same family are dwindling.
          </p>
          <p className="mb-4">
            Growing urbanization makes the small-town model less financially viable and potential patients are relying less upon the recommendation of family and friends in the dental business and more on online reputations. Yelp, Facebook, and Google+ reviews can determine a potential patient’s opinion, but so can other online marketing factors from ranking to a website’s user experience.
          </p>
          <p className="mb-4">
            This is why dental SEO services are imperative to stay competitive, and Coalition Technologies is here to help. We can help you build relationships with new marketplaces in order to increase the number of loyal clients your practice serves.
          </p>
          <p className="mb-4">
            We develop data-driven SEO strategies and <a href="#" className="text-blue-600 underline">customized SEO pricing packages</a> that can take your business to the top of the front page. These are just some of the services that can help your practice succeed:
          </p>
        </div>
        <div>
          <ul className="space-y-10">
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
              <FaPeopleGroup />
              </span>
              <span>Understanding the Client</span>
            </li>
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
              <FaLaptopCode />
              </span>
              <span>Website Development</span>
            </li>
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                
                <FaSearchDollar size={20}/>
              </span>
              <span>SEO Optimization</span>
            </li>
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                <FaLink />
              </span>
              <span>Content Creation</span>
            </li>
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                <FaChartLine />
              </span>
              <span>Social Media Marketing</span>
            </li>
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                <FaChartBar />
              </span>
              <span> Performance Tracking</span>
            </li>
            <li className="flex items-center hover:scale-105 transition">
              <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
                <FaAd />
              </span>
              <span>Paid Advertising ( Optional )</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

      {/* What Clients Say */}
      <div className="h-screen p-32 ">
      <div>
        <h1 className="text-center text-5xl font-extrabold  p-4 ">What Our Clients Are Saying</h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Discover the impact of Marktechrover’s digital solutions
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 mt-10 mb-10">
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg text-center p-6 hover:scale-105 transition" >
          <p className="italic p-2 text-gray-700">
            "Marktechrover transformed our online presence. Their team developed
            a user-friendly website that showcases our services and facilitates
            online appointments. Their SEO strategies improved our visibility,
            attracting more patients. The engaging content they create positions
            us as experts in our field. Their social media management and
            targeted ad campaigns have increased our reach. Their
            continuous support and updates have been invaluable."
          </p>
          <img
            className="w-20 h-20 rounded-full mx-auto mt-8 object-cover"
            src=""
            alt="Dr. Nisha"
          />
          <h1 className="text-xl font-bold p-2 text-gray-800">Dr. Nisha</h1>
          <p className="text-gray-600">Western Sydney Smiles</p>
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg hover:scale-105 transition text-center p-6">
          <p className="italic p-2 text-gray-700">
            "Working with Marktechrover has been a game-changer. They created a
            customized website that reflects our brand and makes online shopping
            easy for our patients. Their SEO expertise, engaging content
            creation, and effective social media marketing have resulted in a
            noticeable increase in new patients. Their paid advertising
            strategies are cost-effective and have a high conversion rate. We
            appreciate their regular performance tracking and updates."
          </p>
          <img
            className="w-20 h-20 rounded-full mx-auto mt-8 object-cover"
            src=""
            alt="Dr. Shalini Sunkara"
          />
          <h1 className="text-xl font-bold p-2 text-gray-800">Dr. Shalini Sunkara</h1>
          <p className="text-gray-600">Rainbow Dental</p>
        </div>
        <div className="w-full lg:w-1/3 bg-white rounded-lg hover:scale-105 transition shadow-lg text-center p-6">
          <p className="italic p-2 text-gray-700">
            "Marktechrover’s digital solutions have helped us grow our practice.
            They developed a website that not only looks great but is also easy
            to navigate and optimized for search engines. Their content creation
            and social media management have helped us build a strong online
            community. Their paid advertising campaigns have been successful in
            attracting new patients. We highly value their ongoing support and
            updates as our practice evolves."
          </p>
          <img
            className="w-20 h-20 rounded-full mx-auto mt-8 object-cover"
            src=""
            alt="Dr. Jessica Li"
          />
          <h1 className="text-xl font-bold p-2 text-gray-800">Dr. Jessica Li</h1>
          <p className="text-gray-600">Marvel Orthodontics</p>
        </div>
      </div>
    </div>

     {/* FREQUENT ASK QUESTIONS */}
     <div className="h-screen p-16">
  <h1 className="text-center text-5xl font-bold mb-10">Dental Marketing FAQs</h1>
  <div className="p-8 rounded-lg">
    {faqList.map((faq, index) => (
      <div key={index} className="mb-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => toggleVisibility(index)}>
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span className="text-xl">{visibleQuestion === index ? '-' : '+'}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${visibleQuestion === index ? 'h-auto' : 'h-0'}`}
            aria-hidden={visibleQuestion !== index}
          >
            <p className="p-4">{faq.answer}</p>
          </div>
        </div>
        {index < faqList.length - 1 && <hr className="my-4 border-t border-gray-300" />}
      </div>
    ))}
  </div>
</div>


      <Footer />
    </>
  );
};

export default Contractor;