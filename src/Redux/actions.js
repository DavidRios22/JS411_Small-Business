export const addBusiness = (business) => {
    return {
        type: "ADD_BUSINESS",
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: "REMOVE_BUSINESS",
        value: index
    }
}

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        value: user
    }
}

export const removeUser = (index) => {
  return {
    type: "REMOVE_USER",
    value: index,
  }
}