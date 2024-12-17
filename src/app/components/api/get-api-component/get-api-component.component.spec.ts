import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiComponentComponent } from './get-api-component.component';

describe('GetApiComponentComponent', () => {
  let component: GetApiComponentComponent;
  let fixture: ComponentFixture<GetApiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
