// src/components/ServicePage.jsx
import React from 'react';

const ServicePage = () => {
  return (
    <div className="min-h-screen py-10 ">
         <div className=''>
            <div className="relative h-96 bg-cover bg-clip-text " style={{ backgroundImage: "url('banner.webp')"}}>
                <div className="absolute inset-0 overflow-hidden bg-black h-100 bg-cover opacity-90 transform -skew-y-3 origin-top-left" style={{ backgroundImage: "url('banner.webp')"}}>
                
                    <div className="relative flex flex-col skew-y-3 items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Build a Research Project with Us
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      <div className="  bg-white max-w-4xl mx-auto px-4 py-12 rounded-lg ">
        
        <p className="mt-6 text-lg text-gray-700 text-center">
          Are you ready to make a meaningful contribution to cutting-edge scientific research? [Naam jo rakhna ho rakh lyna] empowers everyday people to participate in real-world data analysis, helping research organizations like ISRO extract crucial insights from vast amounts of data. Whether you’re a student, a professional, or a science enthusiast, there’s a place for you on our platform.
        </p>

        <h2 className="mt-10 text-3xl font-semibold text-gray-800">How It Works</h2>
        <p className="mt-4 text-lg text-gray-700">
          At [Naam jo rakhna ho rakh lyna], we divide complex data into manageable tasks based on your expertise level:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">School Students</h3>
            <p className="text-gray-700">Contribute by participating in basic tasks like image classification and pattern identification.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">College Students</h3>
            <p className="text-gray-700">Take on more advanced challenges like graph interpretation and data mapping.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Professionals</h3>
            <p className="text-gray-700">If you’re a PhD holder, professor, or expert in your field, engage in deep analysis to uncover intricate insights hidden in the data.</p>
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-semibold text-gray-800">Features Designed for Maximum Impact</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Crowdsourced Data Analysis</h3>
            <p className="text-gray-700">Assist research teams in analyzing large datasets by lending your time and skills.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Tailored Training Modules</h3>
            <p className="text-gray-700">Access resources that ensure you understand the tasks at your level, from beginner to advanced.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Gamification</h3>
            <p className="text-gray-700">Stay motivated with points, badges, and leaderboards for completing tasks with accuracy. Compete with others while making meaningful contributions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Recognition & Feedback</h3>
            <p className="text-gray-700">See the real-world impact of your work! Gain recognition for identifying significant discoveries and track how your efforts contribute to the bigger picture.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">AI and Human Collaboration</h3>
            <p className="text-gray-700">Help train AI systems by reviewing flagged errors or validating data, creating a feedback loop that improves future AI analysis.</p>
          </div>
        </div>

        <h2 className="mt-10 text-3xl font-semibold text-gray-800">A Collaborative Platform for Learning and Discovery</h2>
        <p className="mt-4 text-lg text-gray-700">
          Our goal is not only to crowdsource data analysis but to integrate this platform into education systems. We partner with schools and universities to provide hands-on experience for students, allowing them to contribute to genuine research projects that matter.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          By engaging students and professionals alike, we’re building a community that bridges the gap between academia and real-world scientific challenges.
        </p>

        <h2 className="mt-10 text-3xl font-semibold text-gray-800">Join Us Today</h2>
        <p className="mt-4 text-lg text-gray-700">
          By participating in [Naam jo rakhna ho rakh lyna], you can become an essential part of the research process. Help scientists uncover groundbreaking discoveries, improve AI systems, and gain invaluable experience in the field of scientific data analysis—all while making a real difference.
        </p>

        <div className="mt-10 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
