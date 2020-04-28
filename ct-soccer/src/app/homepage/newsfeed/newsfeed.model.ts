export class Feed {
  public date: string;
  public title: string;
  public body: string;

  constructor(date: string, title: string, body: string) {
    this.date = date;
    this.title = title;
    this.body = body;
  }
}
