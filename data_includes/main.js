    PennController.ResetPrefix(null); // Initiates PennController  
    PennController.AddHost("https://amor.cms.hu-berlin.de/~plescama/Bild/")                                                      
        // "https://amor.cms.hu-berlin.de/~plescama/Bild/")
    PennController.Sequence("welcome", "practice","experiment", "send", "final")
    PennController.DebugOff() 
   // PennController.DebugOff()
   

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
        newText("intr", "<br><br>Bitte immer schnellstm&ouml;glich ein Bild ausw&auml;hlen. Sobald Du ein Bild ausgew&auml;hlt hast, kannst Du Deinen Wahl nicht mehr &auml;ndern. <br><br> Bitte dr&uuml;cke auf die <b> Leertaste </b> um fortzusetzen.")
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
    
        newImage("Teller1", "Teller1.jpg")
         .settings.size(214, 157)
        ,
        newImage("Teller2", "Teller2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Teller3", "Teller3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas3", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz1"))
         .settings.add( 133, 107, getImage("Teller1"))
         .settings.add(367, 108, getImage("Teller2"))
         .settings.add( 256, 276, getImage("Teller3"))
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
         .settings.size(207, 171)
        ,
        newImage('Kuchen2' , 'Kuchen2.jpg' )
        .settings.size(196, 172)
        ,
        newImage('Kuchen3' , 'Kuchen3.jpg' )
        .settings.size(203, 169)
        ,
        newImage('Kuchen4' , 'Kuchen4.jpg' )
        .settings.size(194, 176)
        ,
        newCanvas( 'canvas2', 700, 544)
        //.settings.add("center at 50%", "top at 0%",getText("Satz2"))
        .settings.add( 103, 110, getImage('Kuchen1'), 0 )
        .settings.add( 390, 111, getImage('Kuchen2'), 1 )
        .settings.add( 110, 310, getImage('Kuchen3'), 2 )
        .settings.add( 390, 308, getImage('Kuchen4'), 3 )
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
     
    //PennController.CheckPreload(
    //startsWith("Absteige")
    //)
        // At fist come all the trials with two pictures only per Canvas
        
        
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
        newImage("Ohren1", "Ohren1.jpg")
         .settings.size(334, 292)
        ,
        newImage("Ohren2", "Ohren2.jpg")
         .settings.size(319, 292)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 12, 137, getImage("Ohren1"))
         .settings.add(354, 138, getImage("Ohren2"))
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
        newVar("piccount", 2)
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
         .settings.size(277, 297)
        ,
        newImage("Lauscher2", "Lauscher2.jpg")
         .settings.size(348, 173)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 392, 145, getImage("Lauscher1"))
         .settings.add(28, 207, getImage("Lauscher2"))
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
     .log("Pic_count", getVar("piccount"))   
        
        
        
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
          .settings.size(234, 179)
        ,
        newImage('Futter3' , 'Futter3.jpg' )
        .settings.size(232, 183)
        ,
        newImage('Futter4' , 'Futter4.jpg' )
         .settings.size(234, 180)
        ,
        newImage('Futter5' , 'Futter5.jpg' )
        .settings.size(234, 182)
        ,
        newCanvas( 'myCanvas', 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 96,106, getImage('Futter1'))
        .settings.add( 378, 295, getImage('Futter3'))
        .settings.add( 377, 108, getImage('Futter4'))
        .settings.add( 96, 293, getImage('Futter5'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Futter1"),getImage("Futter3"), getImage("Futter4"), getImage("Futter5"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once() // first click only
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
        .settings.size(230, 159)
        ,
        newImage("Absteige3", "Absteige3.jpg")
        .settings.size(231, 155)
        ,
        newImage("Absteige4", "Absteige4.jpg")
        .settings.size(255, 335)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add(98, 124, getImage("Absteige2"))
         .settings.add(96, 301,getImage("Absteige3"))
         .settings.add(368, 123,getImage("Absteige4"))
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
         .settings.size(275,244)
        ,
        newImage("Klamotten2", "Klamotten2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Klamotten1"))
         .settings.add(34, 120, getImage("Klamotten2"))
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
         .settings.size(274, 356)
        ,
        newImage('Stahlross2' , 'Stahlross2.jpg' )
        .settings.size(274, 356)
      
        ,
        newCanvas( 'myCanvas', 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 63, 107, getImage('Stahlross1'))
        .settings.add( 367, 107, getImage('Stahlross2'))
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
         .settings.size(283, 164)
        ,
        newImage('Fahrrad2' , 'Fahrrad2.jpg' )
        .settings.size(271, 346)
        ,
        newImage('Fahrrad3' , 'Fahrrad3.jpg' )
        .settings.size(283, 168)
       
        ,
        newCanvas( 'myCanvas', 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 58, 305, getImage('Fahrrad1'))
        .settings.add( 60, 124, getImage('Fahrrad3'))
        .settings.add( 372, 124, getImage('Fahrrad2'))
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
        .settings.size(275,244)
        ,
        newImage("Schuhe2", "Schuhe2.jpg")
        .settings.size(275,244)
        ,
        newCanvas("myCanvas", 700, 500)
        //.settings.add("center at 50%", "top at 0%", getText("Satz"))
        .settings.add(394,120, getImage("Schuhe1"))
        .settings.add(34, 120, getImage("Schuhe2"))
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
        newImage('Augen1' , 'Augen8.jpg' )
         .settings.size(322, 118)
        ,
        newImage('Augen2' , 'Augen9.jpg' )
        .settings.size(319, 119)
        ,
        newCanvas( 'myCanvas', 700, 544)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 357, 196, getImage('Augen1'), 0 )
        .settings.add( 27, 196, getImage('Augen2'), 1 )
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
         .settings.size(275,244)
        ,
        newImage("Antrag2", "Antrag2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Antrag1"))
         .settings.add(34, 120, getImage("Antrag2"))
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
         .settings.size(275,244)
        ,
        newImage("Arznei2", "Arznei2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Arznei1"))
         .settings.add(34, 120, getImage("Arznei2"))
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
         .settings.size(214, 172)
        ,
        newImage("Autos2", "Autos2.jpg")
         .settings.size(210, 172)
        ,
        newImage("Autos3", "Autos3.jpg")
         .settings.size(213, 139)
        ,
        newImage("Autos4", "Autos4.jpg")
         .settings.size(214, 144)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 83, 123, getImage("Autos1"))
         .settings.add(405, 125, getImage("Autos2"))
         .settings.add(86, 323, getImage("Autos3"))
         .settings.add(403, 324, getImage("Autos4"))
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
     
        
        ////////////////// Behausung
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Auto")
       
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
         .settings.size(275,244)
        ,
        newImage("Behausung2", "Behausung2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Behausung1"))
         .settings.add(34, 120, getImage("Behausung2"))
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
         .settings.size(275,244)
        ,
        newImage("Brause2", "Brause2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Brause1"))
         .settings.add(34, 120, getImage("Brause2"))
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
         .settings.size(275,244)
        ,
        newImage("Beine2", "Beine .jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Beine1"))
         .settings.add(34, 120, getImage("Beine2"))
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
         .settings.size(275,244)
        ,
        newImage("Butterbrote2", "Butterbrote2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Butterbrote1"))
         .settings.add(34, 120, getImage("Butterbrote2"))
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
         .settings.size(282,256)
        ,
        newImage("Buxen2", "Buxen2.jpg")
         .settings.size(190,303)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 96, 115, getImage("Buxen2"))
         .settings.add(346, 137, getImage("Buxen1"))
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
         .settings.size(275,244)
        ,
        newImage("Champagner2", "Champagner2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Champagner1"))
         .settings.add(34, 120, getImage("Champagner2"))
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
         .settings.size(275,244)
        ,
        newImage("Fiedel2", "Fiedel2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Fiedel1"))
         .settings.add(34, 120, getImage("Fiedel2"))
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
         .settings.size(242, 168)
        ,
        newImage("Gaule2", "Gaule2.jpg")
         .settings.size(237, 168)
        ,
        newImage("Gaule3", "Gaule3.jpg")
         .settings.size(245, 164)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 114, 139, getImage("Gaule1"))
         .settings.add(367, 139, getImage("Gaule2"))
         .settings.add(240, 316, getImage("Gaule3"))
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
         .settings.size(275,244)
        ,
        newImage("Geige2", "Geige2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Geige1"))
         .settings.add(34, 120, getImage("Geige2"))
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
         .settings.size(275,244)
        ,
        newImage("Gemaecher2", "Gemaecher2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Gemaecher1"))
         .settings.add(34, 120, getImage("Gemaecher2"))
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
         .settings.size(275,244)
        ,
        newImage("Gemuese2", "Gemuese2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Gemuese1"))
         .settings.add(34, 120, getImage("Gemuese2"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Gemuese1"), getImage("Gemuese2"))
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
       ,
        newTimer(300)
        .start()
        .wait()
     
     )
     .log("Wort", getVar("word")) 
        
        
     
        
        
         ////////////////// Haus
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
         .settings.size(275,244)
        ,
        newImage("Haus2", "Haus2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Haus1"))
         .settings.add(34, 120, getImage("Haus2"))
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
         .settings.size(275,244)
        ,
        newImage("Hausschuhe2", "Hausschuhe2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Hausschuhe1"))
         .settings.add(34, 120, getImage("Hausschuhe2"))
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
         .settings.size(241, 323)
        ,
        newImage("Hosen2", "Hose3.jpg")
         .settings.size(250, 335)
        //,
        //newImage("Hosen3", "Hosen3.jpg")
       // .settings.size(266, 171)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 78, 119, getImage("Hosen1"))
         .settings.add(383, 119, getImage("Hosen2"))
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
         .settings.size(275,244)
        ,
        newImage("Hund2", "Hund2 .jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Hund1"))
         .settings.add(34, 120, getImage("Hund2"))
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
        
         ////////////////// Huette
    PennController("experiment",
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
         .settings.size(275,244)
        ,
        newImage("Huette2", "Huette2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Huette1"))
         .settings.add(34, 120, getImage("Huette2"))
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
         .settings.size(325,249)
        ,
        newImage("Kammern2", "Kammern2.jpg")
         .settings.size(323,248)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 22, 157, getImage("Kammern1"))
         .settings.add(358, 156, getImage("Kammern2"))
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
         .settings.size(231, 162)
        ,
        newImage("Karren2", "Karren2.jpg")
         .settings.size(224, 163)
        ,
        newImage("Karren3", "Karren3.jpg")
         .settings.size(254, 166)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 125, 127, getImage("Karren1"))
         .settings.add(377, 126, getImage("Karren2"))
         .settings.add(248, 299, getImage("Karren3"))
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
         .settings.size(275,244)
        ,
        newImage("Kippe2", "Kippe2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Kippe1"))
         .settings.add(34, 120, getImage("Kippe2"))
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
         .settings.size(268,226)
        ,
        newImage("Kleidung2", "Kleidung2.jpg")
         .settings.size(265,224)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 64, 142, getImage("Kleidung1"))
         .settings.add(377, 144, getImage("Kleidung2"))
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
         .settings.size(275,244)
        ,
        newImage("Klo2", "Klo2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Klo1"))
         .settings.add(34, 120, getImage("Klo2"))
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
        newVar("word", "Kleidung")
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
         .settings.size(275,244)
        ,
        newImage("Knarre2", "Knarre1 .jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Knarre1"))
         .settings.add(34, 120, getImage("Knarre2"))
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
         .settings.size(275,244)
        ,
        newImage("Koeter2", "Koeter2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Koeter1"))
         .settings.add(34, 120, getImage("Koeter2"))
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
         .settings.size(275,244)
        ,
        newImage("Latschen2", "Latschen2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
      //   .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Latschen1"))
         .settings.add(34, 120, getImage("Latschen2"))
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
         .settings.size(275,244)
        ,
        newImage("Maehne2", "Maehne2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Maehne1"))
         .settings.add(34, 120, getImage("Maehne2"))
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
         .settings.size(245, 170)
        ,
        newImage("Mauken2", "Mauken2.jpg")
         .settings.size(272, 188)
        ,
        newImage("Mauken3", "Mauken3.jpg")
         .settings.size(237, 185)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 385, 121, getImage("Mauken1"))
         .settings.add(204, 299, getImage("Mauken2"))
         .settings.add(87, 114, getImage("Mauken3"))
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
         .settings.size(275,244)
        ,
        newImage("Pension2", "Pension2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Pension1"))
         .settings.add(34, 120, getImage("Pension2"))
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
         .settings.size(275,244)
        ,
        newImage("Poette2", "Poette2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Poette1"))
         .settings.add(34, 120, getImage("Poette2"))
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
        
        
        
        
        
        
        
        
         ////////////////// Restaurant
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
         .settings.size(275,244)
        ,
        newImage("Restaurant2", "Restaurant2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Restaurant1"))
         .settings.add(34, 120, getImage("Restaurant2"))
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
         .settings.size(243,315)
        ,
        newImage("Schlappen2", "Schlappen2.jpg")
         .settings.size(243,315)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 92, 117, getImage("Schlappen2"))
         .settings.add(379, 117, getImage("Schlappen1"))
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
         .settings.size(251, 183)
        ,
        newImage("Schnitten3", "Schnitten3.jpg")
         .settings.size(251, 183)
        ,
        newImage("Schnitten4", "Schnitten4.jpg")
         .settings.size(251, 183)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 70, 103, getImage("Schnitten1"))
         .settings.add(380, 104, getImage("Schnitten2"))
         .settings.add(71, 297, getImage("Schnitten3"))
         .settings.add(381, 299, getImage("Schnitten4"))
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
         .settings.size(244,279)
        ,
        newImage("Schorle2", "Schorle2.jpg")
         .settings.size(246,275)
        ,
        newCanvas("canvas1", 700, 500)
     //    .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 78, 132, getImage("Schorle2"))
         .settings.add(387, 130, getImage("Schorle1"))
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
        newImage("Tier1", "Tier .jpg")
         .settings.size(289,216)
        ,
        newImage("Tier2", "Tier.jpg")
         .settings.size(289,216)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 48, 161, getImage("Tier1"))
         .settings.add(367, 159, getImage("Tier2"))
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
         .settings.size(275,244)
        ,
        newImage("Wanst2", "Wanst2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Wanst1"))
         .settings.add(34, 120, getImage("Wanst2"))
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
         .settings.size(275,244)
        ,
        newImage("Wohnung2", "Wohnung2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Wohnung1"))
         .settings.add(34, 120, getImage("Wohnung2"))
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
         .settings.size(234,301)
        ,
        newImage("Vieh2", "Vieh2.jpg")
         .settings.size(323,242)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 63, 109, getImage("Vieh1"))
         .settings.add(335, 134, getImage("Vieh2"))
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
         .settings.size(275,244)
        ,
        newImage("Bauch2", "Bauch2.jpg")
         .settings.size(275,244)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 394, 120, getImage("Bauch1"))
         .settings.add(34, 120, getImage("Bauch2"))
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
         .settings.size(197, 227)
        ,
        newImage("Fingernaegel2", "Fingernaegel2.jpg")
         .settings.size(212, 225)
        ,
        newImage("Fingernaegel3", "Fingernaegel3.jpg")
         .settings.size(210, 222)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 253, 161, getImage("Fingernaegel2"))
         .settings.add(480, 159, getImage("Fingernaegel1"))
         .settings.add( 26, 162, getImage("Fingernaegel3"))
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
         .settings.size(288, 239)
        ,
        newImage("Fummel2", "Fummel2.jpg")
         .settings.size(288, 239)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 52, 134, getImage("Fummel1"))
         .settings.add( 359, 136, getImage("Fummel2"))
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
         .settings.size(214, 157)
        ,
        newImage("Funzel2", "Funzel2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Funzel3", "Funzel3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Funzel1"))
         .settings.add(367, 108, getImage("Funzel2"))
         .settings.add( 256, 276, getImage("Funzel3"))
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
         .settings.size(214, 157)
        ,
        newImage("Fuesse2", "Fuesse2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Fuesse3", "Fuesse3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Fuesse1"))
         .settings.add(367, 108, getImage("Fuesse2"))
         .settings.add( 256, 276, getImage("Fuesse3"))
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
         .settings.size(214, 157)
        ,
        newImage("Geld2", "Geld2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Geld3", "Geld3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Geld1"))
         .settings.add(367, 108, getImage("Geld2"))
         .settings.add( 256, 276, getImage("Geld3"))
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
        
        

        
        
        
        ////////////////// Kneipe
    PennController("experiment",
        newTimer(500)  // 500 ms ISI
        .start()
        .wait()
        ,
        newVar("word", "Buecher")
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
         .settings.size(313, 266)
        ,
        newImage("Kneipe3", "Kneipe3.jpg")
         .settings.size(305, 266)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 35, 172, getImage("Kneipe1"))
         .settings.add( 365, 171, getImage("Kneipe3"))
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
         .settings.size(214, 157)
        ,
        newImage("Lampe2", "Lampe2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Lampe3", "Lampe3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Lampe1"))
         .settings.add(367, 108, getImage("Lampe2"))
         .settings.add( 256, 276, getImage("Lampe3"))
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
         .settings.size(214, 157)
        ,
        newImage("Moos2", "Moos2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Moos3", "Moos3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Moos1"))
         .settings.add(367, 108, getImage("Moos2"))
         .settings.add( 256, 276, getImage("Moos3"))
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
         .settings.size(224, 176)
        ,
        newImage("Residenz2", "Residenz2.jpg")
         .settings.size(277, 159)
        ,
        newImage("Residenz3", "Residenz3.jpg")
         .settings.size(217, 176)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 120, 79, getImage("Residenz1"))
         .settings.add(216, 269, getImage("Residenz2"))
         .settings.add( 369, 80, getImage("Residenz3"))
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
         .settings.size(305, 270)
        ,
        newImage("Schaenke3", "Schaenke3.jpg")
         .settings.size(307, 270)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 39, 146, getImage("Schaenke1"))
         .settings.add( 359, 146, getImage("Schaenke3"))
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
         .settings.size(334, 262)
        ,
        newImage("Waelzer3", "Waelzer3.jpg")
         .settings.size(245, 262)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         //.settings.add( 363, 262, getImage("Waelzer1"))
         .settings.add(45, 157, getImage("Waelzer2"))
         .settings.add( 402, 157, getImage("Waelzer3"))
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
         .settings.size(191, 296)
        ,
        newImage("WC2", "WC3.jpg")
         .settings.size(192, 295)
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 392, 152, getImage("WC1"))
         .settings.add(131, 151, getImage("WC2"))
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
         .settings.size(273, 305)
        ,
        newImage("Wisch2", "Wisch2.jpg")
         .settings.size(268, 310)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 51, 115, getImage("Wisch1"))
         .settings.add(374, 114, getImage("Wisch2"))
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
         .settings.size(214, 157)
        ,
        newImage("Zigarre2", "Zigarre2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Zigarre3", "Zigarre3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
        //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Zigarre1"))
         .settings.add(367, 108, getImage("Zigarre2"))
         .settings.add( 256, 276, getImage("Zigarre3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
         
        ,
        newSelector("pickme")
         .settings.add(getImage("Zigarre1"), getImage("Zigarre2"), getImage("Zigarre3"))
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
         .settings.size(279, 181)
        ,
        newImage('Bude3' , 'Bude3.jpg' )
        .settings.size(279, 181)
        ,
        newImage('Bude4' , 'Bude4.jpg' )
        .settings.size(279, 181)
        ,
        newCanvas( 'myCanvas', 700, 500)
      //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 358, 293, getImage('Bude1'))
        .settings.add( 218, 106, getImage('Bude3') )
        .settings.add( 67, 295, getImage('Bude4'))
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
         .settings.size(238, 199)
        ,
        newImage('Pferde2' , 'Pferde2.jpg' )
        .settings.size(255, 172)
        ,
        newImage('Pferde3' , 'Pferde3.jpg' )
        .settings.size(234, 197)
  
        ,
        newCanvas( 'myCanvas', 700, 500)
    //    .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 114, 103, getImage('Pferde1'))
        .settings.add( 233, 308, getImage('Pferde2'))
        .settings.add( 362, 103, getImage('Pferde3'))
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
          .settings.size(215, 186)
        ,
        newImage('Essen2' , 'Essen2.jpg' )
          .settings.size(216, 178)
        ,
        newImage('Essen3' , 'Essen3.jpg' )
        .settings.size(213, 186)
        ,
        newImage('Essen4' , 'Essen4.jpg' )
         .settings.size(212, 175)
        ,
        newImage('Essen5' , 'Essen5.jpg' )
        .settings.size(223, 185)
        ,
        newCanvas( 'myCanvas', 700, 500)
      //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 7, 96, getImage('Essen1'))
        .settings.add( 118, 294, getImage('Essen2'))
        .settings.add( 479, 96, getImage('Essen3'))
        .settings.add( 391, 293, getImage('Essen4'))
        .settings.add( 239, 97, getImage('Essen5'))
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
         .settings.size(207, 171)
        ,
        newImage('Pistole2' , 'Pistole2.jpg' )
        .settings.size(196, 172)
        ,
        newImage('Pistole3' , 'Pistole3.jpg' )
        .settings.size(203, 169)
        ,
        newImage('Pistole4' , 'Pistole4.jpg' )
        .settings.size(194, 176)
        ,
        newCanvas( 'myCanvas', 700, 544)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 103, 110, getImage('Pistole1'), 0 )
        .settings.add( 390, 111, getImage('Pistole2'), 1 )
        .settings.add( 110, 310, getImage('Pistole3'), 2 )
        .settings.add( 390, 308, getImage('Pistole4'), 3 )
        .settings.log()
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Pistole1"), getImage("Pistole2"),getImage("Pistole3"), getImage("Pistole4"))
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
          .settings.size(220, 183)
        ,
        newImage('Gruenzeug2' , 'Gruenzeug2.jpg' )
          .settings.size(216, 178)
        ,
        newImage('Gruenzeug3' , 'Gruenzeug3.jpg' )
        .settings.size(213, 186)
        ,
        newImage('Gruenzeug4' , 'Gruenzeug4.jpg' )
         .settings.size(217, 177)
        ,
        newImage('Gruenzeug5' , 'Gruenzeug5.jpg' )
        .settings.size(223, 185)
        ,
        newImage('Gruenzeug6' , 'Gruenzeug6.jpg' )
        .settings.size(212, 178)
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 8, 99, getImage('Gruenzeug1'))
        .settings.add( 11, 303, getImage('Gruenzeug2'))
        .settings.add( 474, 97, getImage('Gruenzeug3'))
        .settings.add( 244, 301, getImage('Gruenzeug4'))
        .settings.add( 239, 97, getImage('Gruenzeug5'))
        .settings.add( 478, 302, getImage('Gruenzeug6'))
        .settings.log() // print time logged
        .print()
        ,
        newSelector("pickme")
         .settings.add(getImage("Gruenzeug1"), getImage("Gruenzeug2"),getImage("Gruenzeug3"), getImage("Gruenzeug4"), getImage("Gruenzeug5"), getImage("Gruenzeug6"))
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
        newImage("Griffel1", "Griffel .jpg")
         .settings.size(299,240)
        ,
        newImage("Griffel2", "Griffel2 .jpg")
         .settings.size(219,306)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 65, 178, getImage("Griffel1"))
         .settings.add(415, 149, getImage("Griffel2"))
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
         .settings.size(287,340)
        ,
        newImage("Pulle2", "Pulle2.jpg")
         .settings.size(240,344)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 66, 121, getImage("Pulle1"))
         .settings.add(376, 111, getImage("Pulle2"))
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
        newVar("word", "Pferd")
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
         .settings.size(215, 330)
        ,
        newImage('Schampus2' , 'Schampus9.jpg' )
        .settings.size(372, 168)
        ,
        newImage('Schampus3' , 'Schampus10.jpg' )
        .settings.size(374, 151)
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 53, 113, getImage('Schampus1'))
        .settings.add( 275, 275, getImage('Schampus2'))
        .settings.add( 274, 115, getImage('Schampus3'))
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
         .settings.size(286, 199)
        ,
        newImage('Getraenke2' , 'Getraenke2.jpg' )
        .settings.size(227, 156)
        ,
        newImage('Getraenke3' , 'Getraenke3.jpg' )
        .settings.size(174, 204)
        ,
        newImage('Getraenke4' , 'Getraenke4.jpg' )
        .settings.size(235, 159)
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 304, 113, getImage('Getraenke1'))
        .settings.add( 112, 326, getImage('Getraenke2'))
        .settings.add( 114, 114, getImage('Getraenke3'))
        .settings.add( 352, 324, getImage('Getraenke4'))
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
         .settings.size(341,225)
        ,
        newImage("Kleider2", "Kleider2.jpg")
         .settings.size(323,224)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 12, 169, getImage("Kleider1"))
         .settings.add(364, 168, getImage("Kleider2"))
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
          .settings.size(170, 295)
        ,
        newImage('Stelzen2' , 'Stelzen2.jpg' )
          .settings.size(174, 291)
        ,
        newImage('Stelzen3' , 'Stelzen3.jpg' )
         .settings.size(179, 291)
        ,
        newCanvas( 'myCanvas', 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
        .settings.add( 269, 121, getImage('Stelzen3'), 0 )
        .settings.add( 59, 118, getImage('Stelzen2'), 1 )
        .settings.add( 481, 120, getImage('Stelzen1'), 2 )
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
         .settings.size(210, 317)
        ,
        newImage("Pluerre2", "Pluerre2.jpg")
         .settings.size(210, 317)
      
        ,
        newCanvas("canvas1", 700, 500)
      //   .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 110, 130, getImage("Pluerre1"))
         .settings.add(374, 130, getImage("Pluerre2"))
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
         .settings.size(263, 330)
        ,
        newImage("Finger2", "Finger2.jpg")
         .settings.size(335, 253)
      
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 41, 110, getImage("Finger1"))
         .settings.add(326, 154, getImage("Finger2"))
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
         .settings.size(308, 215)
        ,
        newImage("Haare2", "Haare2.jpg")
         .settings.size(308, 215)
      
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 38, 166, getImage("Haare1"))
         .settings.add(375, 166, getImage("Haare2"))
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
         .settings.size(308, 215)
        ,
        newImage("Tassen2", "Tassen2.jpg")
         .settings.size(308, 215)
      
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 38, 166, getImage("Tassen1"))
         .settings.add(375, 166, getImage("Tassen2"))
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
         .settings.size(214, 157)
        ,
        newImage("Buecher2", "Buecher2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Buecher3", "Buecher3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Buecher1"))
         .settings.add(367, 108, getImage("Buecher2"))
         .settings.add(256, 276, getImage("Buecher3"))
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
        newImage("Glubscher1", "Glubscher3.jpg")
         .settings.size(324, 143)
        ,
        newImage("Glubscher2", "Glubscher2.jpg")
         .settings.size(334, 143)
       
        ,
        newCanvas("canvas1", 700, 500)
       //  .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 19, 188, getImage("Glubscher1"))
         .settings.add(349, 190, getImage("Glubscher2"))
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
         .settings.size(306, 185)
        ,
        newImage("Klauen2", "Klauen2.jpg")
         .settings.size(320, 185)
        
        ,
        newCanvas("canvas1", 700, 500)
         //.settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 29, 176, getImage("Klauen1"))
         .settings.add(353, 175, getImage("Klauen2"))
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
         .settings.size(223,376)
        ,
        newImage("Flasche2", "Flasche2.jpg")
         .settings.size(201,378)
        ,
        newCanvas("canvas1", 700, 500)
        // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 89, 98, getImage("Flasche1"))
         .settings.add(404, 99, getImage("Flasche2"))
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
         .settings.size(214, 157)
        ,
        newImage("Pillen2", "Pillen2.jpg")
         .settings.size(205, 155)
        ,
        newImage("Pillen3", "Pillen3.jpg")
         .settings.size(207, 163)
        ,
        newCanvas("canvas1", 700, 500)
       // .settings.add("center at 50%", "top at 0%",getText("Satz"))
         .settings.add( 133, 107, getImage("Pillen1"))
         .settings.add(367, 108, getImage("Pillen2"))
         .settings.add( 256, 276, getImage("Pillen3"))
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
   
