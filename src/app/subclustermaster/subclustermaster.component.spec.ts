import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubclustermasterComponent } from './subclustermaster.component';

describe('SubclustermasterComponent', () => {
  let component: SubclustermasterComponent;
  let fixture: ComponentFixture<SubclustermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubclustermasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubclustermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
