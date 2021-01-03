import { InjectionToken } from '@angular/core';

export * from './product.service';
export const token = new InjectionToken<string>('baseUrl');