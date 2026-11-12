import { Socket } from 'node:net';
import _tls from 'node:tls';
import { EventEmitter } from 'node:events';
import { Readable } from 'node:stream';
export type Integer = number;
/**
 * @typedef {number} Integer
 */
/**
 *
 */
declare class Pop3Connection extends EventEmitter {
    host: string;
    port: number;
    tls: boolean | undefined;
    timeout: number | undefined;
    _socket: Socket | _tls.TLSSocket | null;
    _stream: Readable | null;
    _streamAtLineStart: boolean;
    _heldBack: Buffer<ArrayBuffer>;
    _command: string;
    _pendingResponseBuffer: Buffer<ArrayBuffer>;
    tlsOptions: _tls.TlsOptions;
    servername: string;
    /**
     * @param {{
     *   host: string,
     *   port?: Integer,
     *   tls?: boolean,
     *   timeout?: Integer,
     *   tlsOptions?: import('tls').TlsOptions,
     *   servername?: string
     * }} cfg
     */
    constructor({ host, port, tls, timeout, tlsOptions, servername }: {
        host: string;
        port?: Integer;
        tls?: boolean;
        timeout?: Integer;
        tlsOptions?: import('tls').TlsOptions;
        servername?: string;
    });
    /**
     * @returns {boolean}
     */
    _hasActiveSocket(): boolean;
    /**
     * @returns {Readable}
     */
    _updateStream(): Readable;
    /**
     * @param {Buffer} buffer
     * @returns {void}
     */
    _pushStream(buffer: Buffer): void;
    /**
     * @param {Error} [err]
     * @returns {void}
     */
    _endStream(err?: Error): void;
    /**
     * @returns {Promise<void>}
     */
    connect(): Promise<void>;
    /**
     * @param {...(string|Integer)} args
     * @throws {Error}
     * @returns {Promise<[string, Readable|null]>}
     */
    command(...args: (string | Integer)[]): Promise<[string, Readable | null]>;
}
export default Pop3Connection;
//# sourceMappingURL=Connection.d.ts.map