import { Link } from 'react-router';
import Logo from '../assets/Logo_Transparent_Full_Crop.svg';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <Link to="/">
          <img src={Logo} className="h-10 w-10 pr-2" />
        </Link>
        <p>© {new Date().getFullYear()} Praneeth Muvva. All rights reserved.</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/praneeth-muvva-6920b0278"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-ghost btn-primary"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/PraneethMuvva"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-ghost btn-primary"
        >
          <FaGithub className="w-5 h-5" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
