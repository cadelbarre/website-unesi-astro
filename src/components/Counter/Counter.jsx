import { useEffect } from 'react'


export default function CounterItem ({ title, value } ) {
  const currentDate = (new Date()).getFullYear()

  const end = (title === 'Años de Experiencia') ? '22' : value


  useEffect(() => {
    const valueDisplays = document.querySelectorAll('.num')
    const interval = 4000

    console.log({valueDisplays})

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0
      const endValue = parseInt(valueDisplay.getAttribute('data-val'))
      const duration = Math.floor(interval / endValue)

      const counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = String(startValue)
        if (startValue === endValue) {
          clearInterval(counter)
        }
      }, duration)
    })
  }, [])

  return (
    <>
    <div className="text-center border-l first:border-0">
      <h2 className="text-5xl font-bold num" id={title} data-val={end}>
        {'0'.padStart(end?.length, '0')}
      </h2>
      <span className='font-light text-base'>{title}</span>
      </div>
    </>
  )
}