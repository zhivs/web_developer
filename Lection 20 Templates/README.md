# Использование шаблонов при построении веб-приложений

- **Почему шаблоны важны?**
  - Разделение логики и представления.
  - Упрощение поддержки и масштабирования приложений.
  - Повторное использование компонентов интерфейса.

## 1. Роль шаблонизации при построении веб-приложений

### Что такое шаблонизация?
- Шаблон — это файл (обычно HTML), содержащий статический контент и placeholders (заполнители) для динамических данных.
- Шаблонизатор обрабатывает шаблон, заменяя placeholders на реальные данные.

### Зачем нужны шаблоны?
- **Разделение ответственности**:
  - Frontend: HTML/CSS для интерфейса.
  - Backend: Python для логики.
- **Повторное использование**: один шаблон можно использовать для разных данных.
- **Упрощение поддержки**: изменения в дизайне не требуют правки кода.

### Пример без шаблонов
```python
def get_html(name):
    return f"<html><body><h1>Hello, {name}!</h1></body></html>"
```
Проблема: сложно масштабировать и поддерживать.

### Пример с шаблонами
```html
<!-- template.html -->
<html>
<body>
    <h1>Hello, {{ name }}!</h1>
    <p>Your email: {{ email }}</p>
</body>
</html>
```
```python
from jinja2 import Template
with open("template.html") as f:
    template = Template(f.read())
html = template.render(name="John", email="john@example.com")
```

**Практика**:
- Написать простой HTML-шаблон с placeholder для имени пользователя.
- Дополнительно: Добавить placeholder для возраста и условия отображения.

---

## 2. Виды шаблонизаторов

### Популярные шаблонизаторы для Python
1. **Jinja2**:
   - Используется в Flask и других фреймворках.
   - Поддерживает циклы, условия, фильтры.
   - Синтаксис: `{{ variable }}`, `{% for %}`.
2. **Django Templates**:
   - Встроен в Django.
   - Похож на Jinja2, но с уникальными особенностями.
3. **Mako**:
   - Быстрый, но менее популярен.
   - Поддерживает Python-код внутри шаблонов.
4. **Chameleon**:
   - Используется в Pyramid.
   - Поддерживает XML-подобный синтаксис.

### Сравнение
| Шаблонизатор | Простота | Гибкость | Интеграция |
|--------------|----------|----------|------------|
| Jinja2       | Высокая  | Высокая  | Flask, FastAPI |
| Django       | Средняя  | Средняя  | Django        |
| Mako         | Средняя  | Высокая  | Pyramid       |

### Почему Jinja2?
- Простота синтаксиса.
- Широкая поддержка фильтров и расширений.
- Интеграция с популярными фреймворками.

**Обсуждение (5 минут)**:
- Какие шаблонизаторы вы уже использовали?
- В каких случаях стоит выбрать Jinja2?

---

## 3. Использование шаблонов на практике

### Установка Jinja2
```bash
pip install jinja2 flask
```

### Основы работы с Jinja2
1. **Переменные**:
   ```html
   <p>Hello, {{ name }}!</p>
   ```
2. **Условия**:
   ```html
   {% if user %}
       <p>Welcome, {{ user.name }}!</p>
   {% else %}
       <p>Please log in.</p>
   {% endif %}
   ```
3. **Циклы**:
   ```html
   <ul>
   {% for item in items %}
       <li>{{ item }}</li>
   {% endfor %}
   </ul>
   ```
4. **Фильтры**:
   ```html
   <p>{{ text | upper | truncate(10) }}</p>
   ```
5. **Наследование шаблонов**:
   ```html
   <!-- base.html -->
   <html>
   <head><title>{% block title %}{% endblock %}</title></head>
   <body>
       {% block content %}{% endblock %}
   </body>
   </html>
   ```
   ```html
   <!-- child.html -->
   {% extends "base.html" %}
   {% block title %}Child Page{% endblock %}
   {% block content %}
       <h1>Hello from child!</h1>
   {% endblock %}
   ```

### Интеграция с Flask
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/users/<name>")
def greet_user(name):
    return render_template("greet.html", name=name)
```
```html
<!-- templates/greet.html -->
<html>
<body>
    <h1>Hello, {{ name }}!</h1>
</body>
</html>
```

### Практический пример: Список пользователей
1. Создать шаблон для отображения списка пользователей.
2. Реализовать маршрут в Flask для передачи данных в шаблон.

```python
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"}
]  # Симуляция базы данных

@app.route("/users")
def show_users():
    return render_template("users.html", users=users)

@app.route("/add_user", methods=["GET", "POST"])
def add_user():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        new_id = len(users) + 1
        users.append({"id": new_id, "name": name, "email": email})
        return redirect(url_for("show_users"))
    return render_template("add_user.html")
```
```html
<!-- templates/users.html -->
{% extends "base.html" %}
{% block content %}
    <h1>Users</h1>
    <table>
        <tr><th>ID</th><th>Name</th><th>Email</th></tr>
        {% for user in users %}
            <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name | upper }}</td>
                <td>{{ user.email }}</td>
            </tr>
        {% endfor %}
    </table>
    <a href="{{ url_for('add_user') }}">Add User</a>
{% endblock %}
```
```html
<!-- templates/add_user.html -->
{% extends "base.html" %}
{% block content %}
    <h1>Add User</h1>
    <form method="POST">
        <label>Name: <input type="text" name="name"></label><br>
        <label>Email: <input type="email" name="email"></label><br>
        <input type="submit" value="Submit">
    </form>
{% endblock %}
```

**Практика:**
- Создать Flask-приложение с маршрутом, который отображает таблицу с данными о продуктах (название, цена) с использованием Jinja2.
- Дополнительно: Добавить форму для добавления нового продукта.
