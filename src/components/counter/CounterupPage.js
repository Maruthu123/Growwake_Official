import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './counterpage.css'

function CounterupPage() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <>
            <div className="counter_section">
                <div className="counter_section_left">
                    <img src='img_4.png' />
                </div>
              
                <div className="counter_section_right">
                  
                    <h1 className="counter_sec_h1">What We Achieved</h1>
                   
                    <div class="count_bar_container">
                        <div class="count_bar"></div>
                        <div class="count_circle"></div>
                    </div>

                    <div ref={ref} className="counter_container">
                        {/* Counter 1 */}
                        <div className="counter_box">
                            <h3>{inView && <CountUp start={0} end={50} duration={3} />}+</h3>
                            <p>Instructors</p>
                        </div>

                        {/* Counter 2 */}
                        <div className="counter_box">
                            <h3>{inView && <CountUp start={0} end={500} duration={3} />}+</h3>
                            <p>Certifications</p>
                        </div>

                        {/* Counter 3 */}
                        <div className="counter_box">
                            <h3>{inView && <CountUp start={0} end={1000} duration={3} />}+</h3>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CounterupPage;
