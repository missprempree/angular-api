import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
    @Input() housingLocation!:HousingLocation;
}
