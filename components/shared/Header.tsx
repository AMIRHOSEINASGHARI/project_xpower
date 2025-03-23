import Link from "next/link";

import Button from "../ui/button";

const Header = () => {
  return (
    <header className="w-full fixed z-50 top-0 right-0">
      <div className="container-base flex items-center justify-between py-4 xl:py-8">
        <div className="flex items-center gap-7">
          <Link href="/" className="font-extrabold text-[25px] xl:text-[30px]">
            X<span className="text-primary">.</span>POWER
          </Link>
          <nav className="max-xl:hidden">
            <ul className="flex items-center gap-5">
              <li className="nav-li text-primary">صفحه اصلی</li>
              <li className="nav-li">فروشگاه</li>
              <li className="nav-li">خدمات</li>
              <li className="nav-li">بلاگ</li>
              <li className="nav-li">درباره ما</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Button>ورود و ثبت نام</Button>
          <div className="xl:hidden flex flex-col items-center justify-center gap-1 size-9 rounded-full bg-primary p-2">
            <span className="w-full h-0.5 bg-white rounded-full" />
            <span className="w-full h-0.5 bg-white rounded-full" />
            <span className="w-full h-0.5 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
