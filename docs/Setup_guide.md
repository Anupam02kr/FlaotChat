

# 📄 SETUP_GUIDE.md

## 1️⃣ Clone Repo

```
git clone <repo-url>
cd FloatChat
```

---

## 2️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 3️⃣ Backend Setup

```
cd back_end
npm install
node server.js
```

Create `.env`:

```
PORT=5000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=floatchat
```

---

## 4️⃣ Python RAG Setup

```
cd ocen_edl
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Run API:

```
uvicorn api:app --reload
```

---

