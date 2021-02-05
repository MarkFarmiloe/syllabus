(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(252)),o={id:"instructors",title:"Instructor Notes",sidebar_label:"Instructor Notes"},s={unversionedId:"react/week-2/instructors",id:"react/week-2/instructors",isDocsHomePage:!1,title:"Instructor Notes",description:"Questions and Help",source:"@site/docs/react/week-2/mentors.md",slug:"/react/week-2/instructors",permalink:"/react/week-2/instructors",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/week-2/mentors.md",version:"current",sidebar_label:"Instructor Notes",sidebar:"React",previous:{title:"Coursework",permalink:"/react/week-2/homework"},next:{title:"Learning Objectives",permalink:"/react/week-3/learning-objectives"}},l=[{value:"Questions and Help",id:"questions-and-help",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Solutions",id:"solutions",children:[]},{value:"Notes for Mentors",id:"notes-for-mentors",children:[{value:"Handling Events",id:"handling-events",children:[]},{value:"Re-Rendering Components",id:"re-rendering-components",children:[]},{value:"State",id:"state",children:[]},{value:"Interactive Example Index",id:"interactive-example-index",children:[]},{value:"Exercise solutions",id:"exercise-solutions",children:[]}]}],c={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"questions-and-help"},"Questions and Help"),Object(i.b)("p",null,"We highly recommend joining the relevent Slack Channel for this module. In this channel you can ask questions, get advice from previous teachers and discuss lesson content."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://codeyourfuture.slack.com/archives/C76GQDRH9"}),"cyf-module-node")),Object(i.b)("p",null,"For general Syllabus feedback and help you can post in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://codeyourfuture.slack.com/archives/C012UUW69S8"}),"cyf-syllabus")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.google.com/forms/d/e/1FAIpQLSf3NisqE5bfJyMXm41W_kW9oSLQVUfaatvHS-gNTh-QXbjWJQ/viewform"}),"Quiz - React Week 2 - 28/05/2020"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Created by Chris Owen")))),Object(i.b)("h2",{id:"solutions"},"Solutions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/pokedex-solution"}),"PokeDex In-Class - Exercise Solution - 05/06/2020"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Created by London and Ali Smith"),Object(i.b)("li",{parentName:"ul"},"These are now embedded into the syllabus itself, see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/syllabus/tree/master/docs/react/week-2/demos"}),Object(i.b)("inlineCode",{parentName:"a"},"demos")," folder")," for source"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/Hotel-React-solution"}),"Hotel Homework - Solution - 24/07/2020"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Created by Manchester and Dorota Sobkow")))),Object(i.b)("h2",{id:"notes-for-mentors"},"Notes for Mentors"),Object(i.b)("h3",{id:"handling-events"},"Handling Events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Function references vs function calls is a very common source of confusion",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It is worth recapping again to ensure that students really do understand it"))),Object(i.b)("li",{parentName:"ul"},"Passing event handler function references",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The concept trips up a lot of students - will try to immediately call the function when passing to an event handler (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"onClick={this.foo()})")))),Object(i.b)("li",{parentName:"ul"},"Passing functions as props",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This concept isn't really that much different from the section above, but passing across components does often confuse students")))),Object(i.b)("h3",{id:"re-rendering-components"},"Re-Rendering Components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The goal of this section is to demonstrate React re-rendering but ",Object(i.b)("strong",{parentName:"li"},"without using state"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"i.e. showing that React will call component functions again to get updated JSX after props/state changes"),Object(i.b)("li",{parentName:"ul"},"Teaching separately allows us to emphasise that setting state has 2 jobs: updating the state and triggering React to re-render"),Object(i.b)("li",{parentName:"ul"},"It is also convenient to (briefly) discuss how the virtual DOM is efficient"))),Object(i.b)("li",{parentName:"ul"},"Re-rendering demo",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Focus on the ",Object(i.b)("inlineCode",{parentName:"li"},"Counter")," component primarily, in particular the ",Object(i.b)("inlineCode",{parentName:"li"},"console.log")),Object(i.b)("li",{parentName:"ul"},"The code in ",Object(i.b)("inlineCode",{parentName:"li"},"index.js")," is just a way of forcing a re-render without using state. But we don't really want students to learn the bad habits here (we want them to ultimately learn state), so they are hidden away.")))),Object(i.b)("h3",{id:"state"},"State"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This section takes a bit of a risk - it deliberately shows the wrong way trying to do state, then refactors to fix it"),Object(i.b)("li",{parentName:"ul"},"Before fixing the problem, something to emphasise is the moment when we start using the virtual DOM for the first time",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When we trigger a manual re-render to ",Object(i.b)("inlineCode",{parentName:"li"},"ReactDOM.render()")),Object(i.b)("li",{parentName:"ul"},"But we are updating the DOM here - we mentioned in lesson 1 that this was hard, and now we've got an easy way of updating it. This is the true power of React"),Object(i.b)("li",{parentName:"ul"},"The demo is not very impressive, so it's easy for the students to miss"))),Object(i.b)("li",{parentName:"ul"},"We cover the problems with using a global variable, so hopefully that is enough to prevent the students copy/pasting the wrong way",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ensure that you emphasise this is the wrong way to do state"))),Object(i.b)("li",{parentName:"ul"},"Demonstrate the app with multiple counters",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Shows that each components remembers their own state separate to other components"))),Object(i.b)("li",{parentName:"ul"},"When to use props or state?",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"My rule of thumb: use props until you need it to change over time, then switch to state"))),Object(i.b)("li",{parentName:"ul"},"Container components",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"To be honest I kept this in here as a hold over from previous lessons"),Object(i.b)("li",{parentName:"ul"},"Arguably it's less relevant recently in React"),Object(i.b)("li",{parentName:"ul"},"If you're short on time then it can be skipped")))),Object(i.b)("h3",{id:"interactive-example-index"},"Interactive Example Index"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/react-2-recap-7zvk9n1950?file=/src/HelloMentor.js"}),"Recap")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jsbin.com/xudukezaje/edit?js,console"}),"Function reference vs function call recap")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/event-handlers-cc3h7?file=/src/ClickLogger.js"}),"Event Handlers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/passing-functions-as-props-zqlnmo16y3?file=/src/ClickLoggerApp.js"}),"Passing Functions as Props")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/force-component-re-rendering-llow115pll?file=/src/Counter.js"}),"Re-Rendering Components")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/component-variables-resetting-on-re-render-101h1?file=/src/Counter.js"}),"Component variables resetting on re-render")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/importing-usestate-hook-8jr9f?file=/src/App.js"}),"Importing useState Hook")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/initialising-and-rendering-usestate-variables-zgszi?file=/src/Counter.js"}),"Initialising and rendering useState variables")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jsbin.com/lihajikesi/edit?js,console"}),"Using array index syntax")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jsbin.com/keparevoqe/edit?js,console"}),"Using array destructuring")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/usestate-counter-lorv5?file=/src/Counter.js"}),"Updating state")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/dont-mutate-state-hex49?file=/src/Counter.js"}),"Don't Mutate State")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/multiple-state-variables-piq5w?file=/src/FruitCounter.js"}),"Multiple state variables")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/when-to-use-props-or-state-9wl90npk4?file=/src/Greeting.js"}),"When to Use Props or State"))),Object(i.b)("h3",{id:"exercise-solutions"},"Exercise solutions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codesandbox.io/s/bestpokemonfetcher-exercise-finishing-point-ght8k?file=/src/BestPokemonFetcher.js"}),Object(i.b)("inlineCode",{parentName:"a"},"BestPokemonFetcher")," exercise (completed)"))))}b.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);