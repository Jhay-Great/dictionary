import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosMeaningComponent } from './pos-meaning.component';

describe('PosMeaningComponent', () => {
  let component: PosMeaningComponent;
  let fixture: ComponentFixture<PosMeaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosMeaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
