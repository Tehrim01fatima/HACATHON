

import Categories from "@/Components/categories";
import CompanyLogo from "@/Components/companyLogo";
import Hero from "@/Components/Hero";
import HotProduct from "@/Components/hotProducts";
import OurProducts from "@/Components/OurProducts";

export default function Home() {
  return (
    <>
    
      <Hero />
      <CompanyLogo />
      

      <Categories />
      <HotProduct />
      <OurProducts />
    </>
  );
}
