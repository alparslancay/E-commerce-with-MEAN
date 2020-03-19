export interface IUser{
    _id?: string;
    e_mail?: string;
    user_token?: string;
    password?: string;
    role?: Role;
    name?: string;
}

export enum Role {
    USER = 'customer',
    ADMIN = 'admin',
    PUBLISHER = 'publisher'
}

export interface IItem {
    _id?: string;
    item_type?: IItemType;
    description?: string;
    name?: string;
    price?: number;
    publisher?: IPublisher;
    image?: string;
}

export interface IItemType {
    _id?: string;
    name?: string;
    parent_type?: IItemType;
    url_name?: string;
}

export interface IPublisher {
    _id?: string;
    name?: string;
}