<script setup>
    import { toRefs, ref } from 'vue'

    const props = defineProps({
        'menu-open': Boolean
    })
    const { menuOpen } = toRefs(props)

    const vAccordion = {
        mounted: (el) => {
            const accordions = el.querySelectorAll('.js_mob_accordion');

            accordionsAnim(accordions, '.js_mob_accordion_head', '.js_mob_accordion_body');
            window.addEventListener('resize', () => {
                accordionsAnim(accordions, '.js_mob_accordion_head', '.js_mob_accordion_body');
            });

            function accordionsAnim(accordions, headClass, bodyClass) {
                for (let i = 0; i < accordions.length; i++) {
                    let accordionHead = accordions[i].querySelector(headClass);
                    let accordionBody = accordions[i].querySelector(bodyClass);

                    if (accordionBody.classList.contains('open') || window.innerWidth >= 1024) {
                        accordionBody.style.height = 'auto';
                    } else {
                        accordionBody.style.height = '0';
                    }
                    accordionHead.onclick = () => {
                        if (window.innerWidth < 1024) {
                            if (accordionBody.classList.contains('open')) {
                                hideBody(accordionBody, accordionHead);
                            } else {
                                showBody(accordionBody, accordionHead);
                            }
                        }
                    }
                }
            }

            function hideBody(body, head) {
                head.classList.remove('active');
                body.classList.remove('open');
                body.style.height = '0';
            }

            function showBody(body, head) {
                head.classList.add('active');
                body.classList.add('open');
                body.style.height = `${body.scrollHeight}px`;
            }
        }
    }
</script>

<template>
    <div class="header__bottom" :class="{open: menuOpen}" v-accordion>
        <ul class="header__nav">
            <li class="header__nav_item"><a class="header__nav_link" href="#">Новости</a></li>
            <li class="header__nav_item"><a class="header__nav_link" href="#">Телепроекты</a></li>
            <li class="header__nav_item"><a class="header__nav_link" href="#">Реклама</a></li>
            <li class="header__nav_item this--submenu js_mob_accordion">
                <div class="header__nav_item_title js_mob_accordion_head">Онлайн
                    <div class="header__nav_item_arrow arrow"></div>
                </div>
                <ul class="header__submenu js_mob_accordion_body">
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                </ul>
            </li>
            <li class="header__nav_item"><a class="header__nav_link" href="#">Программа передач</a></li>
            <li class="header__nav_item this--submenu js_mob_accordion">
                <div class="header__nav_item_title js_mob_accordion_head">Еще
                    <div class="header__nav_item_arrow arrow"></div>
                </div>
                <ul class="header__submenu js_mob_accordion_body">
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню длинный</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню</a></li>
                    <li class="header__submenu_item"><a class="header__submenu_link" href="#">Пункт меню длинный длинный</a></li>
                </ul>
            </li>
        </ul>
        <div class="header__social social">
            <div class="social__title">Подписывайтесь на нас:</div>
            <div class="social__links"><a class="social__link this--youtube" href="#"></a><a class="social__link this--fb" href="#"></a><a class="social__link this--vk" href="#"></a><a class="social__link this--ok" href="#"></a><a class="social__link this--inst" href="#"></a></div>
        </div>
    </div>
</template>
