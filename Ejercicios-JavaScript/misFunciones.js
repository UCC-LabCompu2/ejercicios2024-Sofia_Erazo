/**
 * conversion de metros, pulgadas, pie y yarda.
 * @method cambiarunidades
 * @param (string) id inputs de metros, pulgadas, pies y yardas.
 * @param (number) valor inputs de los metros,yardas,pies, y pulgadas.
 */

function cambiarunidades(id, value) {
    if (isNaN(value)) {
        alert('Se ingreso un valor invalido' + id);
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.lasunidades.unid_pulgada.value = 39.3701 * value;
        document.lasunidades.unid_pie.value = 3.28084 * value;
        document.lasunidades.unid_yarda.value = 1.09361 * value;
    } else if (id == "pulgada") {
        document.lasunidades.unid_metro.value = 0.0254 * value;
        document.lasunidades.unid_pie.value = 0.0833333 * value;
        document.lasunidades.unid_yarda.value = 0.0277778 * value;
    }   else if (id == "pie") {
            document.lasunidades.unid_metro.value = 0.3048 * value;
            document.lasunidades.unid_pulgada.value = 12 * value;
            document.lasunidades.unid_yarda.value = 0.333333 * value;
    } else if (id == "yarda") {
        document.lasunidades.unid_metro.value = 0.9144 * value;
        document.lasunidades.unid_pulgada.value = 36 * value;
        document.lasunidades.unid_pie.value = 3 * value;
    }

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



