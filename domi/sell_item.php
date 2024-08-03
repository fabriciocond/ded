<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $itemName = $data['itemName'];
    $sellValue = $data['sellValue'];

    $filePath = 'debug.txt';
    $users = json_decode(file_get_contents($filePath), true);

    foreach ($users as &$user) {
        if ($user['username'] === $username) {
            $user['money'] += $sellValue;

            foreach ($user['inventory'] as &$inventoryItem) {
                if ($inventoryItem['name'] === $itemName) {
                    if ($inventoryItem['count'] > 1) {
                        $inventoryItem['count']--;
                    } else {
                        $user['inventory'] = array_filter($user['inventory'], function($item) use ($itemName) {
                            return $item['name'] !== $itemName;
                        });
                    }
                    break;
                }
            }
            break;
        }
    }

    if (file_put_contents($filePath, json_encode($users, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>


