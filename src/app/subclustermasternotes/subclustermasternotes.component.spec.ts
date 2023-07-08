import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclustermasternotesComponent } from './subclustermasternotes.component';

describe('SubclustermasternotesComponent', () => {
  let component: SubclustermasternotesComponent;
  let fixture: ComponentFixture<SubclustermasternotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclustermasternotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclustermasternotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
