(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"07so":function(e,t,n){e.exports=n.p+"static/1-03f4691501ea009319a4774507653ee5.png"},"4KMD":function(e,t,n){e.exports=n.p+"static/4-1d6a3ae40ad8d940fc9ab74f2d2a3bcb.png"},PJsV:function(e,t,n){e.exports=n.p+"static/6-4ed5f334e2492d8a4dcaebe6804de4ff.png"},Y0Hs:function(e,t,n){e.exports=n.p+"static/2-f3bc9edf8656e9438f37a6037f8d971b.png"},qCd7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n("k1TG"),a=n("8o2o"),i=(n("q1tI"),n("7ljp")),r=n("hhGP"),s=(n("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/faq.md"}});var c={_frontmatter:s},l=r.a;function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"faq"},"FAQ"),Object(i.b)("h2",{id:"how-to-solve-could-not-find-the-file-jarsignerexe-make-sure-you-have-installed-a-jdk-than-has-this-file-in-the-bin-folder-error"},'How to solve "Could not find the file jarsigner.exe. Make sure you have installed a JDK than has this file in the bin folder" error?'),Object(i.b)("p",null,"this error normally occurs in two situations:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A ",Object(i.b)("strong",{parentName:"li"},"%JavaHome% environment variable")," is using JRE instead of JDK. In this case you can see how to configure by ",Object(i.b)("strong",{parentName:"li"},"clicking")," ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.ntu.edu.sg/home/ehchua/programming/howto/environment_variables.html"}),Object(i.b)("strong",{parentName:"a"},"here")),"."),Object(i.b)("li",{parentName:"ol"},"Eclipse itself is pointing erroneously at the JRE. In this case, just go to the top bar in ",Object(i.b)("strong",{parentName:"li"},"Windows ",">"," Preferences"),". Then it will open a window and you click on ",Object(i.b)("strong",{parentName:"li"},"Java ",">"," Installed JREs ",">"," add"),'. Another window will appear, just click "',Object(i.b)("strong",{parentName:"li"},"Next"),'" and then click "',Object(i.b)("strong",{parentName:"li"},"Directory"),'" and ',Object(i.b)("strong",{parentName:"li"},"select the JDK folder that is inside the java folder"),", where you installed it ","(","usually C: \\Program Files\\Java",")",". Finally, just click select ",Object(i.b)("strong",{parentName:"li"},"folder",">"," finish"),". ",Object(i.b)("strong",{parentName:"li"},"Confirm that JDK is selected"),' and then just click "',Object(i.b)("strong",{parentName:"li"},"Apply and Close"),'" and then ',Object(i.b)("strong",{parentName:"li"},"restart")," eclipse.")),Object(i.b)("p",null,"See step-by-step from item 2 below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"1Windows",src:n("07so")})),Object(i.b)("p",null,Object(i.b)("img",{alt:"2Java",src:n("Y0Hs")})),Object(i.b)("p",null,Object(i.b)("img",{alt:"3Next",src:n("wEdb")})),Object(i.b)("p",null,Object(i.b)("img",{alt:"4Directory",src:n("4KMD")})),Object(i.b)("p",null,Object(i.b)("img",{alt:"5Finish",src:n("PJsV")})),Object(i.b)("p",null,Object(i.b)("img",{alt:"6Confirm",src:n("yq7c")})),Object(i.b)("h2",{id:"how-to-develop-for-rpi-using-totalcross"},"How to develop for RPI using TotalCross?"),Object(i.b)("p",null,"Just add in pom.xml instead of the totalcross SDK version, the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markup"}),"<scope>system</scope>\n<systemPath>caminho\\TotalCross\\dist\\tc.jar</systemPath>\n")),Object(i.b)("p",null,"That done, you can deploy it. Already to develop, is the same way that develops for mobile."),Object(i.b)("h2",{id:"we-have-a-proxy-and-it-is-blocking-the-compilation-of-our-app-what-do-you-suggest"},"We have a proxy and it is blocking the compilation of our app what do you suggest?"),Object(i.b)("p",null,"Just add iso to pom.xml:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-markup"}),"<dependency>\n  <groupId>com.totalcross</groupId>\n  <artifactId>totalcross-sdk</artifactId>\n  <version>5.1.1</version>\n  <scope>system</scope>\n  <systemPath> PATH__TO__YOUR__TOTALCROSS__JAR__FILE </systemPath>\n</dependency>\n\n<dependency>\n   <groupId>org.xerial</groupId>\n   <artifactId>sqlite-jdbc</artifactId>\n   <version>3.8.7</version>\n   <scope>compile</scope>\n</dependency>\n")),Object(i.b)("p",null,"Attention: Please be aware if the version indicated on the pom is the same as your machine."),Object(i.b)("h2",{id:"how-to-disable-backup--restore-in-totalcross"},"How to disable backup / restore in TotalCross?"),Object(i.b)("p",null,"To disable backup just add ",Object(i.b)("inlineCode",{parentName:"p"},"Settings.allowBackup = true")," within the constructor method in your application's MainWindow"),Object(i.b)("h2",{id:"every-time-there-is-a-touch-on-the-screen-the-event-is-triggered-how-to-fix"},"Every time there is a touch on the screen, the event is triggered. How to fix?"),Object(i.b)("p",null,"This may be happening because you are using the ",Object(i.b)("inlineCode",{parentName:"p"},"pendown")," instead of the ",Object(i.b)("inlineCode",{parentName:"p"},"penup"),". To better understand, follow the definitions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"pendown")," is triggered when there is a touch on the screen.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"penup")," is triggered when finger flips the screen")," ","(","or mouse/key, depending on the platform",")",".")),Object(i.b)("p",null,"To find out if there was a click, it can be detected through the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"pendrag")),", and if it is positive, do not trigger the ",Object(i.b)("inlineCode",{parentName:"p"},"penup"),"."),Object(i.b)("p",null,"Another smarter solution is to use the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"this.hadParentScrolled()"))," method within your pendown method, to ",Object(i.b)("strong",{parentName:"p"},"identify whether the action is being triggered during the scrolling of some parent component"),". As shown below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"if (!this.hadParentScrolled()) {\n    // código de pen down\n}\n")),Object(i.b)("h2",{id:"how-to-navigate-between-screens-containers-and-windows"},"How to navigate between screens ","(","Containers and Windows",")","?"),Object(i.b)("p",null,"In the case of ",Object(i.b)("strong",{parentName:"p"},"Containers"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"swap(new InitialScreen());")," - If you are in the Main Window and want to call a Container, simply use the ",Object(i.b)("inlineCode",{parentName:"li"},"swap()")," command."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MainWindow.getMainWindow().Swap(new SecondScreen());")," - If you are in a container or Window and want to call a Container just use the command.")),Object(i.b)("p",null,"In the case of ",Object(i.b)("strong",{parentName:"p"},"Windows"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".popup()")," - The execution ",Object(i.b)("strong",{parentName:"li"},"stops")," after the ",Object(i.b)("inlineCode",{parentName:"li"},"popup()"),"command is executed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".popupNonBlocking()")," - the execution ",Object(i.b)("strong",{parentName:"li"},"continues")," right after the popup command, even with the window still open")),Object(i.b)("p",null,"To understand more in depth how best to use and other ways to navigate between user interfaces, click ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://totalcross.gitbook.io/playbook/guideline/container-x-window"}),"here")),Object(i.b)("h2",{id:"is-it-possible-for-the-buttons-to-be-round"},"Is it possible for the buttons to be round?"),Object(i.b)("p",null,"Yes, if it is an FAB we have a component of its own, the ",Object(i.b)("inlineCode",{parentName:"p"},"FloatingButton"),". In other cases, you can change using NinePatch or do the most recommended: use an ImageButton as in the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'Image original = Images.getTotalCrossLogo();\n// If you need to resize it, this is the method call.\nImage aumentada;\ntry {\n    aumentada = original.hwScaledBy(0.5, 0.5);\n    Button btn = new Button(aumentada);\n    // If you want to change the image when the button is clicked, use this property\n    // The "getTouchedUpInstance" method is a good place-holder.    btn.pressedImage = aumentada.getTouchedUpInstance((byte) 64, (byte) 0);\n    // Finally, take a default button border and ninepatch\n    btn.setBorder(Button.BORDER_NONE);\n    btn.setNinePatch(null);\n\n    add(btn, CENTER, CENTER);\n} catch (ImageException e) {\n    e.printStackTrace();\n}\n\n')),Object(i.b)("h2",{id:"slowdown-when-opening-in-windows-with-a-roboto-font"},"Slowdown when opening in Windows with a Roboto font"),Object(i.b)("p",null,"Just use ",Object(i.b)("inlineCode",{parentName:"p"},'Font.getFont ("Roboto Medium", true, FontSize);')),Object(i.b)("h2",{id:"is-there-a-maximum-file-size-to-be-retrieved-by-the-vmgetfile-string-method7"},"Is there a maximum file size to be retrieved by the Vm.getFile ","(","String",")"," method?7"),Object(i.b)("p",null,"I checked it here, Vm.getFile looks for the file in the TCZs. An embedded file in TCZ has its size given in an int32 ",Object(i.b)("inlineCode",{parentName:"p"},"uncompressedSize"),"; therefore, it can not be more than 4gb. As TotalCross apps are 32bits, as far as I can remember, I would still lower this limit to 2gb, because the system will not be able to allocate more than this contiguous memory."),Object(i.b)("h2",{id:"what-is-the-difference-between-window-and-container"},"What is the difference between Window and Container?"),Object(i.b)("p",null,"First, the main function of each is different:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Container"),": A control capable of containing other controls. It is primarily a form of organization."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Window"),": it is a control capable of overlapping others, creating an illusion of depth. In addition, Windows is also containers, as they can accommodate several components within them.")),Object(i.b)("p",null,"To better understand the difference between them in specific cases and how to use both in the most appropriate way, access the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://learn.totalcross.com/guideline/container-x-window"}),"Windows X Container session"),"."),Object(i.b)("h2",{id:"is-it-possible-to-search-for-gps-position-through-triangulation"},"Is it possible to search for GPS position through Triangulation?"),Object(i.b)("p",null,"By default the ",Object(i.b)("strong",{parentName:"p"},"GPS class")," performs location ",Object(i.b)("strong",{parentName:"p"},"only via GPS"),", but on Android, you can change your behavior to use Google Play Services to get the location. To do this, change the ",Object(i.b)("strong",{parentName:"p"},"field precision")," value to to ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"LOW_GPS_PRECISION")),"."),Object(i.b)("p",null,"Location by Google Play Services is based on a ",Object(i.b)("em",{parentName:"p"},"variety of information"),", including ",Object(i.b)("strong",{parentName:"p"},"Wifi and Bluetooth"),". If you specifically want information about the network location used, you can use the CellInfo class in WinCE or Android."),Object(i.b)("h2",{id:"how-to-use-the-decimalformat-on-totalcross"},"How to use the DecimalFormat on TotalCross?"),Object(i.b)("p",null,"Totalcross doesn't have the ",Object(i.b)("inlineCode",{parentName:"p"},"java.text")," so the DecimalFormat is not on our SDK."),Object(i.b)("h2",{id:"how-to-ativate-the-ok-enter-button-on-android"},"How to ativate the OK ","(","ENTER",")"," button on Android"),Object(i.b)("p",null,"Just use the .addKeyListener and add an action in the specialkeyPressed method like no example below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"Edit edtExit = new Edit();\n    edtExit.addKeyListener(new KeyListener() {\n        ...\n        @Override\n        public void specialkeyPressed(KeyEvent keyEvent) {\n            if(keyEvent.isActionKey()){\n                proximaTela();\n            }\n        }\n    });\nadd(edtExit, CENTER, AFTER  + 40, PARENTSIZE, PREFERRED);\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/faq.md"}}),b.isMDXComponent=!0},wEdb:function(e,t,n){e.exports=n.p+"static/3-4cb4115090f876e73aef8d964e18a347.png"},yq7c:function(e,t,n){e.exports=n.p+"static/7-80f6cf6ee1665ab479c14dfc532b82de.png"}}]);
//# sourceMappingURL=component---src-docs-md-faq-md-3de517a1da0c46e3b3a5.js.map