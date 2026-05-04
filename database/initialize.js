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

    try{
        
        await db.execAsync(`DROP TABLE IF EXISTS animais;`); // Remove a tabela de animais se ela já existir para garantir uma nova criação


        await db.execAsync(`
            CREATE TABLE IF NOT EXISTS animais (
                id_animal INTEGER PRIMARY KEY AUTOINCREMENT,
                nome_animal TEXT NOT NULL,
                nome_cientifico TEXT NOT NULL,
                habitat TEXT NOT NULL
            );
        `);

        const todos  = await db.getAllAsync(`SELECT * FROM animais`);   
         if (todos.length === 0) {
            console.log("Tabela de animais vazia. Inserindo dados iniciais...");
            await db.runAsync(`
                INSERT INTO animais (nome_animal, nome_cientifico, habitat) VALUES 
                ('Tigre', 'Panthera tigris', 'Florestas e savanas'),
                ('Elefante', 'Loxodonta africana', 'Savana e florestas'),
                ('Leão', 'Panthera leo', 'Savana'),
                ('Girafa', 'Giraffa camelopardalis', 'Savana'),
                ('Zebra', 'Equus quagga', 'Savana');
            `);
         }
         
        console.log("Tabela de animais inicializada com sucesso!");
    }catch (error) {
        console.log("Erro ao inicializar a tabela de animais:", error);
        throw error;
    }
}