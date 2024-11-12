import './src/css/style.css'

import './src/js/location-modal.js'
import './src/js/form-modal.js'
import './src/js/form.js'
import './src/js/button-back.js'
import './src/js/tel-mask.js'

import Logo from './src/images/logo.png'
import Location from './src/images/loc.png'
import bossTele2 from './src/images/bossTele2.png'
import Youtube from './src/images/youtubeLogo.png'
import Headphones from './src/images/headPhones.png'
import Camera from './src/images/cameraLogo.png'
import Ok from './src/images/Ok.png'
import MaskGroup from './src/images/MaskGroup.png'
import Twitter from './src/images/twitterLogo.png'
import VKontakte from './src/images/vkLogo.png'
import Facebook from './src/images/facebookLogo.png'
import Img16 from './src/images/Img16.png'
import Chulakov from './src/images/chulakovLogo.png'
import Sign from './src/images/sign.png'
import up from './src/images/up.png'


document.querySelector('#app').innerHTML = `
<body>
    <header>
        <img class="header-logo" src="${Logo}" alt="Tele2">
        <div class="location">
            <img src="${Location}" alt="location">
            <p class="location__city">Санкт-Петербург</p>
        </div>
    </header>

    <main class="container">
        <section class="promo">
            <article class="promo__block">
                <p class="promo__block-share subtitle">Акция продлится с 1 по 20 сентября</p>
                <h1 class="promo__block-title">это ваша <br><span class="promo__block-title promo__block-title_blue">выгода!</span></h1>
                <p class="promo__block-subtitle subtitle">Тариф «Мой онлайн+» и 1 ТБ трафика в подарок для новых абонентов</p>
                <div class="promo__block-action">
                    <button class="customButton">Принять участие</button>
                </div>
            </article>
            <figure class="promo__image">
                <img src="${bossTele2}" alt="bossTele2">
            </figure>
        </section>

        <section class="terrabyte">
            <h2 class="terrabyte__title title">Один терабайт — много любимых развлечений</h2>
            <p class="terrabyte__subtitle subtitle">
                Подарок получают только новые абоненты при подключении услуг Tele2<br>
                с тарифом «Мой онлайн+». Трафик расходуется в течение года. 
            </p>
            <aside class="terrabyte__plus">
                <article class="terrabyte__plus-block">
                    <img src="${Youtube}" alt="Youtube">
                    <p class="terrabyte__plus-text subtitle">Около 500 часов видео</p>
                </article>
                <article class="terrabyte__plus-block">
                    <img src="${Headphones}" alt="Headphones">
                    <p class="terrabyte__plus-text subtitle">Примерно 200 000 песен</p>
                </article>
                <article class="terrabyte__plus-block">
                    <img src="${Camera}" alt="Camera">
                    <p class="terrabyte__plus-text subtitle">Порядка 300 000 фото</p>
                </article>
            </aside>
        </section>

        <section class="manual">
            <form action="#" class="manual__form">
                <h2 class="manual__form-title title">
                    Несколько шагов<br>
                    <span class="title title_blue">
                        и 1 ТБ — ваш
                    </span>
                </h2>
                <div class="manual__form-number">
                    <label for="manual-telephone">Номер телефона</label>
                    <input class="subtitle subtitle_16px" type="tel" name="telephone" id="manual-telephone" maxlength="18">
                </div>
                <div class="manual__form-personal">
                    <input class="manual__form-checkbox" type="checkbox" name="personal" id="manual-personal">
                    <label class="subtitle subtitle_16px" for="manual-personal">
                        Даю согласие на обработку персональных данных.
                    </label>
                    <a href="#" class="link">Условия соглашения</a>.
                </div>
                <div class="manual__form-action">
                    <button class="customButton customButton-wide">Выслать промокод</button>
                </div>
                <div class="manual__form-feedback manual__form-feedback_hidden">
                    <img src="${Ok}" alt="Ok">
                    <img class="hidden" src="src/images/Sign.png" alt="Sign">
                    <p class="subtitle subtitle_14px">Промокод выслан на ваш номер</p>
                </div>
            </form>
            <aside class="manual__list">
                <article class="manual__list-item">
                    <p class="manual__list-number">1</p>
                    <p class="manual__list-text subtitle">
                        Ведите свой номер телефона, затем дождитесь смс с промокодом для получения Тб
                    </p>
                </article>
                <article class="manual__list-item">
                    <p class="manual__list-number">2</p>
                    <p class="manual__list-text subtitle">
                        Перейдите на <a class="link" href="#">сайт Tele2</a> и активируйте промокод при подключении на тариф «Мой Онлайн+»
                    </p>
                </article>
                <article class="manual__list-item">
                    <p class="manual__list-number">3</p>
                    <p class="manual__list-text subtitle">
                        Используйте свой подарочный ТБ от Tele2 в течение всего года
                    </p>
                </article>
            </aside>
            <h2 class="title title_hidden">
                Оставьте номер<br>
                <span class="title_blue">
                    и 1 ТБ — ваш
                </span>
            </h2>
        </section>
<section class="invite">
    <article class="invite__block">
        <h2 class="invite__block-title title">Заходите на сайт Tele2</h2>
        <p class="invite__block-subtitle subtitle">
            Перейдите в магазин, оформите тариф «Мой онлайн+» и на страничке активации введите ваш промокод. Готово!
        </p>
        <p class="subtitle subtitle_hidden">
            Перейдите в магазин на страничку активации, введите ваш промокод. Готово! Теперь вы получите 1 ТБ на ваш телефон при подключении тарифа «Мой онлайн+».
        </p>
        <div class="invite__block-action">
            <a href="https://rostov.tele2.ru" target="_blank">
                <button class="customButton customButton-wide">Оформить тариф</button>
            </a>
        </div>
    </article>
    <figure class="invite__image">
        <img src="${MaskGroup}" alt="MaskGroup">
    </figure>
    <div class="invite__block-action invite__block-action_hidden">
        <a href="https://rostov.tele2.ru" target="_blank">
            <button class="customButton customButton-wide">Оформить тариф</button>
        </a>
    </div>
</section>

<footer class="container">
    <div class="footer-links">
        <nav class="socials">
            <a href="#">
                <img src="${Twitter}" alt="Twitter">
            </a>
            <a href="#">
                <img src="${VKontakte}" alt="VKontakte">
            </a>
            <a href="#">
                <img src="${Facebook}" alt="Facebook">
            </a>
        </nav>
        <section class="promotion">
            <p class="promotion__descr subtitle subtitle_13px">Полные условия акции</p>
            <img src="${Img16}" alt="16+">
        </section>
    </div>
    <div class="footer-credits">
        <section class="footer-tele2">
            <img src="${Logo}" alt="Tele2">
            <p class="footer-tele2__text subtitle_16px">© Tele2 Россия, 2021</p>
        </section>
        <section class="footer-chulakov">
            <p class="footer-chulakov__text subtitle_13px">Сделано в Студии Олега Чулакова</p>
            <img src="${Chulakov}" alt="Chulakov">
        </section>
    </div>
</footer>

<dialog class="modal" id="location">
    <article class="location-modal">
        <header class="location-modal__header title">Выберите город</header>
        <ul class="location-modal__list">
            <li class="location-modal__item subtitle">Воронеж</li>
            <li class="location-modal__item subtitle">Иркутск</li>
            <li class="location-modal__item subtitle">Кемерово</li>
            <li class="location-modal__item subtitle">Красноярск</li>
            <li class="location-modal__item subtitle">Москва</li>
            <li class="location-modal__item subtitle">Н. Новгород</li>
            <li class="location-modal__item subtitle">Новосибирск</li>
            <li class="location-modal__item subtitle">Пермь</li>
            <li class="location-modal__item subtitle">Ростов-на-Дону</li>
            <li class="location-modal__item subtitle">Санкт Петербург</li>
            <li class="location-modal__item subtitle">Челябинск</li>
        </ul>
    </article>
</dialog>

<dialog class="form-modal">
    <form method="dialog" class="manual__form">
        <fieldset class="manual__form-number ">
            <label for="manual-telephone-modal">Номер телефона</label>
            <input class="subtitle subtitle_16px" type="tel" name="telephone" id="manual-telephone-modal">
        </fieldset>

        <fieldset class="manual__form-personal">
            <input class="manual__form-checkbox" type="checkbox" name="personal" id="manual-personal-modal">
            <label class="subtitle subtitle_16px" for="manual-personal-modal">
                Даю согласие на обработку персональных данных.
            </label>
            <a href="#" class="link">Условия соглашения</a>.
        </fieldset>

        <div class="manual__form-action">
            <button class="customButton customButton-wide">Выслать промокод</button>
        </div>
        <div class="manual__form-feedback manual__form-feedback_hidden">
            <img src="${Ok}" alt="Ok">
            <img class="hidden" src="${Sign}" alt="Attention">
            <p class="subtitle subtitle_14px">Промокод выслан на ваш номер</p>
        </div>
    </form>
</dialog>

<div class="buttonBack buttonBack_hidden">
    <img src="${up}" alt="up">
</div>

</body>
`
