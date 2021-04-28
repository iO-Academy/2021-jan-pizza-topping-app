export default async function getAllPizzas() {

    try{
        const response = await fetch('http://localhost:3000/');

        return await response.json();

    } catch(error) {
        console.log('Failed to return response.json')
        return [];
    }

}
