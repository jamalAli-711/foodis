'use client';

import { 
  BoltIcon,
  ChartBarIcon,
  UsersIcon,
  GlobeAltIcon,
  CakeIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import { Transition } from '@headlessui/react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
const breadcrumbs: BreadcrumbItem[] = [
    {
      
    },
];
const Services = ({ auth = { user: null }}) => {
  const services = [
    {
      icon: <BoltIcon className="w-10 h-10 text-amber-500" />,
      title: "Quick Recipes",
      description: "30-minute meals for busy weeknights with step-by-step video guides",
      features: ["Time-saving techniques", "Pantry staples", "One-pan meals"]
    },
    {
      icon: <ChartBarIcon className="w-10 h-10 text-green-500" />,
      title: "Meal Planning",
      description: "Customized weekly plans with shopping lists and nutrition balance",
      features: ["Diet-specific plans", "Grocery list generator", "Macro tracking"]
    },
    {
      icon: <UsersIcon className="w-10 h-10 text-blue-500" />,
      title: "Cooking Classes",
      description: "Live interactive sessions with professional chefs",
      features: ["Weekly live classes", "Recorded sessions", "Q&A with chefs"]
    },
    {
      icon: <GlobeAltIcon className="w-10 h-10 text-purple-500" />,
      title: "Global Cuisines",
      description: "Authentic international recipes with local ingredient substitutions",
      features: ["Country-themed weeks", "Cultural insights", "Specialty techniques"]
    },
    {
      icon: <CakeIcon className="w-10 h-10 text-red-500" />,
      title: "Baking Academy",
      description: "From basic cookies to advanced pastry techniques",
      features: ["Baking science", "Decoration tutorials", "Troubleshooting guides"]
    },
    {
      icon: <HeartIcon className="w-10 h-10 text-pink-500" />,
      title: "Healthy Eating",
      description: "Nutritious meals that don't compromise on flavor",
      features: ["Dietary adaptations", "Nutrition analysis", "Wellness tips"]
    }
  ];

  return (
     <AppLayout breadcrumbs={breadcrumbs}>

    
                        <Head title="Services" />
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-orange-500 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/a8dda9d7-b051-4287-a348-2a4f69c83c27/09cc7925-c92f-47e2-9e7d-ebc5cdab4da8.jpg')] bg-repeat"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Transition
            as="div"
            appear={true}
            show={true}
            enter="transition-opacity duration-800 ease-out"
            enterFrom="opacity-0 translate-y-5"
            enterTo="opacity-100 translate-y-0"
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Culinary Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover how FoodisV can transform your cooking experience with our premium services
            </p>
          </Transition>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Transition
          as="div"
          appear={true}
          show={true}
          enter="transition-opacity duration-500 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Transition.Child
              as="div"
              key={index}
              enter={`transition-all duration-500 ease-out delay-${index * 100}`}
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gray-50 mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </Transition.Child>
          ))}
        </Transition>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Transition
            as="div"
            appear={true}
            show={true}
            enter="transition-all duration-700 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/a8dda9d7-b051-4287-a348-2a4f69c83c27/8d013beb-3142-4e6c-a60c-90f15d1975f1.jpg')] bg-[length:40px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your Culinary Skills?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of home cooks who've transformed their kitchens with FoodisV services
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  View All Services
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </AppLayout>
   );
};

export default Services;