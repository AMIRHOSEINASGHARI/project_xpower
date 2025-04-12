import Link from "next/link";
import Image from "next/image";

import { footerLinks, socialLinks } from "@/constants";

const Footer = () => {
    return (
        <footer>
            <div className="container-base bg-[#FFFFFF1F] rounded-t-[18px] flex max-lg:flex-col justify-between items-center max-lg:gap-4 p-7">
                <div className="flex items-center gap-1">
                    <span>شماره تماس</span>
                    <span>:</span>
                    <span dir="ltr">۰۲۱ ۳۴۵۶ ۲۲۴۵</span>
                </div>
                <div className="flex flex-wrap items-center max-lg:justify-center gap-4">
                    <p>ما را در شبکه های اجتماعی دنبال کنید</p>
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map(({ icon }) => (
                            <div
                                key={icon}
                                className="bg-[#FFFFFF1A] rounded-[9px] size-[52px] flex items-center justify-center"
                            >
                                <Image
                                    src={icon}
                                    alt="icon"
                                    width={26}
                                    height={22}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="container-base py-6 md:py-15">
                    <div className="flex max-lg:flex-col gap-8 justify-between lg:items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                            {footerLinks.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-5"
                                >
                                    <span className="text-[20px] md:text-[25px] font-bold">
                                        {item.title}
                                    </span>
                                    <ul className="space-y-4">
                                        {item.links.map((link) => (
                                            <li
                                                key={link}
                                                className="text-sm md:text-[18px] font-light"
                                            >
                                                <Link href="#">{link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/zarinpal.png"
                                alt="zarinpal"
                                width={146}
                                height={197}
                            />
                            <div className="w-[172px] h-[197px] flex items-center justify-center rounded-[11px] bg-white">
                                <Image
                                    src="/assets/enamad.png"
                                    alt="enamad"
                                    width={146}
                                    height={159}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center bg-[#0000001A] backdrop-blur-[28px] rounded-[4px] p-2 mt-8">
                        کلیه حقوق متعلق به این وبسایت می باشد.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
