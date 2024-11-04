'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardContent, Card } from "@/components/ui/card"
import { CalendarDays, MessageCircle, UserPlus } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8F7]">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-[#F5C4C0]/20">
        <Link className="flex items-center justify-center gap-2" href="#">
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            className="text-[#1B365D]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" fill="#B7E4E7" />
            <path
              d="M50 15c-19.33 0-35 15.67-35 35s15.67 35 35 35 35-15.67 35-35S69.33 15 50 15zm0 60c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.215 25-25 25z"
              fill="#F5C4C0"
            />
            <path
              d="M65 45c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15z"
              fill="#1B365D"
            />
          </svg>
          <span className="text-xl font-bold text-[#1B365D]">DANA</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-[#1B365D] hover:text-[#1B365D]/80 hover:underline underline-offset-4" href="#">
            Inicio
          </Link>
          <Link className="text-sm font-medium text-[#1B365D] hover:text-[#1B365D]/80 hover:underline underline-offset-4" href="#">
            Servicios
          </Link>
          <Link className="text-sm font-medium text-[#1B365D] hover:text-[#1B365D]/80 hover:underline underline-offset-4" href="#">
            Profesionales
          </Link>
          <Link className="text-sm font-medium text-[#1B365D] hover:text-[#1B365D]/80 hover:underline underline-offset-4" href="#">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#B7E4E7]/20 to-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#1B365D] sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Consultas Profesionales para Madres y Bebés
                </h1>
                <p className="mx-auto max-w-[700px] text-[#1B365D]/80 md:text-xl">
                  Conectamos a madres con profesionales especializados para brindar el mejor cuidado y atención a sus bebés.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/registro">
                  <Button className="bg-[#1B365D] text-white hover:bg-[#1B365D]/90">Registrarse</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" className="border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D]/10">
                    Iniciar Sesión
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#B7E4E7]/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-[#1B365D] sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white/50 backdrop-blur-sm border-[#F5C4C0]/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <UserPlus className="h-12 w-12 text-[#1B365D]" />
                  <h3 className="text-xl font-bold text-[#1B365D]">Registro de Usuarios</h3>
                  <p className="text-center text-[#1B365D]/80">
                    Regístrate como madre o profesional y accede a nuestra plataforma de consultas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm border-[#F5C4C0]/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <MessageCircle className="h-12 w-12 text-[#1B365D]" />
                  <h3 className="text-xl font-bold text-[#1B365D]">Sistema de Consulta</h3>
                  <p className="text-center text-[#1B365D]/80">
                    Realiza consultas directas a profesionales especializados en diferentes áreas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm border-[#F5C4C0]/20">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <CalendarDays className="h-12 w-12 text-[#1B365D]" />
                  <h3 className="text-xl font-bold text-[#1B365D]">Gestión de Citas</h3>
                  <p className="text-center text-[#1B365D]/80">
                    Programa citas con los profesionales según tu disponibilidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-[#1B365D] sm:text-4xl md:text-5xl text-center mb-8">
              Únete a Nuestra Comunidad
            </h2>
            <Tabs defaultValue="mothers" className="w-full max-w-2xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-[#B7E4E7]/20">
                <TabsTrigger
                  value="mothers"
                  className="data-[state=active]:bg-[#F5C4C0] data-[state=active]:text-[#1B365D]"
                >
                  Para Madres
                </TabsTrigger>
                <TabsTrigger
                  value="professionals"
                  className="data-[state=active]:bg-[#F5C4C0] data-[state=active]:text-[#1B365D]"
                >
                  Para Profesionales
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mothers">
                <Card className="bg-white/50 backdrop-blur-sm border-[#F5C4C0]/20">
                  <CardContent className="space-y-4 p-6">
                    <h3 className="text-xl font-bold text-[#1B365D]">Registro para Madres</h3>
                    <p className="text-[#1B365D]/80">
                      Regístrate para acceder a consultas con profesionales especializados.
                    </p>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1B365D]">Nombre</Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre completo"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-[#1B365D]">Población</Label>
                        <Input
                          id="location"
                          placeholder="Tu ciudad o pueblo"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postal-code" className="text-[#1B365D]">Código Postal</Label>
                        <Input
                          id="postal-code"
                          placeholder="Tu código postal"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-[#1B365D]">Descripción de tu situación</Label>
                        <textarea
                          className="w-full h-24 px-3 py-2 text-sm rounded-md border border-[#F5C4C0]/20 focus:border-[#1B365D] focus:outline-none"
                          id="description"
                          placeholder="Describe brevemente tu situación o necesidades"
                          required
                        />
                      </div>
                      <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90" type="submit">
                        Registrarse como Madre
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="professionals">
                <Card className="bg-white/50 backdrop-blur-sm border-[#F5C4C0]/20">
                  <CardContent className="space-y-4 p-6">
                    <h3 className="text-xl font-bold text-[#1B365D]">Registro para Profesionales</h3>
                    <p className="text-[#1B365D]/80">
                      Únete a nuestra red de profesionales y ofrece tus servicios.
                    </p>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="pro-name" className="text-[#1B365D]">Nombre</Label>
                        <Input
                          id="pro-name"
                          placeholder="Tu nombre completo"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialty" className="text-[#1B365D]">Especialidad</Label>
                        <Input
                          id="specialty"
                          placeholder="Ej: Pediatra, Psicólogo"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-[#1B365D]">Años de Experiencia</Label>
                        <Input
                          id="experience"
                          type="number"
                          placeholder="Ej: 5"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education" className="text-[#1B365D]">Formación</Label>
                        <textarea
                          className="w-full h-24 px-3 py-2 text-sm rounded-md border border-[#F5C4C0]/20 focus:border-[#1B365D] focus:outline-none"
                          id="education"
                          placeholder="Describe tu formación académica"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="license" className="text-[#1B365D]">Número de Colegiado</Label>
                        <Input
                          id="license"
                          placeholder="Tu número de colegiado"
                          required
                          className="border-[#F5C4C0]/20 focus:border-[#1B365D]"
                        />
                      </div>
                      <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90" type="submit">
                        Registrarse como Profesional
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#F5C4C0]/20">
        <p className="text-xs text-[#1B365D]/60">© 2024  DANA. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-[#1B365D]/60 hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs text-[#1B365D]/60 hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}