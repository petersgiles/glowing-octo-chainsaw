import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaTagsComponent } from './mega-tags.component';
import { MegaTagsService } from '..';
import { TestMegaTagsService } from '../test-mega-tags.service';
import { CommonModule } from '@angular/common';
import { MdcChipsModule } from '@angular-mdc/web';
import { PanelModule } from '../../panel';

describe('MegaTagsComponent', () => {
  let component: MegaTagsComponent;
  let fixture: ComponentFixture<MegaTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        PanelModule,
        MdcChipsModule,
      ],
      declarations: [ MegaTagsComponent ],
      providers: [{ provide: MegaTagsService, useClass: TestMegaTagsService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
