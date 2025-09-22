<!-- Синтаксис шаблонов-->
<!-- <template>
  <div>
    <h1>Привет, {{ name.toUpperCase() }}!</h1>
    <p>Тебе {{ age }} лет.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Иван',
      age: 38
    }
  }
}
</script> -->


<!-- Основы реактивности -->
<!-- <template>
  <div>
    <p>Счётчик: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
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
</script> -->


<!-- Вычисляемые свойства -->
<!-- <template>
  <div>
    <p>Полное имя: {{ fullName }}</p>

  </div>
</template> 

<script>
  export default {
    data() {
      return {
        firstName: 'Иван',
        lastName: 'Иванов'
      }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
  }
</script> -->

<!-- Вычисляемые свойства -->
<!-- <template>
  <div>
    <p>Опубликованные книги:
    <span>{{ books.length > 0 ? 'Да' : 'Нет' }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: []
    }
  }
}
</script> -->

<!-- Динамические классы -->
<!-- <template>
  <div class='static ':class="{ active: isActive, error: hasError }" style="font-size: 54px;">
    Это сообщение
  </div>
  <p :style="{fontSize:fontSize + 'px'}">Этот абзац {{ fontSize }} пикселей</p>

</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      fontSize: 54 
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
<!--
<template>
  <div>
    <p v-if="type === 'A'">A</p>
    <p v-else-if="type === 'B'">B</p>
    <p v-else-if="type === 'C'">C</p>
    <p v-else>Не А, B или C</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'h'
    }
  }
}
</script> -->

<!-- <template>
  <template v-if="type">
    <div>
      <p>A</p>
      <p>B</p>
      <p>C</p>
    </div>
  </template>
</template>

<script>
export default {
  data() {
    return {
      type: true
    }
  }
}
</script> -->

<!-- Отрисовка списков -->
<!-- <template>
  <ol>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text.toUpperCase() }}
    </li>
  </ol>
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

<!-- <template>
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
    <p>Ваше имя: {{ message }}</p>

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
      message: 'еще ',
      description: '',
      isChecked: false
    }
  }
}
</script> -->

<!-- Наблюдатели -->

<!-- <template>
  <div>
    <input v-model="question" placeholder="Задайте вопрос">
    <p>{{ answer }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      question: '',
      answer: 'Задайте вопрос'
    }
  },
  watch: {
    question(newVal) {
      if (newVal.includes('?!')) {
        this.answer = 'Думаю над ответом...'
        setTimeout(() => {
          this.answer = 'Ответ: Да!'
        }, 2000)
      }
    }
  }
}
</script> -->

<template>
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
</script>
