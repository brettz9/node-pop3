export type Stream2StringOptions = {
    maxBytes?: number;
    timeoutMs?: number;
} | number;
export type DestroyableStream = import('stream').Stream & {
    destroyed?: boolean;
    destroy?: () => void;
};
/**
 * @param {import('stream').Stream} stream
 * @param {Stream2StringOptions} [options]
 */
export declare function stream2String(stream: import('stream').Stream, options?: Stream2StringOptions): Promise<any>;
/**
 * @param {string} str
 * @returns {string[][]}
 */
export declare function listify(str: string): string[][];
//# sourceMappingURL=helper.d.ts.map