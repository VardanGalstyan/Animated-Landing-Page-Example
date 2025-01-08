import { motion } from "framer-motion";
import TestimonialCard from "./testimonial-card";

export interface TestimonialType {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: TestimonialType[];
  duration?: number;
}

// Main Component
const TestimonialsColumn = ({
  className = "",
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => (
  <div className={className}>
    <motion.div
      className="flex flex-col gap-6 pb-6"
      animate={{ translateY: "-50%" }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration,
      }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard
          key={`${testimonial.name}-${index}`}
          {...testimonial}
        />
      ))}
    </motion.div>
  </div>
);

export default TestimonialsColumn;
