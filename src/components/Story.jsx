'use client';

import gsap from 'gsap';
import { useRef } from 'react';

import AnimatedTitle from '@/components/AnimatedTitle';
import RoundedCorners from '@/components/RoundedCorners';
import Button from '@/components/Button';

export default function Story() {
  const frameRef = useRef('null');

  const handleMouseLeave = (e) => {
    if (!frameRef.current) return;

    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inout',
    });
  };

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;

    const { clientX, clientY } = e;

    const element = frameRef.current;

    const { left, top, width, height } = element.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inout',
    });
  };

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
      <div className='size-full flex flex-col items-center py-10 pb-24'>
        <p className='font-general text-sm md:text-[10px] uppercase'>
          the multiversal ip world
        </p>

        <div className='relative size-full'>
          <AnimatedTitle
            title='The st<b>o</b>ry of <br/> a hidden real<b>m</b>'
            sectionId='#story'
            containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
          />

          <div className='story-img-container'>
            <div className='story-img-mask'>
              <div className='story-img-content'>
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src='/img/entrance.webp'
                  alt='entrance'
                  className='object-contain'
                />
              </div>
            </div>

            <RoundedCorners />
          </div>
        </div>

        <div className='-mt-80 md:-mt-64 md:me-44 flex w-full justify-center md:justify-end'>
          <div className='h-full w-fit flex flex-col items-center md:items-start'>
            <p className='mt-3 max-w-sm text-center md:text-start font-circular-web text-violet-50'>
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id='realm-button'
              title='Discover Prologue'
              containerClass='mt-5'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
