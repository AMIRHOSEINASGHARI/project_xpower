import { newestBlogsList } from "@/constants";

import BlogCard from "@/components/shared/BlogCard";

const NewestBlogs = () => {
    return (
        <section className="container-base mt-10 mb-30">
            <p className="xl:font-bold font-semibold xl:text-[34px] text-[20px] text-center mb-8 xl:mb-14">
                جدیدترین مقالات
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {newestBlogsList.map((item) => (
                    <BlogCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
};

export default NewestBlogs;
