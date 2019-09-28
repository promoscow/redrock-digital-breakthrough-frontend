export default class RestService {

    _apiPath = 'http://81.177.136.88:8099';
    _loginUrl = '/auth/login';
    _registerUrl = '/auth/register';
    _confirmUrl = '/auth/confirm';
    _testUrl = '/auth';
    _riskGroupUrl = '/risk';
    _getVacancies = '/vacancies';
    _getCourses = '/courses';
    _propose = '/propose';

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

    propose = (request) => {
        let body = JSON.stringify(request);
        console.log(body);
        let data = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        };
        fetch(
            `${this._apiPath}${this._propose}`,
            data
        )
            .catch(() => {
                throw new Error(`404`);
            });
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

    getRiskGroup = async () => {
        const response = await fetch(`${this._apiPath}${this._riskGroupUrl}`)
            .catch(() => {
                throw new Error('404');
            });
        if (!response.ok) {
            console.log(response);
        }
        return response.json();
    };

    getVacancies = async (id) => {
        const response = await fetch(`${this._apiPath}${this._getVacancies}?id=${id}`)
            .catch(() => {
                throw new Error('404');
            });
        if (!response.ok) {
            console.log(response);
        }
        return response.json();
    };

    getCourses = async (query) => {
        const response = await fetch(`${this._apiPath}${this._getCourses}?query=${query}`)
            .catch(() => {
                throw new Error('404');
            });
        if (!response.ok) {
            console.log(response);
        }
        return response.json();
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
