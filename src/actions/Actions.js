// Build out action creators 

 export const toggleAddFetures = (payload) => {
     console.log("added feature was invoked")
    return { 
        type: "ADD_FEATURE", payload: payload 
    }
}

export const deleteFeature = (payload) => {
    console.log("deleted featyre was inviked")
    return {
        type: "REMOVE_FEATURE", payload: payload 
    }
}

// export default toggleAddFetures; 
