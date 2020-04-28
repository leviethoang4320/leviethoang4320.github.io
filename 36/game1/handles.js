class handles {
    constructor (game){
        this.game = game ;
        this.checks = [];
        this.listenKeyBoard();
        this.request();
        this.checked();
    }
    checked(){
       for(let i=0; i< 5; i++){
           this.checks[i]=false;
       }
    }
    listenKeyBoard(){
		document.addEventListener('keydown', (event) => {
			console.log(event.code);
			switch (event.code) {
                /*case 'Space':
                    this.game.car.start = true;*/
				case 'Digit1':
                    if(this.game.car.x == this.game.array.stations[0].x){
                        console.log('aaa');
                    
                        this.checks[0] = true;
                        SPEED = 1;
                    }
                    break;
                    case 'Digit2':
                        if(this.game.car.x == this.game.array.stations[1].x){
                            //console.log('aaa');
                        
                            this.checks[1] = true;
                            SPEED = 1;
                        }
                        break;
                    case 'Digit3':
                        if(this.game.car.x == this.game.array.stations[2].x){
                            //console.log('aaa');
                        
                            this.checks[2] = true;
                            SPEED = 1;
                        }
                        break;
                    case 'Digit4':
                        if(this.game.car.x == this.game.array.stations[3].x){
                            //console.log('aaa');
                        
                            this.checks[3] = true;
                            SPEED = 1;
                        }
                        break;
                    case 'Digit5':
                        if(this.game.car.x == this.game.array.stations[4].x){
                            //console.log('aaa');
                        
                            this.checks[4] = true;
                            SPEED = 1;
                        }
                        break;
			}
		});
    }
    request(){
        
    }
    update(){
       /*if(this.game.car.x == this.game.array.stations[5].x){
           //this.game.canvas.style.display = 'none';
           console.log('asc');
           document.getElementById('play').style.display = 'block';
       }*/
       if(this.game.car.x==150) {
        document.getElementById('sound1').style.display = 'block';
        }
        else document.getElementById('sound1').style.display = 'none';
       
        if(this.game.car.x==250) {
            document.getElementById('sound2').style.display = 'block';
            }
            else document.getElementById('sound2').style.display = 'none';

         if(this.game.car.x==350) {
             document.getElementById('sound3').style.display = 'block';
                }
         else document.getElementById('sound3').style.display = 'none';

         if(this.game.car.x==450) {
            document.getElementById('sound4').style.display = 'block';
            }
            else document.getElementById('sound4').style.display = 'none';      
         if(this.game.car.x==550) {
            document.getElementById('sound5').style.display = 'block';
                }
            else document.getElementById('sound5').style.display = 'none'; 
    }
    draw(){
        for(let i = 0; i<5; i++){
        if(this.checks[i]){
            this.game.context.font = "40px Georgia";
            this.game.context.fillText(i+1,this.game.array.stations[i].x+20,this.game.array.stations[i].y+40);
        }
    }
    
    }

}