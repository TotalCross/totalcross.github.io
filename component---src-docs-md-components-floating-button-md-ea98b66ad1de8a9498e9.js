(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{VHmd:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return b})),n.d(e,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/components/floating-button.md"}});var c={_frontmatter:b},i=r.a;function l(t){var e=t.components,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(i,o({},c,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"floating-button"},"Floating Button"),Object(a.b)("h3",{id:"overview"},"Overview"),Object(a.b)("p",null,"Floating Button is a circular floating button that keeps fixed on its initial position and, usually, is used for the main action of the screen."),Object(a.b)("p",null,Object(a.b)("img",{alt:"floatingbutton",src:n("hZ70")})),Object(a.b)("h3",{id:"source-code"},"Source Code"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'Image ic = null;\ntry {\n  ic = new Image("images/floatbtn.png");\n} catch (IOException e) {\n  e.printStackTrace();\n} catch (ImageException e) {\n  e.printStackTrace();\n}\nFloatingButton floatbutton = new FloatingButton(ic);\nfloatbutton.setBackColor(Color.getRGB(109, 156, 232));\nfloatbutton.setIconSize(30);\nadd(floatbutton, RIGHT-40, BOTTOM-40);\n\n')),Object(a.b)("p",null,"Do not forget ",Object(a.b)("strong",{parentName:"p"},"to create a folder"),' called "',Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"images")),'" inside ',Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"/src/main/resources"))," and ",Object(a.b)("strong",{parentName:"p"},"save the")," ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/resources/images/floatbtn.png"}),Object(a.b)("strong",{parentName:"a"},"floatbtn.png"))," ",Object(a.b)("strong",{parentName:"p"},"image inside it")," ","[","images","]","."),Object(a.b)("h3",{id:"métodos"},"Métodos"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Constructor")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"FloatingButton","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a Floating Button with a predefined icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Constructor")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"FloatingButton","(","Image foregroundImage",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Creates a Floating Button with setting the icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"setIcon","(","image foregroundImage",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Sets the Floating Button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"setIconSize","(","int iconsize",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Sets the Floating Button icon size.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Image")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"getIcon","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Returns the Image that represents the Floating Button icon.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"int")),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"getIconSize","("," ",")"),Object(a.b)("td",o({parentName:"tr"},{align:"left"}),"Returns the size of the Floating Button icon.")))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/components/floating-button.md"}}),l.isMDXComponent=!0},hZ70:function(t,e,n){t.exports=n.p+"static/floatingbutton-74b296efe01c3db022b8570aeab714fb.gif"}}]);
//# sourceMappingURL=component---src-docs-md-components-floating-button-md-ea98b66ad1de8a9498e9.js.map