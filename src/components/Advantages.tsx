import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Search",
      title: "Бесплатная диагностика",
      description:
        "Определим причину поломки и назовем точную стоимость ремонта без скрытых платежей",
      highlight: true,
    },
    {
      icon: "Shield",
      title: "Гарантия на все",
      description:
        "Даем официальную гарантию на выполненные работы и установленные запчасти",
    },
    {
      icon: "Package",
      title: "Запчасти в наличии",
      description:
        "Большой склад оригинальных запчастей, можем заказать под любую модель",
    },
    {
      icon: "Truck",
      title: "Доставка",
      description:
        "Заберем устройство на ремонт и доставим обратно после завершения работ",
    },
    {
      icon: "MapPin",
      title: "Центр города",
      description:
        "Удобное расположение в центре с легким доступом на общественном транспорте",
    },
    {
      icon: "Car",
      title: "Парковка",
      description:
        "Собственная парковка для клиентов — не нужно искать место для авто",
    },
  ];

  return (
    <section className="py-20 px-4 bg-workshop-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Почему выбирают <span className="gradient-text">нас</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали сервис, который действительно удобен для клиентов. Каждая
            деталь продумана для вашего комфорта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-300 ${
                advantage.highlight
                  ? "ring-2 ring-workshop-accent ring-opacity-50 bg-gradient-to-br from-white to-pink-50"
                  : ""
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  advantage.highlight
                    ? "bg-workshop-accent text-white"
                    : "bg-workshop-primary text-white"
                }`}
              >
                <Icon name={advantage.icon as any} className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold mb-4 font-montserrat">
                {advantage.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>

              {advantage.highlight && (
                <div className="mt-4 text-sm font-semibold text-workshop-accent">
                  ★ Главное преимущество
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
