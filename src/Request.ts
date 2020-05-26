import { LogMiddleware } from './LogMiddleware'
import { SessionStorageMidleware } from './SessionMiddleware'


export class myRequest {
    constructor (
        public path: string = '',
        public headers: Headers  = new Headers(),
        public body: any = {},
        public method: string = 'POST'
        ) {
            if (this.path[0] != '/'){
                this.path = "/" + this.path
            }
    }
    request () {
        return new Request(this.path, {
            method: this.method,
            headers: this.headers,
            body: this.body
        })
    }
}
