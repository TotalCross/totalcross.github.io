(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{kvUe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var l=n("7ljp"),o=n("hhGP");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var a={};void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/developers-area/how-to-build-totalcross-vm-wip.md"}});var r={_frontmatter:a},s=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,l,o={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(l.b)(s,c({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"how-to-build-totalcross-vm-wip"},"How to build TotalCross VM ","(","WIP",")"),Object(l.b)("p",null,"Learn the steps to generate your custom VM. Our build process needs Docker, please ",Object(l.b)("a",c({parentName:"p"},{href:"https://docs.docker.com/get-docker/"}),"install it")," and check your installation:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"$ docker --version\n")),Object(l.b)("p",null,"After cloning the project you will have:"),Object(l.b)("p",null,'{% hint style="success" %}\nTo clone the project use the command:',Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("inlineCode",{parentName:"p"},"git clone https://github.com/TotalCross/totalcross.git TotalCross"),"\n{% endhint %}"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"TotalCross/\n├─ LitebaseSDK/\n├─ TotalCrossSDK/\n└─ TotalCrossVM/\n")),Object(l.b)("p",null,"You will need to enter inside ",Object(l.b)("inlineCode",{parentName:"p"},"TotalCrossVM/builders")," folder, please:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"$ cd TotalCrossVM/builders\n")),Object(l.b)("p",null,"Your folder structure will be something like this:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"TotalCross\n├─ LitebaseSDK\n├─ TotalCrossSDK\n└─ TotalCrossVM\n     ├─ builders/\n     │    ├─ droid/\n     │    ├─ gcc-linux-arm/\n     │    ├─ gcc-posix/\n     │    ├─ vc2008/\n     │    ├─ vc2013/\n     │    ├─ vc2017/\n     │    ├─ xcode/\n     │    └─ build.xml\n     ├─ deps/\n     └─ src/\n")),Object(l.b)("h2",{id:"linux-x86-64"},"Linux x86-64"),Object(l.b)("p",null,"Enter into ",Object(l.b)("inlineCode",{parentName:"p"},"gcc-posix")," folder:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders$ cd gcc-posix\n")),Object(l.b)("p",null,"First, let's build the docker image:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-posix$ cd docker\n~TotalCrossVM/builders/gcc-posix/docker$ ./build.sh\n")),Object(l.b)("p",null,"If you have no problems you should check the image:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-posix/docker$ docker images\nREPOSITORY                              TAG                 IMAGE ID            CREATED             SIZE\ntotalcross/amd64-cross-compile          bionic              cd8fb68f0fc6        a minute ago        1.03GB\n<none>                                  <none>              1a0e943d6239        27 hours ago        464MB\n.\n.\n.\n~TotalCrossVM/builders/gcc-posix/docker$ cd ..\n")),Object(l.b)("p",null,"Next, let's build ",Object(l.b)("inlineCode",{parentName:"p"},"libtcvm.so"),":"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-posix$ cd tcvm\n~TotalCrossVM/builders/gcc-posix/tcvm$ ./build.sh\n")),Object(l.b)("p",null,"If you don't have any build errors, your folder will be something like this:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"TotalCross\n├─ LitebaseSDK\n├─ TotalCrossSDK\n└─ TotalCrossVM\n     ├─ builders/\n     │    ├─ droid/\n     │    ├─ gcc-linux-arm/\n     │    ├─ gcc-posix/\n     │    │    ├─ docker\n     │    │    ├─ launcher\n     │    │    └─ tcvm\n     │    │         ├─ bin/\n     │    │         │    └─ libtcvm.so\n     │    │         ├─ build.sh\n     │    │         ├─ libskia.a\n     │    │         └─ Makefile\n     │    ├─ vc2008/\n     │    ├─ vc2013/\n     │    ├─ vc2017/\n     │    ├─ xcode/\n     │    └─ build.xml\n     ├─ deps/\n     └─ src/\n")),Object(l.b)("p",null,"Look to the ",Object(l.b)("inlineCode",{parentName:"p"},"bin")," folder, now you just need to copy ",Object(l.b)("inlineCode",{parentName:"p"},"libtcvm.so")," to your valid SDK folder"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-posix/tcvm$ cp bin/libtcvm.so $PATH_TO_VALID_SDK/dist/vm/linux\n")),Object(l.b)("h2",{id:"linux-arm"},"Linux ARM"),Object(l.b)("p",null,"Enter into ",Object(l.b)("inlineCode",{parentName:"p"},"gcc-linux-arm")," folder:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders$ cd gcc-linux-arm\n")),Object(l.b)("p",null,"First, let's build the docker image:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-linux-arm$ cd docker-builder-image\n~TotalCrossVM/builders/gcc-linux-arm/docker-builder-image$ ./build.sh\n")),Object(l.b)("p",null,"If you have no problems you should check the image:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-posix/docker$ docker images\nREPOSITORY                              TAG                 IMAGE ID            CREATED             SIZE\ntotalcross/totalcross/cross-compile     latest              cd8fb68f0fc6        a minute ago        1.03GB\n<none>                                  <none>              1a0eea5a6dv0        15 hours ago        1.46GB\n.\n.\n.\n~TotalCrossVM/builders/gcc-linux-arm/docker-builder-image$ cd ..\n")),Object(l.b)("p",null,"TotalCross Linux ARM VM needs SDL2 statically linked, please:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-linux-arm$ cd sdl\n~TotalCrossVM/builders/gcc-linux-arm/sdl$ ./build.sh\n")),Object(l.b)("p",null,"If you have no errors:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-linux-arm/sdl$ cd ..\n")),Object(l.b)("p",null,"Next, let's build ",Object(l.b)("inlineCode",{parentName:"p"},"libtcvm.so"),":"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-linux-arm$ cd tcvm\n~TotalCrossVM/builders/gcc-linux-arm/tcvm$ ./build.sh\n")),Object(l.b)("p",null,"If you don't have any build errors, your folder will be something like this:"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"TotalCross\n├─ LitebaseSDK\n├─ TotalCrossSDK\n└─ TotalCrossVM\n     ├─ builders/\n     │    ├─ droid/\n     │    ├─ gcc-linux-arm/\n     │    │    ├─ docker-builder-image\n     │    │    ├─ launcher\n     │    │    ├─ sdl\n     │    │    └─ tcvm\n     │    │         ├─ bin/\n     │    │         │    └─ libtcvm.so\n     │    │         ├─ build.sh\n     │    │         ├─ libskia.a\n     │    │         └─ Makefile\n     │    ├─ gcc-posix/\n     │    ├─ vc2008/\n     │    ├─ vc2013/\n     │    ├─ vc2017/\n     │    ├─ xcode/\n     │    └─ build.xml\n     ├─ deps/\n     └─ src/\n")),Object(l.b)("p",null,"Look to the ",Object(l.b)("inlineCode",{parentName:"p"},"bin")," folder, now you just need to copy ",Object(l.b)("inlineCode",{parentName:"p"},"libtcvm.so")," to your valid SDK folder"),Object(l.b)("pre",null,Object(l.b)("code",c({parentName:"pre"},{className:"language-text"}),"~TotalCrossVM/builders/gcc-linux-arm/tcvm$ cp bin/libtcvm.so $PATH_TO_VALID_SDK/dist/vm/linux_arm\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/developers-area/how-to-build-totalcross-vm-wip.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-developers-area-how-to-build-totalcross-vm-wip-md-e92e887a00f9aee3674b.js.map