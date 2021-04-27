export async function getAllPizzas() {

    try{
        const response = await fetch('/'); //localhost
        return await response.json();
    } catch(error) {
        console.log('Failed to return response.json')
        return [];
    }

}
