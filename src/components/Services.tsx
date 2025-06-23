import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Smartphone",
      title: "Смартфоны",
      description: "Замена экранов, батарей, камер. Ремонт после воды.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: "Tablet",
      title: "Планшеты",
      description: "Ремонт дисплеев, разъемов зарядки, восстановление ПО.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: "Laptop",
      title: "Ноутбуки",
      description: "Чистка, замена клавиатур, экранов, материнских плат.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: "Monitor",
      title: "Компьютеры",
      description: "Диагностика, ремонт, модернизация ПК любой сложности.",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: "Coffee",
      title: "Кофемашины",
      description: "Чистка, ремонт помп, замена нагревательных элементов.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: "Tv",
      title: "Телевизоры",
      description: "Ремонт матриц, блоков питания, Smart TV модулей.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: "Microwave",
      title: "Микроволновки",
      description: "Замена магнетронов, ремонт электроники, дверец.",
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: "ChefHat",
      title: "Мультиварки",
      description: "Ремонт нагревательных элементов, электронных блоков.",
      color: "bg-teal-50 text-teal-600",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Наши <span className="gradient-text">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ремонтируем любую электронику и бытовую технику. Опытные мастера,
            оригинальные запчасти, современное оборудование.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={service.icon as any} className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold mb-3 font-montserrat">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-workshop-gray rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Gift" className="w-8 h-8 text-workshop-accent mr-3" />
              <h3 className="text-2xl font-bold font-montserrat">
                Бесплатная диагностика
              </h3>
            </div>
            <p className="text-lg text-gray-700">
              При последующем ремонте диагностика не стоит ни копейки. Узнайте
              точную причину поломки и стоимость ремонта совершенно бесплатно!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
