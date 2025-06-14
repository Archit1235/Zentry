import Button from '@/components/Button';

function ImageClipBox({ src, clipClass }) {
  return (
    <div className={clipClass}>
      <img src={src} alt={src} />
    </div>
  );
}

export default function Contact() {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
        <div className='absolute -left-20 top-0 h-full w-72 lg:left-20 lg:w-96 overflow-hidden hidden sm:block'>
          <ImageClipBox
            src='/img/contact-1.webp'
            clipClass='contact-clip-path-1'
          />

          <ImageClipBox
            src='/img/contact-2.webp'
            clipClass='contact-clip-path-2 translate-y-60 lg:translate-y-40'
          />
        </div>

        <div className='absolute -top-40 sm:top-1/2 lg:top-20 left-20 md:left-auto md:right-10 w-60 lg:w-80'>
          <ImageClipBox
            src='/img/swordman-partial.webp'
            clipClass='absolute md:scale-125'
          />

          <ImageClipBox
            src='/img/swordman.webp'
            clipClass='sword-man-clip-path md:scale-125 '
          />
        </div>

        <div className='flex flex-col items-center text-center'>
          <p className='font-general text-[10px] uppercase'>Join Zentry</p>

          <p className='special-font mt-10 w-full font-zentry text-5xl md:text-[6rem] leading-[0.9] mix-blend-exclusion'>
            Let's b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming
            together
          </p>

          <Button title='Contact us' containerClass='mt-10 cursor-pointer' />
        </div>
      </div>
    </div>
  );
}
