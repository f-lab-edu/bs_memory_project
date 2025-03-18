import { afterAll, beforeAll, afterEach } from 'vitest';
import { server } from '@/mock/node.ts';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
