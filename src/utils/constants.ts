export const base_url = 'https://webaccounting.herokuapp.com/account';
export const createToken = (login:string, password:string) => `Basic ${btoa(login+':'+password)}`;
export const createTokenPassword = (password:string) => `Basic ${btoa(password)}`;
export const decodeTokenPassword = (token: string) => {
    const base64String = token.replace('Basic ', '');
    return atob(base64String);
};
