const sendButton = document.querySelector('#sendForm');

sendButton.addEventListener('click', (e) => { // отключение стандартного поведения submit
    e.preventDefault();
})

// СЛАЙДЕРЫ

const sliderBanner = document.querySelector("#banner"); // Ссылка на первый баннер
const sliderInfo = document.querySelector("#infoSlider"); // Ссылка на второй баннер

const sliderBannerImg = [
    "banner_one", "banner_two", "banner_three"]; // Наименование изображений
const sliderInfoImg = [
    "info_one", "info_two", "info_three"
]

// Вызов функций для начала работы слайдеров
slider(sliderBanner, sliderBannerImg); 
slider(sliderInfo, sliderInfoImg);

// Основная функция слайдеров
function slider(sliderBanner, sliderImg) {
    let slidesInfo = sliderBanner.children[0].children;
    let slidesId = createSliderNav(slidesInfo);
    let currentSlide = {
        id: 0
    };
    createEventNav(slidesId, sliderBanner, sliderImg, currentSlide);
    setInterval(() => {
        autoChangeSlide(currentSlide, sliderBanner, sliderImg, slidesId);
    },3000);
}

function createSliderNav(slides) {
    let slidesId = [];
    for(i in slides) {
        if(typeof(slides[i]) === "object") slidesId.push(slides[i].id);
    }
    return slidesId;
}

function autoChangeSlide(currentSlide, sliderBanner, sliderImg, slides) {
    if(sliderImg.length == currentSlide.id+1) {
        currentSlide.id = 0;
    } else {
        currentSlide.id ++; 
    }
    sliderBanner.style.backgroundImage = `url('resources/img/${sliderImg[currentSlide.id]+".jpg"}')`;
    changeCurrentSlide(slides, currentSlide.id);
}

function createEventNav(slides, sliderBanner, sliderImg, currentSlide) {
    slides.forEach((element, key) => {
        let el = document.querySelector(`#${element}`);
        el.addEventListener('click', () => {
           el.classList.add('active');
           currentSlide.id = key;
           changeCurrentSlide(slides, key);
            sliderBanner.style.backgroundImage = `url('resources/img/${sliderImg[key]+".jpg"}')`;
        });
    });
}

function changeCurrentSlide(slides, currentSlide) {
    slides.forEach((item, key) => {
        let el = document.querySelector(`#${item}`);
        if(key == currentSlide) {
            el.classList.add('active');
        }else {
            el.classList.remove('active');
        }
    });
}


// КОНЕЦ СЛАЙДЕРЫ