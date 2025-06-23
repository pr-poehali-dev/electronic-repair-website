import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Advantages />
      <Reviews />
      <Contacts />
    </div>
  );
};

export default Index;
