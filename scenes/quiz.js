
/*[
  user: JSON.parse(localStorage.getItem('selectedMember')),
  answer: option,
  valid: false,
  time: Date.now(),
]*/

var quesList = {
    "general": [
        ['¿Cuántos colores se pueden apreciar en un arcoiris?','7','8','12',0],
        ['¿Cuál es el animal que mata mas humanos al año?','Leon','Mosquito','Tiburon',1],
        ['¿Quién escribió el libro Breve historia del tiempo: del Big Bang a los agujeros negros?','Isaac Newton','Stephen Hawking','Albert Einstein',1],
        ['¿Cómo se llama la civilización que construyó las pirámides de Giza?','Los sumerios','Los egipcios','Mayas',1],
        ['¿Qué planeta es conocido como “planeta rojo”?','Marte','Neptuno','Pluton',0],
        ['¿Cuál es el idioma oficial de los Estados Unidos?','Frances','Alemán','Inglés',2],
        ['¿Cuál es el planeta más grande del Sistema Solar?','Marte','Tierra','Jupiter',2],
        ['¿Cómo se llama la civilización que construyó el Machu Picchu en Perú?','Maya','Inca','Azteca',1],
        ['¿Cuál es el nombre científico del hombre?','Homo Sapiens','Homo Erectus','Homo Habilis',0],
        ['¿Qué científico propuso las tres leyes del movimiento?','Isaac Newton','Stephen Hawking','Albert Einstein',0],
        ['¿Cómo se llama la religión que considera al Corán como su libro sagrado?','Catoliciscmo','El Islam','Cristianos',1],
        ['Según el Antiguo Testamento, ¿cuántos días le tomó a Dios crear el mundo?','Cinco Dias','Seis Dias','Siete Dias',1],
        ['¿Quién está encargada del servicio de inteligencia de los Estados Unidos?','AFI','Interpol','CIA',2],
        ['¿Cómo se llama el primer videojuego que protagonizó Mario y en el que hizo su primera aparición?','Donkey Kong','Mario Bros','Super Mario',0],
        ['¿Quienes fundaron la red social Facebook?','Elon Musk','Jeff Bezos','Mark Zuckerberg',2],
        ['¿Qúe es el ornitorrinco?','Ave','Reptil','Mamifero',2],
        ['¿Qué nombre recibe la moneda oficial de Reino Unido?','Libra Esterlina','Euro','Peso Ingles',0],
        ['¿Qué significan las siglas FIFA?','Federacion de Futbol Intenso Aerobico','Futbol Internacional Federacion de America','Fédération Internationale de Football Association.',2],
        ['Según los escritos bíblicos, ¿quién traicionó a Jesús de Nazaret por treinta piezas de plata?','Apostol Pedro','Apostol Juan','Apostol Judas Iscariote',2],
        ['¿Cuántas notas musicales existen?','Doce','Siete','Nueve',0],
        ['¿Cómo se llaman los protagonistas de la película “Titanic” de James Cameron?','Rose & Jack','Rosita y Joaquin','Renata y John',0],
        ['¿Dónde cayeron las primeras bombas atómicas en combate?','Hiroshima y Nagazaki','Pearl Harbor','Tokio y Shanghai',0],
        ['¿Cuántos días tiene un año bisiesto?','366','365','356',0],
        ['¿Cuál es la capital de México?','Guanajuato','Ciudad de Mexico','Estado de Mexico',1],
        ['¿Cuál es el gas mayoritario de la atmósfera terrestre?','Nitrogeno','Oxigeno','Helio',0],
        ['¿Cuál es la serpiente más larga del mundo?','Cascabel','Cobra','Pitón',2],
        ['¿Cuántos anillos hay en la bandera olímpica?','5','6','7',0],
        ['¿Quién es ahora mismo el máximo representante de la Iglesia?','El Papa','Cardenal','Arzobispo',0],
        ['¿De qué grupo formaba parte Paul McCartney?','Rolling Stones','AC DC','The Beatles',2],
        ['¿De qué material estan hechas las puntas de los lapíces?','Grafito','Madera ','Cera',0],
        ['¿Cuantas cuerdas tiene una guitarra?','4','3','6',2],
        ['¿En que ciudad esta la Estatua de la Libertad?','Washington ','Nueva York','California ',1],
        ['¿Qué día se celebra Halloween?','02 de noviembre ','31 de octubre','01 de noviembre ',1],
        ['¿Cuál es el primer libro de la Biblia?','Último testamento ','Apocalipsis','El Génesis ',2],
        ['¿Cuál es el título del líder espiritual y político de los tibetanos?','Salvador Dalí','Muhammad Ali ','Dalái Lama',2],
        ['¿Qué famosa saga creó la escritora J.K. Rowling?','Harry Potter','El señor de los anillos ','El Hobbit',0],
        ['¿Quién es considerado como el padre del psicoanálisis?','Iván Pávlov','Abraham Maslow','Sigmund Freud',2],
        ['¿Quién es el principal fundador de Microsoft?','Steve Jobs','Elon Musk','Bill Gates ',2],
        ['¿Cómo se llama el fundador de la compañía de contenido infantil Disney?','Walter Disney','Walt Disney','Walter Mercado',1],
        ['¿Cuál es el ave más grande del mundo?','El avestruz  ','El Guajolote ','La gallina',0],
        ['¿Qué mide un caballo de fuerza?','Temperatura ','Los kilómetros ','Potencia ',2],
    ],
    "deportes": [
        ['¿De qué color es la tarjeta que enseña un árbitro de fútbol para echar a un jugador?', 'Amarilla', 'Roja', 'Verde', 1],
        ['Un cubo de Rubik tiene caras en rojo, naranja, verde, amarillo, azul y... ¿Qué otro color?', 'Blanco', 'Negro', 'Gris', 0],
        ['¿Cuántas cuerdas hay en un juego de "tira y afloja"?', 'Una', 'Dos', 'Cuatro', 0],
        ['¿En qué deporte son dos campeonas las hermanas Venus y Serena Williams?', 'Tenis', 'Bádminton', 'Atletismo', 0],
        ['¿Qué futbolista jugó en el Barcelona: Ronaldo, Ronaldinho, Romario?', 'Ronaldo', 'Ronaldinho', 'Los 3', 2],
        ['¿A qué trofeo futbolístico se le conoce como la orejona?', 'Champions League', 'Copa del Rey', 'Europa League', 0],
        ['¿Entre los dos equipos, cuántos jugadores hay en el campo al comenzar un partido de fútbol?', 'Veinte', 'Veintidós', 'Dieciocho', 1],
        ['¿Cuánto dura una parte de un partido de fútbol?', '30 minutos', '45 minutos', '60 minutos', 1],
        ['¿Cómo se llama el deporte que hacían dos caballeros montados a caballo con lanzas y escudos?', 'Justa', 'Esgrima', 'Caballería', 0],
        ['¿Quién hace el primer movimiento en una partida de ajedrez?', 'Negras', 'Blancas', 'Ambas', 1],
        ['¿Cuál de estos deportes es a veces llamado “ballet acuático”?', 'Natación artística', 'Waterpolo', 'Clavados', 0],
        ['¿Qué movimiento está prohibido para la torre en ajedrez: hacia delante, hacia atrás o en diagonal?', 'Diagonal', 'Hacia atrás', 'Hacia delante', 0],
        ['¿Qué deporte de competición se practica con unas flechas?', 'Tiro con arco', 'Caza', 'Dardos', 0],
        ['¿En qué país se inventó el fútbol: China, Inglaterra o Argentina?', 'China', 'Inglaterra', 'Argentina', 1],
        ['¿Cuál de estos deportes se hace sobre ruedas: surf, skateboard o snowboard?', 'Skateboard', 'Surf', 'Snowboard', 0],
        ['¿En qué forma se colocan las bolas al principio de una partida de billar?', 'En un triángulo', 'En un cuadrado', 'En un círculo', 0],
        ['¿Qué animal se usa en algunos deportes olímpicos?', 'El caballo', 'El perro', 'El toro', 0],
        ['¿Qué deporte estoy practicando si hago un ollie?', 'Snowboard', 'Skateboard', 'BMX', 1],
        ['¿Cuántas casillas tiene un tablero de damas?', '32', '64', '100', 1],
        ['¿Qué tipo de carreras veré si voy al hipódromo de la Zarzuela?', 'De caballos', 'De perros', 'De bicicletas', 0],
        ['¿Qué equipo ha ganado más Copas de Europa hasta la fecha?', 'Barcelona', 'Real Madrid', 'Milan', 1],
        ['¿Qué arte marcial practicaba Bruce Lee: kárate, kung-fu o judo?', 'Kárate', 'Kung-fu', 'Judo', 1],
        ['¿Qué marca de ropa deportiva comparte con la diosa de la victoria griega?', 'Adidas', 'Nike', 'Puma', 1],
        ['¿En qué deporte se puede ganar la Copa Davis?', 'Tenis', 'Golf', 'Rugby', 0],
        ['¿Qué ciudad tiene dos equipos que uno es City y el otro es United?', 'Londres', 'Mánchester', 'Liverpool', 1],
        ['¿Cómo se llama el deporte en el que primero se nada, luego se monta en bicicleta y al final se hace una carrera a pie?', 'Pentatlón', 'Triatlón', 'Ironman', 1],
        ['¿Cuántos puntos negros hay en total en un dado convencional?', '20', '21', '22', 1],
        ['¿Con qué tres letras se llaman a las bicicletas que se usan para hacer bicicross y bici acrobática?', 'BMX', 'MTB', 'FIX', 0],
        ['¿Qué deporte se practica sobre un ring: boxeo o judo?', 'Boxeo', 'Judo', 'Karate', 0],
        ['¿Cuántos peones hay al principio de una partida de ajedrez?', '16', '8', '4', 0],
        ['¿A qué estás jugando si te acompaña un "caddie"?', 'Golf', 'Tenis', 'Béisbol', 0],
        ['¿Cuánto dura un partido de fútbol?', '60 minutos', '90 minutos', '120 minutos', 1],
        ['¿Qué selección de fútbol ha ganado más Mundiales?', 'Alemania', 'Brasil', 'Italia', 1],
        ['¿En qué ciudad se encuentra el estadio conocido como La Bombonera?', 'Buenos Aires', 'Madrid', 'Sao Paulo', 0],
        ['¿Cuántos jugadores tiene un equipo de fútbol en el campo de juego?', '10', '11', '12', 1],
        ['¿Quién es el máximo goleador del FC Barcelona?', 'Lionel Messi', 'Xavi Hernández', 'Luis Suárez', 0],
        ['¿De qué ciudad es el Chelsea Football Club?', 'Londres', 'Manchester', 'Liverpool', 0],
        ['¿De qué colores es la camiseta del Atlético de Madrid?', 'Rojo y azul', 'Rojo y blanco', 'Blanco y negro', 1],
        ['¿Qué revista concede el Balón de Oro?', 'France Football', 'Marca', 'The Guardian', 0],
        ['¿Cómo se llama el estadio del Bayern de Múnich?', 'Allianz Arena', 'Signal Iduna Park', 'Camp Nou', 0],
        ['¿Qué selección ganó la Copa Mundial de Fútbol en Francia 98?', 'Brasil', 'Francia', 'Italia', 1],
        ['¿En qué posición juega el cancerbero de un equipo de fútbol?', 'Defensa', 'Delantero', 'Portero', 2],
        ['¿Quién es conocido como “O Rei”?', 'Pelé', 'Maradona', 'Ronaldo', 0]
    ],
    "cine": [
        ['¿Qué película de terror fue el debut de Johnny Depp?', 'Sombras en la oscuridad', 'Desde el infierno', 'A Nightmare on Elm Street', 2],
        ['¿Qué color está presente en casi todas las tomas de El Resplandor?', 'Rojo', 'Amarillo', 'Negro', 0],
        ['¿En qué película se cita "Veo a gente muerta"?', 'El Sexto Sentido', 'Soy Leyenda', 'El despertar de los Muertos', 0],
        ['Esta película de terror se basa en una agente del FBI (Jodie Foster) que utiliza a un caníbal para atrapar a otro asesino.', 'Hannibal', 'El silencio de los corderos', 'El dragón rojo', 1],
        ['¿A qué año viajan Marty y Doc en "Regreso al futuro II"?', '2016', '2015', '2014', 1],
        ['¿Quién interpretó al personaje principal de "Virgen a los 40"?', 'Steve Carell', 'Tom Cruise', 'Paul Rudd', 0],
        ['¿Qué ciudad está invadida por fantasmas en "Cazafantasmas"?', 'New York', 'San Francisco', 'Dallas', 0],
        ['¿Qué personaje interpreta Julia Roberts en "Pretty Woman"?', 'Vivian', 'Victoria', 'Jenny', 0],
        ['¿En qué película el tema principal fue "My Heart Will Go On"?', 'Titanic', 'El padrino', 'Rocky IV', 0],
        ['¿Cuál fue la primera película mexicana nominada al Oscar?', 'Macario', 'Nosotros los Pobres', 'Tizoc', 2],
        ['¿Quién fundó los Estudios Churubusco?', 'Emilio Azcárraga', 'Mario Moreno', 'Guillermo del Toro', 0],
        ['¿En qué película protagonizada por un científico loco y un adolescente viajan en el tiempo?', 'Volver al Futuro', 'Los Cazafantasmas', 'El Tiempo en sus Manos', 0],
        ['¿En qué película se muestra una tabla para invocar espíritus o demonios?', 'El Exorcista', 'Ouija', 'El Chavo con los espíritus chocarreros', 1],
        ['¿Qué actor tuvo que gritar "Wilson" en una de sus películas?', 'Tom Hanks', 'Will Smith', 'Jim Carrey', 0],
        ['¿Quién era "Wilson"?', 'Un balón', 'Un perro', 'Un fantasma', 0],
        ['¿Quién dirigió la película "Roma" (2018)?', 'Guillermo del Toro', 'Alfonso Cuarón', 'Alejandro González Iñárritu', 1],
        ['¿Cuál es el nombre del actor mexicano protagonista de "Cantinflas"?', 'Mario Moreno', 'Pedro Infante', 'Jorge Negrete', 0],
        ['¿Qué película mexicana ganó el Oscar a Mejor Película Extranjera en 2018?', 'Amores Perros', 'Roma', 'El Laberinto del Fauno', 1],
        ['¿En qué año se estrenó la película "Macario"?', '1959', '1960', '1961', 1],
        ['¿Quién es conocido como "El Indio" en el cine mexicano?', 'Emilio Fernández', 'Luis Buñuel', 'Roberto Gavaldón', 0],
        ['¿Cuál de estas películas es un clásico del Cine de Oro Mexicano?', 'Nosotros los Nobles', 'Los Tres García', 'Y Tu Mamá También', 1],
        ['¿Qué actriz mexicana protagonizó "Frida" (2002)?', 'Salma Hayek', 'Kate del Castillo', 'Yalitza Aparicio', 0],
        ['¿Qué director mexicano es conocido por películas como "El Laberinto del Fauno"?', 'Alfonso Cuarón', 'Alejandro González Iñárritu', 'Guillermo del Toro', 2],
        ['¿En qué estado de México se filmó "Como agua para chocolate"?', 'Oaxaca', 'Coahuila', 'Jalisco', 1],
        ['¿Quién interpretó a Pedro en "Nosotros los Pobres"?', 'Jorge Negrete', 'Pedro Infante', 'Germán Valdés', 1],
        ['¿Qué película mexicana trata sobre la vida de un luchador profesional?', 'Nacho Libre', 'El Santo contra las Momias', 'Huracán Ramírez', 2],
        ['¿Cómo se llama el personaje interpretado por Diego Luna en "Y Tu Mamá También"?', 'Tenoch', 'Julio', 'Carlos', 1],
        ['¿Qué película mexicana inspiró la animación de Pixar "Coco"?', 'Día de Muertos', 'Macario', 'La Leyenda de la Nahuala', 1],
        ['¿Qué cantante y actor protagonizó la película "Tizoc"?', 'Vicente Fernández', 'Jorge Negrete', 'Pedro Infante', 2],
        ['¿Qué película mexicana fue dirigida por Luis Estrada y trata sobre la corrupción?', 'La Ley de Herodes', 'El Infierno', 'Amores Perros', 0],
        ['¿Qué película popularizó la canción "Amorcito Corazón"?', 'Los Tres García', 'Nosotros los Pobres', 'Ustedes los Ricos', 1],
        ['¿Quién protagonizó "La vida inútil de Pito Pérez"?', 'Ignacio López Tarso', 'Germán Valdés "Tin Tan"', 'Mario Moreno "Cantinflas"', 0],
        ['¿Qué director mexicano ganó el Oscar por "Birdman"?', 'Alfonso Cuarón', 'Alejandro González Iñárritu', 'Guillermo del Toro', 1],
        ['¿Qué actor protagonizó la película "El Chanfle"?', 'Chespirito (Roberto Gómez Bolaños)', 'Mario Moreno "Cantinflas"', 'Héctor Suárez', 0],
        ['¿Cómo se llama el protagonista de "La Leyenda del Charro Negro"?', 'Leo San Juan', 'Juan Colorado', 'Ezequiel Rojas', 0]
    ],
    "ciencia": [
        ['¿Qué significa ADN?', 'Ácido deoxirribonucleico', 'Ácido desoxirribonucleico', 'Ácido ribonucleico', 1],
        ['¿Cómo se llamó el primer satélite artificial lanzado por la Unión Soviética en 1957?', 'Luna 1', 'Sputnik 1', 'Vostok 1', 1],
        ['¿Cuál es el tipo de sangre más raro?', 'O negativo', 'AB negativo', 'A positivo', 1],
        ['¿A qué grupo de animales pertenecen las ranas?', 'Reptiles', 'Anfibios', 'Mamíferos', 1],
        ['¿Dónde se encuentran los huesos más pequeños del cuerpo?', 'La mano', 'El pie', 'La oreja', 2],
        ['Este hombre proponía que el Sol está en el centro.', 'Galileo Galilei', 'Nicolás Copérnico', 'Johannes Kepler', 1],
        ['¿Quién es considerado el hombre que inventó el teléfono?', 'Nikola Tesla', 'Thomas Edison', 'Alexander Graham Bell', 2],
        ['Este planeta gira más rápido, completando una rotación completa en solo 10 horas. ¿Qué planeta es?', 'Júpiter', 'Saturno', 'Neptuno', 0],
        ['¿Cuál es la sustancia natural más dura de la Tierra?', 'Granito', 'Diamante', 'Cuarzo', 1],
        ['¿Cuántos dientes tiene un ser humano adulto?', '28', '32', '34', 1],
        ['Este animal fue el primero en ser lanzado al espacio y viajó en el Sputnik 2. ¿Cuál era su nombre?', 'Laika', 'Belka', 'Strelka', 0],
        ['Verdadero o falso: tu cabello y tus uñas están hechos del mismo material.', 'Verdadero', 'Falso', 0],
        ['¿Quién fue la primera mujer en el espacio?', 'Sally Ride', 'Valentina Tereshkova', 'Mae Jemison', 1],
        ['¿En qué parte del cuerpo humano se encuentran la mayoría de las glándulas sudoríparas?', 'Manos', 'Axilas', 'Parte inferior de los pies', 2],
        ['¿Cuánto tarda la luz del sol en llegar a la Tierra?', '8 minutos', '8 horas', '8 días', 0],
        ['¿Cuántos huesos hay en el cuerpo humano?', '206', '208', '210', 0],
        ['¿Cómo se llama el proceso de descomposición de los alimentos?', 'Digestión', 'Fermentación', 'Catabolismo', 0],
        ['¿Qué color llama la atención primero?', 'Rojo', 'Amarillo', 'Naranja', 1],
        ['¿Qué tipo de animales son activos durante el amanecer y el anochecer?', 'Diurnos', 'Nocturnos', 'Crepusculares', 2],
        ['¿Cuáles son los cuatro metales preciosos primarios?', 'Oro, plata, platino y paladio', 'Oro, cobre, platino y níquel', 'Oro, plata, platino y titanio', 0],
        ['Los viajeros espaciales de los Estados Unidos se llaman astronautas. De Rusia, cosmonautas. ¿De dónde son los taikonautas?', 'Japón', 'China', 'India', 1],
        ['¿Cómo sale la grasa de tu cuerpo cuando bajas de peso?', 'A través de la orina', 'A través del sudor, orina y aliento', 'A través de los músculos', 1],
        ['Este animal de la selva, cuando está en grupos, se conoce como una emboscada. ¿Qué clase de animal es este?', 'Leones', 'Tigres', 'Cocodrilos', 1],
        ['Este es el único tipo de canino que puede trepar a los árboles. ¿Cómo se llama?', 'Zorro rojo', 'Zorro gris', 'Lobo ártico', 1],
        ['¿Cómo se llama la parte más grande del cerebro humano?', 'El cerebro', 'El cerebelo', 'El tronco encefálico', 0],
        ['El Monte Olimpo es una gran montaña volcánica en qué planeta?', 'Júpiter', 'Marte', 'Venus', 1],
        ['¿Cómo se llama el punto más profundo de todos los océanos del mundo?', 'La Fosa de Java', 'La Fosa de Tonga', 'La Fosa de las Marianas', 2],
        ['¿Qué islas fueron estudiadas extensamente por Charles Darwin?', 'Islas Canarias', 'Islas Malvinas', 'Islas Galápagos', 2],
        ['¿Cómo se conoce a una persona que estudia los fósiles y la vida prehistórica, como los dinosaurios?', 'Geólogo', 'Arqueólogo', 'Paleontólogo', 2],
        ['¿Qué forma de energía podemos ver a simple vista?', 'Calor', 'Luz', 'Electricidad', 1],
        ['La Tierra gira sobre su eje una vez cada:', '12 hrs', '24 hrs', '48 hrs', 1],
        ['La fórmula química del dióxido de carbono es:', 'CO', 'CO2', 'C2O', 1],
        ['El proceso de convertir la luz solar en energía se llama:', 'Respiración', 'Fotosíntesis', 'Catabolismo', 1],
        ['La velocidad de la luz en el vacío es aproximadamente:', '300,000 km/s', '299,792,458 km/s', '150,000 km/s', 1],
        ['Los tres estados de la materia son:', 'Sólido, líquido y gaseoso', 'Líquido, gaseoso y plasma', 'Sólido, líquido y plasma', 0],
        ['La fuerza que se opone al movimiento se llama:', 'Gravedad', 'Fricción', 'Inercia', 1],
        ['Una reacción química en la que se libera calor se llama reacción:.', 'Endotérmica', 'Exotérmica', 'Isotérmica', 1]
    ],
    "arte": [
        ['¿Quién pintó “La última cena”?', 'Leonardo da Vinci', 'Miguel Ángel', 'Pablo Picasso', 0],
        ['¿En qué museo se encuentra la obra original "La noche estrellada", de Van Gogh?', 'Museo de Arte Moderno de Nueva York', 'Museo del Prado', 'Museo de la Universidad de Arte de Londres', 0],
        ['¿Dónde se encuentra el museo del Louvre?', 'Roma, Italia', 'París, Francia', 'Madrid, España', 1],
        ['¿Quién pintó la Capilla Sixtina?', 'Francisco de Goya', 'Miguel Ángel', 'Claude Monet', 1],
        ['¿Quién es el padre del arte pop?', 'Pablo Picasso', 'Andy Warhol', 'Jackson Pollock', 1],
        ['¿Quién pintó "La Gioconda"?', 'Leonardo da Vinci', 'Miguel Ángel', 'Pablo Picasso', 0],
        ['¿Cómo se llama este pintor que se cortó la oreja?', 'Paul Cézanne', 'Vincent van Gogh', 'Salvador Dalí', 1],
        ['¿Cuál es el nombre de este famosísimo cuadro de Edvard Munch?', '"El grito"', '"El fantasma"', '"El hombre"', 0],
        ['Pintor famoso español conocido por su excentricidad y su bigote único?', 'Diego Rivera', 'Salvador Dalí', 'Pablo Picasso', 1],
        ['¿Quién pintó "La noche estrellada"?', 'Vincent van Gogh', 'Marcel Duchamp', 'Edgar Degas', 0],
        ['¿Qué pintor es famoso por pintar gente voluminosa?', 'Salvador Dalí', 'Fernando Botero', 'Remedios Varo', 1],
        ['A la Venus de Milo, ¿qué extremidades le faltan?', 'Los brazos', 'La cabeza', 'Las piernas', 0],
        ['¿Cuál es el libro más vendido de los últimos 50 años?', 'La Biblia', 'Harry Potter (Saga)', 'El Señor de los Anillos (Saga)', 0],
        ['¿Sabes quién fue el autor de "Moby Dick"?', 'Walt Whitman', 'Charles Dickens', 'Herman Melville', 2],
        ['¿Por qué El Principito decide abandonar su planeta?', 'Porque quería conocer la tierra', 'Porque estaba enfermo', 'Porque sentía que una rosa se aprovechaba de él', 2],
        ['¿Quién es el autor de la "Divina comedia"?', 'Dante Alighieri', 'Petrarca', 'Giovanni Bocaccio', 0],
        ['¿Quién escribió "El arte de la guerra"?', 'Sun Tzu', 'Dào Dé Jing', 'Confucio', 0],
        ['¿Quién escribió "La Ilíada"?', 'Marco Tulio Cicerón', 'Homero', 'Séneca', 1],
        ['¿Qué artista pintó la inquietante "Persistencia de la memoria"?', 'Klee', 'Duchamp', 'Dalí', 2],
        ['¿Cuál de estos pintores no es italiano?', 'Pablo Picasso', 'Leonardo da Vinci', 'Tiziano', 0],
        ['¿Cómo se llama la famosa escultura de un hombre de Miguel Ángel?', 'David', 'Joseph', 'William', 0],
        ['¿Quién escribió "Cien años de soledad"?', 'Gabriel García Márquez', 'Mario Vargas Llosa', 'Julio Cortázar', 0],
        ['¿Quién es el autor de la celebrada historieta "Mafalda"?', 'Quino', 'Sopo', 'Liniers', 0],
        ['¿En qué museo está la Mona Lisa?', 'Museo del Prado', 'British Museum', 'Louvre', 2],
        ['Si una pintura tiene formas geométricas, se dice que su estilo es?', 'Cubismo', 'Expresionismo', 'Surrealismo', 0],
        ['¿Artista alemán rechazado que terminó controlando un país?', 'Hitler', 'Picasso', 'Monet', 0],
        ['¿Frida Kahlo qué pintaba en su mayoría?', 'Flores', 'Paisajes', 'Autorretratos', 2],
        ['¿En qué ciudad se encuentra la Torre Eiffel?', 'París', 'Madrid', 'Londres', 0],
        ['¿Con qué estilo de arquitectura está hecha la Catedral de Notre Dame?', 'Arquitectura tradicional', 'Arquitectura histórica', 'Arquitectura gótica', 2],
        ['¿Tipo de arte característico de Dalí?', 'Impresionismo', 'Cubismo', 'Surrealismo', 2],
        ['¿Quién pintó "La noche estrellada"?', 'Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 1],
        ['¿En qué país nació Frida Kahlo?', 'México', 'España', 'Argentina', 0],
        ['¿Qué estilo artístico representa Salvador Dalí?', 'Surrealismo', 'Impresionismo', 'Cubismo', 0],
        ['¿Quién esculpió "El David"?', 'Donatello', 'Miguel Ángel', 'Bernini', 1],
        ['¿Qué movimiento artístico lideró Pablo Picasso?', 'Cubismo', 'Expresionismo', 'Renacimiento', 0],
        ['¿En qué país se encuentra la obra "La Última Cena"?', 'Italia', 'Francia', 'España', 0],
        ['¿Quién pintó "Las Meninas"?', 'Francisco Goya', 'Diego Velázquez', 'El Greco', 1],
        ['¿Qué técnica utiliza Georges Seurat en sus obras?', 'Acuarela', 'Puntillismo', 'Fresco', 1],
        ['¿Qué civilización construyó las pirámides de Giza?', 'Maya', 'Egipcia', 'Azteca', 1],
        ['¿Qué artista creó "El Grito"?', 'Edvard Munch', 'Gustav Klimt', 'Paul Gauguin', 0],
        ['¿En qué ciudad se encuentra la Capilla Sixtina?', 'Roma', 'Ciudad del Vaticano', 'Florencia', 1],
        ['¿Quién pintó "El Jardín de las Delicias"?', 'Hieronymus Bosch', 'Pieter Bruegel', 'Jan van Eyck', 0],
        ['¿Qué material predomina en las esculturas de Rodin?', 'Mármol', 'Madera', 'Hierro', 0],
        ['¿Qué movimiento artístico pertenece a Claude Monet?', 'Impresionismo', 'Romanticismo', 'Barroco', 0],
        ['¿Qué país tiene más esculturas moái?', 'Perú', 'Chile', 'México', 1],
        ['¿Quién pintó "La Persistencia de la Memoria"?', 'René Magritte', 'Salvador Dalí', 'Joan Miró', 1],
        ['¿Qué pintor es conocido por sus autorretratos y su oreja vendada?', 'Vincent van Gogh', 'Paul Cézanne', 'Henri Matisse', 0],
        ['¿En qué siglo vivió Leonardo da Vinci?', 'XV', 'XVI', 'XVII', 0],
        ['¿Qué país alberga el Museo del Louvre?', 'España', 'Francia', 'Italia', 1],
        ['¿Quién pintó el mural "Sueño de una tarde dominical en la Alameda Central"?', 'David Alfaro Siqueiros', 'Diego Rivera', 'José Clemente Orozco', 1]
    ],
    "geografia": [
        ['¿Cuál es el país más pequeño del mundo?', 'Ciudad del Vaticano', 'Mónaco', 'San Marino', 0],
        ['¿Cuántos océanos hay en la Tierra?', '5', '4', '6', 0],
        ['¿Qué país tiene más habitantes?', 'India', 'China', 'Estados Unidos', 1],
        ['¿Qué país es el más grande del mundo?', 'Rusia', 'Canadá', 'China', 0],
        ['¿Cuál es el río más largo del mundo?', 'Amazonas', 'Nilo', 'Yangtsé', 1],
        ['¿De dónde provienen los osos polares?', 'Antártida', 'Polo Norte', 'Alaska', 1],
        ['¿Dónde podemos ver las auroras boreales?', 'Polo Sur', 'Polo Norte', 'Antártida', 1],
        ['¿Cuál es el desierto más grande del mundo?', 'Sahara', 'Atacama', 'Karakum', 0],
        ['¿Qué es Madagascar?', 'Un continente', 'Un océano', 'Una isla', 2],
        ['¿Cuántos continentes existen?', '5', '6', '7', 2],
        ['¿Qué continente es el más grande?', 'América', 'Asia', 'África', 1],
        ['¿Qué río pasa por París?', 'Loira', 'Ródano', 'Sena', 2],
        ['¿Cuál es la cordillera de montañas más larga del mundo?', 'Himalayas', 'Andes', 'Alpes', 1],
        ['¿Qué isla es la más grande del mundo?', 'Australia', 'Groenlandia', 'Nueva Guinea', 1],
        ['¿Qué ocupa más superficie, el agua o los continentes?', 'agua', 'continentes', 'ambos', 0],
        ['¿Dónde se encuentra el Taj Mahal?', 'India', 'Pakistán', 'Bangladesh', 0],
        ['¿Dónde encontramos el Machu Picchu?', 'Argentina', 'Perú', 'Chile', 1],
        ['¿Qué montaña es la más alta del mundo?', 'K2', 'Mont Blanc', 'Everest', 2],
        ['¿Cuál es la capital de la India?', 'Nueva Delhi', 'Bombay', 'Calcuta', 0],
        ['¿En qué ciudad de Italia se encuentra la escultura de David de Miguel Ángel?', 'Roma', 'Venecia', 'Florencia', 2],
        ['¿Qué continente es el más poblado?', 'África', 'Asia', 'Europa', 1],
        ['¿Cuál es el lugar más seco del planeta?', 'Desierto de Atacama', 'Antártida', 'Desierto de Sonora', 1],
        ['¿Cuál es la capital de Egipto?', 'El Cairo', 'Alejandría', 'Luxor', 0],
        ['¿Cuál es la lengua más hablada del mundo?', 'Español', 'Inglés', 'Mandarín', 1],
        ['¿Cuál es el río más largo del mundo?', 'Río Amazonas', 'Río Nilo', 'Río Yangtsé', 0],
        ['¿Cuál es el océano más grande de la Tierra?', 'Atlántico', 'Pacífico', 'Índico', 1],
        ['¿En qué continente se encuentra el desierto del Sahara?', 'Asia', 'América', 'África', 2],
        ['¿Qué país tiene la mayor población del mundo?', 'India', 'China', 'Estados Unidos', 0],
        ['¿Cuántos continentes hay en el mundo?', '7', '6', '5', 0],
        ['¿Dónde está ubicado el Monte Everest?', 'Cordillera de los Andes', 'Cordillera de los Alpes', 'Cordillera del Himalaya', 2],
        ['¿Cuál es la capital de Francia?', 'París', 'Lyon', 'Marsella', 0],
        ['¿Qué río pasa por Egipto y es famoso por su historia?', 'Río Nilo', 'Río Amazonas', 'Río Yangtsé', 0],
        ['¿Qué país tiene la mayor extensión territorial?', 'China', 'Rusia', 'Estados Unidos', 1],
        ['¿Cuál es el país más grande de América del Sur por superficie?', 'Brasil', 'Argentina', 'Chile', 0]
    ],
    "matematicas": [
        ['¿Cuál es la representación gráfica del número nueve mil treinta y seis?', '90036', '936', '9036', 2],
        ['¿A cuántas unidades equivale 10 decenas de millar?', '100000 unidades', '10000 unidades', '1000 unidades', 1],
        ['Aproxima el número 58 a la decena.', '50', '60', '55', 1],
        ['Escribe el número ordinal trigésimo quinto en cifras.', '135', '35', '25', 1],
        ['¿Qué cantidad expresa el número romano V?', 'uno', 'cinco', 'diez', 1],
        ['¿Qué número resulta si divides 56 entre 7?', '9', '8', '7', 1],
        ['¿Cuál es el número anterior a 1000?', '1001', '990', '999', 2],
        ['¿Cómo escribirías en cifras seiscientos veinticinco mil doscientos dos?', '6025202', '625202', '60025202', 1],
        ['Para calcular cuánto es un tercio de 3996, ¿qué tienes que hacer?', 'Multiplicar por tres', 'Dividir entre tres', 'Restar tres', 1],
        ['Un perro pesa 20 kilos y un cachorro pesa 10 kilos menos que él, ¿cuánto pesa la cría?', '30 kilos', '10 kilos', '20 kilos', 1],
        ['Expresa 7.670 kg en gramos.', '70670', '7670', '767', 1],
        ['¿Qué hora es si, tanto la manilla pequeña del reloj como la grande están en las 3?', 'Las tres en punto', 'Las tres y cuarto', 'Las tres y media', 0],
        ['¿Cuál es el resultado de multiplicar 7x9?', '58', '72', '63', 2],
        ['¿Cómo puedes comprobar si has hecho bien una división?', 'Volviéndola a hacer.', 'Multiplicando el cociente por el divisor y sumando el resto si lo hay.', 'Sumando el cociente por el divisor y el resto.', 1],
        ['Escribe con números esta fracción: cinco séptimos.', '7/5', '5/7', '5/6', 1],
        ['¿Cuántos minutos tiene una hora?', '24 minutos', '60 minutos', '1 minuto', 1],
        ['¿Cuántos meses tiene un trimestre?', '4 meses', '3 meses', '6 meses', 1],
        ['¿Cuánto es un lustro?', '1 año', '10 años', '5 años', 2],
        ['¿Qué número es mayor 37,4 o 37,09?', '37,4', '37,09', 'Son Iguales', 0],
        ['¿Cómo se llama el polígono de siete lados?', 'Heptágono', 'Hexágono', 'Septágono', 0],
        ['¿Cuál es el nombre del triángulo que tiene dos lados iguales y uno desigual?', 'Isósceles', 'Escaleno', 'Equilátero', 0],
        ['¿Cuántos metros es un hectómetro?', '10 metros', '1 metro', '100 metros', 2],
        ['¿Qué es una recta secante?', 'Es una recta que corta una curva en dos puntos.', 'Es una recta exterior a una circunferencia.', 'Es una recta que corta en un punto a una curva.', 0],
        ['¿Qué es un polígono regular?', 'El que tiene todos sus lados y sus ángulos iguales', 'El que tiene sus lados y ángulos desiguales', 'No sé', 0],
        ['Si tienes un billete de 100€, dos billetes de 20€ y cuatro monedas de 1 €, ¿cuánto dinero tienes en total?', '140 euros', '144 euros', '154 euros', 1],
        ['Cálculo mental rápido: ¿cuánto es 100x49?', '0.049', '490', '4900', 2],
        ['Cálculo mental rápido: ¿cuánto es 12 menos 7?', '7', '6', '5', 2],
        ['Cálculo mental rápido: ¿cuánto es 6x8 menos cuatro?', '54', '50', '44', 2],
        ['Cálculo mental rápido: ¿cuánto es 140 entre 10?', '1.4', '14', '1400', 1],
        ['¿Cuánto es el doble de 25?', '50', '60', '45', 0],
        ['¿Cuánto es el triple de 25?', '75', '50', '100', 0],
        ['¿Cuál es la aproximación a la decena de 76?', '80', '70', '100', 0],
        ['¿Cuál es la aproximación a la centena de 683?', '700', '600', '1000', 0],
        ['¿Cuál es la mitad de 60?', '30', '25', '20', 0],
        ['¿Cuánto es un tercio de 60?', '20', '30', '50', 0],
        ['¿Cuántos lados tiene un hexágono?', '6', '7', '5', 0],
        ['¿Qué cantidad expresa el número romano XVIII?', '18', '15', '13', 0],
        ['¿El número 7 es un número primo?', 'Sí', 'No', 'No sé', 0],
        ['¿Cuál es la raíz cuadrada de 81?', '9', '20', '80', 0],
        ['División con divisor de dos cifras: ¿cuál es el resultado de 40 / 20?', '2', '4', '8', 0],
        ['Un cuadrilátero que tiene solo 2 lados paralelos es un...', 'Trapecio', 'Cuadrado', 'Rectangulo', 0],
        ['Cinco personas se reunieron para comer y cada una abrazó a las demás una vez. ¿Cuántos abrazos se dieron?', '10 abrazos', '20 abrazos', '15 abrazos', 0],
        ['¿Qué cantidad expresa el número romano XLIX?', '49', '50', '60', 0],
        ['¿Cómo se llaman los polígonos que tienen sus lados y/o sus ángulos desiguales?', 'Irregulares', 'Iguales', 'Diferentes', 0]
    ],
    "musica": [
        ['¿Qué banda o artista lanzó el álbum "Thriller" en 1982?', 'Prince', 'U2', 'Michael Jackson', 2],
        ['¿Qué banda es conocida por la canción de 1987 "With or Without You"?', 'The Police', 'R.E.M.', 'U2', 2],
        ['¿Quién cantó "Girls Just Want to Have Fun" en 1983?', 'Madonna', 'Cyndi Lauper', 'Whitney Houston', 1],
        ['¿Qué banda tuvo un éxito con "Sweet Child o\' Mine" en 1987?', 'Bon Jovi', 'Guns N\' Roses', 'Def Leppard', 1],
        ['¿Qué canción de The Police de 1983 incluye la letra "I\'ll be watching you"?', 'Roxanne', 'Message in a Bottle', 'Every Breath You Take', 2],
        ['¿Qué éxito de Survivor de 1982 fue presentado en la película "Rocky III"?', 'Eye of the Tiger', 'Burning Heart', 'The Search Is Over', 0],
        ['¿Qué banda lanzó "Another One Bites the Dust" en 1980?', 'AC/DC', 'Queen', 'The Rolling Stones', 1],
        ['¿Qué banda lanzó el álbum "Nevermind" en 1991?', 'Pearl Jam', 'Nirvana', 'Soundgarden', 1],
        ['¿Quién cantó "My Heart Will Go On" de la película "Titanic" en 1997?', 'Whitney Houston', 'Mariah Carey', 'Celine Dion', 2],
        ['¿Qué grupo de chicas lanzó el éxito "Wannabe" en 1996?', 'TLC', 'Destiny\'s Child', 'Spice Girls', 2],
        ['¿Qué banda tuvo éxito con "Losing My Religion" en 1991?', 'R.E.M.', 'Radiohead', 'The Cranberries', 0],
        ['¿Qué canción de Ricky Martin se convirtió en un éxito mundial en 1999?', 'She Bangs', 'La Bomba', 'Livin\' la Vida Loca', 2],
        ['¿Qué canción de No Doubt se convirtió en un éxito en 1995?', 'Don\'t Speak', 'Just a Girl', 'Spiderwebs', 0],
        ['¿Qué banda lanzó "American Idiot" en 2004?', 'Blink-182', 'Green Day', 'Sum 41', 1],
        ['¿Qué canción de Pharrell Williams de 2013 apareció en la película "Mi Villano Favorito 2"?', 'Get Lucky', 'Blurred Lines', 'Happy', 2],
        ['¿Qué artista tuvo un éxito con "Uptown Funk" en 2014?', 'Justin Timberlake', 'Bruno Mars', 'Drake', 1],
        ['¿Quién cantó "Roar" en 2013?', 'Katy Perry', 'Miley Cyrus', 'Ariana Grande', 0],
        ['¿Qué canción de Luis Fonsi y Daddy Yankee se convirtió en un éxito global en 2017?', 'Shape of You', 'Sorry', 'Despacito', 2],
        ['¿Qué artista tuvo un éxito con "Rolling in the Deep" en 2010?', 'Lady Gaga', 'Adele', 'Taylor Swift', 1],
        ['¿Por qué género es principalmente conocida Taylor Swift?', 'Country', 'Jazz', 'Heavy Metal', 0],
        ['¿Con qué género se asocia la banda Metallica?', 'Country', 'Heavy Metal', 'Reggae', 1],
        ['¿Qué género describe mejor la música de Bob Marley?', 'Country', 'Reggae', 'Clásica', 1],
        ['¿Qué género describe mejor la música de The Beatles durante sus primeros años?', 'Heavy Metal', 'Reggae', 'Rock and Roll', 2],
        ['¿Quién compuso la "Sonata al claro de luna"?', 'Johann Sebastian Bach', 'Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 1],
        ['¿Quién compuso "Las cuatro estaciones"?', 'Antonio Vivaldi', 'George Frideric Handel', 'Franz Joseph Haydn', 0],
        ['¿Qué canción contiene la letra "Eres mi fuego, mi único deseo"?', 'Bye Bye Bye de NSYNC', 'I Want It That Way de Backstreet Boys', 'Tearin\' Up My Heart de NSYNC', 2],
        ['¿Qué canción contiene la letra "Es mi vida, es ahora o nunca"?', 'Living on a Prayer by Bon Jovi', 'It\'s My Life by Bon Jovi', 'Wanted Dead or Alive by Bon Jovi', 1],
        ['¿Qué canción contiene la letra "Despiértame cuando todo haya terminado, cuando sea más sabio y más viejo"?', 'Wake Me Up por Avicii', 'Waka Waka por Shakira', 'Don\'t Wake Me Up por Chris Brown', 0],
        ['¿Cómo se murió el Amigo Bronco?', 'No se murió', 'Se rompieron sus tobillos', 'Lo mató su amigo', 0],
        ['¿Quién es el culpable que tú por dentro estés llorando?', 'Tú eres el culpable.', 'La puerta negra', 'Los Tigres del Norte', 0],
        ['¿Por qué no me hubieras dejado esa noche?', 'porque esa misma noche encontré un amor.', 'porque esa misma noche encontré calor.', 'porque esa misma noche me volví millonario.', 2],
        ['¿Qué es más difícil?', 'Solucionar un cubo Rubix', 'vivir sin ti', 'tener tu amor', 2],
        ['¿Quién manejaba la Suburban Dorada?', 'Arturo y Raúl', 'Pedro y Martin', 'Camelia la texana', 2],
        ['¿Quién es conocido como "El Rey de la Canción Ranchera"?', 'Vicente Fernández', 'Pedro Infante', 'Jorge Negrete', 0],
        ['¿Qué grupo mexicano popularizó la canción "La Culebra"?', 'Los Tigres del Norte', 'Bronco', 'Intocable', 1],
        ['¿Quién cantó "El Son de la Negra"?', 'Vicente Fernández', 'Mariachi Vargas de Tecalitlán', 'Pedro Infante', 1],
        ['¿Quién es conocido como "El Sol de México"?', 'Luis Miguel', 'Pedro Infante', 'Alejandro Fernández', 0],
        ['¿Qué banda mexicana popularizó "Oye Mi Amor"?', 'Café Tacvba', 'Mana', 'Zoé', 1],
        ['¿Quién fue la "Reina del Tex-Mex"?', 'Selena Quintanilla', 'Thalía', 'Jenni Rivera', 0],
        ['¿Qué canción es considerada uno de los himnos del rock mexicano?','La Culebra', 'Chilanga Banda', 'Eres', 1],
        ['¿Qué cantante mexicana es conocida como "La Diva de la Banda"?', 'Jenni Rivera', 'Shakira', 'Alejandra Guzmán', 0],
        ['¿Qué canción popularizó Ritchie Valens?','La Bamba', 'Cielito Lindo', 'El carretero', 0],
        ['¿Qué banda mexicana hizo famosa la canción "Rayando El Sol"?', 'Caifanes', 'Mana', 'Los Enanitos Verdes', 1],
        ['¿Quién es conocido como "El Charro de Huentitán"?', 'Vicente Fernández', 'José Alfredo Jiménez', 'Jorge Negrete', 0],
        ['¿Quién cantó "Amor Eterno"?', 'José Alfredo Jiménez', 'Jenni Rivera', 'Rocío Dúrcal', 2],
        ['¿Qué cantante mexicana interpretó "La Loba"?', 'Shakira', 'Thalía', 'Paulina Rubio', 1],
        ['¿Quién interpretó "Tu cárcel" en los años 90?', 'Los Bukis', 'Los Ángeles Azules', 'La Banda MS', 0],
        ['¿Qué banda de rock mexicana popularizó "La Muralla"?', 'Caifanes', 'Mana', 'Molotov', 0],
        ['¿Qué grupo mexicano popularizó "La Chona"?', 'Los Tucanes de Tijuana', 'Los Tigres del Norte', 'Cañaveral', 0],
        ['¿Qué cantante mexicana es famosa por su rol en la telenovela "María la del Barrio"?', 'Thalía', 'Lucero', 'Paulina Rubio', 0],
        ['¿Qué banda mexicana de rock se destacó con "Puto"?', 'Molotov', 'Café Tacvba', 'Maná', 0],
        ['¿Qué cantante mexicana es famosa por su canción "Hasta la raíz"?', 'Natalia Lafourcade', 'Julieta Venegas', 'Mon Laferte', 0]
    ]



};



;