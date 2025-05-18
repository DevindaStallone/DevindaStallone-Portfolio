import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards";
import { Button } from "../Components/ui/moving-border-exp";


const Testimonial = () => {
    return (
        <div id="testimonial" className="bg-grid-white/[0.02]">
            <h1
                className="text-4xl mt-12  tracking-wider md:text-6xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Testimonials
            </h1>
            <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>

            <div className="py-20 w-full">
                <h1 className="text-4xl mt-12  tracking-wider md:text-6xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    My <span className="text-purple">work experience</span>
                </h1>

                <div className="w-[22rem] lg:w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 m-auto ">
                    {workExperience.map((card) => (
                        <Button
                            key={card.id}
                            //   random duration will be fun , I think , may be not 
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            style={{
                                //   add these two
                                //   you can generate the color from here https://cssgradient.io/
                                background: "rgb(4,7,29)",
                                backgroundColor:
                                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                                // add this border radius to make it more rounded so that the moving border is more realistic
                                borderRadius: `calc(1.75rem* 0.96)`,
                            }}
                            // remove bg-white dark:bg-slate-900
                            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 items-center lg:p-10 gap-2">
                                <img
                                    src={card.thumbnail}
                                    alt={card.thumbnail}
                                    className="lg:w-32 md:w-20 w-16"
                                />
                                <div className="lg:ms-5">
                                    <h1 className="text-start text-xl md:text-2xl font-bold">
                                        {card.title}
                                    </h1>
                                    <p className="text-start text-gray-400 mt-3 font-normal    ">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Testimonial


const testimonials = [
    {
        quote:
            "The team at SMMILE is impressed and complimentary on the quality of your work and attitude. I believe that you will be able to progress well in your career and I will have no hesitation to work with you again in the future",
        name: (
            <div class="flex items-center space-x-4 p-4  rounded-lg w-fit">
                <img
                    class="w-12 h-12 rounded-full"
                    src="/bryan_ho.jpg"
                    alt="Profile Picture"
                />
                <div>
                    <h2 class="text-white font-bold text-lg">Brayn Ho</h2>
                    <p class="text-slate-400 text-sm">Director of Smmile Digital Pte Ltd</p>
                </div>
            </div>

        ),
    },


];

const workExperience = [
    {
      id: 1,
      title: "SOFTWARE ENGINEERING APPRENTICE",
      desc: "I developed custom WordPress plugins, implemented IP address lookup, customized front-end designs, and maintained documentation for team collaboration.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "FITNESS WEBSITE - New Regal Fitness Club",
      desc: "Designed and developed a fitness website for a local gym that showcase the speciallity of the gym apart from other gym around the city.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    
  ];