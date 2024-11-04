import Link from 'next/link'
import {Button} from "@/components/ui/button"

export default function Home() {
    return (
        <div className="m-auto container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter text-[#1B365D] sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Consultas Profesionales para Madres y Bebés
                    </h1>
                    <p className="mx-auto max-w-[700px] text-[#1B365D]/80 md:text-xl">
                        Conectamos a madres con profesionales especializados para brindar el mejor cuidado y atención a
                        sus bebés.
                    </p>
                </div>
                <div className="space-x-4">
                    <Link href="https://t.me/MamasDanaBot">
                        <Button className="bg-[#1B365D] text-white hover:bg-[#1B365D]/90">Registrarse</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}