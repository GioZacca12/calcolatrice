import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
    it('Renders App component', () => {
        render(<App/>);

        expect(screen.getByText('C')).toBeInTheDocument();
    });
});

describe('Form input', () => {
    it('Renders input fields', () => {
        render(<App/>)

        expect(screen.queryAllByRole('textbox'));
    })
})