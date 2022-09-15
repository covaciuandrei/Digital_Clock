const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    let sec ='';
    let min ='';
    let hh = '';


    if (s < 10){
        sec=`0`;
    }
    if (m < 10){
        min=`0`;
    }
    if (h<10){
        hh=`0`;
    }

    console.log(sec, min, hh);
    let html = `
    <span>${hh}${h}</span> :
    <span>${min}${m}</span> :
    <span>${sec}${s}</span>
    `;
    clock.innerHTML = html;

};

setInterval(tick, 1000);