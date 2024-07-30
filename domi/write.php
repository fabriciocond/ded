<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST['data'];
    
    // Caminho para o arquivo debug.txt
    $filePath = 'debug.txt';
    
    // Atualiza o arquivo debug.txt
    if (file_put_contents($filePath, $data) !== false) {
        echo 'Dados salvos com sucesso.';
    } else {
        echo 'Erro ao salvar os dados.';
    }
} else {
    echo 'Método de requisição inválido.';
}
?>
