import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiComponentComponent } from './post-api-component.component';

describe('PostApiComponentComponent', () => {
  let component: PostApiComponentComponent;
  let fixture: ComponentFixture<PostApiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
