import React, { useEffect } from "react";

import "./App.css";
import CourseCard from "./components/CourseCard";

const App = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <section className="card-list">
      <CourseCard
        courseName="Complete React Native Mobile App developer - Build 10 apps"
        courseThumbnail="https://asset-cdn.learnyst.com/assets/schools/2410/courses/82228/rn20_fg9wxu.png"
        courseDetails="2 Free + 92 Paid"
        coursePrice="2,999"
        courseDiscountedPrice="199"
        courseDiscount="93"
      />
      <CourseCard
        courseName="FullStack Django Developer - Freelance ready"
        courseThumbnail="https://asset-cdn.learnyst.com/assets/schools/2410/courses/86241/django_ca695a.png"
        courseDetails="2 Free + 63 Paid"
        coursePrice="899"
        courseDiscountedPrice="299"
        courseDiscount="67"
      />
      <CourseCard
        courseName="Cracking the Tech Interview"
        courseThumbnail="https://asset-cdn.learnyst.com/assets/schools/2410/courses/76858/InterViewPrep_k4i9wx.png"
        courseDetails="3 Free + 192 Paid"
        coursePrice="3,999"
        courseDiscountedPrice="999"
        courseDiscount="75"
      />
      <CourseCard
        courseName="Mysql Bootcamp for beginners"
        courseThumbnail="https://asset-cdn.learnyst.com/assets/schools/2410/courses/75112/mysql_lco_2_wrm5kp.png"
        courseDetails="2 Free + 64 Paid"
        coursePrice="899"
        courseDiscountedPrice="299"
        courseDiscount="67"
      />
    </section>
  );
};

export default App;
