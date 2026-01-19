import React from 'react';
import { portfolioItems } from '../Data/data';

const Portfolio = () => {
    return (
        <section id="project"className="py-20 px-6 bg-gradient-to-r from-[#022c2b] to-[#01191d]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">My <span className="text-outline">Projects</span></h2>
                <p className="text-slate-300 text-center mx-auto mb-12 text-sm">The tools and technologies I use to bring ideas to life.</p>

                <div className="text-gray-500 text-center mb-12 grid-cols-3 gap-8 md:grid">
                    {
                        portfolioItems.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform">
                                <div className="h-48 overflow-hidden">
                                    <img src={item.image} className="w-full h-full object-cover transition-transform hover:scale-105" alt=""/>
                                </div>

                                <div className="p-5">
                                    <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                                    <p className="text-slate-400 mt-2">{item.category}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio