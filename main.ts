import { series } from "./data.js";
import { Serie } from "./serie.js";

let info = series;

let serieTable: HTMLElement = document.getElementById("series")!;
let averageParagraph: HTMLElement =document.getElementById("average")!;
let divCard: HTMLElement = document.getElementById("divCard")!;

let listaSeries: HTMLCollectionOf<Element> = document.getElementsByClassName("serie")!;

function actualizarTarjeta(i: number): void {
    let serie = info[i];
    let html = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://i.imgur.com/EvKe48G.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${serie.nombre}</h5>
            <p class="card-text">${serie.descripcion}</p>
            <a href="${serie.url}" class="btn btn-primary">Página de la serie</a>
        </div>
    </div> `;

    divCard.innerHTML = html;
}

function mostrarSeries(): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");
    for (let serie of info) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${serie.id}</th>
        <td><a href=""id="${serie.id}${serie.nombre}">${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        trElement.className = "table-light serie";
        tbodySeries.appendChild(trElement);
    }
   
    serieTable.appendChild(tbodySeries);
}

function calcularPromedioDeTemporadas(): void {
    let pSeries: HTMLElement = document.createElement("p");
    let count = 0;
    for (let serie of info) {
        count += serie.temporadas;
    }
    count/=info.length;
    pSeries.innerHTML = `Seasons average: ${count}`;
    averageParagraph.appendChild(pSeries);
}

mostrarSeries();
calcularPromedioDeTemporadas();

for (let i = 0; i < listaSeries.length; i++) {
    listaSeries[i].addEventListener("click", () => {
        actualizarTarjeta(i);
    });
}