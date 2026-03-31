// Scripts de criação de tabelas

import * as SQLite from 'expo-sqlite';

export async function initializeDatabase() {
    const db = await SQLite.openDatabaseAsync('zoo.db');
    // Criar tabela de usuários
    try{
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL
        );
    `);
    console.log("Banco de dados inicializado com sucesso!");
    }catch (error) {
        console.log("Erro ao inicializar o banco de dados:", error);
        throw error;
    }

}