(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+K/1":function(e,t,a){e.exports=a.p+"static/https_ssl-3-f83534f2848656288ab0ee7367122643.jpg"},"0/Tn":function(e,t,a){e.exports=a.p+"static/https_ssl-2.1-50c2b1c6e212a168f38963532ae1c768.jpg"},PBry:function(e,t,a){e.exports=a.p+"static/https_ssl-1-97abc1bd332b203c24ad602a372e3768.jpg"},WJal:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("FlsD"),a("q1tI");var n=a("7ljp"),r=a("hhGP");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/apis/https-and-ssl.md"}});var c={_frontmatter:o},s=r.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,i({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"https-and-ssl"},"HTTPS and SSL"),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"The TotalCross SSL native library is a wrapper library of the great axTLS package. The axTLS embedded SSL project written by Cameron Rich is a highly configurable client/server TLSv1 library designed for platforms with small memory requirements ","(","click ",Object(n.b)("a",i({parentName:"p"},{href:"http://axtls.cerocclub.com.au/index.htm"}),"here "),"for more details",")","."),Object(n.b)("p",null,"The original package supports:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Linux;"),Object(n.b)("li",{parentName:"ul"},"Win32;"),Object(n.b)("li",{parentName:"ul"},"Solaris;"),Object(n.b)("li",{parentName:"ul"},"Cygwin.")),Object(n.b)("p",null,"This native library adds support for ",Object(n.b)("strong",{parentName:"p"},"SSL")," ",Object(n.b)("strong",{parentName:"p"},"(","Secured Sockets Layer",")")," communications to secure data transfers between authenticated devices and/or servers."),Object(n.b)("h2",{id:"security-background"},"Security background"),Object(n.b)("p",null,"For general information about the features of ",Object(n.b)("strong",{parentName:"p"},"TLS")," ","(",Object(n.b)("strong",{parentName:"p"},"Transport Layer Security"),")"," and its usage, you may read the ",Object(n.b)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Transport_Layer_Security"}),"Wiki pag"),". If you are lucky, you may even read a good translation in your personal language."),Object(n.b)("p",null,"The english version provides a basic protocol description for everyone. For those who want to go further, the reference is the ",Object(n.b)("a",i({parentName:"p"},{href:"http://tools.ietf.org/html/rfc2246"}),"TLS protocol version 1.0 RFC 2246"),"."),Object(n.b)("p",null,"Basically, TLS ",Object(n.b)("strong",{parentName:"p"},"allows secured and authenticated communication between two components generally so-called client & server"),". It relies on X509 certificates, their associated ",Object(n.b)("strong",{parentName:"p"},"private keys")," to encrypt and associated public keys to decrypt exchanged data. The certificates could be self signed or signed by an Authority known as ",Object(n.b)("strong",{parentName:"p"},"CA ","(","Certification Authority",")")," that have to be trusted."),Object(n.b)("p",null,"Insofar the subject of SSL based security is well documented on the web, we won’t go further in the TLS description and invite people interrested in diving more deeply in secured communications to read the plenty of articles, books and HOWTOs available on the Internet. For general information about the features of TLS ","(","Transport Layer Security",")"," and its usage, you may read the ",Object(n.b)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Transport_Layer_Security"}),"Wiki page"),". If you are lucky, you may even read a good translation in your personal language."),Object(n.b)("h2",{id:"authenticate-certificates"},"Authenticate Certificates"),Object(n.b)("p",null,"o connect to the Google API, if it is an HTTPS protocol, you will need to indicate that the SSL / TLS certification issuer is reliable."),Object(n.b)("h3",{id:"but-how-does-certificate-authentication-work"},Object(n.b)("strong",{parentName:"h3"},"But how does certificate authentication work?")),Object(n.b)("p",null,"When you trust a certification, you are actually confining the issuer to it. This is because certification acts as a chain. You say that the certifying entity is reliable and therefore, all the certificates generated by it, are."),Object(n.b)("p",null,"An example of this is GlobalSign, a certification authority ","(","CA",")",". It issues a root certificate to Google and with this, Google can issue other certificates through it."),Object(n.b)("p",null,"The root certificate is called the Google G3 Authority. Therefore, for HTTPS to work you need to trust the certificate or anyone in the certification chain."),Object(n.b)("h3",{id:"step-by-step"},Object(n.b)("strong",{parentName:"h3"},"Step by step")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the URL in the browser and click on the padlock that appears ","(","next to the URL",")",' and then on "Valid", just below "Certificate". There you will find the data, such as the name of the issuer and with this, you will, in your code, indicate the issuer as reliable. ',"*","*","*","*")),Object(n.b)("p",null,Object(n.b)("img",{alt:"Step 1",src:a("PBry")})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To find the certificate, simply go through the certification path and click on view certificate and then in detail and then copy to file.")),Object(n.b)("p",null,Object(n.b)("img",{alt:"Step 2.1",src:a("0/Tn")})),Object(n.b)("p",null,Object(n.b)("img",{alt:"Step 2.2",src:a("yrnD")})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'After you click Copy to File, you will see some options, click the one that has "base64 encoded".')),Object(n.b)("p",null,Object(n.b)("img",{alt:"Step 3",src:a("+K/1")})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Once saved, grab the .cer file and place it inside the Authorities class in loop execution."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-java"}),"//Load all know cases\nfor(int c = Authorities.certificates.lenght - 1; c >= 0; c++){\n}\n")))),Object(n.b)("h2",{id:"generating-security-material"},"Generating security material"),Object(n.b)("p",null,"We will concentrate on the more general deployment of X509 client or server certificates signed by a Certification Authority ","(","CA",")"," ","(","click ",Object(n.b)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/X.509%20"}),"here")," for more details",")","."),Object(n.b)("p",null,'First we will have to create our own CA, that could be replaced by any "well known" commercial CA such as Verisign, Thawte, etc, if you have the need for a public authority.'),Object(n.b)("p",null,"We will use ",Object(n.b)("a",i({parentName:"p"},{href:"www.openssl.org"}),"openssl "),"as security engine to generate the security material involved in certificate based authentication/encryption. It’s a well spread SSL implementation providing powerfull tools to create and manage all kinds of security materials available on many platforms."),Object(n.b)("h2",{id:"create-a-private-ca"},"Create a private CA"),Object(n.b)("p",null,"Generate a self signed certificate that will be used as Certification Authority ","(","CA",")",". The authority will be valid for 10 years ","(","approx 3650 days",")","."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-php"}),"bash$ openssl req -new -x509 -days 3650 -keyout cakey.pem -out cacert.pem\nGenerating a 1024 bit RSA private key\n.++++++\n.....++++++\nwriting new private key to ’cakey.pem’\nEnter PEM pass phrase: xxxxx\nVerifying - Enter PEM pass phrase: xxxxx\n-----\nYou are about to be asked to enter information that will be incorporated into your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter ’.’, the field will be left blank.\n-----\nCountry Name (2 letter code) [AU]:BR\nState or Province Name (full name) [Some-State]:Rio de Janeiro state\nLocality Name (eg, city) []:Rio de Janeiro\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:SuperWaba Ltda\nOrganizational Unit Name (eg, section) []:SuperWaba dev. department\nCommon Name (eg, YOUR name) []:SuperWaba Sample CA\nEmail Address []:guich@superwaba.com.br\n")),Object(n.b)("p",null,"The first entry is the private key password. The private key is used to sign other certificates to assert they are authentic. The private key is protected by a password as a further security because the CA private key is a main secret that have to be protected."),Object(n.b)("p",null,"Next you will have to fill in X500 attributes describing the certificate subject. In our case, we enter information describing the SuperWaba CA ","(","Certification Authority",")",". Any agent trusting this CA, will authenticate certificates that have been signed by it through the CA embedded public key."),Object(n.b)("p",null,"We now have two files, ",Object(n.b)("strong",{parentName:"p"},"cakey.pem")," containing an encrypted version of the CA private key protected by a password and cacert.pem containing an X509 certificate embedding the CA public key that could be redistributed."),Object(n.b)("p",null,"Finally, you have to create a text file named ",Object(n.b)("strong",{parentName:"p"},"ca.srl"),' with the content "00" for certicate signing counting, just execute the following command:'),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-php"}),"bash$ echo “00” > ca.srl\n")),Object(n.b)("h2",{id:"create-a-client-or-server-x509-certificate"},"Create a client or server X509 certificate"),Object(n.b)("p",null,"First, you have to generate a new private key. SSL supports unencrypted and aes128/256 encrypted private keys."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-text"}),"bash$ openssl genrsa -aes128 -out mykey.pem 512\n")),Object(n.b)("p",null,"You may replace ",Object(n.b)("strong",{parentName:"p"},"-aes128")," by ",Object(n.b)("strong",{parentName:"p"},"-aes256")," for a stronger cipher, or remove ",Object(n.b)("strong",{parentName:"p"},"-aes128")," at all to generate a private key that is not encrypted. When you ask for an encrypted key, you have to enter a password used in the ciphering. The last option represents the key size in bits, values between 512 and 4096 bits for a higher security are accepted, but always keep in mind that higher security implies longer processing times especially critical on embedded devices."),Object(n.b)("p",null,"Next you have to generate a certificate request. This file could be transmitted to one of the commercial CA companies for signing or could be signed by our previously created private CA."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-text"}),"bash$ openssl req -new -out my.req -key mykey.pemAdd -x509\n")),Object(n.b)("p",null,"if you want to generate a self signed certificate if you don’t want to use a CA at all ","(","in this case, you may name the file ",Object(n.b)("strong",{parentName:"p"},"mycert.pem")," rather than ",Object(n.b)("strong",{parentName:"p"},"my.req"),")",". Insofar, the ",Object(n.b)("strong",{parentName:"p"},"out")," file will contain a finalized self-signed certificate rather than a certificate request."),Object(n.b)("p",null,"Enter all information describing your client or your server component. The certificate request will be stored in the file ",Object(n.b)("strong",{parentName:"p"},"my.req.")),Object(n.b)("p",null,"Finally, we will sign the certificate with the CA."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-text"}),"bash$ openssl x509 -CA cacert.pem -CAkey cakey.pem -CAserial ca.srl -req -in my.req -out mycert.pem -days 1460\n")),Object(n.b)("h2",{id:"principle-of-an-x509-authenticationencryption"},"Principle of an X509 authentication/encryption"),Object(n.b)("p",null,"X509 authentication/encryption is based on public/private key encryption that have a great characteristic. Indeed, the data ciphered by either key could only be deciphered by the other one."),Object(n.b)("p",null,"A software component that has to be authenticated, such as a secured server, may now be configured to deliver to any client the previously generated certificate ","(","contained in ",Object(n.b)("strong",{parentName:"p"},"mycert.pem"),")",". It also has to load the associated certificate private key. That private key is used to cipher data transmited to the client. On the other side, the client uses the public key embedded in the accepted server certificate to decipher the data from the server and cipher the data to be sent back to the server so that the server can decipher with its private key. If the client is configured to trust any certificate that have been signed by the signing CA, it will be able to authenticate any certificate using the CA public key."),Object(n.b)("p",null,"The SSL package supports both PEM and DER encrypted materials."),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Distinguished_Encoding_Rules"}),Object(n.b)("strong",{parentName:"a"},"DER")," "),"is an ASN.1 encoding of information, ",Object(n.b)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Privacy_Enhanced_Mail"}),"PEM")," is a ",Object(n.b)("strong",{parentName:"p"},"base64"),' encoding of a DER encoded data with a header "-----BEGIN " and a trailer "-----END " followed by a material type name. A PEM file may be de-encrypted or encrypted with AES128 or AES256 ciphers only.'),Object(n.b)("p",null,"LiteSSL also supports the pkcs8 encoding that is a private key encryption format. But it supports only one ciphering algorithm that is PBE-SHA1-RC4-128. Here is the command line to convert a PEM encoded private key into a pkcs8 encoded format. Always use the .p8 file suffix to identify the pkcs8 format."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-text"}),"bash$ openssl pkcs8 -topk8 -in mykey.pem -inform PEM -out mykey.p8\n-outform DER -v1 PBE-SHA1-RC4-128\n")),Object(n.b)("p",null,"bash\\$ openssl pkcs8 -topk8 -in mykey.pem -inform PEM -out mykey.p8"),Object(n.b)("p",null,"-outform DER -v1 PBE-SHA1-RC4-128You will have to enter a password, that will be required to use the private key."),Object(n.b)("p",null,"LiteSSL also supports pkcs12 that is a certificate/private key encryption format. But it supports only one ciphering algorithm that is PBE-SHA1-RC4-128. Here is the command line to convert certificate and its associate encoded private key into a pkcs12 encoded format. Always use the ",Object(n.b)("strong",{parentName:"p"},".p12")," file suffix to identify the pkcs12 format."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-text"}),'bash$ openssl pkcs12 -export -in server.pem -out server.p12 -name\n"myserver" -inkey server.key -certpbe PBE-SHA1-RC4-128 -keypbe\nPBE-SHA1-RC4-128\n')),Object(n.b)("p",null,"You will have to enter a password, that will be required to use the private key embedded in the pkcs12 encoded file."),Object(n.b)("h2",{id:"restrictions"},"Restrictions"),Object(n.b)("p",null,"The Applet version is implemented on top of SUN’s JSSE. This TLS implementation has some limitations that prevent the use of some security material formats supported by SSL on devices. Thus, private keys have to be in pkcs8 format only. Moreover, they can’t be password protected. You have to add the -nocrypt option to the command line provided above to convert a PEM encoded private key to pkcs8 encoding."),Object(n.b)("h2",{id:"ssl-usage"},"SSL usage"),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"SSLUtil")," class provides functions to get information about the TLS stack layer."),Object(n.b)("p",null,"The first class to instantiate is ",Object(n.b)("strong",{parentName:"p"},"SSLClient")," or ",Object(n.b)("strong",{parentName:"p"},"SSLServer")," ","(","not currently supported",")",". This class represents an SSL client or server context both inheriting from the ",Object(n.b)("strong",{parentName:"p"},"SSLCTX")," class that provides many SSL context common services. The main feature concerns the security material loading. Use ",Object(n.b)("strong",{parentName:"p"},"objLoad","("," ",")")," to load material from files or memory. The arguments of this function are the material type ","(","CA, X509 certificate, private keys, etc",")",", the filename or the memory containing the material, and finally a password for private keys loading if they are password based encrypted."),Object(n.b)("p",null,"To succeed the handshake with a server, you have to trust its self-signed certificate or trust the CA certificate who signed the server’s certificate."),Object(n.b)("p",null,"Use:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"strong"},"objLoad(SSL_OBJ_X509_CACERT, “cacert.pem”, null)"))," to trust the server’s signing CA. If the server requires client authentication, you will have to send your own client certificate;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"strong"},"objLoad(SSL_OBJ_X509_CERT, “mycert.pem”, null)"))," to load your client certificate;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"strong"},"objLoad(SSL_OBJ_RSA_KEY,“mykey.pem”, “pass”"),")")," to load the client certificate associated private key protected by the ",Object(n.b)("strong",{parentName:"li"},"pass")," password.")),Object(n.b)("p",null,"Next, you have to call ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"connect()"))," on the context instance to create an SSL instance linked with a previously created socket."),Object(n.b)("p",null,"The SSL handshake starts immediatly to try to establish an authenticated/ciphered communication."),Object(n.b)("p",null,"The SSL handshake succeeded if the ",Object(n.b)("inlineCode",{parentName:"p"},"connect()")," call returns an SSL instance and the ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"handshakeStatus()"))," function call on that instance returns ",Object(n.b)("strong",{parentName:"p"},"SSL_OK"),". Consequently, you may check the subject of the peer certificate with the ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"getCertificateDN()")),"call to identify it and the context could be used to write and read ciphered data until the “dispose” call terminates the SSL communication. The peer receives a protocol alert to signal a link shutdown."),Object(n.b)("p",null,"The SSL write of data returns the amount of bytes written or an error if the writing failed. The SSL read of data may return ",Object(n.b)("strong",{parentName:"p"},"SSL_OK")," that indicates that the read is not yet terminated and may be called again to achieve the reading of a block of decipherable data."),Object(n.b)("h2",{id:"references"},"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"For more details, check out the ",Object(n.b)("strong",{parentName:"li"},"totalcross.net.ssl")," package ",Object(n.b)("a",i({parentName:"li"},{href:"https://rs.totalcross.com/doc/index.html"}),"JavaDocs"),".")))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/apis/https-and-ssl.md"}}),l.isMDXComponent=!0},yrnD:function(e,t,a){e.exports=a.p+"static/https_ssl-2.2-f83534f2848656288ab0ee7367122643.jpg"}}]);
//# sourceMappingURL=component---src-docs-md-apis-https-and-ssl-md-dd04709a3abfc09a09eb.js.map