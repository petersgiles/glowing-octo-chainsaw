import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredListComponent } from './filtered-list.component';
import { MdcTextFieldModule, MdcListModule } from '@angular-mdc/web';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('FilteredListComponent', () => {
    let component: FilteredListComponent<any>;
    let fixture: ComponentFixture<FilteredListComponent<any>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,      
                RouterModule.forChild([]),
                MdcListModule,
                MdcTextFieldModule
            ],
            declarations: [FilteredListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilteredListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
