import React, { useState } from 'react'

//   <!-- -->

export default function Navbar() {
    const [show, setShow] = useState(false)

  return (
    <nav
    className="py-3 md:py-4 bg-white shadow-lg shadow-slate-200/40"
    role="navigation"
    aria-label="main navigation"
>
    <div className="wrapper flex justify-between items-center px-6 lg:px-0">
        <a href="/">
            <img src="/photos/logos/unesilogo.png" className="h-12 md:h-16" />
        </a>

        <div className="burger lg:hidden" onClick={() => setShow(prev => !prev)}>
            <button
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 outline-none ring-2 ring-gray-200"
            >
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
      
        <div
            className={`lg:relative lg:block z-20 rounded-b-lg bg-white p-10 shadow-lg md:shadow-none md:bg-transparent md:p-0 ${show ? 'right-0 top-16 w-3/4 absolute': 'hidden'}`} id='nav-burger'
        >
            <ul
                className="flex flex-col md:flex-row items-start md:items-center gap-y-6 md:gap-x-8 text-slate-600 font-light hover:[&>a]:text-[#03588C]"
            >
                <li><a href="/"> Inicio</a></li>
                <li><a href="/quienes-somos"> Quiénes Somos</a></li>
                <li><a href="/doctor"> Doctor</a></li>
                <li><a href="/contactanos"> Contactanos</a></li>
                <li>
                    <div className="cursor-pointer mt-2 md:mt-0">
                        <a
                            className="px-12 py-4 bg-[#03588C] text-white rounded-lg shadow-lg shadow-blue-500/20"
                        >
                            Agendar Cita
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>

  )
}
