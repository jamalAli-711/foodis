
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { 
  CakeIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon 
} from "@heroicons/react/24/solid";
import { 
  ChefHat,
  Salad,
  UtensilsCrossed,
  Award,
  Sparkles,
  CalendarHeart,
  UsersRound 
} from "lucide-react";
import { Transition } from '@headlessui/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
      
    },
];
const About = ({ auth = { user: null }}) => {
  const stats = [
    { value: "500K+", label: "Community Members", icon: <UsersRound className="w-8 h-8" /> },
    { value: "2K+", label: "Tested Recipes", icon: <UtensilsCrossed className="w-8 h-8" /> },
    { value: "15+", label: "Years Experience", icon: <CalendarHeart className="w-8 h-8" /> },
    { value: "98%", label: "Success Rate", icon: <Sparkles className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-red-600" />,
      title: "Professional Recipes",
      description: "Created by award-winning chefs"
    },
    {
      icon: <Salad className="w-8 h-8 text-green-600" />,
      title: "Dietary Options",
      description: "Vegan, gluten-free & allergy-friendly"
    },
    {
      icon: <ClockIcon className="w-8 h-8 text-amber-600" />,
      title: "Quick Meals",
      description: "30-minute or less recipes"
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-pink-600" />,
      title: "Family Favorites",
      description: "Kid-approved meals"
    }
  ];

  return (
     <AppLayout breadcrumbs={breadcrumbs}>
                    <Head title="About" />
   <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-600 to-amber-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern-food.png')] bg-[length:200px] bg-repeat opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-800 ease-out"
            enterFrom="opacity-0 translate-y-5"
            enterTo="opacity-100 translate-y-0"
            className="text-center"
             as="div"
          >
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 mr-2 text-amber-200" />
              <span className="text-white font-medium">Culinary Award Winner 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-amber-200">Delicious</span> Journey
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Bringing restaurant-quality recipes to home kitchens since 2025
            </p>
          </Transition>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Transition
              key={index}
              appear={true}
              show={true}
              enter={`transition-all duration-500 ease-out delay-${index * 100}`}
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-red-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </Transition>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Transition
              appear={true}
              show={true}
              enter="transition-all duration-700 ease-out"
              enterFrom="opacity-0 -translate-x-10"
              enterTo="opacity-100 translate-x-0"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Culinary <span className="text-red-600">Philosophy</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At FoodisV, we believe great food should be accessible to everyone. Our recipes bridge the gap between professional techniques and home cooking, with clear instructions anyone can follow.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ShieldCheckIcon className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Quality Guaranteed</h4>
                      <p className="text-gray-600">Every recipe is tested at least 3 times before publishing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CakeIcon className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Celebration Worthy</h4>
                      <p className="text-gray-600">Special occasion recipes that impress guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
            
            <Transition
              appear={true}
              show={true}
              enter="transition-all duration-700 ease-out delay-300"
              enterFrom="opacity-0 translate-x-10"
              enterTo="opacity-100 translate-x-0"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                <img 
                  src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/a8dda9d7-b051-4287-a348-2a4f69c83c27/c06a2649-0c3a-4ee2-ad90-ec7b38886208.jpg" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium">Our test kitchen where magic happens</p>
                </div>
              </div>
            </Transition>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-500 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Us <span className="text-red-600">Different</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The FoodisV advantage for home cooks
              </p>
            </div>
          </Transition>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Transition
                key={index}
                appear={true}
                show={true}
                enter={`transition-all duration-500 ease-out delay-${index * 100}`}
                enterFrom="opacity-0 translate-y-10"
                enterTo="opacity-100 translate-y-0"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </Transition>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/pattern-dots.png')] bg-[length:40px]"></div>
          </div>
          <Transition
            appear={true}
            show={true}
            enter="transition-all duration-700 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Cooking?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join our community and get access to exclusive recipes, cooking classes, and more.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 mr-2" />
                  Browse Recipes
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300 flex items-center justify-center">
                  <ChefHat className="w-5 h-5 mr-2" />
                  Join Now
                </button>
              </div>
            </div>
          </Transition>
        </section>
      </div>
    </div>
    </AppLayout>
  );
};

export default About;