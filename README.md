# FloatChat – AI Powered Ocean Data Analytics

## Overview

FloatChat is a full‑stack application that allows users to query oceanographic datasets using natural language. The system integrates a React frontend, a Node.js API layer, and a Python FastAPI Retrieval-Augmented Generation (RAG) backend that interacts with a PostgreSQL database containing processed NetCDF ocean data.

Users can ask questions such as:

"Show temperature between 2025‑01‑01 and 2025‑01‑10"

The system retrieves relevant data from the database, optionally generates SQL queries using an LLM, and returns structured data that can be visualized in graphs.

---

# Architecture

React Frontend
|
v
Node.js Express API
|
v
Python FastAPI RAG Engine
|
v
PostgreSQL Database
|
v
Ocean NetCDF ETL Pipeline

Components:

Frontend

* React
* Recharts graph visualization

Backend API

* Node.js
* Express

AI Layer

* FastAPI
* RAG pipeline

Database

* PostgreSQL

Data Processing

* Python ETL pipeline for NetCDF files

---

# Key Features

Natural Language Queries
Users can ask questions about ocean data without writing SQL.

LLM Generated SQL
The system can generate SQL queries dynamically using OpenAI.

Fallback Hardcoded SQL
A switch allows fallback to a regex/hardcoded SQL strategy.

Data Visualization
Temperature, salinity, and other parameters are visualized in charts.

ETL Pipeline
NetCDF scientific datasets are processed and loaded into PostgreSQL.

---

# Tech Stack

Frontend

* React
* Vite
* Recharts
* Axios

Backend

* Node.js
* Express
* CORS

AI Backend

* Python
* FastAPI
* OpenAI API

Database

* PostgreSQL
* SQLAlchemy

Data Processing

* Pandas
* Xarray

---

Project Structure


FloatChat/
│
├── frontend/                      # React App
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Main.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── services/
│   │   │   └── ragService.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── back_end/                      # Node.js API Layer
│   ├── routes/
│   │   ├── ragRoutes.js
│   │   ├── authRoutes.js
│   │   └── dataRoutes.js
│   │
│   ├── controllers/              # (optional but recommended)
│   │   └── authController.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── ocen_edl/                     # Python RAG + ETL Backend
│   ├── api.py                   # FastAPI entry point
│   ├── test_rag.py              # Node bridge script
│   ├── requirements.txt         # ✅ here
│   ├── .env
│   │
│   ├── rag/
│   │   └── rag_pipeline.py
│   │
│   ├── database/
│   │   └── db_utils.py
│   │
│   ├── llm/
│   │   └── sql_generator.py
│   │
│   ├── extract/
│   │   └── extract_netcdf.py
│   │
│   ├── transform/
│   │   └── transform_data.py
│   │
│   ├── load/
│   │   └── load_postgres.py
│   │
│   ├── config/
│   │   └── settings.py
│   │
│   └── pipeline/
│       └── main_pipeline.py
│
├── docs/                        # 📄 Supporting docs (recommended)
│   ├── API_DOCS.md
│   ├── ARCHITECTURE.md
│   ├── SETUP_GUIDE.md
│   └── TROUBLESHOOTING.md
│
├── README.md                   # Main project documentation
└── .gitignore
# Environment Variables

Node Backend (.env)

PORT=5000

Python RAG Backend (.env)

OPENAI_API_KEY=your_api_key
USE_LLM_SQL=true

DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=floatchat

---

# Installation

## 1. Clone Repository

```
git clone <repo-url>
cd FloatChat
```

---

# Setup Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs at:

[http://localhost:5173](http://localhost:5173)

---

# Setup Node Backend

```
cd back_end
npm install
node server.js
```

Backend runs at:

[http://localhost:5000](http://localhost:5000)

---

# Setup Python RAG Backend

Create virtual environment

```
python -m venv venv
```

Activate

Windows

```
venv\Scripts\activate
```

Install dependencies

```
pip install fastapi uvicorn pandas sqlalchemy psycopg2 xarray openai
```

Run API

```
uvicorn api:app --reload
```

---

# Running the Full System

Start services in this order:

1 React frontend
2 Node backend
3 FastAPI RAG backend
4 PostgreSQL database

---

# API Endpoints

Node API

POST /api/rag/generate

Request

```
{
  "query": "Show temperature between 2025-01-01 and 2025-01-10"
}
```

Response

```
{
  "answer": "The temperature ranged between 3°C and 21°C.",
  "data": [
    {
      "time": "2025-01-01",
      "temperature": 12.3
    }
  ]
}
```

---

# Graph Visualization

Graphs are rendered using Recharts.

Important mapping:

X Axis

```
<XAxis dataKey="time" />
```

Line value

```
<Line dataKey="temperature" />
```

---

# SQL Strategy Modes

The system supports two SQL generation modes.

Hardcoded SQL

Regex based extraction of parameters.

LLM SQL

Natural language is converted to SQL using OpenAI.

Switch via environment variable:

```
USE_LLM_SQL=true
```

---

# ETL Pipeline

The ETL pipeline processes oceanographic NetCDF files.

Steps:

1 Extraction
NetCDF files are loaded using Xarray.

2 Transformation
Data cleaning, type conversion, and outlier handling.

3 Load
Processed data is inserted into PostgreSQL.

Run pipeline:

```
python main_pipeline.py
```

---

# Troubleshooting

Graph Not Rendering

Check if backend returns data field.

Ensure datetime columns are converted to strings before JSON serialization.

JSON Parse Errors

Ensure Python prints only JSON output when called from Node.

Database Connection Errors

Verify PostgreSQL credentials in environment variables.

---

# Future Improvements

Vector Embedding RAG

pgvector integration for semantic retrieval.

Authentication

User login and query history.

Conversation Memory

Multi‑turn AI conversations.

Deployment

Docker containers and cloud deployment.

---

