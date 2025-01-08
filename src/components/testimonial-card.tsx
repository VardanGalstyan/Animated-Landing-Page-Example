import Image from "next/image";
import { TestimonialType } from "./testimonial-column";

const TestimonialCard = ({
  text,
  imageSrc,
  name,
  username,
}: TestimonialType) => (
  <div className="card">
    <div>{text}</div>
    <div className="flex items-center gap-2 mt-5">
      <Image
        src={imageSrc}
        alt={`Photo of ${name}`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col">
        <div className="font-medium tracking-tight leading-5">{name}</div>
        <div className="leading-5 tracking-tight text-gray-500">{username}</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
