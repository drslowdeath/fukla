import { useState } from 'react';
import { ExpandableText } from '../../common/ExpandableText';


export const BraidsWelcome = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLowerExpanded, setIsLowerExpanded] = useState(false);
  return (
    <>
    {/* UPPER */}
    <div className="relative flex items-center justify-center w-full">
      {/* Background for large screens */}
      <div className="absolute inset-0 hidden bg-white lg:block -z-10"></div>

      {/* Content container */}
      <div className="relative flex items-center justify-start px-3 py-12 mx-auto sm:px-6 lg:px-16">
        {/* Text and Image Container 1*/}
        <div className="relative flex items-center justify-start sm:justify-center w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
          {/* Text Section */}
          <div
            className="relative z-10 w-[80%] lg:w-[70%] 2xl:w-[55%] bg-[#18181b] text-white rounded-lg shadow-lg p-2 sm:p-6 welcome-card-scroll"
            style={{
              minHeight: '250px',
            }}
          >
            <h2 className="mb-4 text-xl font-semibold sm:2xl lg:text-3xl">
              Плитката като универсален стил
            </h2>
            <ExpandableText
              className="block mb-4 text-lg text-gray-300"
              previewLines={4}
              buttonClass="mt-4 p-2 text-sm sm:text-lg bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all"
              expandedText="Виж по-малко"
              collapsedText="Виж повече"
              onToggle={(state) => setIsExpanded(state)}
            >
              Плитките не са просто практично решение за премахване на косата от
              лицето ви – те са начин да изразите стил и увереност. С тях
              печелите време за важните неща, като едновременно постигате
              мечтаната визия и дълга коса. Те безпроблемно преминават от
              ежедневна небрежност към подчертана елегантност, допълвайки и
              най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
              косите и подчертават вашата естествена усмивка.
              <br />
              <span className="text-gray-200">
                Оставете плитките да говорят за вашия стил!
              </span>
            </ExpandableText>
          </div>

          {/* Image Section (behind and Right) */}
          <div
  className={`absolute top-1/2 transform -translate-y-1/2 rounded-lg shadow-md z-0 transition-all duration-500`}
  style={{
    right: isExpanded
      ? '-30%' // Expanded position
      : '-10%', // Initial position
    width: '50%', // Static width
    height: '80%',
    backgroundImage: "url('images/braids/braidsSwiper4.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>
        </div>
      </div>
    </div>


    {/* LOWER */}
    <div className="relative flex items-center justify-end w-full">
  {/* Background for large screens */}
  <div className="absolute inset-0 hidden bg-white lg:block -z-10"></div>

  {/* Content container */}
  <div className="relative flex items-center justify-end px-3 py-12 mx-auto sm:px-6 lg:px-16">
    {/* Text and Image Container */}
    <div className="relative flex items-center justify-end sm:justify-center w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
      
      {/* Image Section (behind and Left) */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-[50%] h-[80%] bg-cover bg-center rounded-lg shadow-md z-0 transition-all duration-500`}
        style={{
          left: isLowerExpanded ? '-30%' : '-10%', // Adjust dynamically based on state
          backgroundImage: "url('images/braids/braidsSwiper4.webp')",
        }}
      ></div>

      {/* Text Section */}
      <div
        className="relative z-10 w-[80%] lg:w-[70%] 2xl:w-[55%] bg-[#18181b] text-white rounded-lg shadow-lg p-2 sm:p-6 welcome-card-scroll"
        style={{
          minHeight: '250px',
        }}
      >
        <h2 className="mb-4 text-xl font-semibold sm:2xl lg:text-3xl">
          Плитката като универсален стил
        </h2>
        <ExpandableText
          className="block mb-4 text-lg text-gray-300"
          previewLines={4}
          buttonClass="mt-4 p-2 text-sm sm:text-lg bg-gradient-to-r from-white to-pink-500 text-[#18181b] rounded-lg hover:from-[#e95d7a] hover:to-purple-600 hover:text-white transition-all"
          expandedText="Виж по-малко"
          collapsedText="Виж повече"
          onToggle={(state) => setIsLowerExpanded(state)} // Control lower section expansion state
        >
          Плитките не са просто практично решение за премахване на косата от
          лицето ви – те са начин да изразите стил и увереност. С тях
          печелите време за важните неща, като едновременно постигате
          мечтаната визия и дълга коса. Те безпроблемно преминават от
          ежедневна небрежност към подчертана елегантност, допълвайки и
          най-официалния тоалет. Плитките внасят блясък в очите ви, цвят в
          косите и подчертават вашата естествена усмивка.
          <br />
          <span className="text-gray-200">
            Оставете плитките да говорят за вашия стил!
          </span>
        </ExpandableText>
      </div>
    </div>
  </div>
</div>
    </>
    
  );
};
