import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute z-[1] top-0 xl:-top-50 left-0 right-0 flex justify-center">
        <Image
          src="/assets/linear-shape.png"
          alt="shape"
          width={1440}
          height={1102}
          className="w-[1440px] xl:w-[1700px] h-[800px] xl:h-[1100px] object-cover"
        />
      </div>
      <div className="container-base relative pt-25 xl:pt-0 flex flex-col xl:flex-row items-center w-full">
        <div className="w-full xl:w-[644px] xl:mt-15 max-xl:flex max-xl:flex-1 shrink-0 relative z-10">
          <div className="w-full relative z-20">
            <h1 className="xl:text-[45px] text-[35px] font-extrabold xl:text-justify text-center bg-clip-text text-transparent bg-linear-140 from-[#BDADFF] to-[#FFFFFF]">
              هر آنچه برای رسیدن به اندام ایده آل نیاز دارید
            </h1>
            <p className="xl:text-[29px] xl:text-justify text-center xl:mb-16 mb-10 max-xl:mt-2 bg-clip-text text-transparent bg-linear-140 from-[#BDADFF] to-[#FFFFFF]">
              تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
            </p>
            <div className="relative bg-[#FFFFFF12] rounded-[15px] border border-[#FFFFFF36] pb-8 pt-10 px-6 backdrop-blur-[28px] mb-5">
              <p className="xl:text-[20px]">
                با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته
                ورزشی جذاب قرار دهیم.
              </p>
              <div className="xl:size-[76px] size-[50px] bg-primary rounded-full flex items-center justify-center absolute xl:-top-[50px] -top-[30px] left-[25px]">
                <Image
                  src="/assets/icons/Award.png"
                  alt="Award"
                  width={40}
                  height={40}
                  className="xl:size-[38px] size-[28px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-5 h-[70px]">
              <div className="flex flex-col flex-1 items-center justify-center max-xl:gap-2">
                <span
                  className="font-bold xl:text-[45px] text-[25px] text-center"
                  dir="ltr"
                >
                  +۲۰۰۰
                </span>
                <span className="text-primary/80 -mt-3 max-xl:text-xs whitespace-nowrap">
                  کاربر فعال
                </span>
              </div>
              <div className="h-full w-[1px] mt-3 bg-linear-0 from-[#C7C7C700] to-[#FFFFFF]" />
              <div className="flex flex-col flex-1 items-center justify-center max-xl:gap-2">
                <span
                  className="font-bold xl:text-[45px] text-[25px] text-center"
                  dir="ltr"
                >
                  +۲۵۰
                </span>
                <span className="text-primary/80 -mt-3 max-xl:text-xs whitespace-nowrap">
                  مکمل بدنسازی
                </span>
              </div>
              <div className="h-full w-[1px] mt-3 bg-linear-0 from-[#C7C7C700] to-[#FFFFFF]" />
              <div className="flex flex-col flex-1 items-center justify-center max-xl:gap-2">
                <span
                  className="font-bold xl:text-[45px] text-[25px] text-center"
                  dir="ltr"
                >
                  +۱۰۰۰
                </span>
                <span className="text-primary/80 -mt-3 max-xl:text-xs whitespace-nowrap">
                  رژیم غذایی آنلاین
                </span>
              </div>
            </div>
          </div>
          <div className="absolute z-10 xl:top-0 top-30 max-xl:left-[calc(50%-100px)] bg-[#423D90] size-[250px] xl:size-[600px] blur-[200px] xl:blur-[600px]" />
        </div>
        <div className="relative z-20 max-xl:flex max-xl:justify-center max-xl:w-full xl:w-[60%] ml-20 sm:ml-25 md:ml-35 xl:ml-0">
          <Image
            src="/assets/images/banner-1.png"
            alt="banner-1"
            width={1000}
            height={1000}
            className="xl:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
