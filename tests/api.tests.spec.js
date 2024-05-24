import { test, expect } from '@playwright/test';

test('API DELETE REQUEST', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204);

})

test('API PUT REQUEST', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Dang",
            "job": "QA"
        }
    })
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('QA');
    console.log(await response.json());
})

test('API POST REQUEST', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Dang",
            "job": "QA"
        }
    })
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Dang');
    console.log(await response.json());
})

test('API GET REQUEST', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet');
    console.log(await response.json());
})

