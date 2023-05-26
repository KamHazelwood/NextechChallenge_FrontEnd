import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
   
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Nextech-Code-Challenge'`, () => {
  
    expect(app.title).toEqual('Nextech-Code-Challenge');
  });

  it(`should load 2 news`, () => {
   
    app.news = [{}, {}];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('mat-grid-tile').length).toBe(2);

  });

  it(`should have news title 'Hello World'`, () => {
   
    app.news = [{
      title: "Hello World",
      url: ""
    }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-card-title > a').textContent).toContain('Hello World');

  });

  it(`should load spinner`, () => {
    
    app.loadSpinner = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('mat-spinner').length).toBe(1);
  });
});
