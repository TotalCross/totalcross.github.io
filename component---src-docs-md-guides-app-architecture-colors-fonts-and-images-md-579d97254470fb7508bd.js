(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{IeWQ:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return r}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("FlsD"),a("q1tI");var n=a("7ljp"),o=a("hhGP");a("qKvR");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/app-architecture/colors-fonts-and-images.md"}});var s={_frontmatter:l},c=o.a;function r(t){var e=t.components,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,["components"]);return Object(n.b)(c,i({},s,o,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"best-practices-to-improve-project-maintenance"},"Best practices to improve project maintenance"),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"There are a few recommended practices to improve the organization, maintenance, and performance, and consequently loading your application. Some of them are very basic, like creating a class apart to store the colors used in the application and other more complex as working with loading images that are pulled from an external bank. In this chapter we will learn about these recommendations."),Object(n.b)("p",null,"You can download the ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/TotalCross/MaterialTemplates"}),"Material Templates project"),", which contains all the recommendations below."),Object(n.b)("p",null,Object(n.b)("img",{alt:"image",src:a("ItIq")})),Object(n.b)("h2",{id:"colors"},"Colors"),Object(n.b)("p",null,"In the development of any application it is essential to have a design to prototype the user interfaces. It turns out that when the developer takes these prototypes and starts to develop, it often ends up adding these colors in the UI classes themselves, which makes it difficult to maintain this code."),Object(n.b)("p",null,"you will find free website recommendations for screen prototyping in the part of ",Object(n.b)("a",i({parentName:"p"},{href:"https://totalcross.gitbook.io/playbook/guideline/colors-fonts-and-images#references"}),"references")," in the last topic of this chapter."),Object(n.b)("p",null,"Now let's say you have an update to your application and the background color of the APP has changed. If your project has 2 or 3 screens, is it relatively quick to change these colors but if it is a more robust design of 15 screens? The developer would have to quit by changing the background color 15 times."),Object(n.b)("p",null,"Thinking about this, TotalCross recommends that you create a class named Colors and create constants for each color that you will need to use in the application, and preferably with suggestive names such as BACKGROUND. The name of the constants must always be in upper case. Here is the standard suggested by TotalCross, feel free to adapt to the needs of your project."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"import totalcross.ui.gfx.Color;\n\npublic class Colors {\n    // The entire color palette follows the default material selected by the\n    // Material Color Tool:\n    // https://material.io/tools/color/#!/?view.left=0&view.right=1\n\n    // Primary Colors\n    public static int PRIMARY = 0xD32F2F;\n    public static int P_LIGHT = 0xFF6659;\n    public static int P_DARK = 0x9A0007;\n\n    // Secondary Colors\n    public static int SECONDARY = 0xF44336;\n    public static int S_LIGHT = 0xFF7961;\n    public static int S_DARK = 0xBA000D;\n\n    //Texts Colors\n    public static int TEXT_ON_P = 0xFFFFFF;\n    public static int TEXT_ON_P_LIGHT = 0x000000;\n    public static int TEXT_ON_P_DARK = 0xFFFFFF;\n\n    public static int TEXT_ON_S = 0x000000;\n    public static int TEXT_ON_S_LIGHT = 0x000000;\n    public static int TEXT_ON_S_DARK = 0xFFFFFF;\n\n\n    // Backcolor samples colors\n    public static int BACKGROUND_GRAY_01 = Color.getRGB(245, 245, 246);\n    public static int BACKGROUND_GRAY_02 = Color.getRGB(225, 225, 226);\n    public static int BACKGROUND_GRAY_03 = Color.getRGB(205, 205, 206);\n\n    // Others\n    public static int SOFT_PEACH = 0xE9E2E1;\n    public static int GRAY = 0XC0C1E8;\n\n}\n\n")),Object(n.b)("p",null,"The names we attributed to the contenders were not by chance but rather due to the Color ",Object(n.b)("a",i({parentName:"p"},{href:"https://blog.totalcross.com/en/material-o-layout-da-google/"}),"Material")," standard. You can generate each of these colors and better understand this pattern through ",Object(n.b)("a",i({parentName:"p"},{href:"https://material.io/tools/color/#!/"}),"Material Color Tools"),". With this Material tool you select the primary and secondary color of your project and it already generates the application's color palette and font color."),Object(n.b)("p",null,"We also provide the source code for you to download and adapt for the project. Just click ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/TotalCross/MaterialTemplates"}),"here"),"."),Object(n.b)("h2",{id:"images"},"Images"),Object(n.b)("p",null,"To facilitate code maintenance, it is also recommended that all images be instantiated in a separate class called Images and only be called in the interface classes."),Object(n.b)("p",null,"Images class example:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),'import totalcross.io.IOException;\nimport totalcross.ui.image.Image;\nimport totalcross.ui.image.ImageException;\n\npublic class Images {\n    public static Image addperson, cart, ic_adaptive_launcher_shell_background_retang;\n\n    private Images() {\n    }\n\n    public static void loadImages(int fmH) {\n        try {\n            addperson = new Image("images/addperson.png");\n            cart = new Image("images/cart.png");\n            ic_adaptive_launcher_shell_background_retang = new Image(\n                    "images/ic_adaptive_launcher_shell_background.png");\n        } catch (ImageException | IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),Object(n.b)("p",null,"Using Images.class:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"    public void initUI() {\n        Images.loadImages(fmH);\n        ImageControl cart = new ImageControl(Images.cart);\n        add(cart, LEFT, TOP, FILL, FILL);\n    }\n")),Object(n.b)("h2",{id:"fonts"},"Fonts"),Object(n.b)("p",null,"As with colors and images, it happens when we are going to edit the fonts and here the problem is even worse, because we still have to stick to the size of fonts, colors and type."),Object(n.b)("p",null,"So we advised that before the developer can already take with Design all these details to pass through a class with everything custom, as in the example below:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),'import totalcross.ui.font.Font;\n\npublic class Fonts {\n\n    public static final int FONT_DEFAULT_SIZE = 12;\n\n    public static Font latoMediumDefaultSize;\n    public static Font latoMediumPlus1;\n    public static Font latoMediumPlus2;\n    public static Font latoMediumPlus4;\n    public static Font latoMediumMinus1;\n    public static Font latoMediumMinus2;\n    public static Font latoMediumMinus4;\n\n    public static Font latoBoldDefaultSize;\n    public static Font latoBoldMinus1;\n    public static Font latoBoldMinus2;\n    public static Font latoBoldMinus4;\n    public static Font latoBoldPlus1;\n    public static Font latoBoldPlus2;\n    public static Font latoBoldPlus4;\n    public static Font latoBoldPlus6;\n    public static Font latoBoldPlus8;\n\n    public static Font latoLightDefaultSize;\n    public static Font latoLightPlus1;\n    public static Font latoLightPlus2;\n    public static Font latoLightPlus4;\n    public static Font latoLightPlus6;\n    public static Font latoLightMinus1;\n    public static Font latoLightMinus2;\n    public static Font latoLightMinus4;\n\n    public static Font latoRegularMinus5;\n    public static Font latoRegularDefaultSize;\n\n    static {\n\n        // Lato Regular\n        latoRegularDefaultSize = Font.getFont("Lato Regular", false, FONT_DEFAULT_SIZE);\n        latoRegularMinus5 = latoRegularDefaultSize.adjustedBy(-5);\n\n        // Lato Medium\n        latoMediumDefaultSize = Font.getFont("Lato Medium", false, FONT_DEFAULT_SIZE);\n        latoMediumPlus1 = latoMediumDefaultSize.adjustedBy(1);\n        latoMediumPlus2 = latoMediumDefaultSize.adjustedBy(2);\n        latoMediumPlus4 = latoMediumDefaultSize.adjustedBy(4);\n        latoMediumMinus1 = latoMediumDefaultSize.adjustedBy(-1);\n        latoMediumMinus2 = latoMediumDefaultSize.adjustedBy(-2);\n        latoMediumMinus4 = latoMediumDefaultSize.adjustedBy(-4);\n        // Lato Bold\n        latoBoldDefaultSize = Font.getFont("Lato Bold", false, FONT_DEFAULT_SIZE);\n        latoBoldPlus1 = latoMediumDefaultSize.adjustedBy(1);\n        latoBoldPlus2 = latoMediumDefaultSize.adjustedBy(2);\n        latoBoldPlus4 = latoMediumDefaultSize.adjustedBy(4);\n        latoBoldPlus6 = latoMediumDefaultSize.adjustedBy(6);\n        latoBoldPlus8 = latoMediumDefaultSize.adjustedBy(8);\n        latoBoldMinus1 = latoMediumDefaultSize.adjustedBy(-1);\n        latoBoldMinus2 = latoMediumDefaultSize.adjustedBy(-2);\n        latoBoldMinus4 = latoMediumDefaultSize.adjustedBy(-4);\n        // Lato Light\n        latoLightDefaultSize = Font.getFont("Lato Light", false, FONT_DEFAULT_SIZE);\n        latoLightPlus1 = latoLightDefaultSize.adjustedBy(1);\n        latoLightPlus2 = latoLightDefaultSize.adjustedBy(2);\n        latoLightPlus4 = latoLightDefaultSize.adjustedBy(4);\n        latoLightPlus6 = latoLightDefaultSize.adjustedBy(6);\n        latoLightMinus1 = latoLightDefaultSize.adjustedBy(-1);\n        latoLightMinus2 = latoLightDefaultSize.adjustedBy(-2);\n        latoLightMinus4 = latoLightDefaultSize.adjustedBy(-4);\n    }\n}\n')),Object(n.b)("p",null,"to apply this class:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"public void initUI() {\n  Label lbl = new Label(txt);\n  lbl.setFont(Fonts.latoMediumMinus2);\n  lbl.setForeColor(Colors.WHITE);\n  add(lbl, LEFT, BOTTOM);\n}\n")),Object(n.b)("p",null,"Another way would be to create an enum to stylize and only apply where you need it. To learn how to do it this way just click ",Object(n.b)("a",i({parentName:"p"},{href:"https://totalcross.gitbook.io/playbook/guideline/suggested-design-patterns/builder"}),"here"),"."),Object(n.b)("h2",{id:"material-constants"},"Material Constants"),Object(n.b)("p",null,"The Material recommends a series of ",Object(n.b)("a",i({parentName:"p"},{href:"https://material.io/components/"}),"size and spacing patterns"),", so it is ideal to create a class within the useful package and assigning these patterns to the constants, as in the example below:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"import totalcross.ui.Control;\nimport totalcross.util.UnitsConverter;\n\n/**\n * Constants of positioning and components size to make it easier to maintain\n * the app.\n *\n * @author brunoamuniz\n *\n */\n\npublic class MaterialConstants {\n\n    public static final int BORDER_SPACING = UnitsConverter.toPixels(16 + Control.DP);\n\n    public static final int COMPONENT_SPACING = UnitsConverter.toPixels(8 + Control.DP);\n\n    public static final int FAB_SIZE = UnitsConverter.toPixels(56 + Control.DP);\n\n    public static final int MINI_FAB_SIZE = UnitsConverter.toPixels(40 + Control.DP);\n\n    public static final int EDIT_HEIGHT_NO_CAPTION = UnitsConverter.toPixels(40 + Control.DP);\n\n    public static final int EDIT_HEIGHT = UnitsConverter.toPixels(52 + Control.DP);\n\n    public static final int TABS_HEIGHT = UnitsConverter.toPixels(40 + Control.DP);\n\n}\n")),Object(n.b)("p",null,"to apply this class:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),'Button btn = new Button("Button");\nadd(btn, LEFT + MaterialConstants.BORDER_SPACING, AFTER + MaterialConstants.COMPONENT_SPACING,\n                FILL - MaterialConstants.BORDER_SPACING, PREFERRED);\n')),Object(n.b)("h2",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Screen prototyping tool - ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.invisionapp.com/"}),"Invision app"),", ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.figma.com/"}),"figma"),", ",Object(n.b)("a",i({parentName:"li"},{href:"https://marvelapp.com/"}),"marvel app")," and ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.adobe.com/br/creativecloud.html?ef_id=Cj0KCQjwtr_mBRDeARIsALfBZA571eitMauX00tdmLL6ARRBAGWNYxk-hO-eTsRNi61SH1Y6RlO1y4EaArMwEALw_wcB:G:s&gclid=Cj0KCQjwtr_mBRDeARIsALfBZA571eitMauX00tdmLL6ARRBAGWNYxk-hO-eTsRNi61SH1Y6RlO1y4EaArMwEALw_wcB&mv=search&s_kwcid=AL!3085!3!301784432823!b!!g!!adobe+creative&sdid=KQPOT"}),"adobeXD"),";"),Object(n.b)("li",{parentName:"ul"},"To better illustrate where each of them is used, you can download the ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/totalcross/Nubank_Sample"}),"Nubank_Sample project in GitHub"),";"),Object(n.b)("li",{parentName:"ul"},"Screen templates in standard Material Design made with totalcross - ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/TotalCross/MaterialTemplates"}),"Material Templates")," ;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://material.io/design/components/"}),"Material Standards"),".")))}void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/app-architecture/colors-fonts-and-images.md"}}),r.isMDXComponent=!0},ItIq:function(t,e,a){t.exports=a.p+"static/imagem-55a3d31f434faf3365d4988395c40db0.png"}}]);
//# sourceMappingURL=component---src-docs-md-guides-app-architecture-colors-fonts-and-images-md-579d97254470fb7508bd.js.map