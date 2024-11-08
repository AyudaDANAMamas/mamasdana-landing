// import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const specialties = [
    {
      label: "Psicólogia infantil",
    },
    {
      label: "Matronas y Ginecología",
    },
    {
      label: "Enfermería pediátrica",
    },
    {
      label: "Psicología perinatal",
    },
    {
      label: "Logopedia neonatal",
    },
    {
      label: "Fisioterapia pediátrica y respiratoria",
    },
    {
      label: "Pediatría",
    },
    {
      label: "Asesoras de lactancia",
    },
    {
      label: "Fisioterapia de suelo pélvico",
    },
    {
      label: "Doula",
    },
  ];

  return (
    <main>
      <section
        className="flex items-center justify-center backdrop-brightness-50 mx-auto w-full min-h-[100vh] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/banner-principal-flor-tierra.jpg')",
        }}
      >
        {/* Logo container - positioned at top */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <Image
            src="/logo-principal.svg"
            alt="Flores florecer"
            width={250}
            height={1}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex text-white flex-col items-center justify-center gap-4 w-full px-4 md:w-2/3 py-8">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl">
            Un espacio que conecta a mamás DANA con profesionales de la salud
            materno-infantil. Todo dentro de una comunidad acogedora y segura.
          </h1>
          <h2 className="text-center text-base sm:text-lg md:text-xl mb-4 font-sans">
            Psicólogas perinatales, pediatras, matronas, asesoras de lactancia y
            otras especialistas atendiendo a las madres y sus bebés en la crisis
            DANA a través de consultas online gratuitas 24h.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-florecer hover:bg-esperanza rounded-full text-white whitespace-normal sm:whitespace-nowrap text-sm sm:text-base"
            >
              SOY PROFESIONAL VOLUNTARIO
            </Button>
            <Button className="bg-refugio hover:bg-esperanza text-white rounded-full whitespace-normal sm:whitespace-nowrap text-sm sm:text-base">
              SOY MAMÁ DANA
            </Button>
          </div>i
        </div>
      </section>
      <section className="w-full bg-white">
        <div className="w-full md:w-2/4 mx-auto flex flex-col justify-center items-center gap-4 p-6 md:py-20">
          <h2 className="text-center text-2xl text-barro">
            El desafío de la accesibilidad a servicios de salud para las
            embarazadas, madres y bebés en situaciones de emergencia.
          </h2>
          <p className="text-center font-sans">
            La reciente inundación del DANA ha afectado profundamente a muchas
            mujeres embarazadas, madres y sus bebés, dejándolas sin acceso a
            servicios de salud esenciales. Por eso hemos creado este espacio en
            mamásDANA, para seguir apoyando a las madres y sus bebés en este
            momento tan crítico. Estamos aquí para cuidar de ellas, porque
            sabemos que lo necesitan más que nunca.
          </p>
        </div>

        <div className="w-full">
          <div className="flex justify-center w-full pt-8">
            <Image
              src="/flores-florecer.svg"
              alt="Flores florecer"
              width={60}
              height={1}
              className="object-contain"
              priority
            />
          </div>

          <div className="bg-neutro w-full py-10 md:py-20 px-4">
            <h2 className="text-center text-4xl text-barro mb-10">
              <span className="italic font-semibold">Especialidades</span> médicas a tu disposición
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 w-full max-w-6xl mx-auto">
              {specialties.map((especiality) => (
                <div
                  key={especiality.label}
                  className="bg-calma hover:bg-calma rounded-full text-black p-3 flex justify-center items-center text-center"
                >
                  {especiality.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="container mx-auto py-10 md:py-20">
          <div className="w-full px-4 md:w-2/4 mx-auto flex flex-col justify-center items-center gap-4 mb-12">
            <h2 className="text-center text-4xl text-barro">
            <span className="italic font-semibold">Beneficios</span> de este espacio
            </h2>
            <p className="text-center font-sans">
              Ponemos en contacto a mamás y bebés con especialistas en salud de
              manera rápida y sencilla, sin complicaciones.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-4">
            <div className="w-full md:w-[300px] flex items-center justify-center gap-4 relative bg-neutro rounded-3xl p-6 z-10">
              <Image
                src="/rayos-sol-esperanza.svg"
                alt="Flores florecer"
                width={100}
                height={1}
                className="object-contain absolute -top-14 -left-14 hidden md:block"
                priority
              />
              Acceso inmediato a especialistas en varias áreas de la salud
              materno-infantil.
            </div>
            <div className="w-full md:w-[300px] flex items-center justify-center gap-4 relative bg-neutro rounded-3xl p-6 z-10 md:mt-[72px]">
              <Image
                src="/rayos-sol-esperanza.svg"
                alt="Flores florecer"
                width={100}
                height={1}
                className="object-contain absolute -bottom-14 -right-14 rotate-180 hidden md:block"
                priority
              />
              Comunicación directa y organizada entre mamás y profesionales.
            </div>
            <div className="w-full md:w-[300px] flex items-center justify-center gap-4 relative bg-neutro rounded-3xl p-6 z-10">
              <Image
                src="/rayos-sol-esperanza.svg"
                alt="Flores florecer"
                width={100}
                height={1}
                className="object-contain absolute -top-14 -right-14 rotate-90 hidden md:block"
                priority
              />
              Gestión autónoma de solicitudes para una atención rápida y
              precisa.
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full">
        {/* Logo for desktop - moved higher up */}
        <div className="hidden md:block absolute left-1/2 -top-10 -translate-x-1/2 z-20">
          <Image
            src="/como_hacer.png"
            alt="Flores florecer"
            width={100}
            height={1}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row w-full">
          {/* Left section */}
          <div className="w-full md:w-1/2 bg-calma p-6 md:p-20">
            <div className="flex flex-col gap-y-6">
              {/* Logo for mobile + title */}
              <div className="flex flex-col items-center md:items-start gap-4 mb-10">
                <Image
                  src="/como_hacer.png"
                  alt="Flores florecer"
                  width={100}
                  height={1}
                  className="object-contain mb-4 md:hidden"
                  priority
                />
                <h2 className="text-4xl text-florecer text-center md:text-left md:mt-24">
                  Profesionales <br /> <span className="italic">sanitarios</span>
                </h2>
              </div>

              <div className="flex items-center gap-x-6">
                <div className="text-florecer text-4xl">1</div>
                <div className="text-florecer text-xl">
                  Ponte en contacto con nuestro <br />
                  <p className="text-refugio">chatbot en Telegram.</p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <div className="text-florecer text-4xl">2</div>
                <div className="text-florecer text-xl">
                  Responde las preguntas iniciales para <br />
                  <p className="font-semibold italic">
                    registrarte como profesional.
                  </p>
                </div>
              </div>
              <div className="flex item-center gap-x-6">
                <div className="text-florecer text-4xl">3</div>
                <div className="text-florecer text-xl">
                  Serás añadido a un{" "}
                  <span className="font-semibold italic">
                    canal de Telegram
                  </span>{" "}
                  donde encontrarás un chat para cada especialidad.
                </div>
              </div>
              <div className="flex item-center gap-x-6">
                <div className="text-florecer text-4xl">4</div>
                <div className="text-florecer text-xl">
                  <span className="font-semibold italic">
                    ¡Empieza a ayudar!
                  </span>{" "}
                  Gestiona tus solicitudes de manera autónoma, aceptando y
                  respondiendo a las mamás en tiempo real
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-florecer p-6 md:p-20">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-4xl text-white mb-10 text-center md:text-left md:mt-24">
              <span className="italic">Mamás</span>
                <br /> DANA
              </h2>

              <div className="flex items-center gap-x-6 text-white">
                <div className="text-4xl">1</div>
                <div className="text-xl">
                  Ponte en contacto con nuestro <br />
                  <p className="text-esperanza">chatbot en Telegram.</p>
                </div>
              </div>
              <div className="flex items-center gap-x-6 text-white">
                <div className="text-4xl">2</div>
                <div className="text-xl">
                  Responde a unas preguntas para <br />
                  <p className="font-semibold italic">
                    confirmar que eres mamá.
                  </p>
                </div>
              </div>
              <div className="flex item-center gap-x-6 text-white">
                <div className="text-4xl">3</div>
                <div className="text-xl">
                  Con la información que nos proporcionas, crearemos una
                  solicitud personalizada para el profesional adecuado.
                </div>
              </div>
              <div className="flex item-center gap-x-6 text-white">
                <div className="text-4xl">4</div>
                <div className="text-xl">
                  Cada vez que se actualiza una solicitud, los profesionales
                  reciben notificaciones y pueden gestionarlas según la
                  especialidad.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex items-center justify-center backdrop-brightness-50 mx-auto"
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/mama_banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex text-white  flex-col items-center justify-center gap-4 w-2/3">
          <h1 className="text-center text-4xl">¡No estás sola mamá!</h1>
          <h2 className="text-center text-xl mb-4">
            Aquí encontrarás tu refugio de profesionales disponibles para
            brindarte su apoyo y cuidado el tiempo que lo necesites.
          </h2>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-esperanza hover:bg-refugio rounded-full text-white"
            >
              NECESITO AYUDA
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
