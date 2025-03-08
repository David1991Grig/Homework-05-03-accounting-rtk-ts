export const base_url = 'https://webaccounting.herokuapp.com/account';
export const createToken = (login:string, password:string) => `Basic ${btoa(login+':'+password)}`;
export const createTokenPassword = (password:string) => btoa(password);
export const decodeTokenPassword = (token: string) =>  atob(token);
