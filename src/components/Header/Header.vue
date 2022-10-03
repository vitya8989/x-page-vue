<script setup>
    import HeaderNav from "@/components/Header/HeaderNav/HeaderNav";
    import { ref } from 'vue'

    let burgerOpen = ref(false)
    let menuOpen = ref(false)
    let menuBgOpen = ref(false)
    const toggleMenu = () => {
        burgerOpen.value = !burgerOpen.value
        menuOpen.value = !menuOpen.value
        menuBgOpen.value = !menuBgOpen.value
        document.body.classList.toggle('scroll-lock');
    }
    const closeMenu = (e) => {
        if (!e.target.closest('.header__bottom')) {
            burgerOpen.value = false
            menuOpen.value = false
            menuBgOpen.value = false
            document.body.classList.remove('scroll-lock');
        }
    }
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__content">
                <div class="header__top"><a class="header__top_link btn" href="#">Предложить новость</a>
                    <div class="header__top_group"><a class="header__top_tel" href="tel:83513651711">8 (3513) 65-17-11</a>
                        <button class="header__search">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2094 11.6186C14.0951 10.409 14.6249 8.92328 14.6249 7.31261C14.6249 3.28064 11.3444 0.00012207 7.31245 0.00012207C3.28048 0.00012207 0 3.28064 0 7.31261C0 11.3446 3.28052 14.6251 7.31248 14.6251C8.92315 14.6251 10.409 14.0952 11.6186 13.2094L16.4092 18L18 16.4092C18 16.4092 13.2094 11.6186 13.2094 11.6186ZM7.31248 12.3751C4.52086 12.3751 2.25001 10.1042 2.25001 7.31261C2.25001 4.52098 4.52086 2.25013 7.31248 2.25013C10.1041 2.25013 12.375 4.52098 12.375 7.31261C12.375 10.1042 10.1041 12.3751 7.31248 12.3751Z" fill="#373334"></path>
                            </svg>
                        </button>
                        <div class="header__burger" :class="{'burger-open': burgerOpen}" @click="toggleMenu"><span></span></div>
                    </div>
                </div>
                <div class="header__bottom_mob_bg" :class="{active: menuBgOpen}" @click="closeMenu"></div>
                <HeaderNav :menu-open="menuOpen"/>
            </div>
        </div>
    </header>
</template>