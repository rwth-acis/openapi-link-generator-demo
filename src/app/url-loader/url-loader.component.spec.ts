import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlLoaderComponent } from './url-loader.component';

describe('UrlLoaderComponent', () => {
  let component: UrlLoaderComponent;
  let fixture: ComponentFixture<UrlLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UrlLoaderComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
