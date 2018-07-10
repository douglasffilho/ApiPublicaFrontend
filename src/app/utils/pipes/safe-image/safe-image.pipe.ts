import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeImage'
})
export class SafeImagePipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) { }

  transform(image): any {
    return this.sanitize.bypassSecurityTrustResourceUrl(image);
  }

}
