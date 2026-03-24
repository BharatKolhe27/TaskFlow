    export async function retry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
    try {
        return await fn();
    } catch {
        if (retries === 0) throw new Error('Retry failed');
        return retry(fn, retries - 1);
    }
    }