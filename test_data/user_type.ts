export type User = {
    user:string; 
    credentials: Credentials;
};

export type Credentials = {
    email: string;
    pass: string;
};
