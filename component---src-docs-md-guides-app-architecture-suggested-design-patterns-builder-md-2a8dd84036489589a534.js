(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{l2eL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var o=n("7ljp"),a=n("hhGP");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/app-architecture/suggested-design-patterns/builder.md"}});var i={_frontmatter:l},c=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"template-pattern"},"Template Pattern"),Object(o.b)("h3",{id:"whats-template-pattern"},"What's Template Pattern"),Object(o.b)("p",null,"In this pattern, we will use an enum that will be responsible for providing a stylization for your controls, thus making your code less coupled and more practical to be developed"),Object(o.b)("p",null,"For example, in your application has a color pattern, font size and a particular font, you can create an enum that will represent this stylization for you and in case you need to change something in those controls you just need to change that enum."),Object(o.b)("h3",{id:"how-to-apply-this-method"},"How to apply this method"),Object(o.b)("p",null,"For example if in your application you have a need to create custom labels with a specific font and with different font sizes"),Object(o.b)("h4",{id:"create-a-enum"},"Create a enum"),Object(o.b)("p",null,"You can create the enum in the root of the controller package"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-text"}),"└── src\n    └── main\n        └── java\n            └── com.your_company_name.your_name_app\n                .\n                .\n                .\n                └── controller\n                    └── Template.java\n")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-java"}),'public enum Template {\n\n/*\n\nH1 to H4 will be used to stylize the controls with a font, bold style,\nfont size and forecolor and will be changed between those enum only your fontsize.\n\nThe parameters of the getFont () method are String font_name,\nboolean boldStyle, int size in example h1 we have then:\n        "Graviola Soft-Bold": font\n        false: boldStyle\n        24: Font size\n        0x363D86: forecolor\n*/\n    H1(Font.getFont("Graviola Soft-Bold", false, 24), 0x363D86),\n    H2(Font.getFont("Graviola Soft-Bold", false, 20), 0x363D86),\n    H3(Font.getFont("Graviola Soft-Bold", false, 18), 0x363D86),\n    H4(Font.getFont("OpenSans-Bold", false, 12), 0x363D86),\n\n    private final Font font;\n    private final Integer forecolor;\n\n    Template(Font font, Integer forecolor) {\n        this.font = font;\n        this.forecolor = forecolor;\n    }\n\n    public <T extends Control> T apply(T c) {\n        if (forecolor != null) {\n            c.setForeColor(forecolor);\n        }\n\n        if (font != null) {\n            if (c instanceof Icon) {\n                c.setFont(Font.getFont(c.getFont().name, false, font.size));\n            } else {\n                c.setFont(font);\n            }\n        }\n\n        return c;\n    }\n\n\n')),Object(o.b)("h4",{id:"to-use-the-template"},"To use the template"),Object(o.b)("p",null,"In your controls now you can use your previously created template to maintain a standard styling."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-java"}),'Label lblHeader= new Label("Header");\nTemplate.H1.apply(lblHeader);\nadd(lblHeader, CENTER, TOP);\n')),Object(o.b)("p",null,"The enum template created above is just an example of how to use this pattern, you can customize it according to the needs of your application."))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/app-architecture/suggested-design-patterns/builder.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-guides-app-architecture-suggested-design-patterns-builder-md-2a8dd84036489589a534.js.map