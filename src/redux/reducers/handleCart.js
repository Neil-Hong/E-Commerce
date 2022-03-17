
const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch(action.type){
        case 'ADDITEM':
            const exist = state.find((item)=>item.id === product.id)
            if(exist){
                return state.map((i)=>{
                    return i.id === product.id ? {...i, qty:i.qty+1}:i
                })
            }else{
                const product = action.payload;
                return [...state, {...product, qty:1}]
            }
            break;
        case "DELITEM":
            const exist1 = state.find((item)=>{return item.id === product.id})
            if(exist1.qty === 1){
                return state.filter((i)=>i.id !== exist1.id)
            }else{
                return state.map((x)=> x.id === product.id ? {...x, qty: x.qty-1}: x)
            }
            break;
        default:
            return state
            break;
    }
}

export default handleCart