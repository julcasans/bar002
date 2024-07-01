import { getNames } from 'bottle004';
import { getSurname } from 'bottle003';

export function getFullName() {
  return `${getNames()} ${getSurname()}`;
}

export function getSurnameName() {
  return `${getSurname()}, ${getNames()}`;
}
