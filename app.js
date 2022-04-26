require('dotenv').config();
const express = require('express');
const app = express();
const anggotaRouter = require("./api/anggota/anggota_router");
const petugasRouter = require("./api/petugas/petugas_router");
const pinjamRouter = require("./api/pinjam/pinjam_router");
const bukuRouter = require("./api/buku/buku_router");
app.use(express.json());
app.use("/api/anggota", anggotaRouter);
app.use("/api/petugas", petugasRouter);
app.use("/api/pinjam", pinjamRouter)
app.use("/api/buku", bukuRouter)
app.listen(process.env.APP_PORT, () => {
    console.log("Tersambung di PORT : " + process.env.APP_PORT)
})