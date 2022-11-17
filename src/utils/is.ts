const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
    return toString.call(val) === `[object ${type}]`;
}

/**
 * 是否是数组
 * @param val
 * @returns {boolean}
 */
export function isArray(val: any): val is Array<any> {
    return val && Array.isArray(val);
}

/**
 * 是否是对象
 * @param val
 * @returns {boolean}
 */
export function isObject(val: any): val is Record<any, any> {
    return val !== null && is(val, 'Object');
}

/**
 * 是否是字符串
 * @param val
 * @returns {boolean}
 */
export function isString(val: unknown): val is string {
    return is(val, 'String');
}

/**
 * 是否是数字
 * @param val
 * @returns {boolean}
 */
export function isNumber(val: unknown): val is number {
    return is(val, 'Number');
}

/**
 * 是否是boolean
 * @param val
 * @returns {boolean}
 */
export function isBoolean(val: unknown): val is boolean {
    return is(val, 'Boolean');
}

/**
 * 是否正则
 * @param val
 * @returns {boolean}
 */
export function isRegExp(val: unknown): val is RegExp {
    return is(val, 'RegExp');
}

/**
 * 是否是blob
 * @param val
 * @returns {boolean}
 */
export function isBlob(val: unknown): val is Blob {
    return is(val, 'Blob');
}

/**
 * 是否是Null
 * @param val
 * @returns {boolean}
 */
export function isNull(val: unknown): val is null {
    return val === null;
}

/**
 * 是否是function
 * @param val
 * @returns {boolean}
 */
export function isFunction(val: unknown): val is Function {
    return typeof val === 'function';
}

/**
 * 是否未定义
 * @param val
 * @returns {boolean}
 */
export function isUnDef<T = unknown>(val?: T): val is T {
    return typeof val === 'undefined';
}

/**
 * 是否是空对象
 * @param val
 * @returns {boolean}
 */
export function isEmptyObject(val: any): boolean {
    return isObject(val) && Object.keys(val).length === 0;
}

/**
 * 是否为空
 * @param val
 * @returns {boolean}
 */
export function isEmpty<T = unknown>(val: T): val is T {
    if (isArray(val) || isString(val)) {
        return val.length === 0;
    }

    if (val instanceof Map || val instanceof Set) {
        return val.size === 0;
    }

    if (isObject(val)) {
        return Object.keys(val).length === 0;
    }

    return false;
}

/**
 * 是否是日期对象
 * @param val
 * @returns {boolean}
 */
export function isDate(val: unknown): val is Date {
    return is(val, 'Date');
}

/**
 * 是否是Promise
 * @param val
 * @returns {boolean}
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * 是否是Element
 * @param val
 * @returns {boolean}
 */
export function isElement(val: unknown): val is Element {
    return isObject(val) && !!val.tagName;
}

/**
 * 是否是Map
 * @param val
 * @returns {boolean}
 */
export function isMap(val: unknown): val is Map<any, any> {
    return is(val, 'Map');
}
