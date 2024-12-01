const braids = [
  {
    name: 'Класическа плитка',
    undertext: 'Вечната класика с модерен нюанс.',
    imageUrl: '/images/braids/classicBraids.webp',
    bio: 'Елегантността никога не излиза от мода. Този стил е перфектен за официални поводи или ежедневен шик.',
  },
  {
    name: 'Боксьорски плитки:',
    undertext: 'Нов начин да изглеждате уверени.',
    imageUrl: '/images/braids/boxerBraids.webp',
    bio: 'Смели и забележителни, тези плитки комбинират практичност с модерна естетика, подходящи за всеки динамичен ден.',
  },

  {
    name: '„Диадема“ разновидности',
    undertext: 'Добавете нотка приказност.',
    imageUrl: '/images/braids/diademBraids.webp',
    bio: 'Тези плитки обграждат лицето ви като красива корона, подчертавайки вашата естествена красота.',
  },
  {
    name: 'Опашка от пълзящи плитки',
    undertext: 'Динамика, която привлича погледи.',
    imageUrl: '/images/braids/crawlingBraidsTail.webp',
    bio: 'Изберете стил, който съчетава свобода и изящество – подходящ както за ежедневието, така и за вечерни излизания.',
  },
  {
    name: 'Туистъри',
    undertext: 'Добавете движение и обем.',
    imageUrl: '/images/braids/twisterBraids.webp',
    bio: 'Този стил е за тези, които обичат да експериментират с текстури и игривост във визията си.',
  },
  {
    name: 'Афроплитки',
    undertext: 'Където културата среща модерното.',
    imageUrl: '/images/braids/afroBraids.webp',
    bio: 'Тези плитки са не само стилен избор, но и начин да носите част от историята и традициите.',
  },
  {
    name: 'Къдрици.',
    undertext: 'Когато искаш нещо специално.',
    imageUrl: '/images/braids/curls.webp',
    bio: 'Превърнете своята визия в реалност! Заедно създаваме плитки, които отразяват вашия стил и индивидуалност – уникални, точно като вас.',
  },
  {
    name: 'Пълзящи плитки.',
    undertext: 'Когато искаш нещо специално.',
    imageUrl: '/images/braids/crawlingBraids.webp',
    bio: 'Превърнете своята визия в реалност! Заедно създаваме плитки, които отразяват вашия стил и индивидуалност – уникални, точно като вас.',
  },
  {
    name: 'Fukla Плитки',
    undertext: 'Когато искаш нещо специално.',
    imageUrl: '/images/braids/braidsPricing.webp',
    bio: 'The secret to great style, is to feel good in what you wear.',
  },
  {
    name: 'Дизайн по твоя идея.',
    undertext: 'Когато искаш нещо специално.',
    imageUrl: '/images/braids/braidsHero2WhiteGirl.webp',
    bio: 'Превърнете своята визия в реалност! Заедно създаваме плитки, които отразяват вашия стил и индивидуалност – уникални, точно като вас.',
  },
];
export const BraidStyles = () => {
  return (
    <div className='py-24 bg-dark-gradient sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto sm:text-center'>
          <h2 className='text-4xl font-bold tracking-tight text-white md:text-5xl'>
            Нашите модели
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Открийте свят на възможности с нашите уникални плитки, добавящи
            цвят, движение и изящество към вашата визия. Всяка плитка е израз на
            елегантна индивидуалност.
          </p>
        </div>
        <div
          role='list'
          className='grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none'
        >
          {braids.map((braid) => (
            <li key={braid.name} className='flex flex-col gap-6 xl:flex-row'>
              <img
                className='aspect-[4/5] w-52 flex-none rounded-2xl object-cover'
                src={braid.imageUrl}
                alt=''
              />
              <div className='flex-auto'>
                <h3 className='text-lg font-semibold leading-8 tracking-tight text-white'>
                  {braid.name}
                </h3>
                <p className='text-base leading-7 text-pinkv'>
                  {braid.undertext}
                </p>
                <p className='mt-6 text-base leading-7 text-gray-300'>
                  {braid.bio}
                </p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
