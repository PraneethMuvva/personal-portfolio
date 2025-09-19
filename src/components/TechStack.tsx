import { FaPython, FaJava, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
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
  SiNumpy,
  SiPandas,
} from 'react-icons/si';
import { IoHardwareChip } from 'react-icons/io5';
import { VscVscode, VscAzure } from 'react-icons/vsc';
import { TbSql, TbBrandCSharp } from 'react-icons/tb';
import { type IconType } from 'react-icons';
import { useState } from 'react';

const XilinxIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={`w-9 h-9 ${className}`}>
    <path d="M8 18l5.241 6H5.586L.345 18l5.241-6L.345 6l5.241-6h7.655L8 6l5.241 6L8 18zM23.655 0H13.241l5.241 6 5.173-6zM13.241 24h10.414l-5.172-6-5.242 6z" fill="currentColor"/>
  </svg>
);

type TechItemProps = {
  Icon: IconType | React.ComponentType<{ className?: string }>;
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

const techStackItems: Record<string, { Icon: IconType | React.ComponentType<{ className?: string }>; label: string }[]> = {
  Languages: [
    { Icon: FaPython, label: 'Python' },
    { Icon: SiC, label: 'C' },
    { Icon: SiCplusplus, label: 'C++' },
    { Icon: TbBrandCSharp, label: 'C#' },
    { Icon: FaJava, label: 'Java' },
    { Icon: SiJavascript, label: 'JavaScript' },
    { Icon: TbSql, label: 'SQL' },
    { Icon: IoHardwareChip, label: 'Verilog' },
  ],
  'Frameworks & Libraries': [
    { Icon: SiFlask, label: 'Flask' },
    { Icon: FaReact, label: 'React' },
    { Icon: SiTensorflow, label: 'TensorFlow' },
    { Icon: SiPytorch, label: 'PyTorch' },
    { Icon: SiNumpy, label: 'NumPy' },
    { Icon: SiPandas, label: 'Pandas' },
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
    { Icon: XilinxIcon, label: 'Vivado' },
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
