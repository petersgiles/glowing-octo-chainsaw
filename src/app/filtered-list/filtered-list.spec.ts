import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilteredListComponent } from './filtered-list.component';
import { MdcTextFieldModule, MdcListModule, MdcListItem, MdcTextField } from '@angular-mdc/web';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ListItem } from './filtered-list.models';
import { By } from '@angular/platform-browser';

const testItems: ListItem<any>[] = [
    {
        "id":  "6badd846-1232-4ccb-a031-93c72ce63795",
        "title":  "Apple",
        "info":  "Pyrus malus",
        "link": "/",
        "entity": { colour: "red" }
    },
    {
        "id":  "96f610a7-0999-4637-9001-774cc8b65cd2",
        "title":  "Apricot",
        "info":  "Prunus armeniaca"
    },
    {
        "id":  "4cae1e8d-ff43-400b-9170-6ab0c18691fd",
        "title":  "Avocado",
        "info":  "Persea americana"
    },
    {
        "id":  "c63dd826-b04b-40d3-9134-b4301d74a7af",
        "title":  "Banana",
        "info":  "Musa paradisicum"
    }
]

describe('FilteredListComponent', () => {
    let component: FilteredListComponent<any>;
    let fixture: ComponentFixture<FilteredListComponent<any>>;
    let firstItem: DebugElement

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // schemas: [NO_ERRORS_SCHEMA],
            imports: [
                CommonModule,
                FormsModule,      
                RouterTestingModule,
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
        component.items = testItems;
        fixture.detectChanges();

        firstItem = fixture.debugElement.query(By.directive(MdcListItem))
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain a list of items', () => {
        expect(fixture).toMatchSnapshot()
    });

    it('should emit an event and highlight when an item is selected', () => {
        spyOn(component.select, 'emit')
        firstItem.nativeElement.click()
        expect(component.select.emit).toHaveBeenCalledWith(testItems[0])
        
        fixture.detectChanges()
        expect(firstItem.nativeElement.classList.contains('selected')).toBe(true)
    });

    it('should contain a routerLink if link property is provided', () => {
        const routerLink = firstItem.nativeElement.getAttribute("ng-reflect-router-link")
        expect(routerLink).toBe(testItems[0].link)
    });

    it('should change the list when a filter is applied', () => {
        component.filter = 'Ap'
        fixture.detectChanges()
        expect(component.filteredList).toHaveLength(2)
    });

    it('should allow for custom entity filter expressions', () => {
        component.filterExpression = (listItem: ListItem<any>, filter: string) =>
            filter && listItem.entity && listItem.entity.colour.toLowerCase() === filter.toLowerCase()
        component.filter = 'red'
        fixture.detectChanges()
        expect(component.filteredList).toHaveLength(1)
    });
});
