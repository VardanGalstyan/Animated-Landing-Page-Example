import { ReactNode } from "react";

const SectionHeader = (props: {
  children?: ReactNode;
  title?: string;
  description?: string;
}) => (
  <div className="max-w-[560px] mx-auto relative">
    <h2 className="section-title text-gradient mt-5">{props?.title}</h2>
    <p className="text-[22px] text-center leading-[30px] tracking-tight text-[#010D3E] mt-5">
      {props?.description}
    </p>
    {props?.children}
  </div>
);

export default SectionHeader;
