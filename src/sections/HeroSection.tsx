const HeroSection = () => (
  <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
    <img src="/Logo_Transparent_Full_Crop.svg" alt="Logo" className="w-32 h-auto mb-8" />
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Praneeth Muvva
    </h1>
    <h2 className="text-2xl text-base-content/80 mb-8">
      Electrical and Computer Engineer | Full-Stack Developer
    </h2>
    <p className="text-lg text-base-content/70 mb-12 max-w-2xl">
      Building scalable systems and integrating AI into real-world workflows
    </p>
    <button
      className="btn btn-primary btn-lg"
      onClick={() => {
        const element = document.getElementById('about');
        if (element) {
          // Add temporary padding to account for navbar
          const tempPadding = document.createElement('div');
          tempPadding.style.height = '80px';
          element.insertBefore(tempPadding, element.firstChild);

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Remove temporary padding after scroll
          setTimeout(() => {
            if (tempPadding.parentNode) {
              tempPadding.parentNode.removeChild(tempPadding);
            }
          }, 1000);
        }
      }}
    >
      Learn More
    </button>
  </div>
);

export default HeroSection;