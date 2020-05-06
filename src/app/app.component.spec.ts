import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it("it should have as title 'welcome to Unit testing'", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("welcome to Unit testing");
  }));

  it("it should call Add mehtod", async(() => {
    let a: number = 2;
    let b: number = 3;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.Add(a, b)).toEqual(5);
  }));
});
