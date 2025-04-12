import Image from "next/image";

import clsx from "clsx";

type VideoCardProps = {
    image: string;
    title: string;
    content: string;
};

const buttons = [
    {
        icon: "/assets/player/pen.png",
        isBig: false,
        isTransparent: true,
    },
    {
        icon: "/assets/player/prev.png",
        isBig: false,
        isTransparent: false,
    },
    {
        icon: "/assets/player/play.png",
        isBig: true,
        isTransparent: false,
    },
    {
        icon: "/assets/player/next.png",
        isBig: false,
        isTransparent: false,
    },
    {
        icon: "/assets/player/settings.png",
        isBig: false,
        isTransparent: true,
    },
];

const VideoCard = ({ image, title, content }: VideoCardProps) => {
    return (
        <div className="flex max-xl:flex-col-reverse gap-8 ">
            <div className="flex justify-center w-full">
                <div className="rounded-[38px] overflow-hidden border border-white shrink-0 w-full xl:w-[500px] h-[300px] xl:h-[500px] relative">
                    <Image
                        src={image}
                        alt="image"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute z-10 bg-[#00000085] backdrop-blur-[5px] w-full h-[100px] bottom-0 left-0 right-0">
                        <div className="flex items-center justify-between gap-4 w-full px-3 mt-1">
                            <span className="w-[30px] text-[10px]">
                                1:56:30
                            </span>
                            <div className="flex items-center flex-row-reverse w-full">
                                <div className="w-1/3 bg-white h-[2px]" />
                                <div className="size-[6px] rounded-full bg-white" />
                                <div className="w-2/3 bg-white/70 h-[2px]" />
                            </div>
                            <span className="w-[30px] text-[10px]">38:56</span>
                        </div>
                        <div className="flex items-center justify-center gap-1 mt-4">
                            {buttons.map(({ icon, isBig, isTransparent }) => (
                                <div
                                    key={icon}
                                    className={clsx(
                                        "cursor-pointer flex items-center justify-center",
                                        isBig
                                            ? "size-[40px] opacity-100"
                                            : "size-[30px] opacity-90",
                                        isTransparent
                                            ? "bg-white/90 rounded-full p-1.5"
                                            : ""
                                    )}
                                >
                                    <Image
                                        src={icon}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 bg-primary rounded-[28px] p-7 xl:p-10 xl:h-[450px]">
                <div className="flex items-center justify-center gap-3">
                    <Image
                        src="/assets/icons/video.png"
                        alt="video"
                        width={48}
                        height={48}
                        className="max-xl:w-[30px]"
                    />
                    <span className="text-2xl xl:text-[35px] font-bold">
                        ویدیو آموزشی
                    </span>
                </div>
                <div className="flex flex-col gap-3 mt-8">
                    <h5 className="text-[20px] xl:text-[25px] font-bold">
                        {title}
                    </h5>
                    <p className="xl:text-[18px] text-sm leading-[38px] font-light">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
