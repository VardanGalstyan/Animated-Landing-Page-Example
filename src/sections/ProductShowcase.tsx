"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/section-header";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
        <SectionHeader
          title="A more effective way to track progress"
          description="Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts."
        />
        <div className="relative">
          <Image src={productImage} alt="product Image" className="mt-10" />
          <motion.img
            style={{ translateY: translateY }}
            src={pyramidImage.src}
            alt="pyriamid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <motion.img
            style={{ translateY: translateY }}
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
