export function delay(ms: any) {
    new Promise(res => setTimeout(res, ms))
};
