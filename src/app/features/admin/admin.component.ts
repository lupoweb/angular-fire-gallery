import { Component, OnInit } from '@angular/core';

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
        <form>
          <input type="text" placeholder="Add new image URL">
          <button class="button" type="button">Generate Image</button>
        </form>
      </div>

      <div class="image-container">
        <div class="grid">
          <div class="cell">
            <img class="responsive-image" src="https://picsum.photos/600/400?image=10">
            <span class="icon cursor">✖</span>
          </div>

          <div class="cell">
            <img class="responsive-image" src="https://picsum.photos/600/400?image=10">
            <span class="icon cursor">✖</span>
          </div>


          <div class="cell">
            <img class="responsive-image" src="https://picsum.photos/600/400?image=10">
            <span class="icon cursor">✖</span>
          </div>


          <div class="cell">
            <img class="responsive-image" src="https://picsum.photos/600/400?image=10">
            <span class="icon cursor">✖</span>
          </div>

          <div class="cell">
            <img class="responsive-image" src="https://picsum.photos/600/400?image=10">
            <span class="icon cursor">✖</span>
          </div>


          <div class="cell">
            <img class="responsive-image" src="https://picsum.photos/600/400?image=10">
            <span class="icon cursor">✖</span>
          </div>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
