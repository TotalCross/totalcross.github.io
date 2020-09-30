(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{g2cY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("k1TG"),o=a("8o2o"),s=(a("q1tI"),a("7ljp")),r=a("hhGP"),i=(a("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/developers-area/how-to-store-data-sqlite.md"}});var l={_frontmatter:i},c=r.a;function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)(c,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"local-database---sqlite"},"Local Database - SQLite"),Object(s.b)("h2",{id:"overview"},"Overview"),Object(s.b)("p",null,"To store data locally, TotalCross uses the database named SQLite. The same used in native development for Android."),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sqlite.org/index.html"}),"SQLite")," is an open source SQL database that stores data in a text file on a device. TotalCross comes with the implementation of the SQLite database."),Object(s.b)("p",null,"One of the differentials of TotalCross is that it allows SQLite ",Object(s.b)("strong",{parentName:"p"},"to be built into")," the platform so that the developer does ",Object(s.b)("strong",{parentName:"p"},"NOT")," have to worry about the version of SQLite and the compatibility of the OS version with the database."),Object(s.b)("p",null,"SQLite supports all relational database features. To access this database, you do not need to establish any type of connection to it, such as JDBC, ODBC and others."),Object(s.b)("p",null,"To understand how TotalCross works with SQLite, let's create a simple project in the next steps!"),Object(s.b)("p",null,"Let's now learn how to do CRUD ","(","Create, Read, Update, Delete",")"," with SQLite in TotalCross"),Object(s.b)("p",null,Object(s.b)("img",{alt:"crud-image",src:a("pYK0")})),Object(s.b)("h2",{id:"creating-a-totalcross-project-with-sqlite"},"Creating a TotalCross Project with SQLite"),Object(s.b)("p",null,"Remember that the link to download the source code is in the topic References at the end of this session."),Object(s.b)("p",null,"Let's use the Maven project we created in the chapter \"",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://learn.totalcross.com/learn-totalcross/getting-started/first-totalcross-app"}),"Your Frist TotalCross App"),'" called HelloTC. If you do not have it there and you want to create a ',Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://learn.totalcross.com/learn-totalcross/getting-started"}),"Maven project from the start"),", that's fine!"),Object(s.b)("h3",{id:"project-structure"},"Project Structure"),Object(s.b)("p",null,"As you will learn better from the chapters in the suggested ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://learn.totalcross.com/guideline/suggested-architecture"}),"Architecture "),"and ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://learn.totalcross.com/guideline/suggested-design-patterns"}),"Design Patterns"),", TotalCross suggests following the MVC and DAO standard in creating your applications."),Object(s.b)("p",null,"So let's start by creating three packages:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ui")," - Where will all UI classes stay."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"util")," - Here is the SQLite database creation class"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"dao")," - This is the package that will save all Data Access Object ","(","DB",")",".")),Object(s.b)("p",null,"Once this is done, our project will be structured as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"- HelloTC\n  - src\n    - main\n        - java\n            - dao\n            - ui\n            - util\n")),Object(s.b)("h3",{id:"creating-the-local-database"},"Creating the local database"),Object(s.b)("p",null,"Inside the ",Object(s.b)("strong",{parentName:"p"},"package util")," we will create a class called ",Object(s.b)("strong",{parentName:"p"},"DatabaseManager")," and we will create a ",Object(s.b)("inlineCode",{parentName:"p"},"static")," object of type ",Object(s.b)("inlineCode",{parentName:"p"},"SQLiteUtil")," called ",Object(s.b)("strong",{parentName:"p"},"sqliteUtil"),"."),Object(s.b)("p",null,"That done, inside a static block we will initialize the sqliteUtilpassando as argument ",Object(s.b)("inlineCode",{parentName:"p"},"Settings.appPath"),' and the name of our database in quotation marks. It is important to remember to always put "',Object(s.b)("strong",{parentName:"p"},".db"),'" next to the name.'),Object(s.b)("p",null,"Now let's go to our ",Object(s.b)("inlineCode",{parentName:"p"},"Statement")," ","(","interface used to execute SQL command",")"," to establish the connection with our database and then pass the command to create the cpf table."),Object(s.b)("p",null,"Prior knowledge of SQLite is required to better work with the creation of your application's local database. We recommend this ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://sd.blackball.lv/library/The_Definitive_Guide_to_SQLite_2nd_edition.pdf"}),"pdf")," for you to learn more"),Object(s.b)("p",null,"After that, we finished the first part. Here's how it went:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class DatabaseManager {\n\n    public static SQLiteUtil sqliteUtil;\n\n    static {\n        try {\n            sqliteUtil = new SQLiteUtil(Settings.appPath, "test.db");\n            Statement st = sqliteUtil.con().createStatement();\n            st.execute("create table if not exists person (cpf varchar)");\n            st.close();\n\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),Object(s.b)("p",null,"Now let's create a static method to return our connection to the database so we can use it inside the DAO package when we manipulate data."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public static Connection getConnection() throws SQLException {\n    return sqliteUtil.con();\n}\n")),Object(s.b)("p",null,"And ready. Here's how our connection class with the database below:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class DatabaseManager {\n\n    public static SQLiteUtil sqliteUtil;\n\n    static {\n        try {\n            sqliteUtil = new SQLiteUtil(Settings.appPath, "test.db");\n            Statement st = sqliteUtil.con().createStatement();\n            st.execute("create table if not exists person (cpf varchar)");\n            st.close();\n\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n\n    public static Connection getConnection() throws SQLException {\n        return sqliteUtil.con();\n    }\n}\n\n')),Object(s.b)("h4",{id:"inserting-data-into-the-table"},"Inserting data into the table"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Inside our DAO")," package we will create a ",Object(s.b)("strong",{parentName:"p"},"CPFDAO class"),". Let's call it this because it is the name of our table in the database + DAO as the default name to say that that class corresponds to an access object to the database, in this case the CPF."),Object(s.b)("p",null,"Once this is done, we will create a method for registering the CPF in the local database. For this method, just ask as an argument the CPF of type Stringe then create a connection with the bank and execute the SQLite command passing it as text in the ",Object(s.b)("inlineCode",{parentName:"p"},".executeUpdate"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public void insertCPF(String cpf) throws SQLException {\n    boolean success = false;\n    Connection dbcon = DatabaseManager.getConnection();\n    String sql = "insert into person values(?)";\n    PreparedStatement ps = dbcon.prepareStatement(sql);\n    ps.setString(1, cpf);\n\n    int i = ps.executeUpdate();\n    ps.close();\n\n    if (i > 0) {\n        success = true;\n    } else {\n        success = false;\n    }\n    return success;\n}\n')),Object(s.b)("h3",{id:"reading-local-data"},"Reading local data"),Object(s.b)("p",null,"To make the data of a table not SQLite is very simple, just execute the ",Object(s.b)("strong",{parentName:"p"},"Select")," command through a ",Object(s.b)("inlineCode",{parentName:"p"},"executeQuery"),"to return the data from the table and then create a ",Object(s.b)("inlineCode",{parentName:"p"},"While")," to traverse all rows of the returned table and store that data within a ",Object(s.b)("inlineCode",{parentName:"p"},"ArrayList"),"."),Object(s.b)("p",null,"In the code below you will be able to return all the data registered in the local database. The call and display part for the user is in the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://totalcross.gitbook.io/playbook/learn-totalcross/how-to-store-data-sqlite#overview"}),"UI topic"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public ArrayList<String> getCPF() throws SQLException {\n        ArrayList<String> cpfs = new ArrayList<>();\n\n        try {\n            Connection dbcon = DatabaseManager.getConnection();\n            Statement st = dbcon.createStatement();\n            ResultSet rs = st.executeQuery("select * from person");\n\n            while (rs.next()) {\n                String cpf = rs.getString("cpf");\n                cpfs.add(cpf);\n            }\n            rs.close();\n            st.close();\n        } catch (java.sql.SQLException e) {\n            e.printStackTrace();\n        }\n\n        return cpfs;\n    }\n')),Object(s.b)("h3",{id:"updating-data"},"Updating Data"),Object(s.b)("p",null,"To update the data is also very simple, just pass the SQLite command called Update with the value of the old field and the current field. If you want to better understand how this command works in SQLite, we recommend this ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.sqlitetutorial.net/sqlite-update/"}),"article"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public void updateCPF(String cpf_novo, String cpf_old) throws SQLException {\n        Connection dbcon = DatabaseManager.getConnection();\n        String sql = "UPDATE person SET cpf = " + cpf_old\n                + " WHERE cpf = "+ cpf_novo;\n        PreparedStatement ps = dbcon.prepareStatement(sql);\n        ps.executeUpdate();\n        ps.close();\n}\n')),Object(s.b)("h3",{id:"deleting-data"},"Deleting Data"),Object(s.b)("p",null,"To delete a record, simply execute the command ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.sqlitetutorial.net/sqlite-delete/"}),"Delete")," and pass through the ",Object(s.b)("inlineCode",{parentName:"p"},"PreparedStatement")," the value to be deleted and run through the ",Object(s.b)("inlineCode",{parentName:"p"},"executeUpdate")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public void deleteCPF(String cpf) throws SQLException {\n    Connection dbcon = DatabaseManager.getConnection();\n    String sql = "DELETE from person where cpf = ?";\n    PreparedStatement ps = dbcon.prepareStatement(sql);\n    ps.setString(1, cpf);\n    ps.executeUpdate();\n}\n')),Object(s.b)("h2",{id:"user-interface"},"User Interface"),Object(s.b)("p",null,"In this chapter, our focus is not the user interface but rather learn the basics about SQLite and apply it with TotalCross. Knowing this, let's put here the interface code that we use to build this basic example. If you have any doubts about this most graphic part, we recommend giving a quick read on the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://totalcross.gitbook.io/playbook/components/accordion-container"}),"Components "),"section in our documentation."),Object(s.b)("p",null,"Remembering that everything related to interfaces goes inside the ",Object(s.b)("strong",{parentName:"p"},"UI package")),Object(s.b)("h3",{id:"initial-screen"},"Initial Screen"),Object(s.b)("p",null,"Where we call the method to register the CPF"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.totalcross.sample.ui;\n\nimport java.util.ArrayList;\n\nimport com.totalcross.sample.dao.CPFDAO;\n\nimport totalcross.sql.SQLException;\nimport totalcross.ui.Button;\nimport totalcross.ui.Container;\nimport totalcross.ui.Edit;\nimport totalcross.ui.Label;\nimport totalcross.ui.MainWindow;\nimport totalcross.ui.dialog.MessageBox;\nimport totalcross.ui.event.ControlEvent;\nimport totalcross.ui.event.PressListener;\nimport totalcross.ui.gfx.Color;\nimport totalcross.util.InvalidDateException;\n\npublic class Inicial extends Container {\n    private static Edit maskedEdit;\n    private static Button btnOutlined, btnDeletar, btnVerCPF, btnAtualizar;\n\n    public void initUI() {\n        Label cpfLabel = new Label("Para cadastrar ou deletar, digite o \\nseu CPF:");\n        add(cpfLabel, LEFT + 100, AFTER + 50, PREFERRED, Inicial.PREFERRED);\n\n        maskedEdit = new Edit("999.999.999-99");\n        btnOutlined = new Button("Cadastrar CPF", Button.BORDER_OUTLINED);\n        btnVerCPF = new Button("Ver CPFs Cadastrados", Button.BORDER_OUTLINED);\n        btnAtualizar = new Button("Atualizar CPF", Button.BORDER_OUTLINED);\n        btnDeletar = new Button("Deletar CPF", Button.BORDER_OUTLINED);\n\n        maskedEdit.caption = "";\n        maskedEdit.setMode(Edit.NORMAL, true);\n        maskedEdit.setValidChars(Edit.numbersSet);\n        maskedEdit.transparentBackground = true;\n        maskedEdit.addPressListener(new PressListener() {\n\n            public void controlPressed(ControlEvent event) {\n                if (event.target == maskedEdit && maskedEdit.getText().length() == "999.999.999-99".length()) {\n                    btnOutlined.setEnabled(true);\n                    btnOutlined.setForeColor(Color.BLUE);\n                    btnOutlined.repaintNow();\n                } else {\n                    btnOutlined.setEnabled(false);\n                    btnOutlined.setForeColor(Color.BLACK);\n                    btnOutlined.repaintNow();\n                }\n\n            }\n        });\n\n        btnOutlined.setEnabled(false);\n        btnOutlined.setBackForeColors(Color.BLACK, Color.WHITE);\n        btnVerCPF.setBackForeColors(Color.BLACK, Color.WHITE);\n        btnDeletar.setBackForeColors(Color.BLACK, Color.WHITE);\n        btnAtualizar.setBackForeColors(Color.BLACK, Color.WHITE);\n\n        add(maskedEdit, SAME, AFTER + 50, PREFERRED, Inicial.PREFERRED);\n        add(btnOutlined, LEFT, AFTER + 100, FILL, PREFERRED);\n        add(btnVerCPF, LEFT, AFTER + 30, FILL, PREFERRED);\n        add(btnAtualizar, LEFT, AFTER + 30, FILL, PREFERRED);\n        add(btnDeletar, LEFT, AFTER + 30, FILL, PREFERRED);\n\n        btnDeletar.addPressListener((event) -> {\n            try {\n                deleteCPF();\n            } catch (Exception ee) {\n                MessageBox.showException(ee, true);\n            }\n        });\n\n        btnOutlined.addPressListener((event) -> {\n            try {\n                doInsert();\n            } catch (Exception ee) {\n                MessageBox.showException(ee, true);\n            }\n        });\n\n        btnAtualizar.addPressListener((event) -> {\n            try {\n                MainWindow.getMainWindow().swap(new Update());\n            } catch (Exception ee) {\n                MessageBox.showException(ee, true);\n            }\n        });\n\n        btnVerCPF.addPressListener((event) -> {\n            try {\n                ArrayList<String> cpfs = new ArrayList<>();\n                cpfs = new CPFDAO().getCPF();\n                MessageBox mb;\n                if (cpfs.size() > 0) {\n                    for (int i = 0; i < cpfs.size(); i++) {\n                        mb = new MessageBox((i + 1) + "º CPF Cadastrado", cpfs.get(i));\n                        mb.setBackForeColors(Color.WHITE, Color.BLACK);\n                        mb.popup();\n                    }\n                } else {\n                    mb = new MessageBox("Atenção", "Nenhum CPF foi cadastrado");\n                    mb.setBackForeColors(Color.WHITE, Color.BLACK);\n                    mb.popup();\n                }\n\n            } catch (Exception ee) {\n                MessageBox.showException(ee, true);\n            }\n        });\n    }\n\n    private static void doInsert() throws SQLException, InvalidDateException, java.sql.SQLException {\n        if (maskedEdit.getTextWithoutMask() == "") {\n            MessageBox mb = new MessageBox("Atenção!", "Preencha o campo CPF");\n            mb.setBackForeColors(Color.WHITE, Color.BLACK);\n            mb.popup();\n\n        } else {\n            // simple example of how you can insert data into SQLite..\n            String cpf = maskedEdit.getTextWithoutMask();\n            boolean success = new CPFDAO().insertCPF(cpf);\n\n            if (success) {\n                MessageBox mb = new MessageBox("Atenção!", "CPF:" + cpf + " foi cadastrado com sucesso!");\n                mb.setBackForeColors(Color.WHITE, Color.BLACK);\n                mb.popup();\n            } else {\n                MessageBox mb = new MessageBox("Atenção!", "Erro ao cadastrar");\n                mb.setBackForeColors(Color.WHITE, Color.BLACK);\n                mb.popup();\n            }\n        }\n    }\n\n    private static void deleteCPF() throws java.sql.SQLException {\n        if (maskedEdit.getTextWithoutMask() == "") {\n            MessageBox mb = new MessageBox("Atenção!", "Preencha o campo CPF");\n            mb.setBackForeColors(Color.WHITE, Color.BLACK);\n            mb.popup();\n\n        } else {\n            // simple example of how you can insert data into SQLite..\n            String cpf = maskedEdit.getTextWithoutMask();\n            new CPFDAO().deleteCPF(cpf);\n\n            MessageBox mb = new MessageBox("Atenção!", "CPF:" + cpf + " foi deletado!");\n            mb.setBackForeColors(Color.WHITE, Color.BLACK);\n            mb.popup();\n\n        }\n    }\n}\n')),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Notice that at l",Object(s.b)("strong",{parentName:"li"},"ine 69")," is where we call the ",Object(s.b)("strong",{parentName:"li"},"CPFDAO","(",")",".InsertCPF")," ","(","cpf",")"," and register the CPF entered in the local database."),Object(s.b)("li",{parentName:"ol"},"At ",Object(s.b)("strong",{parentName:"li"},"line 70")," we call the ",Object(s.b)("strong",{parentName:"li"},"getCPF","(",")")," method to read the database data and assign the result to the cpfs array.."),Object(s.b)("li",{parentName:"ol"},"At ",Object(s.b)("strong",{parentName:"li"},"line 135")," we call the ",Object(s.b)("strong",{parentName:"li"},"deleteCPF","(","cpf",")")," method to delete the CPF that was typed.")),Object(s.b)("h3",{id:"update-screen"},"Update Screen"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'package com.totalcross.sample.ui;\n\nimport com.totalcross.sample.dao.CPFDAO;\n\nimport totalcross.ui.Button;\nimport totalcross.ui.Container;\nimport totalcross.ui.Edit;\nimport totalcross.ui.Label;\nimport totalcross.ui.dialog.MessageBox;\nimport totalcross.ui.gfx.Color;\n\npublic class Update extends Container {\n    private Label cpfLabel, cpfLabel1;\n    private Button btnupdate;\n    private Edit maskedEdit, maskedEditCPF;\n\n    public Update() {\n\n    }\n\n    public void initUI() {\n        cpfLabel = new Label("CPF atual:");\n        cpfLabel1 = new Label("Novo CPF:");\n\n        maskedEdit = new Edit("999.999.999-99");\n        maskedEdit.caption = "";\n        maskedEdit.setMode(Edit.NORMAL, true);\n        maskedEdit.setValidChars(Edit.numbersSet);\n        maskedEdit.transparentBackground = true;\n\n        maskedEditCPF = new Edit("999.999.999-99");\n        maskedEditCPF.caption = "";\n        maskedEditCPF.setMode(Edit.NORMAL, true);\n        maskedEditCPF.setValidChars(Edit.numbersSet);\n        maskedEditCPF.transparentBackground = true;\n\n        btnupdate = new Button("Atualizar", Button.BORDER_OUTLINED);\n        btnupdate.setBackForeColors(Color.BLACK, Color.WHITE);\n\n        add(cpfLabel, LEFT + 100, TOP + 50, PREFERRED, Update.PREFERRED);\n        add(maskedEdit, SAME, AFTER + 50, PREFERRED, Inicial.PREFERRED);\n\n        add(cpfLabel1, LEFT + 100, AFTER + 50, PREFERRED, Update.PREFERRED);\n        add(maskedEditCPF, SAME, AFTER + 50, PREFERRED, Inicial.PREFERRED);\n\n        add(btnupdate, LEFT, AFTER + 100, FILL, PREFERRED);\n        btnupdate.addPressListener((event) -> {\n            try {\n                updateCPF();\n            } catch (Exception ee) {\n                MessageBox.showException(ee, true);\n            }\n        });\n\n    }\n\n    private void updateCPF() throws java.sql.SQLException {\n        if (maskedEdit.getTextWithoutMask() == "" || maskedEditCPF.getTextWithoutMask() == "") {\n            MessageBox mb = new MessageBox("Atenção!", "Preencha Todos os Campos");\n            mb.setBackForeColors(Color.WHITE, Color.BLACK);\n            mb.popup();\n\n        } else {\n            // simple example of how you can insert data into SQLite..\n            String cpf_antigo = maskedEdit.getTextWithoutMask();\n            String cpf_novo = maskedEditCPF.getTextWithoutMask();\n            new CPFDAO().updateCPF(cpf_antigo, cpf_novo);\n\n            MessageBox mb = new MessageBox("Atenção!", "CPF:" + cpf_antigo + " foi atualizado para: " + cpf_novo);\n            mb.setBackForeColors(Color.WHITE, Color.BLACK);\n            mb.popup();\n        }\n    }\n\n}\n')),Object(s.b)("h2",{id:"viewing-local-data"},"Viewing local data"),Object(s.b)("p",null,"To obtain the data registered in a SQLite database it is necessary to download a program called ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://sqlitebrowser.org/"}),"DB Browser For SQLite"),"."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"After downloading and installing the program, simply run the file below to ",Object(s.b)("strong",{parentName:"li"},"Open the database")," and then select the .",Object(s.b)("strong",{parentName:"li"},"db")," file that is i",Object(s.b)("strong",{parentName:"li"},"nside your project"),"."),Object(s.b)("li",{parentName:"ul"},'Click "',Object(s.b)("strong",{parentName:"li"},"Browse Data"),'" and then you will be seeing all the records of your SQLite database!')),Object(s.b)("h2",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The entire project can be accessed through our ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/TotalCross/CRUD_SQLite"}),"GitHub")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.sqlitetutorial.net/"}),"SQLite Tutorial"))))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/developers-area/how-to-store-data-sqlite.md"}}),b.isMDXComponent=!0},pYK0:function(e,t,a){e.exports=a.p+"static/totalcross_crud-9dd18478f0fc79b295341302c52bd316.jpg"}}]);
//# sourceMappingURL=component---src-docs-md-developers-area-how-to-store-data-sqlite-md-2dec801b97f354322da3.js.map