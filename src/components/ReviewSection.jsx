import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReviewSection.css";

const reviews = [
  {
    id: 1,
    name: "Endang Martini",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "Hampir kena tipu tukang AC. Katanya biaya perbaikan sampai 800an. Alhamdulilah, panggil teknisi Dio dicek hanya kena biaya 250K. Ac aman sampai sekarNg. Datang on time dan perbaikan beres.",
  },
  {
    id: 2,
    name: "Warti Cilacap",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "Pelayanan cepat, dan service ac sangat baik Bisa jadi langganan kedepannya",
  },
  {
    id: 3,
    name: "Feria Puspitasari",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "Langganan di sini. Servis AC, pasang AC harga murce kwalitas nomer wahid.",
  },
  {
    id: 4,
    name: "Pak Wari",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "bagus banget segi pelayanan, pesan hari ini langsung dijadwalkan service ac besok pelayanan sangat ramah",
  },
  {
    id: 5,
    name: "Elvi Yunita",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "CS fast respon, pelayanan bagus dan ramah, service AC di Dio AC mantap, dan gercep Terima Kasih DIO AC 🥰 …",
  },
  {
    id: 6,
    name: "Anonimous",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "Servis mesin cuci disini, teknisi gercep. Alhamdulillah, cepat dilayani juga.",
  },
  {
    id: 7,
    name: "Faiz Putri",
    role: "Customer",
    image:
      "https://cdn.jsdelivr.net/npm/remixicon@4.8.0/icons/User & Faces/user-3-line.svg",
    rating: 5,
    text: "Semoga bisa memuaskan pelanggan dio ac yuk servis di dio ac aja ramah dan cepat..",
  },
];

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="review-card">
                <div className="review-header">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="reviewer-image"
                  />
                  <div className="reviewer-info">
                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="reviewer-role">{review.role}</p>
                  </div>
                </div>

                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="review-text">{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;
