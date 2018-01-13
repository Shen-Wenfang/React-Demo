import defaultState from './state';

const reducer = (state = defaultState, action) => {
    //state=defaultState  es6 如果状态没有传，则返回原状态
    //action 是个对象
    let { type, payload } = action;
    switch (type) {
        case 'SHOW_NAV':
            return Object.assign({}, state, {
                bNav: true
            });
            break;
        case 'HIDE_NAV':
            return Object.assign({}, state, {
                bNav: false
            });
            break;
        case 'SHOW_FOOT':
            return Object.assign({}, state, {
                bFoot: true
            });
            break;
        case 'HIDE_FOOT':
            return Object.assign({}, state, {
                bFoot: false
            });
            break;
        case 'SHOW_LOADING':
            return Object.assign({}, state, {
                bLoading: true
            });
            break;
        case 'HIDE_LOADING':
            return Object.assign({}, state, {
                bLoading: false
            });
            break;
        case 'SHOW_INFOMATION':
            return Object.assign({}, state, {
                bInformation: true
            });
            break;
        case 'HIDE_INFOMATION':
            return Object.assign({}, state, {
                bInformation: false
            });
            break;
        case 'SHOW_COMMENT':
            return Object.assign({}, state, {
                bComment: true
            });
            break;
        case 'HIDE_COMMENT':
            return Object.assign({}, state, {
                bComment: false
            });
            break;

        // 当点击加入购物车时 获取详情页传过来的数据给state
        case 'TO_BUYCART':
            let find = false;
            state.buycart.forEach((item, index) => {
                if (item.id == payload.id) {
                    item.num++;
                    find = true;
                }
            })
            if (!find) {
                payload.num = 1;//数量
                state.buycart.unshift(payload);
            }
            return Object.assign({}, state, {
                buycart: state.buycart
            })
            break;
        //购物车加减
        case "CHANGE_NUM":
            state.buycart.forEach((item, index) => {
                if (item.id == payload.id) {
                    if (item.num == 1 && payload.num == -1) {
                        return;
                    }
                    if (item.num < 1) {
                        item.num = 1;
                    } else {
                        item.num += payload.num;
                    }
                }
            });
            return Object.assign({}, state, {
                buycart: state.buycart
            });
            break;
        // 清空购物车
        case "CLEAR_BUYCART":
            return Object.assign({}, state, {
                buycart: []
            })
            break;
        // 删除某一项
        case "DEL_BUYCART":
            state.buycart.forEach((item, index) => {
                if (item.id === payload) {
                    state.buycart.splice(index, 1);
                }
            })
            return Object.assign({}, state, {
                buycart: state.buycart
            })
            break;
        default:
            return state;
    }
}

export default reducer;



