import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttobDebugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttobDebugElement = fixture.debugElement.query(By.css('button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting disabledFlag to false enable the button', () => {
    component.disabledFlag = false;
    fixture.detectChanges();
    expect(buttobDebugElement.nativeElement.disabled).toBeFalsy();
  });

  it('Setting disabledFlag to true disables the button', () => {
    component.disabledFlag = true;

    fixture.detectChanges();
    expect(buttobDebugElement.nativeElement.disabled).toBeTruthy();
  });

  it('Setting label to button', () => {
    component.labelbutton = 'Submit';
    fixture.detectChanges();
    expect(buttobDebugElement.nativeElement.textContent).toContain(component.labelbutton);
  });

  it('should listen for form changes', () => {
    spyOn(component.clickItemButtton, 'emit');
    component.functionClick('data');
    fixture.detectChanges();
    expect(component.clickItemButtton.emit).toHaveBeenCalled();
 });
});
