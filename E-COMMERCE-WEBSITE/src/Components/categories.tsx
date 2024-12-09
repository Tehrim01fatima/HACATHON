import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  products: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    name: "Wing Chair",
    products: "3,584 Products",
    image: "/pictures/chair2.png",
    href: "/products/wing-chair",
  },
  {
    name: "Wooden Chair",
    products: "157 Products",
    image: "/pictures/chair4.png",
    href: "/products/wooden-chair",
  },
  {
    name: "Desk Chair",
    products: "154 Products",
    image: "/pictures/chair3.png",
    href: "/products/desk-chair",
  },
];

export default function Categories() {
  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
      
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, products, image, href }) => (
            <Link
              key={name}
              href={href}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
           
              <div className="aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={`${name} category`}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  layout="responsive"
                  width={400}
                  height={300}
                  priority
                />
              </div>

            
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
        
                  <h3 className="mb-2 text-xl font-medium text-white">
                    {name}
                  </h3>
               
                  <p className="text-sm text-gray-200">{products}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
