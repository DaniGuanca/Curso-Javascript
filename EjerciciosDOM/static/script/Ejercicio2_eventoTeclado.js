let x= 0,
    y= 0;

export function shortcuts (){
    document.addEventListener("keydown",e=>{
        if (e.altKey && e.key == "a"){
            alert(`Apretaste alt + ${e.key}`);
        }

        if (e.altKey && e.key == "c"){
            confirm(`Apretaste alt + ${e.key}`);
        }

        if (e.altKey && e.key == "p"){
            prompt(`Apretaste alt + ${e.key}`);
        }
    });

};

export function moveball(e, ball, stage){
    const $ball = document.querySelector(ball);
    const $stage = document.querySelector(stage);
    //la variable que va a tener el limite del stage y de la bola
    //la funcion getBoundingClientRect dice que tan cerca esta el elemento de otro elemento
    const limitBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();

    //preventDefault es para sacar el comportamiento por defecto de las teclas, como desplazar por la barra
    switch (e.keyCode) {
        //izq
        case 37:            
            if(limitBall.left > limitStage.left){
                e.preventDefault();
                x--;
            } 
            break;
        //arr
        case 38:            
            if(limitBall.top > limitStage.top){
                e.preventDefault();
                y--;
            } 
            break;
        //der
        case 39:            
            if(limitBall.right < limitStage.right){
                e.preventDefault();
                x++;
            } 
            break;
        //ab
        case 40:            
            if(limitBall.bottom < limitStage.bottom){
                e.preventDefault();
                y++;
            } 
            break;    
    }

    //uso transform para mover la pelota, lo multiplico por 10 para que se vea el movimiento
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
};