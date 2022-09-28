import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KlausurPage } from './klausur.page';

describe('KlausurPage', () => {
  let component: KlausurPage;
  let fixture: ComponentFixture<KlausurPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [KlausurPage],
    imports: [RouterTestingModule],
    teardown: { destroyAfterEach: false }
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlausurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
