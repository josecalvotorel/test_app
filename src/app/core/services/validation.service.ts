import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  // Regex
  EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

  // Constants
  PASSWORD_MIN_CHAR = 5;

  constructor() { }

  /**
   * Custom validation methods belong here
   * i.e start_date < end_date
   */
  
}
