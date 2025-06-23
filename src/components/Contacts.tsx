import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section className="py-20 px-4 bg-workshop-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Свяжитесь <span className="gradient-text">с нами</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы помочь с ремонтом прямо сейчас. Звоните, пишите или
            приезжайте — мы всегда рады вам помочь!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 font-montserrat flex items-center">
                <Icon
                  name="Phone"
                  className="w-6 h-6 mr-3 text-workshop-primary"
                />
                Телефон
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-workshop-primary">
                    +7 (495) 123-45-67
                  </span>
                </div>
                <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
                <Button className="bg-workshop-accent hover:bg-pink-600 text-white">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 font-montserrat flex items-center">
                <Icon
                  name="MapPin"
                  className="w-6 h-6 mr-3 text-workshop-primary"
                />
                Наш адрес
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-semibold">
                  ул. Тверская, д. 10, стр. 1
                </p>
                <p className="text-gray-600">Москва, 125009</p>
                <p className="text-gray-600">
                  🚇 м. Тверская, Пушкинская (5 мин пешком)
                </p>
                <p className="text-gray-600">
                  🅿️ Собственная парковка для клиентов
                </p>
                <Button
                  variant="outline"
                  className="border-workshop-primary text-workshop-primary hover:bg-workshop-primary hover:text-white"
                >
                  <Icon name="Navigation" className="w-4 h-4 mr-2" />
                  Построить маршрут
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 font-montserrat flex items-center">
                <Icon
                  name="Clock"
                  className="w-6 h-6 mr-3 text-workshop-primary"
                />
                Время работы
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span className="font-semibold">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье</span>
                  <span className="font-semibold">10:00 - 20:00</span>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-700 font-medium">
                    🟢 Сейчас открыто
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Карта и дополнительные услуги */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">
                Как нас найти
              </h3>
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <Icon name="Map" className="w-12 h-12 mx-auto mb-2" />
                  <p>Интерактивная карта</p>
                  <p className="text-sm">ул. Тверская, д. 10, стр. 1</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Navigation" className="w-4 h-4 mr-2" />5 минут
                  пешком от метро Тверская
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Car" className="w-4 h-4 mr-2" />
                  Бесплатная парковка для клиентов
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Bus" className="w-4 h-4 mr-2" />
                  Остановка автобуса прямо у входа
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-workshop-primary to-blue-600 text-white rounded-2xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold mb-4 font-montserrat">
                Экспресс-заявка
              </h3>
              <p className="mb-6 opacity-90">
                Оставьте заявку, и мы перезвоним в течение 5 минут
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-workshop-accent hover:bg-pink-600 text-white">
                  <Icon name="Smartphone" className="w-4 h-4 mr-2" />
                  Ремонт смартфона
                </Button>
                <Button className="w-full bg-white text-workshop-primary hover:bg-gray-100">
                  <Icon name="Laptop" className="w-4 h-4 mr-2" />
                  Ремонт ноутбука
                </Button>
                <Button className="w-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                  <Icon name="Wrench" className="w-4 h-4 mr-2" />
                  Другая техника
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
