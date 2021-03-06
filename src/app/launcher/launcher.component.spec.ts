import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LauncherComponent } from './launcher.component';

describe('LauncherComponent', () => {
  let component: LauncherComponent;
  let fixture: ComponentFixture<LauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncherComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
