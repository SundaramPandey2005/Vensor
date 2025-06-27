export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                //...state means whatever the state originally was.
                ...state,//We are returning wwhatever the state originally was but..
                basket: [...state.basket, action.item],//We are gonna change the basket.. So now the basket becomes whaterver it originally was plus the item which will be sent through dispatch.
            };
        case 'REMOVE_FROM_BASKET':
            //This code removes all the items with the same title or same id..
                // return{
                //     ...state,
                //     basket: state.basket.filter(item=>item.title!==action.title),
                // };
            //But we want to remove the only one which is clicked so we use this code here we find out the index of the clicked item and then we remove that particular index.
            
            //Finding out the index

            const index = state.basket.findIndex(
                (basketItem) => basketItem.title  === action.title
            );
            //making a new basket and copying all the old values so that we don't change the original data
            let newBasket = [...state.basket];
            
            //Removing the item with that index
            if(index>=0){
                newBasket.splice(index,1);//Splice is used to remove from index to 1 element(i.e. only that element).
            }
            else{
                console.warn(
                    `Can't remove product (title: ${action.id} as its not in basket!!`
                )
            }
            return {
                ...state,
                basket: newBasket,
            }


        default:
            return state;
    }
};

export default reducer;