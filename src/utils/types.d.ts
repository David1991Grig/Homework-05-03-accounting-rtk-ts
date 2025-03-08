export enum UpdateMode {
    DEFAULT, EDIT_PROFILE, CHANGE_PASSWORD
}
export interface UserDate {
    firstName: string,
    lastName: string,
}

export interface UserProfile extends UserDate{
    login: string,
    roles: string[],
}

export interface UserRegister extends UserDate {
    login: string,
    password: string,
}


