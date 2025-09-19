const PortfolioSection = () => (
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Poker Luck Tracker */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-base-content">Poker Luck Tracker</h3>
            <div className="text-sm text-primary font-semibold">Python, Flask, React, MongoDB, Numpy</div>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
            Aug 2025 – Present
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Devised a full-stack web app allowing players to record poker hands and evaluate "luck" via <strong>Monte Carlo simulations</strong>, benchmarking outcomes against theoretical hand distributions to generate session and lifetime metrics</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Spearheaded backend modeling with <strong>Flask and Numpy</strong> for probabilistic analysis, and coded a dynamic <strong>React frontend</strong> with MongoDB integration to visualize performance trends over time</span>
          </li>
        </ul>
      </div>

      {/* 5-Stage Pipelined CPU Design */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-base-content">5-Stage Pipelined CPU Design</h3>
            <div className="text-sm text-primary font-semibold">Verilog, FPGA, Digital Design</div>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
            Aug 2025 – Present
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Created a <strong>5-stage pipelined RISC CPU</strong> (IF, ID, EX, MEM, WB) in <strong>Verilog</strong>, and deployed on a Xilinx FPGA</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Integrated <strong>hazard detection, forwarding, and branch prediction</strong> units, achieving correct execution with an average <strong>CPI of 1.15</strong> across benchmark programs</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Verified CPU functionality via <strong>cycle-accurate simulation</strong> and FPGA hardware debugging with Vivado</span>
          </li>
        </ul>
      </div>

      {/* FreightSwipe */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-base-content">FreightSwipe</h3>
            <div className="text-sm text-primary font-semibold">TypeScript, React Native</div>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
            Jul 2025 – Aug 2025
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Developed a cross-platform <strong>React Native app</strong> with Expo, enabling shippers and truckers to connect through a <strong>Tinder-like swiping interface</strong> to match freight loads</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Integrated <strong>Supabase</strong> for real-time data synchronization, secure authentication, and scalable backend services</span>
          </li>
        </ul>
      </div>

      {/* Automatic Flag Raising System */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-base-content">Automatic Flag Raising System</h3>
            <div className="text-sm text-primary font-semibold">OnShape, KiCAD, C/C++, Arduino, HTML/CSS</div>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
            Aug 2024 – May 2025
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Engineered an <strong>IoT-enabled flagpole device</strong> with motor-driven pulley system enabling remote flag raising and lowering through precise electronic control and embedded systems programming</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Built and tested circuits on solderable breadboards and designed matching <strong>PCB schematics using KiCAD</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Programmed <strong>ESP32 microcontroller in C++</strong> to host a secure web interface with password authentication, enabling real-time flag control via HTTPS requests and GPIO-driven motor actuation</span>
          </li>
        </ul>
      </div>

      {/* ML Venom Protein Screening */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-base-content">ML Venom Protein Screening Tool</h3>
            <div className="text-sm text-primary font-semibold">Python, TensorFlow</div>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
            Aug 2022 – May 2023
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Designed and tuned an <strong>artificial neural network</strong> capable of screening de novo amino acid sequences of animal venom proteins, achieving <strong>96% prediction accuracy</strong> for molecular function</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Presented tool to industry experts and published a report on <strong>SSRN</strong> gaining 250+ views and 50+ downloads</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span><strong>Awarded finalist at 2023 International Science and Engineering Fair</strong> in Computational Biology and Bioinformatics</span>
          </li>
        </ul>
      </div>

      {/* Driver Drowsiness Detection */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-base-content">Deep Learning Driver Drowsiness Detection</h3>
            <div className="text-sm text-primary font-semibold">Python, PyTorch, Flask, HTML/CSS</div>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0">
            Jun 2022 – Jul 2022
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Collaborated with a team of six to construct a <strong>computer vision machine learning tool</strong> which categorizes drowsiness of people with <strong>94% accuracy</strong>, and deployed the model onto a Flask web app</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
);

export default PortfolioSection;