(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{p1Do:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),i=n("hhGP");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/components/sliding-window.md"}});var c={_frontmatter:o},d=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(d,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"sliding-window"},"Sliding Window"),Object(a.b)("h3",{id:"overview"},Object(a.b)("strong",{parentName:"h3"},"Overview")),Object(a.b)("p",null,"Sliding Window is a fullscreen window that slides in and out of the screen during pop and unpop events. Use it to create transition effects between screens."),Object(a.b)("h3",{id:"source-code"},"Source Code"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-java"}),'@Override\npublic void controlPressed(ControlEvent e) {\n    SlidingWindow sw = new SlidingWindow(new Presenter() {\n        @Override\n        public Container getView() {\n            return new Container() {\n                public void initUI() {\n                    ImageControl i;\n                    try {\n                        i = new ImageControl(new Image("images/logoV.png"));\n                        i.scaleToFit = true;\n                        i.centerImage = true;\n                        add(i, CENTER, CENTER, 100 + DP, 100 + DP);\n                    } catch (IOException e) {\n                        e.printStackTrace();\n                    } catch (ImageException e) {\n                        e.printStackTrace();\n                    }\n                };\n            };\n        }\n    });\n    sw.popup();\n}\n});\nadd(btn, CENTER, BOTTOM);\n} catch (IOException | ImageException e) {\n    e.printStackTrace();\n}\n')),Object(a.b)("p",null,"Because it is a more complex example, we only show the specific Sliding Window example code, if you want to see the whole code of the image interface construction ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/java/totalcross/sample/components/Home.java"}),"click here"),"."),Object(a.b)("h3",{id:"methods"},"Methods"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Name"),Object(a.b)("th",r({parentName:"tr"},{align:"left"}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Constructor")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"SlidingWindow","(","Presenter","<","Container",">"," provider",")"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Creates a SlidingWindow with the specified provider. Use the provider class to implement your view code.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"Constructor")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"SlidingWindow","(","Presenter","<","Container",">"," provider, boolean delayInitUI",")"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Creates a SlidingWindow with the specified provider and if it should delay the InitUI execution. Use the delayed InitUI if your screen takes a significant amount of time to load ","(","e.g., it fetches data from a server",")"," and the non-delayed InitUI if it is fast enough to be loaded prior to the animation. If the delayed option is used, the screen will popup with a spinner.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"unpop","("," ",")"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Unpops the SlidingWindow, hiding it.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:"left"}),Object(a.b)("strong",{parentName:"td"},"void")),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"popup","("," ",")"),Object(a.b)("td",r({parentName:"tr"},{align:"left"}),"Popups the SlidingWindow, showing it.")))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/components/sliding-window.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-components-sliding-window-md-51e18248a4ce575166a8.js.map