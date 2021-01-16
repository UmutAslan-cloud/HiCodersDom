/**
 * Html uzerinde sarj edebilmemiz icin bir pil sarj butonlari ve sarj yuzdesi olusturulacak
 * sarj yuzdesinin  durumuna gore arka plan rengini yuzde metni degistirilecek
 * bunlar icin dom api kullanilarak html deki elementlere ulasilip uzerleerinde degisiklik yapilacak
 * sarj dolumu icin ve sarj bosaltimi icin ayri fonksiyonlar kullanilacak 
 * bu odevde bizden istenen kriterler ise soyle
 * 1. Programin duzgun calisiyor olmasi [-20]
2. Algoritmanin dogru kurilmasi [-20]
3. Programlarin fonksiyon ile olusturulmasi [-20]
4. Programinin hizalamalarinin duzgun olmasi [-10]S
5. Gecislerde pil rengi degisyor olmali [-20]
 */

let callIdStatus = document.getElementById("status");
let callIdlow = document.getElementById("zero");
let callIdNormal = document.getElementById("half");
let callIdFull = document.getElementById("full");
//Sarj etme Fonksiyonlari
function plus() {
    callIdStatus.innerHTML = "%66"
    callIdlow.style.backgroundColor = "orange";
    callIdNormal.style.backgroundColor = "orange";
    callIdFull.style.backgroundColor = "white";
}

function plusfull() {
    callIdStatus.innerHTML = "%99"
    callIdlow.style.backgroundColor = "green";
    callIdNormal.style.backgroundColor = "green";
    callIdFull.style.backgroundColor = "green";
}

function multi() {
    if (callIdStatus.textContent == "%0") {
        minus()
    } else if (callIdStatus.textContent == "%33") {
        plus()
    } else if (callIdStatus.textContent == "%66") {
        plusfull()
    }
}

//Sarj bosaltma fonksiyonlari
function minus() {
    callIdStatus.innerHTML = "%33"
    callIdlow.style.backgroundColor = "red";
    callIdNormal.style.backgroundColor = "white";
    callIdFull.style.backgroundColor = "white";
}

function zeromin() {
    callIdStatus.innerHTML = "%0"
    callIdlow.style.backgroundColor = "white";
    callIdNormal.style.backgroundColor = "white";
    callIdFull.style.backgroundColor = "white";
}

function multimin() {
    if (callIdStatus.textContent == "%99") {
        plus()
    } else if (callIdStatus.textContent == "%66") {
        minus()
    } else if (callIdStatus.textContent == "%33") {
        zeromin()
    }
}

let chargeup=document.getElementById("up")
let chargedown=document.getElementById("down")
chargeup.addEventListener("click",multi);
chargedown.addEventListener("click",multimin);