import { ImageLayout } from './ImageLayout';

export const BraidsHero2 = () => {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        {/* Hero section */}
        <div className='relative'>
          <div
            className='absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80 lg:motion-safe:animate-pulse'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fa7681] to-pinkv opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='py-24 sm:py-32'>
            <div className='max-w-5xl px-6 mx-auto 2xl:max-w-7xl lg:px-8'>
              <div className='max-w-2xl mx-auto text-center'>
                <h2 className='text-base font-semibold leading-7 text-pinkv'>
                  Удобство и красота
                </h2>
                <h1 className='text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl'>
                  Стил, който вдъхновява.
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Всяка плитка разказва история – за увереност, красота и
                  уникалност. Нашите стилове са създадени, за да ви накарат да
                  се почувствате специални и да добавят нотка елегантност към
                  ежедневието ви.
                </p>
              </div>
              <div className='flow-root mt-16 sm:mt-24'>
                <div className='inline-block w-full'>
                  <ImageLayout />
                </div>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-2/3 bg-gradient-to-tr from-[#fa7681] to-pinkv opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
