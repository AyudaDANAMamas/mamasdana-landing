import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TermsCookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-barro text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">
            Política de Cookies - MamásDANA
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-4">
          <p>
            <strong>¿Qué son y para qué las utilizamos?</strong>
          </p>
          <p>
            Este sitio web, al igual que la mayoría de sitios web en Internet,
            utiliza cookies para mejorar la experiencia del usuario. A
            continuación, encontrará información sobre qué son las cookies, qué
            tipo de cookies utiliza este portal, como puede desactivar las
            cookies en su navegador y como desactivar específicamente la
            instalación de las cookies de terceros.
          </p>
          <p>
            <strong>¿Qué son las cookies?</strong>
          </p>
          <p>
            Las cookies son pequeños archivos que algunas plataformas, como las
            páginas web, pueden instalar en su ordenador, teléfono inteligente,
            tableta o televisión conectada. Sus funciones pueden ser muy
            variadas: almacenar sus preferencias de navegación, recopilar
            información estadística, permitir ciertas funcionalidades técnicas,
            etcétera. A veces, las galletas se utilizan para almacenar
            información básica sobre los hábitos de navegación del usuario o de
            su equipo, hasta el punto, según los casos, de poder reconocerlo.
          </p>
          <p>
            <strong>¿Por qué son importantes?</strong>
          </p>
          <p>
            Las cookies son útiles para diversos motivos. Desde un punto de
            vista técnico, permiten que las páginas web funcionen de forma más
            ágil y adaptada a sus preferencias, tales como almacenar su idioma o
            la moneda de su país. Además, ayudan a los responsables de los
            sitios web a mejorar los servicios que ofrecen, gracias a la
            información estadística que recogen a través de ellas.
          </p>
          <p>
            <strong>
              Tipología, Finalidad y Funcionamiento de los Cookies
            </strong>
          </p>
          <p>
            Las cookies, en función de su permanencia, pueden dividirse en
            cookies de sesión o permanentes. Las primeras expiran cuando el
            usuario cierra el navegador. Las segundas expiran en función cuando
            se cumpla el objetivo para el que sirven (por ejemplo, para que el
            usuario se mantenga identificado en las páginas de www.mamasdana.es)
            o bien cuando se borran manualmente.
          </p>
          <p>
            Adicionalmente, en función de su objetivo, las cookies puedes
            clasificarse de la siguiente manera:
          </p>
          <p>
            <strong>Cookies de Rendimiento:</strong> Este tipo de cookie
            recuerda tus preferencias para las herramientas que se encuentran en
            las páginas, por lo que no hay que volver a configurar cada vez que
            la visitas. A modo de ejemplo, en esta tipología se incluyen:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Ajustes de volumen de reproductores de vídeo o sonido.</li>
            <li>
              Las velocidades de transmisión de vídeo compatibles con su
              navegador.
            </li>
          </ul>

          <p>
            <strong>Cookies de Geolocalización</strong>: Estas cookies son
            utilizadas para averiguar en qué país te encuentras cuando se navega
            por la web. Esta cookie es totalmente anónima, y sólo se utiliza
            para ayudar a orientar el contenido a tu ubicación.
          </p>
          <p>
            <strong>Cookies de Registro: </strong>Las cookies de registro se
            generan una vez que el usuario se ha registrado o posteriormente
            comenzó la sesión, y se utilizan para identificarlo en las páginas
            con los siguientes objetivos:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>
              Mantener el usuario identificado de manera que, si cierra una
              página, el navegador o el ordenador y en otro momento u otro día
              vuelve a entrar en esta página, seguirá identificado, facilitando
              así su navegación sin tener que volver a identificarse. Esta
              funcionalidad se puede suprimir si el usuario pulsa la
              funcionalidad &quot;cerrar sesión&quot;, por lo que esta cookie se
              elimina y la próxima vez que entre en la página el usuario deberá
              iniciar sesión para estar identificado.
            </li>
            <li>
              Comprobar si el usuario está autorizado para acceder a ciertas
              páginas, por ejemplo, para participar en un concurso.
            </li>
            <li>
              Adicionalmente, algunas páginas pueden utilizar conectores con
              redes sociales como Facebook, Instagram, Youtube o Twitter. Cuando
              el usuario se registra en una página con credenciales de una red
              social, autoriza a la red social a guardar una cookie persistente
              que recuerda su identidad y le garantiza acceso a las páginas
              hasta que expira. El usuario puede borrar esta cookie y revocar el
              acceso a las páginas a través de redes sociales actualizando sus
              preferencias en la red social que específica.
            </li>
          </ul>

          <p>
            <strong>Cookies de Analíticas: </strong>Cada vez que un usuario
            visita una página, una herramienta de un proveedor externo (en
            nuestro caso Google Analytics) genera una cookie analítica en el
            ordenador del usuario. Esta cookie que sólo se genera en la visita,
            servirá en futuras visitas a las páginas de www.mamasdana.es para
            identificar de forma anónima al visitante. Los objetivos principales
            que se persiguen son:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>
              Permitir la identificación anónima de los usuarios navegantes a
              través de la &quot;cookie&quot; (identifica navegadores y
              dispositivos, no personas) y por tanto la contabilización
              aproximada del número de visitantes y su tendencia en el tiempo.
            </li>
            <li>
              Identificar de forma anónima los contenidos más visitados y por lo
              tanto más atractivos para los usuarios.
            </li>
            <li>
              Saber si el usuario que está accediendo es nuevo o repite visita.
            </li>
          </ul>

          <p>
            <strong>Importante: </strong>A menos que el usuario decida
            registrarse en la web de www.mamasdana.es, la &quot;cookie&quot;
            nunca irá asociada a ningún dato de carácter personal que pueda
            identificarlo. Estas cookies sólo serán utilizadas con propósitos
            estadísticos que ayuden a la optimización de la experiencia de los
            usuarios en el sitio.
          </p>

          <p>
            <strong>Otras cookies de terceros</strong>
          </p>
          <p>
            En algunas de nuestras páginas se pueden instalar cookies de
            terceros que permitan gestionar y mejorar los servicios que éstos
            ofrecen. Un ejemplo de este uso son los enlaces a las redes sociales
            que permiten compartir nuestros contenidos.
          </p>

          <p>
            <strong>¿Cómo puedo configurar mis preferencias?</strong>
          </p>
          <p>
            Puede permitir, bloquear o eliminar las cookies instaladas en su
            equipo mediante la configuración de las opciones de su navegador de
            internet. En el caso en que las bloquee, es posible que ciertos
            servicios que necesitan su uso no estén disponibles para usted.
          </p>

          <p>
            <strong>Utilización de Cookies</strong>
          </p>
          <p>
            Las cookies son ficheros enviados a un navegador por medio de un
            servidor web para registrar las actividades del usuario en una web
            determinada. La primera finalidad de las cookies es la de facilitar
            al usuario un acceso más rápido a las páginas seleccionadas.
          </p>
          <p>
            La web www.mamasdana.es utiliza cookies para personalizar y
            facilitar al máximo la navegación del usuario. Las cookies se
            asocian únicamente a un usuario anónimo y su ordenador y no
            proporcionan referencias que permitan deducir datos personales del
            usuario. El usuario podrá configurar su navegador para que notifique
            y rechace la instalación de las cookies enviadas por la web de
            www.mamasdana.es, sin que ello perjudique la posibilidad del usuario
            de acceder a los contenidos. Sin embargo, te hacemos notar que, en
            todo caso, la calidad de funcionamiento de la página web puede
            disminuir.
          </p>
          <p>
            Asimismo, la web de www.mamasdana.es podrá saber todas las páginas
            visitas por los usuarios, por lo que podrá facilitar u ofrecer
            información adecuada a los gustos y preferencias de cada usuario.
          </p>
          <p>
            <strong>
              Como desactivar las Cookies los principales navegadores
            </strong>
          </p>
          <p>
            Normalmente es posible dejar de aceptar las cookies del navegador, o
            dejar de aceptar las cookies de una página en particular.
          </p>
          <p>
            Todos los navegadores modernos permiten cambiar la configuración de
            cookies. Este ajuste normalmente se encuentra en las
            &quot;Opciones&quot; o &quot;Preferencias&quot; del menú de su
            navegador.
          </p>
          <p>
            La web de www.mamasdana.es ofrecen orientación al usuario sobre los
            pasos para acceder al menú de configuración de las cookies y, si
            procede, de la navegación privada en cada uno de los navegadores
            principales:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>
              Internet Explorer: Herramientas -&gt; Opciones de Internet -&gt;
              Privacidad -&gt; Configuración.
            </li>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>
                Para más información, puede consultar el apoyo de Microsoft o la
                Ayuda del navegador.
              </li>
            </ul>
            <li>
              Firefox: Herramientas -&gt; Opciones -&gt; Privacidad -&gt;
              Histórico -&gt; Configuración Personalizada.
            </li>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>
                Para más información, puede consultar el apoyo de Mozilla o la
                Ayuda del navegador.
              </li>
            </ul>
            <li>
              Chrome: Configuración -&gt; Mostrar opciones avanzadas -&gt;
              Privacidad -&gt; Configuración de contenido.
            </li>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>
                Para más información, puede consultar el apoyo de Google o la
                Ayuda del navegador.
              </li>
            </ul>
            <li>Safari: Preferencias -&gt; Seguridad.</li>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
              <li>
                Para más información, puede consultar el apoyo de Apple o la
                Ayuda del navegador<strong>.</strong>
              </li>
            </ul>
          </ul>

          <p>
            <strong>Qué pasa si se desactivan las cookies</strong>
          </p>
          <p>
            Algunas funcionalidades de las páginas quedarán desactivadas como,
            por ejemplo, permanecer identificado, recibir información dirigida a
            su localización o la visualización de algunos vídeos.
          </p>
          <p>
            <strong>Actualización y cambios en la política de Cookies</strong>
          </p>
          <p>
            La web de www.mamasdana.es puede modificar esta Política de Cookies
            en función de exigencias legislativas, reglamentarias, o con el fin
            de adaptar esta política a las instrucciones dictadas por la Agencia
            Española de Protección de Datos, por ello se aconseja a los usuarios
            que la visiten periódicamente.
          </p>
          <p>
            Cuando se produzcan cambios significativos en esta Política de
            Cookies, se comunicarán a los usuarios mediante la web.
          </p>
          <p>
            Respecto de las cookies de terceros, es decir aquellas que son
            ajenas a nuestro sitio web, no podemos hacernos responsables del
            contenido y veracidad de las políticas de privacidad que ellos
            incluyen por lo que la información que le ofrecemos es siempre con
            referencia a la fuente.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="bg-refugio hover:bg-refugio text-white rounded-full whitespace-normal sm:whitespace-nowrap text-sm sm:text-base">
            <Link href="/">Volver a la Página Principal</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
