class Form{
  constructor(){
      this.title=createElement('h2');
      this.pizza=createButton("pizza");
      this.burger=createButton("burger");
      this.noodles=createButton("noodles");
      this.springroll=createButton("springroll");
      this.greeting1=createElement('h3');
      this.greeting2=createElement('h3');
      this.greeting3=createElement('h3');
      this.greeting4=createElement('h3');
      this.onionButton=createButton('onion');
      this.sauceButton=createButton('sauce');
      this.doughButton=createButton('dough');
      this.cheeseButton=createButton('cheese');
      this.oreganoButton=createButton('oregano');
      this.bakeButton=createButton('bake');
      this.greeting5=createElement('h5');
      this.bottomTitle=createElement('h4');
      this.chapatiButton=createButton('chapati');
      this.rollButton=createButton('roll');
      this.pannerButton=createButton('panner');
      this.topburgerBreadButton=createButton('topburgerBread');
      this.cookednoodlesButton=createButton('cookednoodles');
      this.bottomburgerbreadButton=createButton('bottomburgerbread');
      this.cookButton=createButton('cook');
      this.bakeButton1=createButton('bake');
      this.oreganoButton1=createButton('oregano');
      this.bottomTitle=createElement('h2');

  }

display(){
this.title.html("WELCOME VISHJAN RESTAURANT");
this.title.position(100,35);
this.pizza.position(90,200);
this.burger.position(190,200);  
this.noodles.position(290,200);
this.springroll.position(390,200);
this.bottomTitle.position(200,10);
fill("blue");
this.bottomTitle.html('VishJan restaurant ');



this.pizza.mousePressed(()=>{
this.greeting1.html("hello,start making your pizza by clicking on the items");
this.greeting1.position(100,35);
this.bottomTitle.position(100,500);
this.title.hide();
this.burger .hide();
this.noodles.hide();
this.springroll.hide();
this.pizza.hide();

    
    //onion
onion=createSprite(500,100,30,30);
this.onionButton.position(500,140);
onion.addImage("onion",onionImg);
onion.scale=0.2;
    
this.onionButton.mousePressed(()=>{
onion.x=300;
onion.y=300;
    })

    //sauce
sauce=createSprite(500,200,30,30);
sauce.addImage("sauce",sauceImg);
this. sauceButton.position(500,240);
sauce.scale=0.05;
this.sauceButton.mousePressed(()=>{
sauce.x=300;
sauce.y=300;
     })
    
    ////dough
dough=createSprite(500,300,30,30);
dough.addImage("dough",doughImg);
dough.scale=0.1;
this. doughButton.position(500,340);
this.doughButton.mousePressed(()=>{
dough.x=300;
dough.y=300;
     })
    
   
    //cheese
cheese=createSprite(500,400,30,30);
cheese.addImage("cheese",cheeseImg);
cheese.scale=0.2;
this. cheeseButton.position(500,440);
this.cheeseButton.mousePressed(()=>{
cheese.x=300;
cheese.y=300;
     })
    
    //oregano
oregano=createSprite(500,500,30,30);
oregano.addImage("oregano",oreganoImg);
oregano.scale=0.2;
this. oreganoButton.position(500,540);
this. oreganoButton.mousePressed(()=>{
oregano.x=300;
oregano.y=300;
     })
     
this.bakeButton.position(300,450);
this.bakeButton.mousePressed(()=>{
pizza=createSprite(300,300,40,40);
this.greeting1.hide();
onion.visible=false
sauce.visible=false
dough.visible=false
cheese.visible=false
oregano.visible=false
this.doughButton.hide();
this.sauceButton.hide();
this.oreganoButton.hide();
this.onionButton.hide();
this.doughButton.hide();
this.cheeseButton.hide();
this.greeting5.html("your pizza is ready");
this.greeting5.position(100,35);
pizza.addImage("pizza",pizzaImg);

    })
  

  })
this.springroll.mousePressed(()=>{
this.greeting2.html("hello,start making your springroll by clicking on the items");
this.bottomTitle.position(100,500);
this.greeting2.position(100,35);
this.greeting1.hide();
this.title.hide();
this.burger .hide();
this.noodles.hide();
this.springroll.hide();
this.pizza.hide();
    //onion
onion=createSprite(500,100,30,30);
this.onionButton.position(500,120);
onion.addImage("onion",onionImg);
onion.scale=0.2;
    
this.onionButton.mousePressed(()=>{
onion.x=300;
onion.y=300;
    })
    //sauce
sauce=createSprite(500,200,30,30);
sauce.addImage("sauce",sauceImg);
this. sauceButton.position(500,220);
sauce.scale=0.05;
this.sauceButton.mousePressed(()=>{
sauce.x=300;
sauce.y=300;
     })

    //chapatidough
chapati=createSprite(500,300,30,30);
chapati.addImage("dough",doughImg);
chapati.scale=0.1;
this. chapatiButton.position(500,320);
this.chapatiButton.mousePressed(()=>{
chapati.x=300;
chapati.y=300;
     })
    //cheese
cheese=createSprite(500,400,30,30);
cheese.addImage("cheese",cheeseImg);
cheese.scale=0.2;
this. cheeseButton.position(500,420);
this.cheeseButton.mousePressed(()=>{
cheese.x=300;
cheese.y=300;
     })
    //oregano
oregano=createSprite(500,500,30,30);
oregano.addImage("oregano",oreganoImg);
oregano.scale=0.2;
this. oreganoButton.position(500,540);
this. oreganoButton.mousePressed(()=>{
oregano.x=300;
oregano.y=300;
     })
    //panner
panner=createSprite(500,500,30,30);
panner.addImage("panner",pannerImg);
panner.scale=0.2;
this. pannerButton.position(500,520);
this. pannerButton.mousePressed(()=>{
panner.x=300;
panner.y=300;
     })
this.rollButton.position(300,450);
this.rollButton.mousePressed(()=>{
springroll=createSprite(300,300,40,40);
springroll.addImage('springroll', springRollImg);
this.greeting5.html("your springroll is ready");
this.greeting5.position(100,35);
this.greeting2.hide();
             
 
     })

   })
this.burger.mousePressed(()=>{
this.greeting3.html("hello,start making your burger by clicking on the items");
this.greeting3.position(100,35);
this.greeting2.hide();
this.greeting1.hide();
this.title.hide();
this.burger .hide();
    this.noodles.hide();
    this.springroll.hide();
    this.pizza.hide();
    //onion
    onion=createSprite(500,100,30,30);
    onion.addImage("onion",onionImg);
    onion.scale=0.2;
    this.onionButton.position(520,100);
    this.onionButton.mousePressed(()=>{
      onion.x=300;
      onion.y=300;
    })
   
     //sauce
     sauce=createSprite(500,150,30,30);
     sauce.addImage("sauce",sauceImg);
     sauce.scale=0.05;
     this.sauceButton.position(520,150);
     this.sauceButton.mousePressed(()=>{
       sauce.x=300;
       sauce.y=300;
     })
     //topburgerBread
     topburgerBread=createSprite(500,200,30,30);
     topburgerBread.addImage("topburgerBread",topburgerbreadImg);
     topburgerBread.scale=0.2;
     this.topburgerBreadButton.position(500,220);
     this.topburgerBreadButton.mousePressed(()=>{
       topburgerBread.x=300;
       topburgerBread.y=300;
     })
     
     //bottomburgerbread
     bottomburgerbread=createSprite(500,400,30,30);
     bottomburgerbread.addImage("bottomburgerbread",bottomburgerbreadImg);
     bottomburgerbread.scale=0.2;
     this.bottomburgerbreadButton.position(455,430);
    this.bottomburgerbreadButton.mousePressed(()=>{
      bottomburgerbread.x=300;
      bottomburgerbread.y=300;
    })
     //cheese
     cheese=createSprite(500,250,30,30);
     cheese.addImage("cheese",cheeseImg);
     cheese.scale=0.2;
     this.cheeseButton.position(520,250);
     this.cheeseButton.mousePressed(()=>{
       cheese.x=300;
       cheese.y=300;
     })
     
     //oregano
     oregano=createSprite(500,300,30,30);
     oregano.addImage("oregano",oreganoImg);
     oregano.scale=0.2;
     this.oreganoButton1.position(520,300);
     this.oreganoButton1.mousePressed(()=>{
       oregano.x=300;
       oregano.y=300;
     })
     //paneer
     panner=createSprite(500,350,30,30);
     panner.addImage("panner",pannerImg);
     panner.scale=0.2;
     this.pannerButton.position(520,350);
      this.bakeButton1.position(300,450);
      this.bakeButton1.mousePressed(()=>{
        onion.visible=false
        oregano.visible=false
        panner.visible=false
        topburgerBread.visible=false
        bottomburgerbread.visible=false
        cheese.visible=false
        sauce.visible=false
        this.greeting3.hide();
        this.greeting5.html('your burger is ready');
        this.greeting5.position(100,35);
        this.onionButton.hide();
        this.bottomburgerbreadButton.hide();
        this.topburgerBreadButton.hide();
        this.sauceButton.hide();
        this.cheeseButton.hide();
        this.oreganoButton1.hide();
        this.pannerButton.hide();
        burger=createSprite(300,300,10,10);
        burger.addImage("burger",burgerImg);
      })

     })
     this.noodles.mousePressed(()=>{
     this.greeting4.html("hello,start making your noodles by clicking on the items");
     this.greeting4.position(100,35);
     this.greeting1.hide();
     this.greeting2.hide();
     this.greeting3.hide();
     this.title.hide();
     this.burger .hide();
     this.noodles.hide();
     this.springroll.hide();
     this.pizza.hide();
     //onion
     onion=createSprite(500,100,30,30);
     this.onionButton.position(500,100);
     onion.addImage("onion",onionImg);
     onion.scale=0.2;
    
     this.onionButton.mousePressed(()=>{
     onion.x=300;
     onion.y=300;
     })
     //sauce
     sauce=createSprite(500,150,30,30);
     sauce.addImage("sauce",sauceImg);
     this. sauceButton.position(500,150);
     sauce.scale=0.05;
     this.sauceButton.mousePressed(()=>{
     sauce.x=300;
     sauce.y=300;
     })
     //cheese
     cheese=createSprite(500,250,30,30);
     cheese.addImage("cheese",cheeseImg);
     cheese.scale=0.2;
     this. cheeseButton.position(500,250);
     this.cheeseButton.mousePressed(()=>{
     cheese.x=300;
     cheese.y=300;
     })
     //oregano
     oregano=createSprite(500,300,30,30);
     oregano.addImage("oregano",oreganoImg);
     oregano.scale=0.2;
     this. oreganoButton.position(500,300);
     this. oreganoButton.mousePressed(()=>{
      oregano.x=300;
      oregano.y=300;
     })
     //panner
     panner=createSprite(500,350,30,30);
     panner.addImage("panner",pannerImg);
     panner.scale=0.2;
     this. pannerButton.position(500,350);
     this. pannerButton.mousePressed(()=>{
      panner.x=300;
      panner.y=300;
     })
    
     //cookednoodles
     cookednoodles=createSprite(500,450,30,30);
     cookednoodles.addImage("cookednoodles",cookednoodlesImg);
     cookednoodles.scale=0.06;
     this.cookednoodlesButton.position(500,450);
 this.cookednoodlesButton.mousePressed(()=>{
      cookednoodles.x=300;
      cookednoodles.y=300;
     })
     this.cookButton.position(300,450);
    this.cookButton.mousePressed(()=>{
      noodles=createSprite(300,260,40,40);     
      this.greeting4.hide();
      onion.visible=false
      sauce.visible=false
     panner.visible=false
      cheese.visible=false
      oregano.visible=false
      this.cookednoodlesButton.hide();
      this.sauceButton.hide();
      this.oreganoButton.hide();
      this.onionButton.hide();
      this.pannerButton.hide();
      this.cheeseButton.hide();
      this.greeting5.html("your noodles is ready");
      this.greeting5.position(100,35);
      noodles.addImage("noodles",noodlesImg);

    })
  })



}




}