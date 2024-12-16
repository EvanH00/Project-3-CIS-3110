import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSixComponent } from './module-six.component';

describe('ModuleSixComponent', () => {
  let component: ModuleSixComponent;
  let fixture: ComponentFixture<ModuleSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
