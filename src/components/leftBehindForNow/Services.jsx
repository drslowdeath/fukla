import { Link } from 'react-router-dom';
export const Services = () => {
  return (
    <>
      <section className='w-full py-12 mt-20 text-white '>
        <div className='flex flex-col items-center px-6 mx-auto md:flex-row max-w-7xl sm:px-20 md:m-0 md:justify-self-end'>
          <div className='flex justify-end w-full sm:w-2/4 md:-mr-12'>
            <img
              className='w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#e95d7988] mx-auto md:m-0'
              src='/images/home/braids.webp'
              alt='Braids'
            />
          </div>
          <div className='z-10 w-3/4 p-12 mx-auto mt-6 rounded-lg shadow-xl md:m-0 lg:p-18 md:w-3/5 md:pr-10 md:mt-0 bg-dark-gradient'>
            <h2 className='mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4'>
              Плитки
            </h2>
            <p className='mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6'>
              Косата е короната, която никога не сваляте и с правилната грижа и
              оформяне тя може да бъде блестящо свидетелство за вашата красота и
              увереност.
            </p>
            <p className='hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8'>
              Косата е отражение на това кой сте и какво представлявате, а с
              правилния стил тя може да бъде мощен израз на вашата идентичност.
            </p>
            <Link
              to='/braids'
              className='inline-block text-sm site-button first-letter:capitalize md:text-base'
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>

      {/* MARK:Temporary Tatoos */}
      <section className='w-full py-12 mt-20 text-white '>
        <div className='flex flex-col items-center px-6 mx-auto md:flex-row-reverse md:items-center max-w-7xl sm:px-20 md:m-0 md:justify-center'>
          <div className='w-full sm:w-2/5'>
            <img
              className='w-2/3 xs:w-3/4 md:w-full md:-ml-12 h-auto object-cover rounded-md md:rounded-lg shadow-lg shadow-[#e95d7988] mx-auto z-0'
              src='/images/home/temp-tattoos.webp'
              alt='Temporary Tatoos'
            />
          </div>
          <div className='z-10 w-3/4 p-12 mx-auto mt-6 rounded-lg shadow-xl md:m-0 lg:p-18 md:w-3/5 md:pr-10 md:mt-0 bg-dark-gradient'>
            <h2 className='mb-2 text-2xl font-semibold md:text-3xl md:mb-4'>
              Временни Татуировки - Джагуа
            </h2>
            <p className='mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6'>
              Временните татуировки са начин да изразите своята креативност и
              уникалност, без да правите постоянен ангажимент.
            </p>
            <p className='hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8'>
              От смели и привличащи вниманието до деликатни и едва
              забележими.Тази форма на изкуство е перфектен избор за тези, които
              обичат да експериментират и искат да изпробват нови идеи за
              самоизразяване.
            </p>
            {/* MARK: TODO: New page needed */}
            <Link
              to='/makeup'
              className='inline-block text-sm site-button first-letter:capitalize md:text-base'
            >
              виж още
            </Link>
          </div>
        </div>
      </section>
      {/* MARK: Nails */}
      <section className='w-full py-12 mt-20 text-white '>
        <div className='flex flex-col items-center px-6 mx-auto md:flex-row max-w-7xl sm:px-20 md:m-0 md:justify-self-end'>
          <div className='flex justify-end w-full md:w-2/3 md:-mr-12'>
            <img
              className='w-2/3 xs:w-3/4 sm:w-3/4 md:w-full lg:w-5/6 h-auto object-cover rounded-md shadow-lg shadow-[#e95d7988] mx-auto md:m-0'
              src='/images/home/nails.webp'
              alt='Nails'
            />
          </div>
          <div className='z-10 w-3/4 p-12 mx-auto mt-6 rounded-lg shadow-xl md:m-0 lg:p-18 md:w-3/5 md:pr-10 md:mt-0 bg-dark-gradient'>
            <h2 className='mb-2 text-2xl font-semibold md:text-3xl underline-txt md:mb-4'>
              Нокти
            </h2>
            <p className='mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6'>
              Маникюрът е като бижу за вашите ръце, той добавя блясък и красота
              към вашия външен вид.
            </p>
            <p className='hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8'>
              Маникюрът е форма на изкуство и с правилните инструменти и техники
              можете да създавате красиви и уникални дизайни.
            </p>
            <Link
              to='/nails'
              className='inline-block text-sm site-button first-letter:capitalize md:text-base'
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>
      {/* MARK: Hair Thread */}
      <section className='w-full py-12 mt-20 text-white '>
        <div className='flex flex-col items-center px-6 mx-auto md:flex-row-reverse md:items-center max-w-7xl sm:px-20 md:m-0 md:justify-center'>
          <div className='w-full md:w-2/3'>
            <img
              className='w-2/3 xs:w-3/4 md:w-full md:-ml-12 h-auto object-cover rounded-md md:rounded-lg shadow-lg shadow-[#e95d7988] mx-auto z-0'
              src='/images/home/braid-thread.webp'
              alt='Temporary Tatoos'
            />
          </div>
          <div className='z-10 w-3/4 p-12 mx-auto mt-6 rounded-lg shadow-xl md:m-0 lg:p-18 md:w-3/5 md:pr-10 md:mt-0 bg-dark-gradient'>
            <h2 className='mb-2 text-2xl font-semibold md:text-3xl md:mb-4'>
              Прежда за Екстеншъни
            </h2>
            <p className='mb-4 text-sm leading-relaxed md:text-base lg:text-lg md:mb-6'>
              Преждата за плитки е идеалният начин да внесете цвят и текстура
              във вашата прическа, добавяйки нови измерения на вашия стил.
            </p>
            <p className='hidden mb-6 text-sm leading-relaxed sm:flex md:text-base lg:text-lg md:mb-8'>
              Тази техника е идеален избор за онези, които искат да изразят
              своята индивидуалност с ярък и впечатляващ акцент.
            </p>
            {/* MARK: TODO: New page needed */}
            <Link
              to='/makeup'
              className='inline-block text-sm site-button first-letter:capitalize md:text-base'
            >
              прочети повече
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
