import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock fetch to prevent network calls during tests
global.fetch = vi.fn((url) => {
  if (url.includes('/count')) {
    return Promise.resolve({
      json: () => Promise.resolve(0),
      text: () => Promise.resolve('0')
    });
  }
  if (url.includes('/unique')) {
    return Promise.resolve({
      json: () => Promise.resolve(0),
      text: () => Promise.resolve('0')
    });
  }
  if (url.includes('/hello')) {
    return Promise.resolve({
      json: () => Promise.resolve('Hi!'),
      text: () => Promise.resolve('Hi!')
    });
  }
  if (url.includes('/visit')) {
    return Promise.resolve({
      json: () => Promise.resolve({ device: 'Test' }),
      text: () => Promise.resolve('{"device":"Test"}')
    });
  }
  return Promise.resolve({
    json: () => Promise.resolve(null),
    text: () => Promise.resolve('')
  });
});

beforeEach(() => {
  vi.clearAllMocks();
});
