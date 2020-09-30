(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{Ohzg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("k1TG"),i=a("8o2o"),r=(a("q1tI"),a("7ljp")),o=a("hhGP"),l=(a("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/package-your-app-from-scratch/package-your-app-from-scratch.md"}});var p={_frontmatter:l},b=o.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"package-your-app-from-scratch"},"Package your app from scratch"),Object(r.b)("h2",{id:"requirements"},Object(r.b)("strong",{parentName:"h2"},"Requirements")),Object(r.b)("p",null,"This guide is intended for devs who have gone through get started or have knowledge of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"*","*","*","*",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.superwaba.net/SDKRegistrationService/"}),Object(r.b)("strong",{parentName:"a"},"TotalCross SDK")),Object(r.b)("strong",{parentName:"li"},";")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.gitbook.com/@totalcross/s/playbook/learn-totalcross/getting-started/environment-configuration"}),Object(r.b)("strong",{parentName:"a"},"Environment variables configured")),Object(r.b)("strong",{parentName:"li"},";")),Object(r.b)("li",{parentName:"ul"},"*","*","*","*",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"../../miscelaneous/java-8.md"}),Object(r.b)("strong",{parentName:"a"},"JDK installed")),Object(r.b)("strong",{parentName:"li"},"."))),Object(r.b)("h2",{id:"deploy"},"Deploy"),Object(r.b)("p",null,"You can do deploy to Android, iOS e Windows with ",Object(r.b)("strong",{parentName:"p"},"Maven")," or by ",Object(r.b)("strong",{parentName:"p"},"Command Line")),Object(r.b)("p",null,'{% tabs %}\n{% tab title="Maven" %}'),Object(r.b)("h4",{id:"pom-file"},"Pom File"),Object(r.b)("p",null,"Make sure your pom file has the ",Object(r.b)("strong",{parentName:"p"},"build tag, dependencies tag, repositories tag and properties tag")," as shown below"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.totalcross</groupId>\n    <artifactId>HelloWorld</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <name>HelloWorld</name>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <totalcross.activation_key>PLACE_YOUR_KEY</totalcross.activation_key>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.totalcross</groupId>\n            <artifactId>totalcross-sdk</artifactId>\n            <version>6.0.3</version>\n        </dependency>\n    </dependencies>\n\n    <repositories>\n        <repository>\n            <id>totalcross-repo</id>\n            <name>ip-172-31-40-140-releases</name>\n            <url>http://maven.totalcross.com/artifactory/repo1</url>\n        </repository>\n    </repositories>\n\n    <pluginRepositories>\n        <pluginRepository>\n            <id>totalcross-repo</id>\n            <name>ip-172-31-40-140-releases</name>\n            <url>http://maven.totalcross.com/artifactory/repo1</url>\n        </pluginRepository>\n    </pluginRepositories>\n\n    <build>\n        <finalName>${project.artifactId}</finalName>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.1</version>\n                <configuration>\n                    <source>1.8</source>\n                    <target>1.8</target>\n                </configuration>\n            </plugin>\n            <plugin>\n                <groupId>com.totalcross</groupId>\n                <artifactId>totalcross-maven-plugin</artifactId>\n                <version>1.0</version>\n                <configuration>\n                    <name>${project.name}</name>\n                    <platforms>\n                        <platform>-win32</platform>\n                        <platform>-android</platform>\n                        <platform>-ios</platform>\n                    </platforms>\n                    <activationKey>${totalcross.activation_key}</activationKey>\n                    \x3c!--                    For version 4.4.2 and 5.1.4 or later, Apple certificates are no longer required. --\x3e\n                    \x3c!--                    <certificates>${totalcross.applecertificate}</certificates>--\x3e\n                    \x3c!--                    <totalcrossHome>/Users/italo/TotalCross5</totalcrossHome>--\x3e\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>post-package</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>package</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),Object(r.b)("p",null,"Inside the ",Object(r.b)("strong",{parentName:"p"},"platfrom tag")," you can add the argument:"),Object(r.b)("h4",{id:"argument-for-plataforms-to-deploy"},"Argument for plataforms to deploy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-win32</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Windows"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-wince</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Windows CE"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-winmo</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Windows Mobile Only;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-linux</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Linux x86 ","(","Debian",")",";")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-linux_arm</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Linux ARM"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-applet</platform>"),"Create the html file and a jar file with all dependencies\nto run the app from a java-enabled browser ","(","the input cannot be a jar file",")",";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-ios</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"IOS"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-android</platform>"),"This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Android"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>-all</platform>"),"Single parameter to deploy to all supported platforms;")),Object(r.b)("h4",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/p</platfrom>"),"Package the ",Object(r.b)("strong",{parentName:"li"},"VM")," with the application;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/r</platform>"),"Specify a ",Object(r.b)("strong",{parentName:"li"},"registration key")," to be used to activate TotalCross when required;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/m</platform>"),Object(r.b)("strong",{parentName:"li"},"Specifies a path")," to the mobileprovision and ",Object(r.b)("strong",{parentName:"li"},"certificate store")," to deploy an ipa file for iOS;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/a</platform>"),"Assigns the application id; can only be used for libraries or passing a .tcz file;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/autostart</platform>"),"automatically starts the application after a boot is completed. Currently works for Android only;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/c</platform>"),"Specify a command line to be passed to the application;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/i</platform>"),"Install the file after generating it; platforms is a list of comma-separated platforms. Supports: android. E.G.: /i android;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/k</platform>"),"Keep the .exe and other temporary files during wince generation;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/kn</platform>"),"As /k, but does not create the cab files for WinCE;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/n</platform>"),"Override the name of the tcz file with the given name;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/o</platform>")," ","*","*","*","*","Override the output folder with the given path ","(","defaults to the current folder",")",";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/t</platform>"),"Just test the classes to see if there are any invalid references. Images are not converted, and nothing is written to disk;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/v</platform>"),"Verbose output for information messages;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/w</platform>"),"Waits for a key press if an error occurs;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<platform>/x</platform>"),"Comma-separated list of class names that must be excluded ","(","in a starts-with manner",")",'. E.G.: "/x com/framework/".')),Object(r.b)("h4",{id:"build-your-app"},"Build your app"),Object(r.b)("p",null,"To deploy your application you only need to use a maven execution template by passing the command:",Object(r.b)("inlineCode",{parentName:"p"},"mvn package"),"\n{% endtab %}"),Object(r.b)("p",null,'{% tab title="Command Line" %}\nTo deploy by command line you need to be in the folder that contains the jar of your project and pass the parameters of tc.Deploy:'),Object(r.b)("h4",{id:"argument-for-plataforms-to-deploy-1"},"Argument for plataforms to deploy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-win32"),"This argument is used to build for ",Object(r.b)("strong",{parentName:"li"},"Windows"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-wince"),"This argument is used to build for ",Object(r.b)("strong",{parentName:"li"},"Windows CE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-winmo")," This argument is used to build for ",Object(r.b)("strong",{parentName:"li"},"Windows Mobile Only;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-linux")," This argument is used to build for ",Object(r.b)("strong",{parentName:"li"},"Linux x86 ","(","Debian",")"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-linux_arm")," This platform is used to build for ",Object(r.b)("strong",{parentName:"li"},"Linux ARM"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-applet")," the html file and a jar file with all dependencies to run the app from a java-enabled browser ","(","the input cannot be a jar file",")",";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-ios"),"This argument is to build for ",Object(r.b)("strong",{parentName:"li"},"iOS"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-android"),"This argument is to build for ",Object(r.b)("strong",{parentName:"li"},"Android"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-all"),"Single parameter to deploy to all supported platforms;")),Object(r.b)("h4",{id:"options-1"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/p"),"Package the ",Object(r.b)("strong",{parentName:"li"},"VM")," with the application;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/r"),"Specify a ",Object(r.b)("strong",{parentName:"li"},"registration key")," to be used to activate TotalCross when required;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/m"),Object(r.b)("strong",{parentName:"li"},"Specifies a path")," to the mobileprovision and ",Object(r.b)("strong",{parentName:"li"},"certificate store")," to deploy an ipa file for iOS;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/a"),"Assigns the application id; can only be used for libraries or passing a .tcz file;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/autostart"),"automatically starts the application after a boot is completed. Currently works for Android only;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/c")," Specify a command line to be passed to the application;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/i"),"install the file after generating it; platforms is a list of comma-separated platforms. Supports: android. E.G.: /i android;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/k"),"Keep the .exe and other temporary files during WinCE generation;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/kn"),"As /k, but does not create the cab files for WinCE;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/n")," Override the name of the .tcz file with the given name;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/o")," ","*","*","*","*","Override the output folder with the given path ","(","defaults to the current folder",")",";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/t")," Just test the classes to see if there are any invalid references. Images are not converted, and nothing is written to disk;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/v"),"Verbose output for information messages;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/w")," Waits for a key press if an error occurs;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/x"),"Comma-separated list of class names that must be excluded ","(","in a starts-with manner",")",'. E.G.: "/x com/framework/".')),Object(r.b)("h4",{id:"see-the-example-below"},"See the example below"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'java -cp "%TOTALCROSS3_HOME%"/dist/totalcross-sdk.jar tc.Deploy HelloTC.jar -android /p /r YOUR_TC_KEY_HERE')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'"%TOTALCROSS3_HOME%"')," is the folder where the TC SDK"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"HelloTC.jar")," is the .jar of project\n{% endtab %}\n{% endtabs %}"),Object(r.b)("h2",{id:"your-apps"},"Your apps"),Object(r.b)("p",null,"After packaging your application the files will be in the ",Object(r.b)("inlineCode",{parentName:"p"},"project_folder\\target\\install\\")),Object(r.b)("p",null,'{% hint style="danger" %}\nProblems with WinCE? If your Operational System is not Windows or it is Windows and has not Cabwiz program, try to add',Object(r.b)("inlineCode",{parentName:"p"},"/k"),"as first platform to in your pom.xml\n{% endhint %}"))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/package-your-app-from-scratch/package-your-app-from-scratch.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-guides-package-your-app-from-scratch-package-your-app-from-scratch-md-63b61cfb98e4131c1e7c.js.map