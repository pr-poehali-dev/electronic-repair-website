import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-workshop-primary to-blue-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Ремонт электроники
            <span className="block text-workshop-accent">любой сложности</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Смартфоны, планшеты, ноутбуки, бытовая техника — всё под одной
            крышей. Гарантия на все работы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-workshop-accent hover:bg-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open("tel:+79124244242")}
            >
              Позвонить!
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-workshop-accent text-workshop-accent hover:bg-workshop-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Icon name="MapPin" className="mr-2" />
              Наш адрес
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <Icon
                name="Clock"
                className="w-8 h-8 mx-auto mb-3 text-workshop-accent"
              />
              <h3 className="font-semibold mb-2">Быстро</h3>
              <p className="text-sm opacity-90">
                Большинство ремонтов в течение дня
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <Icon
                name="Shield"
                className="w-8 h-8 mx-auto mb-3 text-workshop-accent"
              />
              <h3 className="font-semibold mb-2">Гарантия</h3>
              <p className="text-sm opacity-90">На все виды работ и запчасти</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <Icon
                name="Truck"
                className="w-8 h-8 mx-auto mb-3 text-workshop-accent"
              />
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-sm opacity-90">
                Заберём и привезём ваше устройство
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
