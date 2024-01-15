export class Movie {
  constructor(
    public title: string,
    public year: string,
    public poster: string = 'https://api.lorem.space/image/movie?w=150&h=220',
    public editor: string
  ) {}
}
