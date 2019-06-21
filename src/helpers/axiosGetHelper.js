import axios from 'axios';

/*
 @Leslie Khumalo
 axios get function;

     ******************** Usage ****************************

    returns a promise to be handled inside parent component
    import helper and pass url plus parameter to be sent
* */


export default (url, params) => axios.get(url, { params } )