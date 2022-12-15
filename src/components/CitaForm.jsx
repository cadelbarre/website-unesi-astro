import { useForm } from "react-hook-form";

export function CitaForm(){
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div
        className="relative -top-24 wrapper bg-white border border-slate-300 shadow-lg hover:shadow-blue-300/20 py-5 px-6 sm:py-16 sm:px-20 rounded-lg"
    >
        <h1 className="text-xl sm:text-3xl md:text-4xl w-5/6 sm:w-3/4 md:w-1/2 font-semibold text-slate-800">
            Déjenos sus datos y nos pondremos en contacto con Usted
        </h1>
        <h3 className="text-slate-500 font-light mt-1">
            Su cita será confirmada a través de una llamada telefónica
        </h3>
        <fieldset disabled={isSubmitting}>
        <form className="mt-8 flex flex-col gap-y-5 font-light" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6 justify-between">
                <label className="flex flex-col w-full">
                    Nombre Completo
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="border border-slate-300 rounded-md px-3 py-2 w-full mt-1"
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && <span className="text-red-500 text-sm">Este campo es requerido.</span>}
                </label>
                <label className="flex flex-col w-full">
                    Asunto
                    <input
                        type="text"
                        name="asunto"
                        id="asunto"
                        className="border border-slate-300 rounded-md px-3 py-2 w-full mt-1"
                        {...register("asunto", { required: true })}
                    />
                    {errors.asunto && <span className="text-red-500 text-sm">Este campo es requerido.</span>}
                </label>
            </div>
            <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-6 justify-between">
                <label className="flex flex-col w-full">
                    Telefóno ó celular de contacto
                    <input
                        type="text"
                        name="telefono"
                        id="telefono"
                        className="border border-slate-300 rounded-md px-3 py-2 w-full mt-1"
                        {...register("telefono", { required: true })}
                    />
                    {errors.telefono && <span className="text-red-500 text-sm">Este campo es requerido.</span>}
                </label>
                <label className="flex flex-col w-full">
                    Correo Electrónico
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        className="border border-slate-300 rounded-md px-3 py-2 w-full mt-1"
                        {...register("correo", { required: true })}
                    />
                    {errors.correo && <span className="text-red-500 text-sm">Este campo es requerido.</span>}
                </label>
            </div>

            <label className="flex flex-col w-full">
                Mensaje
                <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="10"
                    rows="5"
                    className="border border-slate-300 rounded-md px-3 py-2 w-full mt-1"
                    {...register("descripcion", { required: true })}
                ></textarea>
                {errors.descripcion && <span className="text-red-500 text-sm">Este campo es requerido.</span>}
            </label>

            <button
                type="submit"
                className="px-12 py-4 bg-[#03588C] text-white rounded-lg shadow-lg transition duration-300 ease-in-out shadow-blue-500/20 hover:-translate-y-1 self-center"
                >Enviar Mensaje</button
            >
        </form>
        </fieldset>
    </div>
    )
}