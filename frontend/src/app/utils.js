export default function removeHighestSortOrderValues(listOfObjects, amountToRemove) {
     // If array length is less than 2, return the whole thing
     // Else, return sorted from index 1 (element 2) onwards
    
    const amountToSlice = listOfObjects.length > 2 ? 2 : 0;

    return listOfObjects.sort((a, b) => a.sortOrder - b.sortOrder).slice(amountToSlice)
}