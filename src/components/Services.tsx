import { Music, Trophy, Users, Building, Megaphone, Calendar } from 'lucide-react';

const services = [
  {
    icon: Music,
    title: 'Tendas para Shows',
    description: 'Tendas de alta qualidade para shows e festivais, oferecendo proteção contra intempéries e conforto aos visitantes.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Trophy,
    title: 'Proteção de Eventos Esportivos',
    description: 'Grades e tendas para jogos, maratonas e competições, garantindo segurança e organização.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Controle de Manifestações',
    description: 'Proteção profissional com grades resistentes para eventos públicos e controlando fluxo de pessoas.',
    color: 'from-orange-600 to-orange-400'
  },
  {
    icon: Building,
    title: 'Eventos Corporativos',
    description: 'Tendas e estruturas elegantes para feiras, congressos e eventos empresariais de qualquer porte.',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Megaphone,
    title: 'Festivais e Carnavais',
    description: 'Locação completa de tendas e grades para festivais culturais, carnavais e festas populares.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Calendar,
    title: 'Casamentos e Eventos Especiais',
    description: 'Tendas e estruturas para casamentos, formaturas e celebrações com instalação profissional.',
    color: 'from-pink-500 to-orange-500'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Locação profissional de tendas e grades de proteção para eventos de todos os tipos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
