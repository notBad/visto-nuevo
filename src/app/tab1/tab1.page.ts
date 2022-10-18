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
    alert('funcion por implementar');

  }

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

