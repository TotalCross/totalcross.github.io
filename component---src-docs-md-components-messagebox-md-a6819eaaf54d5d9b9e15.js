(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{oiTz:function(t,e,a){t.exports=a.p+"static/messagebox-sample-c63a227dd330ce107b9a5cabcc0504f4.gif"},p57U:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return i})),a.d(e,"default",(function(){return l}));var n=a("k1TG"),b=a("8o2o"),r=(a("q1tI"),a("7ljp")),c=a("hhGP"),i=(a("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/components/messagebox.md"}});var o={_frontmatter:i},s=c.a;function l(t){var e=t.components,c=Object(b.a)(t,["components"]);return Object(r.b)(s,Object(n.a)({},o,c,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"messagebox"},"MessageBox"),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"MessageBox is a popup element that shows a title, a text and one or more buttons."),Object(r.b)("p",null,Object(r.b)("img",{alt:"messagebox-sample",src:a("oiTz")})),Object(r.b)("h3",{id:"source-code"},"Source Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'anybutton.addPressListener(new PressListener() {\n    @Override\n    public void controlPressed(ControlEvent e) {\n        mb = new MessageBox("Did you know?", someMessage, new String[]{"Nice!"});\n        mb.setRect(CENTER, CENTER, SCREENSIZE + 50, SCREENSIZE + 30);\n        mb.setBackForeColors(Colors.P_300, Colors.ON_P_300);\n        mb.popup();\n    }\n});\n')),Object(r.b)("p",null,"Because it is an extensive example, we chose to exemplify the essential: how to use a ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"MessageBox")),". To see the complete example, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/java/totalcross/sample/components/ui/MessageBoxSample.java"}),"click here"),"."),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"PushButtonGroup")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"btns"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The messagebox button group")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"yPosition"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Messagebox vertical position")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"int","["," ","]")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"buttonKeys"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A int array that maps the button id")))),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","String title, String msg",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Constructs a message box with the text and one "Ok" button')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","String title, String text, String","[","]"," buttonCaptions",")",":"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs a message box with the text and the specified button captions")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","String title, String text, String","[","]"," buttonCaptions, boolean allSameWidth",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs a message box with the text and the specified button captions; The boolean specify if the buttons will have the same width")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","String title, String text, String","[","]"," buttonCaptions, boolean allSameWidth, int gap, int insideGap",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs a message box with the text and the specified button captions; The boolean specify if the buttons will have the same width; The ints specify the external and internal gaps")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","String title, String text, String","[","]"," buttonCaptions, int gap, int insideGap",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs a message box with the text and the specified button captions; The ints specify the external and internal gaps")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","Image image, String title, String text, String","[","]"," buttonCaptions, int gap, int insideGap",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs a message box with the given text, button captions and image; The ints specify the external and internal gaps")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MessageBox","(","Image image, String title, String text, String","[","]"," buttonCaptions, boolean allSameWidth, int gap, int insideGap",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs a message box with the given text, button captions and image; The boolean specify if the buttons will have the same width; The ints specify the external and internal gaps")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Builder","("," ",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Instances the MessageBox Builder. You can use it to make your MessageBox easily.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setTitle","(","String title",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the MessageBox title.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setBaseContainer","(","Container baseContainer",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"This is the content that will be placed between the title and the buttons. You can put anything here. After you set this, the message will not appear since you're putting a Container above it.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setBaseContainerInsets","(","int left, int right, int top, int bottom",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the insets of the Container ","(","The container that will be your content",")",".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setImage","(","Image image",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the image that is displayed on the top of the MessageBox.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setMessageBoxInsets","(","int left, int right, int top, int bottom",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the insets of the MessageBox.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setButtons","(","String","[","]"," buttonCaptions",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the buttons that will appear on the MessageBox.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setButtonsMargin","(","int margin",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the margins of the buttons.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setTitleContGap","(","int gap",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the gap between the title and the Container ","(","MessageBox's content",")",".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Builder")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setContButtonGap","(","int gap",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the gap between the Container ","(","MessageBox's content",")"," and the buttons.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"int")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getPressedButtonIndex","("," ",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the pressed button index")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setDelayToShowButton","(","int ms",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the show button delay")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setIcon","(","Image icon",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set a icon in the title aligned at left")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setText","(","String text",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set a text after the popup of the messagebox")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setUnpopDelay","(","int unpopDelay",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Set a delay to the unpop animation")))),Object(r.b)("h3",{id:"references"},Object(r.b)("strong",{parentName:"h3"},"References")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"See also the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=KJZyy9n5WZw"}),"quick video tutorial")," on how to create a MessageBox."),Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/MessageBox.html"}),"JavaDocs")," fore more information.")))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/components/messagebox.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-components-messagebox-md-a6819eaaf54d5d9b9e15.js.map