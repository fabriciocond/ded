<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode($_POST['data'], true);

    if ($data) {
        $filename = 'debug.txt';
        
        if (file_exists($filename)) {
            $json = file_get_contents($filename);
            $users = json_decode($json, true);
        } else {
            $users = [];
        }

        foreach ($users as &$user) {
            if ($user['username'] === $data['username']) {
                $user = $data;
                break;
            }
        }

        $json = json_encode($users, JSON_PRETTY_PRINT);
        
        if (file_put_contents($filename, $json)) {
            echo "Inventário atualizado com sucesso.";
        } else {
            echo "Erro ao atualizar o inventário.";
        }
    } else {
        echo "Dados inválidos.";
    }
} else {
    echo "Método não permitido.";
}
?>

