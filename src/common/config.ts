import { Container } from 'typedi';
import { CountDB } from '../data/CountDB';

export function injectDependencies(){
    Container.set('CountDB', new CountDB());
}
