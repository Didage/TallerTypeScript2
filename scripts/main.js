import { series } from "./data.js";
var info = series;
var serieTable = document.getElementById("series");
var averageParagraph = document.getElementById("average");
var divCard = document.getElementById("divCard");
var listaSeries = document.getElementsByClassName("serie");
function actualizarTarjeta(i) {
    var serie = info[i];
    var html = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"https://i.imgur.com/EvKe48G.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">".concat(serie.nombre, "</h5>\n            <p class=\"card-text\">").concat(serie.descripcion, "</p>\n            <a href=\"").concat(serie.url, "\" class=\"btn btn-primary\">P\u00E1gina de la serie</a>\n        </div>\n    </div> ");
    divCard.innerHTML = html;
}
function mostrarSeries() {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, info_1 = info; _i < info_1.length; _i++) {
        var serie = info_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(serie.id, "</th>\n        <td><a href=\"\"id=\"").concat(serie.id).concat(serie.nombre, "\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        trElement.className = "table-light serie";
        tbodySeries.appendChild(trElement);
    }
    serieTable.appendChild(tbodySeries);
}
function calcularPromedioDeTemporadas() {
    var pSeries = document.createElement("p");
    var count = 0;
    for (var _i = 0, info_2 = info; _i < info_2.length; _i++) {
        var serie = info_2[_i];
        count += serie.temporadas;
    }
    count /= info.length;
    pSeries.innerHTML = "Seasons average: ".concat(count);
    averageParagraph.appendChild(pSeries);
}
mostrarSeries();
calcularPromedioDeTemporadas();
var _loop_1 = function (i) {
    listaSeries[i].addEventListener("click", function () {
        actualizarTarjeta(i);
    });
};
for (var i = 0; i < listaSeries.length; i++) {
    _loop_1(i);
}
