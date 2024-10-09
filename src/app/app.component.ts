import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isloading !: boolean
  constructor(private _loaderservice: LoaderService) { }
  ngOnInit(): void {
    this._loaderservice.newloadersubjec$
      .subscribe((res: boolean) => {
        this.isloading = res
      })

  }
  title = 'httpcalltask';



  onfileinput(e: Event) {
    let selectedfile = e.target



  }

  readeyfiel(file: File) {

    return new Promise((res, rej) => {
      let reader = new FileReader()


      reader.onload = () => {


      }
   


    })

  }
}
