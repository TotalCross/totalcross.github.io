(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"9jCw":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return c})),a.d(e,"default",(function(){return o}));var n=a("k1TG"),b=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("hhGP"),c=(a("qKvR"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/components/multi-edit.md"}});var l={_frontmatter:c},d=i.a;function o(t){var e=t.components,i=Object(b.a)(t,["components"]);return Object(r.b)(d,Object(n.a)({},l,i,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"multi-edit"},"Multi Edit"),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"A MultiEdit is a field used to show or alter text in various disposed line"),Object(r.b)("p",null,Object(r.b)("img",{alt:"multiedit-sample",src:a("iPir")})),Object(r.b)("h3",{id:"source-code"},"Source Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import totalcross.sys.Settings;\nimport totalcross.ui.MainWindow;\nimport totalcross.ui.MultiEdit;\n\npublic class MultiEditSample extends MainWindow {\n    public MultiEditSample() {\n        setUIStyle(Settings.MATERIAL_UI);\n        Settings.uiAdjustmentsBasedOnFontHeight = true;\n    }\n\n    public void initUI() {\n        MultiEdit multiEdit = new MultiEdit();\n        multiEdit.caption = "MultiEdit";\n        add(multiEdit, LEFT + 100,CENTER, FILL - 100, DP + 48);\n    }\n}\n')),Object(r.b)("h3",{id:"attributes"},"Attributes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"autoSelect"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"When true, the text will be selected when the MultiEdit is foccused")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"caption"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The MultiEdit's placeholder text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"justify"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Justify the text when the MultiEdit is not editable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"drawDots"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If true, a dotted line will be drawn on each line")))),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MultEdit","("," ",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Creates a MultiEdit for user input with the default size and spacing")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MultiEdit","(","int rowCount, int spaceBetweenLines",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Creates a MultiEdit for user input with the passed row quantity and line spacing.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MultiEdit","(","String mask, int rowCount, int spaceBetweenLines",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Creates a MultiEdit for user input with the passed row quantity and line spacing, but with a mask.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setEditable","(","boolean on",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Will enable or disable the MultiEdit. Can be used as a way to make sure the user don't modify something that was already saved on server and can't be modified without proper authorization")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getText","("," ",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the text within the MultiEdit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setMaxLength","(","int length",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Is used to limit the characters number the user can digit on the text field")))),Object(r.b)("h3",{id:"references"},Object(r.b)("strong",{parentName:"h3"},"References")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/MultiEdit.html"}),"MultiEdit Java Docs "),"for more information.")))}void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/components/multi-edit.md"}}),o.isMDXComponent=!0},iPir:function(t,e,a){t.exports=a.p+"static/multiedit-sample-4ed209d19ead61e33b24b8416652685f.gif"}}]);
//# sourceMappingURL=component---src-docs-md-components-multi-edit-md-a51c092a682518ce3457.js.map