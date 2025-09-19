type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  location: string;
  link?: string;
};

const ExperienceCard = ({ company, role, duration, location, link }: ExperienceCardProps) => (
  <div className="card bg-base-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
            >
              {company}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <span className="text-base-content">{company}</span>
          )}
        </h3>
        <h4 className="text-lg font-semibold text-primary">{role}</h4>
      </div>
      <div className="text-sm text-base-content/70 mt-2 sm:mt-0 sm:text-right">
        <div>{duration}</div>
        <div>{location}</div>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Duke Aero",
      role: "Avionics Engineer",
      duration: "Sept 2025 – Present",
      location: "Durham, NC",
      link: "https://dukerocketry.com/"
     },
    {
      company: "Cyber-Physical Systems Lab",
      role: "Machine Learning Researcher",
      duration: "Aug 2025 – Present",
      location: "Durham, NC",
      link: "https://cpsl.pratt.duke.edu/"
   
    },
    {
      company: "Duke University",
      role: "Teaching Assistant – Data Structures and Algorithms",
      duration: "Aug 2025 – Present",
      location: "Durham, NC",
      link: "https://cs.duke.edu/"
    },
    {
      company: "Centennial Technologies",
      role: "Software Engineering Intern",
      duration: "Jun 2025 – Aug 2025",
      location: "Leesburg, VA",
      link: "https://www.centennialtechnologies.com/"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            company={exp.company}
            role={exp.role}
            duration={exp.duration}
            location={exp.location}
            link={exp.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;