export const fetchFromBackend = async (reqType, data, endPoint) => {
    try {
        let options = {};
        if (reqType === "POST") {
            options = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }
        }
        const url = `/api/v2/${endPoint}`;
        const res = await fetch(url, options);
        const dataNew = await res.json();
        return dataNew;
    } catch (error) {
        alert(error);
        console.log(error);
    }

}