import { Shield, Phone, Image } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <nav className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1"></div>
          <div className="flex items-center justify-center flex-1">
            <img src={`${import.meta.env.BASE_URL}image.png`} alt="Alug Mack" className="h-24 md:h-32 w-auto" />
          </div>
          <div className="flex-1 flex justify-end">
            <a
              href="#contato"
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Solicitar Orçamento</span>
              <span className="md:hidden">Orçamento</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl">
          <div className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 font-semibold text-sm">Segurança e Excelência em Eventos</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tendas e Grades
            <span className="block text-orange-400">para Todos os Eventos</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl">
            Locação completa de tendas e grades de proteção para shows, eventos esportivos,
            festivais, casamentos e manifestações. Segurança e conforto profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicos"
              className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Nossos Serviços</span>
            </a>
            <a
              href="#contato"
              className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Entrar em Contato</span>
            </a>
            <a
              href="#galeria"
              className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Image className="w-5 h-5" />
              <span>Produtos</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
