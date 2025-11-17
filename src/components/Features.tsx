import { Shield, Clock, Award, Wrench, Truck, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Material de Alta Qualidade',
    description: 'Grades fabricadas em aço de alta resistência, testadas e certificadas para suportar grandes cargas.'
  },
  {
    icon: Clock,
    title: 'Instalação Rápida',
    description: 'Equipe especializada garante montagem ágil e eficiente, respeitando todos os prazos estabelecidos.'
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Mais de 10 anos no mercado, atendendo os maiores eventos do país com excelência.'
  },
  {
    icon: Wrench,
    title: 'Manutenção Incluída',
    description: 'Acompanhamento durante todo o evento com equipe de suporte para qualquer necessidade.'
  },
  {
    icon: Truck,
    title: 'Logística Completa',
    description: 'Transporte, montagem e desmontagem inclusos no serviço, sem preocupações adicionais.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte 24/7',
    description: 'Atendimento disponível a qualquer momento para garantir o sucesso do seu evento.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Nos Escolher
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Compromisso com segurança, qualidade e excelência em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-emerald-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
