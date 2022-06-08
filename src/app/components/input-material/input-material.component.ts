import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../services/input-data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-input-material',
  templateUrl: './input-material.component.html',
  styleUrls: ['./input-material.component.scss']
})
export class InputMaterialComponent implements OnInit {

  myControl = new FormControl('');
  options: string[];
  filteredOptions: Observable<string[]>;

  constructor(private inputDataService: InputDataService) { }

  ngOnInit(): void {
    this.options = this.inputDataService.getInputData();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
