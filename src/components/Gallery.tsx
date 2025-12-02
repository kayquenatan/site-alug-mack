import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: `${import.meta.env.BASE_URL}grades/grades01.jpeg`,
    title: 'Armazenamento de Grades',
    description: 'Estrutura profissional com centenas de grades em estoque'
  },
  {
    id: 2,
    url: `${import.meta.env.BASE_URL}grades/grades03.jpeg`,
    title: 'Controle de Fluxo em Estabelecimento',
    description: 'Grades estruturando área de acesso em estacionamento'
  },
  {
    id: 3,
    url: `${import.meta.env.BASE_URL}grades/grades04.jpeg`,
    title: 'Proteção em Espaço Público',
    description: 'Grades organizando fluxo de pessoas em eventos'
  },
  {
    id: 4,
    url: `${import.meta.env.BASE_URL}grades/grades05.jpeg`,
    title: 'Barreira de Proteção',
    description: 'Grades metálicas formando perímetro de segurança'
  },
  {
    id: 5,
    url: `${import.meta.env.BASE_URL}grades/grades02.jpeg`,
    title: 'Controle em Evento Interno',
    description: 'Grades controlando fluxo em ambiente coberto'
  },
  {
    id: 6,
    url: `${import.meta.env.BASE_URL}grades/unifila01.jpeg`,
    title: 'Organização de Filas em Eventos',
    description: 'Unifilas profissionais para controle de fluxo em corredores'
  },
  {
    id: 7,
    url: `${import.meta.env.BASE_URL}grades/unifila02.jpeg`,
    title: 'Gestão de Eventos Noturnos',
    description: 'Centenas de unifilas organizando grandes eventos externos'
  },
  {
    id: 8,
    url: `${import.meta.env.BASE_URL}grades/unifila03.jpeg`,
    title: 'Controle de Acesso',
    description: 'Unifilas estruturando áreas de circulação e segurança'
  },
  {
    id: 9,
    url: `${import.meta.env.BASE_URL}grades/unifila04.jpeg`,
    title: 'Equipamentos de Controle de Fluxo',
    description: 'Unifilas e grades prontas para organização de eventos'
  },
  {
    id: 10,
    url: `${import.meta.env.BASE_URL}grades/lixo01.jpeg`,
    title: 'Contêineres e Estruturas Metálicas',
    description: 'Equipamentos resistentes para organização e armazenamento'
  },
  {
    id: 11,
    url: `${import.meta.env.BASE_URL}grades/lixo02.jpeg`,
    title: 'Estruturas para Eventos',
    description: 'Grades e estruturas metálicas para diversos tipos de eventos'
  },
  {
    id: 12,
    url: `${import.meta.env.BASE_URL}grades/outros01.jpeg`,
    title: 'Outros',
    description: 'Banheiros químicos para eventos de todos os tamanhos'
  },
  {
    id: 13,
    url: `${import.meta.env.BASE_URL}grades/tenda.jpeg`,
    title: 'Tendas para Eventos ao Ar Livre',
    description: 'Tendas elegantes dispostas em área externa para eventos'
  },
  {
    id: 14,
    url: `${import.meta.env.BASE_URL}grades/tenda (2).jpeg`,
    title: 'Tendas em Linha',
    description: 'Múltiplas tendas organizadas para grandes eventos corporativos'
  },
  {
    id: 15,
    url: `${import.meta.env.BASE_URL}grades/tenda (3).jpeg`,
    title: 'Tenda Iluminada Noturna',
    description: 'Tenda profissional com iluminação para eventos noturnos'
  },
  {
    id: 16,
    url: `${import.meta.env.BASE_URL}grades/tenda (4).jpeg`,
    title: 'Tenda Empresarial',
    description: 'Tenda montada em área corporativa para eventos profissionais'
  },
  {
    id: 17,
    url: `${import.meta.env.BASE_URL}grades/tenda (5).jpeg`,
    title: 'Tenda em Área Verde',
    description: 'Tenda elegante instalada em campo aberto para eventos ao ar livre'
  },
  {
    id: 18,
    url: `${import.meta.env.BASE_URL}grades/vip.jpeg`,
    title: 'Banheiros VIP para Eventos',
    description: 'Linha completa de banheiros VIP de alta qualidade para eventos'
  },
  {
    id: 19,
    url: `${import.meta.env.BASE_URL}grades/vip (2).jpeg`,
    title: 'Banheiro VIP Acessível',
    description: 'Banheiro VIP com rampa de acessibilidade para eventos inclusivos'
  },
  {
    id: 20,
    url: `${import.meta.env.BASE_URL}grades/vip (3).jpeg`,
    title: 'Banheiro VIP Premium',
    description: 'Unidade VIP individual de alto padrão para eventos sofisticados'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Projetos Realizados
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Confira alguns dos eventos onde a Alug Mack entregou qualidade, segurança e profissionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-slate-100"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg text-slate-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
