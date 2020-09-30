(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{fi3z:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a("k1TG"),n=a("8o2o"),o=(a("q1tI"),a("7ljp")),i=a("hhGP"),b=(a("qKvR"),{});void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/md/developers-area/branch-workflow.md"}});var l={_frontmatter:b},c=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"branch-workflow"},"Branch workflow"),Object(o.b)("p",null,"Understand our git workflow"),Object(o.b)("h2",{id:"types"},"Types"),Object(o.b)("p",null,"There are some types of branches in our repository, they are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Feature"),": used to implement new features. Can be started from an issue. Started at the source of the problem ","(","commit",")"," from the source version. The prefix is ",Object(o.b)("inlineCode",{parentName:"li"},"feature-"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Fix"),": used to fix bugs and code smells. Can be started from an issue. Started at the source of the problem ","(","commit",")"," from the source version. Fix takes precedence over the feature and should be resolved quickly and has the same process. The prefix is: ",Object(o.b)("inlineCode",{parentName:"li"},"fix-"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Hotfix"),": special branches for cases of emergency corrections, are used to quickly patch production releases. The prefix is ",Object(o.b)("inlineCode",{parentName:"li"},"hotfix-"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Develop"),": ",Object(o.b)("strong",{parentName:"li"},"WIP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Master"),": ",Object(o.b)("strong",{parentName:"li"},"WIP"))),Object(o.b)("h2",{id:"rebase-before-merge"},Object(o.b)("strong",{parentName:"h2"},"Rebase before merge")),Object(o.b)("p",null,"In summary:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open branch ",Object(o.b)("inlineCode",{parentName:"li"},"feature-x"),";"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"develop"),"does not stop production ;"),Object(o.b)("li",{parentName:"ol"},"Finish ",Object(o.b)("inlineCode",{parentName:"li"},"feature-x"),";"),Object(o.b)("li",{parentName:"ol"},"Rebase ",Object(o.b)("inlineCode",{parentName:"li"},"feature-x")," into ",Object(o.b)("inlineCode",{parentName:"li"},"develop"),";"),Object(o.b)("li",{parentName:"ol"},"Test integration;"),Object(o.b)("li",{parentName:"ol"},"Merge request ","(","delete the branch",")",".")),Object(o.b)("p",null,"The reasons for this are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Anticipate integration;"),Object(o.b)("li",{parentName:"ul"},"Maintain a more linear history;"),Object(o.b)("li",{parentName:"ul"},"Commit squash situation ","(","compile multiples commits in an unique commit",")",".")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/md/developers-area/branch-workflow.md"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-md-developers-area-branch-workflow-md-4dfdcd18174f36d014ba.js.map