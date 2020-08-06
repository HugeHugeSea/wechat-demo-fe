import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})

/**
 * Shorten string display according to the inputted length and trailing display
 *
 * Usage:
 * {{ str | shorten:[20] }}
 * {{ str | shorten:[20, '...'] }}
 */
export class StringShortenPipe implements PipeTransform {
  transform(value: string, args: string[]): string {
    if (!value) {
      return value;
    }
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
