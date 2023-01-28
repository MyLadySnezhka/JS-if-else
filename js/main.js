const elSelectSex = document.querySelector('select[name=sex_select]');
const elAge = document.querySelector('.age_block');
const elAnswer = document.querySelector('.answer');
const elInputYear = document.querySelector('input[name=year]');
const elComment = document.querySelector('.comment');
const elBtnClose = document.querySelector('button[name=btn_close');

elSelectSex.addEventListener('change', (ev) => {
    let sex = ev.target.value;
    if (sex === 'female') {
        elAnswer.innerHTML = `<p>Яка ж ти гарненька киця! <br> У жінок про вік не питають!</p>`;
        elAge.classList.remove('show');
    } else if (sex === 'male') { 
        elAnswer.innerHTML = 'Якого ти року народження?';
        elAge.classList.add('show');
    } else {
        elAnswer.innerHTML = 'Здається, нічого не обрано...'
        elAge.classList.remove('show');
    };
});

elInputYear.addEventListener('keyup', (ev) => {
    elInputYear.value = elInputYear.value.replace(/[^0-9.]/g, '');
    const year = Number(ev.target.value);
    if (year < '1900') {
        elComment.innerHTML = 'Твій вік занадто стародавній. Ти часом не динозавр? Вкажи реальний рік!';
        return;
    }
    if (year > '2023') {
        elComment.innerHTML = 'Агов! Ти ще не народився?? Вкажи правильний рік!';
        return;
    }
    //console.log(year, typeof year);
    const time = moment().format('YYYY'); 
    let age = time - year;
    elComment.innerHTML = `Тобі ${age} років.`;
    if (age < 18) {elComment.insertAdjacentHTML("beforeend", `<p>Тому ще зарано таке дивитися!</p>`)}
    else {elComment.insertAdjacentHTML("beforeend", `<p>Сідай зручніше, обирай цікавіше!</p>`)};
});

elBtnClose.addEventListener('click', () => {
    elInputYear.value = '';
    elComment.innerHTML = '';
});




