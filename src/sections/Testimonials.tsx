"use client";

import SectionHeader from "@/components/section-header";
import TestimonialsColumn from "@/components/testimonial-column";
import { testimonials } from "@/data";

const columns = [
  { data: testimonials.slice(0, 3), duration: 17, visible: "" },
  { data: testimonials.slice(3, 6), duration: 15, visible: "hidden md:block" },
  { data: testimonials.slice(6, 9), duration: 20, visible: "hidden lg:block" },
];

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Version 2.0 is here</div>
        </div>

        <SectionHeader
          title="What our users say"
          description="From intuitive design to powerful features, our app has become an essential tool for users around the world."
        />

        <div className="flex justify-center gap-6 mask-gradient mt-10 max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          {columns.map((col, index) => (
            <TestimonialsColumn
              key={index}
              className={col.visible}
              testimonials={col.data}
              duration={col.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
