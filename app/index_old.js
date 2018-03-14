import addHeaderToDom from './helpers';
import {add, subtract, multiply, divide} from './math';

logFunction();

addHeaderToDom('3 + 6 equals ' + add(3,6));
addHeaderToDom('3 - 6 equals ' + subtract(3,6));
addHeaderToDom(`3 x 6 equals = ${multiply(3,6)}`);
addHeaderToDom('3 / 6 equals ' + divide(3,6));