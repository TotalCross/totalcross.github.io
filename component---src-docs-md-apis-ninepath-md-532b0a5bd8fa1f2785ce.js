(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7Jgv":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("k1TG"),r=a("8o2o"),i=(a("q1tI"),a("7ljp")),b=a("hhGP"),l=(a("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/ninepath.md"}});var o={_frontmatter:l},c=b.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"ninepath"},"Ninepath"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"NinePatch is a class that allows you to create nine custom patches that will be sized the way you define them. It draws an extensible image so you can resize it without losing the edges."),Object(i.b)("p",null,"The amount of designs that can be created using this technique is virtually endless, so much so that Android also uses this tool."),Object(i.b)("p",null,"To adjust the images and create the guides, keeping in mind that the corners will stay fixed, you need the help of a designer or someone with knowledge in image editing tools as illustrator."),Object(i.b)("p",null,"But there are also sites that help to perform this work in a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://romannurik.github.io/AndroidAssetStudio/nine-patches.html#source.type=image&sourceDensity=480&name=multibutton"}),"simpler way as this site"),". In it, just upload the desired image and then adjust the guides ","(","always keeping in mind that the corners are fixed",")",". That done, just download the .zip file containing the guides!"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"NinePatch")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getInstance","("," ",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the instance of the NinePatch")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Parts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"load","(","Image",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Return the 9 ninepatch parts from a Image with the guides")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Parts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"load","(","Image original, int scalableAreaStartWidth, int scalableAreaEndWidth, int scalableAreaStartHeight, int scalableAreaEndHeight",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the 9 ninepatch parts of the image without the guides but with the values of the points that will cut the image")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Parts")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"load","(","Image original, int scalableAreaWidth, int scalableAreaHeight",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the 9 parts of the ninepatch of a image without the guides but with the values that are going to be used for the borders rectangles, that are the respective width and height. All border rectangles are equals in this case.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getNormalInstance","(","Parts p, int width, int height, int color, boolean rotate",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Return the result image built from the given width and height; If the given color is different from -1, it will apply the rgb colors in every pixel from the image. If the given boolean is true, the image will be rotated 180º.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getNormalInstance","(","int type, int width, int height, int color, boolean rotate",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Return the result image from one of Totalcross standard ninepatchs. If the given color is different from -1, it will apply the rgb colors in every pixel from the image. If the given boolean is true, the image will be rotated 180º.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getPressedInstance","(","Image img, int backColor, int pressColor",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Return the given image with a pressed effect from the given color")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"void")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tryDrawImage","(","Graphics g, Image npback, int x, int y",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Draws on the given Graphics the given image on the x and y coordinates.")))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/ninepath.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-apis-ninepath-md-532b0a5bd8fa1f2785ce.js.map