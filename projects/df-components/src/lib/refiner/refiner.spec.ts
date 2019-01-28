import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RefinerComponent } from './refiner.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RefinerGroup } from './refiner.models';
import { By } from '@angular/platform-browser';

describe('RefinerComponent', () => {
    let component: RefinerComponent;
    let fixture: ComponentFixture<RefinerComponent>;
    let firstRefiner: DebugElement

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [RefinerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RefinerComponent);
        component = fixture.componentInstance;
        component.refinerGroups = testRefinerGroups
        fixture.detectChanges();

        firstRefiner = fixture.debugElement.query(By.css('.refiner'))
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display lists of refiners', () => {
        expect(component).toMatchSnapshot()
    });

    it('should emit all selected refiners', () => {
        spyOn(component.refine, 'emit')
        firstRefiner.nativeElement.click()
        expect(component.refine.emit).toHaveBeenCalledWith([
            {
                ...testRefinerGroups[0],
                refiners: [testRefinerGroups[0].refiners[0]]
            }
        ])
    });
});


const testRefinerGroups: RefinerGroup[] = [
    {
        "id": "cb80b0e8-b441-49da-9c46-41e5b3a32102",
        "title": "Genera",
        "refiners": [
            {
                "id": "5f1e5511-7c4b-4df8-8711-b646133cca47",
                "title": "Actinidia",
                "count": 1
            },
            {
                "id": "1d639213-51bd-4f56-b370-fa2656c00e94",
                "title": "Allium",
                "count": 2
            },
            {
                "id": "d3f93714-766f-44bd-8233-eade778feb7c",
                "title": "Anacardium",
                "count": 1
            }
        ]
    }
    ,
    {
        "id": "5c6813d3-83fa-43cd-9023-996f9aac8931",
        "title": "Starts with",
        "refiners": [
            {
                "id": "7db2031a-fa8c-4cd2-badd-c48b299a58c3",
                "title": "A",
                "count": 3
            },
            {
                "id": "5730be84-c3b9-4caf-affa-fee468b85778",
                "title": "B",
                "count": 5
            },
            {
                "id": "7f65744c-0721-40ed-8e02-940ed303ec46",
                "title": "C",
                "count": 10
            }
        ]
    }
]