const promisse = new Promise((resolve, reject) => {
    var nome = 'João'
    if (nome == 1) {
        resolve('promisse resolvida')
    } else {
        reject('promisse rejeitada')
    }
})
        
    promisse.then((data) => {
        return data.toUpperCase()
    }).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })

    const host = 'https://dattebayo-api.onrender.com'
    fetch (`${host}/characters`, {
        method: "GET",
        headers: {
            Accept : 'application/json'
        }
        
    }).then((response) => {
        return response.json()
    }).then((data) => {
        let naruto = data.characters[0]

        console.log(naruto.images[0])

        for (let count = 0; count < naruto.jutsu.length; count++) {
            console.log(naruto.jutsu[count].toUpperCase())         
        } 

        let count = 0
        while (count < naruto.jutsu.length) {
            console.log(naruto.jutsu[count].toUpperCase())
            count++
        }

    }).catch((error) => {
        console.log(error)
    })
    