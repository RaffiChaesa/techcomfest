document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById("image-track");
    let prevPercentage = 0;

    const handleOnDown = e => {
        track.dataset.mouseDownAt = e.deltaX;
        handleOnMove(e);
    }

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) + e.deltaX,
            maxDelta = window.innerWidth / 0.4;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.prevPercentage = nextPercentage;
        prevPercentage = nextPercentage;

        if (!isNaN(nextPercentage)) {
            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });
        }

        for (const image of track.getElementsByClassName("image")) {
            if (!isNaN(100 + nextPercentage)) {
                image.animate({
                    objectPosition: `${100 + nextPercentage}% -30%`
                }, { duration: 1200, fill: "forwards" });
            }
        }
    }

    window.onwheel = e => {
        handleOnDown(e);
    };

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);
});


const odometerElements = document.querySelectorAll('.odometer');
const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            odometerElements.forEach((odometer) => {
                odometer.innerHTML = odometer.dataset.value;
                new Odometer({
                    el: odometer,
                    value: 0,
                }).update(odometer.dataset.value);
            });

            observer.unobserve(entry.target);
        }
    });
};

const odometerObserver = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
});

odometerElements.forEach((odometer) => {
    odometerObserver.observe(odometer);
});
    

document.querySelector('.Kalimantan').addEventListener('mouseover', function () {
    document.querySelector('#KalimantanBackgroundLayer3').style.fill = '#006994';
    document.querySelector('#KalimantanBackgroundLayer2').style.fill = '#3387A9';
    document.querySelector('#KalimantanBackgroundLayer1').style.fill = '#99C3D4';
    document.querySelector('#PulauKalimantan').style.fill = '#304D30';
    document.querySelector('.Kalimantan').style.cursor = 'pointer';
    document.querySelector('.Kalimantan').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.Kalimantan').style.animation = '.300s ease-out';
    document.querySelector('.Kalimantan').style.transform = 'scale(1.01)';
    document.querySelector('.Kalimantan').style.transformOrigin = 'center';
});
document.querySelector('.Maluku').addEventListener('mouseover', function () {
    let paths1 = document.querySelectorAll('.MalukuBackgroundLayer3 path');
    for (var i = 0; i < paths1.length; i++) {
        paths1[i].style.fill = '#006994';
    }
    let paths2 = document.querySelectorAll('.MalukuBackgroundLayer2 path');
    for (var i = 0; i < paths2.length; i++) {
        paths2[i].style.fill = '#3387A9';
    }
    let paths3 = document.querySelectorAll('.MalukuBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '#99C3D4';
    }
    document.querySelector('#PulauMaluku').style.fill = '#304D30';
    document.querySelector('.Maluku').style.cursor = 'pointer';
    document.querySelector('.Maluku').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.Maluku').style.animation = '.300s ease-out';
    document.querySelector('.Maluku').style.transform = 'scale(1.01)';
    document.querySelector('.Maluku').style.transformOrigin = 'center';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var nttNtbElement = document.querySelector('.NTTdanNTB');
    var malukuElement = document.querySelector('.Maluku');
    var papuaElement = document.querySelector('.Papua');

    indonesiaMap.insertBefore(nttNtbElement, malukuElement);
    indonesiaMap.insertBefore(papuaElement, malukuElement);
});
document.querySelector('.NTTdanNTB').addEventListener('mouseover', function () {
    document.querySelector('#NTTNTBBackgroundLayer3').style.fill = '#006994';
    let paths2 = document.querySelectorAll('.NTTNTBBackgroundLayer2 path');
    for (var i = 0; i < paths2.length; i++) {
        paths2[i].style.fill = '#3387A9';
    }
    let paths3 = document.querySelectorAll('.NTTNTBBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '#99C3D4';
    }
    document.querySelector('#PulauNTTdanNTB').style.fill = '#304D30';
    document.querySelector('.NTTdanNTB').style.cursor = 'pointer';
    document.querySelector('.NTTdanNTB').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.NTTdanNTB').style.animation = '.300s ease-out';
    document.querySelector('.NTTdanNTB').style.transform = 'scale(1.01)';
    document.querySelector('.NTTdanNTB').style.transformOrigin = 'center';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var nttNtbElement = document.querySelector('.NTTdanNTB');
    var jawaBaliElement = document.querySelector('.JawadanBali');
    var malukuElement = document.querySelector('.Maluku');

    indonesiaMap.insertBefore(jawaBaliElement, nttNtbElement);
    indonesiaMap.insertBefore(malukuElement, nttNtbElement);
});
document.querySelector('.Papua').addEventListener('mouseover', function () {
    document.querySelector('#PapuaBackgroundLayer3').style.fill = '#006994';
    document.querySelector('#PapuaBackgroundLayer2').style.fill = '#3387A9';
    let paths3 = document.querySelectorAll('.PapuaBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '#99C3D4';
    }
    document.querySelector('#PulauPapua').style.fill = '#304D30';
    document.querySelector('.Papua').style.cursor = 'pointer';
    document.querySelector('.Papua').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.Papua').style.animation = '.300s ease-out';
    document.querySelector('.Papua').style.transform = 'scale(1.01)';
    document.querySelector('.Papua').style.transformOrigin = 'center';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var malukuElement = document.querySelector('.Maluku');
    var papuaElement = document.querySelector('.Papua');

    indonesiaMap.insertBefore(malukuElement, papuaElement);
});
document.querySelector('.Sulawesi').addEventListener('mouseover', function () {
    document.querySelector('#SulawesiBackgroundLayer3').style.fill = '#006994';
    document.querySelector('#SulawesiBackgroundLayer2').style.fill = '#3387A9';
    let paths3 = document.querySelectorAll('.SulawesiBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '#99C3D4';
    }
    document.querySelector('#PulauSulawesi').style.fill = '#304D30';
    document.querySelector('.Sulawesi').style.cursor = 'pointer';
    document.querySelector('.Sulawesi').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.Sulawesi').style.animation = '.300s ease-out';
    document.querySelector('.Sulawesi').style.transform = 'scale(1.01)';
    document.querySelector('.Sulawesi').style.transformOrigin = 'center';
});
document.querySelector('.JawadanBali').addEventListener('mouseover', function () {
    document.querySelector('#JawaBaliBackgroundLayer3').style.fill = '#006994';
    document.querySelector('#JawaBaliBackgroundLayer2').style.fill = '#3387A9';
    let paths3 = document.querySelectorAll('.JawaBaliBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '#99C3D4';
    }
    document.querySelector('#PulauJawadanBali').style.fill = '#304D30';
    document.querySelector('.JawadanBali').style.cursor = 'pointer';
    document.querySelector('.JawadanBali').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.JawadanBali').style.animation = '.300s ease-out';
    document.querySelector('.JawadanBali').style.transform = 'scale(1.01)';
    document.querySelector('.JawadanBali').style.transformOrigin = 'center';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var sumateraElement = document.querySelector('.Sumatera');
    var jawaBaliElement = document.querySelector('.JawadanBali');
    var nttNtbElement = document.querySelector('.NTTdanNTB');

    indonesiaMap.insertBefore(sumateraElement, jawaBaliElement);
    indonesiaMap.insertBefore(nttNtbElement, jawaBaliElement);

});
document.querySelector('.Sumatera').addEventListener('mouseover', function () {
    document.querySelector('#SumateraBackgroundLayer3').style.fill = '#006994';
    document.querySelector('#SumateraBackgroundLayer2').style.fill = '#3387A9';
    let paths3 = document.querySelectorAll('.SumateraBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '#99C3D4';
    }
    document.querySelector('#PulauSumatera').style.fill = '#304D30';
    document.querySelector('.Sumatera').style.cursor = 'pointer';
    document.querySelector('.Sumatera').style.transition = 'fill 0.3s ease-out, transform 0.3s ease-out';
    document.querySelector('.Sumatera').style.animation = '.300s ease-out';
    document.querySelector('.Sumatera').style.transform = 'scale(1.01)';
    document.querySelector('.Sumatera').style.transformOrigin = 'center';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var sumateraElement = document.querySelector('.Sumatera');
    var jawaBaliElement = document.querySelector('.JawadanBali');

    indonesiaMap.insertBefore(jawaBaliElement, sumateraElement);
});
document.querySelector('.Kalimantan').addEventListener('mouseout', function () {
    document.querySelector('#KalimantanBackgroundLayer3').style.fill = '';
    document.querySelector('#KalimantanBackgroundLayer2').style.fill = '';
    document.querySelector('#KalimantanBackgroundLayer1').style.fill = '';
    document.querySelector('#PulauKalimantan').style.fill = '';
    document.querySelector('.Kalimantan').style.cursor = 'default';
    document.querySelector('.Kalimantan').style.transform = '';
});
document.querySelector('.Maluku').addEventListener('mouseout', function () {
    let paths1 = document.querySelectorAll('.MalukuBackgroundLayer3 path');
    for (var i = 0; i < paths1.length; i++) {
        paths1[i].style.fill = '';
    }
    let paths2 = document.querySelectorAll('.MalukuBackgroundLayer2 path');
    for (var i = 0; i < paths2.length; i++) {
        paths2[i].style.fill = '';
    }
    let paths3 = document.querySelectorAll('.MalukuBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '';
    }
    document.querySelector('#PulauMaluku').style.fill = '';
    document.querySelector('.Maluku').style.cursor = 'default';
    document.querySelector('.Maluku').style.transform = '';
});
document.querySelector('.NTTdanNTB').addEventListener('mouseout', function () {
    document.querySelector('#NTTNTBBackgroundLayer3').style.fill = '';
    let paths2 = document.querySelectorAll('.NTTNTBBackgroundLayer2 path');
    for (var i = 0; i < paths2.length; i++) {
        paths2[i].style.fill = '';
    }
    let paths3 = document.querySelectorAll('.NTTNTBBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '';
    }
    document.querySelector('#PulauNTTdanNTB').style.fill = '';
    document.querySelector('.NTTdanNTB').style.cursor = 'default';
    document.querySelector('.NTTdanNTB').style.transform = '';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var jawaBaliElement = document.querySelector('.JawadanBali');
    var nttNtbElement = document.querySelector('.NTTdanNTB');

    indonesiaMap.insertBefore(nttNtbElement, jawaBaliElement);
});
document.querySelector('.Papua').addEventListener('mouseout', function () {
    document.querySelector('#PapuaBackgroundLayer3').style.fill = '';
    document.querySelector('#PapuaBackgroundLayer2').style.fill = '';
    let paths3 = document.querySelectorAll('.PapuaBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '';
    }
    document.querySelector('#PulauPapua').style.fill = '';
    document.querySelector('.Papua').style.cursor = 'default';
    document.querySelector('.Papua').style.transform = '';
});
document.querySelector('.Sulawesi').addEventListener('mouseout', function () {
    document.querySelector('#SulawesiBackgroundLayer3').style.fill = '';
    document.querySelector('#SulawesiBackgroundLayer2').style.fill = '';
    let paths3 = document.querySelectorAll('.SulawesiBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '';
    }
    document.querySelector('#PulauSulawesi').style.fill = '';
    document.querySelector('.Sulawesi').style.cursor = 'default';
    document.querySelector('.Sulawesi').style.transform = '';
});
document.querySelector('.JawadanBali').addEventListener('mouseout', function () {
    document.querySelector('#JawaBaliBackgroundLayer3').style.fill = '';
    document.querySelector('#JawaBaliBackgroundLayer2').style.fill = '';
    let paths3 = document.querySelectorAll('.JawaBaliBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '';
    }
    document.querySelector('#PulauJawadanBali').style.fill = '';
    document.querySelector('.JawadanBali').style.cursor = 'default';
    document.querySelector('.JawadanBali').style.transform = '';

    var indonesiaMap = document.getElementById('Indonesia Map');

    var sumateraElement = document.querySelector('.Sumatera');
    var jawaBaliElement = document.querySelector('.JawadanBali');

    indonesiaMap.insertBefore(jawaBaliElement, sumateraElement);
});
document.querySelector('.Sumatera').addEventListener('mouseout', function () {
    document.querySelector('#SumateraBackgroundLayer3').style.fill = '';
    document.querySelector('#SumateraBackgroundLayer2').style.fill = '';
    let paths3 = document.querySelectorAll('.SumateraBackgroundLayer1 path');
    for (var i = 0; i < paths3.length; i++) {
        paths3[i].style.fill = '';
    }
    document.querySelector('#PulauSumatera').style.fill = '';
    document.querySelector('.Sumatera').style.cursor = 'default';
    document.querySelector('.Sumatera').style.transform = '';
});