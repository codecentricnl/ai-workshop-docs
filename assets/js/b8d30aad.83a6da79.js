"use strict";(self.webpackChunkai_workshop_docs=self.webpackChunkai_workshop_docs||[]).push([[439],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},i="Voorbereidingen",l={unversionedId:"python/voorbereidingen",id:"python/voorbereidingen",title:"Voorbereidingen",description:"ChatGPT account",source:"@site/docs/python/2.voorbereidingen.md",sourceDirName:"python",slug:"/python/voorbereidingen",permalink:"/ai-workshop-docs/docs/python/voorbereidingen",draft:!1,editUrl:"https://github.com/codecentricnl/ai-workshop-docs/docs/python/2.voorbereidingen.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"Introductie Python",permalink:"/ai-workshop-docs/docs/python/intro"},next:{title:"Opdracht 1: Rekenmachine",permalink:"/ai-workshop-docs/docs/python/opdracht1"}},s={},p=[{value:"ChatGPT account",id:"chatgpt-account",level:2},{value:"Python installeren",id:"python-installeren",level:2},{value:"IDE",id:"ide",level:2},{value:"Project aanmaken in PyCharm",id:"project-aanmaken-in-pycharm",level:2},{value:"Project aanmaken in Visual Studio Code",id:"project-aanmaken-in-visual-studio-code",level:2},{value:"Installeer extensions voor Visual Studio Code",id:"installeer-extensions-voor-visual-studio-code",level:2},{value:"Packages installeren",id:"packages-installeren",level:2}],c={toc:p};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"voorbereidingen"},"Voorbereidingen"),(0,o.kt)("h2",{id:"chatgpt-account"},"ChatGPT account"),(0,o.kt)("p",null,"Maak een account aan op ",(0,o.kt)("a",{parentName:"p",href:"https://chat.openai.com/"},"ChatGPT")),(0,o.kt)("h2",{id:"python-installeren"},"Python installeren"),(0,o.kt)("p",null,"Volg de installatie-instructies voor Python\nvoor ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/install-python-windows-10"},"Windows"),"\nof ",(0,o.kt)("a",{parentName:"p",href:"https://www.makeuseof.com/how-to-install-python-on-mac/"},"macOS"),". Controleer in de instructies welk versie geschikt\nis voor jouw OS."),(0,o.kt)("h2",{id:"ide"},"IDE"),(0,o.kt)("p",null,"Zorg dat je een ontwikkelomgeving (IDE) ge\xefnstalleerd hebt. Voor Python adviseren wij een van de twee onderstaande\ntools."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/pycharm/download"},"PyCharm")," - wil je dit installeren?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"Visual Studio Code")," - wil je dit installeren?")),(0,o.kt)("h2",{id:"project-aanmaken-in-pycharm"},"Project aanmaken in PyCharm"),(0,o.kt)("p",null,"Open PyCharm en klik op nieuw project. Mocht je PyCharm al hebben ge\xefnstalleerd en je een oudere versie hebt kan het\nzijn dat je de optie krijg om een framework te kiezen zoals in het plaatje hieronder. Selecteer ",(0,o.kt)("inlineCode",{parentName:"p"},"Pure Python")," en geef je\nproject een naam."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project.png",src:t(9056).Z,width:"802",height:"647"})),(0,o.kt)("h2",{id:"project-aanmaken-in-visual-studio-code"},"Project aanmaken in Visual Studio Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Maak een projectmap aan op een locatie naar keuze.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open de projectmap in Visual Studio Code via File -> Add Folder to Workspace"))),(0,o.kt)("h2",{id:"installeer-extensions-voor-visual-studio-code"},"Installeer extensions voor Visual Studio Code"),(0,o.kt)("p",null,"Voor een goede werking van Python in Visual Studio Code is het verstandig om een tweetal extensies te installeren,\nhierdoor krijg je bijvoorbeeld betere linting, debugging en indentation.\nDe volgende extensions moet je hiervoor installeren."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Python Extension Pack"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"extension-python.jpg",src:t(4841).Z,width:"456",height:"575"})),(0,o.kt)("h2",{id:"packages-installeren"},"Packages installeren"),(0,o.kt)("p",null,"Als laatste stap gaan we nog een aantal packages installeren via pip. pip is de package installer voor python. "),(0,o.kt)("p",null,"Open de terminal in PyCharm/Visual Studio Code en installeer de volgende packages aan de hand van deze commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install behave\npip install fastapi\npip install uvicorn\npip install pydantic\npip install requests\n")))}d.isMDXComponent=!0},4841:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/extension-python-1c7e55b61afcc2130fc8340c4bc2d618.jpg"},9056:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/project-60ef827081f5d77863a1732b584084d2.png"}}]);