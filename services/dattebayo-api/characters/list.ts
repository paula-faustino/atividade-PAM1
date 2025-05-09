const API_HOST = 'https://dattebayo-api.onrender.com'

export async function fetchCharacters() {
    try {
         const response = await fetch(`${API_HOST}/characters`)
   
    if (!response.ok) {
      throw new Error(`erro : ${response.statusText}`)
    }//ele vai tratar o erro e retornar uma mensagem, caso de erro na requisição ele retorna erro. 
    
   return await response.json()
} catch (error) {
    console.log(error)
    return []
    }
}