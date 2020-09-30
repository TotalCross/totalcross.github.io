(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{D8qX:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return l}));var n=a("k1TG"),o=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("hhGP"),s=(a("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/components/imagecontrol.md"}});var c={_frontmatter:s},b=i.a;function l(t){var e=t.components,a=Object(o.a)(t,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"imagecontrol"},"ImageControl"),Object(r.b)("h3",{id:"overview"},"Overview"),Object(r.b)("p",null,"A control that can show an image bigger than its area and that can be dragged using a pen to show the hidden parts."),Object(r.b)("p",null,"Note that, by default, events ","(","and dragging",")"," are disabled. You must call setEventsEnabled to allow dragging."),Object(r.b)("h3",{id:"source-code"},"Source Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'import java.sql.SQLException;\n\nimport totalcross.db.sqlite.SQLiteUtil;\nimport totalcross.io.IOException;\nimport totalcross.sample.util.Colors;\nimport totalcross.sql.PreparedStatement;\nimport totalcross.sql.Statement;\nimport totalcross.sys.Settings;\nimport totalcross.sys.Vm;\nimport totalcross.ui.Button;\nimport totalcross.ui.Check;\nimport totalcross.ui.Container;\nimport totalcross.ui.Edit;\nimport totalcross.ui.ImageControl;\nimport totalcross.ui.ScrollContainer;\nimport totalcross.ui.dialog.MessageBox;\nimport totalcross.ui.event.ControlEvent;\nimport totalcross.ui.event.Event;\nimport totalcross.ui.gfx.Color;\nimport totalcross.ui.image.Image;\nimport totalcross.ui.image.ImageException;\nimport totalcross.util.InvalidDateException;\n\npublic class Login extends ScrollContainer {\n    private Edit edPass, edLogin;\n    private Check ch;\n    private Button btLogin, btRegister;\n    private ImageControl ic;\n    private SQLiteUtil util;\n\n    public void initUI(){\n        try {\n            setBackForeColors(Colors.BACKGROUND, Colors.ON_BACKGROUND);\n            ic = new ImageControl(new Image("images/logo.png"));\n            ic.scaleToFit = true;\n            ic.centerImage = true;\n            add(ic, LEFT, TOP+100, FILL, PARENTSIZE+30);\n\n            edLogin = new Edit();\n            edLogin.caption = "Login";\n            //edLogin.setBackColor(Color.RED);\n            add(edLogin, CENTER, AFTER+60, PARENTSIZE+90, PREFERRED+30);\n\n            edPass = new Edit();\n            edPass.caption = "Password";\n            //edPass.setBackColor(Color.RED);\n            edPass.setMode(Edit.PASSWORD_ALL);\n            add(edPass, SAME, AFTER+70, PARENTSIZE+90, PREFERRED+30);\n\n            ch = new Check("Remember Me");\n            add(ch, LEFT+86, AFTER+100, PARENTSIZE, PREFERRED+30);\n\n            btLogin = new Button("Login");\n            btLogin.setBackColor(Color.WHITE);\n            add(btLogin, CENTER, AFTER+140, PARENTSIZE+80, PREFERRED+60);\n\n            btRegister = new Button("Register Now");\n            btRegister.transparentBackground = true;\n            btRegister.setBorder(BORDER_NONE);\n            add(btRegister, CENTER, AFTER, PARENTSIZE+30, PREFERRED+20);\n            btRegister.addPressListener(e -> {Vm.exec("url", "http://www.totalcross.com", 0, true);});\n\n            //Creating Database\n            util = new SQLiteUtil(Settings.appPath,"database.db");\n            Vm.debug(util.fullPath);\n\n            Statement st = util.con().createStatement();\n            st.execute("create table if not exists person (login varchar(20), password varchar(20))");\n            st.close();\n\n        } catch (IOException | ImageException | SQLException e) {\n            // TODO Auto-generated catch block\n            e.printStackTrace();\n        }\n    }\n\n    public void onEvent(Event e){\n        try{\n            switch(e.type){\n                case ControlEvent.PRESSED:\n                    if(e.target == btLogin){\n                        doInsert();\n                    }\n            }\n        }catch(Exception ee){\n            MessageBox.showException(ee, true);\n        }\n    }\n\n    private void doInsert() throws SQLException, InvalidDateException, ImageException {\n        if (edLogin.getLength() == 0 || edPass.getLength() == 0){\n            MessageBox mb = new MessageBox("Message","Please fill all fields!",new String[]{"Close"});\n            mb.setBackForeColors(Color.WHITE, Color.BLACK);\n            mb.popup();\n        }else {\n        // simple example of how you can insert data into SQLite..\n            String sql = "insert into person values(?,?)";\n            PreparedStatement st = util.con().prepareStatement(sql);\n            st.setString(1, edLogin.getText());\n            st.setString(2, edPass.getText());\n            st.executeUpdate();\n            st.close();\n\n            MessageBox mbox = new MessageBox(null,"Data inserted successfully!");\n            mbox.setBackForeColors(Color.WHITE, Color.BLACK);\n            mbox.popup();\n\n        }\n    }\n}\n\n')),Object(r.b)("p",null,"Do not forget ",Object(r.b)("strong",{parentName:"p"},"to create a folder"),' called "',Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"images")),'" inside ',Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"/src/main/resources"))," and ",Object(r.b)("strong",{parentName:"p"},"save the logo"),Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/resources/images/alligator.gif"}),Object(r.b)("strong",{parentName:"a"},".")),Object(r.b)("strong",{parentName:"p"},"png image inside it")," ","[","images","]","."),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ImageControl","(","Image img",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs an ImageControl using the given image.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Constructor")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ImageControl","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Constructs with no initial image. You must set the image with the setImage method.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setEventsEnabled","(","boolean enabled",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Pass true to enable dragging and events on the image.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setImage","(","Image img",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the image to the given one. If the image size is different, you must explicitly call")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setRect again if you want to resize the control."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setImage","(","Image img, boolean resetPositions",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the image to the given one, optionally resetting the image position. If the image size is different, you must explicitly call setRect again if you want to resize the control.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"int")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getImageHeight","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the image's height; when scaling, returns the scaled height")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"int")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getImageWidth","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the image's width; when scaling, returns the scaled width.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"Image")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"getImage","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Returns the current image assigned to this ImageControl.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"void")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"setBackground","(","Image img",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sets the given image as a freezed background of this image control.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"moveTo","(","int newX, int newY",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Moves to the given coordinates, respecting the current moving policy regarding")))),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"See the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://rs.totalcross.com/doc/totalcross/ui/ImageControl.html"}),"Java Docs")," for more information."),Object(r.b)("li",{parentName:"ul"},"See the code on ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/TotalCross/TCSample/blob/master/src/main/java/totalcross/sample/components/ui/Login.java"}),"Github"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/components/imagecontrol.md"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-components-imagecontrol-md-fae20330db24993ecb0f.js.map