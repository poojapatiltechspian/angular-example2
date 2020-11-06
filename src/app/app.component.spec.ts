import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: AppComponent;


  beforeEach(async () => {
    fixture = new AppComponent();
  });

  it(`should have as title 'crud-operations'`, () => {
    expect(fixture.title).toEqual('crud-operations');
  });

});

