import { InjectionToken } from '@angular/core';

export * from './list.service';
export const token = new InjectionToken<string>('baseUrl');