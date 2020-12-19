function SearchData(keyword){
    return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (!data.confirmed){
                return Promise.reject(`${keyword} is Not Found`);
            } else {
                return Promise.resolve(data);
            }
        })
}