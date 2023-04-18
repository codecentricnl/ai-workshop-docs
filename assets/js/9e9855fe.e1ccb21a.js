"use strict";(self.webpackChunkai_workshop_docs=self.webpackChunkai_workshop_docs||[]).push([[268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},o="Opdracht 1: Rekenmachine",l={unversionedId:"python/opdracht1",id:"python/opdracht1",title:"Opdracht 1: Rekenmachine",description:"Je zit op je opdracht in een nieuw project. Voor dit project moet een rekenmachine worden gebouwd. Dit moet je doen door",source:"@site/docs/python/3.opdracht1.md",sourceDirName:"python",slug:"/python/opdracht1",permalink:"/ai-workshop-docs/docs/python/opdracht1",draft:!1,editUrl:"https://github.com/codecentricnl/ai-workshop-docs/docs/python/3.opdracht1.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"Voorbereidingen",permalink:"/ai-workshop-docs/docs/python/voorbereidingen"},next:{title:"Opdracht 2: Bookstore",permalink:"/ai-workshop-docs/docs/python/opdracht2"}},p={},d=[{value:"Requirements",id:"requirements",level:3},{value:"1.1 Cucumber Feature file maken.",id:"11-cucumber-feature-file-maken",level:2},{value:"1.2 Maak een step file aan",id:"12-maak-een-step-file-aan",level:2},{value:"1.3 Calculator applicatie",id:"13-calculator-applicatie",level:2},{value:"1.4 run test",id:"14-run-test",level:2},{value:"1.5 Uitbreiden",id:"15-uitbreiden",level:2}],m={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"opdracht-1-rekenmachine"},"Opdracht 1: Rekenmachine"),(0,r.kt)("p",null,"Je zit op je opdracht in een nieuw project. Voor dit project moet een rekenmachine worden gebouwd. Dit moet je doen door\ngebruik te maken van Behaviour-Driven development BDD. Vanuit de business heb je de volgende vier requirements gekregen."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optellen:")," de rekenmachine moet twee of meer getallen bij elkaar op kunnen tellen, met\nondersteuning voor decimalen en negatieve waarden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Aftrekken:")," de rekenmachine moet het ene getal van het andere af kunnen trekken, inclusief\ndecimalen en negatieve waarden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Vermenigvuldiging:")," de rekenmachine moet twee of meer getallen met elkaar kunnen\nvermenigvuldigen, waarbij decimalen en negatieve waarden worden ondersteund.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delen:")," de rekenmachine moet het ene getal door het andere kunnen delen, met ondersteuning voor\ndecimalen en het omgaan met deling door nul-fouten."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE:")," Voordat we gaan beginnen, straks gaan we gebruiken maken van ChatGPT, controleer zelf het\nantwoordt dat wordt teruggegeven door ChatGPT! De gegeneerde code is namelijk niet altijd 100% correct, maar geeft\nje een zetje in de goede richting. Dit zorgt voor een kritische blik op wat je laat genereren.")),(0,r.kt)("h2",{id:"11-cucumber-feature-file-maken"},"1.1 Cucumber Feature file maken."),(0,r.kt)("p",null,"Een feature file beschrijft een scenario in begrijpelijke mensentaal. In die feature file wordt het gewenste gedrag\nbeschreven welke stappen er genomen dienen te worden om tot een bepaald resultaat te komen."),(0,r.kt)("p",null,"Een voorbeeld van een feature file ziet er uit als volgt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"Scenario: Scenarionaam\n  Given I have one pizza\n  And Cut the pizza in 8 slices\n  When I eat 2 slices\n  Then The result is 6 slices left\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Opdracht:")," Genereer een Cucumber feature file met de gegeven requirements in ChatGPT.")),(0,r.kt)("p",null,"Als de feature file is gegenereerd, kan je de gegenereerde code kopi\xebren. Plak de code in een bestand in de hoofdfolder\nwaar ook ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),". Maak dit bestand eerst aan."),(0,r.kt)("h2",{id:"12-maak-een-step-file-aan"},"1.2 Maak een step file aan"),(0,r.kt)("p",null,"Een step file is een bestand dat de implementatie van de stappen beschrijft die in een scenario zijn gedefinieerd."),(0,r.kt)("p",null,"De step file koppelt de stappen uit de Gherkin scenario's aan de daadwerkelijke Python file voor de calculator in dit\ngeval. De step file kan gezien worden als de koppeling tussen De uiteindelijke implementatie en de feature file met\nGherkin."),(0,r.kt)("p",null,"Een step file in Python wordt geschreven als een Python file met behulp van Behave package. Dit bestand bevat methoden\ndie zijn geannoteerd door specifieke Cucumber-annotaties, zoals @Given, @When, @Then, @And en @But."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Opdracht:")," Maak een nieuwe folder aan in de hoofdfolder genaamd ",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Opdracht:")," Maak een nieuw bestand aan in de ",(0,r.kt)("inlineCode",{parentName:"p"},"steps")," folder genaamd ",(0,r.kt)("inlineCode",{parentName:"p"},"stepfile.py"),"."))),(0,r.kt)("p",null,"Aangezien ChatGPT de context van de chat gebruikt, is het niet nodig om opnieuw context mee te geven aan de vraag die\nje stelt aan ChatGPT."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hint:")," Vraag aan ChatGPT of deze de step file wilt genereren in Python en plaats deze in de ",(0,r.kt)("inlineCode",{parentName:"p"},"stepfile.py"),".")),(0,r.kt)("h2",{id:"13-calculator-applicatie"},"1.3 Calculator applicatie"),(0,r.kt)("p",null,"Tot slot, om de cucumber testen te laten slagen is de python code nodig voor de calculator zelf. Dit kan je doen op\ndezelfde manier als bij opdracht 1.1 & 1.2."),(0,r.kt)("p",null,"Verander de naam van ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," naar ",(0,r.kt)("inlineCode",{parentName:"p"},"Calculator.py"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Opdracht:")," Plak de gegeneerde code door ChatGPT in het ",(0,r.kt)("inlineCode",{parentName:"li"},"Calculator.java")," bestand.")),(0,r.kt)("h2",{id:"14-run-test"},"1.4 run test"),(0,r.kt)("p",null,"Om te kijken of de testen nu slagen kan je de Cucumber test file uitvoeren door rechtermuisknop te drukken op\nde ",(0,r.kt)("inlineCode",{parentName:"p"},"calculator.feature")," en op ",(0,r.kt)("inlineCode",{parentName:"p"},"run feature: calculator")," te drukken."),(0,r.kt)("p",null,"Als alles in een keer goed gaat, heb je nu geen faalden testen. Echter bestaat er een mogelijkheid dat er toch iets fout\ngaat.\nAls dit fout gaat kan je proberen om de foutmelding in ChatGPT te geven samen met de methode waar het fout gaat. Dan kan\nChatGPT dit in sommige gevallen oplossen."),(0,r.kt)("p",null,"Lukt het niet? Probeer er dan achter  te komen wat er mis gaat en het zelf op te lossen of vraag iemand met een\nthe/experts-shirt om hulp."),(0,r.kt)("h2",{id:"15-uitbreiden"},"1.5 Uitbreiden"),(0,r.kt)("p",null,"Herhaal bovenstaande stappen en voeg extra functionaliteit toe aan de calculator voor de volgende 6 requirements."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Machtsverheffing:")," De rekenmachine moet een methode bieden om een getal tot een gegeven macht te verheffen,\ninclusief fractionele en negatieve exponenten.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Vierkantswortel:")," De rekenmachine moet een methode hebben om de vierkantswortel van een gegeven getal te berekenen,\nmet de mogelijkheid voor zowel positieve als negatieve invoerwaarden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Functie van een getal:")," De rekenmachine moet een methode bieden om de functie van een niet-negatief geheel getal te\nberekenen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Logaritmes:")," De rekenmachine moet methoden bevatten om natuurlijke logaritmes (basis e) en gemeenschappelijke\nlogaritmes (basis 10) van positieve getallen te berekenen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Trigonometrie:")," De rekenmachine moet methoden bieden om de sinus, cosinus en tangens van hoeken te berekenen, met\nondersteuning voor zowel radialen als graden.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Geheugenfuncties:")," De rekenmachine moet methoden hebben om een waarde in het geheugen op te slaan, op te roepen en\nte wissen, zodat gebruikers gemakkelijker complexe berekeningen kunnen uitvoeren."))))}u.isMDXComponent=!0}}]);