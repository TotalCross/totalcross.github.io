(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{ZIb7:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t("k1TG"),o=t("8o2o"),a=(t("q1tI"),t("7ljp")),i=t("hhGP"),s=(t("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/guides/app-architecture/suggested-design-patterns/mvc.md"}});var c={_frontmatter:s},l=i.a;function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(l,Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"mvc-architecture-pattern"},"MVC Architecture Pattern"),Object(a.b)("p",null,"This architecture pattern will assign and separate the objects into responsibilities: ",Object(a.b)("strong",{parentName:"p"},"Model"),", ",Object(a.b)("strong",{parentName:"p"},"View")," and ",Object(a.b)("strong",{parentName:"p"},"Controller")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Model:")," will represent an object, such as a person."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"View:")," The view will represent the model data."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Controller:")," It controls the data of the model object and controls the visualization.")),Object(a.b)("h3",{id:"structures"},"Structures"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"└── src\n    └── main\n        └── java\n            └── com.your_company_name.your_name_app\n                └── model\n                    └── Person\n                └── view\n                    └── HomeView\n                └── controller\n                    └── HomePresenter\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'package com.totalcross.mvc.model;\n\npublic class Person {\n    private String name;\n    private String gender;\n\n    public Person(String name, String gender) {\n        this.name = name;\n        this.gender = gender;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getGender() {\n        return gender;\n    }\n\n    public void setGender(String gender) {\n        this.gender = gender;\n    }\n\n    @Override\n    public String toString() {\n        return "n: " + name + " g: " + gender;\n    }\n}\n\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'package com.totalcross.mvc.view;\n\nimport com.totalcross.mvc.controller.HomePresenter;\nimport com.totalcross.mvc.model.Person;\nimport totalcross.ui.Button;\nimport totalcross.ui.Edit;\nimport totalcross.ui.Label;\nimport totalcross.ui.MainWindow;\n\npublic class HomeScreen extends MainWindow {\n\n   //Create a variable to store the interface of the class.\n    Presenter presenter;\n\n    Person person [] = new Person[5];\n    private int gap = 15;\n\n/*\nThe constructor will be responsible for instantiating the HomePresenter class\nwhich will link the presenter of the interface with the controller\n*/\n    public HomeScreen(){\n        new HomePresenter(this);\n    }\n\n    @Override\n    public void initUI() {\n\n        Label lbl = new Label("Person");\n        add(lbl, CENTER, TOP + gap);\n\n        Edit editName = new Edit();\n        editName.caption = "Insert your name here";\n        add(editName, LEFT, AFTER + gap);\n\n        Edit editGender = new Edit();\n        editGender.caption = "Insert your gender here";\n        add(editGender, LEFT, AFTER + gap);\n\n        Button btn = new Button("Create Person");\n        //Assigning the onCreate method to the btn button\n        btn.addPressListener( e -> presenter.onCreate(person, editName, editGender));\n        add(btn, RIGHT, AFTER + gap);\n    }\n\n    //Creating the interface and the methods that will be used on this screen\n    public interface Presenter{\n        void onCreate(Person[] person, Edit name, Edit gender);\n    }\n\n    //Method that allows you to add the Controller Presenter in the view\n    public void addListener(Presenter presenter) {\n        this.presenter = presenter;\n    }\n\n\n}\n\n\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'package com.totalcross.mvc.controller;\n\nimport com.totalcross.mvc.model.Person;\nimport com.totalcross.mvc.view.HomeScreen;\nimport totalcross.ui.Edit;\nimport totalcross.ui.Toast;\n\npublic class HomePresenter implements HomeScreen.Presenter {\n/*\n    In the constructor the Presenter link of the controller is realized\n    with the view.\n*/\n    public HomePresenter(HomeScreen home){\n        home.addListener(this);\n    }\n\n    //The method that will be used on the button is implemented.\n    @Override\n    public void onCreate(Person[] person, Edit name, Edit gender) {\n        for (int i = 0; i < person.length; i++) {\n            if (person[i] == null){\n                person[i] = new Person(name.getText(), gender.getText());\n                break;\n            }\n        }\n\n        String persons = "";\n        for (Person p: person) {\n            persons += p + " / ";\n        }\n        Toast.show(persons,2000);\n        System.out.println(persons);\n    }\n}\n\n')),Object(a.b)("h2",{id:"referencies"},"Referencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"See more about MVC in ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.geeksforgeeks.org/mvc-design-pattern/"}),"Geeks for Geeks"),".")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/guides/app-architecture/suggested-design-patterns/mvc.md"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-guides-app-architecture-suggested-design-patterns-mvc-md-2f8938c0fd2325098079.js.map