import fetch from "node-fetch";

const BASE_URL = "http://localhost:3000";

const testUser = {
  name: "Test User",
  email: `testuser+${Date.now()}@example.com`,
  password: "TestPassword123",
};

async function registerUser() {
  console.log("➡️ Registering user...");
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(testUser),
  });
  const data = await res.json();
  console.log("Register response:", data);
}

async function loginUser() {
  console.log("➡️ Logging in user...");
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: testUser.email,
      password: testUser.password,
    }),
  });
  const data = await res.json();
  console.log("Login response:", data);
}

async function main() {
  await registerUser();
  await loginUser();
}

main().catch(console.error);
