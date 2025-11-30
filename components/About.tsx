import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-dark mb-4">Mortanas Hotel'e Hoş Geldiniz</h2>
            <p className="text-gray-600 mb-4">
              Şehrin kalbinde yer alan Mortanas Hotel, lüks konaklama ve eşsiz misafirperverliğin bir simgesidir. Misafirlerimize sadece bir konaklama değil, aynı zamanda ömür boyu hatırlanacak anılarla dolu bir deneyim sunmayı taahhüt ediyoruz.
            </p>
            <p className="text-gray-600">
              Modern tasarım, birinci sınıf olanaklar ve detaylara gösterilen özen ile her konaklamanın olağanüstü olmasını sağlıyoruz. İster iş ister tatil için burada olun, sığınağınız sizi bekliyor.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/about/800/600" alt="Hotel exterior" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="md:order-2">
                 <h3 className="text-3xl font-playfair font-bold text-brand-dark mb-4">Felsefemiz</h3>
                 <p className="text-gray-600 mb-4">
                    Misafirperverliği bir sanat olarak görüyoruz. Felsefemiz, her misafirimize kişiye özel ve samimi bir hizmet sunarak kendilerini evlerinde hissetmelerini sağlamaktır. Sürdürülebilirlik ve yerel topluluğa destek olmak, değerlerimizin merkezinde yer alır.
                 </p>
                 <p className="text-gray-600">
                    Her detayın özenle düşünüldüğü, zarafet ve konforun birleştiği bir ortam yaratarak lüksü yeniden tanımlıyoruz.
                 </p>
            </div>
            <div className="md:order-1">
                <img src="https://picsum.photos/seed/philosophy/800/600" alt="Hotel detail" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;