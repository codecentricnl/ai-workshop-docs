"use strict";(self.webpackChunkai_workshop_docs=self.webpackChunkai_workshop_docs||[]).push([[134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Opdracht 1",c={unversionedId:"opdracht1",id:"opdracht1",title:"Opdracht 1",description:"Opdracht 1.1",source:"@site/docs/2.opdracht1.md",sourceDirName:".",slug:"/opdracht1",permalink:"/ai-workshop-docs/docs/opdracht1",draft:!1,editUrl:"https://github.com/codecentricnl/ai-workshop-docs/docs/2.opdracht1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introductie",permalink:"/ai-workshop-docs/docs/intro"},next:{title:"Opdracht 2",permalink:"/ai-workshop-docs/docs/opdracht2"}},d={},l=[{value:"Opdracht 1.1",id:"opdracht-11",level:2},{value:"Opdracht 1.2",id:"opdracht-12",level:2},{value:"Opdracht 1.3",id:"opdracht-13",level:2}],s={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opdracht-1"},"Opdracht 1"),(0,a.kt)("h2",{id:"opdracht-11"},"Opdracht 1.1"),(0,a.kt)("p",null,"Om Behaviour Driven Development uit te voeren moeten we eerst een test bestand genereren.\nDit kan in een framework zoals Cucumber of Gerhkin.\nIn deze frameworks kan je rechtstreeks handelingen uitschrijven in leesbare zinnen die omschrijven wat de gebruiker doet.\nEen voorbeeld van een Cucumber file ziet er uit alsvoort:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Scenario: Addition\n    Given I have entered 2 into the calculator\n    When I press add\n    When I have entered 3 into the calculator\n    Then the result should be 5 on the screen\n")),(0,a.kt)("p",null,"Hierin wordt beschreven hoe het gedrag van een gebruiker is als deze een som wil maken in een rekenmachine met de verwachte uitkomst."),(0,a.kt)("p",null,"ChatGPT is een chatbot ontwikkelt door OpenAI op basis van het model GPT-3.5. Dit is momenteel een van de grootste/krachtigste AI language modellen die er bestaan op het moment. Een language model is een algoritme dat in feite alles wat betreft taal kan begrijpen.\nStart je met een nieuw project? Dan heeft ChatGPT geen context nodig. Heb je al een project maar wil je dit uitbereiden met nieuwe testcases? Dan heb je wel wat context nodig. Dit komt verder op in de workshop naar boven."),(0,a.kt)("p",null,"Het doel voor de eerste opdracht is om 10 testcases te laten genereren door ChatGPT voor het maken van een rekenmachine. "),(0,a.kt)("h2",{id:"opdracht-12"},"Opdracht 1.2"),(0,a.kt)("p",null,"Nu je een Cucumber file hebt, kan je een bestand aan maken in je IDE onder de folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- src\n  - test\n    - java\n    - resources\n      - features\n        - my_feature.feature\n")),(0,a.kt)("p",null,"Vervolgens kan je in je ",(0,a.kt)("inlineCode",{parentName:"p"},"src/test/java/com/example/calculator")," een bestand aanmaken waarin de verschillende stappen van het cucumber bestand beschreven worden met de juist java code er bij."),(0,a.kt)("p",null,"Dan gaan we nu aan de slag met Github Copilot. Github Copilot is ook een language model net als ChatGPT, echter is Copilot meer gebaseert op code completion dan voor teksten schrijven.\nHet mooie aan Copilot is dat je het op verschillende manieren kan gebruiken. Je kan een stuk code schrijven die afgemaakt wordt door Copilot, maar je kan ook in een regel comentaar neerzetten wat voor functionaliteit wilt hebben en dan kan Copilot dit ook genereren.\nCopilot kan ook context van een project meenemen in het genereren van de code. Zo worden de juist codeconventions meegenomen."),(0,a.kt)("p",null,"Om de juiste stepfile te genereren maak een commentaar regel aan binnen de class die je net hebt aangemaakt.\n",(0,a.kt)("inlineCode",{parentName:"p"},"// Create the methods for the my_feature.feature file"),". Vervolgens kan je door op ",(0,a.kt)("inlineCode",{parentName:"p"},"Tab")," te drukken de code accepteren."),(0,a.kt)("p",null,"Het is ook mogelijk dat de code niet correct is, dan kan je via de Github Copilot extension andere versies van de code vinden.\n",(0,a.kt)("img",{alt:"img.png",src:n(2406).Z,width:"613",height:"594"})),(0,a.kt)("h2",{id:"opdracht-13"},"Opdracht 1.3"),(0,a.kt)("p",null,"Zodra je de test code hebt geschreven kan je een nieuw bestand aanmaken voor de Calculator code.\nDit kan je ook doen aan de hand van Github Copilot. Maak een bestand aan onder het pad ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java/com/examples/calculator")," genaamd ",(0,a.kt)("inlineCode",{parentName:"p"},"Calculator.java"),".\nGeef aan in het commentaar ",(0,a.kt)("inlineCode",{parentName:"p"},"// Create the calculator methods used in the test"),". Dit moet er voor zorgen dat de code gegenereerd word."))}p.isMDXComponent=!0},2406:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/img-4bcd049d6c4fe7afa76a8ec1e6863865.png"}}]);