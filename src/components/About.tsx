import { CheckCircle, Users, Building, Award } from 'lucide-react';

const stats = [
  { number: '500+', label: 'Eventos Realizados' },
  { number: '10+', label: 'Anos de Experiência' },
  { number: '100%', label: 'Satisfação dos Clientes' },
  { number: '24/7', label: 'Suporte Disponível' }
];

const benefits = [
  'Tendas e grades certificadas e aprovadas pelos órgãos competentes',
  'Equipe técnica altamente qualificada e treinada',
  'Seguro completo para todos os equipamentos',
  'Flexibilidade para eventos de qualquer porte',
  'Preços competitivos sem comprometer a qualidade',
  'Consultoria gratuita para planejamento e montagem'
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Qualidade e Profissionalismo em Eventos
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A Alug Mack é especialista em locação de tendas e grades de proteção para eventos de todos os tamanhos.
              Com equipamentos de alta qualidade e uma equipe profissional, oferecemos soluções completas
              para que seu evento seja seguro, organizado e memorável.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Trabalhamos com tendas modernas, grades resistentes e estruturas seguras, sempre priorizando
              a qualidade e a segurança. Nossa missão é garantir que seu evento aconteça com perfeição,
              oferecendo conforto aos seus convidados e tranquilidade para você.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-orange-50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-sm font-semibold text-slate-700">Equipe Dedicada</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <Building className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-sm font-semibold text-slate-700">Estrutura Própria</div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200">
                <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-sm font-semibold text-slate-700">Certificações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
