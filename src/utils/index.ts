export const classNames = (...args: Array<any>) => {
    return args.filter(className => Boolean(className)).join(' ');
}

export const formateDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', {month: 'long'});
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${month} ${day}, ${year} at ${hours}:${minutes}`
}