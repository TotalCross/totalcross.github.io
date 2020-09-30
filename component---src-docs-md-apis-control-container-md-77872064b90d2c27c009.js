(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RgQb:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return l})),o.d(e,"default",(function(){return b}));var n=o("k1TG"),r=o("8o2o"),a=(o("q1tI"),o("7ljp")),c=o("hhGP"),l=(o("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/control/container.md"}});var i={_frontmatter:l},s=c.a;function b(t){var e=t.components,o=Object(r.a)(t,["components"]);return Object(a.b)(s,Object(n.a)({},i,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"container"},"Container"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The container is a control that contains child controls. It is possible to adjust its transparency, screen transition effects, borders and background style."),Object(a.b)("p",null,"If you want to know more about how differences between windows and container, how to navigate between interfaces and what are the best ways to handle containers and windows, just click on the link below:"),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class ContainerSample extends Container{\n\n    @Override\n    public void initUI() {\n      try {\n            ImageControl logo = new ImageControl(new Image("path_of_your_logo_img"));\n            logo.scaleToFit = true;\n            logo.centerImage = true;\n            logo.transparentBackground = true;\n            add(logo, CENTER, CENTER, PARENTSIZE + 50, PARENTSIZE + 50);\n        } catch (ImageException e) {\n            e.printStackTrace();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"features-of-container"},"Features of Container"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"*","*","*","*",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.gitbook.com/@totalcross/s/playbook/~/drafts/-LeSnZoHZefj9mq9OlAt/primary/faq#how-to-navigate-between-screens-containers-and-windows"}),Object(a.b)("strong",{parentName:"a"},"How to navigate between screens")),"*","*","*","*"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Container characteristics are assigned to child controls"))),Object(a.b)("h3",{id:"method"},"Method"),Object(a.b)("p",null,"Some methods that are most commonly used"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{textAlign:"left"}},"name"),Object(a.b)("th",{style:{textAlign:"left"}},"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{style:{textAlign:"left"}},Object(a.b)("p",null,"add(Control control, int x, int y, int w, int h, Control relative);"),Object(a.b)("p",null),Object(a.b)("p",null,Object(a.b)("a",{href:"https://rs.totalcross.com/doc/totalcross/ui/Container.html#add-totalcross.ui.Control-"},"add"),"(",Object(a.b)("a",{href:"https://rs.totalcross.com/doc/totalcross/ui/Control.html"},"Control"),"control)"),Object(a.b)("p",null,Object(a.b)("br",null),"add(Control control, int x, int y)",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("a",{href:"https://rs.totalcross.com/doc/totalcross/ui/Container.html#add-totalcross.ui.Control-int-int-totalcross.ui.Control-"},"add"),"(",Object(a.b)("a",{href:"https://rs.totalcross.com/doc/totalcross/ui/Control.html"},"Control"),"control, int x, int y, ",Object(a.b)("a",{href:"https://rs.totalcross.com/doc/totalcross/ui/Control.html"},"Control")," relative)",Object(a.b)("br",null),Object(a.b)("br",null),"add(Control control, int x, int y, int w, int h)"),Object(a.b)("p",null)),Object(a.b)("td",{style:{textAlign:"left"}},"Adds the control on the screen where the parameter x is the positioning of the control in the container in relation to the x axis, the parameter y is the positioning of the control in the container in relation to the y axis, parameter w is the length of the component, parameter h represents the height of the component and the relative parameter is to change the reference of the control to add on the screen (by default the relative is the last control added).")),Object(a.b)("tr",null,Object(a.b)("td",{style:{textAlign:"left"}},"setBackForeColors(Color back, Color fore)"),Object(a.b)("td",{style:{textAlign:"left"}},"Assigns the color of the back parameter to the container background and the color of the fore parameter to the forecolor of the container. It is interesting to remember that the children of the container inherit the characters of the same.")),Object(a.b)("tr",null,Object(a.b)("td",{style:{textAlign:"left"}},Object(a.b)("p",null,"setBackColor(Color back);",Object(a.b)("br",null)),Object(a.b)("p",null)),Object(a.b)("td",{style:{textAlign:"left"}},"Assigns the color of the back parameter to the container background")))),Object(a.b)("h2",{id:"referencies"},"Referencies"),Object(a.b)("p",null,"You can see more information in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://rs.totalcross.com/doc/totalcross/ui/Container.html"}),"javaDoc")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/control/container.md"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-apis-control-container-md-77872064b90d2c27c009.js.map