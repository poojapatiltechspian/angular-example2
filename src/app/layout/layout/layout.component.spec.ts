import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../header/header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DashboardCardComponent } from '../../dashboard/dashboard-card/dashboard-card.component';

import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';
import { ThemeService } from '../../shared/services/theme.service';

import { Location } from '@angular/common';
import { CommonService } from '../../common.service';
import { of } from 'rxjs';
import { routes } from '../../app-routing.module';
import { Router } from '@angular/router';
describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let service: LoginRegistrationSetupService;
  let location: Location;
  let router: Router;
  let themeService: ThemeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent, HeaderComponent, DashboardCardComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        BrowserAnimationsModule],
      providers: [LoginRegistrationSetupService, ThemeService, CommonService,
        provideMockStore()
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoginRegistrationSetupService);
    themeService = TestBed.inject(ThemeService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getUserStatus and return isLoginUser false', fakeAsync(() => {
    component.getUserStatus();
    fixture.detectChanges();
    if (localStorage.getItem('user') === null) {
      expect(component.isLoginUser).toEqual(false);
    }else {
      expect(component.isLoginUser).toEqual(true);
    }
  }));
  it('should call getUserStatus and return isLoginUser true', fakeAsync(() => {
    spyOn(service, 'getData').and.returnValue(of(true));
    component.getUserStatus();
    fixture.detectChanges();
    expect(component.isLoginUser).toEqual(true);
  }));

  it('should call logout', () => {
    spyOn(service, 'Logout').and.returnValue(of());
    spyOn(router, 'navigate');
    component.logout();
    expect(router.navigate).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should call theme', () => {
    const darkSpy = spyOn(themeService, 'toggleDark').and.callThrough();
    expect(darkSpy).not.toHaveBeenCalled();
    component.theme(true);
    fixture.detectChanges();
    expect(darkSpy).toHaveBeenCalled();
  });

});
