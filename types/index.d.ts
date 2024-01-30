declare global {
  export interface IPost {
    id: string,
    createdAt: string,
    title: string,
    preview: string,
    image: string,
    description: string,
  }
  export interface IPage {
    current: number,
    last: number,
    per: number,
  }
}

export {};