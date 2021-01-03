import { InjectionToken } from '@angular/core';

export * from './cart.service';
export const token = new InjectionToken<string>('baseUrl');