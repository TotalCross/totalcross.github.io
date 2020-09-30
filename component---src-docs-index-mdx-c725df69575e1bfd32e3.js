(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"c+kE":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var o=a("k1TG"),n=a("8o2o"),s=(a("q1tI"),a("7ljp")),r=a("hhGP"),i=(a("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/index.mdx"}});var l={_frontmatter:i},c=r.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)(c,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"totalcross-overview"},"TotalCross Overview"),Object(s.b)("p",null,"TotalCross is a cross-platform tool that lets you develop apps in JAVA and deploy them to iOS, Android and Windows easily, leading to 3x cost and time savings."),Object(s.b)("p",null,"Our vision is ",Object(s.b)("strong",{parentName:"p"},"to create the next generation of cross-platform tools")," and help Java developers and companies to ",Object(s.b)("strong",{parentName:"p"},"easily create beautiful mobile applications")," for all platforms on the market."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Track all TotalCross updates through the ",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.superwaba.net/SDKRegistrationService/"}),"customer space.")),Object(s.b)("li",{parentName:"ul"},"Ask for feature request or vote for existing ones on GitLab ",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"https://gitlab.com/totalcross/TotalCross/issues"}),"The TotalCross Companion")," remember to tag it with ",Object(s.b)("inlineCode",{parentName:"li"},"feature")),Object(s.b)("li",{parentName:"ul"},"Found a bug? Please open an ",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"https://gitlab.com/totalcross/TotalCross/issues"}),"issue")),Object(s.b)("li",{parentName:"ul"},"Follow the ",Object(s.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.totalcross.com/"}),"blog "),"posts to access marketing, development, technology and more")),Object(s.b)("h2",{id:"supported-platforms"},"Supported Platforms"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Android")," 4.0.3 and above ","(","API level 15",")",";"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"iOS")," 8.0 and above;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Hand Held")," ","(","Honeywell, Zebra, etc",")",";"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Windows")," XP and above;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Linux")," 32 and 64 bits;"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Java")," applet ","(","JDK 1.1 and above",")",";"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Raspberry PI;")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Toradex;")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Beaglebone"),".")),Object(s.b)("p",null,'{% hint style="success" %}\nThe choice of Java as a language for development was not occasional, but due to the fact that of the ',Object(s.b)("strong",{parentName:"p"},"21 million existing developers")," in the world, ",Object(s.b)("strong",{parentName:"p"},"9 million are Java developers"),", according to the Global Developers Population and Demographic Study in 2016.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("strong",{parentName:"p"},"It is one of the largest development communities in the world!"),"\n{% endhint %}"),Object(s.b)("h2",{id:"virtual-machine-features"},"Virtual Machine Features"),Object(s.b)("p",null,"In our heart is present our virtual machine, originally idealized in a master's degree, and already built and perfected over 10 years. It's log-based ","(","Java",")"," architecture, bytecode ",Object(s.b)("em",{parentName:"p"},'"itself with its own folders"')," for the most frequent and ",Object(s.b)("strong",{parentName:"p"},"implemented 100% with C guarantees performance equivalent to native development.")),Object(s.b)("p",null,"This is how TotalCross applications can run not only on Android or iOS devices but also on desktops and hand helds ","(","Honeywell, Zebra, etc.",")"," or kiosks that can do Android, Windows or WinCE, supporting devices with the processor of 500Mhz and only 64MB of RAM."),Object(s.b)("h3",{id:"totalcross-virtual-machine-features"},"TotalCross Virtual Machine features"),Object(s.b)("h4",{id:"the-totalcross-virtual-machine-tcvm-is-a-shared-library-written-from-scratch-and-has-the-following-features"},"The TotalCross Virtual Machine ","(","TCVM",")"," is a shared library written from scratch, and has the following features:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"It interprets a proprietary set of opcodes instead of Java Bytecodes."),Object(s.b)("li",{parentName:"ul"},"It is a register-based VM, not stack-based as Java, which results in ",Object(s.b)("strong",{parentName:"li"},"better performance.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"It has support for real multi-threading"),". Note that the TotalCross API does not supports concurrency, which must be implemented by your own."),Object(s.b)("li",{parentName:"ul"},"The TotalCross class ","(","tclass",")"," files stores internal information in little endian, since its the most widely used format of actual microprocessors."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"The tclass files are highly optimized to save space"),". For instance, the constant pool ","(","where strings, constants, and identifiers are stored",")"," is shared among all deployed classes, and each class entry is compressed using zlib."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Supports headless applications")," ","(","like daemon applications, without user interface",")",": just implement the interface totalcross.MainClass and this class will be loaded by the TCVM. The appStarting","(",")"," and appEnding","(",")"," methods are called and the application exits."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Supports the method finalize","(",")"),", ran every time the garbage collector ","(","gc",")"," finishes its job. There’s a limitation: no objects can be created inside a finally method, otherwise the method will silently abort itself. Optionally, to improve GC’s performance, you can define in your class a public non-static field named dontFinalize that, if present and set to true, will skip the finalize call. In most cases, finalize","(",")"," is used to ensure that a class that holds system resources ","(","like file or socket",")"," and should be closed to release these resources is always closed, either because the programmer forgot to do it himself or because the program was halted by an exception. Note that you must define the field dontFinalize and set it to true when the close method is run for the first time. Otherwise the gc will try to finalize an object that was already closed by the programmer, which may cause trouble. Doing so also speeds up the gc.")),Object(s.b)("h3",{id:"the-totalcross-vm-also-has-a-drawback"},"The TotalCross VM also has a drawback:"),Object(s.b)("p",null,"It does not support the float type, only double. This option was adopted because all actual processors have a math co-processor, and also because the vast majority of mobile applications are not scientific programs. During our research, we found that float types are two times faster than double, but this small performance difference does not make up for the overhead needed to add float type support to the virtual machine. The change from float to double will be done by the translator to let legacy applications work, however, you should change your application to use double, since there’s no benefit by using float."),Object(s.b)("h2",{id:"thread-support"},"Thread Support"),Object(s.b)("p",null,"TotalCross supports preemptive threads using the native thread mechanism of each supported platform. On Android, iOS, and Linux, it uses pthread, and on Windows, it uses the qte well documented thread api."),Object(s.b)("p",null,"The API does not support concurrency. If your program needs to access the same object from many threads, you must use the synchronized keyword. The support for synchronized is limited: it does not support synchronized methods, neither classes, neither standard objects. You must use the synchronized","(","object",")",", and the only object type that can be used as parameter is the totalcross.util.concurrent.Lock. If you use synchronized","(","this",")",", the tc.Deploy will abort during deploy; if you use synchronized with an object from any other class besides the Lock class, a RuntimeException will be thrown when your program runs in the TotalCross virtual machine. Moreover, using the synchronized keyword before a method will be useless: it will be ignored by the VM. Note that these problems will not occur when running on Java desktop, only when running on TCVM. Here’s a sample that shows how to use it:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"\\lstinputlisting[label=samplecode,caption=A sample]companion_resources/listings/TestConcurrent.java\n")),Object(s.b)("p",null,"In the sample above, commenting out the line marked with ","*","*","*","*","*",", the log list box will be filled randomly by the threads. With the lock, it will be filled in sequence, because each thread will gain the lock once, and the other threads will have to wait the main loop of the lock owner finish before starting their loops. There’s no limit in the number of locks used."),Object(s.b)("p",null,"Generally speaking, you can create a thread to listen to a socket or a file or even a Litebase table in background, but be aware that if you try to access the same resource by different threads your application might just blow up. We also don’t recommend running the user interface in a background thread, due to system event concurrency. Threads should be used for I/O and other tasks, but not for showing user interface screens that could receive events."),Object(s.b)("h2",{id:"graphics-palette-and-color"},"Graphics, Palette and Color"),Object(s.b)("p",null,"TotalCross has a graphics engine written from scratch, and some important performance-tailored decisions were taken."),Object(s.b)("p",null,"Regardless of the device’s color depth, the screen and images are stored in a 24 bpp RGB array. All drawings are made into a single off screen, which is then converted on the fly to the device’s screen color depth when the updateScreen","(",")"," method is called. Note that since 2011, no devices with 8 bpp are released to the market; all of them use at least 16 bpp ","(","65536 colors",")","."),Object(s.b)("p",null,"The Graphics class ",Object(s.b)("strong",{parentName:"p"},"supports real clipping"),", which allowed us to support containers that automatically show scrollbars if components are placed beyond its limits."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"TotalCross also supports screen rotation and collapsible input area"),". If the user interface is implemented using only relative coordinates, ",Object(s.b)("strong",{parentName:"p"},"it will automatically reposition itself whenever the screen resolution is changed"),"."),Object(s.b)("p",null,"Note that aControl.setRect","(","getClientRect","(",")",")"," should never be used, otherwise the automatic repositioning will not work. Instead, aControl.setRect","(","LEFT, TOP, FILL, FILL",")"," should be used to produce the same result without affecting the repositioning. If you really have to use getClientRect","(",")",", you must also override the reposition","(",")"," method to support screen rotation. ","(","see the WorldWatch sample",")","."),Object(s.b)("p",null,"Colors are represented by int values in the ",Object(s.b)("strong",{parentName:"p"},"0xRRGGBB")," format. A null color is represented by the value -1."),Object(s.b)("h2",{id:"images"},"Images"),Object(s.b)("p",null,"Images in TotalCross supports transparency ","(","also known as alpha-channel",")",". The best way to show images is to generate a PNG image from a vectorized image through Photoshop or any other good editor. Prefer creating a big image ","(","for example, 96x96",")",", then decrease its size at runtime using Image.getSmoothScaledInstance."),Object(s.b)("h2",{id:"inheritance-and-delegation-event-models"},"Inheritance and Delegation event models"),Object(s.b)("p",null,"TotalCross supports both Inheritance ","(","Java 1.0",")"," and Delegation ","(","Java 1.1",")"," event models. The Inheritance model will make your code smaller and faster, but there are some situations that require the usage of the Delegation model."),Object(s.b)("h3",{id:"onevent"},"onEvent"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'public class MyProgram extends Container{\n    Button pushB;\n    ​\n    public void initUI(){\n        add(pushB = new Button("Push me, please"), CENTER, TOP);\n    }\n    ​\n    public void onEvent(Event event){\n        switch (event.type){\n            case ControlEvent.PRESSED:\n            if (event.target == pushB)\n            // handle pushB being pressed\n            break;\n        }\n    }\n}\n\n')),Object(s.b)("h3",{id:"listener"},"Listener"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'public class MyProgram extends Container{\n    Button pushB;\n    ​\n    public void initUI(){\n        add(pushB = new Button("Push me\\nPlease"), CENTER, TOP);\n        pushB.addPressListener((e) -> {\n            // handle pushB being pressed\n        });\n    }\n}\n\n')),Object(s.b)("h2",{id:"security"},"Security"),Object(s.b)("p",null,"TotalCross applications are currently impossible to be decompiled, because, as mentioned before, TotalCross uses a proprietary set of opcodes instead of Java Bytecodes. The translation between Java Bytecodes to TotalCross opcodes is done automatically when the application is deployed."),Object(s.b)("p",null,"However, this also means that you cannot retrieve your application’s source files from the deployed application, so don’t forget to backup your source files!"))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/index.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-index-mdx-c725df69575e1bfd32e3.js.map