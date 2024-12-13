# PATHify API
RESTful API made with Express JS and deploy in Cloud Run.

## Prerequisites
Node jS v20.11.1
CloudSQL
Google Cloud Storage

## Installation
```bash
npm install
```

## Usage
```bash
npm run start
npm run start-auto
```

## Dependencies
---
Dependency | Usage | Version
--- | --- | ---
@google-cloud/SQL | SQL Database Based on Google Cloud | v13.0.1
@google-cloud/storage | Storing Model & File Input From CLient | v9.15.0
bcrypt | Hashing and salting passwords | v5.1.1
dotenv | Environment Variables Loader | v16.4.5
express | Backend Library | v4.21.1
jsonwebtoken | Create and Verify JSON Web Tokens | v9.0.2
multer | Middleware to handle `multipart/form-data` | v1.4.5-lts.1
nodemon | Auto-restart Server | v3.1.7

## Routes
---
Routes| Method | Usage 
--- | --- | ---
`
`/api/auth/register` | POST | Create Account
`/api/auth/login` | POST | Login to Acccount
`/api/scan/scan_image` | POST | Upload image to Bucket
