import './src/css/style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'


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
                <div class="location__city">Санкт-Петербург</div>
        </div>
    </header>
    <main class="container">
        <section class="benefit">
            <div class="benefit__block">
                <div class="benefit__block-share subtitle">Акция продлится с 1 по 20 сентября</div>
                <div class="benefit__block-title">это ваша <br><span class="benefit__block-title benefit__block-title_blue">выгода!</span></div>
                <div class="benefit__block-subtitle subtitle">Тариф «Мой онлайн+» и 1 ТБ трафика в подарок для новых абонентов</div>
                <div class="benefit__block-action">
                    <button class="btn">Принять участие</button>
                </div>
            </div>
            <div class="benefit__image">
                <img src="${bossTele2}" alt="bossTele2">
            </div>
        </section>
        <section class="present">
            <div class="present__title title">Один терабайт — много любимых развлечений</div>
            <div class="present__subtitle subtitle">
                Подарок получают только новые абоненты при подключении услуг Tele2<br>
                с тарифом «Мой онлайн+». Трафик расходуется в течение года. 
            </div>
            <div class="present__advantages">
                <div class="present__advantages-block">
                    <img src="${Youtube}" alt="Youtube">
                    <div class="present__advantages-text subtitle">Около 500 часов видео</div>
                </div>
                <div class="present__advantages-block">
                    <img src="${Headphones}" alt="Headphones">
                    <div class="present__advantages-text subtitle">Примерно 200 000 песен</div>
                </div>
                <div class="present__advantages-block">
                    <img src="${Camera}" alt="Camera">
                    <div class="present__advantages-text subtitle">Порядка 300 000 фото</div>
                </div>
            </div>
        </section>
        <section class="instructions">
            <form action="#" class="instructions__form">
                <div class="instructions__form-title title">
                    Несколько шагов<br>
                    <span class="title title_blue">
                        и 1 ТБ — ваш
                    </span>
                </div>
                <div class="instructions__form-number">
                    <label for="instructions-telephone">Номер телефона</label>
                    <input class="subtitle subtitle_16px" type="tel" name="telephone" id="instructions-telephone" maxlength="18">
                </div>
                <div class="instructions__form-personal">
                    <input class="instructions__form-checkbox" type="checkbox" name="personal" id="instructions-personal">
                    <label class="subtitle subtitle_16px" for="instructions-personal">
                        Даю согласие на обработку персональных данных.
                    </label>
                    <a href="#" class="link">Условия соглашения</a>.
                </div>
                <div class="instructions__form-action">
                    <button class="btn btn-wide">Выслать промокод</button>
                </div>
                <div class="instructions__form-feedback instructions__form-feedback_hidden">
                    <img src="${Ok}" alt="Ok">
                    <img class="hidden" src="src/images/Attention.png" alt="Attention">
                    <div class="subtitle subtitle_14px">Промокод выслан на ваш номер</div>
                </div>
            </form>
            <div class="instructions__list">
                <div class="instructions__list-item">
                    <div class="instructions__list-number">1</div>
                    <div class="instructions__list-text subtitle">
                        Ведите свой номер телефона, затем дождитесь смс с промокодом для получения Тб
                    </div>
                </div>
                <div class="instructions__list-item">
                    <div class="instructions__list-number">2</div>
                    <div class="instructions__list-text subtitle">
                        Перейдите на <a class="link" href="#">сайт Tele2</a> и активируйте 
                        промокод при подключении на тариф «Мой Онлайн+»
                    </div>
                </div>
                <div class="instructions__list-item">
                    <div class="instructions__list-number">3</div>
                    <div class="instructions__list-text subtitle">
                        Используйте свой подарочный ТБ от Tele2 в течение всего года
                    </div>
                </div>
            </div>
            <div class="title title_hidden">
                Оставьте номер<br>
                <span class="title_blue">
                    и 1 ТБ — ваш
                </span>
            </div>
        </section>
        <section class="rate">
            <div class="rate__block">
                <div class="rate__block-title title">Заходите на сайт Tele2</div>
                <div class="rate__block-subtitle subtitle">
                    Перейдите в магазин, оформите тариф «Мой онлайн+» и на страничке активации введите ваш промокод. Готово!
                </div>
                <div class="subtitle subtitle_hidden">
                    Перейдите в магазин на страничку активации, введите ваш промокод. Готово! Теперь вы получите 1 ТБ на ваш телефон при
                    подключении тарифа «Мой онлайн+».
                </div>
                <div class="rate__block-action">
                    <a href="https://rostov.tele2.ru" target="_blank">
                        <button class="btn btn-wide">Оформить тариф</button>
                    </a>
                </div>
            </div>
            <div class="rate__image">
                <img src="${MaskGroup}" alt="MaskGroup">
            </div>
            <div class="rate__block-action rate__block-action_hidden">
                <a href="https://rostov.tele2.ru" target="_blank">
                    <button class="btn btn-wide">Оформить тариф</button>
                </a>
            </div>
        </section>
    </main>
    <footer class="container">
        <div class="footer-links">
            <div class="socials">
                <a href="#">
                    <img src="${Twitter}" alt="Twitter">
                </a>
                <a href="#">
                    <img src="${VKontakte}" alt="VKontakte">
                </a>
                <a href="#">
                    <img src="${Facebook}" alt="Facebook">
                </a>
            </div>
            <div class="promotion">
                <div class="promotion__descr subtitle subtitle_13px">Полные условия акции</div>
                <img src="${Img16}" alt="16+">
            </div>
        </div>
        <div class="footer-credits">
            <div class="footer-tele2">
                <img src="${Logo}" alt="Tele2">
                <div class="footer-tele2__text subtitle_16px">© Tele2 Россия, 2021</div>
            </div>
            <div class="footer-chulakov">
                <div class="footer-chulakov__text subtitle_13px">Сделано в Студии Олега Чулакова</div>
                <img src="${Chulakov}" alt="Chulakov">
            </div>
        </div>
    </footer>
    <dialog class="modal" id="location">
        <div class="location-modal">
            <div class="location-modal__header title">Выберите город</div>
            <div class="location-modal__list">
                <div class="location-modal__item subtitle">Воронеж</div>
                <div class="location-modal__item subtitle">Иркутск</div>
                <div class="location-modal__item subtitle">Кемерово</div>
                <div class="location-modal__item subtitle">Красноярск</div>
                <div class="location-modal__item subtitle">Москва</div>
                <div class="location-modal__item subtitle">Н. Новгород</div>
                <div class="location-modal__item subtitle">Новосибирск</div>
                <div class="location-modal__item subtitle">Пермь</div>
                <div class="location-modal__item subtitle">Ростов-на-Дону</div>
                <div class="location-modal__item subtitle">Санкт Петербург</div>
                <div class="location-modal__item subtitle">Челябинск</div>
            </div>
        </div>
    </dialog>

    <dialog class="form-modal">
        <form method="dialog" class="instructions__form">
            <div class="instructions__form-number">
                <label for="instructions-telephone-modal">Номер телефона</label>
                <input class="subtitle subtitle_16px" type="tel" name="telephone" id="instructions-telephone-modal">
            </div>
            <div class="instructions__form-personal">
                <input class="instructions__form-checkbox" type="checkbox" name="personal" id="instructions-personal-modal">
                <label class="subtitle subtitle_16px" for="instructions-personal-modal">
                    Даю согласие на обработку персональных данных.
                </label>
                <a href="#" class="link">Условия соглашения</a>.
            </div>
            <div class="instructions__form-action">
                <button class="btn btn-wide">Выслать промокод</button>
            </div>
            <div class="instructions__form-feedback instructions__form-feedback_hidden">
                <img src="${Ok}" alt="Ok">
                <img class="hidden" src="${Sign}" alt="Attention">
                <div class="subtitle subtitle_14px">Промокод выслан на ваш номер</div>
            </div>
        </form>
    </dialog>
    <div class="button-back button-back_hidden">
        <img src="${up}" alt="up">
    </div>

</body>
`

// setupCounter(document.querySelector('#counter'))



// import { Header } from './src/components/Header.js';
// // import { Main } from './src/components/Main.js';
// // import { Footer } from './src/components/Footer.js';

// document.getElementById('app').innerHTML = `
//   ${Header()}
// `;
