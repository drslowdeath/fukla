// import { ExpandableText } from '../../common/ExpandableText';
export const BraidsDivider = () => {
  return (
    <div className='relative w-full bg-white-gradient'>
      {/* Content container */}
      <div className='relative flex flex-col items-center gap-6 mx-auto'>
        {/* Responsive grid layout */}
        <div className='grid justify-center w-full gap-4 py-12 px-4 lg:hidden grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))]'>
          {/* Card 1 */}
          <div className='w-full p-4 text-center transition-all duration-500 rounded-lg shadow-xl hover:scale-105 bg-pink-gradient hover:bg-dark-pink-gradient text-zinc-800 hover:text-white'>
            <div
              className='max-sm:h-[160px] sm:h-[200px] bg-cover bg-center rounded-md mb-2'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper1.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold'>За Нас</h2>
            <button className='mt-2 site-button-alt'>Прочети още</button>
          </div>

          {/* Card 2 */}
          <div className='w-full p-4 text-center transition-all duration-500 rounded-lg shadow-xl hover:scale-105 bg-pink-gradient hover:bg-dark-pink-gradient text-zinc-800 hover:text-white'>
            <div
              className='max-sm:h-[160px] sm:h-[200px] bg-cover bg-center rounded-md mb-2'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper2.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold'>Ценоразпис</h2>
            <button className='mt-2 site-button-alt'>Press me</button>
          </div>

          {/* Card 3 */}
          <div className='w-full p-4 text-center transition-all duration-500 rounded-lg shadow-xl hover:scale-105 bg-pink-gradient hover:bg-dark-pink-gradient text-zinc-800 hover:text-white'>
            <div
              className='max-sm:h-[160px] sm:h-[200px] bg-cover bg-center rounded-md mb-2'
              style={{
                backgroundImage: "url('images/braids/braidsSwiper2.webp')",
              }}
            ></div>
            <h2 className='mb-2 text-xl font-semibold'>Галерия</h2>
            <button className='mt-2 site-button-alt'>Виж повече</button>
          </div>
        </div>

        {/* Cards Deck */}
        <div className='items-center justify-center hidden w-full h-full p-24 transition duration-300 lg:flex brightness-75 hover:brightness-100'>
          {/* MARK: Card 1 */}
          <div className='card-left bright group z-10 mt-20 flex h-[420px] w-[280px] 2xl:h-[480px] 2xl:w-[380px] shrink-0 -rotate-12 transform flex-col gap-2 rounded-md p-4 bg-dark-gradient hover:bg-dark-pink-gradient text-zinc-300 hover:text-white transition duration-300 ease-in-out hover:-translate-x-1/3 hover:-translate-y-10 hover:rotate-0 hover:scale-105 shadow-2xl'>
            <div
              className='flex h-[65%] items-center justify-center bg-cover bg-center rounded-md'
              style={{
                backgroundImage: "url('images/braids/braidsAboutUs.webp')",
              }}
            ></div>
            <h2 className='text-2xl'>За Нас</h2>
            <div className='h-[35%] overflow-y-scroll'>
              <p className='mr-2 text-sm h-fit'>
                Ние сме момичета, обединени от страстта си към красотата и
                изкуството на плетенето на коса. Всяка от нас е отдадена на
                работата си, влагайки креативност и любов във всяка прическа,
                която създаваме. Независимо дали става въпрос за класически
                плитки или нестандартни и сложни стилизирани форми, нашият екип
                винаги е готов да предложи нещо уникално и различно. Вярваме, че
                косата разказва много, и нашата цел е да ви помогнем да изразите
                своя стил по уникален начин. Винаги сме готови за нови
                предизвикателства и обичаме да експериментираме с различни
                техники и идеи, за да ви предложим прическа, която наистина ви
                пасва. При нас плитките не са просто прическа – те са начин да
                покажете себе си.
              </p>
            </div>
            <div>
              <button className='p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-zinc-800 rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'>
                Прочети още
              </button>
            </div>
          </div>

          {/* MARK: Card 2 */}
          <div className='card-center z-40 flex 2xl:h-[500px] 2xl:w-[400px] h-[440px] w-[300px] shrink-0 flex-col gap-2 rounded-md p-4 transition duration-300 ease-in-out hover:scale-105 bg-dark-gradient hover:bg-dark-pink-gradient text-zinc-300 hover:text-white'>
            <div className='flex h-[65%] items-center justify-center rounded-md bg-gray-200 bg-cover text-zinc-800 shadow-2xl'>
              picture box
            </div>
            <h2 className='text-2xl'>Ценоразпис</h2>
            <div className='h-[35%] overflow-y-scroll'>
              <p className='mr-2 text-sm h-fit'>
                Ценоразпис на предлаганите услуги. В случай че не намирате
                желаната от вас услуга моля свържете се с нас.
              </p>
            </div>
            <div className='max-w-fit'>
              <button className='p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-zinc-800 rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'>
                Цени
              </button>
            </div>
          </div>
          {/* MARK: Card 3 */}
          <div className='card-right z-10 mt-20 flex h-[400px] w-[260px] 2xl:h-[480px] 2xl:w-[380px] shrink-0 rotate-12 transform flex-col gap-4 rounded-md bg-dark-gradient hover:bg-dark-pink-gradient text-zinc-300 hover:text-white p-4 transition duration-300 ease-in-out will-change-transform hover:translate-x-1/3 hover:rotate-0 hover:scale-105 hover:-translate-y-10 shadow-2xl'>
            <div className='flex h-[65%] items-center justify-center rounded-md bg-gray-200 bg-cover text-zinc-800'>
              picture box
            </div>
            <h2 className='text-3xl'>Галерия</h2>
            <div className='h-[20%] overflow-y-scroll'>
              <p className='mr-2 text-sm h-fit'>
                Small message to give it to the people maan. Johny give em the
                shpiel right there man you know whats up! Small message to give
                it to the people maan. Johny give em the shpiel right there man
                you know whats up! Small message to give it to the people maan.
                Johny give em the shpiel right there man you know whats up!
                Small message to give it to the people maan. Johny give em the
                shpiel right there man you know whats up! Small message to give
                it to the people maan. Johny give em the shpiel right there man
                you know whats up! Small message to give it to the people maan.
                Johny give em the shpiel right there man you know whats up!
                Small message to give it to the people maan. Johny give em the
                shpiel right there man you know whats up!
              </p>
            </div>
            <div className='max-w-fit'>
              <button className='p-2 text-sm bg-gradient-to-r from-white to-pink-500 text-zinc-800 rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all'>
                press me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
