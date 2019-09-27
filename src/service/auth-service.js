export default class AuthService {

    _apiPath = 'http://81.177.136.88:8099';
    _loginUrl = '/auth/login';
    _registerUrl = '/auth/register';
    _confirmUrl = '/auth/confirm';
    _testUrl = '/auth';

    authorize = async (request) => {
        let body = JSON.stringify(request);
        let initData = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };
        const response = await fetch(
            `${this._apiPath}${this._loginUrl}`,
            initData
        )
            .catch(() => {
                throw new Error(`404`);
            });
        if (!response.ok) {
            throw new Error(`403`);
        }
        return response.text();
    };

    register = async (request) => {
        let body = JSON.stringify(request);
        console.log(body);
        let initData = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };
        const response = await fetch(
            `${this._apiPath}${this._registerUrl}`,
            initData
        )
            .catch(() => {
                throw new Error(`404`);
            });
        if (!response.ok) {
            throw new Error(`403`);
        }
        console.log(response);
        return response.text();
    };

    confirm = async (username, token) => {
        const response = await fetch(`${this._apiPath}${this._confirmUrl}?username=${username}&token=${token}`)
            .catch(() => {
                throw new Error(`404`);
            });
        if (!response.ok) {
            console.log(response);
            throw new Error(`403`);
        }
        return response.text();
    };

    test = async () => {
        let initData = {
            method: "get",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("auth_token")
            }
        };
        console.log(initData);
        await fetch(
            `${this._apiPath}${this._testUrl}`, initData
        )
    }
}
