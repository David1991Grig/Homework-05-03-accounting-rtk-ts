export const base_url = 'https://webaccounting.herokuapp.com/account';
export const createToken = (login:string, password:string) => `Basic ${btoa(login+':'+password)}`;
export const createTokenPassword = (password:string) => btoa(password);
export const decodeTokenPassword = (token: string) =>  atob(token);
export const extractPasswordFromToken = (token: string): string | null =>{
    const base64 = token.replace('Basic ', '');
    const decoded = atob(base64);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, password] = decoded.split(':');
    return password;
}
