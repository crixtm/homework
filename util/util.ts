// utils/user.util.ts
import { request, expect } from '@playwright/test';
import { usersValid } from '@test_data/test_users';

export type CreatedUser = {
    username: string;
    email: string;
    password: string;
    token: string;
};

export async function createUser() {

    const apiContext = await request.newContext();
    const userData = {
        username: usersValid[0].user,
        email: usersValid[0].credentials.email,
        password: usersValid[0].credentials.pass,
    };

    const response = await apiContext.post('https://api.realworld.show/api/users', {
        data: {
            user: userData,
        },
    });

    expect(response.ok()).toBeTruthy();

}