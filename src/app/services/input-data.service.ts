import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {

  availableTags: string[] = [
    'ActionScript',
    'AppleScript',
    'Asp',
    'BASIC',
    'C',
    'C++',
    'Clojure',
    'COBOL',
    'ColdFusion',
    'Erlang',
    'Fortran',
    'Groovy',
    'Haskell',
    'Java',
    'JavaScript',
    'Lisp',
    'Perl',
    'PHP',
    'Python',
    'Ruby',
    'Scala',
    'Scheme'
  ];

  constructor() { }

  getInputData(): string[] {
    return this.availableTags;
  }
}
