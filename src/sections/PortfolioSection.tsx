type ProjectCardProps = {
  title: string;
  technologies: string;
  duration: string;
  achievements: string[];
};

const ProjectCard = ({ title, technologies, duration, achievements }: ProjectCardProps) => (
  <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-base-content">{title}</h3>
        <div className="text-sm text-primary font-semibold">{technologies}</div>
      </div>
      <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
        {duration}
      </div>
    </div>
    <ul className="space-y-2 text-base text-base-content">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary mr-2 mt-1">•</span>
          <span dangerouslySetInnerHTML={{ __html: achievement }} />
        </li>
      ))}
    </ul>
  </div>
);

const PortfolioSection = () => {
  const projects = [
    {
      title: "Poker Luck Tracker",
      technologies: "Python, Flask, React, MongoDB, Numpy",
      duration: "Aug 2025 – Present",
      achievements: [
        "Devised a full-stack web app allowing players to record poker hands and evaluate \"luck\" via <strong>Monte Carlo simulations</strong>, benchmarking outcomes against theoretical hand distributions to generate session and lifetime metrics",
        "Spearheaded backend modeling with <strong>Flask and Numpy</strong> for probabilistic analysis, and coded a dynamic <strong>React frontend</strong> with MongoDB integration to visualize performance trends over time"
      ]
    },
    {
      title: "5-Stage Pipelined CPU Design",
      technologies: "Verilog, FPGA, Digital Design",
      duration: "Aug 2025 – Present",
      achievements: [
        "Created a <strong>5-stage pipelined RISC CPU</strong> (IF, ID, EX, MEM, WB) in <strong>Verilog</strong>, and deployed on a Xilinx FPGA",
        "Integrated <strong>hazard detection, forwarding, and branch prediction</strong> units, achieving correct execution with an average <strong>CPI of 1.15</strong> across benchmark programs",
        "Verified CPU functionality via <strong>cycle-accurate simulation</strong> and FPGA hardware debugging with Vivado"
      ]
    },
    {
      title: "FreightSwipe",
      technologies: "TypeScript, React Native",
      duration: "Jul 2025 – Aug 2025",
      achievements: [
        "Developed a cross-platform <strong>React Native app</strong> with Expo, enabling shippers and truckers to connect through a <strong>Tinder-like swiping interface</strong> to match freight loads",
        "Integrated <strong>Supabase</strong> for real-time data synchronization, secure authentication, and scalable backend services"
      ]
    },
    {
      title: "Automatic Flag Raising System",
      technologies: "OnShape, KiCAD, C/C++, Arduino, HTML/CSS",
      duration: "Aug 2024 – May 2025",
      achievements: [
        "Engineered an <strong>IoT-enabled flagpole device</strong> with motor-driven pulley system enabling remote flag raising and lowering through precise electronic control and embedded systems programming",
        "Built and tested circuits on solderable breadboards and designed matching <strong>PCB schematics using KiCAD</strong>",
        "Programmed <strong>ESP32 microcontroller in C++</strong> to host a secure web interface with password authentication, enabling real-time flag control via HTTPS requests and GPIO-driven motor actuation"
      ]
    },
    {
      title: "ML Venom Protein Screening Tool",
      technologies: "Python, TensorFlow",
      duration: "Aug 2022 – May 2023",
      achievements: [
        "Designed and tuned an <strong>artificial neural network</strong> capable of screening de novo amino acid sequences of animal venom proteins, achieving <strong>96% prediction accuracy</strong> for molecular function",
        "Presented tool to industry experts and published a report on <strong>SSRN</strong> gaining 250+ views and 50+ downloads",
        "<strong>Awarded finalist at 2023 International Science and Engineering Fair</strong> in Computational Biology and Bioinformatics"
      ]
    },
    {
      title: "Deep Learning Driver Drowsiness Detection",
      technologies: "Python, PyTorch, Flask, HTML/CSS",
      duration: "Jun 2022 – Jul 2022",
      achievements: [
        "Collaborated with a team of six to construct a <strong>computer vision machine learning tool</strong> which categorizes drowsiness of people with <strong>94% accuracy</strong>, and deployed the model onto a Flask web app"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            duration={project.duration}
            achievements={project.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;