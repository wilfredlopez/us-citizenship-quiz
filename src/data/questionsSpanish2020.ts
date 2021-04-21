import { QuestionContructor, Question } from '../model/Question'

const esQuestionsConstructor: QuestionContructor[] = [
    {
        "text": "¿Cuál es la ley suprema del país?",
        "correctAnswers": ["la constitución"],
        "options": [
            "la Constitución",
            "el Congreso",
            "todos deben obedecer la ley",
            "la primera enmienda"
        ],
        "number": 1
    },
    {
        "text": "¿Qué hace la Constitución?",
        "correctAnswers": [
            "establece el gobierno",
            "define el gobierno",
            "Protege los derechos básicos de los americanos"
        ],
        "options": [
            "establece el gobierno",
            "establece los tipos impositivos",
            "cumple un mandato de 2 años",
            "protege los derechos de los residentes"
        ],
        "number": 2
    },
    {
        "text": "La idea de autogobierno está en las tres primeras palabras de la Constitución. ¿Cuáles son estas palabras?",
        "correctAnswers": ["nosotros la gente"],
        "options": [
            "nosotros la gente",
            "libertad de expresión",
            "Imperio de la ley",
            "la primera enmienda"
        ],
        "number": 3
    },
    {
        "text": "¿Qué es una enmienda?",
        "correctAnswers": [
            "un cambio a la Constitución)",
            "una adición (a la constitución)"
        ],
        "options": [
            "un cambio a la Constitución)",
            "una ley federal",
            "el presidente de los Estados Unidos.",
            "libertad de religión."
        ],
        "number": 4
    },
    {
        "text": "¿Cómo llamamos a las diez primeras enmiendas a la Constitución?",
        "correctAnswers": ["la declaración de derechos"],
        "options": [
            "la declaración de derechos",
            "La declaración de independencia",
            "la primera enmienda",
            "el poder legislativo"
        ],
        "number": 5
    },
    {
        "text": "¿Cuál es un derecho o una libertad de la Primera Enmienda?",
        "correctAnswers": [
            "discurso",
            "religión",
            "montaje",
            "prensa",
            "petición el Gobierno"
        ],
        "options": ["religión", "impuestos", "portar armas", "vida"],
        "number": 6
    },
    {
        "text": "¿Cuántas enmiendas tiene la Constitución?",
        "correctAnswers": ["veintisiete (27)", "27", "veintisiete"],
        "options": [
            "veintisiete (27)",
            "diecisiete (17)",
            "treinta y cinco (35)",
            "diez (10)"
        ],
        "number": 7
    },
    {
        "text": "¿Qué hizo la Declaración de Independencia?",
        "correctAnswers": [
            "anunció nuestra independencia (de gran bretaña)",
            "declaró nuestra independencia (de gran bretaña)",
            "dijo que estados unidos es libre (de gran bretaña)"
        ],
        "options": [
            "anunció nuestra independencia (de gran bretaña)",
            "estableció el gobierno estadounidense",
            "protege 27 derechos de los estadounidenses",
            "es la ley suprema del país"
        ],
        "number": 8
    },
    {
        "text": "¿Cuáles son dos derechos en la Declaración de Independencia?",
        "correctAnswers": [
            "la vida",
            "libertad",
            "búsqueda de la felicidad",
            "vida y libertad"
        ],
        "options": [
            "vida y libertad",
            "felicidad y libertad",
            "portar armas y educación",
            "religión y prensa"
        ],
        "number": 9
    },
    {
        "text": "¿Qué es la libertad de religión?",
        "correctAnswers": [
            "puedes practicar cualquier religión, o no practicar una religión"
        ],
        "options": [
            "puedes practicar cualquier religión, o no practicar una religión",
            "debes practicar una religión de tu elección.",
            "todas las religiones están permitidas en las escuelas y los tribunales",
            "los estados pueden determinar sus propias leyes sobre los derechos religiosos"
        ],
        "number": 10
    },
    {
        "text": "¿Cuál es el sistema económico de Estados Unidos? *",
        "correctAnswers": ["economía capitalista", "economía de mercado"],
        "options": [
            "economía capitalista",
            "comunismo",
            "economía feudal",
            "comercio y trueque"
        ],
        "number": 11
    },
    {
        "text": "¿Qué es el “estado de derecho”?",
        "correctAnswers": [
            "Todos deben seguir la ley.",
            "los líderes deben obedecer la ley.",
            "el gobierno debe obedecer la ley",
            "Nadie está por encima de la ley. "
        ],
        "options": [
            "Todos deben seguir la ley.",
            "la constitución y declaración.",
            "leyes federales",
            "cambios a la constitución"
        ],
        "number": 12
    },
    {
        "text": "Nombra una rama o parte del gobierno. *",
        "correctAnswers": [
            "congreso",
            "legislativo",
            "presidente",
            "ejecutivo",
            "Los tribunales",
            "judicial"
        ],
        "options": ["congreso", "estados", "leyes", "declaraciones"],
        "number": 13
    },
    {
        "text": "¿Qué impide que una rama del gobierno se vuelva demasiado poderosa?",
        "correctAnswers": ["controles y contrapesos", "separación de poderes"],
        "options": [
            "separación de poderes",
            "debido al proceso",
            "habeus corpus",
            "derechos y libertades"
        ],
        "number": 14
    },
    {
        "text": "¿Quién está a cargo del poder ejecutivo?",
        "correctAnswers": ["el presidente"],
        "options": [
            "el presidente",
            "el Congreso",
            "La Suprema Corte",
            "El vocero de la casa"
        ],
        "number": 15
    },
    {
        "text": "¿Quién hace las leyes federales?",
        "correctAnswers": [
            "congreso",
            "Senado y la Cámara de representantes)",
            "Legislatura (estadounidense o nacional)"
        ],
        "options": [
            "congreso",
            "el presidente",
            "jueces de la corte suprema",
            "nosotros la gente"
        ],
        "number": 16
    },
    {
        "text": "¿Cuáles son las dos partes del Congreso de los Estados Unidos? *",
        "correctAnswers": ["el senado y la cámara de representantes"],
        "options": [
            "el Senado y la Cámara de representantes",
            "poderes legislativo y ejecutivo",
            "hacer e interpretar leyes",
            "el presidente y el vicepresidente"
        ],
        "number": 17
    },
    {
        "text": "¿Cuántos senadores estadounidenses hay?",
        "correctAnswers": ["cien (100)", "100", "cien"],
        "options": [
            "cien (100)",
            "cuatrocientos treinta y cinco (435)",
            "veintisiete (27)",
            "doscientos (200)"
        ],
        "number": 18
    },
    {
        "text": "¿Elegimos un senador de los Estados Unidos durante cuántos años?",
        "correctAnswers": ["seis (6)", "seis", "6"],
        "options": ["seis (6)", "cuatro (4)", "dos (2)", "ocho (8)"],
        "number": 19
    },
    {
        "text": "¿Quién es uno de los senadores estadounidenses de su estado ahora? * (NJ)",
        "correctAnswers": ["robert menendez", "cory a. booker", "cory booker"],
        "options": [
            "robert menendez",
            "donald trump",
            "paul ryan",
            "nancy pelosa"
        ],
        "type": "input",
        "tip": "Las respuestas variarán. Visite senate.gov para encontrar los senadores de los Estados Unidos de su estado.",
        "number": 20
    },
    {
        "text": "¿Cuántos miembros votantes tiene la Cámara de Representantes?",
        "correctAnswers": ["cuatrocientos treinta y cinco (435)"],
        "options": [
            "cuatrocientos treinta y cinco (435)",
            "cien (100)",
            "cincuenta (50)",
            "veintisiete (27)"
        ],
        "number": 21
    },
    {
        "text": "¿Elegimos un representante de los Estados Unidos durante cuántos años?",
        "correctAnswers": ["dos (2)"],
        "options": ["dos (2)", "cuatro (4)", "seis (6)", "ocho (8)"],
        "number": 22
    },
    {
        "text": "Nombre a su representante en los EE. UU. (Garfield, NJ)",
        "correctAnswers": ["bill pascrell jr.", "bill pascrell"],
        "options": [
            "bill pascrell jr.",
            "paul ryan",
            "kamala harris.",
            "Jerry Brown"
        ],
        "type": "input",
        "tip": "Vaya a https://www.house.gov/ y escriba su código postal. Para '07026' en 2021 es 'Bill Pascrell Jr. (Democrat)'",
        "number": 23
    },
    {
        "text": "¿A quién representa un senador de EE. UU.?",
        "correctAnswers": ["todas las personas del estado"],
        "options": [
            "todas las personas del estado",
            "empresas y organizaciones",
            "el Senado",
            "el poder legislativo"
        ],
        "number": 24
    },
    {
        "text": "¿Por qué algunos estados tienen más representantes que otros?",
        "correctAnswers": [
            "(debido a) la población del estado",
            "(porque) tienen más gente",
            "(porque) algunos estados tienen más gente"
        ],
        "options": [
            "(porque) tienen más gente",
            "(porque) se utiliza un sistema de lotería.",
            "(porque) tienen más tierra",
            "(porque) son los estados originales"
        ],
        "number": 25
    },
    {
        "text": "¿Elegimos un presidente cada cuántos años?",
        "correctAnswers": ["cuatro (4)"],
        "options": ["cuatro (4)", "seis (6)", "dos (2)", "ocho (8)"],
        "number": 26
    },
    {
        "text": "¿En qué mes votamos por presidente? *",
        "correctAnswers": ["noviembre"],
        "options": ["noviembre", "enero", "diciembre", "febrero"],
        "number": 27
    },
    {
        "text": "¿Cómo se llama ahora el presidente de los Estados Unidos? *",
        "correctAnswers": ["joe biden", "joseph r. biden, jr.", "biden"],
        "options": ["donald trump", "barack obama", "joe biden", "mike pence"],
        "type": "input",
        "tip": "Visite uscis.gov/citizenship/testupdates para conocer el nombre del presidente de los Estados Unidos",
        "number": 28
    },
    {
        "text": "¿Cómo se llama ahora el vicepresidente de los Estados Unidos?",
        "correctAnswers": ["kamala d. harris", "kamala harris", "harris"],
        "options": ["kamala harris", "mike pence", "donald trump", "barack obama"],
        "type": "input",
        "tip": "Visite uscis.gov/citizenship/testupdates para conocer el nombre del vicepresidente de los Estados Unidos",
        "number": 29
    },
    {
        "text": "Si el presidente ya no puede servir, ¿quién se convierte en presidente?",
        "correctAnswers": ["el vicepresidente"],
        "options": [
            "El vicepresidente",
            "El vocero de la casa",
            "el presidente del Tribunal Supremo",
            "el secretario de estado"
        ],
        "number": 30
    },
    {
        "text": "Si tanto el presidente como el vicepresidente ya no pueden servir, ¿quién se convierte en presidente?",
        "correctAnswers": ["El vocero de la casa"],
        "options": [
            "El vocero de la casa",
            "La cabina",
            "el secretario de defensa",
            "la justicia cheif"
        ],
        "number": 31
    },
    {
        "text": "¿Quién es el comandante en jefe de las fuerzas armadas?",
        "correctAnswers": ["el presidente"],
        "options": [
            "el presidente",
            "el segundo",
            "retario de la defensa ",
            "los jefes de personal adjuntos",
            "El vicepresidente"
        ],
        "number": 32
    },
    {
        "text": "¿Quién firma los proyectos de ley para convertirse en leyes?",
        "correctAnswers": ["el presidente"],
        "options": [
            "el presidente",
            "el congreso",
            "el senado",
            "la corte suprema"
        ],
        "number": 33
    },
    {
        "text": "¿Quién veta los proyectos de ley?",
        "correctAnswers": ["el presidente"],
        "options": [
            "el presidente",
            "el Senado",
            "la casa de Representantes",
            "La Suprema Corte"
        ],
        "number": 34
    },
    {
        "text": "¿Qué hace el Gabinete del Presidente?",
        "correctAnswers": ["asesora al presidente"],
        "options": [
            "asesora al presidente",
            "firma leyes",
            "veta leyes",
            "interpreta leyes"
        ],
        "number": 35
    },
    {
        "text": "¿Cuáles son dos puestos a nivel de gabinete?",
        "correctAnswers": [
            "secretario de agricultura",
            "secretario de comercio",
            "secretario de Defensa",
            "secretario de educación",
            "secretaria de energía",
            "secretaria de salud y servicios humanos",
            "secretario de seguridad nacional",
            "secretaria de Vivienda y Urbanismo",
            "secretario del interior",
            "secretario de trabajo",
            "secretario de Estado",
            "secretaria de transporte",
            "secretario del Tesoro",
            "secretario de asuntos de veteranos",
            "fiscal General",
            "vicepresidente",
            "secretaria de educación + secretaria de estado"
        ],
        "options": [
            "secretaria de educación + secretaria de estado",
            "secretario de guerra + secretario de relaciones exteriores",
            "cheif justicia + portavoz de la casa",
            "portavoz de la casa + vicepresidente"
        ],
        "number": 36
    },
    {
        "text": "¿Qué hace el poder judicial?",
        "correctAnswers": [
            "revisa leyes",
            "explica las leyes",
            "resuelve disputas (desacuerdos)",
            "decide si una ley va en contra de la constitución"
        ],
        "options": [
            "revisa leyes",
            "construye los juzgados",
            "escribe nuevas leyes",
            "manda a los militares"
        ],
        "number": 37
    },
    {
        "text": "¿Cuál es el tribunal más alto de los Estados Unidos?",
        "correctAnswers": ["La Suprema Corte"],
        "options": [
            "La Suprema Corte",
            "la canguro",
            "el tribunal de apelaciones",
            "el tribunal de representantes"
        ],
        "number": 38
    },
    {
        "text": "¿Cuántos jueces hay en la Corte Suprema?",
        "correctAnswers": ["nueve (9)"],
        "options": ["nueve (9)", "tres (3)", "trece (13)", "veintiuno (21)"],
        "type": "input",
        "tip": "Visite https://www.supremecourt.gov/about/justices.aspx para encontrar información actualizada",
        "number": 39
    },
    {
        "text": "¿Quién es ahora el presidente del Tribunal Supremo de los Estados Unidos?",
        "correctAnswers": ["john roberts", "john g. roberts, jr."],
        "options": ["john roberts", "paul ryan", "nancy pelosi", "jerry brown"],
        "type": "input",
        "tip": "Visite uscis.gov/citizenship/testupdates para conocer el nombre del presidente del Tribunal Supremo de los Estados Unidos",
        "number": 40
    },
    {
        "text": "Según nuestra Constitución, algunos poderes pertenecen al gobierno federal. ¿Cuál es un poder del gobierno federal?",
        "correctAnswers": [
            "imprimir dinero",
            "declarar la guerra",
            "crear un ejército",
            "para hacer tratados"
        ],
        "options": [
            "imprimir dinero",
            "registrar licencias de conducir",
            "para crear escuelas",
            "para proporcionar seguridad (departamentos de bomberos)"
        ],
        "number": 41
    },
    {
        "text": "Según nuestra Constitución, algunos poderes pertenecen a los estados. ¿Cuál es un poder de los estados?",
        "correctAnswers": [
            "proporcionar escolarización y educación",
            "proporcionar protección (policía)",
            "proporcionar seguridad (departamentos de bomberos)",
            "dar una licencia de conducir",
            "aprobar la zonificación y el uso de la tierra"
        ],
        "options": [
            "proporcionar escolarización y educación",
            "creando ejércitos",
            "declarar la guerra",
            "creando tratados"
        ],
        "number": 42
    },
    {
        "text": "¿Quién es el gobernador de su estado ahora? (NJ)",
        "correctAnswers": ["phil murphy"],
        "options": ["phil murphy", "jerry brown", "paul didney", "jerry west"],
        "type": "input",
        "tip": "Las respuestas variarán. Visite https://www.usa.gov/states-and-territories para encontrar al gobernador de su estado.",
        "number": 43
    },
    {
        "text": "¿Cuál es la capital de su estado? * (NJ)",
        "correctAnswers": ["trenton"],
        "options": ["trenton", "nueva york", "patterson", "newark"],
        "type": "input",
        "tip": "Las respuestas variarán. Visite usa.gov/states-and-territories para encontrar información sobre su estado.",
        "number": 44
    },
    {
        "text": "¿Cuáles son los dos partidos políticos más importantes de Estados Unidos? *",
        "correctAnswers": [
            "democrático y republicano",
            "republicano y democrático"
        ],
        "options": [
            "democrático y republicano",
            "partido verde y libertarios",
            "comunistas y estadounidenses",
            "derecha e izquierda"
        ],
        "number": 45
    },
    {
        "text": "¿Cuál es el partido político del presidente ahora?",
        "correctAnswers": ["democrático"],
        "options": ["republicano", "democrático", "comunista", "partido verde"],
        "type": "input",
        "tip": "Visite uscis.gov/citizenship/testupdates para conocer el partido político del presidente",
        "number": 46
    },
    {
        "text": "¿Cómo se llama ahora el vocero de la casa de Representantes?",
        "correctAnswers": ["nancy pelosi", "pelosi"],
        "options": ["paul ryan", "nancy pelosi", "john roberts", "jerry brown"],
        "type": "input",
        "tip": "Visite uscis.gov/citizenship/testupdates para obtener el nombre del presidente de la Cámara de Representantes",
        "number": 47
    },
    {
        "text": "Hay cuatro enmiendas a la Constitución sobre quién puede votar. Describe una de ellas",
        "correctAnswers": [
            "ciudadanos de dieciocho (18) años o más (pueden votar)",
            "no tienes que pagar (un impuesto de votación) para votar",
            "cualquier ciudadano puede votar. (mujeres y hombres pueden votar)",
            "un ciudadano varón de cualquier raza (puede votar)"
        ],
        "options": [
            "ciudadanos de dieciocho (18) años o más (pueden votar)",
            "los ciudadanos deben pagar una tasa para votar",
            "los ciudadanos de veintiún (21) años o más pueden votar",
            "los ciudadanos de otros países pueden votar"
        ],
        "number": 48
    },
    {
        "text": "¿Cuál es una responsabilidad que corresponde solo a los ciudadanos de los Estados Unidos? *",
        "correctAnswers": [
            "formar parte de un jurado",
            "votar en una elección federal"
        ],
        "options": [
            "votar en una elección federal",
            "Mantén la paz",
            "Pregunta qué puedes hacer por tu país",
            "postularse para un cargo federal"
        ],
        "number": 49
    },
    {
        "text": "Nombra un derecho solo para ciudadanos de Estados Unidos.",
        "correctAnswers": [
            "votar en una elección federal",
            "postularse para un cargo federal"
        ],
        "options": [
            "postularse para un cargo federal",
            "servir en un jurado.",
            "la búsqueda de la felicidad",
            "una buena educación"
        ],
        "number": 50
    },
    {
        "text": "¿Cuáles son los dos derechos de todas las personas que viven en los Estados Unidos?",
        "correctAnswers": [
            "libertad de expresión",
            "libertad de expresión",
            "la libertad de reunion",
            "libertad de petición al gobierno",
            "libertad de religión",
            "el derecho a portar armas",
            "libertad de expresión + libertad de religión"
        ],
        "options": [
            "libertad de expresión + libertad de religión",
            "libertad de voto + libertad de participación",
            "libertad de opresión + libertad de pensamiento",
            "libertad de postularse para un cargo + libertad de atención médica"
        ],
        "number": 51
    },
    {
        "text": "¿A qué mostramos lealtad cuando decimos el Juramento a la Bandera?",
        "correctAnswers": ["los estados unidos", "la bandera"],
        "options": [
            "los Estados Unidos",
            "el presidente",
            "el poder legislativo",
            "nuestros políticos"
        ],
        "number": 52
    },
    {
        "text": "¿Cuál es una promesa que hace cuando se convierte en ciudadano de los Estados Unidos?",
        "correctAnswers": [
            "renunciar a la lealtad a otros países",
            "defender la constitución y las leyes de los estados unidos",
            "obedecer las leyes de los estados unidos",
            "servir en las fuerzas armadas de EE. UU. (si es necesario)",
            "servir (hacer un trabajo importante para) la nación (si es necesario)",
            "sé leal a los estados unidos"
        ],
        "options": [
            "obedecer las leyes de los estados unidos",
            "sé leal a otros países",
            "trabaja duro y mantente seguro",
            "Votar en todas las elecciones federales"
        ],
        "number": 53
    },
    {
        "text": "¿Qué edad deben tener los ciudadanos para votar por el presidente? *",
        "correctAnswers": ["dieciocho (18)", "dieciocho (18) y mayores", "18"],
        "options": [
            "dieciocho (18)",
            "dieciséis (16)",
            "veintiuno (21)",
            "treinta y cinco (35)"
        ],
        "number": 54
    },
    {
        "text": "¿Cuáles son las dos formas en que los estadounidenses pueden participar en su democracia?",
        "correctAnswers": [
            "votar",
            "unirse a un partido político",
            "ayuda con una campaña",
            "únete a un grupo cívico",
            "únete a un grupo comunitario",
            "dar a un funcionario electo su opinión sobre un tema",
            "llamar a senadores y representantes",
            "apoyar o oponerse públicamente a un tema o política",
            "postularse para un cargo",
            "escribir a un periódico",
            "votar + unirse a un partido político"
        ],
        "options": [
            "votar + unirse a un partido político",
            "votar + derrocar al gobierno",
            "pagar impuestos + obedecer las leyes",
            "apoyar a otros países - unirse a grupos"
        ],
        "number": 55
    },
    {
        "text": "¿Cuándo es el último día en que puede enviar formularios de impuestos federales sobre la renta? *",
        "correctAnswers": ["15 de abril"],
        "options": ["15 de abril", "15 de enero", "1 de enero", "1 de abril"],
        "number": 56
    },
    {
        "text": "¿Cuándo deben registrarse todos los hombres en el Servicio Selectivo?",
        "correctAnswers": [
            "a los dieciocho (18) años",
            "entre dieciocho (18) y veintiséis (26)"
        ],
        "options": [
            "entre dieciocho (18) y veintiséis (26)",
            "entre dieciocho (18) y treinta (30)",
            "entre veintety-one (21) y treinta y cinco (35) ",
            "entre dieciocho (18) y veinticinco (25)"
        ],
        "number": 57
    },
    {
        "text": "¿Cuál es una de las razones por las que los colonos vinieron a Estados Unidos?",
        "correctAnswers": [
            "libertad",
            "libertad política",
            "libertad religiosa",
            "Oportunidad económica",
            "practicar su religión",
            "escapar de la persecución"
        ],
        "options": [
            "libertad religiosa",
            "me pareció una buena idea",
            "buscando la monarquía",
            "escapar de la plaga"
        ],
        "number": 58
    },
    {
        "text": "¿Quién vivía en América antes de la llegada de los europeos?",
        "correctAnswers": ["indios americanos", "nativos americanos"],
        "options": [
            "nativos americanos",
            "los colonos",
            "ciudadanos estadounidenses",
            "nadie"
        ],
        "number": 59
    },
    {
        "text": "¿Qué grupo de personas fue llevado a América y vendido como esclavo?",
        "correctAnswers": ["africanos", "personas de africa"],
        "options": ["africanos", "asiáticos", "europeos", "latinos"],
        "number": 60
    },
    {
        "text": "¿Por qué los colonos lucharon contra los británicos?",
        "correctAnswers": [
            "debido a los altos impuestos",
            "porque el ejército británico se quedó en sus casas (alojamiento, alojamiento)",
            "porque no tenían autogobierno"
        ],
        "options": [
            "debido a los altos impuestos",
            "por la guerra revolucionaria",
            "por la fiesta del té de Boston",
            "porque eran aliados de los franceses"
        ],
        "number": 61
    },
    {
        "text": "¿Quién escribió la Declaración de Independencia?",
        "correctAnswers": ["(thomas) jefferson", "thomas jefferson"],
        "options": [
            "Thomas Jefferson",
            "george washington",
            "john adams",
            "Abraham Lincoln"
        ],
        "number": 62
    },
    {
        "text": "¿Cuándo se adoptó la Declaración de Independencia?",
        "correctAnswers": ["4 de julio de 1776"],
        "options": [
            "4 de julio de 1776",
            "4 de julio de 1777",
            "4 de julio de 1778",
            "4 de julio de 1775"
        ],
        "number": 63
    },
    {
        "text": "Había 13 estados originales. Nombre tres.",
        "correctAnswers": [
            "nuevo hampshire",
            "Massachusetts",
            "Rhode Island",
            "Connecticut",
            "Nueva York",
            "New Jersey",
            "Pensilvania",
            "Delaware",
            "Maryland",
            "Virginia",
            "Carolina del Norte",
            "Carolina del Sur",
            "Georgia",
            "nueva york, nueva jersey, pensilvania"
        ],
        "options": [
            "nueva york, nueva jersey, pensilvania",
            "nueva york, nueva jersey, idaho",
            "nueva york, ohio, florida",
            "nueva york, california, nueva jersey"
        ],
        "number": 64
    },
    {
        "text": "¿Qué pasó en la Convención Constitucional?",
        "correctAnswers": [
            "la constitución fue escrita",
            "los padres fundadores redactaron la constitución"
        ],
        "options": [
            "la constitución fue escrita",
            "nuestra independencia fue declarada",
            "se aceptaron los papeles federalistas",
            "los británicos se pelearon"
        ],
        "number": 65
    },
    {
        "text": "¿Cuándo se redactó la Constitución?",
        "correctAnswers": ["1787"],
        "options": ["1787", "1767", "1777", "1797"],
        "number": 66
    },
    {
        "text": "Los papeles federalistas apoyaron la aprobación de la Constitución de los Estados Unidos. Nombre uno de los escritores.",
        "correctAnswers": [
            "alexander hamilton",
            "john jay",
            "james madison",
            "publius"
        ],
        "options": [
            "james madison",
            "Thomas Jefferson",
            "john adams",
            "george washington"
        ],
        "number": 67
    },
    {
        "text": "¿Por qué es famoso Benjamin Franklin?",
        "correctAnswers": [
            "diplomático estadounidense",
            "miembro de mayor edad de la convención constitucional",
            "primer director general de correos de los estados unidos",
            "escritor del almanaque del pobre Richard ",
            "inició las primeras bibliotecas gratuitas"
        ],
        "options": [
            "diplomático estadounidense",
            "El presidente estadounidense",
            "senador de Estados Unidos",
            "primer secretario de estado"
        ],
        "number": 68
    },
    {
        "text": "¿Quién es el“ padre de nuestra patria ”?",
        "correctAnswers": ["george washington"],
        "options": [
            "george washington",
            "Thomas Jefferson",
            "Benjamin Franklin",
            "Abraham Lincoln"
        ],
        "number": 69
    },
    {
        "text": "¿Quién fue el primer presidente? *",
        "correctAnswers": ["george washington"],
        "options": [
            "george washington",
            "Abraham Lincoln",
            "Franklin D. Roosevelt",
            "Woodrow Wilson"
        ],
        "number": 70
    },
    {
        "text": "¿Qué territorio le compró Estados Unidos a Francia en 1803?",
        "correctAnswers": ["el territorio de louisiana", "louisiana"],
        "options": ["louisiana", "texas", "tennessee", "alaska"],
        "number": 71
    },
    {
        "text": "Nombra una guerra que libró Estados Unidos en el siglo XIX",
        "correctAnswers": [
            "guerra de 1812",
            "guerra mexicano-estadounidense",
            "guerra civil",
            "guerra hispano Americana"
        ],
        "options": [
            "guerra civil",
            "guerra revolucionaria",
            "primera guerra mundial",
            "vietnam"
        ],
        "number": 72
    },
    {
        "text": "Nombra la guerra de Estados Unidos entre el Norte y el Sur",
        "correctAnswers": ["la guerra civil", "la guerra entre los estados"],
        "options": [
            "La guerra civil",
            "la guerra revolucionaria",
            "Primera Guerra Mundial",
            "guerra americana"
        ],
        "number": 73
    },
    {
        "text": "Nombra un problema que condujo a la Guerra Civil.",
        "correctAnswers": [
            "esclavitud",
            "razones económicas",
            "derechos de los estados"
        ],
        "options": [
            "esclavitud",
            "impuestos",
            "rey jorge iii",
            "derechos de la mujer"
        ],
        "number": 74
    },
    {
        "text": "¿Cuál fue una de las cosas importantes que hizo Abraham Lincoln? *",
        "correctAnswers": [
            "liberó a los esclavos (proclamación de emancipación)",
            "liberaron a los esclavos",
            "salvó (o preservó) la unión",
            "lideró los estados unidos durante la guerra civil"
        ],
        "options": [
            "liberaron a los esclavos",
            "perdió la guerra civil",
            "escribió la declaración de independencia",
            "Era un diplomático extranjero de Estados Unidos"
        ],
        "number": 75
    },
    {
        "text": "¿Qué hizo la Proclamación de Emancipación?",
        "correctAnswers": [
            "liberaron a los esclavos",
            "esclavos liberados en la confederación",
            "esclavos liberados en los estados confederados",
            "esclavos liberados en la mayoría de los estados del sur"
        ],
        "options": [
            "liberaron a los esclavos",
            "derechos garantizados del estado",
            "terminó la guerra civil",
            "comenzó la guerra civil"
        ],
        "number": 76
    },
    {
        "text": "¿Qué hizo Susan B. Anthony?",
        "correctAnswers": [
            "luchó por los derechos de la mujer",
            "luchó por los derechos civiles"
        ],
        "options": [
            "luchó por los derechos de la mujer",
            "garantizó los derechos del estado",
            "liberaron a los esclavos.",
            "peleó la guerra civil"
        ],
        "number": 77
    },
    {
        "text": "Nombra una guerra que libró Estados Unidos en el siglo XX. *",
        "correctAnswers": [
            "Primera Guerra Mundial",
            "Segunda Guerra Mundial",
            "guerra coreana",
            "guerra de Vietnam",
            "guerra del golfo (persa)"
        ],
        "options": [
            "guerra de Vietnam",
            "guerra civil",
            "guerra revolucionaria",
            "guerra hispano Americana"
        ],
        "number": 78
    },
    {
        "text": "¿Quién fue presidente durante la Primera Guerra Mundial?",
        "correctAnswers": ["woodrow wilson"],
        "options": [
            "Woodrow Wilson",
            "Franklin D. Roosevelt",
            "george washington",
            "Abraham Lincoln"
        ],
        "number": 79
    },
    {
        "text": "¿Quién fue presidente durante la Gran Depresión y la Segunda Guerra Mundial?",
        "correctAnswers": ["franklin roosevelt", "franklin d. roosevelt"],
        "options": [
            "Franklin D. Roosevelt",
            "Woodrow Wilson",
            "george washington",
            "Abraham Lincoln"
        ],
        "number": 80
    },
    {
        "text": "¿Contra quién luchó Estados Unidos en la Segunda Guerra Mundial?",
        "correctAnswers": ["Japón, Alemania e Italia"],
        "options": [
            "Japón, Alemania e Italia",
            "Rusia, España y Austria",
            "Alemania, Rusia y China",
            "britan, canadá y australia"
        ],
        "number": 81
    },
    {
        "text": "Antes de ser presidente, Eisenhower era general. ¿En qué guerra estaba?",
        "correctAnswers": ["segunda guerra mundial"],
        "options": [
            "segunda guerra mundial",
            "primera guerra mundial",
            "guerra civil",
            "guerra de vietnam"
        ],
        "number": 82
    },
    {
        "text": "Durante la Guerra Fría, ¿cuál era la principal preocupación de Estados Unidos?",
        "correctAnswers": ["comunismo"],
        "options": [
            "comunismo",
            "libertad de expresión",
            "el comercio internacional",
            "liberando a los esclavos"
        ],
        "number": 83
    },
    {
        "text": "¿Qué movimiento intentó acabar con la discriminación racial?",
        "correctAnswers": ["derechos civiles", "movimiento de derechos civiles"],
        "options": [
            "movimiento de derechos civiles",
            "movimiento de libre comercio",
            "movimiento por los derechos del pueblo",
            "movimiento de derechos raciales"
        ],
        "number": 84
    },
    {
        "text": "¿Qué hizo Martin Luther King, Jr.? *",
        "correctAnswers": [
            "luchó por los derechos civiles",
            "trabajé por la igualdad para todos los estadounidenses"
        ],
        "options": [
            "luchó por los derechos civiles",
            "luchó en la guerra civil",
            "luchó con los británicos",
            "luchó contra los derechos civiles"
        ],
        "number": 85
    },
    {
        "text": "¿Qué evento importante ocurrió el 11 de septiembre de 2001 en los Estados Unidos?",
        "correctAnswers": ["los terroristas atacaron los estados unidos"],
        "options": [
            "los terroristas atacaron los estados unidos",
            "los estados unidos atacaron a irak",
            "el presidente estadounidense fue elegido",
            "Estados Unidos atacó a terroristas"
        ],
        "number": 86
    },
    {
        "text": "Nombra una tribu indígena americana en los Estados Unidos. [Los oficiales de USCIS recibirán una lista de tribus indígenas americanas reconocidas a nivel federal.]",
        "correctAnswers": [
            "cherokee",
            "navajo",
            "siux",
            "chippewa",
            "choctaw",
            "pueblo",
            "apache",
            "iroquois",
            "Cala",
            "pies negros",
            "seminole",
            "cheyenne",
            "arawak",
            "shawnee",
            "mohegan",
            "huron",
            "oneida",
            "lakota",
            "Cuervo",
            "teton",
            "hopi",
            "inuit"
        ],
        "options": ["apache", "pocahontas", "indianitas", "nativos"],
        "number": 87
    },
    {
        "text": "Nombra uno de los dos ríos más largos de Estados Unidos.",
        "correctAnswers": ["Missouri (río)", "río Mississippi", "Mississippi"],
        "options": ["Mississippi", "colorado", "ohio", "nilo"],
        "number": 88
    },
    {
        "text": "¿Qué océano hay en la costa oeste de los Estados Unidos?",
        "correctAnswers": ["pacífico (océano)", "pacífico"],
        "options": ["pacífico", "atlántico", "indio", "grandes lagos"],
        "number": 89
    },
    {
        "text": "¿Qué océano hay en la costa este de los Estados Unidos?",
        "correctAnswers": ["atlántico (océano)", "atlántico"],
        "options": ["atlántico", "pacífico", "indio", "grandes lagos"],
        "number": 90
    },
    {
        "text": "Nombra un territorio de EE. UU.",
        "correctAnswers": [
            "Puerto Rico",
            "Islas Vírgenes de EE.UU",
            "Samoa Americana",
            "Islas Marianas del Norte",
            "guam"
        ],
        "options": ["puerto rico", "hawái", "alaska", "la luna"],
        "number": 91
    },
    {
        "text": "Nombra un estado que limite con Canadá.",
        "correctAnswers": [
            "Maine",
            "nuevo hampshire",
            "Vermont",
            "Nueva York",
            "Pensilvania",
            "Ohio",
            "Michigan",
            "Minnesota",
            "Dakota del Norte",
            "Montana",
            "Idaho",
            "Washington",
            "Alaska"
        ],
        "options": ["alaska", "california", "texas", "iowa"],
        "number": 92
    },
    {
        "text": "Nombra un estado fronterizo con México.",
        "correctAnswers": ["california", "arizona", "nuevo méxico", "texas"],
        "options": ["california", "pensilvania", "nevada", "florida"],
        "number": 93
    },
    {
        "text": "¿Cuál es la capital de Estados Unidos? *",
        "correctAnswers": ["Washington, DC."],
        "options": [
            "Washington, DC.",
            "Seattle, Washington",
            "nueva York",
            "ciudad de américa"
        ],

        "number": 94
    },
    {
        "text": "¿Dónde está la Estatua de la Libertad? *",
        "correctAnswers": [
            "Puerto de New York)",
            "Puerto de New York",
            "isla de la Libertad",
            "[también son aceptables nueva jersey, cerca de la ciudad de nueva york y en el (río) hudson]"
        ],
        "options": [
            "Puerto de New York",
            "San Francisco",
            "Washington DC.",
            "puerto de boston"
        ],
        "number": 95
    },
    {
        "text": "¿Por qué la bandera tiene 13 franjas?",
        "correctAnswers": [
            "porque había 13 colonias originales",
            "porque las rayas representan las colonias originales"
        ],
        "options": [
            "porque había 13 colonias originales",
            "porque había 13 presidentes originales",
            "porque había 13 senadores originales",
            "porque había 13 idiomas originales"
        ],
        "number": 96
    },
    {
        "text": "¿Por qué la bandera tiene 50 estrellas? *",
        "correctAnswers": [
            "porque hay una estrella para cada estado",
            "porque cada estrella representa un estado",
            "porque hay 50 estados"
        ],
        "options": [
            "porque hay una estrella para cada estado",
            "porque hay una estrella para cada territorio",
            "porque hay una estrella para cada representante",
            "porque hay una estrella para cada enmienda"
        ],
        "number": 97
    },
    {
        "text": "¿Cómo se llama el himno nacional?",
        correctAnswers: ['the star-spangled banner'],
        options: [
            'the star-spangled banner',
            'america the free',
            'god bless america',
            "america's hymn",
        ],

        "number": 98
    },
    {
        "text": "¿Cuándo celebramos el Día de la Independencia? *",
        "correctAnswers": ["4 de julio", "4 de julio"],
        "options": ["4 de julio", "5 de mayo", "26 de noviembre", "15 de abril"],
        "number": 99
    },
    {
        "text": "Nombra dos días festivos nacionales de EE. UU.",
        "correctAnswers": [
            "día de Año Nuevo",
            "martin luther king, jr. día",
            "día del Presidente",
            "Día Conmemorativo",
            "día de la Independencia",
            "Día laboral",
            "Día de la Raza",
            "Día de los Veteranos",
            "acción de gracias",
            "Navidad",
            "día de los presidentes + día de la independencia"
        ],
        "options": [
            "día de los presidentes + día de la independencia",
            "acción de gracias + día del árbol",
            "navidad + dia del maestro",
            "día de año nuevo + tontos de abril"
        ],
        "number": 100
    }
]

export const questionsSpanish2020 = esQuestionsConstructor.map(obj => new Question(obj))


