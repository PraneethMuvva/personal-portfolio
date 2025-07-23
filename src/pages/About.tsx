import {
  FaPython,
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiFlask,
  SiArduino,
  SiUipath,
  SiKicad,
  SiSap,
  SiMysql,
} from "react-icons/si";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { type IconType } from "react-icons";

const techItem = (Icon: IconType, label: string) => (
  <div className="flex flex-col items-center text-sm w-20">
    <Icon className="text-3xl" />
    <span className="mt-1">{label}</span>
  </div>
);

const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">About Me</h1>

      {/* Intro Card */}
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-2">
          👋 Hello there! I'm Praneeth
        </h2>
        <p className="text-base-content text-lg">
          I'm an undergraduate at Duke University studying Electrical & Computer
          Engineering with a double major in Computer Science. I'm driven toward
          developing scalable systems, integrating AI into real-world workflows,
          and building end-to-end across the full technology stack.
        </p>
      </div>

      {/* Experience */}
      <div className="card bg-base-200 shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-2">
          💼 Professional Experience
        </h3>
        <p className="text-base-content text-lg">
          I've worked on both research and production-level projects focused on
          backend development, machine learning, and intelligent automation. My
          technical background includes building modular, RESTful APIs using
          Flask and following MVC design principles, integrating NoSQL databases
          for scalable data access, and implementing middleware for validation,
          logging, and caching.
        </p>
        <p className="text-base-content text-lg mt-4">
          I've also automated complex workflows using RPA tools and OCR
          libraries to reduce manual operations and enhance reliability. On the
          infrastructure side, I've provisioned and managed cloud environments
          using Infrastructure as Code, deployed event-driven processing
          pipelines, and integrated contextual storage to support
          retrieval-augmented generation pipelines.
        </p>
        <p className="text-base-content text-lg mt-4">
          In the research domain, I've built adaptive ML models for biosignal
          classification in medical applications, as well as deep learning
          pipelines for sequence-based protein function prediction. These
          projects reflect my focus on augmenting decision making with
          technology, always emphasizing performance, maintainability, and
          real-world impact.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="card bg-base-100 shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-base-content">
          <div>
            <h4 className="font-semibold mb-3 text-lg">Languages</h4>
            <div className="flex flex-wrap gap-6">
              {techItem(FaPython, "Python")}
              {techItem(SiC, "C/C++")}
              {techItem(SiCplusplus, "C++")}
              {techItem(FaJava, "Java")}
              {techItem(SiJavascript, "JavaScript")}
              {techItem(FaHtml5, "HTML5")}
              {techItem(FaCss3Alt, "CSS3")}
              {techItem(SiMysql, "SQL")}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-lg">
              Frameworks & Libraries
            </h4>
            <div className="flex flex-wrap gap-6">
              {techItem(SiFlask, "Flask")}
              {techItem(FaReact, "React")}
              {techItem(SiTensorflow, "TensorFlow")}
              {techItem(SiPytorch, "PyTorch")}
              {techItem(SiArduino, "Arduino")}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-lg">Cloud & DevOps</h4>
            <div className="flex flex-wrap gap-6">
              {techItem(VscAzure, "Azure")}
              {techItem(FaDocker, "Docker")}
              {techItem(FaGitAlt, "Git")}
              {techItem(SiUipath, "UIPath")}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-lg">Tools & Platforms</h4>
            <div className="flex flex-wrap gap-6">
              {techItem(VscVscode, "VS Code")}
              {techItem(SiSap, "SAP B1")}
              {techItem(SiKicad, "KiCAD")}
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="card bg-base-200 shadow-md p-6">
        <h3 className="text-2xl font-semibold mb-2">Hobbies and Interets</h3>
        <p className="text-base-content text-lg">
          When I'm not coding or exploring new ML ideas, I stay active through
          weightlifting, triathlon and taekwondo. I love pushing my physical
          limits, and enjoy hitting the trail with a hike on weekends, as a way
          to unplug and recharge, especially when the views are worth the climb.
        </p>
        <p className="text-base-content text-lg mt-4">
          I'm also big on strategy board and card games. Poker is my favorite,
          bringing out my fascination in math, risk management, and game theory,
          but I'm never one to shy away from classics like Risk, Monopoly, and
          Spades. Some little friendly competition tends to bring out the best
          in me.
        </p>
        <p className="text-base-content text-lg mt-4">
          As a huge basketball fan, I follow both the NBA and college hoops
          closely. I've been a lifelong Dallas Mavericks supporter and love
          cheering on the Duke Blue Devils during the college season. Whether
          it's sports, games, or endurance training, I'm drawn to challenges
          that demand focus, strategy, and grit, no matter where I am.
        </p>
      </div>
    </div>
  );
};

export default About;
