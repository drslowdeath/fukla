export const ServiceHero = () => {
  return (
    <div className='relative isolate -z-10'>
      <svg
        className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
        />
      </svg>
      <div
        className='absolute top-0 right-0 -ml-48 overflow-hidden left-1/2 -z-10 transform-gpu blur-3xl lg:ml-24 xl:ml-48'
        aria-hidden='true'
      >
        <div
          className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#fa7681] to-pinkv opacity-40'
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
        />
      </div>
      <div className='overflow-hidden'>
        <div className='px-6 pb-12 mx-auto max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
            <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Стила, подчертаващ вашата уникалност.
              </h1>

              <p className='max-w-2xl mx-auto mt-6 text-lg leading-8 text-left text-gray-600'>
                Предлагаме разнообразие от услуги, които съчетават елегантност и
                индивидуалност. Разгледайте как можем да ви помогнем да се
                почувствате уверени и красиви. 💖
              </p>
            </div>
            <div className='flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
              <div className='flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                <div className='relative'>
                  <img
                    src='/images/home/girlTattoooHome.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
              <div className='flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36'>
                <div className='relative'>
                  <img
                    src='/images/home/nailsPurpleHome.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative'>
                  <img
                    src='/images/home/pinkJarHome.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover  shadow-lg'
                  />
                  <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
              <div className='flex-none pt-32 space-y-8 w-44 sm:pt-0'>
                <div className='relative'>
                  <img
                    src='/images/home/purpleBraids.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div className='relative'>
                  <img
                    src='/images/home/youngGirlSideBraid.webp'
                    alt=''
                    className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                  />
                  <div className='absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
