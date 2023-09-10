import React from 'react';
import "./exp.css"
import data from "../../data/index.json";

const Experience = () => {
    return (

        <div>

            <section id="Experience" className="exp-header">
                <div>
                    <h1>Experience</h1>
                    <p className="text-lg">
                        Recent Experience
                    </p>
                </div>
            </section>

            <div className="experience-section">
                {data?.experience?.map((item, index) => (
                    <div className="experience-card">
                        <div className="experience-card-header">
                            <img
                                src={item.src}
                                alt={item.company}
                                className="company-logo"
                            />
                            <h3>{item.company}</h3>
                            <p>{item.job_title}</p>
                        </div>
                        <div className="experience-card-content">

                            <p> <h4>Duration</h4> {item.date}</p>
                            <p> <h4>Description</h4> {item.description}.</p>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default Experience;
