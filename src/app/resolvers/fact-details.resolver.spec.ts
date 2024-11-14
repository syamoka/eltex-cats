import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { factDetailsResolver } from './fact-details.resolver';

describe('factDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => factDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
