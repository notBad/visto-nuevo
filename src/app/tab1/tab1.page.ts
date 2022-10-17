import { Component } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dia = false;
  semana = false;
  mes = false;

  constructor() {

  }



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

  clickDia(){
    //Aplicar CSS
    const frontal = document.getElementById('dia');
    const fondo = document.getElementById('dia_fondo');

    if (!this.dia) {
     frontal.style.backgroundColor = '#28ba62';
     frontal.style.transform = 'translateY(-4px)';
      fondo.style.backgroundColor = '#0D6E34';
      this.dia = true;
    } else {
     frontal.style.backgroundColor = '#787878';
     fondo.style.backgroundColor = '#545454';
     frontal.style.transform = 'translateY(-8px)';
      this.dia = false;
    }

  }
  clickSemana(){
    //Aplicar CSS
    const frontal = document.getElementById('semana');
    const fondo = document.getElementById('semana_fondo');

    if (!this.semana) {
     frontal.style.backgroundColor = '#28ba62';
     frontal.style.transform = 'translateY(-4px)';
      fondo.style.backgroundColor = '#0D6E34';
      this.semana = true;
    } else {
     frontal.style.backgroundColor = '#787878';
     fondo.style.backgroundColor = '#545454';
     frontal.style.transform = 'translateY(-8px)';
      this.semana = false;
    }

  }
  clickMes(){
    //Aplicar CSS
    const frontal = document.getElementById('mes');
    const fondo = document.getElementById('mes_fondo');

    if (!this.mes) {
     frontal.style.backgroundColor = '#28ba62';
     frontal.style.transform = 'translateY(-4px)';
      fondo.style.backgroundColor = '#0D6E34';
      this.mes = true;
    } else {
     frontal.style.backgroundColor = '#787878';
     fondo.style.backgroundColor = '#545454';
     frontal.style.transform = 'translateY(-8px)';
      this.mes = false;
    }

  }
}

