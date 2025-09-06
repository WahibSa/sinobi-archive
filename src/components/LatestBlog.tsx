import Card from "./Card";

interface BlogItem {
  id: string | number;
  name: string;
  description?: string;
  images: string[];
}

interface LatestBlogProps {
  type?: string;
  data?: Record<string, BlogItem[]>;
}

const LatestBlog = ({ type, data }: LatestBlogProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 items-stretch">
      {data?.[type ?? ""]?.map((blog: BlogItem) => (
        // <div key={blog.id} className="col-span-1">
          <Card
            title={blog.name || "No title"}
            desc={blog.description || "No description available."}
            image={
              type === "characters" || type === "akatsuki"
                ? blog.images[0]
                : "https://static.vecteezy.com/system/resources/previews/022/014/063/original/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg"
            }
          />
        // </div>
      ))}
    </div>
  );
};

export default LatestBlog;
