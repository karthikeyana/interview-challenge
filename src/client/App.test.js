import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Example test
describe('App tests', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;
    it('renders a message', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        render(getByText)
        expect(screen.getByText('6 items')).toBeInTheDocument()
    })
})
