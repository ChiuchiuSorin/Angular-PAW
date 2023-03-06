import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-advice',
  templateUrl: './home-advice.component.html',
  styleUrls: ['./home-advice.component.css']
})
export class HomeAdviceComponent implements OnInit {
  public infoId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }
  informations = [
    {
      "title": "RECOMANDARI GENERALE",
      "content": 
      `
      Donatorul trebuie sa fie sincer in timpul convorbirii medicale pentru ca sangele 
      donat sa fie un produs sigur pentru bolnavul din spital.
      
      Nedeclararea intentionata a bolilor transmisibile sau a factorilor de risc 
      cunoscuti,dupa prealabila dv informare – constituie infractiune si se pedepseste 
      conform art.39 si 40 din LEGEA NE.282/2005 care reglementeaza activitatea de 
      donare din Romania .
      `
    },
    {
      "title": "PRINCIPALELE CRITERII DE ADMISIBILITATE LA DONARE",
      "content": 
      `
      - Vârsta De la 18 la 62 de ani
      
      - Donator iniţial la peste 50 de ani sub directa responsabilitate a medicului care 
      efectuează selecţia

      - Greutatea corporală >= 50 kg in corelatie cu inaltimea

      - Starea generală Aspectul clinic în momentul consultaţiei Nu trebuie să prezinte 
      pletoră, debilitate, intoxicaţie cu etanol sau droguri, subnutriţie, instabilitate 
      mintală, icter, cianoză, dispnee, anemie

      - Temperatura corporală < 37,5°C  

      - Pielea la locul de puncţie Potenţialul donator trebuie să aibă vene vizibile sau 
      bine conturate şi flexibile Nu trebuie să prezinte leziuni sau eczeme, iritaţii, 
      erupţii locale

      - Pulsul - Regulat - 50-100 bătăi/minut Cu excepţia sportivilor de performanţă, 
      care pot fi acceptaţi la donare şi în condiţiile descoperirii unei bradicardii 
      de < 50 bătăi/minut

      - Tensiunea arterială: 100 mm Hg <= TAS <= 180 mm Hg 60 mm Hg <= TAD <= 100 mm Hg
 `
    },
    {
      "title": "INAINTE DE DONARE VA RECOMANDAM",
      "content": `
      - sa consumati un mic dejun bogat in glucide si sa mancati cu cel putin 3 ore inainte
      - sa nu fumati  si sa nu consumati alcool, grasimi
      - sa nu consumati medicamente (aspirina, anticoagulante, antidiabetice, etc)
      - o stare buna de sanatate fizica si mentala, stare de igiena personala corespunzatoare
      - sa aveti un act de identitate in original
      - sa fiti odihniti si bine hidratati

        Totodata, daca ai avut dureri de dinti sau ai suferit o interventie stomatologica, 
      mai bine astepti 24 de ore inainte de a dona sange. In cazul in care ai avut interventii 
      dentare mai complicate, recomandat ar fi sa astepti cel putin o luna pana sa donezi sange.

        Donarea de sange,fiind un act medical trebuie tratat din punct de vedere al igienei 
      corparale ca si pentru o interventie chirurgicala mica.

        Donarea de sange este este un act medical lipsit de riscuri, daca esti sanatos si 
        pregatit psihologic.
      `
    },
    {
      "title": "MOTIVE PENTRU CARE AR FI BINE SA DONEZI",
      "content": `
      Gandestete ca este ca este un lucru de importanta nationala.

      - Cineva are nevoie de sange o data la 3 secunde. In medie, este nevoie de 500.000 de unitati 
      anual, in Romania. In Bucuresti, necesarul zilnic este de 1000 de unitati. Iar anul trecut 
      doar 66% din cerere a fost acoperita. Nu exista substitut pentru sangele uman.

      - 60% din populatie va avea nevoie de sange la un moment dat al vietii, cu toate ca doar 2% 
      din populatie doneaza sange.

      - Donarea de sange este o procedura sigura si benefica pentru sanatate. Studii recente au 
      demonstrat ca donarea de sange reduce cu 30% riscurile aparitiei bolilor cardiovasculare 
      prin scaderea tensiunii arteriale, iar donatorii de sange traiesc mai mult decat media 
      populatiei. In plus, ti se face un mini set de analize gratuit, inclusiv ti se masoara 
      tensiunea, ritmul cardiac, temperatura corpului si nivelul de fier. Plus ca este ce mai 
      simpla cale de a scapa de 1 kg in plus.

      - Donatorii de sange sunt adevarati eroi! De altfel, sangele donat de tine va fi descompus 
      in mai multe componente si vei putea sa ajuti pana la 3 vieti omenesti!

      - Donatorul de sange are de o zi libera (in ziua donarii). Bonurile valorice pe care le 
      primeste fiecare donator reprezinta o compensare biologica a sangelui pierdut prin donare.

      Inca ai nelamuriri? Te asteptam la centrul nostru de donatii pentru a afla mai multe detalii!
      `
    }
  ]

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.infoId = id;
    });
  }
  goPreviously() {
    let prevId = this.infoId - 1;
    if (prevId < 0) {
      prevId = 3;
    }
    this.router.navigate(["../" + prevId], { relativeTo: this.route });
  }
  goNext() {
    let nextId = this.infoId + 1;
    if (nextId > 3) {
      nextId = 0;
    }
    this.router.navigate(["../" + nextId], { relativeTo: this.route },);
  }

}
