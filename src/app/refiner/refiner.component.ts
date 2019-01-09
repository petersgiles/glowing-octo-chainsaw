import { Component, OnInit, NgZone, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'
import { debounceTime, distinctUntilChanged, flatMap } from 'rxjs/operators'
import { RefinerGroup, RefinerType } from './refiner.model';

@Component({
  selector: 'df-refiner',
  templateUrl: './refiner.component.html',
  styleUrls: ['./refiner.component.scss']
})
export class RefinerComponent implements OnInit {

  searchControl: FormControl

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.searchControl = new FormControl()
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
      )
      .subscribe((searchResult) => {
        this.onSearchCriteriaChanged.emit(searchResult)
      }, (err: Error) => {
        // tslint:disable-next-line:no-console
        console.log(err)
      })
  }

  @ViewChild('search')
  public searchElementRef: ElementRef

  startVisible: boolean

  @Input()
  refinerGroups: RefinerGroup[]

  @Output()
  onRefinerGroupSelected: EventEmitter<RefinerGroup> = new EventEmitter()

  @Output()
  onRefinerSelected: EventEmitter<RefinerType> = new EventEmitter()

  @Output()
  onSearchCriteriaChanged: EventEmitter<any> = new EventEmitter()

  @Output()
  onSaveRefiner: EventEmitter<any> = new EventEmitter()

  @Output()
  onClear: EventEmitter<any> = new EventEmitter()

  handleOnClear($event) {
    this.searchControl.reset()
    this.onClear.emit()
  }

}
