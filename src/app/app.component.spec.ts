import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should clear display', () => {
    component.display = '123';
    component.clear();
    expect(component.display).toEqual('');
  });

  it('should add to display', () => {
    component.addToDisplay('5');
    expect(component.display).toEqual('5');
  });

  it('should perform addition operation', () => {
    component.display = '2 + 3';
    component.calculate();
    expect(component.display).toEqual('5');
  });

  it('should perform subtraction operation', () => {
    component.display = '5 - 3';
    component.calculate();
    expect(component.display).toEqual('2');
  });

  it('should perform multiplication operation', () => {
    component.display = '2 * 3';
    component.calculate();
    expect(component.display).toEqual('6');
  });

  it('should perform division operation', () => {
    component.display = '6 / 3';
    component.calculate();
    expect(component.display).toEqual('2');
  });

  it('should perform power operation', () => {
    component.display = '2 ^ 3';
    component.calculate();
    expect(component.display).toEqual('8');
  });

  it('should perform square root operation', () => {
    component.display = '√25';
    component.calculate();
    expect(component.display).toEqual('5');
  });

  it('should handle error in calculation', () => {
    component.display = '5 / 0';
    component.calculate();
    expect(component.display).toEqual('Error');
  });
});
