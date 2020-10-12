interface Observable<T> {
  attach(o: Observer);
  detach(o: Observer);
  notify();
  getData(): T;
}

interface Observer {
  update();
}

class YouTubeChannel implements Observable<string> {
  private channelSubscribers = [];
  private lastVideoPosted;

  attach(o :Observer) {
    this.channelSubscribers.push(o);
  }

  detach(o: Observer) {
    this.channelSubscribers = this.channelSubscribers.filter(v => v !== o);
  }

  notify() {
    this.channelSubscribers.forEach(o => o.update());
  }

  addNewVideo(title: string) {
    console.log('new you tube video added to channel', title);
    this.lastVideoPosted = title;
    this.notify();
  }

  getData() {
    return this.lastVideoPosted;
  }
}

class Subscriber implements Observer {

  private observable = null;

  constructor(observable: Observable<string>) {
    this.observable = observable;
  }

  update() {
    const title = this.observable.getData();
    console.log('new video posted', title);
  }
}

const channel = new YouTubeChannel();
const subscriber1 = new Subscriber(channel);
const subscriber2 = new Subscriber(channel);

channel.attach(subscriber1);
channel.attach(subscriber2);
channel.addNewVideo('video 1');
channel.addNewVideo('video 2');
channel.addNewVideo('video 3');
