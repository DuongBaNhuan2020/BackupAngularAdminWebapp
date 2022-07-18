import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicRegisterComponent } from './comic-register.component';

describe('ComicRegisterComponent', () => {
  let component: ComicRegisterComponent;
  let fixture: ComponentFixture<ComicRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
