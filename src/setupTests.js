// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

// Mock axios to prevent network calls during tests
jest.mock('axios');

beforeEach(() => {
  axios.get.mockImplementation((url) => {
    if (url.includes('/count')) return Promise.resolve({ data: 0 });
    if (url.includes('/unique')) return Promise.resolve({ data: 0 });
    if (url.includes('/hello')) return Promise.resolve({ data: 'Hi!' });
    if (url.includes('/visit')) return Promise.resolve({ data: { device: 'Test' } });
    return Promise.resolve({ data: null });
  });
});
