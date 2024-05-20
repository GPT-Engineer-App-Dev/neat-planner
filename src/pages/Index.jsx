import { Container, Text, VStack, Input, Button, List, ListItem, Checkbox, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo App</Text>
        <HStack width="100%">
          <Input 
            placeholder="Enter a new task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="blue">Add Task</Button>
        </HStack>
        <List spacing={3} width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <HStack>
                <Checkbox 
                  isChecked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)}
                />
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;