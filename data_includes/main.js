    PennController.ResetPrefix(null); // Initiates PennController  
    PennController.AddHost("https://amor.cms.hu-berlin.de/~plescama/Stimuli/")                                                      
        // "https://amor.cms.hu-berlin.de/~plescama/Bild/")
    PennController.Sequence("welcome", "practice",randomize("experiment"), "send", "final")
    PennController.DebugOff() 
  
   

    PennController("welcome",
        defaultText
            .print()
       
        ,
        newText("text1", "<h2>Willkommen zum Experiment!</h2>")
        .settings.center()
        .settings.css("font-size", "large")

        ,
        newText("text3", "Danke, dass Du Dir die Zeit nimmst, an unserem Experiment teilzunehmen. Bevor es losgeht, brauchen wir noch ein paar Informationen von Dir.")
        .settings.center()
        .settings.css("font-size", "large")

        ,
        newText("text2", "<p>Humboldt Universit&auml;t zu Berlin, Insitut f&uuml;r Deutsche Sprache und Linguistik </p>")
        .settings.center()
        .settings.css("font-style","italic")
        ,
        newButton("button1", "Fortsetzen")
            .settings.center()
            .print()
            .wait()
        ,
        getText("text1")
            .remove()
        ,
        getText("text3")
            .remove()
        ,
        getText("text2")
        .remove()
        ,
        getButton("button1")
            .remove()
        
        ,
        newHtml("consentInfo", "consentInfo.html")
            .settings.log()
            .print()
        ,
        newButton("button2", "Fortsetzen")
            .print()
            //.settings.center()
            .wait(getHtml("consentInfo").test.complete()
                .failure( getHtml("consentInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("consentInfo")
            .remove()
        ,
        getButton("button2")
            .remove()
        ,
        newHtml("VPInfo", "VPInfo.html")
            .settings.log()
            .print()
        ,
        newButton("button3", "Fortsetzen")
            .print()
            .wait(getHtml("VPInfo").test.complete()
                .failure( getHtml("VPInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("VPInfo")
            .remove()
        ,
        getButton("button3")
            .remove()
        ,
        newHtml("instructions", "instructions.html")
            .settings.log() // log inputs in html
            .print()
        ,
        newButton("start", "&Uuml;bung starten")
            .print()
            .wait(
              getHtml("instructions").test.complete()
                .failure( getHtml("instructions").warn() )
            )
    )
        
   PennController("practice",
        newText("begin", "Beginn der &Uuml;bungsphase.")
        .settings.css("font-size", "xx-large")
        .settings.italic()
        .settings.center()
        .print()
        ,
        newText("intr", "<br><br>Bitte immer schnellstm&ouml;glich ein Bild ausw&auml;hlen. Sobald Du ein Bild ausgew&auml;hlt hast, kannst Du Deine Wahl nicht mehr &auml;ndern. <br><br> Bitte dr&uuml;cke auf die <b> Leertaste </b> um fortzufahren.")
        .settings.css("font-size", "x-large")
        .settings.center()
        .print()
        ,
        newKey("okay", " ")
        .wait()
        ,
        getText("begin")
        .remove()
        ,
        getText("intr")
        .remove()
        , 
        //Practice round 1
        newText("Satz1", "Welches Bild beschreibt am besten das Wort <strong>Teller</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("pr1", 1000)
        .start()
        .wait()
        ,
    
        newImage("Teller1", "Teller1 .jpg")
         .settings.size(193, 169)
        ,
        newImage("Teller2", "Teller2 .jpg")
         .settings.size(187, 166)
        ,
        newImage("Teller3", "Teller3 .jpg")
         .settings.size(189, 169)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas3", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz1"))
         .settings.add( 439, 108, getImage("Teller1"))
         .settings.add(255, 288, getImage("Teller2"))
         .settings.add( 64, 105, getImage("Teller3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme1")
         .settings.add(getImage("Teller1"), getImage("Teller2"), getImage("Teller3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       // ,
     //  newButton("confirm1", "Best&auml;tigen")
    //    .settings.center()
    //   .print()
    //    .settings.log() // time is also logged for the button press of confirmation
    //    .wait()
        ,
        getText("Satz1")
        .remove()
        ,
        getCanvas("canvas3")
        .remove()
        ,
        getSelector("pickme1")
        .remove()
        ,
     //   getButton("confirm1")
      //  .remove()
     //   ,
        newTimer(500)
        .start()
        .wait()
        ,
  
             
        //Practice round 2
        newText("Satz2", "Welches Bild beschreibt am besten das Wort <strong>Kuchen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("pr2", 1000)
        .start()
        .wait()
        ,
        newImage('Kuchen1' , 'Kuchen1.jpg' )
       .settings.size(251, 191)
        ,
        newImage('Kuchen2' , 'Kuchen2.jpg' )
        .settings.size(251, 192)
        ,
        newImage('Kuchen3' , 'Kuchen3.jpg' )
        .settings.size(208, 179)
        ,
        newImage('Kuchen4' , 'Kuchen4.jpg' )
        .settings.size(199, 186)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'canvas2', 700, 544)
        //.settings.add("center at 50%", "top at 0%",getText("Satz2"))
        .settings.add( 417, 233, getImage('Kuchen1'), 0 )
        .settings.add( 42, 231, getImage('Kuchen2'), 1 )
        .settings.add( 66, 38, getImage('Kuchen3'), 2 )
        .settings.add( 444, 35, getImage('Kuchen4'), 3 )
        .settings.log()
        .print()
        ,
        newSelector("pickme2")
         .settings.add(getImage("Kuchen1"), getImage("Kuchen2"),getImage("Kuchen3"), getImage("Kuchen4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
     //  ,
     //   newButton("confirm2", "Best&auml;tigen")
     //   .settings.center()
     //   .print()
     //   .settings.log() // time is also logged for the button press of confirmation
     //   .wait()
       
        ,
        getText("Satz2")
        .remove()
        ,
        getCanvas("canvas2")
        .remove()
        ,
        getSelector("pickme2")
        .remove()
     //   ,
     //   getButton("confirm2")
     //   .remove()
        , 
        newTimer(500)
        .start()
        .wait()
      
        ,
        newText("end", "Ende der &Uuml;bungsphase. Bitte dr&uuml;cke auf die <strong>Leertaste</strong> um das Experiment zu beginnen.")
        .settings.css("font-size", "x-large")
        .print()
        ,
        newKey(" ")
          .settings.log() // Anfang des Experiments
          .wait()
        ,
        getText("end")
         .remove()
       

        )
     
  //////// Experiment starts
        
         ////////////////// Kippe
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Kippe")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Kippe</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Kippe1", "Kippe1.jpg")
         .settings.size(305, 204)
        ,
        newImage("Kippe2", "Kippe2.jpg")
         .settings.size(300, 201)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 390, 78, getImage("Kippe1"))
         .settings.add(10, 79, getImage("Kippe2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Kippe1"), getImage("Kippe2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
         ////////////////// Karren
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Karren")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Karren</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Karren1", "Karren1.jpg")
         .settings.size(241, 200)
        ,
        newImage("Karren2", "Karren2.jpg")
         .settings.size(282, 196)
        ,
        newImage("Karren3", "Karren3.jpg")
         .settings.size(282, 196)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 226, 234, getImage("Karren1"))
         .settings.add(10, 10, getImage("Karren2"))
         .settings.add(408, 10, getImage("Karren3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Karren1"), getImage("Karren2"), getImage("Karren3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
          ////////////////// Geld
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Geld")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Geld</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Geld1", "Geld1.jpg")
         .settings.size(201, 167)
        ,
        newImage("Geld2", "Geld2.jpg")
         .settings.size(274, 201)
        ,
        newImage("Geld3", "Geld3.jpg")
         .settings.size(202, 167)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 60, 32, getImage("Geld1"))
         .settings.add(209, 201, getImage("Geld2"))
         .settings.add(445, 32, getImage("Geld3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Geld1"), getImage("Geld2"), getImage("Geld3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
          ////////////////// Autos
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Autos")
       
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Autos</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Autos1", "Autos1.jpg")
          .settings.size(248, 189)
        ,
        newImage("Autos2", "Autos2.jpg")
          .settings.size(285, 190)
        ,
        newImage("Autos3", "Autos3.jpg")
         .settings.size(250, 192)
        ,
        newImage("Autos4", "Autos4.jpg")
          .settings.size(297, 191)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 45, 58, getImage("Autos1"))
         .settings.add(23, 268, getImage("Autos2"))
         .settings.add(420, 55, getImage("Autos3"))
         .settings.add(391, 266, getImage("Autos4"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Autos1"), getImage("Autos2"), getImage("Autos3"), getImage("Autos4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))   
  
   ////////////////// Buecher #48 wide
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Buecher")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>B&uuml;cher</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Buecher1", "Buecher1.jpg")
         .settings.size(222, 182)
        ,
        newImage("Buecher2", "Buecher2.jpg")
         .settings.size(225, 181)
        ,
        newImage("Buecher3", "Buecher3.jpg")
         .settings.size(256, 175)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 32, 44, getImage("Buecher1"))
         .settings.add(449, 41, getImage("Buecher2"))
         .settings.add(225, 245, getImage("Buecher3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Buecher1"), getImage("Buecher2"), getImage("Buecher3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        

      
     ////////////////// Waelzer
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Waelzer")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>W&auml;lzer</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        //,
        //newImage("Waelzer1", "Waelzer1.jpg")
        // .settings.size(208, 160)
        ,
        newImage("Waelzer2", "Waelzer2.jpg")
         .settings.size(276, 214)
        ,
        newImage("Waelzer3", "Waelzer3.jpg")
         .settings.size(252, 293)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         //.settings.add( 363, 262, getImage("Waelzer1"))
         .settings.add(412, 106, getImage("Waelzer2"))
         .settings.add( 30, 65, getImage("Waelzer3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Waelzer2"), getImage("Waelzer3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))    
        
        
        
        
        
        
        
        
           //Absteige
  PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Absteige")
       
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Absteige</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Absteige2", "Absteige2.jpg")
         .settings.size(234, 166)
        ,
        newImage("Absteige3", "Absteige3.jpg")
        .settings.size(235, 171)
        ,
        newImage("Absteige4", "Absteige4.jpg")
       .settings.size(237, 361)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(45, 26,  getImage("Absteige2"))
         .settings.add(44, 208, getImage("Absteige3"))
         .settings.add(415, 23, getImage("Absteige4"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Absteige2"), getImage("Absteige3"),getImage("Absteige4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        //,
        //newButton("confirm", "Best&auml;tigen")
        // .print()
        // .settings.log() // time is also logged for the button press of confirmation
       //  .settings.center()
       //  .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
    
   
        
        
        ////////////////// Ohren
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Ohren")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Ohren</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center() //new
         .print()           //new
        ,
        newTimer("pic",1000)
        .start()
        .wait()
        ,
        newImage("Ohren1", "Ohr1.jpg")
         .settings.size(217, 278)
        ,
        newImage("Ohren2", "Ohr2.jpg")
         .settings.size(217, 286)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(53, 33, getImage("Ohren1"))
         .settings.add(428, 33, getImage("Ohren2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Ohren1"), getImage("Ohren2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
            ////////////////// Lauscher
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Lauscher")
     
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Lauscher</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        
        ,
        newImage("Lauscher1", "Lauscher1.jpg")
         .settings.size(216, 240)
        ,
        newImage("Lauscher2", "Lauscher2.jpg")
         .settings.size(291, 153)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
         newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 406, 70, getImage("Lauscher1"))
         .settings.add(4, 108, getImage("Lauscher2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Lauscher1"), getImage("Lauscher2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
    
        
        
        
        /////////////////Futter
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Futter")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Futter</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Futter1' , 'Futter1.jpg' )
           .settings.size(217, 187)
        ,
        newImage('Futter2' , 'Futter2.jpg' )
         .settings.size(217, 194)
        ,
        newImage('Futter3' , 'Futter3.jpg' )
         .settings.size(268, 183)
        ,
        newImage('Futter4' , 'Futter4.jpg' )
          .settings.size(271, 185)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 23, 24, getImage('Futter1'))
        .settings.add( 455, 21, getImage('Futter2'))
        .settings.add( 410, 227, getImage('Futter3'))
        .settings.add( 18, 229, getImage('Futter4'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Futter1"),getImage("Futter2"), getImage("Futter3"), getImage("Futter4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))    
        
        
        
      
        
          ////////////////// Klamotten
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Klamotten")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Klamotten</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Klamotten1", "Klamotten1.jpg")
         .settings.size(261, 221)
        ,
        newImage("Klamotten2", "Klamotten2.jpg")
         .settings.size(259, 226)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 18, 74, getImage("Klamotten1"))
         .settings.add(423, 74, getImage("Klamotten2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Klamotten1"), getImage("Klamotten2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
         ////////////////// Stahlross
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Stahlross")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Stahlross</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Stahlross1' , 'Stahlross1.jpg' )
         .settings.size(227, 331)
        ,
        newImage('Stahlross2' , 'Stahlross2.jpg' )
        .settings.size(229, 329)
        ,
      
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 416, 21, getImage('Stahlross1'))
        .settings.add( 62, 22, getImage('Stahlross2'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Stahlross1"), getImage("Stahlross2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        ////////////////// Fahrrad
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Fahrrad")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Fahrrad</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Fahrrad1' , 'Fahrrad1.jpg' )
         .settings.size(260, 179)
        ,
        newImage('Fahrrad2' , 'Fahrrad2.jpg' )
        .settings.size(268, 372)
        ,
        newImage('Fahrrad3' , 'Fahrrad3.jpg' )
        .settings.size(258, 181)
        ,
         newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 19, 12, getImage('Fahrrad1'))
        .settings.add( 20, 201, getImage('Fahrrad3'))
        .settings.add( 414, 12, getImage('Fahrrad2'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Fahrrad1"), getImage("Fahrrad2"),getImage('Fahrrad3'))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
        //Schuhe
    PennController("experiment",
        newTimer(500)
         .start()
         .wait()
        ,
        newVar("word", "Schuhe")
        ,
        newText("Satz","Welches Bild beschreibt am besten das Wort <strong>Schuhe</strong>?")
        .settings.css("font-size","x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Schuhe1", "Schuhe1.jpg")
        .settings.size(242,224)
        ,
        newImage("Schuhe2", "Schuhe2.jpg")
        .settings.size(267,249)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("myCanvas", 700, 500)
        //.settings.add("center at 50%", "top at 0%", getText("Satz"))
        .settings.add(435,89, getImage("Schuhe1"))
        .settings.add(33, 83, getImage("Schuhe2"))
        .settings.log()
        .print()
        ,
        newSelector("pickme")
        .settings.add(getImage("Schuhe1"), getImage("Schuhe2"))
        .settings.log()
        .settings.once()
        .wait()
        ,
        newTimer(300)
        .start()
        .wait()
        )
        .log("Wort", getVar("word"))
        
        
         ////////////////// Augen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Augen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Augen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Augen1' , 'Augen1.jpg' )
         .settings.size(262, 121)
        ,
        newImage('Augen2' , 'Augen2.jpg' )
        .settings.size(261, 126)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 544)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add(24, 124, getImage('Augen1'), 0 )
        .settings.add(416, 122, getImage('Augen2'), 1 )
        .settings.log()
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage('Augen1'), getImage('Augen2'))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
       
   
     // Antrag
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Antrag")
       
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Antrag</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Antrag1", "Antrag1.jpg")
         .settings.size(259,243)
        ,
        newImage("Antrag2", "Antrag2.jpg")
         .settings.size(260,241)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 35, 70, getImage("Antrag1"))
         .settings.add(408, 74, getImage("Antrag2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Antrag1"), getImage("Antrag2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
      
        newTimer(300)
        .start()
        .wait()
        
     
     )
     .log("Wort", getVar("word")) 
        
     // Arznei
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Arznei")
       
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Arznei</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Arznei1", "Arznei1.jpg")
         .settings.size(260,243)
        ,
        newImage("Arznei2", "Arznei2.jpg")
         .settings.size(259,241)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 35, 70, getImage("Arznei1"))
         .settings.add(408, 74, getImage("Arznei2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Arznei1"), getImage("Arznei2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
     
     
      
     
        
        ////////////////// Behausung
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Behausung")
       
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Behausung</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        
        ,
        newImage("Behausung1", "Behausung1.jpg")
         .settings.size(268,238)
        ,
        newImage("Behausung2", "Behausung2.jpg")
         .settings.size(269,238)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 28, 70, getImage("Behausung1"))
         .settings.add(402, 70, getImage("Behausung2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Behausung1"), getImage("Behausung2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))  
        
        ////////////////// Brause
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Brause")
       
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Brause</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Brause1", "Brause1.jpg")
         .settings.size(269,254)
        ,
        newImage("Brause2", "Brause2.jpg")
         .settings.size(249,345)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 33, 60, getImage("Brause1"))
         .settings.add(414, 21, getImage("Brause2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Brause1"), getImage("Brause2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
         ////////////////// Beine
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Beine")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Beine</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Beine1", "Beine1.jpg")
         .settings.size(277,263)
        ,
        newImage("Beine2", "Beine .jpg")
         .settings.size(276,265)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 25, 52, getImage("Beine1"))
         .settings.add(397, 50, getImage("Beine2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Beine1"), getImage("Beine2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
        
         ////////////////// Butterbrote
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Butterbrote")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Butterbrote</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Butterbrote1", "Butterbrote1.jpg")
         .settings.size(283, 228)
        ,
        newImage("Butterbrote2", "Butterbrote2.jpg")
         .settings.size(286, 228)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 14, 69, getImage("Butterbrote1"))
         .settings.add(404, 69, getImage("Butterbrote2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Butterbrote1"), getImage("Butterbrote2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
              ////////////////// Buxen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Buxen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Buxen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Buxen1", "Buxen1.jpg")
         .settings.size(248,227)
        ,
        newImage("Buxen2", "Buxen2.jpg")
         .settings.size(206,345)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 66, 26, getImage("Buxen2"))
         .settings.add(415, 92, getImage("Buxen1"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Buxen1"), getImage("Buxen2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
        ////////////////// Champagner
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Champagner")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Champagner</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Champagner1", "Champagner1.jpg")
         .settings.size(279,208)
        ,
        newImage("Champagner2", "Champagner2.jpg")
         .settings.size(278,207)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 411, 64, getImage("Champagner1"))
         .settings.add(13, 64, getImage("Champagner2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Champagner1"), getImage("Champagner2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
          ////////////////// Fiedel
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Fiedel")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Fiedel</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Fiedel1", "Fiedel1.jpg")
         .settings.size(277, 169)
        ,
        newImage("Fiedel2", "Fiedel2.jpg")
         .settings.size(276, 169)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 411, 84, getImage("Fiedel1"))
         .settings.add(18, 88, getImage("Fiedel2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Fiedel1"), getImage("Fiedel2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
         
        
        ////////////////// Gaule
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Gaule")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>G&auml;ule</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Gaule1", "Gaule1.jpg")
         .settings.size(284, 210)
        ,
        newImage("Gaule2", "Gaule2.jpg")
         .settings.size(275, 206)
        ,
        newImage("Gaule3", "Gaule3.jpg")
          .settings.size(274, 208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 219, 259, getImage("Gaule1"))
         .settings.add(9, 40, getImage("Gaule2"))
         .settings.add(418, 36, getImage("Gaule3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Gaule1"), getImage("Gaule2"), getImage("Gaule3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word")) 
        
        
        ////////////////// Geige
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Geige")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Geige</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Geige1", "Geige1.jpg")
         .settings.size(277,263)
        ,
        newImage("Geige2", "Geige2.jpg")
         .settings.size(276,265)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 25, 52, getImage("Geige1"))
         .settings.add(397, 50, getImage("Geige2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Geige1"), getImage("Geige2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
        ////////////////// Gemaecher
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Gemaecher")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Gem&auml;cher</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Gemaecher1", "Gemaecher1.jpg")
         .settings.size(303, 213)
        ,
        newImage("Gemaecher2", "Gemaecher2.jpg")
         .settings.size(301, 213)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 389, 79, getImage("Gemaecher1"))
         .settings.add(9, 79, getImage("Gemaecher2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Gemaecher1"), getImage("Gemaecher2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        ////////////////// Gemuese
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Gemuese")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Gem&uuml;se</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Gemuese1", "Gemuese1.jpg")
         .settings.size(237, 176)
        ,
        newImage("Gemuese2", "Gemuese2.jpg")
         .settings.size(272, 184)
        ,
        newImage("Gemuese3" , "Gemuese3.jpg" )
        .settings.size(270, 175)
        ,
        newImage("Gemuese4" , "Gemuese4.jpg" )
        .settings.size(275, 184)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 431, 33, getImage("Gemuese1"))
         .settings.add(36, 241, getImage("Gemuese2"))
         .settings.add( 22, 39, getImage("Gemuese3"))
         .settings.add(395, 240, getImage("Gemuese4"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Gemuese1"), getImage("Gemuese2"),getImage("Gemuese3"),getImage("Gemuese4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
     
        
        
         /*///////////////// Haus
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Haus")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Haus</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Haus1", "Haus1.jpg")
         .settings.size(277,263)
        ,
        newImage("Haus2", "Haus2.jpg")
         .settings.size(276,265)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 25, 52, getImage("Haus1"))
         .settings.add(397, 50, getImage("Haus2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Haus1"), getImage("Haus2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        */
        
         ////////////////// Hausschuhe
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Hausschuhe")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Hausschuhe</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Hausschuhe1", "Hausschuhe.jpg")
         .settings.size(277,263)
        ,
        newImage("Hausschuhe2", "Hausschuhe2.jpg")
         .settings.size(276,265)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 25, 52, getImage("Hausschuhe1"))
         .settings.add(397, 50, getImage("Hausschuhe2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Hausschuhe1"), getImage("Hausschuhe2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
         ////////////////// Hosen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Hosen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Hosen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Hosen1", "Hose1.jpg")
         .settings.size(241, 371)
        ,
        newImage("Hosen2", "Hose3.jpg")
         .settings.size(240, 371)
        //,
        //newImage("Hosen3", "Hosen3.jpg")
       // .settings.size(266, 171)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 431, 11, getImage("Hosen1"))
         .settings.add(33, 0, getImage("Hosen2"))
         //.settings.add( 77, 127, getImage("Hosen3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Hosen1"), getImage("Hosen2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
         ////////////////// Hund
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Hund")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Hund</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Hund1", "Hund1.jpg")
         .settings.size(282, 218)
        ,
        newImage("Hund2", "Hund2.jpg")
         .settings.size(288, 219)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(400, 84, getImage("Hund1"))
         .settings.add(11, 81, getImage("Hund2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Hund1"), getImage("Hund2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
         /*//////////////// Huette
    //PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Huette")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>H&uuml;tte</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Huette1", "Huette1.jpg")
         .settings.size(277,263)
        ,
        newImage("Huette2", "Huette2.jpg")
         .settings.size(276,265)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 25, 52, getImage("Huette1"))
         .settings.add(397,50, getImage("Huette2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Huette1"), getImage("Huette2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        */
        
        ////////////////// Kammern
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Kammern")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Kammern</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Kammern1", "Kammern1.jpg")
         .settings.size(284,192)
        ,
        newImage("Kammern2", "Kammern2.jpg")
         .settings.size(285,192)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 13, 76, getImage("Kammern1"))
         .settings.add(405, 77, getImage("Kammern2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Kammern1"), getImage("Kammern2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
       
        
        
        
       
        
        
        ////////////////// Kleidung
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Kleidung")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Kleidung</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Kleidung1", "Kleidung1.jpg")
         .settings.size(293, 204)
        ,
        newImage("Kleidung2", "Kleidung2.jpg")
         .settings.size(293, 203)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(393, 77, getImage("Kleidung1"))
         .settings.add(13, 77, getImage("Kleidung2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Kleidung1"), getImage("Kleidung2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
        ////////////////// Klo
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Kleidung")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Klo</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Klo1", "Klo1.jpg")
         .settings.size(275,184)
        ,
        newImage("Klo2", "Klo2.jpg")
         .settings.size(212,295)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 10, 102, getImage("Klo1"))
         .settings.add(435, 49, getImage("Klo2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Klo1"), getImage("Klo2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
        
        
        ////////////////// Knarre
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Knarre")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Knarre</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Knarre1", "Knarre1.jpg")
         .settings.size(253, 207)
        ,
        newImage("Knarre2", "Knarre2.jpg")
         .settings.size(270, 167)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 17, 71, getImage("Knarre1"))
         .settings.add(413, 91, getImage("Knarre2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Knarre1"), getImage("Knarre2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
               
        
        
         ////////////////// Koeter
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Koeter")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>K&ouml;ter</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Koeter1", "Koeter1.jpg")
         .settings.size(279, 199)
        ,
        newImage("Koeter2", "Koeter2.jpg")
         .settings.size(278, 201)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 18, 86, getImage("Koeter1"))
         .settings.add(402, 84, getImage("Koeter2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Koeter1"), getImage("Koeter2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
         ////////////////// Latschen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Latschen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Latschen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Latschen1", "Latschen1.jpg")
         .settings.size(281, 224)
        ,
        newImage("Latschen2", "Latschen2.jpg")
         .settings.size(288, 172)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
      //   .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 13, 72, getImage("Latschen1"))
         .settings.add(402, 97, getImage("Latschen2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Latschen1"), getImage("Latschen2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
         ////////////////// Maehne
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Maehne")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>M&auml;hne</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Maehne1", "Maehne1.jpg")
         .settings.size(271,208)
        ,
        newImage("Maehne2", "Maehne2.jpg")
         .settings.size(271,208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Maehne1"))
         .settings.add(25, 81, getImage("Maehne2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Maehne1"), getImage("Maehne2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
        ////////////////// Mauken
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Mauken")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Mauken</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Mauken1", "Mauken1.jpg")
         .settings.size(300, 200)
        ,
        newImage("Mauken2", "Mauken2.jpg")
         .settings.size(233, 208)
        ,
        newImage("Mauken3", "Mauken3.jpg")
         .settings.size(261, 209)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 204, 250, getImage("Mauken1"))
         .settings.add(31, 17, getImage("Mauken2"))
         .settings.add(438, 16, getImage("Mauken3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Mauken1"), getImage("Mauken2"), getImage("Mauken3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
        ////////////////// Pension
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Pension")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Pension</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Pension1", "Pension1.jpg")
         .settings.size(271,208)
        ,
        newImage("Pension2", "Pension2.jpg")
         .settings.size(271,208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Pension1"))
         .settings.add(25, 81, getImage("Pension2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Pension1"), getImage("Pension2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
          ////////////////// Poette
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Poette")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>P&ouml;tte</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Poette1", "Poette1.jpg")
         .settings.size(278, 198)
        ,
        newImage("Poette2", "Poette2.jpg")
         .settings.size(270, 200)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 406, 81, getImage("Poette1"))
         .settings.add(16, 76, getImage("Poette2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Poette1"), getImage("Poette2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        

        
        
         /*///////////////// Restaurant
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Restaurant")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Restaurant</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Restaurant1", "Restaurant1.jpg")
         .settings.size(271,208)
        ,
        newImage("Restaurant2", "Restaurant2.jpg")
         .settings.size(271,208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Restaurant1"))
         .settings.add(25, 81, getImage("Restaurant2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Restaurant1"), getImage("Restaurant2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        */
        
         ////////////////// Schlappen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Schlappen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Schlappen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Schlappen1", "Schlappen1.jpg")
         .settings.size(230, 297)
        ,
        newImage("Schlappen2", "Schlappen2.jpg")
         .settings.size(269, 221)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(42, 40, getImage("Schlappen1"))
         .settings.add(409, 77, getImage("Schlappen2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Schlappen1"), getImage("Schlappen2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        ////////////////// Schnitten
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Schnitten")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Schnitten</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Schnitten1", "Schnitten1.jpg")
         .settings.size(251, 183)
        ,
        newImage("Schnitten2", "Schnitten2.jpg")
         .settings.size(251, 181)
        ,
        newImage("Schnitten3", "Schnitten3.jpg")
         .settings.size(254, 182)
        ,
        newImage("Schnitten4", "Schnitten4.jpg")
         .settings.size(253, 182)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(442, 242, getImage("Schnitten1"))
         .settings.add(7, 244, getImage("Schnitten2"))
         .settings.add(439, 17, getImage("Schnitten3"))
         .settings.add(9, 18, getImage("Schnitten4"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Schnitten1"), getImage("Schnitten2"), getImage("Schnitten3"), getImage("Schnitten4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
          ////////////////// Schorle
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Schorle")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Schorle</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Schorle1", "Schorle1.jpg")
         .settings.size(229, 302)
        ,
        newImage("Schorle2", "Schorle2.jpg")
         .settings.size(231, 300)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
     //    .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(422, 19, getImage("Schorle2"))
         .settings.add(46, 22, getImage("Schorle1"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Schorle1"), getImage("Schorle2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
   
        
        ////////////////// Tier
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Tier")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Tier</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Tier1", "Tier1.jpg")
         .settings.size(271,208)
        ,
        newImage("Tier2", "Tier2.jpg")
         .settings.size(271,208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Tier1"))
         .settings.add(25, 81, getImage("Tier2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
 
        ,
        newSelector("pickme")
         .settings.add(getImage("Tier1"), getImage("Tier2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        ////////////////// Wanst
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Wanst")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Wanst</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Wanst1", "Wanst1.jpg")
         .settings.size(211,280)
        ,
        newImage("Wanst2", "Wanst2.jpg")
         .settings.size(239,279)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 57, 55, getImage("Wanst1"))
         .settings.add(426, 53, getImage("Wanst2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Wanst1"), getImage("Wanst2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
          ////////////////// Wohnung
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Wohnung")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Wohnung</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Wohnung1", "Wohnung1.jpg")
         .settings.size(271,208)
        ,
        newImage("Wohnung2", "Wohnung2.jpg")
         .settings.size(271,208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Wohnung1"))
         .settings.add(25, 81, getImage("Wohnung2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Wohnung1"), getImage("Wohnung2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        
        
        ////////////////// Vieh
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Vieh")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Vieh</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Vieh1", "Vieh1.jpg")
         .settings.size(277, 188)
        ,
        newImage("Vieh2", "Vieh2.jpg")
         .settings.size(277, 188)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 414, 71, getImage("Vieh1"))
         .settings.add(10, 69, getImage("Vieh2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Vieh1"), getImage("Vieh2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
          
      ////////////////// Bauch
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Bauch")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Bauch</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Bauch1", "Bauch1.jpg")
         .settings.size(270, 207)
        ,
        newImage("Bauch2", "Bauch2.jpg")
         .settings.size(271, 205)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(408, 70, getImage("Bauch1"))
         .settings.add(22, 69, getImage("Bauch2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Bauch1"), getImage("Bauch2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        

        
        ////////////////// Fingernaegel 
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Fingernaegel")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Fingern&auml;gel</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
        .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Fingernaegel1", "Fingernaegel1.jpg")
         .settings.size(173, 211)
        ,
        newImage("Fingernaegel2", "Fingernaegel2.jpg")
         .settings.size(225, 166)
        ,
        newImage("Fingernaegel3", "Fingernaegel3.jpg")
         .settings.size(181, 213)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 239, 301, getImage("Fingernaegel2"))
         .settings.add(61, 85, getImage("Fingernaegel1"))
         .settings.add( 472, 84, getImage("Fingernaegel3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Fingernaegel1"), getImage("Fingernaegel2"), getImage("Fingernaegel3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
         ////////////////// Fummel
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Fummel")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Fummel</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Fummel1", "Fummel1.jpg")
         .settings.size(271, 208)
        ,
        newImage("Fummel2", "Fummel2.jpg")
         .settings.size(271, 208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Fummel1"))
         .settings.add( 25, 81, getImage("Fummel2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Fummel1"), getImage("Fummel2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        ////////////////// Funzel
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Funzel")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Funzel</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Funzel1", "Funzel1.jpg")
         .settings.size(287, 188)
        ,
        newImage("Funzel2", "Funzel2.jpg")
         .settings.size(283, 189)
        ,
        newImage("Funzel3", "Funzel3.jpg")
         .settings.size(290, 186)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(406, 68, getImage("Funzel1"))
         .settings.add(8, 67, getImage("Funzel2"))
         .settings.add(209, 271, getImage("Funzel3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Funzel1"), getImage("Funzel2"), getImage("Funzel3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
        
        ////////////////// Fuesse
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Fuesse")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>F&uuml;&szlig;e</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Fuesse1", "Fuesse1.jpg")
         .settings.size(256, 203)
        ,
        newImage("Fuesse2", "Fuesse2.jpg")
         .settings.size(258, 202)
        ,
        newImage("Fuesse3", "Fuesse3.jpg")
         .settings.size(257, 202)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(421, 62, getImage("Fuesse1"))
         .settings.add(228, 278, getImage("Fuesse2"))
         .settings.add(27, 60, getImage("Fuesse3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Fuesse1"), getImage("Fuesse2"), getImage("Fuesse3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        

        
        
      
        
        

        
        
        
        ////////////////// Kneipe
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Kneipe")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Kneipe</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Kneipe1", "Kneipe1.jpg")
         .settings.size(271, 208)
        ,
        newImage("Kneipe3", "Kneipe3.jpg")
         .settings.size(271, 208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Kneipe1"))
         .settings.add( 25, 81, getImage("Kneipe3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Kneipe1"), getImage("Kneipe3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
            ////////////////// Lampe
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Lampe")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Lampe</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Lampe1", "Lampe1.jpg")
         .settings.size(251, 237)
        ,
        newImage("Lampe2", "Lampe2.jpg")
         .settings.size(182, 229)
        ,
        newImage("Lampe3", "Lampe3.jpg")
         .settings.size(249, 236)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 11, 38, getImage("Lampe1"))
         .settings.add(262, 268, getImage("Lampe2"))
         .settings.add(442, 36, getImage("Lampe3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Lampe1"), getImage("Lampe2"), getImage("Lampe3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
       
        
        
        
        
        
         ////////////////// Moos
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Moos")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Moos</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Moos1", "Moos1.jpg")
         .settings.size(216, 177)
        ,
        newImage("Moos2", "Moos2.jpg")
         .settings.size(213, 174)
        ,
        newImage("Moos3", "Moos3.jpg")
         .settings.size(210, 172)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 31, 74, getImage("Moos1"))
         .settings.add(456, 78, getImage("Moos2"))
         .settings.add( 246, 253, getImage("Moos3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Moos1"), getImage("Moos2"), getImage("Moos3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
     
        
        
        
        ////////////////// Residenz
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Residenz")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Residenz</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Residenz1", "Residenz1.jpg")
         .settings.size(243, 188)
        ,
        newImage("Residenz2", "Residenz2.jpg")
         .settings.size(270, 175)
        ,
        newImage("Residenz3", "Residenz3.jpg")
         .settings.size(245, 189)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 42, 94, getImage("Residenz1"))
         .settings.add(218, 297, getImage("Residenz2"))
         .settings.add( 417, 90, getImage("Residenz3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Residenz1"), getImage("Residenz2"), getImage("Residenz3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        ////////////////// Schaenke
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Schaenke")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Sch&auml;nke</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Schaenke1", "Schaenke1.jpg")
         .settings.size(271, 208)
        ,
        newImage("Schaenke3", "Schaenke2.jpg")
         .settings.size(271, 208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Schaenke1"))
         .settings.add( 25, 81, getImage("Schaenke3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Schaenke1"), getImage("Schaenke3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
         
       
        
        
         ////////////////// WC
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "WC")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>WC</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("WC1", "WC1.jpg")
         .settings.size(204, 312)
        ,
        newImage("WC2", "WC3.jpg")
         .settings.size(204, 312)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 63, 36, getImage("WC1"))
         .settings.add(434, 35, getImage("WC2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("WC1"), getImage("WC2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        ////////////////// Wisch
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Wisch")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Wisch</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Wisch1", "Wisch1.jpg")
         .settings.size(240, 308)
        ,
        newImage("Wisch2", "Wisch2.jpg")
         .settings.size(241, 312)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 425, 31, getImage("Wisch1"))
         .settings.add(40, 31, getImage("Wisch2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Wisch1"), getImage("Wisch2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
         ////////////////// Zigarre
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Zigarre")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Zigarre</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Zigarre1", "Zigarre1.jpg")
         .settings.size(216, 177)
        ,
        newImage("Zigarre2", "Zigarre2.jpg")
         .settings.size(213, 174)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 31, 74, getImage("Zigarre1"))
         .settings.add(456, 78, getImage("Zigarre2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Zigarre1"), getImage("Zigarre2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
        

        
        
        ////////////////// Bude
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Bude")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Bude</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Bude1' , 'Bude1.jpg' )
         .settings.size(255, 232)
        ,
        newImage('Bude3' , 'Bude3.jpg' )
        .settings.size(257, 233)
        ,
        newImage('Bude4' , 'Bude4.jpg' )
        .settings.size(307, 197)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
      //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 419, 12, getImage('Bude1'))
        .settings.add( 19, 11, getImage('Bude3') )
        .settings.add( 194, 255, getImage('Bude4'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Bude1"),getImage("Bude3"), getImage("Bude4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
         
      
        
        
        
           ////////////////// Pferde
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Pferde")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Pferde</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Pferde1' , 'Pferde1.jpg' )
         .settings.size(269, 199)
        ,
        newImage('Pferde2' , 'Pferde2.jpg' )
        .settings.size(266, 197)
        ,
        newImage('Pferde3' , 'Pferde3.jpg' )
        .settings.size(268, 198)
  
        ,newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
    //    .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 27, 55, getImage('Pferde1'))
        .settings.add( 407, 55, getImage('Pferde2'))
        .settings.add( 216, 277, getImage('Pferde3'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Pferde1"), getImage("Pferde2"),getImage("Pferde3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))
        
        
        
       
        

        
         /////////////////Essen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Essen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Essen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Essen1' , 'Essen1.jpg' )
          .settings.size(176, 239)
        ,
        newImage('Essen2' , 'Essen2.jpg' )
          .settings.size(197, 156)
        ,
        newImage('Essen3' , 'Essen3.jpg' )
        .settings.size(204, 158)
        ,
        newImage('Essen4' , 'Essen4.jpg' )
         .settings.size(176, 239)
        ,
        newImage('Essen5' , 'Essen5.jpg' )
        .settings.size(203, 157)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
      //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 52, 66, getImage('Essen1'))
        .settings.add( 469, 311, getImage('Essen2'))
        .settings.add( 39, 311, getImage('Essen3'))
        .settings.add( 479, 64, getImage('Essen4'))
        .settings.add( 254, 311, getImage('Essen5'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Essen1"), getImage("Essen2"),getImage("Essen3"), getImage("Essen4"), getImage("Essen5"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))    
        
         ////////////////// Pistole
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Pistole")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Pistole</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Pistole1' , 'Pistole1.jpg' )
         .settings.size(271, 205)
        ,
        newImage('Pistole2' , 'Pistole2.jpg' )
        .settings.size(269, 204)
        ,
        newImage('Pistole3' , 'Pistole3.jpg' )
        .settings.size(269, 205)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 544)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 5, 27, getImage('Pistole1'), 0 )
        .settings.add( 426, 24, getImage('Pistole2'), 1 )
        .settings.add(244, 270, getImage('Pistole3'), 2 )
        .settings.log()
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Pistole1"), getImage("Pistole2"),getImage("Pistole3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
       
        
        
        /////////////////Gruenzeug
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Gruenzeug")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Gr&uuml;nzeug</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Gruenzeug1' , 'Gruenzeug1.jpg' )
          .settings.size(183, 216)
        ,
        newImage('Gruenzeug2' , 'Gruenzeug2.jpg' )
          .settings.size(206, 174)
        ,
        newImage('Gruenzeug3' , 'Gruenzeug3.jpg' )
        .settings.size(204, 176)
        ,
        newImage('Gruenzeug5' , 'Gruenzeug5.jpg' )
         .settings.size(185, 214)
        ,
        newImage('Gruenzeug6' , 'Gruenzeug6.jpg' )
        .settings.size(205, 175)
        ,
         newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 40, 45, getImage('Gruenzeug1'))
        .settings.add( 25, 276, getImage('Gruenzeug2'))
        .settings.add( 470, 275, getImage('Gruenzeug3'))
        .settings.add( 478, 45, getImage('Gruenzeug5'))
        .settings.add( 248, 277, getImage('Gruenzeug6'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Gruenzeug1"), getImage("Gruenzeug2"),getImage("Gruenzeug3"), getImage("Gruenzeug5"), getImage("Gruenzeug6"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))  
      
      ////////////////// Griffel
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Griffel")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Griffel</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Griffel1", "Griffel1.jpg")
         .settings.size(245, 220)
        ,
        newImage("Griffel2", "Griffel2.jpg")
         .settings.size(205, 289)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 46, 71, getImage("Griffel1"))
         .settings.add(418, 45, getImage("Griffel2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Griffel1"), getImage("Griffel2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 



 ////////////////// Pulle
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Pulle")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Pulle</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        
        ,
        newImage("Pulle1", "Pulle1.jpg")
         .settings.size(283, 305)
        ,
        newImage("Pulle2", "Pulle2.jpg")
         .settings.size(224, 311)
        ,
         newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(415, 46, getImage("Pulle1"))
         .settings.add(32, 36, getImage("Pulle2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Pulle1"), getImage("Pulle2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))


  ////////////////// Schampus
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Schampus")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Schampus</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Schampus1' , 'Schampus8.jpg' )
         .settings.size(253, 361)
        ,
        newImage('Schampus2' , 'Schampus9.jpg' )
        .settings.size(275, 170)
        ,
        newImage('Schampus3' , 'Schampus10.jpg' )
        .settings.size(276, 170)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add(433, 22, getImage('Schampus1'))
        .settings.add(9, 22, getImage('Schampus2'))
        .settings.add(10, 216, getImage('Schampus3'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Schampus1"), getImage("Schampus2"),getImage("Schampus3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))


        
      


        
         ////////////////// Getraenke
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Getraenke")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Getr&auml;nke</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Getraenke1' , 'Getraenke1.jpg' )
         .settings.size(267, 196)
        ,
        newImage('Getraenke2' , 'Getraenke2.jpg' )
        .settings.size(257, 181)
        ,
        newImage('Getraenke3' , 'Getraenke3.jpg' )
        .settings.size(146, 197)
        ,
        newImage('Getraenke4' , 'Getraenke4.jpg' )
        .settings.size(175, 173)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 402, 265, getImage('Getraenke1'))
        .settings.add( 41, 283, getImage('Getraenke2'))
        .settings.add( 478, 59, getImage('Getraenke3'))
        .settings.add( 77, 77, getImage('Getraenke4'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Getraenke1"), getImage("Getraenke2"),getImage("Getraenke3"), getImage("Getraenke4"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))


   ////////////////// Kleider
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Kleider")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Kleider</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Kleider1", "Kleider1.jpg")
         .settings.size(271,208)
        ,
        newImage("Kleider2", "Kleider2.jpg")
         .settings.size(271,208)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Kleider1"))
         .settings.add(25, 81, getImage("Kleider2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Kleider1"), getImage("Kleider2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))




 /////////////////Stelzen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Stelzen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Stelzen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage('Stelzen1' , 'Stelzen1.jpg' )
          .settings.size(158, 227)
        ,
        newImage('Stelzen2' , 'Stelzen2.jpg' )
          .settings.size(150, 207)
        ,
        newImage('Stelzen3' , 'Stelzen3.jpg' )
         .settings.size(160, 225)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 466, 81, getImage('Stelzen3'), 0 )
        .settings.add( 276, 253, getImage('Stelzen2'), 1 )
        .settings.add( 85, 77, getImage('Stelzen1'), 2 )
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage('Stelzen1'), getImage('Stelzen2'),getImage('Stelzen3'))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))    
        
          
        

  ////////////////// Pluerre
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Pluerre")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Pl&uuml;rre</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Pluerre1", "Pluerre1.jpg")
         .settings.size(214, 318)
        ,
        newImage("Pluerre2", "Pluerre2.jpg")
         .settings.size(214, 318)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
      //   .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 67, 9, getImage("Pluerre1"))
         .settings.add(424, 10, getImage("Pluerre2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Pluerre1"), getImage("Pluerre2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
        
         ////////////////// Finger
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Finger")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Finger</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Finger1", "Finger1.jpg")
         .settings.size(203, 280)
        ,
        newImage("Finger2", "Finger2.jpg")
         .settings.size(234, 205)
      
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(418, 31, getImage("Finger1"))
         .settings.add(49, 68, getImage("Finger2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Finger1"), getImage("Finger2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
        
           ////////////////// Haare
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Haare")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Haare</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Haare1", "Haare1.jpg")
         .settings.size(271, 208)
        ,
        newImage("Haare2", "Haare2.jpg")
         .settings.size(271, 208)
      
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Haare1"))
         .settings.add(25, 81, getImage("Haare2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Haare1"), getImage("Haare2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
        
           ////////////////// Tassen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Tassen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Tassen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Tassen1", "Tassen1.jpg")
         .settings.size(271, 208)
        ,
        newImage("Tassen2", "Tassen2.jpg")
         .settings.size(271, 208)
      
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 405, 86, getImage("Tassen1"))
         .settings.add(25, 81, getImage("Tassen2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Tassen1"), getImage("Tassen2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        
        
        
        
        
    
        
     
  ////////////////// Glubscher
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Glubscher")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Glubscher</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Glubscher1", "Glubscher3 .jpg")
         .settings.size(285, 120)
        ,
        newImage("Glubscher2", "Glubscher2.jpg")
         .settings.size(285, 118)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 395, 121, getImage("Glubscher1"))
         .settings.add(18, 123, getImage("Glubscher2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Glubscher1"), getImage("Glubscher2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))
        


   ////////////////// Klauen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Klauen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Klauen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Klauen1", "Klauen1.jpg")
         .settings.size(257, 168)
        ,
        newImage("Klauen2", "Klauen2.jpg")
         .settings.size(262, 168)
        
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 30, 91, getImage("Klauen1"))
         .settings.add(408, 89, getImage("Klauen2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Klauen1"), getImage("Klauen2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word"))




////////////////// Flasche
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Flasche")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Flasche</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Flasche1", "Flasche1.jpg")
         .settings.size(191, 327)
        ,
        newImage("Flasche2", "Flasche2.jpg")
         .settings.size(169, 327)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 440, 27, getImage("Flasche1"))
         .settings.add(78, 26, getImage("Flasche2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Flasche1"), getImage("Flasche2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        

   
        

    ////////////////// Pillen
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Pillen")
        ,
        newText("Satz", "Welches Bild beschreibt am besten das Wort <strong>Pillen</strong>?")
         //.settings.css("font-weight","bold")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("preimage", 1000)
        .start()
        .wait()
        ,
        newImage("Pillen1", "Pillen1.jpg")
         .settings.size(272, 180)
        ,
        newImage("Pillen2", "Pillen2.jpg")
         .settings.size(275, 182)
        ,
        newImage("Pillen3", "Pillen3.jpg")
         .settings.size(275, 184)
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newCanvas("canvas1", 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 20, 31, getImage("Pillen1"))
         .settings.add(409, 31, getImage("Pillen2"))
         .settings.add( 218, 244, getImage("Pillen3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Pillen1"), getImage("Pillen2"), getImage("Pillen3"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        newTimer(300)
        .start()
        .wait()
     )
     .log("Wort", getVar("word"))  
        
        
        
   PennController.SendResults("send")
   PennController("final",
    newText("<h2> Das ist das Ende des Experimentes. Vielen Dank f&uuml;r Deine Teilnahme!</h2>")
    .print()
     ,   
    newCanvas("empty6", 1, 10)
    .print()
    ,
    newText("Code", " <p><font size = '4'><b>Wichtiger Hinweis:</b></font></p> <p><font size = '4'> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb Deines Clickworker-Aufgabenformulars ein.</font></p> <p><font size = '4'> Ohne die Eingabe dieses Codes kann eine Gutschrift Deines Honorars nicht erfolgen!</font></p>")
    .print()
    ,
    newCanvas("empty7", 1, 5)
    .print()   
    ,
    newText("Code2", "<b><font size = '4'> Code: BILDVERGL20 </font></b>")
    .print()
    ,
    newButton("void")
    .wait()  
     )   
   
