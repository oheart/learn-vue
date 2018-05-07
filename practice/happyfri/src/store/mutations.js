const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMEBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default{
    // 初始化信息
    [INITIALIZE_DATA](state){ // 使用常量代替Mutation事件类型
        state.itemNum = 1;     // 第几题
        state.allTime = 0;      // 总共用时
        state.answerid = [];    // 答案id
    },
    // 点击进入下一题
    [ADD_ITEMNUM](state, num){
        state.itemNum += num;
    },
    // 记录答案
    [REMBER_ANSWER](state, id){
        state.answerid.push(id)
    },
    // 记录做题时间
    [REMBER_TIME](state){
        state.timer = setInterval(() => {
            state.allTime++;
        },1000)
    }
}

