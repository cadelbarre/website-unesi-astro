import CounterItem from '../components/Counter/Counter'

const data = [{
    title: 'Conveniios',
    Value: '12'
},
{
    title: 'Años de Experiencia',
    Value: '22'
},
{
    title: 'Procedimientos Realizados',
    Value: '24000'
}
]

export default function KPI() {
  return (
    <section className="absolute z-10 bg-[#03588C] w-4/5 p-10 left-0 right-0 bottom-0 mx-auto rounded-lg shadow-lg shadow-sky-700/50 text-white">
      <div className="grid grid-cols-3">
        {
            data.map(({title, value} )=> <CounterItem title={title} value={value} key={title}/>)
        }
      </div>
    </section>
  )
}
