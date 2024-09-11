import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase'

//tên ảnh đặt từ 1 đến ... đuôi là jpg

//fetch ảnh từ activities
export const fetchActivityImage = async(imageName) => {
    const imageRef = ref(storage, `activities/${imageName}`)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch(error) {
        console.error("Error fetching activity image:", error)
        return null
    }
}

//fetch ảnh từ advisors
export const fetchAdvisorImage = async(imageName) => {
    const imageRef = ref(storage, `advisors/${imageName}`)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch(error) {
        console.error("Error fetching advisor image:", error)
        return null
    }
}

//fetch ảnh từ introduction
export const fetchIntroductionImage = async(imageName) => {
    const imageRef = ref(storage, `introduction/${imageName}`)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch(error) {
        console.error("Error fetching introduction image:", error)
        return null
    }
}

//fetch ảnh từ management board
export const fetchManagementBoardImage = async(imageName) => {
    const imageRef = ref(storage, `management_board/${imageName}`)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch(error) {
        console.error("Error fetching management board image:", error)
        return null
    }
}

//fetch ảnh từ team projects
export const fetchTeamProjectImage = async(imageName) => {
    const imageRef = ref(storage, `team_projects/${imageName}`)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch(error) {
        console.error("Error fetching team project image:", error)
        return null
    }
}

//fetch ảnh từ product
export const fetchProductImage = async(imageName) => {
    const imageRef = ref(storage, `product/${imageName}`)
    try {
        const url = await getDownloadURL(imageRef)
        return url
    } catch(error) {
        console.error("Error fetching product image:", error)
        return null
    }
}