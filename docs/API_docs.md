
---

# 📄 API_DOCS.md

## Base URL

```
http://localhost:5000/api
```

## 🔹 Auth Routes

### POST /auth/signup

Create a new user

**Body:**

```json
{
  "name": "Abhi",
  "email": "abhi@example.com",
  "password": "123456"
}
```

### POST /auth/login

Login user

---

## 🔹 RAG Route

### POST /rag/generate

**Body:**

```json
{
  "query": "Show temperature between 2025-01-01 and 2025-01-10"
}
```

**Response:**

```json
{
  "answer": "The temperature ranged between 3°C and 20°C",
  "data": [ ... ]
}
```

---

