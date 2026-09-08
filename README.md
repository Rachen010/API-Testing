# Simple API

โครงสร้าง REST API แบบง่ายที่สุดสำหรับทดสอบระบบ + ใช้ Postman Software ในการ GET/POST/PUT/DELETE

## โครงสร้าง Folder
```
simple-api/
├── server.js              # entry point
├── package.json
├── routes/
│   └── items.js           # กำหนด endpoint
├── controllers/
│   └── itemController.js  # logic จัดการ request
└── models/
    └── itemModel.js        # เก็บข้อมูล (in-memory)
```

## วิธีรัน
```bash
npm install
npm start
```

## ทดสอบ
```bash
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"test"}'
curl http://localhost:3000/items
curl http://localhost:3000/items/<id>
curl -X PUT http://localhost:3000/items/<id> -H "Content-Type: application/json" -d '{"name":"updated"}'
curl -X DELETE http://localhost:3000/items/<id>
```

## Endpoints
| Method | Path        | รายละเอียด        |
|--------|-------------|--------------------|
| GET    | /items      | ดึงข้อมูลทั้งหมด     |
| GET    | /items/:id  | ดึงข้อมูลตาม id     |
| POST   | /items      | สร้างข้อมูลใหม่      |
| PUT    | /items/:id  | แก้ไขข้อมูล         |
| DELETE | /items/:id  | ลบข้อมูล            |
