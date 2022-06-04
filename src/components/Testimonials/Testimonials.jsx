import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AVATAR_DATA = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        pagination={true}
        modules={[Pagination]}
      >
        {AVATAR_DATA.map((e, i) => {
          return (
            <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={e.avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{e.name}</h5>
              <small className="client__review">{e.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
