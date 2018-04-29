import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSocialComponent } from './contacts-social.component';

describe('ContactsSocialComponent', () => {
  let component: ContactsSocialComponent;
  let fixture: ComponentFixture<ContactsSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
