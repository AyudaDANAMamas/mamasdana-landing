import Link from 'next/link'
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-pink-100 to-purple-100">
                <div className="container px-4 md:px-6">
                    <div
                        className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                        <div
                            className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-1/2">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Conecta a Mamás y Bebés con Profesionales de Salud de Confianza
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                                    Acceso rápido a psicólogos, pediatras, matronas y otros expertos para cuidar de los
                                    más
                                    pequeños, incluso
                                    en tiempos de crisis.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link href="https://t.me/AyudaDANA_Mamas_Valencia_bot">

                                    <Button className="bg-purple-600 text-white hover:bg-purple-700" size="lg">
                                        Únete Ahora
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/placeholder.svg?height=400&width=400" width={60} height={60} alt="Profesional de salud sonriente"
                                   className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="problem">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        El Desafío de la Accesibilidad a Servicios de Salud en Situaciones de Emergencia
                    </h2>
                    <p className="mt-4 text-gray-500 md:text-xl">
                        La reciente inundación del DANA ha dejado a muchas mamás con bebés sin acceso a los servicios de
                        salud
                        esenciales. La falta de comunicación rápida y accesible puede afectar el bienestar y la
                        tranquilidad de
                        las
                        familias.
                    </p>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32" id="specialties">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                        Especialidades Médicas Disponibles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Psicología Perinatal",
                            "Psicología Infantil",
                            "Pediatría",
                            "Matronas y Ginecología",
                            "Enfermería Pediátrica",
                            "Logopedia Neonatal",
                            "Fisioterapia Pediátrica y Respiratoria",
                            "Fisioterapia de Suelo Pélvico",
                            "Doulas",
                            "Asesoría de Lactancia",
                        ].map((specialty, index) => (
                            <Card key={index}>
                                <CardContent className="flex items-center p-6">
                                    <CheckCircle className="h-5 w-5 mr-2 text-green-500"/>
                                    <span>{specialty}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 to-pink-100"
                     id="benefits">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
                        Beneficios de Nuestra Plataforma
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Ponemos en contacto a mamás y bebés con especialistas en salud de manera rápida y sencilla, sin
                        complicaciones. Con nuestra plataforma:
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center">
                            <CheckCircle className="h-6 w-6 mr-2 text-green-500"/>
                            Acceso inmediato a especialistas en varias áreas de la salud materno-infantil.
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="h-6 w-6 mr-2 text-green-500"/>
                            Comunicación directa y organizada entre mamás y profesionales.
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="h-6 w-6 mr-2 text-green-500"/>
                            Gestión autónoma de solicitudes para una atención rápida y precisa.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32" id="how-it-works">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">¿Cómo
                        Funciona?</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Para Profesionales de la Salud</h3>
                            <ol className="space-y-4">
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">1.</span>
                                    Ponte en contacto con nuestro chatbot en Telegram.
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">2.</span>
                                    Responde las preguntas iniciales para registrarte como profesional.
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">3.</span>
                                    Serás añadido a un canal de Telegram donde encontrarás un chat para cada
                                    especialidad.
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">4.</span>
                                    Gestiona tus solicitudes de manera autónoma, aceptando y respondiendo a las mamás en
                                    tiempo
                                    real.
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Para Mamás</h3>
                            <ol className="space-y-4">
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">1.</span>
                                    Contacta con nuestro chatbot en Telegram.
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">2.</span>
                                    Responde a unas preguntas para confirmar que eres mamá.
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">3.</span>
                                    Con la información que nos proporcionas, crearemos una solicitud personalizada para
                                    el
                                    profesional
                                    adecuado.
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">4.</span>
                                    Cada vez que se actualiza una solicitud, los profesionales reciben notificaciones y
                                    pueden
                                    gestionarlas
                                    según la especialidad.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-100 to-purple-100">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            ¡No estás sola! Conecta ahora con un profesional de confianza.
                        </h2>
                        <Link href="https://t.me/AyudaDANA_Mamas_Valencia_bot">
                            <Button className="bg-purple-600 text-white hover:bg-purple-700" size="lg">
                                Inicia tu Consulta
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}