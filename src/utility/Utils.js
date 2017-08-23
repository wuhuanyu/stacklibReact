export const isNum = (n) => !isNaN(n);
export const capitalize = (str) => {
    if (typeof str !== 'string') 
        throw '[Capitalize] typeof parameter [n] must be string';
    return str[0].toUpperCase + str.slice(1);
}

export const num2ToTime = (date) => {
    let newDate;
    if (isNum(date)) {
        if (date.length === 10) {
            date = (+ date) * 1000;
        }
        date= +date;
        newDate=new Date(date);
        return newDate.toString('hh dd MM yy');
    }
    return date;
}
