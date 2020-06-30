<?php

    class Connect {
        const host = 'localhost';
        const database = 'MRbarba';
        const user = 'root';
        const password = '';
        const charset = 'utf8mb4';
        public static $instance;
        // iniciando a conexão com banco de dados se a $instance não existir é criado a conexão
        public static function getInstance() {
            if(empty(self::$instance)) {
                try {
                    self::$instance = new PDO (
                        "mysqli:host=" . self::host . 
                        "; dbname=" .self::database . 
                        "; port=3308" . 
                        "; charset=" . self::charset . 
                        "", self::user, self::password
                    );
                } catch(PDOException $error) {
                    die("<h1>Erro ao conectar com banco de dados contate o suporte</h1>");
                }
                return self::$instance;
            }
        }
    }


?>