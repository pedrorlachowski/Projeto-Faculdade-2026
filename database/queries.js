//Funções de Insert, Update, Delete

import * as SQLite from 'expo-sqlite';

export async function AdcionarUsuario(nome, email, senha) {
    const db = await SQLite.openDatabaseAsync('zoo.db');
    
    try {
    const resultado = await db.runAsync(`
        INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, 
        nome, 
        email, 
        senha
    );
    return resultado.lastInsertRowID;
    }catch (error){
        console.error("Erro ao adicionar usuário:", error);
        throw error;
    }
} 

export async function ListaUsuariosNoConsole() {
    const db = await SQLite.openDatabaseAsync('zoo.db');
    const todos = await db.getAllAsync(`SELECT * FROM usuarios`);
    console.log("--- LISTA DE USUÀRIOS ---");
    console.table(todos);
}

export async function BuscarUsuarioParaLogin(email, senha) {
    
    try {

        const db = await SQLite.openDatabaseAsync('zoo.db');

        if (!db){
            throw new Error("Banco de dados não disponível");
        }

        const usuario = await db.getFirstAsync(
            'SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]
        );
        return usuario;
    }catch (error) {
            console.log("Erro ao buscar usuário para login:", error);
            return null;
        }
}

export async function CarregarAnimais() {
    try {
        const db = await SQLite.openDatabaseAsync('zoo.db');
        const animais = await db.getAllAsync('SELECT * FROM animais');
        return animais;
    } catch (error) {
        console.error("Erro ao carregar animais:", error);
        throw error;
    }
}
