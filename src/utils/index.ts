type typeObj = { [key: string]: any };

/**
 * 深拷贝
 * @param source
 * @returns
 */
export function deepClone(source: typeObj): typeObj {
    if (!source && typeof source !== 'object') {
        return source;
    }
    const result = (source.constructor === Array ? [] : {}) as typeObj;

    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            result[keys] = deepClone(source[keys]);
        } else {
            result[keys] = source[keys];
        }
    });
    return result;
}

/**
 * 格式化文件大小
 * @param fileSize
 * @param idx
 * @returns {string|*}
 */
export function formatFileSize(fileSize: number, idx = 0): string {
    if (!fileSize) {
        return '0B';
    }
    const units = ['B', 'KB', 'MB', 'GB'];

    if (fileSize < 1024 || idx === units.length - 1) {
        return fileSize.toFixed(2) + units[idx];
    }
    return formatFileSize(fileSize / 1024, ++idx);
}

/**
 * 判断是否 十六进制颜色值.
 * 输入形式可为 #fff000 #f00
 *
 * @param color string   十六进制颜色值
 * @return boolean
 */
export function isHexColor(color: string) {
    const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;

    return reg.test(color);
}

/**
 * RGB 颜色值转换为 十六进制颜色值.
 * r, g, 和 b 需要在 [0, 255] 范围内
 *
 * @param r
 * @param g
 * @param b
 * @return  string 类似#ff00ff
 */
export function rgbToHex(r: number, g: number, b: number) {
    const hex = ((r << 16) | (g << 8) | b).toString(16);

    return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
}

/**
 * 十六进制颜色值转换为 RGB 颜色值.
 * @param {string} hex The color to transform
 * @returns The RGB representation of the passed color
 */
export function hexToRGB(hex: string) {
    let sHex = hex.toLowerCase();

    if (isHexColor(hex)) {
        if (sHex.length === 4) {
            let sColorNew = '#';

            for (let i = 1; i < 4; i += 1) {
                sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1));
            }
            sHex = sColorNew;
        }
        const sColorChange: number[] = [];

        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt('0x' + sHex.slice(i, i + 2)));
        }
        return 'RGB(' + sColorChange.join(',') + ')';
    }
    return sHex;
}
