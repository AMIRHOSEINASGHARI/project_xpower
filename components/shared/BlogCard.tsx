import Image from "next/image";

type BlogCardProps = {
    image: string;
    date: string;
    title: string;
    content: string;
};

const BlogCard = ({ image, date, title, content }: BlogCardProps) => {
    return (
        <div>
            <div className="relative rounded-t-[14px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                    className="h-[250px] w-full object-cover"
                />
                <div className="bg-black/50 backdrop-blur-[30px] rounded-[3px] px-4 py-1.5 absolute right-3 bottom-3">
                    <span>{date}</span>
                </div>
            </div>
            <div className="bg-[#FFFFFF1A] transition-colors duration-500 backdrop-blur-[24.56px] p-6 pb-10 space-y-3 relative rounded-b-[14px]">
                <h1 className="text-[21px] font-bold leading-[32.49px] h-[33px] line-clamp-2">
                    {title}
                </h1>
                <p className="text-sm lg:text-base font-light leading-[32.49px] h-[98px]">
                    {content}
                </p>
                <div className="absolute w-full left-0 right-0 -bottom-[20px] flex justify-center ">
                    <Image
                        src="/assets/icons/arrow-left-fill.png"
                        alt="arrow"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
