import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat'
import { Observable } from 'rxjs';
import { getStorage, ref } from 'firebase/storage';

@Component({
  selector: 'app-layout',
  standalone: true,
  providers: [AngularFireStorage],
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class LayoutComponent implements OnInit {
  iconNavBar !:Observable<string>
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.getIconNavBar();
  }

  getIconNavBar():void{
    this.afStorage.ref('icon-navbar/logo-cronicas.webp').getDownloadURL().subscribe(url => {
      this.iconNavBar = url;
    });
    
  }
}
