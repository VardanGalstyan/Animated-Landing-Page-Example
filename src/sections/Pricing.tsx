"use client";

import CheckIcon from "@/assets/check.svg";
import SectionHeader from "@/components/section-header";
import { pricingTiers } from "@/data";
import clsx from "clsx";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <SectionHeader
          title="Pricing"
          description="Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features."
        />
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-end gap-6 items-center mt-10">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={index}
                className={clsx(
                  "card",
                  !!inverse ? "border-black bg-black text-white" : ""
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={clsx(
                      "text-lg font-bold",
                      !!inverse ? " text-white/50" : "text-black/50"
                    )}
                  >
                    {title}
                  </h3>
                  {!!popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={clsx(
                    "btn btn-primary w-full mt-[30px]",
                    !!inverse ? "bg-white text-black" : ""
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li className="text-sm flex items-center gap-4" key={index}>
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
