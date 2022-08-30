<?php

namespace CRUD\Helper;

use CRUD\Entity\Task;

class TaskHelper
{
    public function insert(Task $task)
    {
        /** @var DBConnector $dbHelper */
        $dbHelper = new DBConnector();
        $dbHelper->connect();
        $sql = "INSERT INTO task (title, description, state) VALUES ('" . $task->getTitle() . "', '" . $task->getDescription() . "', '" . $task->getState() . "')";
        if ($dbHelper->execQuery($sql)) {
            echo "Record added successfully";
        } else {
            echo "An Error Occurred";
        }
    }

    public function fetch(int $id)
    {
        $task = new Task();
        /** @var DBConnector $dbHelper */
        $dbHelper = new DBConnector();
        $dbHelper->connect();
        $result = $dbHelper->execQuery("SELECT * FROM task WHERE id =" . $id);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $task->setId($row[0]['id']);
        $task->setState($row[0]['state']);
        $task->setTitle($row[0]['title']);
        $task->setDescription($row[0]['description']);

        return $task;
    }

    public function fetchAll()
    {
        $tasks = [];
        /** @var DBConnector $dbHelper */
        $dbHelper = new DBConnector();
        $dbHelper->connect();
        $result = $dbHelper->execQuery("SELECT * FROM task ORDER BY ID");
        $rows = $result->fetch_all(MYSQLI_ASSOC);

        foreach ($rows as $row) {
            $task = new Task();
            $task->setId($row['id']);
            $task->setState($row['state']);
            $task->setTitle($row['Title']);
            $task->setDescription($row['description']);
            $tasks[] = $task;
        }
        return $tasks;
    }

    public function update(Task $task)
    {
        /** @var DBConnector $dbHelper */
        $dbHelper = new DBConnector();
        $dbHelper->connect();
        $sql = "UPDATE task SET title = '".$task->getTitle()."', description = '".$task->getDescription()."' WHERE state = '".$task->getState()."'";
        if ($dbHelper->execQuery($sql)) {
            echo "Record updated successfully";
        } else {
            echo "An Error Occurred";
        }
    }

    public function delete(int $id)
    {
        /** @var DBConnector $dbHelper */
        $dbHelper = new DBConnector();
        $dbHelper->connect();
        $sql = "DELETE FROM task WHERE id = '".$id."'";
        if ($dbHelper->execQuery($sql)) {
            echo "Record deleted successfully";
        } else {
            echo "An Error Occurred";
        }
    }

}