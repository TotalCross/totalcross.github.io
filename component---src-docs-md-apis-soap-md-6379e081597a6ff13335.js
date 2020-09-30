(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/rvG":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a("k1TG"),r=a("8o2o"),b=(a("q1tI"),a("7ljp")),i=a("hhGP"),s=(a("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/soap.md"}});var c={_frontmatter:s},o=i.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"soap"},"SOAP"),Object(b.b)("h2",{id:"overview"},"Overview"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"“SOAP Version 1.2 ","(","SOAP",")"," is a lightweight protocol intended for exchanging structured information in a decentralized, distributed environment. It uses XML technologies to define an extensible messaging framework providing a message construct that can be exchanged over a variety of underlying protocols. The framework has been designed to be independent of any particular programming model and other implementation specific semantics.” - Definition from SOAP Version 1.2 Part 1: Messaging Framework ","(","Second Edition",")"," - W3C Recommendation 27 April 2007")),Object(b.b)("p",null,"Because of its implementation independence, the SOAP protocol is widely used on the implementation of Web Services."),Object(b.b)("h2",{id:"the-soap-class"},"The SOAP Class"),Object(b.b)("p",null,"This class represents a SOAP message that, when executed, is sent to the server in a HTTP request. The server response is then received, processed, and the answer made available."),Object(b.b)("p",null,"Before creating a instance of ",Object(b.b)("strong",{parentName:"p"},"SOAP"),", you may set the following class fields:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The prefix string used to start the request. Note that it uses UTF-8, so unicode characters are not supported. Its default value is:")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),'<?xml version="1.0" encoding="UTF-8"?>\n<soapenv:Envelope xmlns:soapenv="\nhttp://schemas.xmlsoap.org/soap/envelope/"\nxmlns:xsd="http://www.w3.org/2001/XMLSchema"\nxmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n<soapenv:Body>\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"suffix The suffix string used to finish the request. Its default value is:")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markup"}),"</soapenv:Body>\n</soapenv:Envelope>\n")),Object(b.b)("p",null,"debug Changing this value to true enables debug mode, which writes XML parsing information on the debug console ","(","or the default error output when running on JDK",")",". You may also set HttpStream.debugHeader = true.",Object(b.b)("br",{parentName:"p"}),"\n","Caution: don’t use this on device because it increases a lot the memory usage."),Object(b.b)("p",null,"disableEncoding The SOAP request will ask the server for GZip or ZLib encoded response by default. To disable encoding, ",Object(b.b)("strong",{parentName:"p"},"set this field to true"),"."),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("p",null,"To create a new ",Object(b.b)("strong",{parentName:"p"},"SOAP")," instance, you must use the following constructor:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"constructor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SOAP","(","String mtd, String uri",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Creates a new SOAP request where mtd specifies the remote method to be executed, and uri, the address of the Web Service. The default namespace will be used, along with an open timeout of 25 seconds, and a read and write timeout of 60 seconds.")))),Object(b.b)("h2",{id:"instance-fields"},"Instance Fields"),Object(b.b)("p",null,"After creating a new ",Object(b.b)("strong",{parentName:"p"},"SOAP")," object, you may set some of its following instance fields:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"wasCompressionUsed"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A flag that indicates if the SOAP connection was using either GZip or ZLib. This is a ready-only flag, set during the execute","(",")"," method, and changing its value has no effect.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"alternativeReturnTag"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"By default, the XML parser used by SOAP will recognize as an answer tag any tags whose name ends with “result” or “return” ","(","ignoring the case",")",". This field, if set, specifies an alternative answer tag name, recognizing any XML element that ends with the specified value as an answer tag. AlternativeReturnTag IS CASE SENSITIVE, unlike the SOAP default tag names. Also, alternativeReturnTag does not replace the default values. It’s just a new value with higher priority over the default ones.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"namespace"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"String that identifies the service’s namespace. Its default value is: ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"http://schemas.xmlsoap.org/soap/"}),"http://schemas.xmlsoap.org/soap/"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"openTimtout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the connection open timeout value in milliseconds. Its default value is defined by the constant DEFAULT_OPEN_TIMEOUT ","(","25 s",")",".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the connection read timeout value in milliseconds. Its default value is defined by the constant DEFAULT_READ_TIMEOUT ","(","60 s",")",".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"int")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"writeTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Specifies the connection write timeout value in milliseconds. Its default value is defined by the constant DEFAULT_WRITE_TIMEOUT ","(","60 s",")",".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"mtd"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stores the name of the remote method.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"String")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"uri"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stores the address to the Web Service.")))),Object(b.b)("p",null,"You may change both the ",Object(b.b)("strong",{parentName:"p"},"mtd")," and the ",Object(b.b)("strong",{parentName:"p"},"uri")," values before executing the request. Although this seems to be pointless, because these values are passed to the constructor."),Object(b.b)("p",null,"If the remote method expects any arguments, you must set them using the ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"setParam()"))," method. However, there are several versions of this method to cover different argument types. Listing all of them would be pointless, so we’ll define a generic type that we’ll refer as , and may be one of the of the following:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"int"),Object(b.b)("li",{parentName:"ul"},"boolean"),Object(b.b)("li",{parentName:"ul"},"double"),Object(b.b)("li",{parentName:"ul"},"String")),Object(b.b)("p",null,"So, whenever a SOAP method is described like ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"setParam( param)")),", you can safely assume there are four versions of this method, one for each type listed above. Other type of parameters can be passed using similar methods. Unicode characters are not accepted because the default header uses UTF-8."),Object(b.b)("h2",{id:"soap-methods-for-parameters-setting"},"SOAP methods for parameters setting:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","("," param",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the given value in the method’s argument order.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","(","[","]"," param",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the given array in the method’s argument order.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","("," param, String paramName",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the given value, identifying it with the given parameter name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","(","[","]"," param, String paramName",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the given array value, identifying it with the given parameter name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","(","byte","[","]"," param, String paramName",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets a byte array value, identifying it with the given parameter name.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","(","String param, String paramName, String paramType",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets a String parameter in the method, identifying it with the given name and specifying its type as the given one.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setParam","(","String","[","]"," param, String paramName, String paramType",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets a String array value, identifying it with the given parameter name and specifying its type as the given one.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setObjectParam","(","String paramName,String","[","]"," fieldNames, String","[","]"," fieldValues",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets an Object parameter value, by specifying its parameter name, field names and field values.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setObjectArrayParam","(","String paramName,String","[","]"," fieldNames, Vector fieldValues",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets an Object array parameter value, by specifying its parameter name, field names and field values.")))),Object(b.b)("p",null,"The only thing left to do now is to execute the request and check the service’s answer:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"execute","("," ",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"This method simply executes the prepared SOAP request.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"Object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getAnswer","("," ",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"To retrieve the method’s answer, you must call this method after execute","(",")",". The return type of this method is Object, but it may return only three different values ","(","the values may be escaped; use totalcross.ui.html.EscapeHtml.unescape","(",")"," to convert it back",")",". The remote method return type is known, so you may just typecast the Object returned by getAnswer","(",")"," to String or String array, converting its values if necessary. The possible returns are: 1- null When the remote method has no return value or the execution failed for any reason. 2- String When the remote method returns a single value. If the expected value is not String, you must convert the received String to the right type ","(","e.g. if you’re expecting an int value, you can use Convert.toInt","(",")",")",". 3- String","[","]"," When the remote method returns an array or an Object. If the expected value is not a String array, you must convert each value of the array to the right type. If it’s an object, the array contains its field values.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("strong",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"useProxy","(","String address, int port, String username, String password",")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the proxy settings to be used by the SOAP connection. You may optionally set the username and password for basic proxy authorization. Proxy authorization is disabled if either username or password is null. In this method, address is the proxy address port and port is the proxy port.")))),Object(b.b)("h2",{id:"references"},"References"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"For more details, check out the ",Object(b.b)("strong",{parentName:"li"},"totalcross.xml.soap")," package ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://rs.totalcross.com/doc/"}),"JavaDocs"),".")))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/soap.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-apis-soap-md-6379e081597a6ff13335.js.map