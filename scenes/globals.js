
        var demo=false;
        var w_width=window.innerWidth;
        var w_height=window.innerHeight;
        var mid_h=w_width/2;
        var mid_v=w_height/2;
        var mid_mid_v=mid_v/2;
        var mid_mid_h=mid_h/2;
        var padding=20;
        var scale=1.4;



        var start=false;
        var stay=false;
        var stillMoving=false;

        var index=0;
        
        
        var gameover=false;//force gameover
        var gameover_onetime=false;



        var users=[
            {nombre:"Luis Daniel Sandoval",personaje:null},
            {nombre:"Oscar Alvarez",personaje:null},
            {nombre:"Sandra Ines Vera",personaje:null},
            {nombre:"Jorge Lerings Rodríguez",personaje:null},
            {nombre:"Sonia Marin",personaje:null},
            {nombre:"Alfredo Pérez",personaje:null},
            {nombre:"Alejandro Vargas",personaje:null},
            {nombre:"Hernán Lucas",personaje:null},
            {nombre:"Iván Méndez",personaje:null},
            {nombre:"Adolfo Soria",personaje:null},
            {nombre:"Marco Antonio Hernández",personaje:null},
            {nombre:"Karina Jiménez",personaje:null},
            {nombre:"Estefanía Carrera",personaje:null},
            {nombre:"Rodrigo Javier Gonzalez",personaje:null},
            {nombre:"Sergio Isaac Molina",personaje:null},
            {nombre:"Kasandra López",personaje:null},
            {nombre:"José Juan Zamora",personaje:null},
            {nombre:"Bernardo Guerrero",personaje:null},
            {nombre:"Aarón Cervantes",personaje:null},
            {nombre:"Victor Adjani Corona",personaje:null},
            {nombre:"Jose Arturo Molina",personaje:null},
            {nombre:"Graciela",personaje:null},
            {nombre:"Jaime Ortiz",personaje:null},
            {nombre:"Guillermo Ortiz",personaje:null},
            {nombre:"Carlos Antonio Espinoza",personaje:null},
            {nombre:"Oscar Saucedo",personaje:null},
            {nombre:"Marisela Sánchez",personaje:null},
            {nombre:"Karen Eridany Marín",personaje:null},
            {nombre:"Aldo Eric Bahena",personaje:null},
            {nombre:"Rubén Díaz",personaje:null},
            {nombre:"Eduardo David Beltran",personaje:null},
            {nombre:"Luis Alberto Santiago",personaje:null},
            {nombre:"Estephania Krauletz",personaje:null},
            {nombre:"Jenny Irais Avelino",personaje:null},
            {nombre:"Juan Francisco Veneros",personaje:null},
            {nombre:"Rafael Alcalá",personaje:null},
            {nombre:"Christian Isaac Mercado",personaje:null},
            {nombre:"Santa Martha Flores",personaje:null},
            {nombre:"Beatriz Huerta",personaje:null},
            {nombre:"Luis Angel Gamboa",personaje:null},
            {nombre:"Abraham Amaya",personaje:null},
            {nombre:"Ricardo Daniel Gómez",personaje:null},
            {nombre:"Jonathan Cabrera",personaje:null},
            {nombre:"Gabriel De Jesús ",personaje:null},
            {nombre:"Flor Evangelina Sandoval",personaje:null},
            {nombre:"Alan Yael Hernández",personaje:null},
            {nombre:"Adriana Alonso",personaje:null},
            {nombre:"Erik Anthony Sánchez",personaje:null},
            {nombre:"Gustavo Cesar Valero",personaje:null},
            {nombre:"Armando Cuevas",personaje:null},
            {nombre:"Alberto Sánchez",personaje:null},
            {nombre:"Wulfrano Castillo",personaje:null},
            {nombre:"Daniel Martin González",personaje:null},
            {nombre:"Grecia Valentino",personaje:null},
            {nombre:"Sergio Ivan Espitia",personaje:null},
            {nombre:"Francisco Javier Martinez",personaje:null},
            {nombre:"Maria Guadalupe Garcia",personaje:null},
            {nombre:"Jorge Brian Nava",personaje:null},
            {nombre:"Eduardo Hernández",personaje:null},
            {nombre:"Evelyn Deniss Gallegos",personaje:null},
            {nombre:"Wendy Elizabeth Argumedo",personaje:null},
            {nombre:"Karla Paola Arredondo",personaje:null},
            {nombre:"Cristobal Ramos",personaje:null},
            {nombre:"Reyna Marisol Tovar",personaje:null},
            {nombre:"Pablo Cureño",personaje:null},
            {nombre:"Héctor Leonardo Ramos",personaje:null},
            {nombre:"Diego Armando Ariza",personaje:null},
            {nombre:"Anthony Mendoza",personaje:null},
            {nombre:"Brian Sanchez",personaje:null},
            {nombre:"Juan Carlos Zúñiga",personaje:null},
            {nombre:"Eduardo Rodriguez",personaje:null},
            {nombre:"Maria Guadalupe Landeros",personaje:null},
            {nombre:"Jesús Adrian Hernández",personaje:null},
            {nombre:"Pamela Fuentes",personaje:null},
            {nombre:"Daniel Omar Cruz",personaje:null},
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