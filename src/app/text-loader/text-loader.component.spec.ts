import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLoaderComponent } from './text-loader.component';

describe('TextLoaderComponent', () => {
  let component: TextLoaderComponent;
  let fixture: ComponentFixture<TextLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextLoaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
