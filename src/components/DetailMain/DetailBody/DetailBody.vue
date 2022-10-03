<script setup>
import { ref } from 'vue'
const playBtn = ref(null)
const video = ref(null)

const playStop = () => {
    if (video.value.paused) {
        video.value.play();
        video.value.style.cursor = 'pointer'
        playBtn.value.style.opacity = '0'
        playBtn.value.style.visibility = 'hidden'
    } else {
        video.value.pause();
        video.value.style.cursor = 'default'
        playBtn.value.style.opacity = '1'
        playBtn.value.style.visibility = 'visible'
    }
}

</script>

<template>
    <section class="detail">
        <div class="container">
            <div class="detail__content">
                <h1 class="detail__title">Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции.  Роддом Златоуста вновь откроет свои двери 8 февраля</h1>
                <div class="detail__breadcrumbs breadcrumbs">
                    <div class="breadcrumbs_wr"><a class="breadcrumb this--link" href="/">Главная<span>/</span></a><a class="breadcrumb this--link" href="/">Новости<span>/</span></a>
                        <div class="breadcrumb">Медицина</div>
                    </div>
                </div>
                <div class="detail__small_container">
                    <div class="detail__tags tags">
                        <div class="tags_group">
                            <div class="tag">Медицина</div>
                        </div>
                        <div class="tags_group">
                            <div class="tag this--date">29/01/2021</div>
                        </div>
                    </div>
                    <div class="detail__default">
                        <h3>Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят в профильный режим. Приказ Министерство здравоохранения Челябинской области выпустило 27 января.</h3><br/>
                        <p>Напомним, перепрофилировать родильный дом решили в связи с ежедневным большим приростом златоустовцев, заболевших ковид-19.  За это время лечение на госпитальной базе прошли свыше 1000 пациентов.</p>
                        <div @click="playStop"><span ref="playBtn"></span>
                            <video src="@/assets/video/detail_video.mp4" poster="@//assets/img/detail/poster.jpg" ref="video"></video>
                        </div>
                        <h3>Александр Дорофеев</h3><span>главный врач родильного дома г. Златоуста:</span><br/>
                        <p>«На сегодняшний день в МПЦ находятся 46 больных. Большая часть из них будет переведена на базу квартала Медик и меньшая часть – на базу долечивания, в район метзавода. В воскресенье к нам приезжает дезостанция для обработки всех помещений. С 1 по 7 число проводится заключительная дезинфекция всего родильного дома. С 8 числа мы начинаем принимать беременных и рожениц нашего города и горнозаводской зоны».</p>
                        <hr/>
                        <p>Подготовка к возвращению профильной деятельности больниц проводится тщательным образом. Это полная дезинфекция помещений, забор ряда лабораторных анализов. И только после разрешения всех инстанций медицинское учреждение поступает к работе. Златоуст — не единственный город, где в связи со стабилизацией обстановки с коронавирусной инфекцией медицинские объекты возвращаются к плановому приёму пациентов. Решение по сокращению коечных мест для больных ковидом принимается оперативным штабом по борьбе с коронавирусной инфекцией при Правительстве Челябинской области. Оставшиеся ковид-базы перейдут в прежний режим работы при условии улучшения ситуации.</p>
                    </div>
                    <div class="detail__bottom_items">
                        <div class="detail__bottom_item">
                            <div class="detail__bottom_item_top">Автор материала</div>
                            <div class="detail__bottom_item_line"></div>
                            <div class="detail__bottom_item_bottom"><strong>Иван Анатольев</strong></div>
                        </div>
                        <div class="detail__bottom_item">
                            <div class="detail__bottom_item_top">Теги</div>
                            <div class="detail__bottom_item_line"></div>
                            <div class="detail__bottom_item_bottom breadcrumbs">
                                <div class="breadcrumbs_wr">
                                    <div class="breadcrumb">Роддом<span>/</span></div>
                                    <div class="breadcrumb">Вакцинация<span>/</span></div>
                                    <div class="breadcrumb">Коронавирус</div>
                                </div>
                            </div>
                        </div>
                        <div class="detail__bottom_item this--small">
                            <div class="detail__bottom_item_top">Поделиться</div>
                            <div class="detail__bottom_item_line"></div>
                            <div class="detail__bottom_item_bottom social">
                                <div class="social__links"><a class="social__link this--youtube" href="#"></a><a class="social__link this--fb" href="#"></a><a class="social__link this--vk" href="#"></a><a class="social__link this--ok" href="#"></a><a class="social__link this--inst" href="#"></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

