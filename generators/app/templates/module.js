
// * * * GENERATED VUE STORE MODULE * * *
import sync from "../sync.js";
const keyword="<%= keyword %>"
const state={
  <%= keyword %>: []
};
const getters={
  <%= keyword %>( state, getters, rootState, rootGetters ){
    return state.<%= keyword %>.map( <%= name %>=>{
      return Object.assign({}, <%= name %>, {});
    })
  }
};

const actions={
  CREATE_<%= NAME %>({ commit }, payload ){
    return sync.create( keyword, payload ).then( response=>{
      commit("ADD_<%= NAME %>", response.data );
      return response.data;
    })
  },
  DESTROY_<%= NAME %>({ commit }, id ){
    return sync.destroy( keyword, id ).then(()=>{
      commit("REMOVE_<%= NAME %>", id );
    })
  },
  UPDATE_<%= NAME %>({ commit }, payload ){
    return sync.update( keyword, payload ).then( response=>{
      commit("ADD_<%= NAME %>", response.data );
      return response.data;
    })
  }
}

const mutations={
  ADD_<%= NAME %>( state, payload ){
    let arr=( Array.isArray( payload ) ? payload : [ payload ]).slice();
    state.<%= keyword %>=state.<%= keyword %>.map( <%= name %>=>{
      let index=arr.findIndex( p=>p.id==<%= name %>.id );
      if( index >= 0 ){
        <%= name %>=arr[index];
        arr.splice( index, 1 );
      }
      return <%= name %>;
    });
    if( arr.length ) state.<%= keyword %>.push( ...arr );
  },
  REMOVE_<%= NAME %>( state, id ){
    state.<%= keyword %>=state.<%= keyword %>.filter( <%= name %>=><%= name %>.id != id );
  }
};

export default{ state, getters, actions, mutations };
