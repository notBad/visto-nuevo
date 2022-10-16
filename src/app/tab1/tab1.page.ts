import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  click(){
/*     alert('hola'); */
    this.cargaTabla();
  }

  cargaTabla() {
    const listaJson = [
      {
        carrito: false,
        articulo: 'Pan',
        unidades: 1,
        precio: 0.5
      },
      {
        carrito: true,
        articulo: 'Leche',
        unidades: 1,
        precio: 1.05
      }
    ];

    this.jsonToHtmlTable(listaJson);
  }

  jsonToHtmlTable(listaJson) {
    //Get the headers from JSON data
    const headers = Object.keys(listaJson[0]);
    let i;
    const headerRowHTML: string =
      '<tr>' +
      '<td class="carrito">' +
      '<ion-icon name="cart" class="medio"></ion-icon>' +
      '</td>' +
      '<td class="articulo">' +
      '<ion-label><b>Articulo</b></ion-label>' +
      '</td>' +
      '<td class="unidades" class="cifra">' +
      '<ion-label><b>Uds</b></ion-label>' +
      '</td>' +
      '<td class="precio" class="cifra">' +
      '<ion-label><b>Precio</b></ion-label>' +
      '</td>' +
      '</tr>';
    /*   //Prepare html header
         let headerRowHTML='<tr>';
         for (i=0; i < headers.length; i++){
             headerRowHTML+='<th>'+headers[i]+'</th>';
         }
         headerRowHTML+='</tr>'; */

    //Prepare all records as HTML
    let allRecordsHTML = '';
    let j;
    for (i = 0; i < listaJson.length; i++) {
      //Prepare html row
      allRecordsHTML += '<tr>';
      for (j = 0; j < headers.length; j++) {
        const header = headers[j];
        allRecordsHTML +=
          '<td class="' +
          //especifica la columna que es para aplicar estilo
          header +
          //especifica si son numeros para justificar a la derecha
          ((typeof (listaJson[i][header]) == typeof 5) ? '" class="cifra' : '') +
          '">' +
          //el dato dentro de la celda
          listaJson[i][header] +
          '</td>';
      }
      allRecordsHTML += '</tr>';

    }

    //Append the table header and all records
    const table = document.getElementById('listado');
    table.innerHTML = headerRowHTML + allRecordsHTML;
    //Aplicar CSS
    const test = document.getElementById('testeo2');
    test.style.backgroundColor = '#FF00FF';

    //this.refreshCSS();
  }
  //para web puede funcionar para ionic no creo que se pueda adaptar
  refreshCSS = () => {
    const links = document.getElementsByTagName('link');
    let i = 0;
    for (; i < links.length; i++) {
        if (links[i].getAttribute('rel') === 'stylesheet') {
            const href = links[i].getAttribute('href')
                                    .split('?')[0];

            const newHref = href + '?version='
                        + new Date().getMilliseconds();

            links[i].setAttribute('href', newHref);
        }
    }
  };
}

