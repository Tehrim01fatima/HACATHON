import { Section } from "lucide-react";
import Image from "next/image";

export default function HotProduct() {
  return (
    <section
      className="container mx-auto px-4 py-12 lg:py-16"
      role="region"
      aria-label="Hot Product Section"
    >
    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
    <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
  <div
    className="transform transition-transform duration-500 ease-in-out lg:rotate-90 lg:origin-left text-[30px] font-extrabold tracking-wider text-zinc-900 pt-6 lg:block md:hidden"
    aria-hidden="true"
  >
    EXPLORE NEW AND POPULAR STYLES
  </div>
</div>

</div>


        <div className="text-xl font-medium tracking-wider text-zinc-900 lg:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-[48%]">
            <Image
              src="/pictures/chair3.png"
              alt="Modern orange chair with sleek design"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-[60%] xl:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/pictures/chair4.png"
                alt="White tufted chair with luxurious finish"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/pictures/chair1.png"
                alt="Gray upholstered chair with modern aesthetics"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/pictures/chair6.png"
                alt="Vintage white chair with intricate detailing"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/pictures/chair2.png"
                alt="Minimalist wooden chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
 

  );
}
