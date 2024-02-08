import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchBackgoundComponent } from './switch-backgound.component';

describe('SwitchBackgoundComponent', () => {
  let component: SwitchBackgoundComponent;
  let fixture: ComponentFixture<SwitchBackgoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchBackgoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchBackgoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
