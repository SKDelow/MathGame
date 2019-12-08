import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamescreenPage } from './gamescreen.page';

describe('GamescreenPage', () => {
  let component: GamescreenPage;
  let fixture: ComponentFixture<GamescreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamescreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamescreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
