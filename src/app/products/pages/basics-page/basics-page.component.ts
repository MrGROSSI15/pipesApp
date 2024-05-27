import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando';
  public nameUper: string = 'FERNANDO';
  public fullName: string = 'FeRnAndo AlonSO';

  public customDate: Date = new Date(); 
}
