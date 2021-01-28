 
import { authReducer } from './../../auth/authReducer';
import { types } from '../../types/types';
import '@testing-library/jest-dom';

  
describe('Pruebas en authReducer', () => {
    
    const user = { 
        name: 'Fernando'
    }

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer(user,{});
        expect( state ).toEqual( user ); 
        
    })

    test('Debe de autenticar y colocar el name del usuario', () => {
        
        const user = { 
            name: 'maria'
        }
        
        const action = {
            type: types.login,
            payload: user
        }
    
        const state = authReducer(user, action);
        
        expect( state.name ).toBe( user.name );
        expect( state.logged ).toBe( true );
        

    })

    test('Debe de borrar el name del usuario y logged en false', () => {

        const user = { 
            name: 'Juan Pablo'
        }

        const action = {
            type: types.logout,
            payload: user
        }

        const state = authReducer(user, action);

        expect( state.logged ).toBe( false );
        
    })
    
    
    
})
