import React, { useState } from 'react';

import {  NavLink} from  'react-router-dom';

const DropdownMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <div style={{'zIndex': '1', }} className="flex justify-between items-center sticky top-0 bg-blue-50 border ">
     <h1 className="font-bold text-2xl sm:text-3xl pl-6">MarkTechRover</h1>

      <div className="flex space-x-4 p-6 gap-10  ">
        <div
          className="relative  "
          onMouseEnter={() => handleMouseEnter('seo')}
          onMouseLeave={handleMouseLeave}
          
        >
          <button className="hover:text-blue-400">SEO & Lead Generation</button>
          {openMenu === 'seo' && (
            <div style={{'zIndex': '1'}} className="absolute top-full left-full transform -translate-x-96 mt-2 border rounded-lg shadow-lg flex gap-10 bg-gray-50 p-6   ">
              <ul className="w-72 p-4 border rounded-md shadow-lg ">
                <li className="font-bold  mb-4">Organic Search</li>
                <NavLink to="/seo"><li className="px-4 py-2 hover:text-blue-400">Seo Services</li></NavLink>
                <NavLink to="/enterprise-seo"><li  className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li></NavLink>
                <NavLink to="/local-seo" ><li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li></NavLink>
                <NavLink to="/google-ads" ><li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li></NavLink>
                <NavLink to="/seo-audits" ><li className="px-4 py-2 hover:text-blue-400">SEO Audits</li></NavLink>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Digital Advertising</li>
                <NavLink to="/ppcmanagement" ><li className="px-4 py-2 hover:text-blue-400">PPC Mangement Services</li></NavLink>
                <NavLink to="/enterprise-ppc " ><li className="px-4 py-2 hover:text-blue-400">Enterprise PPC Management Services</li></NavLink>
                <NavLink to="/social-media " ><li className="px-4 py-2 hover:text-blue-400">Socisl Media Advertising</li></NavLink>
                <NavLink to="/enterprise-social-media " ><li className="px-4 py-2 hover:text-blue-400">Enterprise Socail Media Advertising</li></NavLink>
                <NavLink to="/programmatic " ><li className="px-4 py-2 hover:text-blue-400">Programmatic Advertising Servives</li></NavLink>
                
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Ecommerce</li>
                <NavLink to="/ecommerce-seo " ><li className="px-4 py-2 hover:text-blue-400">Ecommerce SEO Services</li></NavLink>
                <NavLink to="/ecommerce-ppc " ><li className="px-4 py-2 hover:text-blue-400">Ecommerce PPC Services</li></NavLink>
                <NavLink to="/ecommerce-social-media " ><li className="px-4 py-2 hover:text-blue-400">Ecommerce Social Media Advertising</li></NavLink>
                <NavLink to="/b2b-commerce " ><li className="px-4 py-2 hover:text-blue-400">B2B Ecommerce Enablement</li></NavLink>
                <NavLink to="/shopping-feed " ><li className="px-4 py-2 hover:text-blue-400">Shopping Feed Automation</li></NavLink>
                
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Learn</li>
                <NavLink to="/our-seo " ><li className="px-4 py-2 hover:text-blue-400">Our SEO Result</li></NavLink>
                <NavLink to="/seo-case-studies " ><li className="px-4 py-2 hover:text-blue-400">Our SEO Case Studies</li></NavLink>
                <NavLink to="/seo-company " ><li className="px-4 py-2 hover:text-blue-400">What Is an SEO Company?</li></NavLink>
                <NavLink to="/best-seo-company " ><li className="px-4 py-2 hover:text-blue-400">How to Find the Best SEO Company</li></NavLink>
                <NavLink to="/seo-guide " ><li className="px-4 py-2 hover:text-blue-400">SEO Guide for Marketing Managers</li></NavLink>
                <NavLink to="/page-speed " ><li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li></NavLink>
              </ul>
              {/* Add more lists here for SEO */}
            </div>
          )}
        </div>
        <div 
    
          className="relative  "
          onMouseEnter={() => handleMouseEnter('cro')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-blue-400">Revenue Marketing & CRO</button>
          {openMenu === 'cro' && (
            <div style={{ '--tw-translate-x': '-50%', 'z-index': '1'}} className="absolute top-full left-full transform  mt-2 border rounded-lg shadow-lg flex gap-10 bg-gray-50 p-6">
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Digital Intelligence</li>
                <li className="px-4 py-2 hover:text-blue-400">Web Channel Call Tracking</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Reporting & Forecasting</li>
                <li className="px-4 py-2 hover:text-blue-400">Channel Attribution & Forecasting</li>
                <li className="px-4 py-2 hover:text-blue-400">Digital Marketing Competitor Analysis</li>
                <li className="px-4 py-2 hover:text-blue-400">Private Equity Due Diligence</li>
                
              </ul>
              
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Conversion</li>
                <li className="px-4 py-2 hover:text-blue-400">Conversion Rate Optimization</li>
                <li className="px-4 py-2 hover:text-blue-400">User Experience Testing</li>
                <li className="px-4 py-2 hover:text-blue-400">Landing Pages & Funnels</li>
                <li className="px-4 py-2 hover:text-blue-400">Online Review Acceleration</li>
                <li className="px-4 py-2 hover:text-blue-400">Channel Partner Sales Pipeline Management</li>
               
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Marketing Automation</li>
                <li className="px-4 py-2 hover:text-blue-400">Account-Base Marketing Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Lead Nurture Email Marketing</li>
                <li className="px-4 py-2 hover:text-blue-400">Email Marketing Managemengt</li>
                <li className="px-4 py-2 hover:text-blue-400">Salesforce Marketing Automation</li>
                <li className="px-4 py-2 hover:text-blue-400">Microsoft Dynamics Marketing Automation</li>
                
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Commerce Platforms</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO for Amazon</li>
                <li className="px-4 py-2 hover:text-blue-400">Advertising Management for Amazon</li>
                <li className="px-4 py-2 hover:text-blue-400">Shopify Optimization Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Facebook Marketplace for Business</li>
                <li className="px-4 py-2 hover:text-blue-400">Influencer Marketing Services</li>
                
              </ul>
             
              {/* Add more lists here for CRO */}
            </div>
          )}
        </div>
        <div
          className="relative "
          onMouseEnter={() => handleMouseEnter('ux')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-blue-400">UX & Interactive</button>
          {openMenu === 'ux' && (
            <div style={{ '--tw-translate-x': '-55%','z-index': '1' }} className="absolute top-full left-3/2 transform  mt-2 border rounded-lg shadow-lg flex gap-10 bg-gray-50 p-6">
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              {/* Add more lists here for UX */}
            </div>
            
          )}
        </div>
        <div
          className="relative "
          onMouseEnter={() => handleMouseEnter('tech')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-blue-400">Technology</button>
          {openMenu === 'tech' && (
            <div style={{ '--tw-translate-x': '-70%' ,'z-index': '1' }} className="absolute top-full  transform   mt-2 border rounded-lg shadow-lg flex gap-10 bg-gray-50 p-6">
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              {/* Add more lists here for SEO */}
            </div>
          )}
        </div>

        <div
          className="relative "
          onMouseEnter={() => handleMouseEnter('whoWeAre')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-blue-400">Who we are</button>
          {openMenu === 'whoWeAre' && (
            <div style={{ '--tw-translate-x': '-91%','z-index': '1' }} className="absolute top-full left-full transform  mt-2 border rounded-lg shadow-lg flex gap-10 bg-gray-50 p-6">
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              <ul className="w-72 p-4 border rounded-md shadow-lg">
                <li className="font-bold  mb-4">Organic Search</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Enterprise SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Local SEO Services</li>
                <li className="px-4 py-2 hover:text-blue-400">Google Local Services Ads Management</li>
                <li className="px-4 py-2 hover:text-blue-400">SEO Audits</li>
                <li className="px-4 py-2 hover:text-blue-400">Page Speed & Core Web Vitals Optimization</li>
              </ul>
              {/* Add more lists here for SEO */}
            </div>
          )}
        </div>



        
        
      </div>
      <button className="bg-blue-500 text-white font-bold m-4 px-3 py-2 text-center rounded mr-4">Get a Proposal</button>
    </div>
  );
};

export default DropdownMenu;