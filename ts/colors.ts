export function createColorMap(set: Set<string>) {
    const map = new Map<string, number>();
    let index = 0;
    set.forEach((item) => void map.set(item, (360 / set.size) * index++));
    return map;
}
