'use strict';

const Stack = require('../lib/stack.js');
require('jest');


describe('Stack data structure module', function(){

  beforeEach(() => this.stack = new Stack());

  describe('constructor', () => {
    test('should create a new instance of Stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    test('should have a default value of null assigned to the top of Stack', () => {
      expect(this.stack.top).toBeNull();
    });
    test('should have a default value of 0 assigned to the len property', () => {
      expect(this.stack.len).toEqual(0);
    });
    test('should have a maxLen property with a default value of 1048', () => {
      expect(this.stack.maxLen).toEqual(1048);
    });
  });

  describe('push function', () => {
    test('should have a len of 50', () => {
      [...Array(50)].map(() => this.stack.push(~~(Math.random() * 1)));
      expect(this.stack.len).toEqual(50);
    });
    test('should add a new node with the value 1 to the top of Stack', () => {
      this.stack.push(1);
      expect(this.stack.top.value).toEqual(1);
    });
    test('should throw an error when len is more than maxLen', () => {
      expect( () => {
        [...Array(1049)].map(() => this.stack.push(~~(Math.random() * 1)));})
        .toThrow('Stack overflow');
    });
    test('should be valid when len equals to maxLen', () => {
      expect( () => {
        [...Array(1048)].map(() => this.stack.push(~~(Math.random() * 1)));})
        .not.toThrow('Stack overflow');
    });
  });

  describe('pop function', () => {
    test('should remove the top node from Stack', () => {
      this.stack.push(1);
      expect(this.stack.top.value).toEqual(1);
      expect(this.stack.pop().value).toEqual(1);
    });
    test('should set top to next node after pop', () => {
      this.stack.push(1);
      this.stack.push(2);
      this.stack.push(3);
      expect(this.stack.top.value).toEqual(3);
      this.stack.pop();
      expect(this.stack.top.value).toEqual(2);
    });
    test('should return an error if Stack is empty', () => {
      expect( () => { this.stack.pop();})
        .toThrow('Stack is empty');
    });
  });

  describe('peek function', () => {
    test('should return the top node from Stack', () => {
      this.stack.push(1);
      this.stack.push(3);
      this.stack.push(2);
      expect(this.stack.peek().value).toEqual(2);
    });
    test('should keep the top node after peek in Stack', () => {
      this.stack.push(1);
      this.stack.push(3);
      this.stack.push(2);
      this.stack.peek();
      expect(this.stack.top.value).toEqual(2);
    });
    test('should return an error if Stack is empty', () => {
      expect( () => { this.stack.peek();})
        .toThrow('Stack is empty');
    });
  });
});
