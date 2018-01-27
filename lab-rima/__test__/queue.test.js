'use strict';

const Queue = require('../lib/queue.js');
require('jest');


describe('Queue data structure module', function(){

  beforeEach(() => this.queue = new Queue());

  describe('constructor', () => {
    test('should create a new instance of Queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });
    test('should have a default value of null assigned to the head of Queue', () => {
      expect(this.queue.head).toBeNull();
    });
    test('should have a default value of 0 assigned to the len property', () => {
      expect(this.queue.len).toEqual(0);
    });
    test('should have a maxLen property with a default value of 1048', () => {
      expect(this.queue.maxLen).toEqual(1048);
    });
  });

  describe('enqueue function', () => {
    test('should have a len of 50', () => {
      [...Array(50)].map((e, i) => this.queue.enqueue(~~(Math.random() * 1)));
      expect(this.queue.len).toEqual(50);
    });
    test('should add a new node with the value 1 to the tail of Queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(3);
      expect(this.queue.head.value).toEqual(1);
    });
    test('should throw an error when len is more than maxLen', () => {
      expect( () => {
        [...Array(1049)].map((e, i) => this.queue.enqueue(~~(Math.random() * 1)));})
        .toThrow('Queue overflow');
    });
    test('should be valid when len equals to maxLen', () => {
      expect( () => {
        [...Array(1048)].map((e, i) => this.queue.enqueue(~~(Math.random() * 1)));})
        .not.toThrow('Queue overflow');
    });
  });

  describe('dequeue function', () => {
    test('should return the head node from Queue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(3);
      expect(this.queue.dequeue().value).toEqual(1);
      expect(this.queue.head.value).toEqual(2);
    });
    test('should set head to next node after dequeue', () => {
      this.queue.enqueue(1);
      this.queue.enqueue(2);
      this.queue.enqueue(3);
      this.queue.dequeue();
      expect(this.queue.head.value).toEqual(2);
    });
    test('should return an error if Queue is empty', () => {
      expect( () => { this.queue.dequeue();})
        .toThrow('Queue is empty');
    });
  });
});
