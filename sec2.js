class Sec2 {

    constructor(){
        this.access2 = createInput("Code1")
        this.access2.position(50,200);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(50,230);
        this.button2.style('background', 'lightgrey');
    }
    display()
    {
        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                 this.access2.hide();
                score++;
             }
          });
       
    }
}