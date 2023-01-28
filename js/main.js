const elSelectSex = document.querySelector('select[name=sex_select]');
const elAge = document.querySelector('.age_block');
const elAnswer = document.querySelector('.answer');

elSelectSex.addEventListener('change', (ev) => {
    let sex = ev.target.value;
    if (sex === 'female') {
        elAnswer.innerHTML = 'Яка ж гарненька киця!';
        elAge.classList.remove('show');
    } else if (sex === 'male') { 
        elAnswer.innerHTML = 'Якого ти року народження?';
        elAge.classList.add('show');
    } else {
        elAnswer.innerHTML = 'Здається, нічого не обрано...'
        elAge.classList.remove('show');
    };
})

elAge.addEventListener('change', (ev) => {
    const year = ev.target.value;
})