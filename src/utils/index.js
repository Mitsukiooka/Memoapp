import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'Error!', description: 'Maybe try later'};
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'Invalid Email Address!';
      break;
    case 'auth/user-disabled':
      error.description = 'Invalid  User!';
      break;
    case 'auth/user-not-found':
      error.description = 'User Not Found!';
      break;
    case 'auth/wrong-password':
      error.description = 'Invalid Password!';
      break;
    case 'auth/email-already-in-use':
      error.description = 'Email has been taken';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'Contact Developer';
      break;
    case 'auth/wrong-password':
      error.description = 'Invalid Password!';
      break;
    case 'auth/weak-password':
      error.description = 'Password is weak!';
      break;
    default:
  };
  return error;
}
