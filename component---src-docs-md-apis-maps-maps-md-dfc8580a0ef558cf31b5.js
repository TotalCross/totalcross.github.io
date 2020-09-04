(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"BS/C":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("FlsD"),a("q1tI");var b=a("7ljp"),r=a("hhGP");a("qKvR");function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(t[b]=a[b])}return t}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/maps/maps.md"}});var i={_frontmatter:l},c=r.a;function o(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,b,r={},n=Object.keys(t);for(b=0;b<n.length;b++)a=n[b],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["components"]);return Object(b.b)(c,n({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"maps---deprecated"},"Maps - Deprecated"),Object(b.b)("p",null,"TotalCross currently does not have support for applications that need a dynamic map, but it is still possible to work with static map. In addition, we are working to integrate a new and improved navigation API in TotalCross."),Object(b.b)("p",null,"The static map is an image captured by a request in an API that shows the map of the requested parameters."),Object(b.b)("p",null,"Old API using google Map currently deprecated."),Object(b.b)("h2",{id:"overview"},"Overview"),Object(b.b)("p",null,"You can use google maps to display a map in your app, and you can add some geometric shapes to your map"),Object(b.b)("h2",{id:"attributes"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"SHOW_SATELLITE_PHOTOS"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Used in the flags argument of showRoute: shows the satellite photos")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"USE_WAZE"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Used in the flags argument of showRoute: use waze to show the route of the current location to a target address. Note that the destination address is NOT used")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Return"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"toCoordI","(","Double v",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"boolean")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"showAddress","(","String address, boolean showSatellitePhotos",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Shows the given address in a separate viewer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"boolean")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"showRoute","(","String addressI, String addressF, String traversedPoints, int flags",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Shows the route between two points.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"boolean")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"showMap","(","MapItem","[","]"," items, boolean showSatellitePhotos",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Shows an array of MapItem elements in the map.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double","[","]")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"getLocation","(","String address",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Returns the location after searching Google.")))),Object(b.b)("h2",{id:"nested-class"},"Nested Class"),Object(b.b)("h3",{id:"mapitem"},"MapItem"),Object(b.b)("p",null,"is an abstract class that will serve as inheritance for the classes below"),Object(b.b)("h4",{id:"methods-1"},"Methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"abstract void")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"serialize","(","StringBuffer sb",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Creates a simple switch")))),Object(b.b)("h3",{id:"place"},"Place"),Object(b.b)("h4",{id:"attributes-1"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"lat"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The location of the place")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"lon"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The location of the place")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"String")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"caption"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"An optional caption of the place, shown in bold")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"String")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"detail"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The detail of the place. Use \\n to split lines. Cannot be null")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"backColor"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The item's background color. Alpha defaults to 255 if not specified")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"capColor"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The item caption's color. Alpha defaults to 255 if not specified")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"detColor"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The item details' color. Alpha defaults to 255 if not specified")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"pinColor"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The item pin's color. Alpha defaults to 255 if not specified")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"fontPerc"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The percentage of the font based on the device's original font size. Defaults to 100")))),Object(b.b)("h4",{id:"methods-2"},"Methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Return"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"serialize","(","StringBuffer sb",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"shape"},"Shape"),Object(b.b)("h4",{id:"attributes-2"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double","[","]")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"lats"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The coordinates of the polygon")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double","[","]")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"lons"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The coordinates of the polygon")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"boolean")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"filled"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Set if the item is filled or not")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"color"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The item color. Alpha defaults to 255 if not specified")))),Object(b.b)("h4",{id:"methods-3"},"Methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Return"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"serialize","(","StringBuffer sb",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"circle"},"Circle"),Object(b.b)("h4",{id:"attributes-3"},"Attributes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"lat"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Center of the circle")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"lon"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Center of the circle")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"double")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"rad"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The radius; if ",">"," 0, its computed as meters; if ","<"," 0, its computed as delta of the coordinates")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"boolean")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"filled"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"Set if the item is filled or not")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"color"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"The item color. Alpha defaults to 255 if not specified.")))),Object(b.b)("h4",{id:"methods-4"},"Methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Return"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",n({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",n({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",n({parentName:"tr"},{align:"left"}),"serialize","(","StringBuffer sb",")"),Object(b.b)("td",n({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"references"},Object(b.b)("strong",{parentName:"h2"},"References")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"See the ",Object(b.b)("a",n({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/map/GoogleMaps.html"}),"Java Docs")," for more information."),Object(b.b)("li",{parentName:"ul"},"Within the ",Object(b.b)("strong",{parentName:"li"},"TotalCross SDK"),", usually on Disk C, there is a folder called src/main/java/totalcross and there will be a folder named ",Object(b.b)("strong",{parentName:"li"},"Map"),", containing a ",Object(b.b)("strong",{parentName:"li"},"simple sample")," on map. Typically the path to this folder is this pattern:")),Object(b.b)("pre",null,Object(b.b)("code",n({parentName:"pre"},{className:"language-text"}),"C:\\Program Files\\TotalCross\\sdk\\src\\main\\java\\totalcross\\map\n")))}void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/maps/maps.md"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-apis-maps-maps-md-dfc8580a0ef558cf31b5.js.map