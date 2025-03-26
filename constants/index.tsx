const sliderPagination = {
  clickable: true,
  renderBullet: function (index: number, className: string) {
    return '<span class="' + className + '">' + "</span>";
  },
};

const ourServicesCards = [
  {
    icon: "/assets/icons/practice.png",
    title: "برنامه تمرینی",
    text: "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی",
  },
  {
    icon: "/assets/icons/regime.png",
    title: "رژیم غذایی",
    text: "ارائه آنلاین رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند",
  },
  {
    icon: "/assets/icons/mokamel.png",
    title: "مکمل های بدنسازی",
    text: "بررسی انواع مکملهای بدنسازی برای انتخاب بهترین مکمل بدنسازی",
  },
  {
    icon: "/assets/icons/practice-2.png",
    title: "برنامه تمرینی",
    text: "ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی",
  },
];

const productsList = [
  {
    id: "1",
    image: "/assets/slides/slide-1.png",
    title: "پروتئین وی ژن استار ۲۲۷۰ گرم",
    price: "2290000",
  },
  {
    id: "2",
    image: "/assets/slides/slide-2.png",
    title: "پروتئین وی یوروویتال ۱۰۰۰ گرم",
    price: "1800000",
  },
  {
    id: "3",
    image: "/assets/slides/slide-3.png",
    title: "گینر ژن استار ۳۰۰۰ گرم",
    price: "9600000",
  },
  {
    id: "4",
    image: "/assets/slides/slide-4.png",
    title: "دلیشس وی پروتئین کیو ان تی",
    price: "3180000",
  },
  {
    id: "5",
    image: "/assets/slides/slide-1.png",
    title: "پروتئین وی ژن استار ۲۲۷۰ گرم",
    price: "2290000",
  },
  {
    id: "6",
    image: "/assets/slides/slide-2.png",
    title: "پروتئین وی یوروویتال ۱۰۰۰ گرم",
    price: "1800000",
  },
  {
    id: "7",
    image: "/assets/slides/slide-3.png",
    title: "گینر ژن استار ۳۰۰۰ گرم",
    price: "9600000",
  },
  {
    id: "8",
    image: "/assets/slides/slide-4.png",
    title: "دلیشس وی پروتئین کیو ان تی",
    price: "3180000",
  },
];

export { ourServicesCards, productsList, sliderPagination };
