import api from '../config/api'

// Returns a single quote based on the id provided
export function getQuoteFromId(quotes,id) {
    const quote =  quotes.find((quote) =>  quote._id === id)
    return quote
}

// Returns all quotes from the server
export async function getAllQuotes() {
    const response = await api.get("/quotes")
    return response.data
}

// Adds a quote on the server
export async function addQuote(newQuote) {
    const response = await api.post("/quotes", newQuote)
    return response.data
}

// Deletes a quote on the server
export async function deleteQuote(id) {
    const response = await api.delete(`/quotes/${id}`)
    return response.data
}

// export async function updateBlogPost(post) {
//     const response = await api.put(`/posts/${post._id}`, post)
//     return response.data
// }