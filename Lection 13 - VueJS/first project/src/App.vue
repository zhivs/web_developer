<!-- Основы реактивности -->
<!-- <script>
export default {
  data() {
  return {
    count: 0
  }
},
methods: {
  increment() {
    this.count++ // Vue увидит изменение → перерисует {{ count }} в шаблоне!
  }
}
}
</script>
<template>
  <div>
    <p>Счётчик: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template> -->
<!-- Вычисляемые свойства -->
<!-- <script>
export default {data() {
  return {
    firstName: 'Иван',
    lastName: 'Петров'
  }
},
computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
}
</script>
<template>
  <div>
    <p>Полное имя: {{ fullName }}</p>

  </div>
</template> 
-->

<!-- Динамические классы -->
<!-- <template>
  <div :class="{ active: isActive, error: hasError }">
    Это сообщение
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      hasError: false
    }
  }
}
</script>

<style>
.active { color: green; }
.error { color: red; }
</style> -->

<!-- Динамические стили -->
<!-- <template>
  <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
    Цветной текст
  </div>
</template>

<script>
export default {
  data() {
    return {
      textColor: 'blue',
      fontSize: 20
    }
  }
}
</script> -->


<!-- Условная отрисовка-->
<!-- <template>
  <div>
    <p v-if="seen">Привет, я виден!</p>
    <p v-else>Меня не видно 😢</p>

    <button @click="toggle">Переключить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true
    }
  },
  methods: {
    toggle() {
      this.seen = !this.seen
    }
  }
}
</script> -->

<!-- Отрисовка списков -->
<!-- <template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
  return {
    todos: [
      { id: 1, text: 'Выучить Vue' },
      { id: 2, text: 'Сделать проект' },
      { id: 3, text: 'Выпить чай ☕' }
    ]
  }
}
}
</script> -->


<!-- Обработка событий -->
<!-- 
<template>
  <div>
    <button @click="sayHello">Сказать привет</button>
    <button @click="say('Привет, мир!')">Сказать что-то</button>
    <input @input="onInput" placeholder="Напиши что-нибудь" />
  </div>
</template>

<script>
export default {
  methods: {
    sayHello() {
      alert('Привет!')
    },
    say(message) {
      alert(message)
    },
    onInput(event) {
      console.log(event.target.value)
    }
  }
}
</script> -->

<!-- Работа с формами -->
<!-- <template>
  <div>
    <input v-model="message" placeholder="Введите текст">
    <p>Вы ввели: {{ message }}</p>

    <textarea v-model="description"></textarea>
    <p>Описание: {{ description }}</p>

    <input type="checkbox" v-model="isChecked"> Согласен
    <p>Чекбокс: {{ isChecked }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      description: '',
      isChecked: false
    }
  }
}
</script> -->

<!-- Наблюдатели -->
<!-- <script> 
export default {data() {
  return {
    question: '',
    answer: 'Задайте вопрос'
  }
},
watch: {
  question(newVal) {
    if (newVal.includes('?')) {
      this.answer = 'Думаю над ответом...'
      setTimeout(() => {
        this.answer = 'Ответ: Да!'
      }, 2000)
    }
  }
}
}
</script> 
<template>
  <div>
    <input v-model="question" placeholder="Задайте вопрос">
    <p>{{ answer }}</p>
  </div>
</template> -->

<!-- <template>
  <div>
    <input ref="inputField" />
    <button @click="focusInput">Фокус</button>
  </div>
</template>

<script>
export default {
  methods: {
    focusInput() {
      this.$refs.inputField.focus()
    }
  }
}
</script> -->










