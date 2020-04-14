export const recipeApi = async (name, ingredients) => {
  try{
    const response = await fetch (
      `http://www.recipepuppy.com/api/?i=${ingredients}&q=${name}`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}