import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next.png";
import back_icon from "../../assets/back.png";
import user_1 from "../../assets/pro1.png";
import user_2 from "../../assets/pro2.png";
import user_3 from "../../assets/pro3.png";
import user_4 from "../../assets/pro4.png";

const Testimonials = () => {

  const slider = useRef();
  let tx = 0; 

const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = ()=>{
  if(tx < -0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Henry Dickson</h3>
                  <span>Gradedu, Canada</span>
                </div>
              </div>
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Kate Dickson</h3>
                  <span>Gradedu, Canada</span>
                </div>
              </div>
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>David Benson</h3>
                  <span>Gradedu, Canada</span>
                </div>
              </div>
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Steve Dickson</h3>
                  <span>Gradedu, Canada</span>
                </div>
              </div>
              <p>
                {" "}
                Choosing to pursue my degree at Gradedu was one of the best
                decisions i've ever made. The supportive community,
                state-of-the-art facilities, and commmitment to academic
                excellence have truly exceeded my expectation
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
