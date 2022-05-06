import axios from "axios";

export const getProfileInfo = async () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get("https://test-1234567533.herokuapp.com/project/764a62cc-e362-4dc5-b682-662d162016e8").then((res: any) => {
                resolve(res.data)
            }).catch((e) => {
                reject(e.response);
            })
        } catch (err) {
            reject(err);
        };
    });
};

export const sendLoginInfo = (url: string, fetch_body: string, setIsLoading: any, authCtx: any, history: any) => {
    return fetch(
        url,
        {
            method: 'POST',
            body: fetch_body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => {
        setIsLoading(false);
        if (res.ok) {
            return res.json();
        } else {
            return res.json().then(data => {
                let errorMessage = 'Authentication failed!';
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                }
                throw new Error(errorMessage);
            });
        }
    }).then((data) => {
        const expirationTime = new Date(
            new Date().getTime() + (+data.expiresIn * 1000)
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
    })
        .catch(err => {
            alert(err.message);
        });
}