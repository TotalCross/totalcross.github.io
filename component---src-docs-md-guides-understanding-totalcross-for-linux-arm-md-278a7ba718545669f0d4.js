(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"1F/4":function(e,t,n){e.exports=n.p+"static/7-1-d765d9bbc00b20cae6484052c3912f3a.gif"},"9JBO":function(e,t,n){e.exports=n.p+"static/5-1-da828601e43c4016494bd63eccbab85c.gif"},DHPQ:function(e,t,n){e.exports=n.p+"static/6-1-56e3062074c8c40acf00408978053b41.gif"},J95x:function(e,t,n){e.exports=n.p+"static/9-1-006d548ae1c2192ab4bab119b61c4ea7.gif"},"Ma/d":function(e,t,n){e.exports=n.p+"static/8-1-1d48c2dd28ce603f5a98287412b1900b.gif"},Op6l:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("k1TG"),o=n("8o2o"),b=(n("q1tI"),n("7ljp")),l=n("hhGP"),r=(n("qKvR"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/understanding-totalcross-for-linux-arm.md"}});var c={_frontmatter:r},i=l.a;function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(b.b)(i,Object(a.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"understanding-totalcross-for-linux-arm"},"Understanding TotalCross for Linux ARM"),Object(b.b)("p",null,"TotalCross now supports embedded systems!"),Object(b.b)("h2",{id:"introduction"},"Introduction"),Object(b.b)("p",null,"See at this guide:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Discover plugin for VS Code;"),Object(b.b)("li",{parentName:"ul"},"Getting your Hello World App cooler;"),Object(b.b)("li",{parentName:"ul"},"How to deploy;"),Object(b.b)("li",{parentName:"ul"},"After basics;")),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("p",null,"Complete the Getting Started."),Object(b.b)("p",null,"The following electronic components are also required:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Raspberry Pi 3;"),Object(b.b)("li",{parentName:"ul"},"7x jumpers male-female;"),Object(b.b)("li",{parentName:"ul"},"Protoboard;"),Object(b.b)("li",{parentName:"ul"},"LED RGB module ","(","or common 4 pins LED RGB",")",";"),Object(b.b)("li",{parentName:"ul"},"Push-button module ","(","or common push-button",")",".")),Object(b.b)("p",null,"In order to execute Gpiod methods at your embedded device, you will also need to have the libgpiod-dev package installed in your board. You can do that by entering the following command at the device's terminal:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"$ sudo apt-get install libgpiod-dev\n")),Object(b.b)("h2",{id:"guide"},Object(b.b)("strong",{parentName:"h2"},"Guide")),Object(b.b)("h3",{id:"discover-vs-code-plugin"},"Discover VS Code plugin"),Object(b.b)("p",null,"A quick way to start using TotalCross is installing the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=Italo.totalcross"}),"TotalCross extension for VS Code"),"."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 1:")," open VS Code console ","(","CTRL + Shift + P",")"," and type TotalC… autocomplete should help!"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image3-1",src:n("YSIf")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 2:")," select ",Object(b.b)("em",{parentName:"p"},"TotalCross: Create new Project;")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 3:")," create a folder called ",Object(b.b)("em",{parentName:"p"},"HelloWorld")," and select it;"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 4:")," ",Object(b.b)("em",{parentName:"p"},"GroupId")," will be ",Object(b.b)("inlineCode",{parentName:"p"},"com.totalcross"),";"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 5:")," ",Object(b.b)("em",{parentName:"p"},"ArtifactId")," will be ",Object(b.b)("inlineCode",{parentName:"p"},"HelloWorld"),Object(b.b)("em",{parentName:"p"},";")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 6:")," select the latest version of TotalCross SDK and ",Object(b.b)("inlineCode",{parentName:"p"},"-linux-arm")," platform;"),Object(b.b)("p",null,Object(b.b)("img",{alt:"Click to expand",src:n("uNjy")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 7:")," open",Object(b.b)("inlineCode",{parentName:"p"},"RunHelloWorldApplication.java")," and click ",Object(b.b)("em",{parentName:"p"},"Run")," ","(","IDE",")",". The result should be:"),Object(b.b)("p",null,Object(b.b)("img",{alt:"Click  to expand",src:n("9JBO")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 8:")," watch the integrated simulator!"),Object(b.b)("h3",{id:"getting-your-hello-world-app-even-more-cooler-🥶-"},"Getting your Hello World App even more Cooler 🥶 😅"),Object(b.b)("p",null,"The following project deals with the control of an RGB LED with user interface buttons and a pin reset button!"),Object(b.b)("p",null,Object(b.b)("img",{alt:"gpiotutorial",src:n("cbvy")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 1:")," follow the schematic:"),Object(b.b)("p",null,Object(b.b)("img",{alt:"understanding-linux-arm",src:n("RchY")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 2:")," to work with pin logic after ",Object(b.b)("inlineCode",{parentName:"p"},"public class HelloWorld extends MainWindow {")," add:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Integers to store pin numbers\nprivate int    R = 4, G = 17, B = 27, pushButton = 18;\n// Integers to store state of each LED pin, 0 (LOW) and 1 (HIGH)\nprivate int    sttR, sttG, sttB;\n// Buttons to control colors\nprivate Button btnR, btnG, btnB;\n")),Object(b.b)("p",null,"If you need to work with different pinouts check the manufacturer manual!"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 3:")," at ",Object(b.b)("em",{parentName:"p"},"HelloWorld.java")," in ",Object(b.b)("inlineCode",{parentName:"p"},"initUI()")," code add:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Label helloWorld made on project creation\nLabel helloWorld = new Label("Hello World!");\n// Change the position of label on the Y axis, with TOP (beginning of Y) + a fill of 20\nadd(helloWorld, CENTER, TOP + 20);\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 4:")," then, board setup:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Board Setup\nGpiodChip gpioChip = GpiodChip.open(0);\nGpiodLine pinR = gpioChip.line(R);\nGpiodLine pinG = gpioChip.line(G);\nGpiodLine pinB = gpioChip.line(B);\nGpiodLine pinPushButton = gpioChip.line(pushButton);\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 5:")," pins setup:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Set LED pins as outputs and default value sttX\npinR.requestOutput("CONSUMER",sttR);\npinG.requestOutput("CONSUMER",sttG);\npinB.requestOutput("CONSUMER",sttB);\n// Set Reset pin as input\npinPushButton.requestInput("CONSUMER");\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 6:")," the red button:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// The TotalCross button:\nbtnR = new Button(\"R\");                                       // Button instantiation\n                                                              // without text\nbtnR.setBackColor(Color.RED);                                 // Set background color (red)\nbtnR.addPressListener(new PressListener() {                   // Press event listener\n    @Override\n    public void controlPressed(ControlEvent controlEvent) {\n        sttR = 1 - sttR;                                      // Invert pin state\n        pinR.setValue(sttR);                                  // Set value (HIGH or LOW)\n    }\n});\nadd(btnR, CENTER - 70, AFTER + 40);                           // To make horizontally aligned\n                                                              // buttons in the 'RGB' sequence,\n                                                              // take the center reference and\n                                                              // decrease 70 to place the\n                                                              // leftmost R. In the Y axis just\n                                                              // take the reference of the\n                                                              // previous component and add 40\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 7:")," and the other buttons:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'btnG = new Button("G");\nbtnG.setBackColor(Color.GREEN);\nbtnG.addPressListener(new PressListener() {\n    @Override\n    public void controlPressed(ControlEvent controlEvent) {\n        sttG = 1 - sttG;                                      // Pay attention to change pin!!!\n        pinG.setValue(sttG);\n    }\n});\nadd(btnG, CENTER, SAME);                                      // The green button will be\n                                                              // placed at the center and in\n                                                              // the same line of previous\n                                                              // button\n\nbtnB = new Button("B");\nbtnB.setBackColor(Color.BLUE);\nbtnB.addPressListener(new PressListener() {\n    @Override\n    public void controlPressed(ControlEvent controlEvent) {\n        sttB = 1 - sttB;                                       // Pay attention to change pin!!!\n        pinB.setValue(sttB);\n    }\n});\nadd(btnB, CENTER + 70, SAME);                                  // The last button will be placed\n                                                               // to the right of the center.\n')),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 8:")," finally we use a thread to check the state of the reset button:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// A thread will be used to check every 20 ms, if the reset button has been pressed: if yes then\n// the pin state goes to LOW\nnew Thread() {\n    @Override\n    public void run() {\n        while(true){\n            if(pinPushButton.getValue() == 1) {\n                sttG = 1 - sttG;\n                sttR = 1 - sttR;\n                sttB = 1 - sttB;\n                pinR.setValue(sttR);\n                pinG.setValue(sttG);\n                pinB.setValue(sttB);\n            }\n            Vm.sleep(100);\n        }\n    }\n}.start();\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 9:")," run ",Object(b.b)("em",{parentName:"p"},"RunHelloWorldApplication.java")," again and watch the results!"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image6-1",src:n("DHPQ")})),Object(b.b)("p",null,'{% hint style="info" %}\nView fully code ',Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/acmlira/e6c18f0a82688f750c1648af4d101344"}),"here"),"\n{% endhint %}"),Object(b.b)("h3",{id:"how-to-deploy"},"How to deploy"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 1:")," open VS Code console ","(","CTRL + Shift + P",")"," and select ",Object(b.b)("em",{parentName:"p"},"TotalCross: Deploy")),Object(b.b)("p",null,Object(b.b)("img",{alt:"image7-1",src:n("1F/4")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 2:")," a second dialog box will appear and just fill in the board's information:"),Object(b.b)("p",null,Object(b.b)("img",{alt:"imamge8-1",src:n("Ma/d")})),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Step 3:")," see the results in screen or VNC"),Object(b.b)("p",null,Object(b.b)("img",{alt:"image9-1",src:n("J95x")})),Object(b.b)("h3",{id:"after-basics"},"After basics"),Object(b.b)("p",null,"This was the beginning of application development for TotalCross embedded systems, how about taking a look at ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TotalCross/TCSample"}),"TCSample")," and seeing all that can be done? See dashboard made especially for Web Summit 2019:"),Object(b.b)("p",null,Object(b.b)("img",{alt:"video",src:n("TJe7")})),Object(b.b)("h2",{id:"see-more"},"See more"),Object(b.b)("p",null,"Are you interested in development with embedded systems? Contact us via ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://t.me/comunidadetotalcross"}),"Telegram"),"!"),Object(b.b)("p",null,Object(b.b)("img",{alt:"Bruno Muniz, Lucas Galvanini e Pedro Lyra no WebSummit",src:n("rLVi")})),Object(b.b)("h2",{id:"references"},"References"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://fritzing.org/home/"}),"Fritzing "))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/understanding-totalcross-for-linux-arm.md"}}),p.isMDXComponent=!0},RchY:function(e,t,n){e.exports=n.p+"static/understanding_linux_arm-6667c8f32c73367c7d7373012317a873.png"},TJe7:function(e,t,n){e.exports=n.p+"static/video-11e109dc3b988ab2128375cb372e4c92.gif"},YSIf:function(e,t,n){e.exports=n.p+"static/3-1-39574105d7599bac9b5e36f7cfb8bef1.gif"},cbvy:function(e,t,n){e.exports=n.p+"static/gpiotutorial-b0029afed7ea5b7138b2771b4189b31e.jpg"},rLVi:function(e,t,n){e.exports=n.p+"static/img3-1-77c14b5b876ce6dc184bab9ea5abb582.jpeg"},uNjy:function(e,t,n){e.exports=n.p+"static/4-1-acd55e83415b80ed40273e72bc355935.gif"}}]);
//# sourceMappingURL=component---src-docs-md-guides-understanding-totalcross-for-linux-arm-md-278a7ba718545669f0d4.js.map