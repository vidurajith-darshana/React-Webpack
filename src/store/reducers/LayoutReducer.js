const initialState={
    layoutType: {

        adminLayout: false,
        userLayout: false,
        advertiserLayout: false,
        commonLayout: true,

    },

    advertiserLoginModal: false,
    influencerLoginModal: false,
    advertiserInterestModal: false,
    influencerSocialAccountModal: false,
    influencerDoneRequestModal: false,
    advertiserDoneRequestModal: false,
}

const layoutReducer=(state=initialState,action)=>{

    switch(action.type){

        case 'INFLUENCER_SOCIAL_ACCOUNT_MODEL_HANDLER':
            console.log('hellow');
            const updateInitState={
                ...state,
                influencerLoginModal: false,
                advertiserLoginModal: false,
                advertiserInterestModal: false,
                influencerSocialAccountModal: true,
                influencerDoneRequestModal: false,
                advertiserDoneRequestModal: false
            }

            return updateInitState;

        default:return state;
    }

}

export default layoutReducer;