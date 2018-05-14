export default (state = {}, action) => {
    switch(action.type){
        case 'ADD_VD': 
            if (action.data.contentType === 'Video') {
                if(!state.videos) {
                    return state = {
                        videos: [
                            action.data
                        ],
                        images: state.images,
                        all: state.all,
                        single: state.single,
                        category: state.category,
                        cat_content: state.cat_content
                    } 
                } else {
                    return state = {
                        videos: [
                            action.data,
                            ...state.videos
                        ],
                        images: state.images,
                        all: state.all,
                        single: state.single,
                        category: state.category,
                        cat_content: state.cat_content
                    }
                }
                return state;
            } else {
                if(!state.videos) {
                    return state = {
                        images: [
                            action.data
                        ],
                        videos: state.videos,
                        all: state.all,
                        single: state.single,
                        category: state.category,
                        cat_content: state.cat_content
                    } 
                } else {
                    return state = {
                        images: [
                            action.data,
                            ...state.images
                        ],
                        videos: state.videos,
                        all: state.all,
                        single: state.single,
                        category: state.category,
                        cat_content: state.cat_content
                    }
                }
                return state;
            }
        case 'SET_CONTENT':
            return state = {
                images: state.images,
                videos: state.videos,
                all: action.data,
                single: state.single,
                category: state.category,
                cat_content: state.cat_content
            }
        case 'SET_CATEGORY':
            return state = {
                category: action.data,
                ...state             
            }
        
        case 'SET_CATEGORY_CONTENT':
            return state = {
                images: state.images,
                videos: state.videos,
                all: state.all,
                single: state.single,
                category: state.category,
                cat_content: action.data
            }
        // case 'SET_PAGE_CONTENT':
        //     let page_content = [];
        //     for (let i=action.data-1;i<=action.data+11;i++) {
        //         page_content.push(state.all[i])
        //     }
        //     return state.page_content;
    
        case 'MY_CONTENT':
            // state.mycontent = action.data;
            return state = {
                mycontent: action.data,
                ...state              
            }
        case 'SINGLE_CONTENT':
        return state = {
            images: state.images,
            videos: state.videos,
            all: state.all,
            single: action.data,
            category: state.category,
            cat_content: state.cat_content
        }

        case 'DELETE_IMAGE' : {
            const pos = state.images.map((content) => {
                return content._id 
            }).indexOf(action.id);
            let images = state.images.filter((content, index) => index !== pos);

            return state = {
                images: [
                    ...images
                ],
                videos: state.videos,
                all: state.all,
                single: state.single,
                category: state.category,
                cat_content: state.cat_content
            }
            return state;
            // state.images = images;
            // return state;
        }
        case 'DELETE_VIDEO' : {
            const pos = state.videos.map((content) => {
                return content._id 
            }).indexOf(action.id);
            let videos = state.videos.filter((content, index) => index !== pos);
            
            return state = {
                videos: [
                    ...videos
                ],
                images: state.images,
                all: state.all,
                single: state.single,
                category: state.category,
                cat_content: state.cat_content
            }
            return state;
        }
        case 'MY_VIDEO': 
            return state = {
                images: state.images,
                videos: action.data,
                all: state.all,
                single: state.single,
                category: state.category,
                cat_content: state.cat_content
            } 
            // return state = {
            //     videos: action.data,
            //     ...state
            // }
        case 'MY_IMAGE': 
            return state = {
                images: action.data,
                videos: state.videos,
                all: state.all,
                single: state.single,
                category: state.category,
                cat_content: state.cat_content
            } 

        // return state = {
            //     images: action.data,
            //     ...state
            // }
        case 'GET_SINGLE': 
            return state.single = Object.values(state.all).map((value) => value._id === action.id);
        default:
            return state;
    }
}