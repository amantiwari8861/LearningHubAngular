import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oneway } from './oneway';

describe('Oneway', () => {
  let component: Oneway;
  let fixture: ComponentFixture<Oneway>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oneway]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oneway);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
