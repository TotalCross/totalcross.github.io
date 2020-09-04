(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{c9dW:function(e,t,n){e.exports=n.p+"static/image29-530fc3a0cd8a97a346bc13f4baa2a9db.png"},q85v:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/running-c++-applications-with-totalcross.md"}});var c={_frontmatter:i},l=r.a;function p(e){var t=e.components,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,o({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"running-c-applications-with-totalcross"},"Running C++ applications with TotalCross"),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"We hope you learn how to use TotalCross Runtime and Process implementations. See more about:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Java 7 ",Object(a.b)("a",o({parentName:"li"},{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/Runtime.html"}),"Runtime class")),Object(a.b)("li",{parentName:"ul"},"Java 8 ",Object(a.b)("a",o({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Process.html"}),"Process class"))),Object(a.b)("p",null,"These implementations work only for Linux platforms"),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("p",null,"Can compile C ++ applications and finish Get Started:"),Object(a.b)("h2",{id:"guide"},"Guide"),Object(a.b)("p",null,"Use external codes with Totalcross:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 1:")," create a blank project based in ",Object(a.b)("inlineCode",{parentName:"p"},"HelloWorld")," of VS Code plugin ","(","we named it ",Object(a.b)("inlineCode",{parentName:"p"},"RunningCpp"),")"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 2:")," create an I/O sample in C++, in our case we did:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-cpp"}),'#include <iostream>\n#include <string>\n\nint main()\n{\n    std::string input;\n    std::getline(std::cin, input);\n    std::cout << "\\nI received: " + input + "\\n";\n    return 0;\n}\n')),Object(a.b)("p",null,"It's a simple application to get an I/O input and shortly thereafter return it as output."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 3:")," compile ","(","something like this",")",":"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image29",src:n("c9dW")})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 4:")," inside ",Object(a.b)("inlineCode",{parentName:"p"},"initUI")," method at ",Object(a.b)("inlineCode",{parentName:"p"},"RunningCpp")," class, create a label to show the results:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),"// Label to show the results\nLabel label;\nlabel = new Label();\nlabel.setBackForeColors(Color.WHITE,  Color.BLACK);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 5:")," create a child process:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),"// Process initialization\nProcess process = null;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 6:")," output to the target program:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'// Output to program\nbyte[] output = "Take the output!!!\\n".getBytes();              // convert string to\n                                                                // byte array\ntry {\n    process = Runtime.getRuntime().exec("./io");                // execute your\n                                                                // application (sh like)\n    process.getOutputStream().write(output, 0, output.length);  // write output into\n                                                                // output strem\n    process.waitFor();                                          // blocking method\n                                                                // (wait io finish)\n} catch (IOException ioe) {\n    ioe.printStackTrace();\n} catch (InterruptedException ie) {\n    ie.printStackTrace();\n};\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 7:")," read the C++ program output as input to TotalCross application"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),"// Input from program\nString input;\ntry {\n    // Read line by line the buffered stream\n    LineReader lineReader = new LineReader(Stream.asStream(process.getInputStream()));\n    while ((input = lineReader.readLine()) != null) {\n        label.setText(input);\n    }\n} catch (IOException ioe) {\n    ioe.printStackTrace();\n};\n\n// Add label to window\nadd(label, CENTER, CENTER);\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 8:")," run ",Object(a.b)("inlineCode",{parentName:"p"},"TotalCross: Package")," with VS Code plugin or run ",Object(a.b)("inlineCode",{parentName:"p"},"mvn package")," in your terminal."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 9:")," copy C++ binary to target folder ","(","something like",")",":"),Object(a.b)("p",null,Object(a.b)("img",{alt:"image39",src:n("rx6+")})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Step 10:")," run your program!!!"),Object(a.b)("h2",{id:"see-more"},"See more"),Object(a.b)("p",null,"See our article about how to run RS232 protocol. See the full code:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'package com.totalcross;\n\nimport java.io.IOException;\nimport java.lang.Process;\n\nimport totalcross.ui.Label;\nimport totalcross.ui.MainWindow;\nimport totalcross.ui.gfx.Color;\n\nimport totalcross.io.LineReader;\nimport totalcross.io.Stream;\n\nimport totalcross.sys.Settings;\n\npublic class RunningCPP extends MainWindow {\n    public RunningCPP() {\n        setUIStyle(Settings.MATERIAL_UI);\n    }\n\n    @Override\n    public void initUI() {\n        // Label to show the results\n        Label label;\n        label = new Label();\n        label.setBackForeColors(Color.WHITE,  Color.BLACK);\n\n        // Process initialization\n        Process process = null;\n\n        // Output to program\n        byte[] output = "Take the output!!!\\n".getBytes();              // convert string to\n                                                                        // byte array\n        try {\n            process = Runtime.getRuntime().exec("./io");                // execute your\n                                                                        // application (sh like)\n            process.getOutputStream().write(output, 0, output.length);  // write output into\n                                                                        // output strem\n            process.waitFor();                                          // blocking method\n                                                                        // (wait io finish)\n        } catch (IOException ioe) {\n            ioe.printStackTrace();\n        } catch (InterruptedException ie) {\n            ie.printStackTrace();\n        };\n\n        // Input from program\n        String input;\n        try {\n            LineReader lineReader = new LineReader(Stream.asStream(process.getInputStream()));\n            while ((input = lineReader.readLine()) != null) {\n                label.setText(input);\n            }\n        } catch (IOException ioe) {\n            ioe.printStackTrace();\n        };\n\n        // Add label to window\n        add(label, CENTER, CENTER);\n    }\n}\n')),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Java 7 ",Object(a.b)("a",o({parentName:"li"},{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/Runtime.html"}),"Runtime class")),Object(a.b)("li",{parentName:"ul"},"Java 8 ",Object(a.b)("a",o({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Process.html"}),"Process class"))))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/running-c++-applications-with-totalcross.md"}}),p.isMDXComponent=!0},"rx6+":function(e,t,n){e.exports=n.p+"static/image39-0fe90e90d10d8b13c17ee7f152c514ab.png"}}]);
//# sourceMappingURL=component---src-docs-md-guides-running-c-applications-with-totalcross-md-2a5d21bd761bc9074992.js.map