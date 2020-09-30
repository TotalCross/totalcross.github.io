(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"6kI1":function(e,t,l){e.exports=l.p+"static/screen-shot-2019-04-01-at-15.53.51-472656e7dd480d88f7666fedb80afef1.png"},Nfct:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return o})),l.d(t,"default",(function(){return b}));var n=l("k1TG"),a=l("8o2o"),s=(l("q1tI"),l("7ljp")),i=l("hhGP"),o=(l("qKvR"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/device-simulator.md"}});var r={_frontmatter:o},c=i.a;function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(s.b)(c,Object(n.a)({},r,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"device-simulator"},"Device Simulator"),Object(s.b)("h2",{id:"overview"},"Overview"),Object(s.b)("p",null,"TotalCross has its own simulator to help you test and visualize the app before sending the app to the mobile device. ",Object(s.b)("strong",{parentName:"p"},"The simulator comes embedded with TotalCross SDK"),", you don't need to download anything else besides the SDK or configurate your pom.xml."),Object(s.b)("p",null,"The simulator is a Java application that allows you to run a TotalCross application over the installed JDK, providing you a quick way to run and test your app, for different screen sizes, resolutions and DP just changing a few parameter."),Object(s.b)("p",null,"Some people think that running the application on the desktop under an IDE ","(","such as Eclipse or Netbeans",")"," will use the TotalCross virtual machine. This is not true: the actual virtual machine used is the one provided in the Java Development Kit installed ","(","or java.exe",")"," on the desktop."),Object(s.b)("h2",{id:"running-the-simulator"},"Running the simulator"),Object(s.b)("p",null,"To run the simulator, we recommend you to create a class with a main method like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"public class YourAppApplication {\n    public static void main(String[] args) {\n        TotalCrossApplication.run(YourApp.class);\n    }\n}\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"YourApp.class")," must extend MainWindow and must be the only MainWindow in your project"),Object(s.b)("p",null,"Now, just run YourAppApplication like a regular Java application and the simulator will works fine =",")"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"TotalCross Key"),': Probably you will need a TotalCross Key to run your simulator. First time you open the simulator without the key as a parameter, the simulator will ask you the key and store it at your O.S. Also, take a look at the "/r" parameter'),Object(s.b)("p",null,"You may also pass arguments to the launcher to simulate different resolutions and styles, and have an idea of how your application is going to look like on a particular device."),Object(s.b)("p",null,"The basic format for using the parameters is:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'TotalCrossApplication.run(YourApp.class, "parameter1", "value", "parameter2", "value");\n')),Object(s.b)("h2",{id:"screen-sizes-parameters"},"Screen Sizes Parameters"),Object(s.b)("p",null,"The optional arguments can be any combination of the following ","(","not case sensitive",")",":"),Object(s.b)("h3",{id:"screen-resolution-and-color-depth"},Object(s.b)("strong",{parentName:"h3"},"Screen resolution and color depth")),Object(s.b)("p",null,"/scr x: sets the width and height."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'// E.g.: If you need to simulate iPhone Xs Resolution you should do like this\nTotalCrossApplication.run(YourApp.class, "/scr", "1125x2436");\n')),Object(s.b)("p",null,"You can simulate any screen size and resolution with TotalCross Simulator. You just need to search for the specific device that you want to simulate and use the ",Object(s.b)("strong",{parentName:"p"},'"/scr"')," parameter to configure the resolution"),Object(s.b)("h3",{id:"usage-of-dp"},Object(s.b)("strong",{parentName:"h3"},"Usage of DP")),Object(s.b)("p",null,"Since TotalCross 5, the SDK supports Density-independent pixels ","(","DP",")"," for components positioning and size, following the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://material.io/design/"}),"Material Design specs"),"."),Object(s.b)("p",null,"/scale ","<","0.1 to 4",">",": scales the screen, magnifying the contents ","(","if greater than 1",")"," or shrinking ","(","if between 0 and 1",")","."),Object(s.b)("p",null,"The right way to use this parameter and simulate iPhone Xs, for example, is shown below"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'\nTotalCrossApplication.run(YourApp.class, "/scr", "1125x2436", "/scale", "0.33");\n')),Object(s.b)("h3",{id:"font-size"},Object(s.b)("strong",{parentName:"h3"},"Font Size")),Object(s.b)("p",null,"Devices with different resolutions must have different font sizes too. With this parameter you can simulate different font sizes together with scale and screen configurations."),Object(s.b)("p",null,"/fontSize : set the default font size to the one passed as parameter"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"We strongly recommend"),' you to set a default font size to your application directly on your MainWindow. If you let the application uses the font configuration of the device, your app can experience some differences running on different devices. Take a look at the chapter "',Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://totalcross.gitbook.io/playbook/guideline/colors-fonts-and-images"}),"Colors, Fonts & Images"),'" for more details.'),Object(s.b)("h2",{id:"other-parameters"},Object(s.b)("strong",{parentName:"h2"},"Other Parameters")),Object(s.b)("h3",{id:"totalcross-key"},Object(s.b)("strong",{parentName:"h3"},"TotalCross Key")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"/r: you can provide your TotalCross key directly through this parameter")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'        TotalCrossApplication.run(YourApp.class, "/r", "YOUR TC KEY");\n')),Object(s.b)("h3",{id:"color-depth"},Object(s.b)("strong",{parentName:"h3"},"Color depth")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"/bpp 8: emulates 8 bits per pixel screens. ","(","256 colors",")",". No used anymore on modern devices."),Object(s.b)("li",{parentName:"ul"},"/bpp 16: emulates 16 bits per pixel screens. ","(","64K colors",")","."),Object(s.b)("li",{parentName:"ul"},"/bpp 24: emulates 24 bits per pixel screens. ","(","16M colors",")","."),Object(s.b)("li",{parentName:"ul"},"/bpp 32: emulates 32 bits per pixel screens. ","(","16M colors without transparency",")",".")),Object(s.b)("h3",{id:"user-interface-style"},Object(s.b)("strong",{parentName:"h3"},"User interface style")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"/uiStyle Flat: Flat user interface style."),Object(s.b)("li",{parentName:"ul"},"/uiStyle Flat: Flat user interface style."),Object(s.b)("li",{parentName:"ul"},"/uiStyle Android: Android user interface style.")),Object(s.b)("h4",{id:"device-characteristics"},Object(s.b)("strong",{parentName:"h4"},"@Device characteristics")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"/penlessDevice: acts as a device that has no touch screen. Note that all currently supported devices have touch screen."),Object(s.b)("li",{parentName:"ul"},"/geofocus: uses geographical focus ","(","also activates penlessDevice",")","."),Object(s.b)("li",{parentName:"ul"},"/fingerTouch: simulates the use of fingers ","(","since a finger is less precise than a pen, uses an algorithm to find the control near the finger and also activates drag and flick",")","."),Object(s.b)("li",{parentName:"ul"},"/unmovableSip: specifies that the Soft Input Panel ","(","SIP",")"," is unmovable, and simulates the screen shift that’s made when an Edit or MultiEdit gains focus."),Object(s.b)("li",{parentName:"ul"},"/virtualKeyboard: specifies that the device does not have a physical keyboard ","(","or it has but the keyboard is closed",")",".")),Object(s.b)("h3",{id:"others"},Object(s.b)("strong",{parentName:"h3"},"Others")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"/pos x,y: sets the opening position of the application."),Object(s.b)("li",{parentName:"ul"},"/dataPath : sets where the PDB and media files are stored. This is also the default path for Litebase table files."),Object(s.b)("li",{parentName:"ul"},"/cmdLine ","<","...",">",": the rest of the arguments ","(","except the last one",")"," are passed as the command line to the application being launched."),Object(s.b)("li",{parentName:"ul"},"/showmousepos: shows the mouse position ","(","only when running on JavaSE",")",".")),Object(s.b)("h2",{id:"function-keys"},"Function Keys"),Object(s.b)("p",null,"When running the application, the emulator shows some function keys that can be used to emulate a device key."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"F2 Take screenshot and save to current folder"),Object(s.b)("li",{parentName:"ul"},"F6 opens the application menu"),Object(s.b)("li",{parentName:"ul"},"F7 back ","(","escape",")"),Object(s.b)("li",{parentName:"ul"},"F9 tests the screen rotation using the launcher"),Object(s.b)("li",{parentName:"ul"},"F11 opens the keyboard ","(","or calendar",")"," in an Edit field.")),Object(s.b)("h2",{id:"quick-parameter-guide-in-simulator"},"Quick parameter guide in simulator"),Object(s.b)("p",null,"Possible Arguments ","(","in any order and case insensitive",")",". Default is marked as ","*","."),Object(s.b)("table",null,Object(s.b)("thead",null,Object(s.b)("tr",null,Object(s.b)("th",{style:{textAlign:"left"}},"Arguments"),Object(s.b)("th",{style:{textAlign:"left"}},"Definition"))),Object(s.b)("tbody",null,Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/scr WIDTHxHEIGHT"),Object(s.b)("td",{style:{textAlign:"left"}},'sets the width and heightException in thread "main"')),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/scr WIDTHxHEIGHTxBPP"),Object(s.b)("td",{style:{textAlign:"left"}},"sets the width, height and bits per pixel (8, 16, 24 or 32)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/scr Win32"),Object(s.b)("td",{style:{textAlign:"left"}},"Windows 32 (same of /scr 240x320x24)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/scr iPhone"),Object(s.b)("td",{style:{textAlign:"left"}},"iPhone (same of /scr 640x960x24)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"*/scr android"),Object(s.b)("td",{style:{textAlign:"left"}},"Android (same of /scr 320x568x24)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/pos x,y"),Object(s.b)("td",{style:{textAlign:"left"}},"Sets the openning position of the application")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/uiStyle Flat"),Object(s.b)("td",{style:{textAlign:"left"}},"Flat user interface style")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"*/uiStyle Vista"),Object(s.b)("td",{style:{textAlign:"left"}},"Vista user interface style")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/uiStyle Android"),Object(s.b)("td",{style:{textAlign:"left"}},"Android 4 user interface style")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/uiStyle Holo"),Object(s.b)("td",{style:{textAlign:"left"}},"Android 5 user interface style")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/uiStyle Material:"),Object(s.b)("td",{style:{textAlign:"left"}},"Material 6 user interface style")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/penlessDevice"),Object(s.b)("td",{style:{textAlign:"left"}},"acts as a device that has no touchscreen")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/fingerTouch"),Object(s.b)("td",{style:{textAlign:"left"}},"acts as a device that uses a finger instead of a pen")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},Object(s.b)("p",null,"/unmovablesip"),Object(s.b)("p",null)),Object(s.b)("td",{style:{textAlign:"left"}},"acts as a device whose SIP is unmovable (like in Android and iPhone).")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/geofocus"),Object(s.b)("td",{style:{textAlign:"left"}},"enables geographical focus.")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/virtualKeyboard"),Object(s.b)("td",{style:{textAlign:"left"}},"shows the virtual keyboard when in an Edit or a MultiEdit")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/showmousepos"),Object(s.b)("td",{style:{textAlign:"left"}},"shows the mouse position.")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/bpp 8"),Object(s.b)("td",{style:{textAlign:"left"}},"emulates 8 bits per pixel screens (256 colors)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/bpp 16"),Object(s.b)("td",{style:{textAlign:"left"}},"emulates 16 bits per pixel screens (64K colors)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/bpp 24"),Object(s.b)("td",{style:{textAlign:"left"}},"emulates 24 bits per pixel screens (16M colors)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/bpp 32"),Object(s.b)("td",{style:{textAlign:"left"}},"emulates 32 bits per pixel screens (16M colors without transparency)")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/scale"),Object(s.b)("td",{style:{textAlign:"left"}},"scales the screen, magnifying the contents using a smooth scale.")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/fastscale"),Object(s.b)("td",{style:{textAlign:"left"}},"scales the screen, magnifying the contents using a fast scale.")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/dataPath"),Object(s.b)("td",{style:{textAlign:"left"}},"sets where the PDB and media files are stored")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/cmdLine <...>"),Object(s.b)("td",{style:{textAlign:"left"}},"the rest of arguments-1 are passed as the command line")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/fontSize"),Object(s.b)("td",{style:{textAlign:"left"}},"set the default font size to the one passed as parameter")),Object(s.b)("tr",null,Object(s.b)("td",{style:{textAlign:"left"}},"/r"),Object(s.b)("td",{style:{textAlign:"left"}},"specify a registration key to be used to activate TotalCross when required. You may use %key%, where key is an environment variable The class name that extends MainWindow must always be the last argument")))),Object(s.b)("h2",{id:"another-way-to-run-the-simulator"},"Another way to run the simulator"),Object(s.b)("p",null,"Another way to run the simulator is calling the ",Object(s.b)("strong",{parentName:"p"},"totalcross.Launcher"),' class directly through the command line or "Run" from Eclipse IDE like the images below'),Object(s.b)("p",null,Object(s.b)("img",{alt:"screen-shot-2019-04-01-at-15.53.07",src:l("Yj+s")})),Object(s.b)("p",null,Object(s.b)("img",{alt:"screen-shot-2019-04-01-at-15.53.51",src:l("6kI1")})),Object(s.b)("p",null,"The results will be exactly the same in both ways. You can choose which one is the best for you."))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/device-simulator.md"}}),b.isMDXComponent=!0},"Yj+s":function(e,t,l){e.exports=l.p+"static/screen-shot-2019-04-01-at-15.53.07-eb78cdcc75af6fd7960022559f25d875.png"}}]);
//# sourceMappingURL=component---src-docs-md-guides-device-simulator-md-eca666f22c6bde66f09c.js.map