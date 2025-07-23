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

type TechItemProps = {
  Icon: IconType;
  label: string;
};

const TechItem = ({ Icon, label }: TechItemProps) => (
  <div className="flex flex-col items-center text-sm w-20">
    <Icon className="text-3xl" />
    <span className="mt-1">{label}</span>
  </div>
);

const techStackItems: Record<string, TechItemProps[]> = {
  Languages: [
    { Icon: FaPython, label: "Python" },
    { Icon: SiC, label: "C" },
    { Icon: SiCplusplus, label: "C++" },
    { Icon: FaJava, label: "Java" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3Alt, label: "CSS3" },
    { Icon: SiMysql, label: "SQL" },
  ],
  "Frameworks & Libraries": [
    { Icon: SiFlask, label: "Flask" },
    { Icon: FaReact, label: "React" },
    { Icon: SiTensorflow, label: "TensorFlow" },
    { Icon: SiPytorch, label: "PyTorch" },
    { Icon: SiArduino, label: "Arduino" },
  ],
  "Cloud & DevOps": [
    { Icon: VscAzure, label: "Azure" },
    { Icon: FaDocker, label: "Docker" },
    { Icon: FaGitAlt, label: "Git" },
    { Icon: SiUipath, label: "UIPath" },
  ],
  "Tools & Platforms": [
    { Icon: VscVscode, label: "VS Code" },
    { Icon: SiSap, label: "SAP B1" },
    { Icon: SiKicad, label: "KiCAD" },
  ],
};

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-base-content">
      {Object.entries(techStackItems).map(([section, items]) => (
        <div>
          <h4 className="font-semibold mb-3 text-lg">{section}</h4>
          <div className="flex flex-wrap gap-6">
            {items.map(({ Icon, label }: TechItemProps) => {
              return <TechItem Icon={Icon} label={label} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
