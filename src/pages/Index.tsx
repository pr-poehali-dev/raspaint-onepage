import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  const categories = [
    { id: "sets", name: "Наборы", subcategories: [] },
    { 
      id: "clothing", 
      name: "Одежда", 
      subcategories: [
        { id: "kids", name: "Для детей" },
        { id: "adults", name: "Для взрослых" }
      ]
    },
    { id: "bags", name: "Шопперы", subcategories: [] },
    { id: "backpacks", name: "Рюкзаки", subcategories: [] },
    { id: "supplies", name: "Фломастеры/Краски", subcategories: [] }
  ];

  const mockProducts = {
    sets: [
      { id: 1, name: "Набор юного художника", price: "1 200 ₽", image: "/placeholder.svg" },
      { id: 2, name: "Творческий набор Радуга", price: "850 ₽", image: "/placeholder.svg" },
    ],
    "clothing-kids": [
      { id: 3, name: "Футболка детская белая", price: "650 ₽", image: "/placeholder.svg" },
      { id: 4, name: "Толстовка детская", price: "980 ₽", image: "/placeholder.svg" },
    ],
    "clothing-adults": [
      { id: 5, name: "Футболка взрослая белая", price: "750 ₽", image: "/placeholder.svg" },
      { id: 6, name: "Худи взрослое", price: "1 200 ₽", image: "/placeholder.svg" },
    ],
    bags: [
      { id: 7, name: "Эко-сумка холст", price: "450 ₽", image: "/placeholder.svg" },
      { id: 8, name: "Шоппер с карманом", price: "550 ₽", image: "/placeholder.svg" },
    ],
    backpacks: [
      { id: 9, name: "Рюкзак городской", price: "1 500 ₽", image: "/placeholder.svg" },
      { id: 10, name: "Детский рюкзачок", price: "890 ₽", image: "/placeholder.svg" },
    ],
    supplies: [
      { id: 11, name: "Акриловые краски 12 цветов", price: "320 ₽", image: "/placeholder.svg" },
      { id: 12, name: "Кисти набор 5 шт", price: "280 ₽", image: "/placeholder.svg" },
    ]
  };

  const getCurrentProducts = () => {
    if (selectedCategory === "clothing" && selectedSubcategory) {
      return mockProducts[`clothing-${selectedSubcategory}` as keyof typeof mockProducts] || [];
    }
    return mockProducts[selectedCategory as keyof typeof mockProducts] || [];
  };

  const advantages = [
    {
      icon: "Palette",
      title: "Творческий подход",
      description: "Индивидуальный дизайн для каждого изделия"
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставляем по всей России за 2-5 дней"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Только качественные материалы и краски"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-creative-peach/20 via-creative-lavender/20 to-creative-blue/20">
      {/* Header */}
      <header className="relative bg-white shadow-lg border-b-4 border-creative-coral overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/img/fb2d2c70-95d2-4983-896c-b09d4b88dfea.jpg)',
            backgroundPosition: '70% center'
          }}
        >
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-creative text-5xl lg:text-7xl text-creative-coral font-bold mb-4 drop-shadow-lg">
              Раскрась себя! 🎨
            </h1>
            <p className="text-gray-800 text-xl lg:text-2xl font-semibold drop-shadow-sm">
              Творчество без границ
            </p>
            <p className="text-gray-700 text-lg mt-4 max-w-lg">
              Создавайте уникальные вещи своими руками с нашими качественными товарами для творчества
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category Selection */}
        <section className="mb-12">
          <Card className="border-2 border-creative-teal shadow-xl">
            <CardHeader>
              <CardTitle className="font-creative text-3xl text-creative-teal text-center">
                Выберите категорию товаров
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`h-16 font-semibold text-sm transition-all duration-300 ${
                      selectedCategory === category.id 
                        ? "bg-creative-coral hover:bg-creative-coral/80 text-white border-creative-coral shadow-lg scale-105" 
                        : "border-creative-teal text-creative-teal hover:bg-creative-teal/10"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubcategory("");
                    }}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Subcategories */}
              {selectedCategory === "clothing" && (
                <div className="flex justify-center gap-4 mb-6">
                  {categories.find(c => c.id === "clothing")?.subcategories.map((sub) => (
                    <Button
                      key={sub.id}
                      variant={selectedSubcategory === sub.id ? "default" : "outline"}
                      className={`transition-all duration-300 ${
                        selectedSubcategory === sub.id
                          ? "bg-creative-purple hover:bg-creative-purple/80 text-white"
                          : "border-creative-purple text-creative-purple hover:bg-creative-purple/10"
                      }`}
                      onClick={() => setSelectedSubcategory(sub.id)}
                    >
                      {sub.name}
                    </Button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Products */}
        {selectedCategory && (selectedCategory !== "clothing" || selectedSubcategory) && (
          <section className="mb-12">
            <h2 className="font-creative text-4xl text-creative-blue text-center mb-8">
              Товары категории
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentProducts().map((product) => (
                <Card key={product.id} className="border-2 border-creative-mint shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <Badge variant="secondary" className="mb-4 bg-creative-yellow text-gray-800">
                      {product.price}
                    </Badge>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                        <Icon name="MessageCircle" size={14} className="mr-1" />
                        ВК
                      </Button>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-xs">
                        <Icon name="Send" size={14} className="mr-1" />
                        Telegram
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-xs">
                        <Icon name="ShoppingBag" size={14} className="mr-1" />
                        WB
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-xs">
                        <Icon name="Package" size={14} className="mr-1" />
                        OZON
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Advantages */}
        <section className="mb-12">
          <h2 className="font-creative text-4xl text-creative-purple text-center mb-8">
            Наши преимущества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-2 border-creative-lavender shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-creative-lavender mb-4">
                    <Icon name={advantage.icon as any} size={32} className="text-creative-purple" />
                  </div>
                  <h3 className="font-creative text-2xl text-creative-purple mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Company */}
        <section className="mb-12">
          <Card className="border-2 border-creative-mint shadow-xl">
            <CardHeader>
              <CardTitle className="font-creative text-4xl text-creative-teal text-center">
                О компании
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Раскрась себя" — это творческое пространство, где каждый может выразить свою 
                  индивидуальность через искусство. Мы предлагаем качественные товары для 
                  художественного творчества: от простых футболок до полных наборов для рисования. 
                  Наша миссия — сделать искусство доступным для всех, независимо от возраста и 
                  уровня подготовки. Создавайте, экспериментируйте, раскрашивайте мир вокруг себя!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-creative text-2xl text-creative-yellow mb-4">Контакты</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@raskrassebya.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Творческая, 123
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-creative text-2xl text-creative-yellow mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-creative-yellow text-creative-yellow hover:bg-creative-yellow hover:text-gray-800">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-creative-yellow text-creative-yellow hover:bg-creative-yellow hover:text-gray-800">
                  <Icon name="Send" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-creative-yellow text-creative-yellow hover:bg-creative-yellow hover:text-gray-800">
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-400">
              © 2024 "Раскрась себя". Все права защищены. 🎨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;