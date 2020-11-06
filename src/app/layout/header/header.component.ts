import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../../shared/services/theme.service';
import { LoginRegistrationSetupService } from '../../setup/login-registration-setup.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    ) { }
    ngOnInit(): void {
    }
}
