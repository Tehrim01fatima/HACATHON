import { ShoppingCart } from "lucide-react";
import { Badge } from "@/Components/ui/badges";
import Image from "next/image";
import Link from "next/link";

interface allProducts {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function AllProduct() {
  const products: allProducts[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair1.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/pictures/chair2.png",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair3.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair4.png",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair5.png",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/pictures/chair6.png",
      isSale: true,
    },
    {
      id: 7,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair7.png",
    },
    {
      id: 8,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair1.png",
    },
    {
      id: 9,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/image (3).png",
      isNew: true,
    },
    {
      id: 10,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/pictures/chair2.png",
      isSale: true,
    },
    {
      id: 11,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/chair3.png",
    },
    {
      id: 12,
      title: "Library Stool Chair",
      price: 20,
      image: "/pictures/image (4).png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative aspect-square w-full">
              {product.isNew && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.isSale && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            <div className="mt-4 flex items-center justify-between px-4">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
