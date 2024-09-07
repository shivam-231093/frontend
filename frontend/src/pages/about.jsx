

import React from 'react';

const AboutPage = () => {
  return (
    <div className=" bg-gray-100 text-gray-900">
        <div className=''>
            <div className="relative h-96 bg-cover bg-clip-text " style={{ backgroundImage: "url('banner.webp')"}}>
                <div className="absolute inset-0 overflow-hidden bg-black h-100 bg-cover opacity-90 transform -skew-y-3 origin-top-left" style={{ backgroundImage: "url('banner.webp')"}}>
                
                    <div className="relative flex flex-col skew-y-3 items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Our Vision
                        </h1>
                    </div>
                </div>
            </div>
        </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
       

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Revolutionizing Citizen Science Through Collaborative Innovation</h2>
          <p className="text-lg leading-relaxed">
            In an age where data drives scientific discovery, the challenge of sifting through massive datasets has become more daunting than ever. At the heart of our mission is the belief that citizen science can transform the way we approach data analysis. Our platform is designed to harness the collective power of the public to tackle the complexities of data interpretation, offering a solution that not only amplifies research efforts but also engages a diverse range of contributors.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Citizen Science?</h2>
          <p className="text-lg leading-relaxed">
            Research organizations, including prominent ones like ISRO with its Aditya L1 mission, generate vast amounts of valuable data. Yet, despite its potential, sorting and analyzing this data remains a significant hurdle for scientists who juggle multiple projects. Traditional AI systems, while powerful, often struggle to recognize novel insights amidst the noise, relying heavily on pre-existing data.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our platform addresses this gap by democratizing data analysis. By involving the public, we can leverage a broad spectrum of expertise to make sense of complex datasets. We categorize tasks based on the skill level required, allowing school children to contribute to image classification, college students to handle more sophisticated analyses, and professionals such as PhD holders to engage in intricate research.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Engaging and Empowering Participants</h2>
          <p className="text-lg leading-relaxed">
            To ensure active participation and a rewarding experience, our platform incorporates gamification elements like points, badges, and leaderboards. These features not only motivate users but also recognize and celebrate their contributions. We provide tailored training modules to guide users through their tasks, enhancing their understanding and effectiveness.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            A robust feedback system allows contributors to see the tangible impact of their work, offering recognition for significant findings and encouraging continued engagement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Collaborating with Educational Institutions</h2>
          <p className="text-lg leading-relaxed">
            We believe in integrating citizen science into educational curricula. By partnering with schools and universities, we provide students with practical experience in real-world scientific research, bridging the gap between theoretical knowledge and practical application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ensuring Quality and Advancing AI</h2>
          <p className="text-lg leading-relaxed">
            Quality control is paramount. Our platform employs mechanisms such as AI error detection and peer reviews to maintain the reliability of contributions. As we progress, we aim to train AI systems based on human activity and expert analysis, paving the way for more efficient and accurate data classification in future research.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our vision is to create a dynamic, inclusive platform that not only advances scientific research but also empowers individuals from all walks of life to contribute to groundbreaking discoveries.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
