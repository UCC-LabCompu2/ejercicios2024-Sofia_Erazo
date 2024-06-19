/**
 * conversion de metros, pulgadas, pie y yarda.
 * @method cambiarunidades
 * @param (string) id inputs de metros, pulgadas, pies y yardas.
 * @param (number) valor inputs de los metros,yardas,pies, y pulgadas.
 */

function cambiarunidades(id, value) {
    var metro, pulgada, pie, yarda;
    if (value.includes(",")) {
        value = value.replace(",", ".");
    }
    if (isNaN(value)) {
        alert('Se ingreso un valor invalido' + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id == "metro") {
        metro = value;
        pulgada = 39.3701 * value;
        pie = 3.28084 * value;
        yarda = 1.09361 * value;
    } else if (id == "pulgada") {
        pulgada = value;
        metro = 0.0254 * value;
        pie = 0.0833333 * value;
        yarda = 0.0277778 * value;
    } else if (id == "pie") {
        pie = value;
        metro = 0.3048 * value;
        pulgada = 12 * value;
        yarda = 0.333333 * value;
    } else if (id == "yarda") {
        yarda = value;
        metro = 0.9144 * value;
        pulgada = 36 * value;
        pie = 3 * value;
    }
    document.lasunidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.lasunidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasunidades.unid_yarda.value = Math.round(yarda * 100) / 100;
}

function convertir(id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI)/180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
    }


function mostraryocultar(valormo) {
    if (valormo == "val_mostrar") {
        document.getElementById("divmo").style.display = 'block';
    } else if (valormo == "val_ocultar") {
        document.getElementById("divmo").style.display = 'none';
    }
}

function calcularsum() {
    var nums1, nums2;
    nums1 = Number(document.getElementsByName("sum_num1")[0].value);
    //se escribe [0] porque no es id 
    nums2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = nums1 + Number(nums2);
}

function calcularesta() {
    var numr1, numr2;
    numr1 = Number(document.getElementsByName("res_num1")[0].value);
    numr2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = numr1 - Number(numr2);
}
function calcularmult() {
    var numm1, numm2;
    numm1 = Number(document.getElementsByName("mul_num1")[0].value);
    numm2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = numm1 * Number(numm2);
}
function calculardiv() {
    var numd1,numd2;
    numd1 = Number(document.getElementsByName("div_num1")[0].value);
    numd2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = numd1 / Number(numd2);
}


function dibujo() {
    const canvas = document.getElementById("canvasEJ1");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";

    //fillRect(x, y, width, height)
    ctx.fillRect(10, 15, 20, 25);

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}


function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargaresult() {
    var urlComp, can, un;
    urlComp = window.location.href.split("/")[10];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}