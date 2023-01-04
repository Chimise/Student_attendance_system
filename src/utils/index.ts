export const classNames = (...args: Array<any>) => {
    return args.filter(className => Boolean(className)).join(' ');
}