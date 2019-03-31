export function get(url){
    return fetch(url,{
        method: 'GET',
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
}
export function post(url, params){
    return fetch(url,{
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(params),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}