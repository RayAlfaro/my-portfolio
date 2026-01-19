import React from "react";

const Reflection = () => {
  return (
    <section
      id="reflection"
      className="py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          {" "}
          <span className="text-outline">Reflection</span>
        </h2>

        <p className="text-gray-500 text-center mb-12">
          I gained valuable technical experience from this project.
        </p>

        <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12  border border-white/20">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              What technologies did you use and why?
            </h3>

            <p className="text-slate-300 mb-4">
              I used React JS to build a dynamic and component-based user
              interface, making the website efficient and easy to maintain.
              Tailwind CSS was used for styling to quickly create a responsive,
              clean, and modern design.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              Which parts of the portfolio were easiest for you?
            </h3>

            <p className="text-slate-300 mb-4">
              The easiest part of the portfolio for me was the My Projects
              section, including the project explanations. I was already
              familiar with the projects, which made it easier to present the
              details clearly and organize the content effectively.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              Which parts were most challenging?
            </h3>

            <p className="text-slate-300 mb-4">
              The most challenging part was the landing page/Home page,
              especially the animations. Creating smooth and responsive
              animations was complicated and required careful planning and
              adjustments to achieve the desired design and performance.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              What technologies are you most interested in learning?
            </h3>

            <p className="text-slate-300 mb-4">
              The technology I am most interested in learning is Artificial
              Intelligence (AI). I am interested in AI because it can solve
              complex problems, automate tasks, and improve decision-making.
              Learning AI will help me create smarter systems and expand my
              skills for future IT projects and career opportunities.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">
              What kind of applications do you want to build in the future?
            </h3>

            <p className="text-slate-300 mb-4">
              I want to build applications that can help society in their daily
              tasks, making life easier and more convenient. I am also
              interested in developing income-generating applications that can
              provide opportunities for people to earn money while using the
              app. My goal is to create software that is both useful and
              impactful, addressing real-world problems and improving the
              quality of life for its users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
