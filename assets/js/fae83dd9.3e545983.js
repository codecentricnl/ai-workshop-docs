"use strict";(self.webpackChunkai_workshop_docs=self.webpackChunkai_workshop_docs||[]).push([[804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Opdracht 3: Micronaut Application",c={unversionedId:"java/opdracht3",id:"java/opdracht3",title:"Opdracht 3: Micronaut Application",description:"In deze opdracht gaan we aan de hand van Micronaut de Bookstore API opzetten. Micronaut is een lichtgewicht, modulair",source:"@site/docs/java/5.opdracht3.md",sourceDirName:"java",slug:"/java/opdracht3",permalink:"/ai-workshop-docs/docs/java/opdracht3",draft:!1,editUrl:"https://github.com/codecentricnl/ai-workshop-docs/docs/java/5.opdracht3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Opdracht 2: Bookstore",permalink:"/ai-workshop-docs/docs/java/opdracht2"}},p={},d=[{value:"Opdracht 3.1",id:"opdracht-31",level:2},{value:"Opdracht 3.2",id:"opdracht-32",level:2}],l={toc:d};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opdracht-3-micronaut-application"},"Opdracht 3: Micronaut Application"),(0,a.kt)("p",null,"In deze opdracht gaan we aan de hand van Micronaut de Bookstore API opzetten. Micronaut is een lichtgewicht, modulair\nwebapplicatie framework dat is ontworpen om high-performance, schaalbare en cloud-native microservices te bouwen.\nMicronaut biedt een breed scala aan functies en mogelijkheden voor het bouwen van microservices, waaronder ondersteuning\nvoor HTTP/2, reactive programming, distributed tracing, service discovery en cloud-native deployment.\nDit framework is vrij nieuw en daarom is het interessant om een API op te zetten met Micronaut."),(0,a.kt)("h2",{id:"opdracht-31"},"Opdracht 3.1"),(0,a.kt)("p",null,"Maak een derde project aan, selecteer nu Micronaut zoals in de afbeelding hier onder.\n",(0,a.kt)("img",{alt:"micronaut.png",src:n(1577).Z,width:"797",height:"621"})),(0,a.kt)("p",null,"Voor Visual Studio volg dezelfde stappen als vorige opdrachten maar in plaats van Cucumber archtype,\nzoek naar ",(0,a.kt)("inlineCode",{parentName:"p"},"io.github.gasches.archetypes"),", als het goed is komt dan ",(0,a.kt)("inlineCode",{parentName:"p"},"micronaut-service")," naar boven, selecteer deze."),(0,a.kt)("h2",{id:"opdracht-32"},"Opdracht 3.2"),(0,a.kt)("p",null,"Vraag aan ChatGPT of deze een Micronaut applicatie kan ontwikkelen aan de hand van de feature file die in opdracht 2 is\ngegenereerd.\nHier in zal je waarschijnlijk een ",(0,a.kt)("inlineCode",{parentName:"p"},"Book")," en een ",(0,a.kt)("inlineCode",{parentName:"p"},"BookController")," klasse krijgen. Plaats deze bestanden in\nde ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java/com/example/")," directory."),(0,a.kt)("p",null,"Als alles volgens plan verloopt, zou je nu een Micronaut API moeten hebben. Je kan deze draaien door ",(0,a.kt)("inlineCode",{parentName:"p"},"./mvnw mn:run")," uit\nte voeren in de terminal."),(0,a.kt)("h1",{id:"opdracht-33"},"Opdracht 3.3"),(0,a.kt)("p",null,"Tot slot kan je de test van opdracht 2 proberen uit te voeren door ",(0,a.kt)("inlineCode",{parentName:"p"},"./mvnw test")," uit te voeren in de terminal."))}s.isMDXComponent=!0},1577:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/micronaut-59d752cc4ec46e5657a2abd88d89b328.png"}}]);