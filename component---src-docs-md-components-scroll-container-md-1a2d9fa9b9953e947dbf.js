(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{hGFL:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return l}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("FlsD"),t("q1tI");var a=t("7ljp"),r=t("hhGP");t("qKvR");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/components/scroll-container.md"}});var i={_frontmatter:s},c=r.a;function l(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(c,o({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"scroll-container"},"Scroll Container"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"The Container scroll is a container that has side scroll, horizontal scroll or no scroll."),Object(a.b)("h3",{id:"how-to-use"},"How to use"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-java"}),'public class ScrollContainerSample extends MainWindow {\n\n    public ScrollContainerSample(){\n        setUIStyle(Settings.Material);\n    }\n\n    @Override\n        public void initUI() {\n            super.initUI();\n            ScrollContainer sc = new ScrollContainer(false, true);\n            int gap = UnitsConverter.toPixels(DP + 16);\n            sc.setInsets(gap, gap, gap, gap);\n            add(sc, LEFT, TOP, FILL, FILL);\n\n            Button b;\n            ScrollContainer sc1, sc2, sc3;\n            // a ScrollContainer with both ScrollBars\n            sc.add(new Label("Vertical and horizontal:"), LEFT, TOP);\n            sc.add(sc1 = new ScrollContainer());\n            sc1.setBorderStyle(BORDER_ROUNDED);\n            sc1.setInsets(3, 3, 3, 3);\n            sc1.setRect(LEFT, AFTER, FILL, SCREENSIZE + 30);\n            int xx = new Label("Name99").getPreferredWidth() + 2; // edit\'s alignment\n            for (int i = 0; i < 50; i++) {\n                sc1.add(new Label("Name" + i), LEFT, AFTER + 10);\n                sc1.add(new Edit(), xx, SAME, SCREENSIZE + 90, PREFERRED);\n                if (i % 3 == 0) {\n                    sc1.add(new Button("Go"), AFTER + 2, SAME, PREFERRED, SAME);\n                }\n            }\n\n            // a ScrollContainer with vertical ScrollBar disabled\n            sc.add(new Label("Horizontal-only:"), LEFT, AFTER + gap);\n            sc.add(sc2 = new ScrollContainer(true, false));\n            sc2.setBorderStyle(BORDER_ROUNDED);\n            sc2.setInsets(3, 3, 3, 3);\n            int lines = Settings.screenHeight > 320 ? 4 : 3;\n            sc2.setRect(LEFT, AFTER, FILL, lines * (fmH + Edit.prefH) + fmH / 2);\n            for (int i = 0; i < lines; i++) {\n                sc2.add(new Label("Name" + i), LEFT, AFTER);\n                sc2.add(new Edit(""), xx, SAME, PARENTSIZE + 200, PREFERRED); // fit\n                sc2.add(new Button("Go"), AFTER, SAME, PREFERRED, SAME);\n            }\n\n            // a ScrollContainer with horizontal ScrollBar disabled\n            sc.add(new Label("Vertical-only:"), LEFT, AFTER + gap);\n            sc.add(sc3 = new ScrollContainer(false, true));\n            sc3.setBorderStyle(BORDER_ROUNDED);\n            sc3.setInsets(3, 3, 3, 3);\n            sc3.setRect(LEFT, AFTER, FILL, SCREENSIZE + 30);\n            for (int i = 0; i < 50; i++) {\n                sc3.add(new Label("Name" + i), LEFT, AFTER);\n                sc3.add(b = new Button("Go"), RIGHT, SAME, PREFERRED, SAME);\n                sc3.add(new Edit(""), xx, SAME, FIT - 2, PREFERRED, b); // fit\n            }\n        }\n}\n')),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To know more details read its ",Object(a.b)("a",o({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/ScrollContainer.html"}),"JavaDocs"),".")),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"https://app.gitbook.com/@totalcross/s/playbook/~/drafts/-LfzE7W6V32fHcj-QL-S/primary/apis/visao-geral-da-api"}),Object(a.b)("br",{parentName:"a"}))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/components/scroll-container.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-components-scroll-container-md-1a2d9fa9b9953e947dbf.js.map