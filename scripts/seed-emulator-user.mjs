const email = process.env.SEED_EMAIL ?? 'user@example.com';
const password = process.env.SEED_PASSWORD ?? 'password123';

const response = await fetch(
  'http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=demo',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  },
);

const body = await response.json();
const message = body?.error?.message;
if (!response.ok && message !== 'EMAIL_EXISTS') {
  console.error(body);
  process.exit(1);
}

console.log(`emulator user ready: ${email}`);
