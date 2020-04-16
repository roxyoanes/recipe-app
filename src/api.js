export const recipeApi = async (name, ingredients) => {
  try{
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const response = await fetch (
      `${nocors}http://www.recipepuppy.com/api/?i=${ingredients}&q=${name}`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}