import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterName } from './footer-name';

describe('FooterName', () => {
  let component: FooterName;
  let fixture: ComponentFixture<FooterName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
