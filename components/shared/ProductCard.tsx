import Image from "next/image";

import { convertPrice } from "@/utils";

import Button from "../ui/button";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
};

const ProductCard = ({ image, price, title }: ProductCardProps) => {
  return (
    <div className="relative group">
      <div className="flex justify-center">
        <div className="w-[85%] h-[271px] transition-all duration-500 group-hover:bg-white bg-[#FFFFFF1A] backdrop-blur-[15px] border border-[#FFFFFF78] absolute -top-14 z-20 flex justify-center items-center rounded-[15px]">
          <Image src={image} alt={title} width={256} height={256} />
        </div>
      </div>
      <div className="relative z-10 h-[397px] rounded-[15px] p-7 pb-13 flex flex-col justify-end group-hover:bg-primary transition-all duration-500 bg-[#FFFFFF1A] backdrop-blur-[28px]">
        <span className="text-[18px] h-[70px]">{title}</span>
        <div className="text-[18px] flex items-center justify-between">
          <span>قیمت:</span>
          <span>{convertPrice(price)} تومان</span>
        </div>
      </div>
      <div className="absolute flex justify-center w-full -bottom-5 z-20">
        <Button className="p-0 w-10 h-10 group-hover:w-auto group-hover:px-5 flex items-center justify-center rounded-xl group-hover:bg-white">
          <Image
            src="/assets/icons/plus.png"
            alt="plus"
            width={16}
            height={16}
            className="group-hover:hidden"
          />
          <span className="hidden group-hover:block text-primary">
            افزودن به سبد خرید
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
