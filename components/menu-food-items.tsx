import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const images = [
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 1", label: "Rajama Chawal" },
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 2", label: "Paneer Tikka" },
  { src: "/category/butter-chicken.jpg", alt: "Offers 3", label: "Butter Chicken" },
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 4", label: "Chole Bhature" },
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 5", label: "Dal Makhani" },
  { src: "/category/aloo-paratha.jpg", alt: "Offers 6", label: "Aloo Paratha" },
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 1", label: "Rajama Chawal" },
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 2", label: "Paneer Tikka" },
  { src: "/category/rajama-chawal.jpeg", alt: "Offers 3", label: "Butter Chicken" },
];

const MenuFoodItems = () => {
  return (
    <div className="w-full py-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center">
              {/* Image container */}
              <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>

              {/* Label */}
              <span className="mt-2 text-base font-medium text-gray-800 text-center">
                {img.label}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenuFoodItems;
