(function(){"use strict";var e={8627:function(e,a,s){var i=s(9242),l=s(3396),t=s(4870),_=s(7139);const n=(0,l.uE)('<ul class="header__nav"><li class="header__nav_item"><a class="header__nav_link" href="#">Новости</a></li><li class="header__nav_item"><a class="header__nav_link" href="#">Телепроекты</a></li><li class="header__nav_item"><a class="header__nav_link" href="#">Реклама</a></li><li class="header__nav_item this--submenu js_mob_accordion"><div class="header__nav_item_title js_mob_accordion_head">Онлайн <div class="header__nav_item_arrow arrow"></div></div><ul class="header__submenu js_mob_accordion_body"><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li></ul></li><li class="header__nav_item"><a class="header__nav_link" href="#">Программа передач</a></li><li class="header__nav_item this--submenu js_mob_accordion"><div class="header__nav_item_title js_mob_accordion_head">Еще <div class="header__nav_item_arrow arrow"></div></div><ul class="header__submenu js_mob_accordion_body"><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню длинный</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li><li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню длинный длинный</a></li></ul></li></ul><div class="header__social social"><div class="social__title">Подписывайтесь на нас:</div><div class="social__links"><a class="social__link this--youtube" href="#"></a><a class="social__link this--fb" href="#"></a><a class="social__link this--vk" href="#"></a><a class="social__link this--ok" href="#"></a><a class="social__link this--inst" href="#"></a></div></div>',2),o=[n];var r={__name:"HeaderNav",props:{"menu-open":Boolean},setup(e){const a=e,{menuOpen:s}=(0,t.BK)(a),i={mounted:e=>{const a=e.querySelectorAll(".js_mob_accordion");function s(e,a,s){for(let t=0;t<e.length;t++){let _=e[t].querySelector(a),n=e[t].querySelector(s);n.classList.contains("open")||window.innerWidth>=1024?n.style.height="auto":n.style.height="0",_.onclick=()=>{window.innerWidth<1024&&(n.classList.contains("open")?i(n,_):l(n,_))}}}function i(e,a){a.classList.remove("active"),e.classList.remove("open"),e.style.height="0"}function l(e,a){a.classList.add("active"),e.classList.add("open"),e.style.height=`${e.scrollHeight}px`}s(a,".js_mob_accordion_head",".js_mob_accordion_body"),window.addEventListener("resize",(()=>{s(a,".js_mob_accordion_head",".js_mob_accordion_body")}))}};return(e,a)=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",{class:(0,_.C_)(["header__bottom",{open:(0,t.SU)(s)}])},o,2)),[[i]])}};const c=r;var d=c;const u={class:"header"},v={class:"container"},m={class:"header__content"},h={class:"header__top"},f=(0,l._)("a",{class:"header__top_link btn",href:"#"},"Предложить новость",-1),b={class:"header__top_group"},p=(0,l._)("a",{class:"header__top_tel",href:"tel:83513651711"},"8 (3513) 65-17-11",-1),k=(0,l._)("button",{class:"header__search"},[(0,l._)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{d:"M13.2094 11.6186C14.0951 10.409 14.6249 8.92328 14.6249 7.31261C14.6249 3.28064 11.3444 0.00012207 7.31245 0.00012207C3.28048 0.00012207 0 3.28064 0 7.31261C0 11.3446 3.28052 14.6251 7.31248 14.6251C8.92315 14.6251 10.409 14.0952 11.6186 13.2094L16.4092 18L18 16.4092C18 16.4092 13.2094 11.6186 13.2094 11.6186ZM7.31248 12.3751C4.52086 12.3751 2.25001 10.1042 2.25001 7.31261C2.25001 4.52098 4.52086 2.25013 7.31248 2.25013C10.1041 2.25013 12.375 4.52098 12.375 7.31261C12.375 10.1042 10.1041 12.3751 7.31248 12.3751Z",fill:"#373334"})])],-1),g=(0,l._)("span",null,null,-1),y=[g];var w={__name:"Header",setup(e){let a=(0,t.iH)(!1),s=(0,t.iH)(!1),i=(0,t.iH)(!1);const n=()=>{a.value=!a.value,s.value=!s.value,i.value=!i.value,document.body.classList.toggle("scroll-lock")},o=e=>{e.target.closest(".header__bottom")||(a.value=!1,s.value=!1,i.value=!1,document.body.classList.remove("scroll-lock"))};return(e,r)=>((0,l.wg)(),(0,l.iD)("header",u,[(0,l._)("div",v,[(0,l._)("div",m,[(0,l._)("div",h,[f,(0,l._)("div",b,[p,k,(0,l._)("div",{class:(0,_.C_)(["header__burger",{"burger-open":(0,t.SU)(a)}]),onClick:n},y,2)])]),(0,l._)("div",{class:(0,_.C_)(["header__bottom_mob_bg",{active:(0,t.SU)(i)}]),onClick:o},null,2),(0,l.Wm)((0,t.SU)(d),{"menu-open":(0,t.SU)(s)},null,8,["menu-open"])])])]))}};const j=w;var C=j,S=s.p+"media/detail_video.04f212b1.mp4",x=s.p+"img/poster.6615b5e8.jpg";const O={class:"detail"},U={class:"container"},D={class:"detail__content"},L=(0,l.uE)('<h1 class="detail__title">Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции. Роддом Златоуста вновь откроет свои двери 8 февраля</h1><div class="detail__breadcrumbs breadcrumbs"><div class="breadcrumbs_wr"><a class="breadcrumb this--link" href="/">Главная<span>/</span></a><a class="breadcrumb this--link" href="/">Новости<span>/</span></a><div class="breadcrumb">Медицина</div></div></div>',2),H={class:"detail__small_container"},E=(0,l.uE)('<div class="detail__tags tags"><div class="tags_group"><div class="tag">Медицина</div></div><div class="tags_group"><div class="tag this--date">29/01/2021</div></div></div>',1),W={class:"detail__default"},B=(0,l._)("h3",null,"Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят в профильный режим. Приказ Министерство здравоохранения Челябинской области выпустило 27 января.",-1),M=(0,l._)("br",null,null,-1),q=(0,l._)("p",null,"Напомним, перепрофилировать родильный дом решили в связи с ежедневным большим приростом златоустовцев, заболевших ковид-19. За это время лечение на госпитальной базе прошли свыше 1000 пациентов.",-1),Z=(0,l._)("h3",null,"Александр Дорофеев",-1),z=(0,l._)("span",null,"главный врач родильного дома г. Златоуста:",-1),F=(0,l._)("br",null,null,-1),P=(0,l._)("p",null,"«На сегодняшний день в МПЦ находятся 46 больных. Большая часть из них будет переведена на базу квартала Медик и меньшая часть – на базу долечивания, в район метзавода. В воскресенье к нам приезжает дезостанция для обработки всех помещений. С 1 по 7 число проводится заключительная дезинфекция всего родильного дома. С 8 числа мы начинаем принимать беременных и рожениц нашего города и горнозаводской зоны».",-1),T=(0,l._)("hr",null,null,-1),A=(0,l._)("p",null,"Подготовка к возвращению профильной деятельности больниц проводится тщательным образом. Это полная дезинфекция помещений, забор ряда лабораторных анализов. И только после разрешения всех инстанций медицинское учреждение поступает к работе. Златоуст — не единственный город, где в связи со стабилизацией обстановки с коронавирусной инфекцией медицинские объекты возвращаются к плановому приёму пациентов. Решение по сокращению коечных мест для больных ковидом принимается оперативным штабом по борьбе с коронавирусной инфекцией при Правительстве Челябинской области. Оставшиеся ковид-базы перейдут в прежний режим работы при условии улучшения ситуации.",-1),K=(0,l.uE)('<div class="detail__bottom_items"><div class="detail__bottom_item"><div class="detail__bottom_item_top">Автор материала</div><div class="detail__bottom_item_line"></div><div class="detail__bottom_item_bottom"><strong>Иван Анатольев</strong></div></div><div class="detail__bottom_item"><div class="detail__bottom_item_top">Теги</div><div class="detail__bottom_item_line"></div><div class="detail__bottom_item_bottom breadcrumbs"><div class="breadcrumbs_wr"><div class="breadcrumb">Роддом<span>/</span></div><div class="breadcrumb">Вакцинация<span>/</span></div><div class="breadcrumb">Коронавирус</div></div></div></div><div class="detail__bottom_item this--small"><div class="detail__bottom_item_top">Поделиться</div><div class="detail__bottom_item_line"></div><div class="detail__bottom_item_bottom social"><div class="social__links"><a class="social__link this--youtube" href="#"></a><a class="social__link this--fb" href="#"></a><a class="social__link this--vk" href="#"></a><a class="social__link this--ok" href="#"></a><a class="social__link this--inst" href="#"></a></div></div></div></div>',1);var N={__name:"DetailBody",setup(e){const a=(0,t.iH)(null),s=(0,t.iH)(null),i=()=>{s.value.paused?(s.value.play(),s.value.style.cursor="pointer",a.value.style.opacity="0",a.value.style.visibility="hidden"):(s.value.pause(),s.value.style.cursor="default",a.value.style.opacity="1",a.value.style.visibility="visible")};return(e,t)=>((0,l.wg)(),(0,l.iD)("section",O,[(0,l._)("div",U,[(0,l._)("div",D,[L,(0,l._)("div",H,[E,(0,l._)("div",W,[B,M,q,(0,l._)("div",{onClick:i},[(0,l._)("span",{ref_key:"playBtn",ref:a},null,512),(0,l._)("video",{src:S,poster:x,ref_key:"video",ref:s},null,512)]),Z,z,F,P,T,A]),K])])])]))}};const $=N;var G=$;const I={class:"detail_form"},J={class:"container"},Q={class:"detail_form__content"},R={class:"detail__small_container"},V=(0,l._)("h2",{class:"detail_form__title"},"Оставьте свой комментарий",-1),X={class:"detail_form__form",action:"#",name:"detail_form"},Y={class:"detail_form__items"},ee=(0,l._)("div",{class:"detail_form__item"},[(0,l._)("input",{type:"text",name:"name",placeholder:"Имя"})],-1),ae=(0,l._)("div",{class:"detail_form__item"},[(0,l._)("input",{type:"text",name:"mail",placeholder:"E-mail"})],-1),se={class:"detail_form__item this--small"},ie={for:"file"},le=(0,l._)("span",null,null,-1),te=(0,l._)("div",{class:"detail_form__item this--100"},[(0,l._)("input",{type:"text",name:"comment",placeholder:"Комментарий"})],-1),_e=(0,l._)("div",{class:"detail_form__bottom"},[(0,l._)("input",{class:"detail_form__submit btn this--wh",type:"submit",value:"Отправить"})],-1);var ne={__name:"DetailForm",setup(e){const a=(0,t.iH)(null);let s=(0,t.iH)("Прикрепить фото");const i=()=>{s.value=a.value.files[0].name};return(e,n)=>((0,l.wg)(),(0,l.iD)("section",I,[(0,l._)("div",J,[(0,l._)("div",Q,[(0,l._)("div",R,[V,(0,l._)("form",X,[(0,l._)("div",Y,[ee,ae,(0,l._)("div",se,[(0,l._)("input",{type:"file",name:"file",id:"file",ref_key:"file",ref:a,onChange:i},null,544),(0,l._)("label",ie,[le,(0,l.Uk)((0,_.zw)((0,t.SU)(s)),1)])]),te]),_e])])])])]))}};const oe=ne;var re=oe;const ce={class:"main"};var de={__name:"DetailMain",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)("main",ce,[(0,l.Wm)((0,t.SU)(G)),(0,l.Wm)((0,t.SU)(re))]))}};const ue=de;var ve=ue;const me={class:"footer"},he=(0,l.uE)('<div class="container"><div class="footer__content"><div class="footer__top"><div class="footer__social social"><div class="social__title">Подписывайтесь на нас:</div><div class="social__links"><a class="social__link this--youtube" href="#"></a><a class="social__link this--fb" href="#"></a><a class="social__link this--vk" href="#"></a><a class="social__link this--ok" href="#"></a><a class="social__link this--inst" href="#"></a></div></div></div><div class="footer__bottom"><div class="footer__bottom_item"><div class="footer__copyright">© 2021 «Златоустовское телевидение»</div><div class="footer__privacy"><a href="#">Политика конфиденциальности</a></div></div><div class="footer__bottom_item"><div class="footer__develope"><a href="#"></a></div></div></div></div></div>',1),fe=[he];function be(e,a){return(0,l.wg)(),(0,l.iD)("footer",me,fe)}var pe=s(89);const ke={},ge=(0,pe.Z)(ke,[["render",be]]);var ye=ge;const we={class:"wrapper"};var je={__name:"Detail",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)("div",we,[(0,l.Wm)((0,t.SU)(C)),(0,l.Wm)((0,t.SU)(ve)),(0,l.Wm)((0,t.SU)(ye))]))}};const Ce=je;var Se=Ce;(0,i.ri)(Se).mount("#detail")}},a={};function s(i){var l=a[i];if(void 0!==l)return l.exports;var t=a[i]={exports:{}};return e[i](t,t.exports,s),t.exports}s.m=e,function(){var e=[];s.O=function(a,i,l,t){if(!i){var _=1/0;for(c=0;c<e.length;c++){i=e[c][0],l=e[c][1],t=e[c][2];for(var n=!0,o=0;o<i.length;o++)(!1&t||_>=t)&&Object.keys(s.O).every((function(e){return s.O[e](i[o])}))?i.splice(o--,1):(n=!1,t<_&&(_=t));if(n){e.splice(c--,1);var r=l();void 0!==r&&(a=r)}}return a}t=t||0;for(var c=e.length;c>0&&e[c-1][2]>t;c--)e[c]=e[c-1];e[c]=[i,l,t]}}(),function(){s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,{a:a}),a}}(),function(){s.d=function(e,a){for(var i in a)s.o(a,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){s.j=167}(),function(){s.p="/"}(),function(){var e={167:0,64:0};s.O.j=function(a){return 0===e[a]};var a=function(a,i){var l,t,_=i[0],n=i[1],o=i[2],r=0;if(_.some((function(a){return 0!==e[a]}))){for(l in n)s.o(n,l)&&(s.m[l]=n[l]);if(o)var c=o(s)}for(a&&a(i);r<_.length;r++)t=_[r],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(c)},i=self["webpackChunkx_page_vue"]=self["webpackChunkx_page_vue"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998,64],(function(){return s(8627)}));i=s.O(i)})();
//# sourceMappingURL=detail.93e35ede.js.map