import { useNavigate } from "react-router-dom";

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavButton = ({ to, children, active = false }: NavButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={`rounded-md px-3 py-2 text-sm font-medium ${
        active
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  );
};

export default NavButton;