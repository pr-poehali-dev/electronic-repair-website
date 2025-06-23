import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      device: "iPhone 13",
      rating: 5,
      text: "Сломался экран, думала придется покупать новый телефон. Ребята починили за 2 часа, работает как новый! Цена адекватная, мастера вежливые.",
      date: "2 дня назад",
    },
    {
      name: "Михаил Козлов",
      device: "MacBook Pro",
      rating: 5,
      text: "Не включался ноутбук после разлива кофе. Диагностика действительно бесплатная, ремонт сделали качественно. Даже данные восстановили!",
      date: "неделю назад",
    },
    {
      name: "Елена Сидорова",
      device: "Кофемашина Delonghi",
      rating: 5,
      text: "Кофемашина перестала работать. Мастер приехал на дом, починил на месте. Очень удобно, что не нужно было тащить тяжелую технику.",
      date: "2 недели назад",
    },
    {
      name: "Дмитрий Волков",
      device: "Samsung Galaxy Tab",
      rating: 5,
      text: "Разбился экран планшета. Заказал ремонт онлайн, забрали прямо с работы. На следующий день привезли обратно в идеальном состоянии.",
      date: "месяц назад",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Отзывы <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 1000 довольных клиентов доверили нам ремонт своих устройств.
            Читайте реальные отзывы о нашей работе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="font-bold text-lg font-montserrat mb-1">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{review.device}</p>
                </div>
                <div className="text-right">
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="w-4 h-4 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center text-green-600 text-sm font-medium">
                <Icon name="CheckCircle" className="w-4 h-4 mr-2" />
                Проверенный отзыв
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-workshop-primary to-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto hover-lift">
            <div className="flex items-center justify-center mb-4">
              <Icon
                name="Star"
                className="w-8 h-8 text-yellow-300 mr-3 fill-current"
              />
              <h3 className="text-2xl font-bold font-montserrat">
                Рейтинг 4.9 из 5
              </h3>
            </div>
            <p className="text-lg opacity-90 mb-4">
              Основан на 1,247 отзывах наших клиентов
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="flex items-center">
                <Icon name="Users" className="w-5 h-5 mr-2" />
                <span>1000+ клиентов</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" className="w-5 h-5 mr-2" />
                <span>5 лет опыта</span>
              </div>
              <div className="flex items-center">
                <Icon name="ThumbsUp" className="w-5 h-5 mr-2" />
                <span>98% довольных</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
