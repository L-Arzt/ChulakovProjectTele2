(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const A of e)if(A.type==="childList")for(const a of A.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const A={};return e.integrity&&(A.integrity=e.integrity),e.referrerPolicy&&(A.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?A.credentials="include":e.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function l(e){if(e.ep)return;e.ep=!0;const A=s(e);fetch(e.href,A)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#location"),o=document.querySelector(".location"),s=document.querySelectorAll(".location-modal__item"),l=document.querySelector(".location__city");function e(){const c=localStorage.getItem("city")||"Санкт-Петербург";document.title=`Tele2 - ${c}`,l.textContent=c}function A(c){localStorage.setItem("city",c)}function a(c){const m=c.animate([{opacity:"0"}],{duration:500,easing:"ease"});m.onfinish=()=>{c.close(),document.body.classList.remove("scroll-lock")}}e(),o.addEventListener("click",()=>{t.showModal(),document.body.classList.add("scroll-lock")}),s.forEach(c=>{c.addEventListener("click",()=>{a(t),A(c.textContent),e()})})});function i(t,o,s){const l=t.querySelector(".manual__form-feedback"),e=l.querySelectorAll("img");s?(e[0].classList.remove("hidden"),e[1].classList.add("hidden")):(e[1].classList.remove("hidden"),e[0].classList.add("hidden"));const A=l.querySelector("p");A.textContent=o,l.classList.remove("manual__form-feedback_hidden")}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form-modal"),o=document.querySelector(".promo__block-action .customButton"),s=t.querySelector(".manual__form-action .customButton"),l=t.querySelector("input[type='tel']"),e=t.querySelector(".manual__form-feedback"),A=t.querySelector(".manual__form-checkbox");o.addEventListener("click",()=>{t.showModal(),document.body.classList.add("scroll-lock")}),s.addEventListener("click",a=>{a.preventDefault(),l.value.length<18?i(t,"Неправильно введён номер",!1):A.checked?(i(t,"Промокод выслан на ваш номер",!0),setTimeout(()=>{t.querySelector("form").reset(),t.close(),document.body.classList.remove("scroll-lock"),e.classList.add("manual__form-feedback_hidden")},1e3)):i(t,"Необходимо принять условия соглашения",!1)})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".manual__form"),o=t.querySelector("input[type='tel']"),s=t.querySelector("input[type='checkbox']");t.querySelector(".manual__form-action .customButton").addEventListener("click",e=>{e.preventDefault(),o.value.length<18?i(t,"Неправильно введён номер",!1):s.checked?(i(t,"Промокод выслан на ваш номер",!0),t.reset()):i(t,"Необходимо принять условия соглашения",!1)})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".buttonBack");t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-100?t.classList.remove("buttonBack_hidden"):t.classList.add("buttonBack_hidden")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll('input[type="tel"]'),o=s=>{const l="+7 (___) ___-__-__";let e=0,A=l.replace(/\D/g,""),a=s.target.value.replace(/\D/g,"");if(s.type==="blur"&&a.length<l.match(/([\_\d])/g).length){s.target.value="";return}A.length>=a.length&&(a=A),s.target.value=l.replace(/./g,c=>/[_\d]/.test(c)&&e<a.length?a.charAt(e++):e>=a.length?"":c)};t.forEach(s=>{["input","blur","focus"].forEach(l=>{s.addEventListener(l,o)})})});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAhCAYAAABduGw9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM+SURBVHgB7ZmNddowFIUfPQxAJ6g6QdIJSiZoMkFggqYTlEyQdoI4E5RMAEwQOkHFBGEDem95io1jSZjaweb4O+dibMuyfK2fJ7knHVE2m80QG2oODaBfemoNWWgJPfR6vbl07A+NhWablGtotPFzDxnp+Geegc495wZQUmDgdcRg8idrcl9OGH1QmvgBMqpz3ZIEGueuYRcw03SHYHg98vmELmPdaoPVDCpr4gAPNmZNktTIMkzkcHMdBrqDxq01GAbyAW4KTlk5EDZ/bL5KNbAr+dYIg7UmGmiN2mf3vGwg1VOVuY7rd/JG6MBh9P+5jrhP0DMOUU/QZzkSOuCFugaGZCvZhmpD2fbfMUylNVhrIrmEziTtH43+n0MXemwkzSL0ci10kWld3C7wvDT9JnDdoLTBrIW8kdZGNiluaRgNnPLG0L00E5sRzVlkzg0D1008XRevDxlcHEVEwhsLfdQChTI/Nq5sbNbPMGgVSW8C5x49x9cSxvZhpquFVDZGbDUw9LHkJcZznAOvz8gzCbNkDf4hHcQXlYRqabAF48Us6gzT3EKIld1FkaZjJS2v274CLZ/mmkA+CX/qMJgD3TTQrI5Cdn3AM2C937fMmtf3SLKEP0UGW9m+uaXsvsnfssdg0RRjGWfLdiB202nHSApqZUlzZxKe6CTsHvinrzd8MQ8ZMIZ9mdezkDh+Je1jKBUP2BlzTSTprfvTh3kPuZN3uQys/F+B+JJs07qMspQwdydmrnyqzBbA6S8XRrHLFS1OgWPhTKMpYe4c5t5mD9SxFpHv81pNCXOt5NaWyZst9rSRkuZeFEUnp/xFgwO3lXQMWUsaDUUpYS7zvPIts56swXjgSzkQXbrkl2OzR/Ix7uWdQNVhMAe2RNKaw21soaUxqLmxONcxgrnTUILKDdYAeyEtRD8ZMUylua5LceT3k4IQ9xUn/VW5LDAskdyXisyH1Tz87D/M7Bema43BmbWE9T6TFp2R5uNvk9tfIa+JGsWpdeUhZuUGqxFfZLegruBLPNDPyPVsojTHeJIkUhBvFpCfkfrycsTSHkQdNXgo/jXmORQ0WLYvwsiJ0E00aqYzuGY6g2umM7hm/gIH3q47h0uUOgAAAABJRU5ErkJggg==",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGVSURBVHgB7VYBbcMwEPwMgSF4DMqgHoMx6CCUQcogY2AIgZANQcsgYZAx8PzbWbVeTlYn7qRKOeml5v1+X+7f3xBteDQ454w36613V5zhM3Qv+OTaW4cDR/y2sC4iw781lYRPuMOhbLU3lYhR3o6I6XkPlQDevIfpjPixiBKQtM9JBhI/ZaI1QMMxDsLPcp9AroP0SsTU2GtoKdBgo/Dp6AacYQ4+JUiyCpaWAsnbhI8T7yPfESSsiG2ZGC0FkjbRs04dhDWbUKvh4LkznigPQeKPxNrA6y5xRdcQGLztxDPDJGLZN1RV9RX5eO+FliJIKJor+E4YUFyWd/jqKG6yXDkETCKxQr0lGrH3Df7ZiVjR3yR4mHCS51he3ALjjX0Xv/Yp9nH3c0leaA1SKtywJ7z9gUrA/U678ZYOd9dBtW4Mi6QmVeeJWItYTSURdb+ZiVnf+TPJw2zvp0rhMv62l5J4nSoF5kK5xpsh0cpS3FX6BAEVSa1c5hdTKRLhVtio6/f0n4huRdaQKk2ic+KDZcOGXHwDEdqaZGETWaAAAAAASUVORK5CYII=",d="/assets/bossTele2-BNV0cY-H.png",g="data:image/png;base64,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",b="data:image/png;base64,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",h="data:image/png;base64,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",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBtZY/bNNAFMa/Z6cQgoCA6MKC2RAsjSADE94ILIlEGZGatQthKWOTgYEJumRNJMYypAOQTs0eoXRkasIAErQqQREoiskd7y5/qiS2cVP3JyU6v7v73vnd3Xsm+GA3ZDz6V+RAdB8EC1Jayk5AW4J2CbIind5W9d65lpcGuRlTDRbqyxIgbQSjDKdXcHNkTBse1vs56ovGMcQVK3LhTOMBz53umHiDVL2fZ8s6ToJEoZo08zMO1Mol4TVCQEo8306ab8YOVMxVWCQQRwiwTpucXkLtyWAPhFgPS1xBSmvhbEm3BydGNHEKdE3jssGhSWNOnB9fcfj+rWd/VIhnEb4wGR21OcS/FLJw9r/pmFx59HR2kCTb4Nu45CckfndmbN3mZ+ytLWvxqHUTcTvjMVtaht/mqlXurT3G4YejMPza2ULzxTLEnw4u2Wlcz5dgxC54SVgR+NCp7+hVfi+/ghm7iB47PHhX1H2LT1ZxlX//g1Kf+AQNk5gb+5tFHGwWJ2xBxdV9iPB/i9uW16DFodDIybXVlzo0QeD93Y2AZI2d2H4DR07O304idiuJoPAJrVCGc363L37iNHB6N4xKgtr8MjWET/koF5mUVVUKIaG1uACptnZQTVBL5XGEhADyo+o2rmgfVf4m5HFSWGP7rrkxepwomdU7ZoG4WMwTrsGHAHJKY8o+i07hXCM4bCsIBB91x8m6FX3ymzasdGkJmSHQ0jhvEV9OKVv8OVPrGsZGTZ9Ed/4BdgnpcZq9ZB8AAAAASUVORK5CYII=",B="/assets/MaskGroup--XExwlAm.png",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7dbhTcMwEAXgFyZghIxQJqBMQDcoG5QNygaICcIGZYOUCegGgQnKBo872YhQtbGTnvvrPumUSrXsy9nJBXDOOefcVCTnEo1Ex0CvTwdjVrCgEx9Onhj/wNOeNbGY8BoWelXQya8TY2vmaWKiCxgkuO9N3EksB8aumK8bWvcK+Xa937XEq0zeaqJHKloj393QnxUySRIzuXwMDNki3MSnhG7ZHGm7qqpuYEHPicQjbW1ghX8PiaVlat0xZ/AF9t5hSe54TTsNSmB4x1mcxRol8H/rmqpM9WKC2l/3nK5johNZJKnb3HK8jqW29kSiixHVvExyssiMode2zLdhyW2NlWo4XitxizNk9+KYaI3QY+8RPgg0fivzHUP78VbiTfrsF5xzzjk35AeZ5KLORk7mpgAAAABJRU5ErkJggg==",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAElSURBVHgB7ZbvEYIwDMWDEzgCI7CBjMAGuoFuIBvoBrqBbsA5gSPUDRjhGQ4+IJe0vQKfzO+ux5++pi8p7UFkGIZhGIaRCgCHX7rn7URTQeahxKwF7Z5S4IGtEOw40eSKrhHi5UoyO83Dxm+RnsK7avyQZdmHL1eK4yC8+3CMF6XAmZVKxuVEV4UqmFK9WJMuYvIyQnMTNDeaCwc5IlDFkEG+Pwj9jltOc+EgWwSq6DOIfmml8Wk7VzGpHSW1x2A7jHNC3/ylFUw2kDlBT0CjoKWBft6lsHwFB5MnLMdqJu+RBhy3HbezR3OhpUG/q98IM97lBeTN0lHTGnTZxxoc9L5vuKQ1QH8AuxiDg75A5I/FGkab0eTd9aJopeV2ZBiGYRj/yRd0nTfqLYmnPQAAAABJRU5ErkJggg==",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgB7ddfDcIwEAbwrwQBSEACEnAADsACCpgDJGABB5sEULChgDkodwkhXTMeaK9/Hu6XXLZ2e/iytlsHKKXUl7V2TXWh6u0Ut3coiQIcqV72twMCLCGAnxwdrkhgARlnJCLyBMl+pm+g6pz2EyXQ8K5m5lvP/RAgMcRzQe7GmBECpOagTyQcSxVQTPUBDQLQAmidJs/BjXfLgOkKHmlOnpCL/V+LQLmGOHjR5Ao4IFD1AUM/dVvnnBfJzbveUTVO+4FSPntAn9jORl/UsTRgLA0YSwPG0oCxJH47eSvVeH3lvr1Kqcq8AcggvVAarswcAAAAAElFTkSuQmCC",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAImSURBVHgBxVfrccIwDFY4/tcb1COwAYzABtAJGKHXCcIGphPQThA6Ae0EyQawgSrH8kUkMYlD0n53Su5sPaxHZCWBnkBERa810ZJoQaSJFG9fiQqib6IT0WeSJFcYA2RYE6VEF4yDsbIwFNZjon1NaUa0I1pwRCTvkveymkwqeWO8zod6w/JGyOe95dm7XAguYCBqjnTrqgmY6NC167TpOXZGghm98SOMDNJ5EIdQbQz7uwyPH0A6mNY3tSgYDROB66tpB6uKNTAxhK3UL6hHvOfo6Uh+i0uZanpseSELCKyw6oRGrK+JzuLwvQsXq2a1mYPr7RYfAX5rVEHV94E9tgYLoj2/Y2BtrUoSXiyh/bRbUTyG10xXythLE9jz+s4zcLeaxU8bM91qB3C3nYTtaAWRP8gZ4+qn4LcGn8B73KJwfAQ8jIhGznsZNvHaorPEHIajoOi8sLJyVkDX69/BzQRbcJGz+f4KKZkzk/0UVcQQUQTWnzhl5dfDh3yrM2HVaa8zkPnoj4Pl589zB25Sssakp9bzU0De34qFrOhdgLmtBuQNV+YfI65tdIOL04cdjahDkT3IM0RCFOrGK/HznoaJgbcXn/KLqQzxxAcwDVu1Uw0ewXoYD1/7Igo5/vVA0sIweirwdi5UISY5lB5xvKH0IIzrLoH6WK5hIHDoiI//+WMilChRmB4Zui62wuav2QLH+jXr8KYPLmxYd+lPoCdwot/zX8+iVEf2rw5tAAAAAElFTkSuQmCC",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAQCAYAAADEZJcGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ+SURBVHgB5VqBUeMwEFSYLyAd4A4eKsCpIKECQgVABc5XEKjA/goCFdhU8OnA/grCV6C/S2RGWd9Zsic/P8DOiETS3ul0Ouskh4kBWGsX9HFH5YLK1DU3VLZUnieTyU+jgGRZbuE1bYn/ABzWuQHRB+Jtgbd2NrR4Jc4KODf0sfTbiDMbM14MSBfrmQpd16TvrUcO/fJG/Gvg4Hwb4twq+lL6mDudSavTuDWi8kKyjSAn+YK5jwKXbVmr9hAhoVLaMGrmGnkiOXBLgZMIOq8EXgmcXOBkqGjseCGwA62ONCCbA7+G/hX076zu40cbh5UiX+JYCm8NvL3/z1xnQh+8uKkJY8+1h2j9SrgZ2dcLe3iSM2i+V3YIXqM7E4dMCZoK6lMl4LGt4D9nrsKGJEBoqDy60kAfc2MN/yxYjOxT4R5UTBErKe27xU+hmdMQrw/3PZsuOGjuoU06UlwJdmF6fG07l8J2tkEF9pCKrLatOl4OnE+Rkmw3HW0EnWmPfG4F3wlzLBV5aQ61hbTl7NwBbyfoK/vGtd2YePc97zBzwcajg6rbHjGCeRJfJS1hgPFTXUHb3AyA7e4YDZVbhS7pXmLacgd5PMBKKaeCegprieMV7RcOmBSVSfmTbzuTLtSbgWdI7RdzSH8fDUu/4rbnqo8TAC8Onltmkt8dMOW9vaeILqT271CX0pIfJKn3vfHH4oD517tEIpQPA9vN55X7xIXRDo8S0OdFT7BIaAb2HY3nxkJeyn/cHHx+5ZPOTBehXeOrIYV6wX/I6ZXp+mpQWvKwDATbNFAfgwLq7S6Gczg6inwzh0hLvLbEKMBDVsRTwf0VtE3NyFvFfwJemSfe4vKZIfX6eF4PJow20PyFz0nvpZLmG3O8y/UFTNIzng9th8QXjC9HLCu/rOsYxMoEHl7H8r7Tt+OMvSVtBA7eVuqx40lQZENIBT052kllIcjmih1ZzDjKWOp8bffmm4fs4ZQk3d9zUCwd0kzPwesU2EKdAzYxxzZdAKcxp0VqhiMqGMl37He80XBquhfokp9zK1yrTffw3fSsUwF13Pm7scGOt927e/sUrF3ZxTwN9rQ7TKrYlLnyS+i/iRyPZUuhnINsKYyPZRcx5xz1eL6voU/8WcDK735qpztT+hnqW2gr+/jdDjNS0CqGJhGOGR0wyoL12qToGJJWzj25qdAvpeqsT4/ilzrge8lvUnCFkJkAenSK6XF/S3Infv71tDFhMGc28Bo4FmzTNoLXUJmZ0wK350o5kL5GyKpwvsfUxEG0Bh6PzXMsTBjM5d+jfkRwC6VdOqrsb0mtQUx4JkOX5nAzGPzvDYTf5vhWpC12BXXxKu+cdOlsmjubEs+mxtn0ZPpRmTj88b4nIPek2FiRfRU0406EfmmgnxcWz2P8mj/xH0z3/ZbaC3M4q1x4cu2/N1Rsa8RL1RbSS8i2vYO/NgHUu9xSUdAAAAAASUVORK5CYII=",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgBtZVPTsJAFMa/KRL+LEh1TUyPgF5AbqALDwAnsGw0rChuUGMiXEA5gAvYupEbQOLGjZG4cduYGDWmHd/QAaIt5E3AX9K0lDff15l5857AEqTt2kDOpcc9uhx9EcKnf0d07wFBX/jn40UaIln4xAGsG3osg4XoklEzyciKi9fpi1NDvvhkVIWkhtI+dmPWf8Q9ujWwGjSTlhcziL4cV1gLQU34F+2ZQbTmalmkjfVASRDuqD3Re5BqcMTbuUfcpV/BwNZJAqEz5pkzytnq4fBrG5fvu+DxsUkzSO0zo1EM8zAje0QG8sBkiJmJKJOBKOH/cCyTzDFfoomBGaYmymDMDS4GeRTCNAzwN7SBw4nmp+cUOVJ7MOCGn+YfcJ19Ah/ZI4NMhxP6Jr5xm3nhnuQpfV2L6vdglGdloihIzj7IrvDPqjqLwmrUpZajhHnik47XVE9W9FN1oujFegi8aXez5p4tqt/Sw8pIJT7b118HjdZMzaLGWa44akzoao3526TQqIQL6hGiAhYq1WU1qemLpcOiTkflPKSKa5XmdUuOER3QAfDZEX574Yx/ADhOkE7h2P2gAAAAAElFTkSuQmCC",Q="/assets/up-DZtwOBrf.png";document.querySelector("#app").innerHTML=`
<body>
    <header>
        <img class="header-logo" src="${n}" alt="Tele2">
        <div class="location">
            <img src="${u}" alt="location">
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
                <img src="${d}" alt="bossTele2">
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
                    <img src="${g}" alt="Youtube">
                    <p class="terrabyte__plus-text subtitle">Около 500 часов видео</p>
                </article>
                <article class="terrabyte__plus-block">
                    <img src="${b}" alt="Headphones">
                    <p class="terrabyte__plus-text subtitle">Примерно 200 000 песен</p>
                </article>
                <article class="terrabyte__plus-block">
                    <img src="${h}" alt="Camera">
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
                    <img src="${r}" alt="Ok">
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
        <img src="${B}" alt="MaskGroup">
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
                <img src="${p}" alt="Twitter">
            </a>
            <a href="#">
                <img src="${f}" alt="VKontakte">
            </a>
            <a href="#">
                <img src="${U}" alt="Facebook">
            </a>
        </nav>
        <section class="promotion">
            <p class="promotion__descr subtitle subtitle_13px">Полные условия акции</p>
            <img src="${E}" alt="16+">
        </section>
    </div>
    <div class="footer-credits">
        <section class="footer-tele2">
            <img src="${n}" alt="Tele2">
            <p class="footer-tele2__text subtitle_16px">© Tele2 Россия, 2021</p>
        </section>
        <section class="footer-chulakov">
            <p class="footer-chulakov__text subtitle_13px">Сделано в Студии Олега Чулакова</p>
            <img src="${C}" alt="Chulakov">
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
            <img src="${r}" alt="Ok">
            <img class="hidden" src="${k}" alt="Attention">
            <p class="subtitle subtitle_14px">Промокод выслан на ваш номер</p>
        </div>
    </form>
</dialog>

<div class="buttonBack buttonBack_hidden">
    <img src="${Q}" alt="up">
</div>

</body>
`;
