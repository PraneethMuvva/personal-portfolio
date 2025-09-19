import { useState } from 'react';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    document.getElementById(`slide${slideIndex + 1}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const goToPrevious = () => {
    const prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    goToSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    goToSlide(nextSlide);
  };

  return (
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
      <div className="lg:col-span-3 card bg-base-200 shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
        <p className="text-lg text-base-content leading-relaxed mb-4">
          I'm an undergraduate at Duke University studying Electrical & Computer Engineering with a double
          major in Computer Science. I'm driven toward developing scalable systems, integrating AI into
          real-world workflows, and building across the full technology stack.
        </p>
        <p className="text-lg text-base-content leading-relaxed mb-4">
          My academic journey combines electrical engineering precision with computer science innovation.
          I'm fascinated by the intersection of hardware and software, where low-level optimization
          meets algorithmic thinking. This dual perspective creates efficient and practical solutions.
        </p>
        <p className="text-lg text-base-content leading-relaxed mb-4">
          My research focuses on machine learning applications, from biosignal classification to protein
          function prediction. I'm drawn to projects that bridge academic theory and practical implementation,
          asking how technology can augment human decision-making.
        </p>
        <p className="text-lg text-base-content leading-relaxed">
          Outside academics, I stay active through weightlifting, triathlon, and taekwondo. I enjoy poker
          and follow the Dallas Mavericks and Duke Blue Devils, appreciating teamwork in both sports and
          engineering projects.
        </p>
      </div>

      <div className="lg:col-span-2 flex flex-col justify-center lg:pl-4">
        <div className="relative mx-auto lg:ml-auto lg:mr-0 mb-4 w-[28rem]">
          <div className="carousel carousel-center rounded-box shadow-lg bg-base-200 space-x-2 p-4 w-full overflow-hidden" id="about-carousel">
          <div className="carousel-item" id="slide1">
            <img
              src="/src/assets/hiking.jpg"
              alt="Hiking adventure"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
          <div className="carousel-item" id="slide2">
            <img
              src="/src/assets/football.jpg"
              alt="Football"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
          <div className="carousel-item" id="slide3">
            <img
              src="/src/assets/science+fair.jpg"
              alt="Science fair"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
          <div className="carousel-item" id="slide4">
            <img
              src="/src/assets/taekwondo.jpg"
              alt="Taekwondo"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
        </div>

          <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100 border-0 shadow-lg pointer-events-auto z-10"
            >
              ❮
            </button>
            <button
              onClick={goToNext}
              className="btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100 border-0 shadow-lg pointer-events-auto z-10"
            >
              ❯
            </button>
          </div>
        </div>

        <div className="w-[28rem] mx-auto lg:ml-auto lg:mr-0">
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`btn btn-xs ${currentSlide === index ? 'btn-primary' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutSection;