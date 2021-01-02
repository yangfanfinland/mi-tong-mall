import { InjectionToken } from '@angular/core';

export * from './user.service';
export const token = new InjectionToken<string>('baseUrl');