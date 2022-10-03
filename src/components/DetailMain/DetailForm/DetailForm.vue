<script setup>
import { ref } from 'vue'
const file = ref(null)
let fileText = ref('Прикрепить фото')
const changeFileName = () => {
    fileText.value = file.value.files[0].name
}
</script>

<template>
    <section class="detail_form">
        <div class="container">
            <div class="detail_form__content">
                <div class="detail__small_container">
                    <h2 class="detail_form__title">Оставьте свой комментарий</h2>
                    <form class="detail_form__form" action="#" name="detail_form">
                        <div class="detail_form__items">
                            <div class="detail_form__item">
                                <input type="text" name="name" placeholder="Имя"/>
                            </div>
                            <div class="detail_form__item">
                                <input type="text" name="mail" placeholder="E-mail"/>
                            </div>
                            <div class="detail_form__item this--small">
                                <input type="file" name="file" id="file" ref="file" v-on:change="changeFileName"/>
                                <label for="file"><span></span>{{fileText}}</label>
                            </div>
                            <div class="detail_form__item this--100">
                                <input type="text" name="comment" placeholder="Комментарий"/>
                            </div>
                        </div>
                        <div class="detail_form__bottom">
                            <input class="detail_form__submit btn this--wh" type="submit" value="Отправить"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
