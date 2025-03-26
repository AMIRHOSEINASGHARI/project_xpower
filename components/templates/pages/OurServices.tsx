import Image from "next/image";

import { ourServicesCards } from "@/constants";

const OurServices = () => {
  return (
    <section className="container-base xl:my-20 my-15">
      <span className="text-primary xl:text-[30px] text-center block mb-2">
        خدمات ما
      </span>
      <p className="xl:font-bold font-semibold xl:text-[34px] text-[20px] text-center mb-8 xl:mb-14">
        ما در ایکس پاور چه خدماتی ارائه میکنیم؟
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {ourServicesCards.map(({ icon, title, text }) => (
          <div
            key={icon}
            className="hover:bg-primary hover:border-[#FFFFFF] hover:scale-105 border border-transparent transition-all duration-500 bg-[#FFFFFF1A] backdrop-blur-[28px] flex flex-col items-center justify-center px-8 py-13 rounded-[15px]"
          >
            <Image
              src={icon}
              alt={title}
              width={60}
              height={60}
              className="mb-5"
            />
            <span className="text-[20px] xl:text-[25px] font-bold text-center">
              {title}
            </span>
            <p className="text-center my-8">{text}</p>
            <div className="flex items-center gap-2">
              <span>ادامه مطلب</span>
              <Image
                src="/assets/icons/arrow-left.png"
                alt="arrow"
                width={18}
                height={15}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
