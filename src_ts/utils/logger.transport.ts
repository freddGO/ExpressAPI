import Transport from 'winston-transport';

export default class CustomTransport extends Transport {

  private stack: string[];

  public constructor (options?: Record<string, any>) {

    super(options);
    this.stack = [];

  }

  public log (information: Record<string, any>, callback?: Function): void {

    if (this.stack.length > 10) {

      this.stack = [];

    }

    this.stack.push(information.message);

    return callback && callback();

  }

}