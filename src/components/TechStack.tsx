import { FaPython, FaJava, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
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
} from 'react-icons/si';
import { VscVscode, VscAzure } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';
import { type IconType } from 'react-icons';
import { useState } from 'react';

type TechItemProps = {
  Icon: IconType;
  label: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
};

const TechItem = ({ Icon, label, isActive, onHover, onLeave }: TechItemProps) => (
  <div
    className={`flex flex-col items-center text-sm w-24 p-4 rounded-xl ring-1 transition-all duration-200 cursor-pointer 
      ${isActive ? 'bg-primary/10 ring-primary scale-105' : 'bg-base-200 ring-base-300'} 
      hover:scale-105`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <Icon className={`text-4xl transition-colors duration-200 ${isActive ? 'text-primary' : ''}`} />
    <span
      className={`mt-2 transition-colors duration-200 ${
        isActive ? 'text-primary font-semibold' : ''
      }`}
    >
      {label}
    </span>
  </div>
);

const techStackItems: Record<string, { Icon: IconType; label: string }[]> = {
  Languages: [
    { Icon: FaPython, label: 'Python' },
    { Icon: SiC, label: 'C' },
    { Icon: SiCplusplus, label: 'C++' },
    { Icon: FaJava, label: 'Java' },
    { Icon: SiJavascript, label: 'JavaScript' },
    { Icon: FaHtml5, label: 'HTML5' },
    { Icon: FaCss3Alt, label: 'CSS3' },
    { Icon: TbSql, label: 'SQL' },
  ],
  'Frameworks & Libraries': [
    { Icon: SiFlask, label: 'Flask' },
    { Icon: FaReact, label: 'React' },
    { Icon: SiTensorflow, label: 'TensorFlow' },
    { Icon: SiPytorch, label: 'PyTorch' },
    { Icon: SiArduino, label: 'Arduino' },
  ],
  'Cloud & DevOps': [
    { Icon: VscAzure, label: 'Azure' },
    { Icon: FaDocker, label: 'Docker' },
    { Icon: FaGitAlt, label: 'Git' },
    { Icon: SiUipath, label: 'UIPath' },
  ],
  'Tools & Platforms': [
    { Icon: VscVscode, label: 'VS Code' },
    { Icon: SiSap, label: 'SAP B1' },
    { Icon: SiKicad, label: 'KiCAD' },
  ],
};

const TechStack = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-base-content">
      {Object.entries(techStackItems).map(([section, items]) => {
        const isSectionHovered = hoveredSection === section;

        return (
          <div key={section}>
            <h4
              className={`font-bold mb-4 text-xl border-b border-base-content pb-2 transition-colors duration-200 
                ${isSectionHovered ? 'text-primary border-primary' : 'border-base-300'} 
                hover:text-primary cursor-pointer`}
              onMouseEnter={() => setHoveredSection(section)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {section}
            </h4>

            <div className="flex flex-wrap gap-4">
              {items.map(({ Icon, label }) => {
                const isItemHovered = hoveredItem === label;
                const isActive = isItemHovered || (isSectionHovered && !hoveredItem);

                return (
                  <TechItem
                    key={label}
                    Icon={Icon}
                    label={label}
                    isActive={isActive}
                    onHover={() => setHoveredItem(label)}
                    onLeave={() => setHoveredItem(null)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
