import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "../main";
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: [],
  },
  getters: {
    mostrarJuguetes(state){
      return state.juguetes;
    }
  },
  mutations: {
    mutarJuguetes(state,arreglo){
      state.juguetes = arreglo;
    }
  },
  actions: {
    traerData({commit}){
      db.collection("juguetes").onSnapshot(respuesta => {
        let arreglo = [];
        respuesta.forEach(element =>{
          arreglo.push({
            id: element.id,
            codigo:element.data().codigo,
            nombre: element.data().nombre,
            stock: element.data().stock,
            precio: element.data().precio,
          })
        });
        commit('mutarJuguetes',arreglo);
      });
    },
    agregandoJuguetes(context,data){
      db.collection("juguetes").add({
        codigo: data.codigo,
        nombre: data.nombre,
        stock: data.stock,
        precio: data.precio,
      }).then(resp=>{
        console.log(resp);
      })
    },
    eliminarJuguetes(context,id){
      db.collection('juguetes').doc(id).delete().then(()=>{
        console.log("Elemento borrado");
      }).catch(error=>{
        console.log(error);
      })
    },
    actualizarJuguetes(context,data){
      db.collection("juguetes").doc(data.id).update({
        codigo: data.codigo,
        nombre: data.nombre,
        stock: data.stock,
        precio: data.precio,
      }).then(()=>{
        console.log("Actualizo");
        setTimeout(()=>{
          router.replace('/juguetes');
        },1000);
      })
    }
  },
})
