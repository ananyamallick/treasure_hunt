class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(50,200);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(50,230);
        this.button1.style('background', 'lightgrey');    

//add code for creating and positioning the third input box and button
        
    }
    display(){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
            
        });  
//add code for what happens when the third button is pressed
        
    }
}