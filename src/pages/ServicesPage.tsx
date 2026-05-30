import PageLayout from './PageLayout';
import { Leaf, Heart, Shield, Users } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Herbal Consultations',
      description: 'Personalized wellness plans based on traditional African and global herbalism.',
      icon: <Leaf className="w-10 h-10 text-emerald-700" />
    },
    {
      title: 'Aromatherapy Sessions',
      description: 'Custom essential oil blends and therapeutic massage techniques for mind-body balance.',
      icon: <Heart className="w-10 h-10 text-emerald-700" />
    },
    {
      title: 'Workshops & Education',
      description: 'Hands-on learning for DIY remedies, safety, and sustainable herbal practices.',
      icon: <Users className="w-10 h-10 text-emerald-700" />
    },
    {
      title: 'Community Support',
      description: 'Access to our local grower network and traditional healing knowledge hub.',
      icon: <Shield className="w-10 h-10 text-emerald-700" />
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-900 dark:text-emerald-50 mb-4">Our Services</h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Holistic healing and traditional wisdom for the modern soul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-stone-800 p-8 rounded-2xl shadow-sm border border-stone-100 dark:border-stone-700 hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">{service.title}</h3>
              <p className="text-stone-600 dark:text-stone-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
