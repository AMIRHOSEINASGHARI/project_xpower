import Image from "next/image";

import Button from "@/components/ui/button";

const PracticePlan = () => {
  return (
    <section className="container-base flex flex-col max-xl:items-center max-xl:gap-15 xl:flex-row justify-between mt-20 xl:mt-40">
      <div className="xl:w-1/2 flex flex-col max-xl:items-center gap-5 xl:mt-15">
        <h1 className="xl:text-[55px] text-[35px] font-extrabold xl:text-justify text-center bg-clip-text text-transparent bg-linear-140 from-[#BDADFF] to-[#FFFFFF]">
          برنامه تمرینی کاملا اختصاصی برای شما...
        </h1>
        <p className="text-center w-[90%] xl:text-justify font-light leading-5 xl:leading-8 text-xs xl:text-lg text-[#FFFFFF9E]">
          هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ تناسب
          اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو انجام بدن ، با
          ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط خودتون دریافت خواهید
          کرد.
        </p>
        <div className="flex items-center max-xl:justify-center gap-5">
          <Button className="text-xs xl:text-[20px]">
            دریافت برنامه تمرینی
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-xs xl:text-[20px] whitespace-nowrap">
              مشاهده نظر کاربران
            </span>
            <Image
              src="/assets/icons/arrow-left.png"
              alt="arrow"
              width={33}
              height={27}
              className="w-[20px] xl:w-[25px]"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-20 top-0 xl:top-20 left-0 xl:left-10 pointer-events-none select-none">
          <Image
            src="/assets/images/banner-2-bluring.png"
            alt="arrow"
            width={1000}
            height={653}
            className="w-[300px] md:w-[400px] opacity-60 xl:opacity-50 blur-[120px]"
          />
        </div>
        <div className="relative z-20">
          <Image
            src="/assets/images/banner-2.png"
            alt="arrow"
            width={1000}
            height={653}
            className="w-[300px] md:w-[400px] xl:w-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PracticePlan;
