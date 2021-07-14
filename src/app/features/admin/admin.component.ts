import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Presentation} from '../../model/presentation';

@Component({
  selector: 'app-admin',
  template: `
    <!--player-->
    <div class="center">
      <img
        class="player-image"
        src="https://picsum.photos/600/400?image=10"
      >

      <div>
        <button class="button">PREV</button>
        <span class="counter"> 1 / 3</span>
        <button class="button">NEXT</button>
      </div>
    </div>

    <!--gallery-->
    <div class="gallery">
      <div class="center">
        <form #f="ngForm" (submit)="addImage(f.value.tmb)">
          <input type="text" placeholder="Add new image URL" [ngModel] name="tmb">
          <button class="button" type="button" (click)="generateRandomImage()">Generate Image</button>
        </form>
      </div>
      <div class="image-container">
        <div class="grid">
          <div class="cell" *ngFor="let item of items">
            <img class="responsive-image" [src]="item">
            <span class="icon cursor" (click)="deleteImage(item)">✖</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  items: string[] = [];
  constructor(private db: AngularFireDatabase) {
    db.object<Presentation>('presentation').valueChanges().subscribe((res: Presentation) => this.items = res.images);
  }

  addImage(url: string) {
    this.items = [...this.items, url];
    this.db.object('presentation/images').set(this.items);
  }

  deleteImage(imageToDelete: string) {
    this.items = this.items.filter(item => item !== imageToDelete);
    this.db.object('presentation/images').set(this.items);
  }

  generateRandomImage() {
    const random = Math.floor(Math.random() * 200);
    const tmb = `https://picsum.photos/600/400?image=${random}`;
    this.addImage(tmb);
  }

}
