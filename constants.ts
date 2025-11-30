import type { Room, Testimonial, GalleryImage, Amenity, DiningVenue, LocalAttraction, SpecialOffer, Experience, SocialProof } from './types';
import { WifiIcon, SparklesIcon, SwimmerIcon, RestaurantIcon, CarIcon, DumbbellIcon, BriefcaseIcon, BellIcon, AirplaneIcon, ShirtIcon, BellAlertIcon, FireIcon } from './components/icons/Icons';

export const ROOMS: Room[] = [
  {
    name: 'Deluxe Queen Oda',
    description: 'Şehir manzaralı, konforlu ve şık bir sığınak. İş veya tatil amaçlı seyahat edenler için mükemmel.',
    price: 150,
    imageUrl: 'https://picsum.photos/seed/deluxe/800/600',
    size: 32,
    capacity: 2,
    bedType: 'Queen Yatak',
    amenities: ['Yüksek Hızlı Wi-Fi', '4K Akıllı TV', 'Yağmur Duşu', 'Mini Bar', 'Çalışma Masası', 'Nespresso Makinesi'],
    fomoTag: 'Hızla Tükeniyor!',
    tourUrl: 'https://panoraven.com/en/embed/b7529329-875c-4a37-9759-93e89551a3a9'
  },
  {
    name: 'Executive King Süit',
    description: 'Ayrı bir oturma alanına, lüks olanaklara ve panoramik manzaralara sahip geniş bir süit.',
    price: 250,
    imageUrl: 'https://picsum.photos/seed/executive/800/600',
    size: 55,
    capacity: 3,
    bedType: 'King Yatak',
    amenities: ['Ayrı Oturma Alanı', 'Panoramik Manzara', 'Yüksek Hızlı Wi-Fi', '55" 4K TV', 'Çift Lavabo', 'Lüks Banyo Malzemeleri'],
    deal: 'Ücretsiz Kahvaltı Dahil',
    tourUrl: 'https://panoraven.com/en/embed/a89b068a-7871-49b8-89c0-8d48a5e5e6e3'
  },
  {
    name: 'Aile Odası',
    description: 'Ailenizle konforlu bir konaklama için bağlantılı odalar ve geniş alan sunar.',
    price: 220,
    imageUrl: 'https://picsum.photos/seed/family/800/600',
    size: 60,
    capacity: 4,
    bedType: '1 King + 2 Tek Yatak',
    amenities: ['Bağlantılı Odalar', 'Oyun Konsolu (İstek Üzerine)', 'Yüksek Hızlı Wi-Fi', 'İki Banyo', 'Çocuklara Özel İkramlar', 'Mini Buzdolabı'],
    fomoTag: 'Son 2 Oda!'
  },
];

export const AMENITIES: Amenity[] = [
  { 
    name: 'Spa ve Sağlık Merkezi', 
    icon: SparklesIcon, 
    description: 'Yenilenmeniz için tasarlanmış lüks bakım ve masaj hizmetleri.',
    imageUrl: 'https://picsum.photos/seed/spa/800/600',
    details: 'Bedeninizi ve ruhunuzu şımartmak için tasarlanmış sakin bir cennet. Uzman terapistlerimiz, geleneksel ve modern teknikleri birleştirerek size özel masajlar, yüz bakımları ve vücut terapileri sunar. Sauna, buhar odası ve dinlenme alanlarımızla tam bir yenilenme deneyimi yaşayın.',
    operatingHours: 'Her gün 09:00 - 21:00',
    isFeatured: true,
    tourUrl: 'https://panoraven.com/en/embed/a6064f7b-91a1-4228-a5a5-48b47cf36675'
  },
  { 
    name: 'Gurme Restoran', 
    icon: RestaurantIcon, 
    description: 'Usta şeflerimizin hazırladığı uluslararası ve yerel lezzetler.',
    imageUrl: 'https://picsum.photos/seed/restaurant/800/600',
    details: 'Ödüllü şefimizin yönetimindeki mutfağımız, en taze yerel malzemelerle hazırlanan yenilikçi menüler sunar. Şık ve zarif bir atmosferde, dünya mutfaklarından seçkin lezzetlerin ve özenle seçilmiş şarap kavımızın tadını çıkarın. Özel günleriniz için romantik bir akşam yemeği veya iş toplantılarınız için ideal bir mekan.',
    operatingHours: 'Akşam Yemeği: 18:00 - 23:00',
    isFeatured: true,
    tourUrl: 'https://panoraven.com/en/embed/5d8b85b4-f6b3-4603-888e-670498b3f172'
  },
  { 
    name: 'Kapalı Yüzme Havuzu', 
    icon: SwimmerIcon, 
    description: 'Yıl boyunca keyfini çıkarabileceğiniz, ısıtmalı ve sakin bir havuz.',
    imageUrl: 'https://picsum.photos/seed/pool/800/600',
    details: 'Gün ışığı alan, tavanı camla kaplı ısıtmalı kapalı havuzumuzda dört mevsim yüzmenin keyfini çıkarın. İster güne enerjik bir başlangıç yapmak, ister günün yorgunluğunu atmak için ideal bir ortam. Havuz kenarındaki konforlu şezlonglarda dinlenerek anın tadını çıkarabilirsiniz.',
    operatingHours: 'Her gün 07:00 - 22:00',
  },
  { 
    name: 'Fitness Merkezi', 
    icon: DumbbellIcon, 
    description: 'En son teknoloji ekipmanlarla donatılmış spor salonumuz.',
    imageUrl: 'https://picsum.photos/seed/gym/800/600',
    details: 'Tatilinizde veya iş seyahatinizde egzersiz rutininizden kopmayın. Fitness merkezimiz, kardiyo aletleri, serbest ağırlıklar ve fonksiyonel antrenman ekipmanları dahil olmak üzere en modern spor aletleriyle donatılmıştır. Geniş ve ferah alanımızda motivasyonunuzu yüksek tutun.',
    operatingHours: '24 Saat Açık',
  },
  { 
    name: 'Yüksek Hızlı Wi-Fi', 
    icon: WifiIcon, 
    description: 'Tüm alanlarda kesintisiz ve yüksek hızda internet erişimi.',
    imageUrl: 'https://picsum.photos/seed/wifi/800/600',
    details: 'İster iş için ister sevdiklerinizle bağlantıda kalmak için, otelimizin her köşesinde ücretsiz ve ultra hızlı fiber internetin keyfini çıkarın. Kesintisiz bağlantı sayesinde video konferanslarınızı yapabilir veya en sevdiğiniz dizileri sorunsuzca izleyebilirsiniz.'
  },
  { 
    name: 'Ücretsiz Vale Otopark', 
    icon: CarIcon, 
    description: 'Konaklamanız boyunca güvenli ve ücretsiz vale hizmeti.',
    imageUrl: 'https://picsum.photos/seed/parking/800/600',
    details: 'Aracınız için park yeri arama zahmetine son. Otelimize vardığınız andan itibaren profesyonel vale ekibimiz aracınızı güvenli otoparkımıza teslim alır ve ihtiyacınız olduğunda hazır eder. Konforunuz ve güvenliğiniz bizim için önceliklidir.'
  },
  {
    name: 'İş Merkezi',
    icon: BriefcaseIcon,
    description: 'İş seyahatleriniz için tam donanımlı çalışma alanları ve toplantı odaları.',
    imageUrl: 'https://picsum.photos/seed/business/800/600',
    details: 'Modern teknolojiyle donatılmış iş merkezimiz, toplantılarınız, sunumlarınız ve sessiz çalışma ihtiyaçlarınız için idealdir. Sekreterlik hizmetleri ve yüksek hızlı internet erişimi sunuyoruz.',
    operatingHours: '24 Saat Açık',
  },
  {
    name: 'Konsiyerj Hizmetleri',
    icon: BellIcon,
    description: 'Şehir turları, restoran rezervasyonları ve daha fazlası için kişisel yardımcınız.',
    imageUrl: 'https://picsum.photos/seed/concierge/800/600',
    details: 'Deneyimli konsiyerj ekibimiz, konaklamanızı en iyi şekilde değerlendirmeniz için size yardımcı olmaktan mutluluk duyar. Ulaşım düzenlemeleri, etkinlik biletleri ve özel talepleriniz için bize danışabilirsiniz.',
    operatingHours: '24 Saat Açık',
  },
  {
    name: 'Havaalanı Transferi',
    icon: AirplaneIcon,
    description: 'Konforlu araçlarımızla havaalanına ve havaalanından stressiz ulaşım sağlayın.',
    imageUrl: 'https://picsum.photos/seed/transfer/800/600',
    details: 'Uçuşunuzdan önce veya sonra yorulmanıza gerek yok. Lüks ve konforlu araç filomuz ve profesyonel şoförlerimizle size özel havaalanı transfer hizmeti sunuyoruz. Uçuş bilgilerinizi bizimle paylaşın, gerisini biz halledelim.',
    operatingHours: '7/24 Talep Üzerine',
  },
  {
    name: 'Kuru Temizleme ve Çamaşırhane',
    icon: ShirtIcon,
    description: 'Kıyafetleriniz için hızlı ve profesyonel temizlik hizmetleri.',
    imageUrl: 'https://picsum.photos/seed/laundry/800/600',
    details: 'Seyahatiniz sırasında kıyafetlerinizin temizliği konusunda endişelenmeyin. Aynı gün teslimat seçeneğiyle sunduğumuz profesyonel kuru temizleme ve çamaşırhane hizmetlerimizle her zaman şık ve bakımlı görünün.',
    operatingHours: 'Her gün 08:00 - 20:00',
  },
];


export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'Kesinlikle harika bir deneyim! Personel inanılmaz derecede misafirperverdi ve odalar tertemiz ve lükstü. Şehirdeki en iyi otel.',
        author: 'Ayşe Yılmaz',
        location: 'İstanbul, Türkiye',
        rating: 5,
    },
    {
        quote: 'Mortanas Hotel\'de konaklamamız beklentilerimizi aştı. Restorandaki yemekler enfesti ve spa rahatlamak için mükemmel bir yerdi. Geri döneceğiz!',
        author: 'John Smith',
        location: 'Londra, İngiltere',
        rating: 5,
    },
    {
        quote: 'Konumu mükemmel, olanaklar birinci sınıf. Özellikle yapay zeka seyahat planlayıcısı, şehri keşfetmemize çok yardımcı oldu. Çok yenilikçi bir dokunuş.',
        author: 'Fatma Kaya',
        location: 'Ankara, Türkiye',
        rating: 4,
    },
    {
        quote: 'İş seyahatim için konakladım ve çok memnun kaldım. İş merkezi olanakları harikaydı ve odamdaki çalışma alanı çok konforluydu.',
        author: 'Mehmet Öztürk',
        location: 'İzmir, Türkiye',
        rating: 5,
    },
    {
        quote: 'Ailemle harika bir hafta sonu geçirdik. Kapalı havuz çocuklar için harikaydı ve personel her konuda çok yardımcı oldu. Kesinlikle tavsiye ederim.',
        author: 'Anna Müller',
        location: 'Berlin, Almanya',
        rating: 5,
    },
    {
        quote: 'Otelinizin konumu, mimarisi ve sunduğu hizmet kalitesi gerçekten birinci sınıf. Kendimi çok özel hissettim. Teşekkürler Mortanas Hotel!',
        author: 'David Chen',
        location: 'Singapur',
        rating: 4,
    }
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { src: 'https://picsum.photos/seed/gallery1/800/600', alt: 'Lüks otel lobisi' },
    { src: 'https://picsum.photos/seed/gallery2/800/600', alt: 'Çatı katı barından şehir manzarası' },
    { src: 'https://picsum.photos/seed/gallery3/800/600', alt: 'Sakin spa alanı' },
    { src: 'https://picsum.photos/seed/gallery4/800/600', alt: 'Kapalı yüzme havuzu' },
    { src: 'https://picsum.photos/seed/gallery5/800/600', alt: 'Gurme restoranda servis edilen yemek' },
    { src: 'https://picsum.photos/seed/gallery6/800/600', alt: 'Gün batımında otelin dış cephesi' },
    { src: 'https://picsum.photos/seed/gallery7/800/600', alt: 'Executive King Süit içi' },
    { src: 'https://picsum.photos/seed/gallery8/800/600', alt: 'Balo salonu' },
];

export const DINING_VENUES: DiningVenue[] = [
    {
        name: 'Aria Roof Restaurant',
        description: 'Panoramik şehir manzarası eşliğinde modern Akdeniz mutfağının en seçkin örneklerini sunan imza restoranımız. Mevsimlik malzemelerle hazırlanan yenilikçi menümüz ve zengin şarap kavımızla unutulmaz bir gurme deneyimi yaşayın.',
        imageUrl: 'https://picsum.photos/seed/aria/800/600',
        cuisine: 'Modern Akdeniz',
        operatingHours: 'Her gün 18:00 - 23:00',
        dressCode: 'Şık ve Günlük',
    },
    {
        name: 'The Onyx Lounge',
        description: 'Günün yorgunluğunu atmak veya keyifli bir başlangıç yapmak için ideal bir mekan. Usta barmenlerimizin hazırladığı özel kokteyller, premium içkiler ve hafif atıştırmalıklar eşliğinde rahat ve sofistike bir atmosferin tadını çıkarın.',
        imageUrl: 'https://picsum.photos/seed/onyx/800/600',
        cuisine: 'Bar & Lounge, Atıştırmalıklar',
        operatingHours: 'Her gün 12:00 - 01:00',
        dressCode: 'Rahat',
    },
];

export const LOCAL_ATTRACTIONS: LocalAttraction[] = [
    {
        name: 'Anıtkabir',
        category: 'Tarihi Yerler',
        description: 'Türkiye Cumhuriyeti\'nin kurucusu Mustafa Kemal Atatürk\'ün anıt mezarının bulunduğu, görkemli ve manevi bir kompleks.',
        imageUrl: 'https://picsum.photos/seed/anitkabir/800/600',
        distance: '~ 5 km'
    },
    {
        name: 'Anadolu Medeniyetleri Müzesi',
        category: 'Kültürel Mekanlar',
        description: 'Paleolitik Çağ\'dan itibaren Anadolu arkeolojisine ait eşsiz eserlerin sergilendiği, ödüllü bir müze.',
        imageUrl: 'https://picsum.photos/seed/museum/800/600',
        distance: '~ 7 km'
    },
    {
        name: 'Ankara Kalesi',
        category: 'Tarihi Yerler',
        description: 'Şehrin panoramik manzarasını sunan, tarihi dokusu ve dar sokaklarıyla ziyaretçilerini zamanda yolculuğa çıkaran bir kale.',
        imageUrl: 'https://picsum.photos/seed/castle/800/600',
        distance: '~ 7 km'
    },
    {
        name: 'Atakule',
        category: 'Alışveriş & Eğlence',
        description: 'Ankara\'nın simgelerinden biri olan bu kule, döner restoranı ve alışveriş merkeziyle modern bir yaşam alanı sunar.',
        imageUrl: 'https://picsum.photos/seed/atakule/800/600',
        distance: '~ 6 km'
    },
     {
        name: 'Kızılay Meydanı',
        category: 'Alışveriş & Eğlence',
        description: 'Ankara\'nın kalbi sayılan, her zaman canlı ve hareketli, mağazalar ve kafelerle dolu merkezi bir meydan.',
        imageUrl: 'https://picsum.photos/seed/kizilay/800/600',
        distance: '~ 4 km'
    },
    {
        name: 'Tunalı Hilmi Caddesi',
        category: 'Alışveriş & Eğlence',
        description: 'Modern butikleri, şık kafeleri ve canlı atmosferi ile bilinen, şehrin en popüler caddelerinden biri.',
        imageUrl: 'https://picsum.photos/seed/tunali/800/600',
        distance: '~ 5 km'
    },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
    {
        title: 'Romantik Kaçamak',
        description: 'Partnerinizle unutulmaz bir kaçamak yapın. Süit odada konaklama, odaya özel şampanya ve çikolata ikramı, ve Aria Roof Restaurant\'ta iki kişilik akşam yemeği bu pakete dahil.',
        imageUrl: 'https://picsum.photos/seed/romance/800/600',
        discount: '%15 İndirim',
        validity: 'Yıl boyunca geçerlidir',
    },
    {
        title: 'Spa Yenilenme Paketi',
        description: 'Stresten arının ve kendinizi şımartın. Bu paket, deluxe odada iki gece konaklama, günlük kahvaltı ve seçtiğiniz bir adet 60 dakikalık masaj hizmetini içerir.',
        imageUrl: 'https://picsum.photos/seed/spa-package/800/600',
        discount: 'Sadece $350',
        validity: 'Hafta içi geçerlidir',
    },
    {
        title: 'İş Seyahati Avantajı',
        description: 'İş seyahatlerinizi konforla birleştirin. Executive süitte konaklama, ücretsiz ütü hizmeti, ve iş merkezimize sınırsız erişim imkanı.',
        imageUrl: 'https://picsum.photos/seed/business-package/800/600',
        discount: 'Esnek Fiyatlar',
        validity: 'Kurumsal anlaşmalar için geçerlidir',
    },
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Şefin Masası: Özel Aşçılık Dersi',
    category: 'Gastronomi',
    description: 'Otelimizin baş şefiyle birlikte, Türk ve Akdeniz mutfağının sırlarını keşfedin.',
    details: 'Bu 3 saatlik interaktif derste, yerel malzemeleri kullanarak gurme yemekler hazırlamayı öğrenecek ve dersin sonunda kendi hazırladığınız menünün tadını çıkaracaksınız. Şarap eşleşmeleri dahildir.',
    imageUrl: 'https://picsum.photos/seed/cooking-class/800/600',
    duration: '3 Saat',
    price: 'Kişi Başı 250$',
    highlights: [
        'Baş şefimizle birebir çalışma imkanı',
        'Mevsimlik ve yerel malzemeler kullanımı',
        'Profesyonel mutfak ortamı',
        'Hazırlanan yemekler ve şarap eşleşmesi'
    ],
  },
  {
    title: 'Ankara\'nın Saklı Tarihi: Özel Rehberli Tur',
    category: 'Kültür & Sanat',
    description: 'Profesyonel bir tarihçi rehber eşliğinde, Ankara\'nın turistik rotaların dışındaki gizli kalmış hazinelerini keşfedin.',
    details: 'Bu tam günlük tur, sizi antik Roma kalıntılarından, gizli avlulu hanlara ve zanaatkar atölyelerine götürecek. Tur, özel araç ve öğle yemeğini içermektedir.',
    imageUrl: 'https://picsum.photos/seed/ankara-tour/800/600',
    duration: '6-7 Saat',
    price: 'Grup Başı 400$',
    highlights: [
        'Lisanslı ve uzman tarihçi rehber',
        'Klimalı özel lüks araç',
        'Geleneksel bir restoranda öğle yemeği',
        'Tüm müze ve ören yeri giriş ücretleri'
    ],
  },
  {
    title: 'Balonla Kapadokya Günübirlik Kaçamağı',
    // FIX: Corrected a typo in the category to match the defined type.
    category: 'Macera & keşif',
    description: 'Ankara\'dan özel transferle Kapadokya\'ya günübirlik bir macera yaşayın ve gün doğumunda sıcak hava balonuyla uçun.',
    details: 'Sabah erken saatlerde otelden alınarak Kapadokya\'ya transfer edileceksiniz. Balon turunun ardından bölgenin eşsiz peri bacalarını keşfedip, yerel bir restoranda kahvaltı yapacaksınız. Akşam otele dönüş.',
    imageUrl: 'https://picsum.photos/seed/cappadocia/800/600',
    duration: 'Tam Gün',
    price: 'Kişi Başı 550$',
    isFeatured: true,
    highlights: [
        'Otelden özel lüks araçla gidiş-dönüş transfer',
        'Gün doğumunda 1 saatlik sıcak hava balonu turu',
        'Uçuş sonrası şampanyalı kutlama ve sertifika',
        'Serpme köy kahvaltısı'
    ],
  },
  {
    title: 'Özel Yoga ve Meditasyon Seansı',
    category: 'Rahatlama & Sağlık',
    description: 'Sertifikalı yoga eğitmenimizle otelimizin sakin bahçesinde veya özel stüdyomuzda zihninizi ve bedeninizi yenileyin.',
    details: 'Bu 90 dakikalık özel seans, seviyenize ve ihtiyaçlarınıza göre kişiselleştirilir. Stresten arınmak, esnekliğinizi artırmak veya sadece kendinize zaman ayırmak için mükemmel bir fırsat. Seans sonrası bitki çayı ikramımızdır.',
    imageUrl: 'https://picsum.photos/seed/yoga-session/800/600',
    duration: '90 Dakika',
    price: 'Kişi Başı 150$',
    highlights: [
        'Sertifikalı ve deneyimli yoga eğitmeni',
        'Kişiye özel seans programı',
        'Tüm ekipmanlar (mat, blok vb.) temin edilir',
        'Seans sonrası detoks bitki çayı ikramı'
    ],
  },
];

export const SOCIAL_PROOFS: SocialProof[] = [
  {
    icon: FireIcon,
    person: 'Ankara\'dan bir misafir',
    action: 'Deluxe Queen Oda için rezervasyon yaptı',
    time: 'az önce',
  },
  {
    icon: BellAlertIcon,
    person: 'İstanbul\'dan bir çift',
    action: 'Executive King Süit\'i inceliyor',
    time: '1 dakika önce',
  },
   {
    icon: FireIcon,
    person: 'İzmir\'den bir aile',
    action: 'Aile Odası için rezervasyon yaptı',
    time: '3 dakika önce',
  },
   {
    icon: BellAlertIcon,
    person: 'Londra\'dan bir iş insanı',
    action: 'Spa ve Sağlık Merkezi\'ni inceliyor',
    time: '5 dakika önce',
  },
];