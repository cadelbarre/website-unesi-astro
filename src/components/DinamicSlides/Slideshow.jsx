import { useEffect, useRef } from 'react'


export default function Slideshow ({ images = [], className = '', disabledButtons = false }) {
  const slides = useRef(null)
  const intervalSlide = useRef(0)
  const arrowSlide = useRef(null)

  const next = () => {
    const refSlide = slides.current
    if (refSlide?.children.length === 0) return

    let firstElement
    const childrenSlide = refSlide?.children[0]
    const widthOfSlide = childrenSlide.offsetWidth

    if (refSlide !== null) {
      refSlide.style.transition = '800ms ease-out all'
      refSlide.style.transform = `translateX(-${widthOfSlide}px)`
    }

    const moveSlide = () => {
      if (refSlide !== null) {
        firstElement = refSlide.children[0]
        refSlide.style.transition = 'none'
        refSlide.style.transform = 'translateX(0)'
        refSlide.appendChild(firstElement)
        refSlide.removeEventListener('transitionend', moveSlide)
      }
    }

    refSlide?.addEventListener('transitionend', moveSlide)
  }

  const before = () => {
    const refSlide = slides.current
    if (refSlide?.children.length === 0) return

    if (refSlide !== null) {
      const index = refSlide.children.length - 1
      const lastElement = refSlide.children[index]
      refSlide.insertBefore(lastElement, refSlide.firstChild)

      refSlide.style.transition = 'none'
      const childrenSlide = refSlide?.children[0]
      const widthOfSlide = childrenSlide.offsetWidth
      refSlide.style.transform = `translateX(-${widthOfSlide}px)`

      setTimeout(() => {
        refSlide.style.transition = '800ms ease-out all'
        refSlide.style.transform = 'translateX(0)'
      }, 30)
    }
  }

  useEffect(() => {
    intervalSlide.current = setInterval(() => {
      next()
    }, 5000)
  }, [])

  return (
    <section className={`overflow-hidden lg:min-w-5xl relative ${className}`}>
      <section className='w-full flex flex-nowrap h-full' ref={slides}>
        {
          images.map((img) => {
            return (
              <img src={img} alt={img} loading='lazy' key={img} className='min-w-[100%] lg:min-h-[500px] object-center object-cover h-full w-full' />
            )
          })
        }
      </section>

      <div className={`flex justify-between items-center absolute top-0 w-full h-full  ${disabledButtons ? 'invisible opacity-0' : ''}`} ref={arrowSlide}>
        <button className='cursor-pointer bg-slate-200/50 rounded-full transition ease-out duration-300 hover:scale-110 ml-3 rotate-180' onClick={before}>
          <svg viewBox='0 0 24 24' fill='#1F2937' className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 '>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z' />
          </svg>
        </button>
        <button className='cursor-pointer bg-slate-200/50 rounded-full transition ease-out duration-300 hover:scale-110 mr-3' onClick={next}>
          <svg viewBox='0 0 24 24' fill='#1F2937' className='lg:w-10 lg:h-10 w-6 h-6'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z' />
          </svg>
        </button>
      </div>
    </section>
  )
}
