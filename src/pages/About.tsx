import { type ReactNode } from "react";
import TechStack from "../components/TechStack.tsx";

type SectionCardProps = {
  title: string;
  child: ReactNode;
  variant?: string;
};

const SectionCard = ({
  title,
  child,
  variant = "bg-base-200",
}: SectionCardProps) => (
  <div
    className={`card ${variant} shadow-md p-6 border border-base-300 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:text-primary`}
  >
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{title}</h3>
    {child}
  </div>
);

const IntroContent = () => (
  <p className="text-base-content text-lg mt-4 hover:text-primary transition-colors duration-200 cursor-default">
    I'm an undergraduate at Duke University studying Electrical & Computer
    Engineering with a double major in Computer Science. I'm driven toward
    developing scalable systems, integrating AI into real-world workflows, and
    building end-to-end across the full technology stack.
  </p>
);

const ExperienceContent = () => (
  <>
    <p className="text-base-content text-lg mt-4 hover:text-primary transition-colors duration-200 cursor-default">
      I've worked on both research and production-level projects focused on
      backend development, machine learning, and intelligent automation. My
      technical background includes building modular, RESTful APIs using Flask
      and following MVC design principles, integrating NoSQL databases for
      scalable data access, and implementing middleware for validation, logging,
      and caching.
    </p>
    <p className="text-base-content text-lg mt-8 hover:text-primary transition-colors duration-200 cursor-default">
      I've also automated complex workflows using RPA tools and OCR libraries to
      reduce manual operations and enhance reliability. On the infrastructure
      side, I've provisioned and managed cloud environments using Infrastructure
      as Code, deployed event-driven processing pipelines, and integrated
      contextual storage to support retrieval-augmented generation pipelines.
    </p>
    <p className="text-base-content text-lg mt-8 hover:text-primary transition-colors duration-200 cursor-default">
      In the research domain, I've built adaptive ML models for biosignal
      classification in medical applications, as well as deep learning pipelines
      for sequence-based protein function prediction. These projects reflect my
      focus on augmenting decision making with technology, always emphasizing
      performance, maintainability, and real-world impact.
    </p>
  </>
);

const HobbiesContent = () => (
  <>
    <p className="text-base-content text-lg mt-4 hover:text-primary transition-colors duration-200 cursor-default">
      When I'm not coding or exploring new ML ideas, I stay active through
      weightlifting, triathlon and taekwondo. I love pushing my physical limits,
      and enjoy hitting the trail with a hike on weekends, especially when the
      views are worth the climb.
    </p>
    <p className="text-base-content text-lg mt-8 hover:text-primary transition-colors duration-200 cursor-default">
      I'm also big on strategy board and card games. Poker is my favorite,
      bringing out my fascination in math, risk management, and game theory, but
      I'm never one to shy away from classics like Risk, Monopoly, and Spades.
      Some friendly competition tends to bring out the best in me.
    </p>
    <p className="text-base-content text-lg mt-8 hover:text-primary transition-colors duration-200 cursor-default">
      As a huge basketball fan, I follow both the NBA and college hoops closely.
      I've been a lifelong Dallas Mavericks supporter and love cheering on the
      Duke Blue Devils during the college season. Whether it's sports, games, or
      endurance training, I'm drawn to challenges that demand focus, strategy,
      and grit, no matter where I am.
    </p>
  </>
);

const About = () => {
  return (
    <div className="px-4 py-10 max-w-5xl mx-auto space-y-10">
      <SectionCard
        title="👋 Hello there! I'm Praneeth"
        child={<IntroContent />}
      />

      <SectionCard
        title="💼 Professional Experience"
        child={<ExperienceContent />}
      />

      <SectionCard title="🛠️ Tech Stack" child={<TechStack />} />

      <SectionCard title="🎯 Hobbies" child={<HobbiesContent />} />
    </div>
  );
};

export default About;
