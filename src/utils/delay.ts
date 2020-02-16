export function delay(ms: any) {
    new Promise(res => setTimeout(res, ms))
};

export const addDelay = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('3 seconds');
        }, ms);
    });
}
