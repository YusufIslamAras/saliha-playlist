// Sitedeki bütün yazılar burada. Bir cümleyi değiştirmek için sadece bu dosyayı düzenle.
// Her metnin dört dili var: uz (Özbekçe), tr (Türkçe), ky (Kırgızca), ru (Rusça).

export const LANGS = [
  { code: 'uz', label: "O‘zbekcha" },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ky', label: 'Кыргызча' },
  { code: 'ru', label: 'Русский' },
];

export const DEFAULT_LANG = 'uz';

// Sayaç bu tarihten itibaren sayar (ay 0'dan başlar: 8 = Eylül)
export const NIKAH_DATE = new Date(2026, 8, 22);

// Yolumuz: geçmiş ve gelecek günler. Yazıları aşağıda "<key>Label" ve "<key>Date" olarak durur.
export const MILESTONES = [
  { key: 'met', date: new Date(2026, 8, 21) },
  { key: 'nikah', date: NIKAH_DATE },
  { key: 'trip', date: new Date(2026, 9, 25) },
  { key: 'kg', date: new Date(2026, 9, 27) },
  { key: 'tr', date: new Date(2026, 10, 4) },
];

// Finaldeki büyük fotoğraf
export const FINALE_PHOTO = { src: '/photos/selfie.jpg', focus: '0% 50%' };

export const ui = {
  tr: {
    introKicker: 'Saliha,',
    introTitle: 'sana bir şey hazırladım',
    introSub: 'Sesini aç, sonra kalbe dokun.',
    open: 'Aç',
    by: "Saliha'ya özel · Yusuf",
    playlistTitle: 'Bizim Playlist',
    playlistSub: '{n} şarkı, {n} an',
    counterTitle: 'Nikâhımızdan beri',
    days: 'gün',
    hours: 'saat',
    minutes: 'dakika',
    seconds: 'saniye',
    metLabel: 'Görüştük',
    metDate: '21 Eylül 2026, Pazartesi',
    nikahLabel: 'Nikâhımız',
    nikahDate: '22 Eylül 2026, Salı',
    tripLabel: 'Sana geliyorum',
    tripDate: '25 Ekim 2026, Pazar',
    kgLabel: "Kırgızistan'da düğünümüz",
    kgDate: '27 Ekim 2026, Salı',
    trLabel: "Türkiye'de düğünümüz",
    trDate: '4 Kasım 2026, Çarşamba',
    timelineTitle: 'Yolumuz',
    countdown: '{time} kaldı',
    dShort: 'gün',
    hShort: 'saat',
    mShort: 'dk',
    letterBtn: 'Mektubu aç',
    finaleTitle: 'Seni seviyorum',
    back: 'Şarkılara dön',
    secret: 'Gizli mesajı buldun: Seni her gün yeniden seçerdim.',
    play: 'Oynat',
    pause: 'Duraklat',
    next: 'Sonraki şarkı',
    prev: 'Önceki şarkı',
    like: 'Kalp gönder',
    seek: 'Şarkıda ilerle',
  },
  uz: {
    introKicker: 'Saliha,',
    introTitle: 'senga bir narsa tayyorladim',
    introSub: 'Ovozni yoq, keyin yurakka bos.',
    open: 'Och',
    by: 'Saliha uchun · Yusuf',
    playlistTitle: 'Bizning pleylist',
    playlistSub: '{n} qo‘shiq, {n} lahza',
    counterTitle: 'Nikohimizdan beri',
    days: 'kun',
    hours: 'soat',
    minutes: 'daqiqa',
    seconds: 'soniya',
    metLabel: 'Ko‘rishdik',
    metDate: '2026-yil 21-sentabr, dushanba',
    nikahLabel: 'Nikohimiz',
    nikahDate: '2026-yil 22-sentabr, seshanba',
    tripLabel: 'Yoningga kelyapman',
    tripDate: '2026-yil 25-oktabr, yakshanba',
    kgLabel: 'Qirg‘izistondagi to‘yimiz',
    kgDate: '2026-yil 27-oktabr, seshanba',
    trLabel: 'Turkiyadagi to‘yimiz',
    trDate: '2026-yil 4-noyabr, chorshanba',
    timelineTitle: 'Bizning yo‘limiz',
    countdown: '{time} qoldi',
    dShort: 'kun',
    hShort: 'soat',
    mShort: 'daq.',
    letterBtn: 'Maktubni och',
    finaleTitle: 'Seni sevaman',
    back: 'Qo‘shiqlarga qaytish',
    secret: 'Yashirin xabarni topding: seni har kuni qaytadan tanlagan bo‘lardim.',
    play: 'Ijro etish',
    pause: 'To‘xtatish',
    next: 'Keyingi qo‘shiq',
    prev: 'Oldingi qo‘shiq',
    like: 'Yurak yuborish',
    seek: 'Qo‘shiqni surish',
  },
  ky: {
    introKicker: 'Салиха,',
    introTitle: 'сага бир нерсе даярдадым',
    introSub: 'Үндү ач, анан жүрөктү бас.',
    open: 'Ач',
    by: 'Салиха үчүн · Юсуф',
    playlistTitle: 'Биздин плейлист',
    playlistSub: '{n} ыр, {n} учур',
    counterTitle: 'Никебизден бери',
    days: 'күн',
    hours: 'саат',
    minutes: 'мүнөт',
    seconds: 'секунд',
    metLabel: 'Көрүштүк',
    metDate: '2026-жыл, 21-сентябрь, дүйшөмбү',
    nikahLabel: 'Никебиз',
    nikahDate: '2026-жыл, 22-сентябрь, шейшемби',
    tripLabel: 'Сага келе жатам',
    tripDate: '2026-жыл, 25-октябрь, жекшемби',
    kgLabel: 'Кыргызстандагы тоюбуз',
    kgDate: '2026-жыл, 27-октябрь, шейшемби',
    trLabel: 'Түркиядагы тоюбуз',
    trDate: '2026-жыл, 4-ноябрь, шаршемби',
    timelineTitle: 'Биздин жол',
    countdown: '{time} калды',
    dShort: 'күн',
    hShort: 'саат',
    mShort: 'мүн.',
    letterBtn: 'Катты ач',
    finaleTitle: 'Мен сени сүйөм',
    back: 'Ырларга кайтуу',
    secret: 'Жашыруун катты таптың: сени күн сайын кайрадан тандамакмын.',
    play: 'Ойнотуу',
    pause: 'Тындыруу',
    next: 'Кийинки ыр',
    prev: 'Мурунку ыр',
    like: 'Жүрөк жөнөтүү',
    seek: 'Ырды жылдыруу',
  },
  ru: {
    introKicker: 'Салиха,',
    introTitle: 'я кое-что для тебя приготовил',
    introSub: 'Включи звук и коснись сердца.',
    open: 'Открыть',
    by: 'Для Салихи · Юсуф',
    playlistTitle: 'Наш плейлист',
    playlistSub: 'Песен: {n}, мгновений: {n}',
    counterTitle: 'С нашего никаха',
    days: 'дни',
    hours: 'часы',
    minutes: 'минуты',
    seconds: 'секунды',
    metLabel: 'Встретились',
    metDate: '21 сентября 2026, понедельник',
    nikahLabel: 'Наш никах',
    nikahDate: '22 сентября 2026, вторник',
    tripLabel: 'Лечу к тебе',
    tripDate: '25 октября 2026, воскресенье',
    kgLabel: 'Наша свадьба в Кыргызстане',
    kgDate: '27 октября 2026, вторник',
    trLabel: 'Наша свадьба в Турции',
    trDate: '4 ноября 2026, среда',
    timelineTitle: 'Наш путь',
    countdown: 'осталось {time}',
    dShort: 'дн.',
    hShort: 'ч.',
    mShort: 'мин.',
    letterBtn: 'Открыть письмо',
    finaleTitle: 'Я люблю тебя',
    back: 'Вернуться к песням',
    secret: 'Ты нашла тайное послание: я бы выбирал тебя снова каждый день.',
    play: 'Играть',
    pause: 'Пауза',
    next: 'Следующая песня',
    prev: 'Предыдущая песня',
    like: 'Отправить сердце',
    seek: 'Перемотка',
  },
};

// Her şarkı: dosya, kapak fotoğrafı, arka plan renkleri ve o şarkıya ait anı.
// focus: kare kapakta fotoğrafın hangi kısmının görüneceği (yatay% dikey%).
export const tracks = [
  {
    src: '/music/01-sen-varsin-diye.mp3',
    title: 'Sen Varsın Diye',
    artist: 'Yüzyüzeyken Konuşuruz',
    cover: '/photos/05-sofra.jpg',
    focus: '20% 50%',
    accent: ['#be185d', '#7e22ce'],
    memory: {
      tr: {
        title: 'Sadece Sen',
        lines: [
          'O odada herkes vardı ama ben sadece seni gördüm.',
          'Bir ev, bir sofra, bir aile: hepsi seninle geldi.',
          'Her şey sen varsın diye güzel.',
        ],
      },
      uz: {
        title: 'Faqat sen',
        lines: [
          'O‘sha xonada hamma bor edi, lekin men faqat seni ko‘rdim.',
          'Bir uy, bir dasturxon, bir oila: hammasi sen bilan keldi.',
          'Hammasi sen borliging uchun go‘zal.',
        ],
      },
      ky: {
        title: 'Бир гана сен',
        lines: [
          'Ошол бөлмөдө баары бар эле, бирок мен сени гана көрдүм.',
          'Бир үй, бир дасторкон, бир үй-бүлө: баары сени менен келди.',
          'Сен бар болгонуң үчүн баары кооз.',
        ],
      },
      ru: {
        title: 'Только ты',
        lines: [
          'В той комнате были все, но я видел только тебя.',
          'Дом, дастархан, семья — всё это пришло вместе с тобой.',
          'Всё прекрасно, потому что есть ты.',
        ],
      },
    },
  },
  {
    src: '/music/02-gunu-gelir.mp3',
    title: 'Günü Gelir',
    artist: 'Dedublüman',
    cover: '/photos/02-gulumseme.jpg',
    focus: '50% 30%',
    accent: ['#b45309', '#be123c'],
    memory: {
      tr: {
        title: 'Ve O Gün Geldi',
        lines: [
          '21 Eylül, Pazartesi: seni gördüm.',
          'Bir gün sonra, 22 Eylül Salı: nikâhımız kıyıldı.',
          'Beklediğim gün, senin adınla geldi.',
        ],
      },
      uz: {
        title: 'Va o‘sha kun keldi',
        lines: [
          '21-sentabr, dushanba: seni ko‘rdim.',
          'Bir kun o‘tib, 22-sentabr, seshanba: nikohimiz o‘qildi.',
          'Kutgan kunim sening isming bilan keldi.',
        ],
      },
      ky: {
        title: 'Ошол күн келди',
        lines: [
          '21-сентябрь, дүйшөмбү: сени көрдүм.',
          'Бир күндөн кийин, 22-сентябрь, шейшемби: никебиз кыйылды.',
          'Күткөн күнүм сенин атың менен келди.',
        ],
      },
      ru: {
        title: 'И этот день настал',
        lines: [
          '21 сентября, понедельник: я увидел тебя.',
          'Через день, 22 сентября, вторник: мы заключили никах.',
          'День, которого я ждал, пришёл с твоим именем.',
        ],
      },
    },
  },
  {
    src: '/music/09-desert-rose.mp3',
    title: 'Desert Rose',
    artist: 'Sting',
    cover: '/photos/01-cicek.jpg',
    focus: '50% 25%',
    accent: ['#9f1239', '#c2410c'],
    memory: {
      tr: {
        title: 'İlk Çiçek',
        lines: [
          'O akşam elimde güller, içimde tarifsiz bir heyecan vardı.',
          'Çiçekleri sana uzattığımda dünya bir an sustu.',
          'Benim gülüm sensin.',
        ],
      },
      uz: {
        title: 'Birinchi gul',
        lines: [
          'O‘sha oqshom qo‘limda atirgullar, ichimda ta’riflab bo‘lmas hayajon bor edi.',
          'Gullarni senga uzatganimda dunyo bir lahza jim qoldi.',
          'Mening gulim — sen.',
        ],
      },
      ky: {
        title: 'Биринчи гүл',
        lines: [
          'Ошол кечте колумда розалар, жүрөгүмдө айтып жеткис толкундануу бар эле.',
          'Гүлдөрдү сага сунганымда дүйнө бир саамга тынып калды.',
          'Менин гүлүм — сен.',
        ],
      },
      ru: {
        title: 'Первые цветы',
        lines: [
          'В тот вечер в руках у меня были розы, а внутри — волнение, которое не описать.',
          'Когда я протянул тебе цветы, мир на миг затих.',
          'Моя роза — это ты.',
        ],
      },
    },
  },
  {
    src: '/music/03-yarim-derdini-ver-bana.mp3',
    title: 'Yarim Derdini Ver Bana',
    artist: 'Koma Se Bıra',
    cover: '/photos/03-hazirlik.jpg',
    focus: '25% 50%',
    accent: ['#0f766e', '#7e22ce'],
    memory: {
      tr: {
        title: 'Derdin Derdimdir',
        lines: [
          'Bundan sonra yükün de benim, sevincin de.',
          'Yorulduğunda yaslanacağın omuz ben olayım.',
          'Derdini bana ver, gülüşün sende kalsın.',
        ],
      },
      uz: {
        title: 'Darding — mening dardim',
        lines: [
          'Bundan buyon yuking ham meniki, quvonching ham.',
          'Charchaganingda suyanadigan yelkang men bo‘lay.',
          'Dardingni menga ber, kulging o‘zingda qolsin.',
        ],
      },
      ky: {
        title: 'Сенин дартың — менин дартым',
        lines: [
          'Мындан ары жүгүң да меники, кубанычың да.',
          'Чарчаганыңда жөлөнө турган ийиниң мен болоюн.',
          'Дартыңды мага бер, күлкүң өзүңдө калсын.',
        ],
      },
      ru: {
        title: 'Твоя боль — моя боль',
        lines: [
          'Отныне и твоя ноша — моя, и твоя радость.',
          'Когда устанешь, пусть моё плечо будет твоей опорой.',
          'Отдай мне свои печали, а улыбку оставь себе.',
        ],
      },
    },
  },
  {
    src: '/music/04-ala-gozlum.mp3',
    title: 'Ala Gözlüm',
    artist: 'TOP AI MUZIK',
    cover: '/photos/04-yuzuk-kutusu.jpg',
    focus: '20% 50%',
    accent: ['#a16207', '#9d174d'],
    memory: {
      tr: {
        title: 'Yüzük',
        lines: [
          'O küçük kutuda sadece bir yüzük yoktu.',
          'İçinde sana verdiğim söz vardı.',
          'O an bildim: doğru yerdeyim.',
        ],
      },
      uz: {
        title: 'Uzuk',
        lines: [
          'O‘sha kichkina qutichada faqat uzuk emas edi.',
          'Ichida senga bergan so‘zim bor edi.',
          'O‘sha lahza bildim: to‘g‘ri joydaman.',
        ],
      },
      ky: {
        title: 'Шакек',
        lines: [
          'Ошол кичинекей кутучада шакек эле эмес болчу.',
          'Ичинде сага берген сөзүм бар эле.',
          'Ошол учурда билдим: туура жердемин.',
        ],
      },
      ru: {
        title: 'Кольцо',
        lines: [
          'В той маленькой коробочке было не только кольцо.',
          'В ней было слово, которое я тебе дал.',
          'В тот миг я понял: я там, где должен быть.',
        ],
      },
    },
  },
  {
    src: '/music/05-lampochki.mp3',
    title: 'Лампочки',
    artist: 'ARTIK & ASTI',
    cover: '/photos/06-yuzuk.jpg',
    focus: '45% 50%',
    accent: ['#ca8a04', '#be185d'],
    memory: {
      tr: {
        title: 'Parmağındaki Söz',
        lines: [
          'Yüzüğü parmağına takarken gülmeden duramadım.',
          'O an, hayatımın en kısa ve en uzun saniyesiydi.',
          'Artık elin elimde.',
        ],
      },
      uz: {
        title: 'Barmog‘ingdagi va’da',
        lines: [
          'Uzukni barmog‘ingga taqayotganimda kulmay turolmadim.',
          'O‘sha lahza hayotimdagi eng qisqa va eng uzun soniya edi.',
          'Endi qo‘ling qo‘limda.',
        ],
      },
      ky: {
        title: 'Манжаңдагы убада',
        lines: [
          'Шакекти манжаңа тагып жатып күлбөй тура албадым.',
          'Ошол учур өмүрүмдөгү эң кыска жана эң узун секунд болду.',
          'Эми колуң менин колумда.',
        ],
      },
      ru: {
        title: 'Обещание на твоём пальце',
        lines: [
          'Надевая кольцо на твой палец, я не мог сдержать улыбку.',
          'Тот миг был самой короткой и самой длинной секундой в моей жизни.',
          'Теперь твоя рука в моей.',
        ],
      },
    },
  },
  {
    src: '/music/06-zavisay.mp3',
    title: 'Зависай',
    artist: 'Strange',
    cover: '/photos/07-bilek.jpg',
    focus: '50% 40%',
    accent: ['#1d4ed8', '#7e22ce'],
    memory: {
      tr: {
        title: 'Bırakmam',
        lines: [
          'Bileğine hediyemi takarken tek bir şey düşündüm:',
          'Bu eli hiç bırakmayacağım.',
          'Yanında zaman duruyor.',
        ],
      },
      uz: {
        title: 'Qo‘yib yubormayman',
        lines: [
          'Bilagingga sovg‘amni taqayotganimda faqat bir narsani o‘yladim:',
          'Bu qo‘lni hech qachon qo‘yib yubormayman.',
          'Yoningda vaqt to‘xtaydi.',
        ],
      },
      ky: {
        title: 'Коё бербейм',
        lines: [
          'Билегиңе белегимди тагып жатып бир гана нерсени ойлодум:',
          'Бул колду эч качан коё бербейм.',
          'Жаныңда убакыт токтойт.',
        ],
      },
      ru: {
        title: 'Не отпущу',
        lines: [
          'Застёгивая подарок на твоём запястье, я думал только об одном:',
          'Эту руку я не отпущу никогда.',
          'Рядом с тобой время замирает.',
        ],
      },
    },
  },
  {
    src: '/music/07-omut.mp3',
    title: 'Омут',
    artist: 'Полка, YASMI',
    cover: '/photos/08-bilek-2.jpg',
    focus: '50% 40%',
    accent: ['#3730a3', '#0e7490'],
    memory: {
      tr: {
        title: 'Sende Kayboldum',
        lines: [
          'Sende kayboldum; bulunmak da istemiyorum.',
          'Örtünün ardında gülümsediğini hissettim.',
          'O an bana yetti.',
        ],
      },
      uz: {
        title: 'Senda yo‘qoldim',
        lines: [
          'Senda yo‘qoldim; topilishni ham xohlamayman.',
          'Ro‘moling ortida jilmayganingni his qildim.',
          'O‘sha lahza menga yetarli edi.',
        ],
      },
      ky: {
        title: 'Сенде жоголдум',
        lines: [
          'Сенде жоголдум; табылгым да келбейт.',
          'Жоолугуңдун артында жылмайганыңды сездим.',
          'Ошол учур мага жетиштүү болду.',
        ],
      },
      ru: {
        title: 'Я потерялся в тебе',
        lines: [
          'Я потерялся в тебе и не хочу, чтобы меня нашли.',
          'Я чувствовал, как ты улыбаешься под платком.',
          'Мне хватило этого мгновения.',
        ],
      },
    },
  },
  {
    src: '/music/08-faith-lost.mp3',
    title: 'Faith Lost',
    artist: '',
    cover: '/photos/selfie.jpg',
    focus: '10% 50%',
    accent: ['#9f1239', '#6d28d9'],
    memory: {
      tr: {
        title: 'Sonsuza Kadar',
        lines: [
          'Bu son şarkı ama bizim hikâyemiz daha yeni başlıyor.',
          'Her sabah sana yeniden teşekkür edeceğim.',
          'İyi ki sen, iyi ki biz.',
        ],
      },
      uz: {
        title: 'Abadiy',
        lines: [
          'Bu oxirgi qo‘shiq, lekin bizning hikoyamiz endi boshlanmoqda.',
          'Har tong senga qaytadan rahmat aytaman.',
          'Yaxshiyamki sen borsan, yaxshiyamki biz bormiz.',
        ],
      },
      ky: {
        title: 'Түбөлүккө',
        lines: [
          'Бул акыркы ыр, бирок биздин окуябыз эми гана башталып жатат.',
          'Ар бир таңда сага кайрадан рахмат айтам.',
          'Сен бар экениңе, биз бар экенибизге шүгүр.',
        ],
      },
      ru: {
        title: 'Навсегда',
        lines: [
          'Это последняя песня, но наша история только начинается.',
          'Каждое утро я буду благодарить тебя заново.',
          'Как хорошо, что есть ты. Как хорошо, что есть мы.',
        ],
      },
    },
  },
];

// Finaldeki mektup
export const letter = {
  tr: {
    greeting: 'Canım Saliha,',
    paragraphs: [
      '21 Eylül Pazartesi günü görüştük; 22 Eylül Salı günü nikâhımız kıyıldı. Kâğıt üstünde iki gün, benim içinse hayatımın ikiye ayrıldığı yer: senden önce ve seninle.',
      'Sen bir dilde büyüdün, ben başka bir dilde. Ama o akşam anladım ki bazı şeyler çeviri istemiyor. Sustuğunda da seni duyuyorum.',
      'Sana kusursuz bir hayat sözü veremem. Ama her gün yanında olmaya, seni dinlemeye, güldürmeye ve korumaya söz veriyorum.',
      "25 Ekim'de sana geliyorum. 27 Ekim'de Kırgızistan'da, 4 Kasım'da Türkiye'de düğünümüz var. İki ülke, iki düğün, tek bir yuva.",
      'İyi ki varsın. İyi ki benim eşimsin.',
    ],
    sign: 'Kocan, Yusuf',
  },
  uz: {
    greeting: 'Jonim Saliha,',
    paragraphs: [
      '21-sentabr, dushanba kuni ko‘rishdik; 22-sentabr, seshanba kuni nikohimiz o‘qildi. Qog‘ozda ikki kun, men uchun esa hayotim ikkiga bo‘lingan joy: sendan oldin va sen bilan.',
      'Sen bir tilda ulg‘ayding, men boshqa tilda. Lekin o‘sha oqshom tushundimki, ba’zi narsalarga tarjima kerak emas. Jim turganingda ham seni eshitaman.',
      'Senga benuqson hayot va’da qila olmayman. Lekin har kuni yoningda bo‘lishga, seni tinglashga, kuldirishga va asrashga so‘z beraman.',
      '25-oktabrda yoningga kelyapman. 27-oktabrda Qirg‘izistonda, 4-noyabrda Turkiyada to‘yimiz bo‘ladi. Ikki yurt, ikki to‘y, bitta uy.',
      'Yaxshiyamki borsan. Yaxshiyamki mening rafiqamsan.',
    ],
    sign: 'Ering, Yusuf',
  },
  ky: {
    greeting: 'Жаным Салиха,',
    paragraphs: [
      '21-сентябрда, дүйшөмбү күнү көрүштүк; 22-сентябрда, шейшемби күнү никебиз кыйылды. Кагаз бетинде эки күн, мен үчүн болсо өмүрүм экиге бөлүнгөн жер: сенден мурун жана сени менен.',
      'Сен бир тилде чоңойдуң, мен башка тилде. Бирок ошол кечте түшүндүм: кээ бир нерселерге котормонун кереги жок. Унчукпай турганыңда да сени угам.',
      'Сага кемчиликсиз жашоо убада кыла албайм. Бирок күн сайын жаныңда болууга, сени угууга, күлдүрүүгө жана коргоого сөз берем.',
      '25-октябрда сага келе жатам. 27-октябрда Кыргызстанда, 4-ноябрда Түркияда тоюбуз болот. Эки өлкө, эки той, бир үй.',
      'Сен бар экениңе шүгүр. Менин жубайым экениңе шүгүр.',
    ],
    sign: 'Күйөөң, Юсуф',
  },
  ru: {
    greeting: 'Моя дорогая Салиха,',
    paragraphs: [
      'В понедельник, 21 сентября, мы встретились; во вторник, 22 сентября, заключили никах. На бумаге это два дня, а для меня — место, где жизнь разделилась надвое: до тебя и с тобой.',
      'Ты выросла на одном языке, я — на другом. Но в тот вечер я понял: некоторым вещам перевод не нужен. Я слышу тебя, даже когда ты молчишь.',
      'Я не могу обещать тебе безупречную жизнь. Но обещаю каждый день быть рядом, слушать тебя, смешить и беречь.',
      '25 октября я лечу к тебе. 27 октября у нас свадьба в Кыргызстане, 4 ноября — в Турции. Две страны, две свадьбы, один дом.',
      'Как хорошо, что ты есть. Как хорошо, что ты моя жена.',
    ],
    sign: 'Твой муж, Юсуф',
  },
};
