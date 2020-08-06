import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new SanitizeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  })); 
});