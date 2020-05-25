import * as server from '../server.config.json'
import { LogMiddleware } from './LogMiddleware'
import { SessionStorageMidleware } from './SessionMiddleware'

const config = JSON.parse(server.toString())

export class myRequest {
    constructor (
        public host: string = config.host,
        public path: string = '',
        public headers: Headers  = new Headers(),
        public body: any = {},
        public method: string = 'POST'
        ) {
            if (this.host[length-1] != '/'){
                this.host += '/'
            }
            if (this.path[0] === '/'){
                this.path = this.path.slice(1,this.path.length)
            }
    }
    
    @LogMiddleware
    @SessionStorageMidleware
    request () {
        return new Request(this.host+this.path, {
            method: this.method,
            headers: this.headers,
            body: this.body
        })
    }
}
