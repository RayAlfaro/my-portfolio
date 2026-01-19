import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">About <span className="text-outline">Me</span></h2>

        <p className="text-gray-500 text-center mb-12">
          Get to know more about my background and achievements.
        </p>

        <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Who am I?</h3>

            <p className="text-slate-300 mb-4">
              I am currently a third-year Information Technology student with
              hands-on experience in leading and developing several website
              projects. In the past, I have worked on different systems such as
              IoT-integrated websites, billing systems, and monitoring and
              tracking systems. These projects helped me strengthen my skills in
              system development, teamwork, and problem-solving while applying
              what I learned from both academic and practical experiences.
            </p>
            <p className="text-slate-300 mb-4">
              Outside of academics, I enjoy trying new things and constantly
              challenging myself to improve my skills and mindset. I have a
              strong interest in self-development, especially through reading
              books related to financial stability and building good habits. I
              believe continuous learning and discipline are important not only
              in technology but also in personal growth, which motivates me to
              keep improving as a future IT professional.
            </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <p>Name:</p>
              <p className="font-medium text-white">Raylynndon Alfaro</p>
            </div>
            <div>
              <p>Email:</p>
              <p className="font-medium text-white">
                raylynndonalfaro@gmail.com
              </p>
            </div>
            <div>
              <p>Phone No.:</p>
              <p className="font-medium text-white">+639618021183</p>
            </div>
            <div>
              <p>Availability:</p>
              <p className="font-medium text-white">Full Time/Free Lance</p>
            </div>
          </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              My Achievements
            </h3>

            <p className="text-slate-300 mb-4">
              One of my key achievements is leading multiple academic and system
              development projects that contributed to the successful completion
              of our coursework and helped my groupmates and me progress to our
              third year in college. Through these projects, I developed strong
              leadership, communication, and technical skills while guiding my
              team in planning, development, and problem-solving. These
              experiences strengthened my ability to manage responsibilities and
              work effectively in a collaborative environment. 
            </p>

            <p className="text-slate-300 mb-4" >In addition, I
              have served as a student leader for the past two years while
              consistently maintaining my place on the Dean’s List. Balancing   
              leadership duties, academic requirements, and deadlines taught me
              discipline, time management, and accountability. Despite a busy
              schedule, I remain punctual, organized, and focused on excellence
              in both academics and responsibilities, reflecting my commitment
              to personal growth and professional development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
