import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const basicGuardExampleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
   // Example condition, replace with your actual logic
  //  const isAuthenticated = false; // Replace this with your authentication check

  //  if (isAuthenticated) {
  //    return true; // Allow access
  //  } else {
  //    // Redirect to the login page
  //    router.navigate(['/']);
  //    return false; // Prevent access
  //  }
  return true;
};
