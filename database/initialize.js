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
                habitat TEXT NOT NULL,
                descricao TEXT NOT NULL,
                imagem_url TEXT NOT NULL
            );
        `);

        const descricaoTigre = 'os tigres são os maiores felinos do mundo, conhecidos por sua força impressionante, comportamento solitário e aquelas listras icônicas que funcionam como uma "digital" única para cada animal.';
        
        const descricaoElefante = 'O maior animal terrestre, inteligente e sensível, com sua tromba versátil que serve para tudo, desde comer até se comunicar.'
       
        const descricaoLeao = 'O "rei da selva", famoso por sua juba imponente e por ser um dos poucos felinos que vive em grupos sociais organizados.'

        const descricaoGirafa = 'A gigante gentil das savanas, com seu pescoço longo para alcançar folhas altas e uma língua azul super resistente.'

        const descricaoZebra = ' Conhecida por seu padrão de listras pretas e brancas único (como uma digital) que ajuda a confundir predadores quando estão em grupo.'


        const todos  = await db.getAllAsync(`SELECT * FROM animais`);   
         if (todos.length === 0) {
            console.log("Tabela de animais vazia. Inserindo dados iniciais...");
            await db.runAsync(`
                INSERT INTO animais (nome_animal, nome_cientifico, habitat, descricao, imagem_url) VALUES 
                ('Tigre', 'Panthera tigris', 'Florestas e savanas', '${descricaoTigre}', 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

                ('Elefante', 'Loxodonta africana', 'Savana e florestas', '${descricaoElefante}', 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

                ('Leão', 'Panthera leo', 'Savana', '${descricaoLeao}', 'https://images.unsplash.com/photo-1590668468552-d87c3a011afb?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

                ('Girafa', 'Giraffa camelopardalis', 'Savana', '${descricaoGirafa}', 'https://images.unsplash.com/photo-1612358405970-e1aeba9d76c2?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

                ('Zebra', 'Equus quagga', 'Savana', '${descricaoZebra}', 'https://images.unsplash.com/photo-1526319238109-524eecb9b913?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            `);
         }
         
        console.log("Tabela de animais inicializada com sucesso!");
    }catch (error) {
        console.log("Erro ao inicializar a tabela de animais:", error);
        throw error;
    }
}