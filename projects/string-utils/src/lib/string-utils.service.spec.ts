import { TestBed } from '@angular/core/testing';
import { StringUtilsService } from './string-utils.service';

describe('StringUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringUtilsService = TestBed.get(StringUtilsService);
    expect(service).toBeTruthy();
  });

  it('should add word to the set', () => {
    const service: StringUtilsService = TestBed.get(StringUtilsService);
    service.addToWhiteList('dog');
    expect(service.isValid('dog')).toBe(true)
  });

  it('should be remove words from list', () => {
    const service: StringUtilsService = TestBed.get(StringUtilsService);

    service.addToWhiteList('dog');
    expect(service.isValid('dog')).toBe(true);

    service.removeFromList('dog');
    expect(service.isValid('dog')).toBe(false);
  })

});
