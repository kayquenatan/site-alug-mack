import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={`${import.meta.env.BASE_URL}image.png`} alt="Alug Mack" className="h-12 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Especialistas em locação de tendas e grades de proteção para eventos, oferecendo segurança e qualidade para seu evento.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Tendas para Eventos</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Grades de Proteção</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Locação Completa</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Assessoria de Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-orange-400 transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-orange-400 transition-colors">Galeria</a></li>
              <li><a href="#sobre" className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-orange-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Redes Sociais</h4>
            <p className="text-slate-400 mb-6">
              Acompanhe nossos projetos e novidades nas redes sociais
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Alug Mack. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
