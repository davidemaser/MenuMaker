/**
 * Created by David Maser on 22/09/2017.
 */
export default class ErrorHandler{
  constructor(obj,method,scope,fail){
    this.obj = obj;
    this.method = method || 'silent';
    this.scope = scope || 'global';
    this.fail = fail || false;
    this.run();
  }
  run(){

  }
}