import { Component } from '@angular/core';

@Component({
  selector: 'app-story-header',
  template: `
 <div class="navbar">
    <div class="tooltip">
      <span class="tooltiptext">Switch Theme</span><label class="switch"><input type="checkbox" id="darkTheme"> <span class="slider round"></span></label>
    </div>
    <a >Home</a>
    <a >Crud Operations</a>
    <div class="dropdown">
        <button class="dropbtn">NgRx
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a >Product List</a>
          <a >Add Product</a>
        </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Practice Assignment
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a >Flexbox Layout</a>
        <a >Grid Layout</a>
        <a >NgRx Example1</a>
        <a >NgRx Example2</a>
      </div>
    </div>
    <a class="align-right">Logout</a>
  </div>
  `,
  styleUrls: ['./header.css'],
})
export default class HeaderStoryComponent {
  constructor(){}
}
