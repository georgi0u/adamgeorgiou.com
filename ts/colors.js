export function createColorMap(set) {
    const map = new Map();
    let index = 0;
    set.forEach((item) => void map.set(item, (360 / set.size) * index++));
    return map;
}
