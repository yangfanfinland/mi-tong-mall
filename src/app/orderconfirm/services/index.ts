import { InjectionToken } from '@angular/core';

export * from './address.service';
export * from './order.service';
export const token = new InjectionToken<string>('baseUrl');