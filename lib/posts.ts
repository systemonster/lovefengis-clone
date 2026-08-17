export interface Post {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "ai-seo-nedir",
    tag: "AI-SEO",
    title: "AI-SEO nedir? ChatGPT ve Gemini'de görünür olmanın yolları",
    desc: "Google'ın ötesinde AI arama motorlarında sıralamak için yapılması gerekenler.",
    body: [
      "Kullanıcılar artık sadece Google'a değil, ChatGPT'ye, Gemini'ye ve Perplexity'ye de soru soruyor. Bu araçlar cevabı senin sitenden alıyorsa, trafiği de sen alırsın — almıyorsa, rakibin alır.",
      "AI-SEO'nun klasik SEO'dan farkı: sıralama değil alıntılanma hedefidir. Yapay zeka modelleri; net, yapılandırılmış, kaynak gösterilebilir içerikleri alıntılamayı tercih eder.",
      "Pratikte yapman gerekenler: her sayfada net bir soru-cevap yapısı kur, sayıları ve verileri tablo/liste halinde sun, llms.txt dosyası ekle, schema.org işaretlemesini eksiksiz yap.",
      "lovefengis'te SEO retainer'ımızın bir parçası olarak aylık AI-görünürlük raporu da veriyoruz — markanın ChatGPT'de nasıl anıldığını takip ediyoruz.",
    ],
  },
  {
    slug: "chatbot-kurulum-rehberi",
    tag: "Chatbot",
    title: "İşletmene 1 günde chatbot kurulumu rehberi",
    desc: "WhatsApp ve web sitesi için adım adım chatbot entegrasyonu.",
    body: [
      "Küçük işletmelerin en büyük kaybı: mesai dışı gelen mesajlara geç dönmek. Basit bir chatbot bunun büyük kısmını çözer.",
      "1. Adım: Sık sorulan 10-15 soruyu ve cevabını listele. 2. Adım: WhatsApp Business API veya web widget'ı seç. 3. Adım: Chatbot'u bu sorularla eğit. 4. Adım: İnsan devralma (handoff) kuralını netleştir.",
      "Suite'in otomasyon modülü, chatbot'tan gelen randevu taleplerini doğrudan takvime ve CRM'e düşürür — ayrı bir entegrasyon yapmana gerek kalmaz.",
    ],
  },
  {
    slug: "zapier-yerine-suite",
    tag: "SaaS",
    title: "Zapier yerine Suite: KVKK uyumlu otomasyon nasıl kurulur",
    desc: "Yabancı araçlardan Türkiye sunucularına geçiş rehberi.",
    body: [
      "Zapier, HubSpot, Mailchimp, Calendly — hepsi harika araçlar ama veri Türkiye dışında saklanıyor ve döviz kuruyla faturalandırılıyor.",
      "Suite bu dört aracın yaptığı işi tek pakette, Türkiye sunucularında, KVKK uyumlu ve sabit TL fiyatla yapar: CRM + otomasyon + randevu + fatura.",
      "Geçiş genelde 1 hafta sürer: mevcut verini içe aktarırız, otomasyon akışlarını yeniden kurarız, ekibini eğitiriz.",
    ],
  },
  {
    slug: "shopify-vs-woocommerce",
    tag: "E-ticaret",
    title: "Shopify mi WooCommerce mi? 2026 karşılaştırması",
    desc: "Küçük işletmeler için hangi platform daha uygun.",
    body: [
      "Shopify: hızlı kurulum, aylık sabit ücret, düşük bakım. Hızlı başlamak isteyen ve teknik ekibi olmayan markalar için ideal.",
      "WooCommerce: WordPress üzerinde çalışır, tam kontrol sağlar, barındırma maliyeti değişken ama esneklik yüksektir. İçerik/blog ağırlıklı markalar için avantajlı.",
      "Ajans paketimizde ikisini de kuruyoruz — karar senin iş modeline göre 15 dakikalık bir görüşmede netleşiyor.",
    ],
  },
  {
    slug: "ai-gorsel-marka-kimligi",
    tag: "Marka",
    title: "AI görsel üretimiyle marka kimliği nasıl hızlandırılır",
    desc: "Logo, sosyal medya ve reklam görselinde AI kullanımı.",
    body: [
      "AI görsel araçları, marka kimliği sürecinin ilk taslak aşamasını günlerden saatlere indiriyor — ama son karar hâlâ insan gözünde.",
      "Bizim sürecimiz: marka kılavuzunu önce netleştiriyoruz (renk, ton, tipografi), sonra AI ile onlarca varyasyon üretip elemeye giriyoruz, son rötuşu tasarımcı yapıyor.",
      "Bu yöntemle marka kimliği + AI içerik paketini 2 haftada teslim ediyoruz.",
    ],
  },
  {
    slug: "izmir-yerel-seo",
    tag: "SEO",
    title: "Yerel SEO: İzmir'de arama sonuçlarında öne çıkmak",
    desc: "Google Business Profile ve yerel içerik stratejisi.",
    body: [
      "Yerel aramalarda öne çıkmanın üç ayağı var: Google Business Profile optimizasyonu, tutarlı NAP (isim-adres-telefon) bilgisi, ve semt/ilçe bazlı içerik.",
      "İzmir gibi çok merkezli bir şehirde 'İzmir'de X hizmeti' yerine 'Bornova'da X hizmeti', 'Karşıyaka'da X hizmeti' gibi spesifik sayfalar çok daha iyi performans veriyor.",
      "SEO retainer'ımızda yerel sayfa üretimi ve GBP yönetimi standart olarak dahildir.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
