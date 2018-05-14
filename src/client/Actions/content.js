export const AddVideo = (data) => ({
    type: 'ADD_VD',
    data
});

export const AddImage = (data) => ({
    type: 'ADD_IMG',
    data
});

export const setContent = (data) => ({
    type: 'SET_CONTENT',
    data
});

export const setCategory = (data) => ({
    type: 'SET_CATEGORY',
    data
});

export const setCatContent = (data) => ({
    type: 'SET_CATEGORY_CONTENT',
    data
});

export const myContent = (data) => ({
    type: 'MY_CONTENT',
    data
});

export const MyImage = (data) => ({
    type: 'MY_IMAGE', 
    data
})
export const MyVideo = (data) => ({
    type: 'MY_VIDEO', 
    data
})

// export const setCatContent = (data) => ({
//     type: 'SET_PAGE_CONTENT',
//     data
// });

export const getContent = () => ({
    type: 'GET_CONTENT'
})

export const setSingleContent = (data) => ({
    type: 'SINGLE_CONTENT',
    data
})

export const getSingle = (id) => ({
    type: 'GET_SINGLE',
    id
})
export const DeleteImage = (id) => ({
    type: 'DELETE_IMAGE',
    id
})
export const DeleteVideo = (id) => ({
    type: 'DELETE_VIDEO',
    id
})