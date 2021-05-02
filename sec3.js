class sec3{
constructor(){

    this.access3 = createInput("Code1")
    this.access3.position(50,200);
    this.access3.style('background', 'white');  

    this.button3 = createButton('Check');
    this.button3.position(50,230);
    this.button3.style('background', 'lightgrey'); 
}
display(){
      
    this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
          score++;
     }
     });
  
}
}