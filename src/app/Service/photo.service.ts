import { Injectable } from '@angular/core';

export class Photo {
  constructor(public userid: string, public filename: string, public path: string, public category: string) { }
}
@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor() { }
}
