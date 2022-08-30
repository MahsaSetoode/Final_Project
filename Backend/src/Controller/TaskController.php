<?php

namespace CRUD\Controller;

use CRUD\Helper\TaskHelper;
use CRUD\Model\Actions;
use CRUD\Entity\Task;

class TaskController
{
    public function switcher($uri, $request)
    {
        switch ($uri) {
            case Actions::CREATE:
                $this->createAction($request);
                break;
            case Actions::UPDATE:
                $this->updateAction($request);
                break;
            case Actions::READ:
                $this->readAction($request);
                break;
            case Actions::READ_ALL:
                $this->readAllAction($request);
                break;
            case Actions::DELETE:
                $this->deleteAction($request);
                break;
            default:
                break;
        }
    }

    public function createAction($request)
    {
        $task = new Task();
        $task->setTitle($_POST['title']);
        $task->setDescription($_POST['description']);
        $task->setState($_POST['state']);
        $taskHelper = new TaskHelper();
        $taskHelper->insert($task);
    }

    public function updateAction($request)
    {
        $task = new Task();
        $task->setTitle($_POST['title']);
        $task->setDescription($_POST['description']);
        $task->setState($_POST['state']);
        $taskHelper = new TaskHelper();
        $taskHelper->update($task);
    }

    public function readAction($request)
    {
        $taskHelper = new TaskHelper();
        $body = "<table>
                  <tr>
                    <th>id</th>
                    <th>State</th>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>";

        /** @var Task $task */
        $task = $taskHelper->fetch($request['id']);
        $body = $body . "  <tr>
            <td>" . $task->getId() . "</td>
            <td>" . $task->getState() . "</td>
            <td>" . $task->getTitle() . "</td>
            <td>" . $task->getDescription() . "</td>
          </tr>";

        $body = $body . "</table>";
        echo $body;
    }

    public function readAllAction($request)
    {
        $taskHelper = new TaskHelper();
        $body = "<table>
                  <tr>
                    <th>id</th>
                    <th>State</th>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>";

        /** @var Task $task */
        foreach ($taskHelper->fetchAll() as $task) {
            $body = $body . "  <tr>
            <td>" . $task->getId() . "</td>
            <td>" . $task->getState() . "</td>
            <td>" . $task->getTitle() . "</td>
            <td>" . $task->getDescription() . "</td>
          </tr>";
        }
        $body = $body . "</table>";
        echo $body;

    }

    public function deleteAction($request)
    {
        $taskHelper = new TaskHelper();
        $taskHelper->delete($request['username']);
    }

}