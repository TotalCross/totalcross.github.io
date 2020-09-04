(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ODre:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return i}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("7ljp"),r=n("hhGP");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/barcode-scanner.md"}});var o={_frontmatter:b},l=r.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,c({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"scanner"},"Scanner"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Are you thinking in implements a barcode reader in your app? TotalCross have a simple solution. It is easy to make a Scanner application and there is an example ready to use on GitHub!"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{textAlign:"left"}},"Name"),Object(a.b)("th",{style:{textAlign:"left"}},"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",{style:{textAlign:"left"}},"readBarcode(String mode)"),Object(a.b)("td",{style:{textAlign:"left"}},Object(a.b)("p",null,"The mode can be one of:",Object(a.b)("br",null)),Object(a.b)("p",null,"1D - for one dimension barcodes",Object(a.b)("br",null)),Object(a.b)("p",null,"2D - for QR codes",Object(a.b)("br",null)),Object(a.b)("p",null,"empty string - for both",Object(a.b)("br",null)),Object(a.b)("p",null,"The parameter &msg:"),Object(a.b)("p",null,"You can show a message in display"))))),Object(a.b)("h2",{id:"how-to-use"},"How to use"),Object(a.b)("p",null,"There are two ways to make the scanner."),Object(a.b)("h3",{id:"with-scandit"},"With Scandit:"),Object(a.b)("p",null,'When we do a Scanner.readBarcode and we set on parameter characters "scandit:" with a String contains the scandit key and the camera be call and will capture the image and set on the label result. You will use like this:'),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'scan = Scanner.readBarcode("scandit:" + YOUR_SCANDIT_KEY);')),Object(a.b)("h3",{id:"with-zxing"},"With ZXing:"),Object(a.b)("p",null,"In here, we have a little more work because we need find the barcode's mode, if is a 1D or 2D and just after that, we can write Scanner.readBarcode and set the mode and a message telling the user how scanner the barcode."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'scan = Scanner.readBarcode("mode=" + mode + "&msg=" + msg);')),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"See more in ",Object(a.b)("a",c({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/io/device/scanner/package-summary.html"}),"Javadoc")),Object(a.b)("li",{parentName:"ul"},"See a project using scanner on ",Object(a.b)("a",c({parentName:"li"},{href:"https://github.com/TotalCross/ScanditSample"}),"github"))))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/barcode-scanner.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-apis-barcode-scanner-md-257d8edea2f8e6d1f157.js.map