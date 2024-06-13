/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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