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

const videosSliderList = [
    {
        title: "آموزش جلو بازو ایستاده",
        content:
            "هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.",
        image: "/assets/images/play-1.webp",
    },
    {
        title: "آموزش جلو بازو ایستاده",
        content:
            "هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.",
        image: "/assets/images/play-2.webp",
    },
    {
        title: "آموزش جلو بازو ایستاده",
        content:
            "هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.",
        image: "/assets/images/play-3.webp",
    },
    {
        title: "آموزش جلو بازو ایستاده",
        content:
            "هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو باید کاملا به دقت و صحیح اجرا شوند.",
        image: "/assets/images/play-4.webp",
    },
];

const newestBlogsList = [
    {
        image: "/assets/images/card-1.png",
        date: "۱۲ ساعت پیش",
        title: "پولدارترین بدنسازهای تاریخ",
        content:
            "صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند...",
    },
    {
        image: "/assets/images/card-2.png",
        date: "۱۵ ساعت پیش",
        title: "برنامه تمرینی اینتروال چربی سوزی",
        content:
            "تمرینات اینتروال (HIIT) موثرترین روش تمرین برای چربی سوزی و حفظ عضلات است. در ادامه سعی می‌کنم درمورد تمرینات اینتروال بیشتر...",
    },
    {
        image: "/assets/images/card-3.png",
        date: "۲۰ ساعت پیش",
        title: "چقدر مقدار وزنه انتخاب کنم؟",
        content:
            "صنعت بدنسازی گاهی مرموز به نظر می‌رسد، اگر می‌خواهید بدانید چه افرادی در این صنعت، پول‌های حسابی بدست می‌آورند با ما همراه باشید.",
    },
];

const socialLinks = [
    {
        icon: "/assets/social/telegram.png",
    },
    {
        icon: "/assets/social/instagram.png",
    },
    {
        icon: "/assets/social/whatsapp.png",
    },
    {
        icon: "/assets/social/twitter.png",
    },
];

const footerLinks = [
    {
        title: "راهنمای مشتریان",
        links: [
            "پاسخ به پرسش های متداول",
            "روش های ارسال کالا",
            "روش های پرداخت",
            "قوانین و مقررات",
        ],
    },
    {
        title: "راهنمای مشتریان",
        links: [
            "پاسخ به پرسش های متداول",
            "روش های ارسال کالا",
            "روش های پرداخت",
            "قوانین و مقررات",
        ],
    },
];

export {
    ourServicesCards,
    productsList,
    sliderPagination,
    videosSliderList,
    newestBlogsList,
    socialLinks,
    footerLinks,
};
