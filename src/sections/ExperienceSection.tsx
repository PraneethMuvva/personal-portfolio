const ExperienceSection = () => (
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
    <div className="space-y-6">

      {/* Centennial Technologies */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">
              <a
                href="https://www.centennialtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary transition-colors duration-200"
              >
                Centennial Technologies
              </a>
            </h3>
            <h4 className="text-lg font-semibold text-primary">Software Engineering Intern</h4>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0 sm:text-right">
            <div>Jun 2025 – Aug 2025</div>
            <div>Leesburg, VA</div>
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Migrated backend from <strong>.NET</strong> to production <strong>Flask RESTful APIs</strong> with MVC architecture, leveraging <strong>Cosmos DB</strong> for scalable persistence and handling <strong>2,000+</strong> daily requests</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Built microservices-based <strong>retrieval-augmented generation</strong> pipelines integrated with blob storage on <strong>Azure</strong>, improving custom AI accuracy by <strong>30%</strong> more than baseline LLMs on domain-specific tasks</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Automated PDF form completion and validation using <strong>Python and PowerShell scripts</strong>, reducing manual processing time by over <strong>60%</strong> and improving workflow reliability</span>
          </li>
        </ul>
      </div>

      {/* Cyber-Physical Systems Lab */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">
              <a
                href="https://cpsl.pratt.duke.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary transition-colors duration-200"
              >
                Cyber-Physical Systems Lab
              </a>
            </h3>
            <h4 className="text-lg font-semibold text-primary">Machine Learning Researcher</h4>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0 sm:text-right">
            <div>Aug 2025 – Present</div>
            <div>Durham, NC</div>
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Developed ML algorithms for adaptive Deep Brain Stimulation (aDBS) using <strong>Python/TensorFlow</strong>, modeling biomarkers to improve Parkinson's motor function by <strong>40%</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Implemented <strong>PID control</strong> strategies on embedded systems, reducing device power consumption by <strong>35%</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Integrated ML and control modules into an existing <strong>neurostimulator device</strong> using <strong>C#</strong>, enabling real-time therapeutic adjustments in clinical prototypes</span>
          </li>
        </ul>
      </div>

      {/* Duke University TA */}
      <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">
              <a
                href="https://cs.duke.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary transition-colors duration-200"
              >
                Duke University
              </a>
            </h3>
            <h4 className="text-lg font-semibold text-primary">Teaching Assistant – Data Structures and Algorithms</h4>
          </div>
          <div className="text-sm text-base-content/70 mt-2 sm:mt-0 sm:text-right">
            <div>Aug 2025 – Present</div>
            <div>Durham, NC</div>
          </div>
        </div>
        <ul className="space-y-2 text-base text-base-content">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">•</span>
            <span>Led recitations for <strong>400+</strong> students, reinforcing data structures and algorithmic principles in Java</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
);

export default ExperienceSection;