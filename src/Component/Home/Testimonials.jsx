import React from "react";
import nisha from '../../assets/nisha.png'
import shalini from '../../assets/shalini.png'
import jessica from '../../assets/jessica.png'

const Testimonials = () => {
  return (
    <div className="  flex justify-center mb-20">
    <div className=" p-4 mt-10 shadow-2xl w-11/12 rounded-3xl bg-white ">
      <div>
        <h1 className="text-center text-4xl font-bold  p-4">What Clients Say</h1>
        <p className="text-center  p-4">
        Marktechrover proud and loyal partners
        </p>
      </div>

      <div className="flex justify-evenly mt-10 mb-10 ">
        <div className="w-96 h-1/2 bg-white rounded-lg shadow-lg transition hover:scale-105 rounded-xl  text-center p-6 item-center justify-center">
          <p className="italic p-2">
            "Marktechrover transformed our online presence. Their team developed
            a user-friendly website that showcases our services and facilitates
            online appointments. Their SEO strategies improved our visibility,
            attracting more patients. The engaging content they create positions
            us as experts in our field. Their social media management and
            targeted ad campaigns have  increased our reach. Their
            continuous support and updates have been invaluable."
          </p>
          <img
            className="w-20 h-20 rounded-full mt-8 ml-32 object-cover bg-cover "
            src={nisha}
            alt=""
          />
          <h1 className="text-xl font-bold p-2">Dr. Nisha</h1>
          <p>Western Sydney Smiles</p>
        </div>
        <div className="w-96 h-1/2 bg-white rounded-lg shadow-lg transition hover:scale-105 rounded-xl   text-center p-6 item-center justify-center">
          <p className="italic p-2">
            "Working with Marktechrover has been a game-changer. They created a
            customized website that reflects our brand and makes online shopping
            easy for our patients. Their SEO expertise, engaging content
            creation, and effective social media marketing have resulted in a
            noticeable increase in new patients. Their paid advertising
            strategies are cost-effective and have a high conversion rate. We
            appreciate their regular performance tracking and updates."
          </p>
          <img
            className="w-20 h-20 rounded-full mt-8 ml-32 object-cover bg-cover "
            src={shalini}
            alt=""
          />
          <h1 className="text-xl font-bold p-2">Dr. Shalini Sunkara</h1>
          <p>Rainbow Dental</p>
        </div>
        <div className="w-96 h-1/2 bg-white rounded-lg shadow-lg hover:shadow-lg transition hover:scale-105 rounded-xl  text-center p-6 item-center justify-center">
          <p className="italic p-2">
            "Marktechrover’s digital solutions have helped us grow our practice.
            They developed a website that not only looks great but is also easy
            to navigate and optimized for search engines. Their content creation
            and social media management have helped us build a strong online
            community. Their paid advertising campaigns have been successful in
            attracting new patients. We highly value their ongoing support and
            updates as our practice evolves."
          </p>
          <img
            className="w-20 h-20 rounded-full mt-8 ml-32 object-cover bg-cover "
            src={jessica}
            alt=""
          />
          <h1 className="text-xl font-bold p-2">Dr. Jessica Li
          </h1>
          <p>Marvel Orthodontics
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
