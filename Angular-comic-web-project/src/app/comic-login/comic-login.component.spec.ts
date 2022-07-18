import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicLoginComponent } from './comic-login.component';

describe('ComicLoginComponent', () => {
  let component: ComicLoginComponent;
  let fixture: ComponentFixture<ComicLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
