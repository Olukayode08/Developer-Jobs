<!-- Options API -->

<template>
<h1>{{ name }}</h1>
<p v-if="status === 'active'">User is Active</p>
<p v-else-if="status === 'pending'">User is Inctive</p>
<p v-else>User is Inactive</p>
<!-- <button v-on:click="toggleStatus">Toggle Status</button> -->
<button @click="toggleStatus">Toggle Status</button>
<p v-for="task in tasks" :key="task">{{ task }}</p>


<a :href="link" target="_blank">Link</a>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks : ['Task 1', 'Task 2', 'Task 3'],
      link : 'https://www.google.com'
    };
  },
  methods:{
    toggleStatus() {
      if(this.status === 'active'){
        this.status = 'pending'
      } else if(this.status === 'pending'){
        this.status = 'inactive'
      }  
      else {
        this.status = 'active'
      }
    }
  }
}

</script>


<!-- Composition Api -->

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is Inctive</p>
  <p v-else>User is Inactive</p>
  <!-- <button v-on:click="toggleStatus">Toggle Status</button> -->
  <button @click="toggleStatus">Toggle Status</button>
  <div v-for="(task, index) in tasks" :key="index">
    <p>{{ task }}</p>
    <button @click="DeleteTask(index)">Delete Task</button>
  </div>
  <a :href="link" target="_blank">Link</a>
  <form @submit.prevent="AddTask">
    <label for="newTask">Add Task:</label>
    <input type="text" id="newTask" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const name = ref('John Doe')
const status = ref('active')
const tasks = ref(['Task 1', 'Task 2', 'Task 3'])
const link = ref('https://www.google.com')
const newTask = ref('')

const AddTask = () => {
  // e.preventDefault()
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const DeleteTask = (index) => {
  tasks.value.splice(index, 1)
}

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
     tasks.value = data.map((task) => task.title)
    console.log(data)
  } catch (error) {
    console.log('error')
  }
})
</script>


