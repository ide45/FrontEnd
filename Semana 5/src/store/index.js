import { createStore } from 'vuex'

export default createStore({
  state: {
    counterCake1: 10,
    counterCake2: 10,
    counterCake3: 10,
    counterCake4: 10,

    counterTop1: 10,
    counterTop2: 10,
    counterTop3: 10,

    counterItem1: 0,
    counterItem2: 0,
    counterItem3: 0,
    counterItem4: 0,
    counterItem5: 0,
    counterItem6: 0,
    counterItem7: 0,
    counterItem8: 0,

    checkOut: 0,
    items: 0,

    cakes1: ' ',
    cakes2: ' ',
    cakes3: ' ',
    cakes: ' ',

    topping1: ' ',
    topping2: ' ',
    topping3: ' ',
    topping4: ' ',

    persona:{
      name: ' ',
      tel: ' ',
      email: ' '
    },

  },
  getters: {
  },
  mutations: {
    quitar1(state){

      if(state.counterCake1 <= 0 ){
        state.counterCake1 = 'Sin existencias!'
      }else if(state.counterCake1 > 0){
        state.counterCake1 -= 1;
        state.checkOut += 250;
        state.items += 1;
        state.counterItem1 += 1;
        state.cakes1 = `Raro - ${state.counterItem1}`
      }
    },

    quitar2(state){
      
      if(state.counterCake2 <= 0 ){
        state.counterCake2 = 'Sin existencias!';
      }else if(state.counterCake2 > 0){
        state.counterCake2 -= 1;
        state.checkOut += 100;
        state.items += 1;
        
        state.counterItem2 += 1;
        state.cakes2 = `Bonito - ${state.counterItem2}`
      }
    },

    quitar3(state){
      
      if(state.counterCake3 <= 0 ){
        state.counterCake3 = 'Sin existencias!'
      }else if(state.counterCake3 > 0){
        state.counterCake3 -= 1;
        state.checkOut += 150;
        state.items += 1;
        
        state.counterItem3 += 1;
        state.cakes3 = `Mango - ${state.counterItem3}`
      }
    },

    quitar4(state){
      
      if(state.counterCake4 <= 0 ){
        state.counterCake4 = 'Sin existencias!'
      }else if(state.counterCake4 > 0){
        state.counterCake4 -= 1;
        state.checkOut += 300;
        state.items += 1;

        state.counterItem4 += 1;
        state.cakes4 = `Indiferente - ${state.counterItem4}`
      }
    },

    checkBoxs(state){
      const checkBox1 = document.getElementById("texto");
      const checkBox2 = document.getElementById("chispas");
      const checkBox3 = document.getElementById("almendras");
      const checkBox4 = document.getElementById("frutos");
      
        if(checkBox1.checked == true){

          if(state.counterItem5 > 0){
            return;
          }else if(state.counterItem5 <= 0){
            state.checkOut += 55;
            state.items += 1;
          }
          state.topping1 = 'Mensaje'
          state.counterItem5 += 1;
        }

        if(checkBox2.checked == true){

          if(state.counterItem6 > 0){
            state.counterTop1 -= 1;

            if(state.counterTop1 <= 0){
              state.counterTop1 = 'Sin existencias!';
            }
          }else if(state.counterItem6 <= 0){
            state.checkOut += 20;
            state.items += 1;
          }
          state.topping1 = 'Chispas de chocolate'
          state.counterItem6 += 1;
        }

        if(checkBox3.checked == true){
          if(state.counterItem7 > 0){
            state.counterTop2 -= 1;

            if(state.counterTop2 <= 0){
              state.counterTop2 = 'Sin existencias!';
            }
          }else if(state.counterItem7 <= 0){
            state.checkOut += 70;
            state.items += 1;
          }
          state.topping2 = 'Almendras'
          state.counterItem7 += 1;
        }

        if(checkBox4.checked == true){
          if(state.counterItem8 > 0){
            state.counterTop3 -= 1;

            if(state.counterTop3 <= 0){
              state.counterTop3 = 'Sin existencias!';
            }
          }else if(state.counterItem8 <= 0){
            state.checkOut += 10;
            state.items += 1;
          }
          state.topping3 = 'Frutos'
          state.counterItem8 += 1;
        }
    },

    setValues(state, persona) {
      state.persona  = Object.assign({}, state.persona, persona);
    }
  },
  actions: {
  },
  modules: {
  }
})
