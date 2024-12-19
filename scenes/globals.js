    var game=undefined;
        var demo=false;
        var w_width=window.innerWidth;
        var w_height=window.innerHeight;
        var mid_h=w_width/2;
        var mid_v=w_height/2;
        var mid_mid_v=mid_v/2;
        var mid_mid_h=mid_h/2;
        var padding=20;
        var scale=1.4;


        var receiveMembers = [];
        var usersActive = [];
        var scoreBoardLap = [];
        var resultsGamers = [];
        var start=false;
        var stay=false;
        var stillMoving=false;

        var index=0;
        
        
        var gameover=false;//force gameover
        var gameover_onetime=false;



        var users = [
            {nombre: 'AARON CERVANTES', personaje: null},
            {nombre: 'ADOLFO SORIA', personaje: null},
            {nombre: 'ADRIANA ALONSO', personaje: null},
            {nombre: 'ALAN HERNANDEZ', personaje: null},
            {nombre: 'ALBERTO SANCHEZ', personaje: null},
            {nombre: 'ALDO BAHENA', personaje: null},
            {nombre: 'ALEJANDRO VARGAS', personaje: null},
            {nombre: 'ALFREDO PEREZ', personaje: null},
            {nombre: 'ANDREA', personaje: null},
            {nombre: 'ANGEL GAMBOA', personaje: null},
            {nombre: 'ANTHONY MENDOZA', personaje: null},
            {nombre: 'ARMANDO CUEVAS', personaje: null},
            {nombre: 'ARTURO MOLINA', personaje: null},
            {nombre: 'BEATRIZ HUERTA', personaje: null},
            {nombre: 'BERNARDO GUERRERO', personaje: null},
            {nombre: 'BRIAN SANCHEZ', personaje: null},
            {nombre: 'CARLOS ESPINOZA', personaje: null},
            {nombre: 'CHRISTIAN MERCADO', personaje: null},
            {nombre: 'CRISTOBAL RAMOS', personaje: null},
            {nombre: 'DANIEL GONZALEZ', personaje: null},
            {nombre: 'DANIEL OMAR CRUZ', personaje: null},
            {nombre: 'DANIEL SANDOVAL', personaje: null},
            {nombre: 'DANIELA', personaje: null},
            {nombre: 'DAVID 2', personaje: null},
            {nombre: 'DAVID BELTRAN', personaje: null},
            {nombre: 'DAVID BANDI', personaje: null},
            {nombre: 'DENISS GALLEGOS', personaje: null},
            {nombre: 'DIEGO ARIZA', personaje: null},
            {nombre: 'EDUARDO HERNANDEZ', personaje: null},
            {nombre: 'EDUARDO RODRIGUEZ', personaje: null},
            {nombre: 'ERIK SANCHEZ', personaje: null},
            {nombre: 'ESPERANZA', personaje: null},
            {nombre: 'ESTEFANIA CARRERA', personaje: null},
            {nombre: 'ESTEPHANIA KRAULETZ', personaje: null},
            {nombre: 'FLOR SANDOVAL', personaje: null},
            {nombre: 'FRANCISCO MARTINEZ', personaje: null},
            {nombre: 'GABRIEL REYES', personaje: null},
            {nombre: 'GRACIELA HERNANDEZ', personaje: null},
            {nombre: 'GRECIA VALENTINO', personaje: null},
            {nombre: 'GUILLERMO ORTIZ', personaje: null},
            {nombre: 'GUSTAVO VALERO', personaje: null},
            {nombre: 'HECTOR RAMOS', personaje: null},
            {nombre: 'IVAN MENDEZ', personaje: null},
            {nombre: 'JAIME ORTIZ', personaje: null},
            {nombre: 'JENNY AVELINO', personaje: null},
            {nombre: 'JESUS HERNANDEZ', personaje: null},
            {nombre: 'JORGE NAVA', personaje: null},
            {nombre: 'JORGE NAVARRETE', personaje: null},
            {nombre: 'JOSE ZAMORA', personaje: null},
            {nombre: 'JUAN CARLOS ZUÑIGA', personaje: null},
            {nombre: 'JUAN MIRANDA', personaje: null},
            {nombre: 'JUAN VENEROS', personaje: null},
            {nombre: 'KAREN MARIN', personaje: null},
            {nombre: 'KARINA JIMENEZ', personaje: null},
            {nombre: 'KASANDRA LOPEZ', personaje: null},
            {nombre: 'LERINGS RODRIGUEZ', personaje: null},
            {nombre: 'LUIS SANTIAGO', personaje: null},
            {nombre: 'MARCO HERNANDEZ', personaje: null},
            {nombre: 'MARIA GARCIA', personaje: null},
            {nombre: 'MARIA LANDEROS', personaje: null},
            {nombre: 'MARISELA SANCHEZ', personaje: null},
            {nombre: 'MAXIMILIANO', personaje: null},
            {nombre: 'OSCAR ALVAREZ', personaje: null},
            {nombre: 'OSCAR SAUCEDO', personaje: null},
            {nombre: 'PABLO CUREÑO', personaje: null},
            {nombre: 'PAMELA FUENTES', personaje: null},
            {nombre: 'PAOLA ARREDONDO', personaje: null},
            {nombre: 'RAFAEL ALCALA', personaje: null},
            {nombre: 'REYNA TOVAR', personaje: null},
            {nombre: 'RICARDO GOMEZ', personaje: null},
            {nombre: 'RODRIGO GONZALEZ', personaje: null},
            {nombre: 'RUBEN DIAZ', personaje: null},
            {nombre: 'SANDRA VERA', personaje: null},
            {nombre: 'SANTA FLORES', personaje: null},
            {nombre: 'SERGIO ESPITIA', personaje: null},
            {nombre: 'SERGIO MOLINA', personaje: null},
            {nombre: 'SONIA MARIN', personaje: null},
            {nombre: 'VICTOR CORONA', personaje: null},
            {nombre: 'WENDY ARGUMEDO', personaje: null},
            {nombre: 'WULFRANO CASTILLO', personaje: null}
        ];


        var base_cols=10;
        var base_rows=3;

        let col_size=(w_width-(padding*base_cols))/base_cols;
        let cols=[];
        let base_sum=0;

        for (var i = 0; i < base_cols; i++) {
            base_sum+=padding+(col_size)
            cols.push(base_sum);
        }

        var pets=["head_1","head_2","head_3","head_4","head_5","head_6"]

        var modal=undefined;
        var teams=[];
        var index_teams=0;
        function generateTeams(){

            var equipos=10;
            var team_size=parseInt(users.length/equipos);
            var team=0;
            var index=0;
            users=shuffle(users);
            for (var i = 0; i < equipos; i++) {
                teams.push([]);

                for (var j = 0; j < team_size; j++) {
                    teams[team].push(users[index].nombre);
                    index++;
                }
                team++;
            }

        }

        function generateImages(id_destino,image_url){
            const canvas = document.getElementById('team_canvas');
            const ctx = canvas.getContext('2d');
            const imgExport = document.getElementById(id_destino);

            // Dibujar algo en el canvas
            const image = new Image();
            image.crossOrigin = 'Anonymous';

            image.src = '/images/gui/'+image_url; // URL de la imagen
            
            image.onload = () => {
                // Dibujar la imagen en el canvas
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

                // Añadir texto
                ctx.font = '25px Mikado';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                row=canvas.width / 2.5;
                for (var i = 0; i < teams[index_teams].length; i++) {
                    ctx.fillText(teams[index_teams][i], canvas.width / 2, row);
                    row+=canvas.width / 8;
                    
                }
                index_teams++;
                row=canvas.width / 2.5;
                
                // Exportar el canvas a un URI de datos
                const dataURL = canvas.toDataURL();
                imgExport.src = dataURL; // Asignar el URI a la etiqueta <img>
            };
        }

        var synthesis = window.speechSynthesis;
            var utterance = new SpeechSynthesisUtterance("");
            utterance.pitch=1.6;
            utterance.rate=1.1;

        setTimeout(()=>{
            var voices=synthesis.getVoices();
            voices=synthesis.getVoices();
            utterance.voice=voices[9];
            console.log(voices);
        },500)
        

        function shuffle(array) {
            let currentIndex = array.length;
  
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
  
              // Pick a remaining element...
              let randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
  
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
          }
