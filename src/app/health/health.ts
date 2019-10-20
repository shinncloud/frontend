export class Health {
  constructor(
    public success: boolean,
    public status: number,
    public url: string,
    public baseUrl: string,
    public urlRoot: string,
    public method: string,
    public data: string,
    public host: string,
    public platform: string,
    public node: string,
    public counter: number,
    public date: Date = new Date
  ) { }
}
