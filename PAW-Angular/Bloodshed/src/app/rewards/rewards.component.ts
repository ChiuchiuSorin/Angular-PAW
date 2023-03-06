import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reward } from '../models/reward';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  rewards: Array<Reward> = [
      new Reward(
        "Bratara",
        "Bratara cu sigla Bloodshed",
        10,
        "https://bratarifestival.ro/wp-content/uploads/2021/04/szilikon_logo_piros-768x768.png"
      ),
      new Reward(
        "Breloc",
        "Breloc pentru chei",
        5,
        "https://craftup.ro/wp-content/uploads/2019/04/Breloc-lemn-rotund-blank-craftup.ro_-1.jpg.webp"
      ),
      new Reward(
        "Tricou",
        "Tricou cu sigla Bloodshed personalizat - cu propriul tau nume",
        25,
        "https://gomagcdn.ro/domains2/echipamentul.ro/files/product/large/041270.jpg"
      ),
      new Reward(
        "Pix",
        "Pix cu culoarea propriului tau sange",
        5,
        "https://www.tonerdepot.ro/thumbs/470x470-fix-80/fd/39/fd39c911d293d2fbd7bc7e0779d0f8cf-lami-36075.jpg"
      ),
      new Reward(
        "Carnetel",
        "Carnet de scris cu foaie velina",
        20,
        "https://www.bootic.ro/wp-content/uploads/2022/10/Agenda-tip-jurnal-de-calatorie.png.webp"
      )
  ];

  constructor(private requestsService: RequestsService, private router: Router) { }

  ngOnInit(): void {
    if(this.requestsService.isJwtClear()) {
      this.router.navigate( ["/despre-noi"] );
    }
  }

}
