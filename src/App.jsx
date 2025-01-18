
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState ('')
  const [clave, setclave] = useState ('')
  const [logueado, setlogueado] = useState (false)

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value)
  }

  function cambiarclave (evento) {
    setclave(evento.target.value)
  }
  function ingresar () {
    if (usuario == "admin" && clave == 'admin'){
      alert('ingresaste')
      setlogueado(true)
    } else{
      alert('usuario o clave incorrectas')
    }
}
if (logueado) {
  return (
    <>
    <center>
    <h1>Evolución de los lenguajes de programación: Inicio y actualidad</h1>
    </center>
    <p>cuando hablamos de lenguajes de programación, parece que estemos refiriéndonos a algo moderno, algo actual pero, 
    lo cierto es que el primer lenguaje de programación se creó hace más de dos siglos. No te lo esperabas, ¿Verdad? 
    En este post hacemos un repaso de la historia de los lenguajes de programación, desde el primero hasta los más 
    actuales y los lenguajes que más se utilizan ¡Continúa leyendo y descúbrelos!</p>
    <h2>Historia de los lenguajes de programación</h2>
    <h4>El primer lenguaje de programación</h4>
    <p>
    En 1801, un inventor francés, Joseph Marie Jacquard fue el inventor del telar programable.
    Jacquard creó unas tarjetas programables que se introducían en un telar que leía el código, 
    que contenía las instrucciones y, de esta forma, se automatizaba el proceso. 
    </p>
    <p>
    Esto permitió que cualquier persona que tuviera un telar y las tarjetas perforadas, pudieran 
    crear diferentes diseños de tejidos sin ser expertos en ello.
    </p>
    <h4>Ada Lovelace & Alan Turing </h4>
    <p>
    En 1842, Ada Lovelace, una mujer que había recibido formación exclusivamente en matemáticas, 
    se propuso traducir las memorias del matemático italiana Luigi Menabrea. Mientras realizaba
    esta labor, creó un lenguaje de programación a mano para calcular la serie de números de
    Bernoulli con la máquina de Babbage. Escribió el primer algoritmo informático de la Historia
    de la programación
    </p>
    <p>
    Hacemos un salto hasta 1936, en el que Alan Turing, un matemático e informático teórico que 
    revolucionó el mundo de la computación con la Máquina de Turing. Esta, demostraba que, con 
    un algoritmo, podían resolver cualquier problema matemático.
    </p>
    <h4>1957: el primer lenguaje de programación de verdad</h4>
    <p>
    En este año, John W.Backus, crea el primer lenguaje de programación de alto niveles y, el 
    primero que usaron programadores más cercanos a lo que conocemos hoy en día: Fortran.
    </p>
    <p>
    Fortran, se trata del lenguaje de programación más antiguo y que continúa en uso hoy en día. 
    Este lenguaje se sigue utilizando en la industria automovilística, gubernamental, aeroespacial
    y en la investigación. Por ejemplo, resulta muy eficaz para pronosticar el tiempo
    </p>
    <h4>1959: Cobol</h4>
    <p>
    Cobol (Common Business Oriented Language) se encuentra detrás de la mayor parte de sistemas de 
    transacciones de empresas, como los procesos de las tarjetas de crédito, telefonía, gobierno, 
    señales de tráfico, entre otros.
    </p>
    <p>
    Este lenguaje de programación, desarrollado por Grace Murray Hopper, es un lenguaje uniforme 
    para transacciones empresariales. El objetivo de su creación era desarrollar un lenguaje que 
    fuera compatible para cualquier ordenador.
    </p>
    <h4>1964: Basic</h4>
    <p>
    Desarrollado por alumnos de Darmouth College, Basic fue diseñado como un lenguaje simplificado 
    para aquellos que no contaban con grandes conocimientos técnicos o matemáticos. Una versión
    modificada de Basic, elaborada por Bill Gates y Paul Allen, fue el primer producto de Microsoft. 
    En 1977, Basic fue integrado en el Apple II para su puesta en marcha. 
    </p>
    <h4>1969: C</h4>
    <p>
    Este lenguaje de programación se desarrolló entre 1969 y 1973, por Dennis Ritchie para los 
    laboratorios Bell Telephone, con el objetivo de utilizarlos en el sistema Unix. C llegó a 
    ser tan potente que gran parte del núcleo de Unix se reescribió con C. De hecho, en la actualidad, 
    Linux sigue basado en C. 
    </p>

    <h4>1970 (Pascal)</h4>
                <p>
                Este lenguaje de programación se creó por Niklaus Wirth, que le puso en nombre “Pascal” en honor a 
                Blaise Pascar, el inventor de las calculadoras matemáticas. Este lenguaje se desarrolló como una 
                herramienta de enseñanza y formación, aunque su uso es comercial. Por ejemplo, es el lenguaje de 
                programación que se utiliza en Skype. 
                </p>

                <h4>1983: C++</h4>
                <p>
                En los mismos laboratorios Bells, Bjarne Stroustrup modificó el lenguaje C, por lo que surgió C++. 
                Este lenguaje de programación es uno de los más populares, y se encuentra en el Top Ten de los 
                lenguajes de programación desde 1986. Hoy en día se utiliza en Firefox, Adobe PDF Reader y Office. 
                </p>

                <h4>1987: Perl</h4>
                <p>
                Desarrollado por un programador de Unix, Larry Wall, Perl como solución a las flaquezas de Unix. 
                Actualmente, se utiliza en CraigList.
                </p>

                <h4>1991: Python</h4>
                <p>
                Guido Van Rossum fue el creador de este lenguaje de programación mundialmente reconocido. Fue 
                creado para resolver lenguajes en el lenguaje ABC y, hoy en día, se sigue utilizando con esta 
                finalidad y también, para más usos. La Nasa, Google y Youtube son algunas de las empresas que 
                lo utilizan.
                </p>

                <h4>1993: Ruby</h4>
                <p>
                  Este lenguaje fue creado por Yukihiro Matsumoto, que utilizó partes de sus lenguajes de 
                  programación preferidos: Perl, Smalltalk, Eiffel, Ada y Lisp. Ahora se utiliza por Basecamp.
                </p>

                <h4>1995: PHP, Java, JavaScript</h4>
                <p>
                  Este lenguaje de programación fue desarrollado por Rasmus Lerdoff para reemplazar unos scripts 
                  de Perl utilizados para el mantenimiento de su web personal. En la actualidad PHP es parte de 
                  una arquitectura web integrada en veinte millones de sitios web. Facebook utiliza este lenguaje 
                  hoy en día.
                </p>
                <p>
                En el mismo año, también se creó Java, por un grupo de trabajadores de Sun Microsystems, con el 
                objetivo de poner en marcha los decodificadores para una televisión interactiva. Actualmente, Java 
                está presente en más de mil millones de ordenadores en todo el mundo y, muchos sitios webs, no pueden 
                funcionar sin Java. 
                </p>
                <p>
                Por otro lado, se desarrolló JavaScript. Aunque compartan parte del nombre Java y JavaScript no están 
                relacionados, ya que tienen una semántica muy diferente. Este último fue creado por Brendan Eich, de 
                Netscape y, hoy en día, de este lenguaje de programación depende AJAX
                </p>

                <h4>2001: c#</h4>
                <p>
                  La llegada de los 2000, llegaron nuevos programas de programación, como C# y Visual Basic. Junto a 
                  los años noventa, C# culmina como el mejor momento de la historia respecto a los lenguajes de 
                  programación. C# es uno de los lenguajes de programación más importantes para crear programas de
                  todo tipo. 
                </p>
                
                <h4>2009: Go, de Google</h4>
                <p>
                  Se trata, nada más y nada menos, que el lenguaje de programación creado por Google. 2009, Go, 
                  de Google. Se inspira en C, pero es más complejo. Sigamos descubriendo más lenguajes que forman 
                  parte de la evolución de los lenguajes de programación.
                </p>

                <h4>2012: KOTLIN</h4>
                <p>
                  Hoy en día, este es uno de los lenguajes de programación de moda, no porque sea el más sencillo, 
                  sino que Google lo ha señalado como el lenguaje de programación óptimo para android.
                </p>
                <p>
                Aunque hay lenguajes que nos hems dejado por mencionar, estos son algunos clave que marcaron la 
                historia
                </p>
  </>
  )
}
    return (
    <>
    <h1>inicio sesion</h1>
    <input placeholder= 'usuario' type="text" name="usuario" id= "usuario" value={usuario} onChange={cambiarUsuario}/>
    <input placeholder= 'password' type="password" name="clave" id="clave"  value={clave} onChange={cambiarclave}/>
    <button onClick={ingresar}>ingresar</button>
    </>
    )

}
export default App
