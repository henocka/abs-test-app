import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../services/input-data.service';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit {

  availableTags: string[];

  constructor(private inputDataService: InputDataService) { }

  ngOnInit(): void {
    this.availableTags = this.inputDataService.getInputData();
    ($('#tags') as any).autocomplete({
      source: this.availableTags
    });
  }

}
