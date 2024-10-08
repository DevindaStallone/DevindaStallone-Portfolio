import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards";

const Testimonial = () => {
    return (
        <div id="testimonial" className="bg-grid-white/[0.02]">
            <h1
                className="text-4xl mt-12  tracking-wider md:text-6xl uppercase font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Kind Words from People
            </h1>
            <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
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