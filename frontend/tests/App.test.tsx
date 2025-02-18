import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from '../src/App'
import { test, expect, describe, beforeEach, afterEach } from 'Vitest'
import React from 'react'
describe('test app', () => {
    beforeEach(() => {
        render(<App />)   
    })
    afterEach(cleanup)
    test('count is 0', () => {
        expect(screen.queryByText("count is 0")).toBeTruthy()
    })
    test('after click btn ,count is 1', () => {
        expect(screen.queryByText("count is 1")).toBeFalsy();
        const button = screen.getByText("count is 0");
        fireEvent.click(button);
        expect(screen.queryByText("count is 1")).toBeTruthy();
    })
})