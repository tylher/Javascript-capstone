import { DateTime } from './luxon.js';

export default class userDetails {
  constructor(name, comment) {
    this.name = name;
    this.id = DateTime.now;
    this.comment = comment;
  }
}