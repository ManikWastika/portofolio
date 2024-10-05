// Dark Mode
const Darkmode = () => {
    const burgir1 = document.getElementById('line1');
    const burgir2 = document.getElementById('line2');
    const burgir3 = document.getElementById('line3');
    const navbck = document.querySelector('.nav');
    const navsld = document.querySelector('nav');
    const btnmode = document.getElementById('mode');
    const h1textsh = document.getElementById('txtsh');
    const span = document.getElementById('namesh');
    const body = document.querySelector('body');
    const CCdrk = document.querySelector('.dark-mode');
    const CClght = document.querySelector('.light-mode');
    const tentangs = document.querySelector('.tentangs');
    const goals = document.querySelector('.goals-bc');
    const kalibl = document.querySelector('.black-kaligrafi');
    const kaliwht = document.querySelector('.white-kaligrafi');
    const projectbg = document.querySelector('.projects');
    const bdr1 = document.getElementById('bdr1');
    const bdr2 = document.getElementById('bdr2');
    const bdr3 = document.getElementById('bdr3');
    const f1 = document.getElementById('fill1');
    const f2 = document.getElementById('fill2');
    const f3 = document.getElementById('fill3');
    const f4 = document.getElementById('fill4');
    const kontakbc = document.querySelector('.kontaks');
    const skillsbc = document.querySelector('.skills-bc');
    const foten = document.querySelector('.footen');
    let DarkMode = false;

    btnmode.addEventListener("click", () => {
        DarkMode = !DarkMode;
        if(DarkMode){
            btnmode.textContent = 'Light Mode';
            h1textsh.style.textShadow =  "2px 2px 1px white";
            span.style.textShadow =  "2px 2px 1px white";
            kalibl.style.display = 'none';
            kaliwht.style.display = 'block';
            CCdrk.style.display = 'none';
            CClght.style.display = 'block';
            burgir1.style.backgroundColor = 'white';
            burgir2.style.backgroundColor = 'white';
            burgir3.style.backgroundColor = 'white';

        }else{
            btnmode.textContent = 'Dark Mode';
            h1textsh.style.textShadow =  "2px 2px 1px black";
            span.style.textShadow =  "2px 2px 1px black";
            kaliwht.style.display = 'none';
            kalibl.style.display = 'block';
            CCdrk.style.display = 'block';
            CClght.style.display = 'none';
            burgir1.style.backgroundColor = 'black';
            burgir2.style.backgroundColor = 'black';
            burgir3.style.backgroundColor = 'black';
        };

        navbck.classList.toggle('navbc')
        body.classList.toggle('textwht');
        tentangs.classList.toggle('darkmodetentang');
        goals.classList.toggle('darkmodegoals');
        projectbg.classList.toggle('darkmodetentang');
        bdr1.classList.toggle('bdr-white');
        bdr2.classList.toggle('bdr-white');
        bdr3.classList.toggle('bdr-white');
        skillsbc.classList.toggle('darkmodegoals');
        f1.classList.toggle('svgfill');
        f2.classList.toggle('svgfill');
        f3.classList.toggle('svgfill');
        f4.classList.toggle('svgfill');
        kontakbc.classList.toggle('darkmodetentang');
        foten.classList.toggle('footen-color');
        navsld.classList.toggle('bc-navu');

    });

};

Darkmode();


// Navbar
const navbar = () => {
    const burger = document.querySelector('.burger');
    const navslide = document.querySelector('nav');

    burger.addEventListener("click", () => {
        navslide.classList.toggle('nav-open');
        burger.classList.toggle('animate-burger');
    });
};

navbar();

// reset form
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }
};